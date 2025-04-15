import React, { useContext, useMemo, useCallback } from "react";
import TodoItem from "./TodoItem";
import { ThemeContext } from "../context/ThemeContext";
import { TodoStateContext } from "../context/TodoStateContext";
import { TodoDispatchContext } from "../context/TodoDispatchContext";
import { Todo } from "../types/Todo";

const TodoList: React.FC = () => {
  const state = useContext(TodoStateContext);
  const dispatch = useContext(TodoDispatchContext);

  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("Thème actuel:", theme);

  const filteredTodos = useMemo(() => {
    switch (state.filter) {
      case "done":
        return state.todos.filter((t: Todo) => t.isDone);
      case "not_done":
        return state.todos.filter((t: Todo) => !t.isDone);
      default:
        return state.todos;
    }
  }, [state.filter, state.todos]);

  const remainingCount = useMemo(() => {
    return state.todos.filter((t: Todo) => !t.isDone).length;
  }, [state.todos]);

  const markAllDone = useCallback(() => {
    dispatch({ type: "MARK_ALL_DONE" });
  }, [dispatch]);

  const deleteAllDone = useCallback(() => {
    dispatch({ type: "DELETE_ALL_DONE" });
  }, [dispatch]);

  const changeFilter = useCallback((filter: "all" | "done" | "not_done") => {
    dispatch({ type: "CHANGE_FILTER", payload: filter });
  }, [dispatch]);

  console.log("Nombre de tâches restantes:", remainingCount);

  return (
    <div>
      <h2>Liste de tâches</h2>

      <div style={{ margin: "10px 0" }}>
        <button onClick={() => changeFilter("all")}>Toutes</button>
        <button onClick={() => changeFilter("done")}>Faites</button>
        <button onClick={() => changeFilter("not_done")}>Non faites</button>
      </div>

      <div style={{ margin: "10px 0" }}>
        <button onClick={markAllDone}>Marquer toutes faites</button>
        <button onClick={deleteAllDone}>Supprimer toutes faites</button>
      </div>

      <div style={{ margin: "10px 0" }}>
        <p>Tâches restantes : {remainingCount}</p>
      </div>

      <div style={{ margin: "10px 0" }}>
        <p>Thème actuel : {theme}</p>
        <button onClick={toggleTheme}>Changer le thème</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTodos.map((todo: Todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoList);
