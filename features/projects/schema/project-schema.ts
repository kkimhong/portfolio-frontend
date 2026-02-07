import { z } from "zod";

export const projectFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description is too short"),
  thumbnail: z.string().url("Must be a valid image URL"),
  tags: z.string().transform((val) => val.split(",").map((t) => t.trim())),
  githubUrl: z.string().url("Invalid GitHub URL").optional().or(z.literal("")),
  liveUrl: z.string().url("Invalid Live URL").optional().or(z.literal("")),
  isPublished: z.boolean().default(false),
});

export type ProjectFormInput = z.infer<typeof projectFormSchema>;
