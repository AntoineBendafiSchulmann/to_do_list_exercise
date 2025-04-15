import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { Todo } from "../types/Todo";
import { TodoFromAPI } from "../types/TodoFromAPI";
import { TodoStateContext } from "../context/TodoStateContext";
import { TodoState } from "../types/TodoState";
import { TodoDispatchContext } from "../context/TodoDispatchContext";
import { todoReducer } from "../context/todoReducer";

const INITIAL_STATE: TodoState = {
  todos: [],
  filter: "all",
};

const TodoContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  useEffect(() => {
    axios
      .get<TodoFromAPI[]>(
        "https://site--todo-list-pro-react-typescript--5ytnmfswy69s.code.run/todos"
      )
      .then((response) => {
        console.log("Réponse API (todos) :", response.data);

        const normalized: Todo[] = response.data.map((item) => ({
          id: item._id,
          title: item.title,
          isDone: item.isDone,
        }));

        dispatch({ type: "LOAD_TODOS", payload: normalized });
      })
      .catch((error) => {
        console.error("Erreur lors du fetch des todos :", error);
      });
  }, []);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoContextProvider;
