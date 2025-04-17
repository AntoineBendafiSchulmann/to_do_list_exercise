import React, { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { changeFilter } from "../features/todos/listSlice";
import { toggleTheme } from "../features/theme/themeSlice";
import { useTodosQuery } from "../features/todos/queries/useTodosQuery";
import TodoItem from "./TodoItem";
import Button from "./Button";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const filter = useSelector((state: RootState) => state.list.filter);
  const { data: todos = [], isLoading, error } = useTodosQuery();

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "done":
        return todos.filter((t) => t.isDone);
      case "not_done":
        return todos.filter((t) => !t.isDone);
      default:
        return todos;
    }
  }, [todos, filter]);

  const remainingCount = useMemo(() => {
    return filteredTodos.filter((t) => !t.isDone).length;
  }, [filteredTodos]);

  // affichage filtré  coté client géré avec redux
  const handleChangeFilter = useCallback((f: "all" | "done" | "not_done") => {
    dispatch(changeFilter(f));
  }, [dispatch]);

  const handleToggleTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  if (isLoading) return <div>Chargement en cours...</div>;
  if (error) return <div>Erreur : {(error as Error).message}</div>;

  return (
    <div>
      <h2>Liste de tâches</h2>

      <div className="flex gap-4">
        <Button onClick={() => handleChangeFilter("all")}>Toutes</Button>
        <Button onClick={() => handleChangeFilter("done")}>Faites</Button>
        <Button onClick={() => handleChangeFilter("not_done")}>Non faites</Button>
      </div>

      <div className="my-4">
        <p>Tâches restantes : {remainingCount}</p>
      </div>

      <div>
        <p>Thème actuel : {theme}</p>
        <Button onClick={handleToggleTheme}>Changer le thème</Button>
      </div>

      <ul> {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoList);