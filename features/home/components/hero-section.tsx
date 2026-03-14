"use client";

import { Button } from "@/components/ui/button";
import {
  RiArrowDownLine,
  RiArrowRightUpLine,
  RiSendPlaneLine,
} from "@remixicon/react";
import { useState } from "react";

export function HeroSection() {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    // TODO: hook up to API
    setSubmitted(true);
    setQuestion("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float-slow absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]" />
        <div className="animate-float-medium absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-chart-2/15 blur-[100px]" />
        <div className="animate-float-fast absolute -bottom-32 left-1/3 h-[350px] w-[350px] rounded-full bg-chart-3/10 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                            linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Status badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Vibe coded web
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up animation-delay-100 mb-6 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          <span className="block text-foreground">Hi, I&apos;m</span>
          <span className="animate-gradient-text bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-[length:200%_auto] bg-clip-text text-transparent">
            Hello World
          </span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-up animation-delay-200 mx-auto mb-10 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Full-Stack Developer crafting{" "}
          <span className="font-medium text-foreground">modern</span>,{" "}
          <span className="font-medium text-foreground">performant</span>, and{" "}
          <span className="font-medium text-foreground">beautiful</span> web
          experiences.
        </p>

        {/* Ask a Question input */}
        <form
          onSubmit={handleSubmit}
          className="animate-fade-in-up animation-delay-300 mx-auto mb-10 max-w-lg">
          <div className="group relative flex items-center rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 focus-within:border-primary/50 focus-within:bg-card/60 focus-within:shadow-lg focus-within:shadow-primary/5">
            <input
              id="hero-question-input"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-transparent px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!question.trim()}
              className="mr-2 size-9 shrink-0 rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 disabled:opacity-40 disabled:shadow-none disabled:hover:scale-100">
              <RiSendPlaneLine className="size-4" />
            </Button>
          </div>
          {submitted && (
            <p className="mt-3 animate-fade-in-up text-sm font-medium text-emerald-500">
              ✓ Thanks for your question! I&apos;ll get back to you soon.
            </p>
          )}
        </form>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up animation-delay-300 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="group rounded-xl bg-primary px-8 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
            asChild>
            <a href="#projects">
              View Projects
              <RiArrowDownLine className="ml-2 size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group rounded-xl border-border/50 bg-background/50 px-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:scale-[1.02]"
            asChild>
            <a href="#contact">
              Get in Touch
              <RiArrowRightUpLine className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in-up animation-delay-500 absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <div className="h-8 w-[1.5px] animate-pulse rounded-full bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
