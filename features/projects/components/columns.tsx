"use client";
import { ColumnDef } from "@tanstack/react-table";

export type Project = {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string;
  isPublished: boolean;
};

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "content",
    header: "Content",
  },
  {
    accessorKey: "tags",
    header: "Tags",
  },
  {
    accessorKey: "isPublished",
    header: "Published",
    cell: ({ row }) => (row.getValue("isPublished") ? "Yes" : "No"),
  },
];
