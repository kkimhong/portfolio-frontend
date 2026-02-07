import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUserFn } from "../api/auth-api";

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logoutUserFn,
    onSuccess: () => {
      // Clear ALL data from React Query cache
      queryClient.clear();
      //use window.location for logouts to ensure all states are wiped
      window.location.href = "/auth/login";
    },
  });
};
