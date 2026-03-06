"use client";

import { data } from "@/features/projects/components/data";
import {
  RiFolderLine,
  RiCodeSSlashLine,
  RiUserLine,
  RiArrowRightUpLine,
  RiCheckboxCircleLine,
  RiDraftLine,
} from "@remixicon/react";
import Link from "next/link";

const stats = [
  {
    label: "Total Projects",
    value: data.length,
    icon: RiFolderLine,
    href: "/admin/projects",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    label: "Published",
    value: data.filter((p) => p.isPublished).length,
    icon: RiCheckboxCircleLine,
    href: "/admin/projects",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Drafts",
    value: data.filter((p) => !p.isPublished).length,
    icon: RiDraftLine,
    href: "/admin/projects",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

const quickActions = [
  {
    title: "Projects",
    description: "Create, edit, and manage your portfolio projects",
    icon: RiFolderLine,
    href: "/admin/projects",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Tech Stack",
    description: "Manage your skills and technologies",
    icon: RiCodeSSlashLine,
    href: "/admin/tech-stack",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    title: "About / Profile",
    description: "Edit your bio, tagline, and passions",
    icon: RiUserLine,
    href: "/admin/about",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Welcome back! Here&apos;s an overview of your portfolio content.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
            <div
              className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${stat.bg}`}>
              <stat.icon className={`size-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Manage Content</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className="group relative flex flex-col rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
              <div
                className={`mb-4 flex size-11 items-center justify-center rounded-xl ${action.bg}`}>
                <action.icon className={`size-5 ${action.color}`} />
              </div>
              <h3 className="font-semibold mb-1">{action.title}</h3>
              <p className="text-sm text-muted-foreground">
                {action.description}
              </p>
              <div className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full text-muted-foreground/0 transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                <RiArrowRightUpLine className="size-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
