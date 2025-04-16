import React, { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { markAllDone, deleteAllDone, changeFilter } from "../features/todos/listSlice";
import { selectFilteredTodos } from "../features/todos/listSelectors";
import { toggleTheme } from "../features/theme/themeSlice";
import TodoItem from "./TodoItem";
import Button from "./Button";
import { Todo } from "../types/Todo";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectFilteredTodos);
  const isLoading = useSelector((state: RootState) => state.list.isLoading);
  const error = useSelector((state: RootState) => state.list.error);
  const theme = useSelector((state: RootState) => state.theme.theme);

  const remainingCount = useMemo(() => {
    return todos.filter((t: Todo) => !t.isDone).length;
  }, [todos]);

  const handleMarkAllDone = useCallback(() => {
    dispatch(markAllDone());
  }, [dispatch]);

  const handleDeleteAllDone = useCallback(() => {
    dispatch(deleteAllDone());
  }, [dispatch]);

  const handleChangeFilter = useCallback(
    (f: "all" | "done" | "not_done") => {
      dispatch(changeFilter(f));
    },
    [dispatch]
  );

  const handleToggleTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }
  if (error) {
    return <div>Erreur: {error}</div>;
  }

  return (
    <div>
      <h2>Liste de tâches</h2>

      <div style={{ margin: "10px 0" }}>
        <Button onClick={() => handleChangeFilter("all")}>Toutes</Button>
        <Button onClick={() => handleChangeFilter("done")}>Faites</Button>
        <Button onClick={() => handleChangeFilter("not_done")}>Non faites</Button>
      </div>

      <div style={{ margin: "10px 0" }}>
        <Button onClick={handleMarkAllDone}>Marquer toutes faites</Button>
        <Button onClick={handleDeleteAllDone}>Supprimer toutes faites</Button>
      </div>

      <div style={{ margin: "10px 0" }}>
        <p>Tâches restantes : {remainingCount}</p>
      </div>

      <div style={{ margin: "10px 0" }}>
        <p>Thème actuel : {theme}</p>
        <Button onClick={handleToggleTheme}>Changer le thème</Button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoList);