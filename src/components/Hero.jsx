import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { profile } from "../data/content.js";
import Button from "./Button.jsx";
import HeroVisual from "./hero/HeroVisual.jsx";

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const githubProfile = profile.socials.find(
    (social) => social.label === "GitHub",
  );
  const animate = reduceMotion
    ? {}
    : { initial: "hidden", animate: "show", variants: container };

  return (
    <section id="top" aria-label="Introduction" className="relative scroll-mt-24">
      <div className="grid grid-cols-1 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12">
        <div className="px-6 pb-12 pt-12 sm:px-10 lg:col-span-7 lg:flex lg:flex-col lg:justify-center lg:px-0 lg:pb-12 lg:pl-[max(3.5rem,calc((100vw-84rem)/2+3.5rem))] lg:pr-16 lg:pt-16">
          <motion.div className="max-w-[44rem]" {...animate}>
            <motion.p
              className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint"
              variants={reduceMotion ? undefined : item}
            >
              <span aria-hidden="true" className="size-1.5 bg-accent" />
              {profile.eyebrow}
            </motion.p>

            <motion.h1
              className="mt-8 font-display text-[clamp(3.8rem,8.7vw,8rem)] leading-[0.88] tracking-[-0.045em]"
              variants={reduceMotion ? undefined : item}
              aria-label="I build useful software."
            >
              {profile.headline.map((line) => (
                <span key={line.text} className="block">
                  {line.highlight ? (
                    <span className="highlight-lime">{line.text}</span>
                  ) : (
                    line.text
                  )}
                  {line.accent ? <span>{line.accent}</span> : null}
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="mt-9 max-w-[34rem] text-[1.02rem] leading-[1.65] text-ink-muted"
              variants={reduceMotion ? undefined : item}
            >
              {profile.intro}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8"
              variants={reduceMotion ? undefined : item}
            >
              <Button
                href="#work"
                icon={ArrowDown}
                className="w-full sm:w-auto"
              >
                Explore selected work
              </Button>

              {profile.resumeUrl ? (
                <a
                  href={profile.resumeUrl}
                  download
                  className="group inline-flex min-h-11 items-center gap-2 text-[13px] font-medium text-ink"
                >
                  <span className="link-sweep">Download résumé</span>
                  <Download
                    aria-hidden="true"
                    className="size-3.5 text-ink-muted transition-transform duration-200 group-hover:translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </a>
              ) : githubProfile ? (
                <a
                  href={githubProfile.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex min-h-11 items-center gap-2 text-[13px] font-medium text-ink"
                >
                  <span className="link-sweep">View GitHub</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 text-ink-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                  />
                </a>
              ) : null}
            </motion.div>

            <motion.div
              className="mt-12 flex flex-col items-start gap-1.5 border-t border-line pt-4 text-[12px] text-ink-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3"
              variants={reduceMotion ? undefined : item}
            >
              <a href="#contact" className="link-sweep flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 bg-accent" />
                Open to internships
              </a>
              <span aria-hidden="true" className="hidden text-line-strong sm:inline">
                /
              </span>
              <span>{profile.location}</span>
              <span aria-hidden="true" className="hidden text-line-strong sm:inline">
                /
              </span>
              <span>B.Tech IT · 2027</span>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative mt-10 h-[58svh] min-h-[24rem] lg:col-span-5 lg:mt-0 lg:h-auto lg:min-h-0">
          <motion.div
            className="h-full w-full"
            variants={reduceMotion ? undefined : item}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
