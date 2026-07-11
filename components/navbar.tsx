"use client";

import { Separator } from "@/components/ui/separator";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    {
      label: "Blogs",
      href: "/blogs",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ];

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-500
      ">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-white">
            k.kimhong
          </span>
          <span className="text-white">.</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                group relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white
                transition-colors duration-300
                after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full
                after:origin-left after:scale-x-0 after:bg-current
                after:transition-transform after:duration-300
                hover:after:scale-x-100
              ">
              {link.label}
            </Link>
          ))}

          <Separator orientation="vertical" className="mx-4 my-4 h-6" />

          <Link
            href="#sign-in"
            className="
              group relative flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white
              transition-colors duration-300
              after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full
              after:origin-left after:scale-x-0 after:bg-current
              after:transition-transform after:duration-300
              hover:after:scale-x-100
            ">
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
            flex size-10 text-white items-center justify-center md:hidden
          "
          aria-label="Toggle menu">
          {mobileOpen ? (
            <RiCloseLine className="size-5" />
          ) : (
            <RiMenuLine className="size-5" />
          )}
        </button>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div
            className="
              absolute left-6 right-6 top-full mt-3
              border border-white/20 bg-white/10 text-white/80
            backdrop-blur-md p-4
              shadow-lg md:hidden
            ">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                   px-4 py-3 text-sm font-medium text-white
                    transition-colors hover:bg-white/10
                  ">
                  {link.label}
                </Link>
              ))}

              <div className="my-2 h-px bg-white/20" />

              <Link
                href="#sign-in"
                onClick={() => setMobileOpen(false)}
                className="
                   px-4 py-3 text-sm font-medium text-white
                  transition-colors hover:bg-white/10
                ">
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
