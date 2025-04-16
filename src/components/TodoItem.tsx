import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todos/listSlice";
import { TodoItemProps } from "../types/TodoItemProps";
import { FiTrash2 } from "react-icons/fi";
import Button from "./Button";

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div style={{ margin: "5px 0" }}>
      <input type="checkbox" checked={todo.isDone} onChange={handleToggle} />
      <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <Button onClick={handleDelete} style={{ color: "red" }}>
        <FiTrash2 />
      </Button>
    </div>
  );
};

export default React.memo(TodoItem);
