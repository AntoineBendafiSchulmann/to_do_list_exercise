import React, { FormEvent, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/listSlice";
import { Todo } from "../types/Todo";
import Button from "./Button";

const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const titleRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    const titleValue = titleRef.current?.value.trim();
    if (!titleValue) {
      console.log("Titre vide, on ne fait rien");
      return;
    }
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: titleValue,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    if (titleRef.current) {
      titleRef.current.value = "";
    }
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nouvelle tâche" ref={titleRef} />
      <Button type="submit">Ajouter</Button>
    </form>
  );
};

export default React.memo(TodoForm);
