import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { profile, nav } from "../data/content.js";

export default function MobileMenu({ open, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 overflow-y-auto bg-paper md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="shell flex h-[4.5rem] items-center justify-between border-b border-line">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center border border-line font-mono text-[10px] tracking-[0.08em]">
                {profile.initials}
              </span>
              <span className="text-sm font-medium">{profile.name}</span>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center border border-line text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <X className="size-5" aria-hidden="true" strokeWidth={1.5} />
            </button>
          </div>

          <div className="shell flex min-h-[calc(100dvh-4.5rem)] flex-col justify-between py-8">
            <nav aria-label="Mobile">
              <ul className="border-t border-line">
                {nav.map((item, index) => (
                  <motion.li
                    key={item.href}
                    className="border-b border-line"
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: reduceMotion ? 0 : 0.04 + index * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="flex items-baseline justify-between gap-4 py-4"
                    >
                      <span className="font-display text-[2.5rem] leading-none tracking-[-0.01em]">
                        {item.label}
                      </span>
                      <span className="mono-label">{item.index}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <a
                href={`mailto:${profile.email}`}
                onClick={onClose}
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 border border-accent bg-accent px-5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-ink transition-colors hover:bg-ink hover:border-ink"
              >
                Let&apos;s talk
                <ArrowUpRight
                  className="size-3.5"
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
              </a>
            </nav>

            <div className="mt-12">
              <p className="mono-label">Elsewhere</p>
              <div className="mt-2 flex flex-wrap gap-x-6">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-accent"
                  >
                    {social.label}
                    <ArrowUpRight
                      className="size-3"
                      aria-hidden="true"
                      strokeWidth={1.75}
                    />
                  </a>
                ))}
              </div>
              <p className="mt-4 border-t border-line pt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-ink-faint">
                {profile.availability}
              </p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
