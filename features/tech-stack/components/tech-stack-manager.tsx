"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  RiAddLine,
  RiCloseLine,
  RiCodeSSlashLine,
} from "@remixicon/react";

const initialSkills = [
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

export function TechStackManager() {
  const [skills, setSkills] = useState<string[]>(initialSkills);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    const trimmed = newSkill.trim();
    if (!trimmed) return;
    if (skills.some((s) => s.toLowerCase() === trimmed.toLowerCase())) return;
    setSkills((prev) => [...prev, trimmed]);
    setNewSkill("");
  };

  const removeSkill = (skill: string) => {
    setSkills((prev) => prev.filter((s) => s !== skill));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Tech Stack</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage the technologies and skills displayed on your portfolio.
        </p>
      </div>

      {/* Add Skill */}
      <div className="rounded-xl border border-border/50 bg-card p-6">
        <h2 className="text-sm font-semibold flex items-center gap-2 mb-4">
          <RiCodeSSlashLine size={16} className="text-muted-foreground" />
          Add New Skill
        </h2>
        <div className="flex gap-3">
          <Input
            id="new-skill-input"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g. Python, Kubernetes, AWS..."
            className="max-w-sm"
          />
          <Button
            onClick={addSkill}
            disabled={!newSkill.trim()}
            className="gap-2 shrink-0">
            <RiAddLine size={18} />
            Add
          </Button>
        </div>
      </div>

      {/* Current Skills */}
      <div className="rounded-xl border border-border/50 bg-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold flex items-center gap-2">
            <RiCodeSSlashLine size={16} className="text-muted-foreground" />
            Current Skills
          </h2>
          <span className="text-xs text-muted-foreground font-medium px-2.5 py-1 rounded-md bg-muted">
            {skills.length} total
          </span>
        </div>

        {skills.length === 0 ? (
          <p className="text-sm text-muted-foreground py-8 text-center">
            No skills added yet. Add your first skill above!
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="group rounded-lg border border-border/50 bg-background px-3 py-2 text-sm font-medium transition-all duration-200 hover:border-destructive/40 hover:bg-destructive/5">
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-2 inline-flex size-4 items-center justify-center rounded-full text-muted-foreground/60 transition-all duration-200 hover:bg-destructive/20 hover:text-destructive"
                  aria-label={`Remove ${skill}`}>
                  <RiCloseLine className="size-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Save notice */}
      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
        <p className="text-sm text-amber-600 dark:text-amber-400">
          <strong>Note:</strong> Changes are currently stored in local state.
          Connect to your backend API to persist skills.
        </p>
      </div>
    </div>
  );
}
