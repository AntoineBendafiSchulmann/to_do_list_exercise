import React from "react";
import { useToggleStateTodoMutation } from "../features/todos/mutations/useToggleStateTodoMutation";
import { useDeleteTodoMutation } from "../features/todos/mutations/useDeleteTodoMutation";
import { TodoItemProps } from "../types/TodoItemProps";
import { FiTrash2 } from "react-icons/fi";
import ButtonDelete from "./ButtonDelete";

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { mutate: toggle } = useToggleStateTodoMutation();
  const { mutate: deleteTodo } = useDeleteTodoMutation();

  const handleToggle = () => {
    toggle(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="flex items-center justify-between border-b py-2">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={handleToggle}
          className="accent-blue-600 w-4 h-4"
        />
        <span
          className={`${
            todo.isDone ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.title}
        </span>
      </label>
      <ButtonDelete onClick={handleDelete}>
        <FiTrash2 />
      </ButtonDelete>
    </div>
  );
};

export default React.memo(TodoItem);
