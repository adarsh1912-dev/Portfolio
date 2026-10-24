import { ArrowUpRight } from "lucide-react";

export default function ArrowLink({
  href,
  children,
  icon: Icon = ArrowUpRight,
  external = true,
  className = "",
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noreferrer noopener" }
        : {})}
      className={`group inline-flex min-h-11 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted transition-colors duration-200 hover:text-accent ${className}`}
    >
      <span className="border-b border-transparent pb-0.5 transition-colors duration-200 group-hover:border-accent">
        {children}
      </span>
      <Icon
        aria-hidden="true"
        className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        strokeWidth={1.75}
      />
    </a>
  );
}
