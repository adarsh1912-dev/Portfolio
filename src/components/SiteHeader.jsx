import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { nav, profile } from "../data/content.js";
import MobileMenu from "./MobileMenu.jsx";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    triggerRef.current?.focus();
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "border-b border-line bg-paper"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between gap-6">
          <a
            href="#top"
            aria-label={`${profile.name} — back to top`}
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="grid size-9 place-items-center border border-line font-mono text-[10px] tracking-[0.08em] text-ink transition-colors duration-200 group-hover:border-accent group-hover:text-accent">
              {profile.initials}
            </span>
            <span className="hidden text-sm font-medium tracking-tight sm:block">
              {profile.name}
            </span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative inline-flex min-h-11 items-center text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-2.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="hidden h-10 items-center gap-2 border border-accent bg-accent px-4 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-ink transition-colors duration-200 hover:border-ink hover:bg-ink sm:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight
                className="size-3.5"
                aria-hidden="true"
                strokeWidth={1.75}
              />
            </a>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="inline-flex size-11 items-center justify-center border border-line text-ink transition-colors duration-200 hover:border-accent hover:text-accent md:hidden"
            >
              <Menu className="size-5" aria-hidden="true" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
