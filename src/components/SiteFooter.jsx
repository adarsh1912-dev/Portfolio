import { useReducedMotion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { profile } from "../data/content.js";

export default function SiteFooter() {
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center border border-line font-mono text-[9px] text-ink-muted">
            {profile.initials}
          </span>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
            © {year} {profile.name}
          </p>
        </div>

        <div className="flex items-center justify-between gap-6 sm:justify-end">
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint md:block">
            React · Vite · Tailwind
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex min-h-11 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted transition-colors duration-200 hover:text-accent"
          >
            Back to top
            <ArrowUp
              className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
              aria-hidden="true"
              strokeWidth={1.75}
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
