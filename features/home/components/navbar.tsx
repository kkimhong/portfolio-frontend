"use client";

import { Button } from "@/components/ui/button";
import {
  RiMoonLine,
  RiSunLine,
  RiTerminalBoxLine,
  RiUserLine,
  RiFolderLine,
  RiMailSendLine,
} from "@remixicon/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", icon: <RiUserLine className="size-4" /> },
    { label: "Projects", href: "#projects", icon: <RiFolderLine className="size-4" /> },
    { label: "Contact", href: "#contact", icon: <RiMailSendLine className="size-4" /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/60 backdrop-blur-2xl border-b border-border/50 shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
            <RiTerminalBoxLine className="size-4" />
          </span>
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            kruyk
          </span>
          <span className="text-primary">.</span>
        </a>

        {/* Nav links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-primary/5 hover:text-foreground">
              <span className="transition-colors duration-300 group-hover:text-primary">
                {link.icon}
              </span>
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300">
          {mounted && theme === "dark" ? (
            <RiSunLine className="size-5" />
          ) : (
            <RiMoonLine className="size-5" />
          )}
        </Button>
      </div>
    </nav>
  );
}
