import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const selectTodos = (state: RootState) => state.list.todos;
export const selectFilter = (state: RootState) => state.list.filter;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    console.log("selectFilteredTodos recalculé");
    switch (filter) {
      case "done":
        return todos.filter((t) => t.isDone);
      case "not_done":
        return todos.filter((t) => !t.isDone);
      default:
        return todos;
    }
  }
);
