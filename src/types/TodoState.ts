import { Todo } from "../types/Todo";
export type FilterType = "all" | "done" | "not_done";

export interface TodoState {
  todos: Todo[];
  filter: FilterType;
}

export interface ListState extends TodoState {
  isLoading: boolean;
  error: string | null;
}