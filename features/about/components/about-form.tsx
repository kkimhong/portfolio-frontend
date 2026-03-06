"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  RiUserLine,
  RiMailLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiLoader4Line,
  RiQuillPenLine,
  RiHeart3Line,
  RiCheckLine,
  RiFileTextLine,
} from "@remixicon/react";
import { aboutFormSchema, AboutFormInput } from "../schema/about-schema";
import { useState } from "react";

export function AboutForm() {
  const [saved, setSaved] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AboutFormInput>({
    resolver: zodResolver(aboutFormSchema),
    defaultValues: {
      name: "Kruyk",
      tagline: "Full-Stack Developer",
      bio: "I'm a full-stack developer who loves turning ideas into elegant, functional applications. With a focus on modern web technologies, I build end-to-end solutions that are fast, accessible, and delightful to use.",
      passionate:
        "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or learning about system design and best practices.",
      email: "",
      github: "",
      linkedin: "",
    },
  });

  const onSubmit = async (data: AboutFormInput) => {
    console.log("About form submitted:", data);
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">About / Profile</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Edit your personal information displayed on the portfolio home page.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Info Card */}
        <div className="rounded-xl border border-border/50 bg-card p-6 space-y-5">
          <h2 className="text-sm font-semibold flex items-center gap-2 text-muted-foreground uppercase tracking-widest">
            <RiUserLine size={16} />
            Personal Info
          </h2>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            {/* Name */}
            <div className="space-y-1.5 flex-1">
              <label className="text-sm font-semibold flex items-center gap-2">
                <RiUserLine size={16} className="text-muted-foreground" />
                Display Name
              </label>
              <Input {...register("name")} placeholder="Your name" />
              {errors.name && (
                <p className="text-destructive text-xs">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Tagline */}
            <div className="space-y-1.5 flex-1">
              <label className="text-sm font-semibold flex items-center gap-2">
                <RiQuillPenLine size={16} className="text-muted-foreground" />
                Tagline
              </label>
              <Input
                {...register("tagline")}
                placeholder="e.g. Full-Stack Developer"
              />
              {errors.tagline && (
                <p className="text-destructive text-xs">
                  {errors.tagline.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bio & Passion Card */}
        <div className="rounded-xl border border-border/50 bg-card p-6 space-y-5">
          <h2 className="text-sm font-semibold flex items-center gap-2 text-muted-foreground uppercase tracking-widest">
            <RiFileTextLine size={16} />
            Bio & Passions
          </h2>

          {/* Bio */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold flex items-center gap-2">
              <RiFileTextLine size={16} className="text-muted-foreground" />
              Bio
            </label>
            <Textarea
              {...register("bio")}
              placeholder="Tell visitors about yourself..."
              rows={4}
            />
            {errors.bio && (
              <p className="text-destructive text-xs">{errors.bio.message}</p>
            )}
          </div>

          {/* Passionate About */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold flex items-center gap-2">
              <RiHeart3Line size={16} className="text-muted-foreground" />
              Passionate About
            </label>
            <Textarea
              {...register("passionate")}
              placeholder="What drives you outside of coding?"
              rows={3}
            />
            {errors.passionate && (
              <p className="text-destructive text-xs">
                {errors.passionate.message}
              </p>
            )}
          </div>
        </div>

        {/* Social Links Card */}
        <div className="rounded-xl border border-border/50 bg-card p-6 space-y-5">
          <h2 className="text-sm font-semibold flex items-center gap-2 text-muted-foreground uppercase tracking-widest">
            <RiMailLine size={16} />
            Social Links
          </h2>

          <div className="grid gap-5 sm:grid-cols-3">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <RiMailLine size={16} className="text-muted-foreground" />
                Email
              </label>
              <Input {...register("email")} placeholder="hello@example.com" />
              {errors.email && (
                <p className="text-destructive text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* GitHub */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <RiGithubLine size={16} className="text-muted-foreground" />
                GitHub URL
              </label>
              <Input
                {...register("github")}
                placeholder="https://github.com/..."
              />
              {errors.github && (
                <p className="text-destructive text-xs">
                  {errors.github.message}
                </p>
              )}
            </div>

            {/* LinkedIn */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold flex items-center gap-2">
                <RiLinkedinBoxLine
                  size={16}
                  className="text-muted-foreground"
                />
                LinkedIn URL
              </label>
              <Input
                {...register("linkedin")}
                placeholder="https://linkedin.com/in/..."
              />
              {errors.linkedin && (
                <p className="text-destructive text-xs">
                  {errors.linkedin.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center gap-4">
          <Button type="submit" disabled={isSubmitting} className="px-8">
            {isSubmitting ? (
              <RiLoader4Line className="animate-spin mr-2" size={18} />
            ) : null}
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
          {saved && (
            <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-500 animate-fade-in-up">
              <RiCheckLine size={18} />
              Saved successfully!
            </span>
          )}
        </div>
      </form>

      {/* Note */}
      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
        <p className="text-sm text-amber-600 dark:text-amber-400">
          <strong>Note:</strong> Changes are currently stored in local state.
          Connect to your backend API to persist your profile.
        </p>
      </div>
    </div>
  );
}
