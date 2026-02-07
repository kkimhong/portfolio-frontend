import { columns } from "@/features/projects/components/columns";
import { data } from "@/features/projects/components/data";
import { ProjectTable } from "@/features/projects/components/project-table";
import React from "react";

export default function DashBoardPage() {
  return <ProjectTable columns={columns} data={data} />;
}
