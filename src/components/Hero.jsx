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
  hidden: { opacity: 0, y: 18 },
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
    <section
      id="top"
      aria-label="Introduction"
      className="relative scroll-mt-24"
    >
      <div className="shell pb-14 pt-12 md:pb-20 md:pt-16 lg:pt-20">
        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10"
          {...animate}
        >
          <div className="lg:col-span-7">
            <motion.p
              className="mono-label flex items-center gap-3 text-[10px] tracking-[0.16em] sm:text-[11px] sm:tracking-[0.18em]"
              variants={reduceMotion ? undefined : item}
            >
              <span aria-hidden="true" className="size-1.5 bg-accent" />
              {profile.eyebrow}
              <span
                aria-hidden="true"
                className="hidden h-px w-12 bg-line-strong sm:block"
              />
            </motion.p>

            <motion.h1
              className="mt-7 font-display text-[clamp(3.6rem,11vw,7.75rem)] leading-[0.86] tracking-[-0.035em] md:mt-9"
              variants={reduceMotion ? undefined : item}
              aria-label="I build useful software."
            >
              {profile.headline.map((line) => (
                <span
                  key={line.text}
                  className={`block ${line.italic ? "italic" : ""}`}
                >
                  {line.text}
                  {line.accent ? (
                    <span className="text-accent">{line.accent}</span>
                  ) : null}
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="mt-8 max-w-[33rem] text-[0.98rem] leading-relaxed text-ink-muted sm:text-[1.0625rem]"
              variants={reduceMotion ? undefined : item}
            >
              {profile.intro}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              variants={reduceMotion ? undefined : item}
            >
              <Button href="#work" icon={ArrowDown}>
                Explore my work
              </Button>
              {profile.resumeUrl ? (
                <Button
                  href={profile.resumeUrl}
                  variant="secondary"
                  icon={Download}
                  download
                >
                  Download résumé
                </Button>
              ) : githubProfile ? (
                <Button
                  href={githubProfile.href}
                  variant="secondary"
                  icon={ArrowUpRight}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View GitHub
                </Button>
              ) : null}
            </motion.div>

            <motion.div
              className="mt-10 flex items-center gap-3 border-t border-line pt-5"
              variants={reduceMotion ? undefined : item}
            >
              <span className="relative flex size-2 shrink-0 items-center justify-center">
                <span
                  aria-hidden="true"
                  className="absolute inline-flex size-2 animate-ping bg-accent opacity-40 motion-reduce:hidden"
                />
                <span
                  aria-hidden="true"
                  className="relative inline-flex size-1.5 bg-accent"
                />
              </span>
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-ink-faint">
                {profile.availability}
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:pl-2">
            <motion.div variants={reduceMotion ? undefined : item}>
              <HeroVisual />
            </motion.div>
          </div>
        </motion.div>

        <motion.dl
          className="mt-12 grid grid-cols-1 border-t border-line md:mt-16 md:grid-cols-3"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.35 }}
        >
          {profile.meta.map((meta, index) => (
            <div
              key={meta.label}
              className={`flex items-baseline gap-3 py-4 md:py-5 ${
                index > 0
                  ? "border-t border-line md:border-l md:border-t-0 md:pl-6"
                  : "md:pr-6"
              }`}
            >
              <dt className="mono-label shrink-0">{meta.label}</dt>
              <span
                aria-hidden="true"
                className="hidden h-px flex-1 border-b border-dotted border-line-strong sm:block"
              />
              <dd className="text-right text-[13px] text-ink">{meta.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
