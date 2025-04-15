import { Todo } from "../types/Todo";
export type FilterType = "all" | "done" | "not_done";


export interface TodoState {
  todos: Todo[];
  filter: FilterType;
}
