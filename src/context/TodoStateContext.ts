import { createContext } from "react";
import { TodoState } from "../types/TodoState";

export type FilterType = "all" | "done" | "not_done";

export const TodoStateContext = createContext<TodoState>({
  todos: [],
  filter: "all",
});
