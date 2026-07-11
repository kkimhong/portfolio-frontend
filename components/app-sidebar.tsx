"use client";

import * as React from "react";

import {
  RiPieChartLine,
  RiCodepenLine,
  RiTerminalBoxLine,
  RiArtboard2Line,
  RiMap2Line,
} from "@remixicon/react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";

// This is sample data.
const data = {
  user: {
    name: "Kruyk",
    email: "static@example.com",
    avatar: "../public/images/morty_profile.png",
  },
  teams: [
    {
      name: "Portfolio",
      logo: RiCodepenLine,
      plan: "Personal",
    },
  ],
  navMain: [
    {
      title: "Main Playground",
      url: "#",
      icon: RiTerminalBoxLine,
      isActive: true,
      items: [
        {
          title: "Blogs",
          url: "/admin/blogs",
        },
        {
          title: "Projects",
          url: "/admin/projects",
        },
        {
          title: "Technologies",
          url: "/admin/technologies",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: RiArtboard2Line,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: RiPieChartLine,
    },
    {
      name: "Travel",
      url: "#",
      icon: RiMap2Line,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
