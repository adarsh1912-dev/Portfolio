import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { contact, profile } from "../data/content.js";
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx";

const links = [
  ...profile.socials.map((social) => ({
    label: social.label,
    value: social.handle,
    href: social.href,
    icon: social.label === "GitHub" ? GithubIcon : LinkedinIcon,
    external: true,
  })),
  {
    label: "Résumé",
    value: "PDF document",
    href: profile.resumeUrl,
    icon: FileText,
    external: false,
    download: true,
  },
];

export default function Contact() {
  const availableLinks = links.filter((link) => Boolean(link.href));

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 border-t border-line"
    >
      <div className="shell py-20 md:py-28 lg:py-32">
        <div className="flex items-baseline justify-between gap-4">
          <p className="mono-label">05 — Contact</p>
          <p className="mono-label hidden sm:block">Open to internships</p>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <h2
              id="contact-title"
              className="text-balance font-display text-[clamp(2.6rem,6.4vw,5.25rem)] leading-[0.95] tracking-[-0.025em]"
            >
              {contact.lead} <span className="italic">{contact.accent}</span>
            </h2>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-9 inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 border-b border-line pb-3 transition-colors duration-200 hover:border-accent"
            >
              <Mail
                className="size-5 text-accent"
                aria-hidden="true"
                strokeWidth={1.75}
              />
              <span className="break-all text-lg text-ink transition-colors duration-200 group-hover:text-accent md:text-2xl">
                {profile.email}
              </span>
              <ArrowUpRight
                className="size-4 text-ink-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                aria-hidden="true"
                strokeWidth={1.75}
              />
            </a>
          </div>

          <div className="md:col-span-4 md:pt-2">
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-ink-muted">
              {contact.body}
            </p>
            <p className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-ink-faint">
              <span aria-hidden="true" className="size-1.5 shrink-0 bg-accent" />
              {profile.location}
            </p>
          </div>
        </div>

        <div
          className={`mt-16 border-t border-line lg:grid ${
            availableLinks.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
          }`}
        >
          {availableLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                {...(link.download ? { download: true } : {})}
                className="group flex min-h-[5.5rem] items-center justify-between gap-4 border-b border-line py-5 transition-colors duration-200 hover:bg-surface/50 lg:border-b-0 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Icon
                    className="size-4 shrink-0 text-ink-faint transition-colors duration-200 group-hover:text-accent"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                  <span className="min-w-0">
                    <span className="mono-label block">{link.label}</span>
                    <span className="mt-1 block truncate text-sm text-ink-muted transition-colors duration-200 group-hover:text-ink">
                      {link.value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-ink-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
