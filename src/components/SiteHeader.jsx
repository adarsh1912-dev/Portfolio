import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll } from "motion/react";
import { ArrowUpRight, Menu } from "lucide-react";
import { nav, profile } from "../data/content.js";
import MobileMenu from "./MobileMenu.jsx";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [darkHeader, setDarkHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const contact = document.getElementById("contact");
      if (contact) {
        const contactTop = contact.getBoundingClientRect().top + window.scrollY;
        setDarkHeader(window.scrollY + 73 >= contactTop);
      }
    };

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
        className={`relative sticky top-0 z-40 transition-colors duration-300 ${
          darkHeader
            ? "night-panel border-b border-line"
            : scrolled
              ? "border-b border-line bg-paper"
              : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between gap-6">
          <a
            href="#top"
            aria-label={`${profile.name} — back to top`}
            className="group flex min-h-11 shrink-0 items-center gap-2"
          >
            <span className="font-display text-[20px] leading-none tracking-[-0.02em] text-ink">
              {profile.name}
            </span>
            <span
              aria-hidden="true"
              className="size-1.5 bg-accent transition-transform duration-300 group-hover:rotate-45"
            />
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 md:flex"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-sweep inline-flex min-h-11 items-center text-[13px] text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="hidden h-11 items-center gap-2 border border-ink bg-ink px-4 text-[12px] font-medium text-paper transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-ink sm:inline-flex"
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
              className="inline-flex size-11 items-center justify-center border border-line text-ink transition-colors duration-200 hover:border-ink md:hidden"
            >
              <Menu className="size-5" aria-hidden="true" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <motion.span
          aria-hidden="true"
          style={{ scaleX: scrollYProgress }}
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
        />
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
