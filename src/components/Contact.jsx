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
      className="night-panel scroll-mt-24"
    >
      <div className="shell py-20 md:py-28 lg:py-32">
        <div className="flex items-center justify-between gap-4 border-t border-line pt-5">
          <p className="mono-label">05 / Contact</p>
          <p className="mono-label hidden sm:block">{profile.location}</p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <h2
              id="contact-title"
              className="max-w-3xl font-display text-[clamp(3rem,6.6vw,6rem)] leading-[0.9] tracking-[-0.04em]"
            >
              {contact.lead}{" "}
              <span className="text-accent">{contact.accent}</span>
            </h2>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-12 flex max-w-3xl items-end justify-between gap-4 border-b border-line pb-4 transition-colors duration-200 hover:border-accent"
            >
              <span className="flex min-w-0 items-center gap-3">
                <Mail
                  className="size-5 shrink-0 text-accent"
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
                <span className="break-all text-[clamp(1.1rem,2.4vw,2.05rem)] tracking-[-0.02em] text-ink transition-colors duration-200 group-hover:text-accent">
                  {profile.email}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-5 shrink-0 text-ink-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                strokeWidth={1.5}
              />
            </a>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-sm text-[14px] leading-[1.7] text-ink-muted">
              {contact.body}
            </p>
            <p className="mono-label mt-6 flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 shrink-0 bg-accent" />
              {profile.availabilityShort}
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-line">
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
                className="group flex items-center justify-between gap-4 border-b border-line py-5 transition-colors duration-200 hover:bg-surface/40"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <Icon
                    className="size-4 shrink-0 text-ink-faint transition-colors duration-200 group-hover:text-accent"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                  <span className="font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-none tracking-[-0.02em]">
                    {link.label}
                  </span>
                </span>
                <span className="hidden min-w-0 truncate text-[13px] text-ink-muted sm:block">
                  {link.value}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 shrink-0 text-ink-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
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
