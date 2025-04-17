import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useToggleStateTodoMutation = () => { // inverse l’état de la tache (fait ↔ non fait) coté backend
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await axios.put(`https://site--todo-list-pro-react-typescript--5ytnmfswy69s.code.run/todos/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};