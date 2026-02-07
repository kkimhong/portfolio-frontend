"use client";
import { useMutation } from "@tanstack/react-query";
import { AuthResponse, loginUserFn } from "../api/auth-api";
import { LoginInput } from "../schemas/auth-schema";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  return useMutation<AuthResponse, Error, LoginInput>({
    mutationFn: loginUserFn,
    onSuccess: () => {
      router.push("/admin");
    },
    onError: (error: unknown) => {
      console.error("Login failed", error.response?.data?.message);
    },
  });
};
