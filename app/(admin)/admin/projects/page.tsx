import React from "react";
import { NewProjectDrawer } from "@/features/projects/components/new-project";
import { ProjectCardGrid } from "@/features/projects/components/project-card-grid";
import { data } from "@/features/projects/components/data";

const ProjectPage = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage and organize your portfolio projects.
          </p>
        </div>
        <NewProjectDrawer />
      </div>
      <ProjectCardGrid data={data} />
    </div>
  );
};

export default ProjectPage;
