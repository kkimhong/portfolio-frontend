import api from "@/lib/axios";
import { LoginInput } from "../schemas/auth-schema";

export interface AuthResponse {
  success: boolean;
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
}

export const loginUserFn = async (
  credentials: LoginInput,
): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>("/auth/login", credentials);
  return data;
};

export const logoutUserFn = async (): Promise<{ message: string }> => {
  const { data } = await api.post("/auth/logout");
  return data;
};
