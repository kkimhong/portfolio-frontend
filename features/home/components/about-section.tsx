"use client";

import { Badge } from "@/components/ui/badge";
import { RiUserLine, RiCodeSSlashLine } from "@remixicon/react";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Prisma",
  "Git",
  "Docker",
  "REST APIs",
  "MongoDB",
  "Java",
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <RiUserLine className="size-5" />
            </div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Me
            </h2>
          </div>
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Passionate about building{" "}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              great software
            </span>
          </h3>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a full-stack developer who loves turning ideas into
              elegant, functional applications. With a focus on modern web
              technologies, I build end-to-end solutions that are fast,
              accessible, and delightful to use.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or learning about
              system design and best practices.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "4+", label: "Projects" },
                { value: "5+", label: "Technologies" },
                { value: "∞", label: "Curiosity" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/50 bg-card/50 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5">
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              <RiCodeSSlashLine className="size-4" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-lg border border-border/50 bg-card/80 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:scale-105 cursor-default">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
