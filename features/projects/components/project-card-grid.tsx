"use client";

import { Project } from "./columns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  RiCheckboxCircleLine,
  RiDraftLine,
  RiDeleteBinLine,
  RiEditLine,
  RiEyeLine,
  RiEyeOffLine,
  RiMoreLine,
  RiExternalLinkLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "@remixicon/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const PROJECTS_PER_PAGE = 6;

export function ProjectCardGrid({ data }: { data: Project[] }) {
  const [projects, setProjects] = useState<Project[]>(data);
  const [currentPage, setCurrentPage] = useState(0);

  const togglePublish = (id: string) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, isPublished: !p.isPublished } : p
      )
    );
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const published = projects.filter((p) => p.isPublished);
  const drafts = projects.filter((p) => !p.isPublished);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = projects.slice(
    currentPage * PROJECTS_PER_PAGE,
    (currentPage + 1) * PROJECTS_PER_PAGE
  );

  // Reset to last valid page if items are deleted
  if (currentPage > 0 && paginatedProjects.length === 0) {
    setCurrentPage(Math.max(0, totalPages - 1));
  }

  return (
    <div className="space-y-8">
      {/* Stats row */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm">
          <div className="flex size-6 items-center justify-center rounded-md bg-emerald-500/10">
            <RiCheckboxCircleLine className="size-3.5 text-emerald-500" />
          </div>
          <span className="text-muted-foreground">
            <span className="font-semibold text-foreground">
              {published.length}
            </span>{" "}
            Published
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex size-6 items-center justify-center rounded-md bg-amber-500/10">
            <RiDraftLine className="size-3.5 text-amber-500" />
          </div>
          <span className="text-muted-foreground">
            <span className="font-semibold text-foreground">
              {drafts.length}
            </span>{" "}
            Drafts
          </span>
        </div>
      </div>

      {/* Card grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col rounded-xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
            {/* Header row: status + actions */}
            <div className="mb-4 flex items-start justify-between">
              <Badge
                variant={project.isPublished ? "default" : "secondary"}
                className={`rounded-md text-xs font-medium ${
                  project.isPublished
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/15"
                    : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/15"
                }`}>
                {project.isPublished ? (
                  <RiCheckboxCircleLine className="mr-1 size-3" />
                ) : (
                  <RiDraftLine className="mr-1 size-3" />
                )}
                {project.isPublished ? "Published" : "Draft"}
              </Badge>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8 rounded-lg text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 hover:text-foreground hover:bg-muted">
                    <RiMoreLine className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44">
                  <DropdownMenuItem className="gap-2 cursor-pointer">
                    <RiEditLine className="size-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2 cursor-pointer">
                    <RiExternalLinkLine className="size-4" />
                    Preview
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="gap-2 cursor-pointer"
                    onClick={() => togglePublish(project.id)}>
                    {project.isPublished ? (
                      <>
                        <RiEyeOffLine className="size-4" />
                        Unpublish
                      </>
                    ) : (
                      <>
                        <RiEyeLine className="size-4" />
                        Publish
                      </>
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="gap-2 cursor-pointer text-destructive focus:text-destructive"
                    onClick={() => deleteProject(project.id)}>
                    <RiDeleteBinLine className="size-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Title & description */}
            <h3 className="mb-1.5 text-base font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mb-2 text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <p className="mb-4 text-xs text-muted-foreground/70 leading-relaxed line-clamp-2">
              {project.content}
            </p>

            {/* Tags */}
            <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-border/30">
              {project.tags.split(",").map((tag) => (
                <span
                  key={tag.trim()}
                  className="rounded-md bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors duration-200 group-hover:bg-primary/5 group-hover:text-primary/80">
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="icon"
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="size-9 rounded-xl">
            <RiArrowLeftSLine className="size-5" />
          </Button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`flex size-9 items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 ${
                i === currentPage
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "border border-border/50 bg-card text-muted-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              }`}>
              {i + 1}
            </button>
          ))}

          <Button
            variant="outline"
            size="icon"
            disabled={currentPage === totalPages - 1}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="size-9 rounded-xl">
            <RiArrowRightSLine className="size-5" />
          </Button>
        </div>
      )}

      {projects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-muted">
            <RiDraftLine className="size-6 text-muted-foreground" />
          </div>
          <h3 className="font-semibold mb-1">No projects yet</h3>
          <p className="text-sm text-muted-foreground">
            Create your first project to get started.
          </p>
        </div>
      )}
    </div>
  );
}
