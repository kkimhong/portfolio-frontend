import { Project } from "./columns";

export const data: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js",
    content: "Showcases projects, skills, and contact information.",
    tags: "Next.js, Tailwind, Shadcn",
    isPublished: true,
  },
  {
    id: "2",
    title: "E-commerce App",
    description: "Online book store",
    content: "Users can browse books, add to cart, and checkout.",
    tags: "React, Node.js, MongoDB",
    isPublished: false,
  },
  {
    id: "3",
    title: "Expense Tracker",
    description: "Track daily expenses",
    content: "Includes charts, categories, and monthly summaries.",
    tags: "Vue, Express, MySQL",
    isPublished: true,
  },
  {
    id: "4",
    title: "Booking System",
    description: "Hotel booking management",
    content: "Handles reservations, payments, and reports.",
    tags: "Java, Selenium, TestNG",
    isPublished: true,
  },
];
