import { about, profile, sections } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Studying", value: "B.Tech Information Technology" },
  { label: "Focus", value: "Full-stack + Applied AI" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="shell scroll-mt-24 py-20 md:py-28 lg:py-32"
    >
      <SectionHeader id="about-title" {...sections.about} />

      <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <Reveal>
            <blockquote className="border-l-2 border-accent pl-5 font-display text-[1.8rem] leading-[1.25] tracking-[-0.02em]">
              &ldquo;{about.quote}&rdquo;
            </blockquote>
          </Reveal>

          <Reveal delay={0.05}>
            <dl className="mt-10 border-t border-line">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-3"
                >
                  <dt className="mono-label">{fact.label}</dt>
                  <dd className="text-right text-[13px] text-ink-muted">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <p className="max-w-2xl font-display text-[1.55rem] leading-[1.32] tracking-[-0.01em] text-ink">
              {about.intro}
            </p>
          </Reveal>
          <div className="mt-6 space-y-4 text-[15px] leading-[1.7] text-ink-muted">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.05 + index * 0.05}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <ol className="mt-16 border-t border-line md:mt-20">
        {about.principles.map((principle, index) => (
          <Reveal
            as="li"
            key={principle.title}
            delay={index * 0.04}
            className="grid gap-2 border-b border-line py-6 sm:grid-cols-12 sm:gap-8"
          >
            <span className="font-display text-2xl leading-none text-ink-faint sm:col-span-1">
              0{index + 1}
            </span>
            <h3 className="text-[14px] font-medium sm:col-span-4">
              {principle.title}
            </h3>
            <p className="text-[13px] leading-relaxed text-ink-muted sm:col-span-6 sm:col-start-7">
              {principle.body}
            </p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
