import api from "@/lib/axios";

export const ProjectFn = async (): Promise<{ message: string }> => {
  const { data } = await api.get("/project");
  return data;
};
