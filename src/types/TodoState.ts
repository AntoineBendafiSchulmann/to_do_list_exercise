export type FilterType = "all" | "done" | "not_done";

export interface TodoState {
  filter: FilterType;
}