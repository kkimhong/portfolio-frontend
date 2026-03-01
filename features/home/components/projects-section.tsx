"use client";

import { Button } from "@/components/ui/button";
import { data } from "@/features/projects/components/data";
import {
  RiFolderLine,
  RiExternalLinkLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "@remixicon/react";
import { useState } from "react";

const PROJECTS_PER_PAGE = 3;

export function ProjectsSection() {
  const publishedProjects = data.filter((p) => p.isPublished);
  const totalPages = Math.ceil(publishedProjects.length / PROJECTS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);

  const paginatedProjects = publishedProjects.slice(
    currentPage * PROJECTS_PER_PAGE,
    (currentPage + 1) * PROJECTS_PER_PAGE
  );

  return (
    <section id="projects" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <RiFolderLine className="size-5" />
            </div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Projects
            </h2>
          </div>
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Selected{" "}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              work
            </span>
          </h3>
          <p className="mt-4 max-w-lg text-muted-foreground">
            A collection of projects that showcase my skills and experience
            across different technologies and domains.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedProjects.map((project, index) => {
            const globalIndex = currentPage * PROJECTS_PER_PAGE + index;
            return (
              <article
                key={project.id}
                className="group relative flex flex-col rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/60 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}>
                {/* Card number */}
                <span className="absolute right-6 top-6 text-6xl font-black text-foreground/[0.03] transition-colors duration-500 group-hover:text-primary/[0.08]">
                  {String(globalIndex + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="relative">
                  <h4 className="mb-2 text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h4>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground/70">
                    {project.content}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-border/30">
                  {project.tags.split(",").map((tag) => (
                    <span
                      key={tag.trim()}
                      className="rounded-md bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary/80 transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                      {tag.trim()}
                    </span>
                  ))}
                </div>

                {/* Hover link indicator */}
                <div className="absolute bottom-6 right-6 flex size-8 items-center justify-center rounded-full bg-primary/0 text-primary/0 transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                  <RiExternalLinkLine className="size-4" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === 0}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="size-10 rounded-xl border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary disabled:opacity-40">
              <RiArrowLeftSLine className="size-5" />
            </Button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`flex size-10 items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 ${
                  i === currentPage
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "border border-border/50 bg-card/30 text-muted-foreground backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                }`}>
                {i + 1}
              </button>
            ))}

            <Button
              variant="outline"
              size="icon"
              disabled={currentPage === totalPages - 1}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="size-10 rounded-xl border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary disabled:opacity-40">
              <RiArrowRightSLine className="size-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
