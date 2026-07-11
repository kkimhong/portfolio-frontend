"use client";

import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Blog Post 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/hero_section.jpg",
  },
  {
    id: 2,
    title: "Blog Post 2",
    description: "This is another blog description for your portfolio.",
    image: "/images/hero_section.jpg",
  },
  {
    id: 3,
    title: "Blog Post 3",
    description: "Write something short about this blog post here.",
    image: "/images/hero_section.jpg",
  },
  {
    id: 4,
    title: "Blog Post 4",
    description: "Another blog card without making the page longer.",
    image: "/images/hero_section.jpg",
  },
  {
    id: 5,
    title: "Blog Post 5",
    description: "This blog will appear when you click next.",
    image: "/images/hero_section.jpg",
  },
];

export default function BlogsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleBlogs = [0, 1, 2].map((offset) => {
    return blogs[(currentIndex + offset) % blogs.length];
  });

  const nextBlogs = () => {
    setCurrentIndex((prev) => (prev + 1) % blogs.length);
  };

  const previousBlogs = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="flex w-full max-w-7xl items-center gap-4">
        {/* Back Button */}
        <button
          onClick={previousBlogs}
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20">
          <RiArrowLeftLine className="size-5" />
        </button>

        {/* Blog Cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map((blog, index) => (
            <div
              key={`${blog.id}-${index}`}
              className={`
                group overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-4 text-white shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15
                ${index === 1 ? "hidden sm:block" : ""}
                ${index === 2 ? "hidden lg:block" : ""}
              `}>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={240}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-5">
                <h2 className="text-2xl font-semibold text-white">
                  {blog.title}
                </h2>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/75">
                  {blog.description}
                </p>

                <button className="mt-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextBlogs}
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20">
          <RiArrowRightLine className="size-5" />
        </button>
      </div>
    </section>
  );
}
