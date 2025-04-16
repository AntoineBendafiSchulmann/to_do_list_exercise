import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "../../types/Todo";
import { TodoFromAPI } from "../../types/TodoFromAPI";
import { TodoState, ListState } from "../../types/TodoState";

const initialState: ListState = {
  todos: [],
  filter: "all",
  isLoading: false,
  error: null,
};

export const fetchList = createAsyncThunk("list/fetchList", async () => {
  const response = await axios.get<TodoFromAPI[]>(
    "https://site--todo-list-pro-react-typescript--5ytnmfswy69s.code.run/todos"
  );
  console.log("fetchList response:", response.data);

  const mapped: Todo[] = response.data.map((item) => ({
    id: item._id,
    title: item.title,
    isDone: item.isDone,
  }));
  return mapped;
});

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    loadTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
    },
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    markAllDone(state) {
      state.todos.forEach((t) => {
        t.isDone = true;
      });
    },
    deleteAllDone(state) {
      state.todos = state.todos.filter((t) => !t.isDone);
    },
    changeFilter(state, action: PayloadAction<TodoState["filter"]>) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        console.log("fetchList fulfilled payload:", action.payload);
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(fetchList.rejected, (state) => {
        state.isLoading = false;
        state.error = "Erreur lors du fetch";
      });
  },
});

export const { loadTodos, addTodo, deleteTodo, toggleTodo, markAllDone, deleteAllDone, changeFilter } = listSlice.actions;
export default listSlice.reducer;
