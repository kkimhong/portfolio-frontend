"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RiAddLine,
  RiGithubLine,
  RiGlobalLine,
  RiImageLine,
  RiLoader4Line,
  RiPriceTag3Line,
  RiTentLine,
  RiFileList3Line,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { projectFormSchema, ProjectFormInput } from "../schema/project-schema";
import { Checkbox } from "@/components/ui/checkbox";

export function NewProjectDrawer() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProjectFormInput>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: "",
      githubUrl: "",
      liveUrl: "",
      isPublished: false,
    },
  });

  const onSubmit = async (data: ProjectFormInput) => {
    console.log("Full Schema Data Submit:", data);
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="gap-2">
          <RiAddLine size={18} /> New Project
        </Button>
      </DrawerTrigger>

      <DrawerContent className="ml-auto h-full w-full max-w-md rounded-l-xl rounded-r-none border-l">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full">
          <DrawerHeader className="border-b">
            <DrawerTitle className="text-2xl font-bold">
              Create Project
            </DrawerTitle>
            <DrawerDescription>
              Fill out all fields defined in your Zod schema.
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {/* Title - z.string().min(3) */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <RiTentLine size={16} className="text-muted-foreground" /> Title
              </label>
              <Input {...register("title")} placeholder="Enter project name" />
              {errors.title && (
                <p className="text-destructive text-xs">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Description - z.string().min(10) */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <RiFileList3Line size={16} className="text-muted-foreground" />{" "}
                Description
              </label>
              <Textarea
                {...register("description")}
                placeholder="Detailed project explanation..."
                rows={4}
              />
              {errors.description && (
                <p className="text-destructive text-xs">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Thumbnail - z.string().url() */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <RiImageLine size={16} className="text-muted-foreground" />{" "}
                Thumbnail URL
              </label>
              <Input {...register("thumbnail")} placeholder="https://..." />
              {errors.thumbnail && (
                <p className="text-destructive text-xs">
                  {errors.thumbnail.message}
                </p>
              )}
            </div>

            {/* Tags - z.string().transform(...) */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <RiPriceTag3Line size={16} className="text-muted-foreground" />{" "}
                Tags
              </label>
              <Input
                {...register("tags")}
                placeholder="React, Tailwind, Node.js"
              />
              <p className="text-[10px] text-muted-foreground italic">
                Separate with commas
              </p>
              {errors.tags && (
                <p className="text-destructive text-xs">
                  {errors.tags.message}
                </p>
              )}
            </div>

            {/* URLs Row - Both .url().optional() */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <RiGithubLine size={16} className="text-muted-foreground" />{" "}
                  GitHub URL
                </label>
                <Input
                  {...register("githubUrl")}
                  placeholder="https://github..."
                />
                {errors.githubUrl && (
                  <p className="text-destructive text-xs">
                    {errors.githubUrl.message}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <RiGlobalLine size={16} className="text-muted-foreground" />{" "}
                  Live URL
                </label>
                <Input {...register("liveUrl")} placeholder="https://..." />
                {errors.liveUrl && (
                  <p className="text-destructive text-xs">
                    {errors.liveUrl.message}
                  </p>
                )}
              </div>
            </div>

            {/* isPublished - z.boolean() */}
            <div className="flex items-center justify-between border p-4 bg-muted/20">
              <div className="space-y-0.5">
                <label
                  htmlFor="isPublished"
                  className="text-sm font-semibold cursor-pointer">
                  Public Visibility
                </label>
                <p className="text-xs text-muted-foreground">
                  Make this project live now.
                </p>
              </div>
              <Checkbox
                id="isPublished"
                {...register("isPublished")}
                className="h-5 w-5 border-gray-300 text-primary transition-all cursor-pointer"
              />
            </div>
          </div>

          <DrawerFooter className="border-t pt-4">
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <RiLoader4Line className="animate-spin mr-2" size={18} />
              ) : null}
              {isSubmitting ? "Creating..." : "Save Project"}
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
