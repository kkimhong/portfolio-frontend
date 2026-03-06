import { z } from "zod";

export const aboutFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  tagline: z.string().min(5, "Tagline must be at least 5 characters"),
  bio: z.string().min(20, "Bio must be at least 20 characters"),
  passionate: z.string().min(10, "Tell us more about your passions"),
  email: z.string().email("Must be a valid email").optional().or(z.literal("")),
  github: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
  linkedin: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
});

export type AboutFormInput = z.infer<typeof aboutFormSchema>;
