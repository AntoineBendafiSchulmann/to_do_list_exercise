import React, { useRef, FormEvent, useCallback, useContext } from "react";
import { TodoDispatchContext } from "../context/TodoDispatchContext";
import { Todo } from "../types/Todo";

const TodoForm: React.FC = () => {
  const dispatch = useContext(TodoDispatchContext);
  const titleRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    const titleValue = titleRef.current?.value.trim();
    if (!titleValue) {
      console.log("Titre vide, on ne fait rien");
      return;
    }

    const newId = Date.now().toString();

    const newTodo: Todo = {
      id: newId, 
      title: titleValue,
      isDone: false,
    };

    console.log("Ajout d'une nouvelle tâche :", newTodo);

    dispatch({ type: "ADD_TODO", payload: newTodo });

    if (titleRef.current) {
      titleRef.current.value = "";
    }
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nouvelle tâche" ref={titleRef} />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default React.memo(TodoForm);
