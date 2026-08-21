"use client";

import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";

const POSTS_PER_PAGE = 4;

const blogs = [
  {
    id: 1,
    title: "Building interfaces that stay calm under pressure",
    description:
      "A few layout and interaction choices that make everyday product screens easier to scan and use.",
    category: "Frontend",
    publishedAt: "Mar 18, 2026",
    readTime: "5 min read",
    image: "/images/hero_section.jpg",
  },
  {
    id: 2,
    title: "A practical approach to API error states",
    description:
      "How to turn failure responses into clear next steps without adding noise to the interface.",
    category: "Engineering",
    publishedAt: "Mar 4, 2026",
    readTime: "4 min read",
    image: "/images/hero_section.jpg",
  },
  {
    id: 3,
    title: "Designing a better project handoff",
    description:
      "The small bits of context that keep product, design, and engineering moving in the same direction.",
    category: "Process",
    publishedAt: "Feb 22, 2026",
    readTime: "6 min read",
    image: "/images/hero_section.jpg",
  },
  {
    id: 4,
    title: "What I look for before starting a refactor",
    description:
      "A lightweight checklist for understanding risk, dependencies, and the user flow before changing code.",
    category: "Engineering",
    publishedAt: "Feb 10, 2026",
    readTime: "7 min read",
    image: "/images/hero_section.jpg",
  },
  {
    id: 5,
    title: "Keeping a portfolio focused",
    description:
      "Why a few well-explained projects are more useful than a long list of disconnected screenshots.",
    category: "Career",
    publishedAt: "Jan 29, 2026",
    readTime: "3 min read",
    image: "/images/hero_section.jpg",
  },
  {
    id: 6,
    title: "Making loading states feel intentional",
    description:
      "Patterns for showing progress that preserve layout, reduce uncertainty, and keep people moving.",
    category: "Frontend",
    publishedAt: "Jan 17, 2026",
    readTime: "4 min read",
    image: "/images/hero_section.jpg",
  },
  {
    id: 7,
    title: "Notes from rebuilding a personal site",
    description:
      "A look at the choices behind a smaller, more durable portfolio that can grow with the work.",
    category: "Personal",
    publishedAt: "Jan 5, 2026",
    readTime: "5 min read",
    image: "/images/hero_section.jpg",
  },
  {
    id: 8,
    title: "Useful defaults for responsive layouts",
    description:
      "How grid, spacing, and type decisions can make a layout feel considered on every screen size.",
    category: "Frontend",
    publishedAt: "Dec 19, 2025",
    readTime: "6 min read",
    image: "/images/hero_section.jpg",
  },
  {
    id: 9,
    title: "Writing better empty states",
    description:
      "A simple structure for helping people understand a blank screen and decide what to do next.",
    category: "Product",
    publishedAt: "Dec 3, 2025",
    readTime: "3 min read",
    image: "/images/hero_section.jpg",
  },
  {
    id: 10,
    title: "How I review a pull request",
    description:
      "A focused code-review routine that balances correctness, product behavior, and maintainability.",
    category: "Engineering",
    publishedAt: "Nov 21, 2025",
    readTime: "5 min read",
    image: "/images/hero_section.jpg",
  },
  {
    id: 11,
    title: "Choosing meaningful visual hierarchy",
    description:
      "A short guide to using contrast and spacing to make the important parts of a page obvious.",
    category: "Design",
    publishedAt: "Nov 8, 2025",
    readTime: "4 min read",
    image: "/images/hero_section.jpg",
  },
  {
    id: 12,
    title: "Small habits that make debugging easier",
    description:
      "A few repeatable practices for reducing guesswork when a bug only appears at the worst possible time.",
    category: "Engineering",
    publishedAt: "Oct 26, 2025",
    readTime: "6 min read",
    image: "/images/hero_section.jpg",
  },
];

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const visibleBlogs = blogs.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const firstPost = startIndex + 1;
  const lastPost = Math.min(startIndex + POSTS_PER_PAGE, blogs.length);

  const changePage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
      <div className="mx-auto w-full max-w-6xl">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.16em] text-white/60 uppercase">
              Journal
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
              Writing and notes
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
              Thoughts on building digital products, improving the craft, and
              learning in public.
            </p>
          </div>

          <p className="text-sm tabular-nums text-white/60">
            {firstPost}-{lastPost} of {blogs.length} posts
          </p>
        </header>

        <Separator className="mt-7 bg-white/20 sm:mt-8" />

        <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {visibleBlogs.map((blog) => (
            <article
              key={blog.id}
              className="group flex min-w-0 flex-col overflow-hidden rounded-md border border-white/20 bg-white/10 shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/15">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={blog.image}
                  alt=""
                  fill
                  sizes="(max-width: 639px) 50vw, (max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/15" />
              </div>

              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <div className="flex items-center justify-between gap-2 text-[10px] font-medium tracking-[0.14em] text-white/60 uppercase sm:text-xs">
                  <span className="truncate">{blog.category}</span>
                  <span className="hidden sm:inline">{blog.readTime}</span>
                </div>

                <h2 className="mt-2 text-sm font-semibold leading-5 text-white sm:text-lg sm:leading-6">
                  {blog.title}
                </h2>

                <p className="mt-2 hidden text-sm leading-6 text-white/70 sm:line-clamp-3">
                  {blog.description}
                </p>

                <div className="mt-3 border-t border-white/10 pt-2 text-[11px] text-white/55 sm:mt-auto sm:pt-3 sm:text-xs">
                  {blog.publishedAt}
                </div>
              </div>
            </article>
          ))}
        </div>

        <nav
          aria-label="Blog pagination"
          className="mt-8 flex items-center justify-center gap-2 sm:mt-10">
          <button
            type="button"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Go to previous page"
            title="Previous page"
            className="flex size-9 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40">
            <RiArrowLeftLine className="size-4" />
          </button>

          <div className="flex items-center gap-1" aria-label="Page selection">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => changePage(page)}
                  aria-current={currentPage === page ? "page" : undefined}
                  aria-label={`Go to page ${page}`}
                  className={`flex size-9 items-center justify-center rounded-md border text-sm font-medium transition ${
                    currentPage === page
                      ? "border-white bg-white text-black shadow-lg"
                      : "border-white/20 bg-white/10 text-white backdrop-blur-md hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/20"
                  }`}>
                  {page}
                </button>
              )
            )}
          </div>

          <button
            type="button"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Go to next page"
            title="Next page"
            className="flex size-9 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40">
            <RiArrowRightLine className="size-4" />
          </button>
        </nav>
      </div>
    </section>
  );
}
