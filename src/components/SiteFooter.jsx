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
    <footer className="night-panel">
      <div className="shell flex flex-col gap-5 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-lg leading-none tracking-[-0.02em]">
            {profile.name}
          </span>
          <span aria-hidden="true" className="size-1.5 bg-accent" />
          <span className="text-[12px] text-ink-muted">© {year}</span>
        </div>

        <div className="flex items-center justify-between gap-6 sm:justify-end">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint md:block">
            React · Vite · Three.js
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex min-h-11 items-center gap-2 text-[13px] text-ink-muted transition-colors duration-200 hover:text-ink"
          >
            Back to top
            <ArrowUp
              size={14}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
