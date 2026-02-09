import React from "react";
import { NewProjectDrawer } from "@/features/projects/components/new-project";
import { ProjectTable } from "@/features/projects/components/project-table";
import { columns } from "@/features/projects/components/columns";
import { data } from "@/features/projects/components/data";

const ProjectPage = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-lg font-bold">Projects</h1>
        <NewProjectDrawer />
      </div>
      <ProjectTable columns={columns} data={data}/>
    </div>
  );
};

export default ProjectPage;
