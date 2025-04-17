import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "../../../types/Todo";
import { TodoFromAPI } from "../../../types/TodoFromAPI";

const fetchTodos = async (): Promise<Todo[]> => { // requete pour récupérer les taches coté backend
  const { data } = await axios.get<TodoFromAPI[]>(
    "https://site--todo-list-pro-react-typescript--5ytnmfswy69s.code.run/todos"
  );
  return data.map((item) => ({
    id: item._id,
    title: item.title,
    isDone: item.isDone,
  }));
};

export const useTodosQuery = () =>
  useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 1000 * 10,
});
