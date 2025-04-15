import { createContext, Dispatch } from "react";
import { Todo } from "../types/Todo";
import { FilterType } from "./TodoStateContext";

export type Action =
  | { type: "LOAD_TODOS"; payload: Todo[] }
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "MARK_ALL_DONE" }
  | { type: "DELETE_ALL_DONE" }
  | { type: "CHANGE_FILTER"; payload: FilterType };

export const TodoDispatchContext = createContext<Dispatch<Action>>(() => {
  throw new Error("No provider for TodoDispatchContext!");
});
