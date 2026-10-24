import { sections, skillGroups } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="shell scroll-mt-24 py-20 md:py-28 lg:py-32"
    >
      <SectionHeader id="skills-title" {...sections.skills} />

      <div className="mt-12 border-t border-line md:mt-16">
        {skillGroups.map((group, groupIndex) => (
          <Reveal
            key={group.label}
            delay={groupIndex * 0.03}
            className="group grid gap-3 border-b border-line py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
          >
            <h3 className="mono-label transition-colors duration-200 group-hover:text-accent sm:col-span-3">
              {group.label}
            </h3>
            <ul className="flex flex-wrap items-baseline gap-x-4 gap-y-2 sm:col-span-9">
              {group.items.map((item, index) => (
                <li key={item} className="flex items-baseline gap-4">
                  <span className="font-display text-2xl leading-tight tracking-[-0.01em] text-ink md:text-[1.7rem]">
                    {item}
                  </span>
                  {index < group.items.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-line-strong"
                    >
                      /
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 max-w-xl text-[13px] leading-relaxed text-ink-muted">
        These are the tools I have used to build and ship small projects. I am
        comfortable reaching for new ones when the problem calls for it.
      </p>
    </section>
  );
}
