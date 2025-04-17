import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface AddTodoPayload {
  title: string;
}

export const useAddTodoMutation = () => { // créer une nouvelle todo coté backend
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: AddTodoPayload) => {
      await axios.post("https://site--todo-list-pro-react-typescript--5ytnmfswy69s.code.run/todos", body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};