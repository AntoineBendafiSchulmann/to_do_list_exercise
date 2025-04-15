import { Action } from "./TodoDispatchContext";
import { TodoState } from "../types/TodoState";

export function todoReducer(state: TodoState, action: Action): TodoState {
  switch (action.type) {
    case "LOAD_TODOS":
      return { ...state, todos: action.payload };

    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload ? { ...t, isDone: !t.isDone } : t
        ),
      };

    case "MARK_ALL_DONE":
      return {
        ...state,
        todos: state.todos.map((t) => ({ ...t, isDone: true })),
      };

    case "DELETE_ALL_DONE":
      return {
        ...state,
        todos: state.todos.filter((t) => !t.isDone),
      };

    case "CHANGE_FILTER":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}
