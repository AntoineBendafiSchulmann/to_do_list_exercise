import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/todos/listSlice";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    list: listReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;