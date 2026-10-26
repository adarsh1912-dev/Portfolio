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
            className="group grid gap-3 border-b border-line py-5 transition-colors duration-200 hover:bg-surface/60 sm:grid-cols-12 sm:gap-8"
          >
            <h3 className="mono-label transition-colors duration-200 group-hover:text-ink sm:col-span-2">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 sm:col-span-10">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[16px] leading-relaxed text-ink-muted transition-colors duration-200 group-hover:text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 max-w-xl text-[12px] leading-relaxed text-ink-muted">
        These are the tools I have used to build and ship projects. I am
        comfortable reaching for new ones when the problem calls for it.
      </p>
    </section>
  );
}
