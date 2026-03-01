"use client";

import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailLine,
  RiMailSendLine,
} from "@remixicon/react";

const socials = [
  {
    icon: <RiGithubFill className="size-5" />,
    label: "GitHub",
    href: "https://github.com",
  },
  {
    icon: <RiLinkedinBoxFill className="size-5" />,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: <RiMailLine className="size-5" />,
    label: "Email",
    href: "mailto:hello@example.com",
  },
];

export function ContactFooter() {
  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Top divider */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-3xl text-center">
        {/* Section header */}
        <div className="mb-4 inline-flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <RiMailSendLine className="size-5" />
          </div>
        </div>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
          Contact
        </h2>
        <h3 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            connect
          </span>
        </h3>
        <p className="mb-10 text-lg text-muted-foreground">
          Have a project in mind or just want to chat? Feel free to reach out —
          I&apos;m always open to new opportunities and conversations.
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-xl border border-border/50 bg-card/30 px-5 py-3 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/5">
              <span className="transition-transform duration-300 group-hover:scale-110">
                {social.icon}
              </span>
              {social.label}
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t border-border/30 pt-8">
          <p className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-muted-foreground/80">Kruyk</span>.
            Built with{" "}
            <span className="text-primary/60">Next.js</span> &{" "}
            <span className="text-primary/60">Tailwind CSS</span>.
          </p>
        </footer>
      </div>
    </section>
  );
}
