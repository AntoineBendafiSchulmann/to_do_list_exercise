import React from "react";
import { useForm } from "react-hook-form";
import { useAddTodoMutation } from "../features/todos/mutations/useAddTodoMutation";
import Button from "./Button";

type FormValues = {
  title: string;
};

const TodoForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    mode: "onTouched"
  });
  const { mutate } = useAddTodoMutation();

  const onSubmit = (data: FormValues) => {
    const title = data.title.trim();
    if (!title) return;
    mutate({ title });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center gap-4 mb-6"
    >
      <input
        type="text"
        placeholder="Nouvelle tâche"
        {...register("title", { required: "Le titre est requis" })}
        className={`flex-1 border px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.title ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
      />
      {errors.title && <span className="text-red-500">{errors.title.message}</span>}
      <Button type="submit">Ajouter</Button>
    </form>
  );
};

export default React.memo(TodoForm);
