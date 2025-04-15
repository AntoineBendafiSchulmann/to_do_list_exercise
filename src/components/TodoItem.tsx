import React, { useContext } from "react";
import { TodoDispatchContext } from "../context/TodoDispatchContext";
import { TodoItemProps } from "../types/TodoItemProps";
import { FiTrash2 } from "react-icons/fi";



const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useContext(TodoDispatchContext);

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: todo.id });
  };

  return (
    <div style={{ margin: "5px 0" }}>
      <input type="checkbox" checked={todo.isDone} onChange={handleToggle} />
      <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
        {todo.title}
      </span>{" "}
      <button onClick={handleDelete} style={{ color: "red" }}>
        <FiTrash2 />
      </button>
    </div>
  );
};

export default React.memo(TodoItem);
