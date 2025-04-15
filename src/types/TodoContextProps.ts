import { Dispatch } from "react";
import { TodoState } from "./TodoState";
import { Action } from "../context/TodoDispatchContext";

export interface TodoContextProps {
  state: TodoState;
  dispatch: Dispatch<Action>;
}