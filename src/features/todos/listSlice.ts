import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "../../types/TodoState";

const initialState: TodoState = {
  filter: "all",
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<TodoState["filter"]>) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = listSlice.actions;

export default listSlice.reducer;