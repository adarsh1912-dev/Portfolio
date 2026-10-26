import {
  education,
  experience,
  experienceNote,
  sections,
} from "../data/content.js";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="shell scroll-mt-24 py-20 md:py-28 lg:py-32"
    >
      <SectionHeader id="education-title" {...sections.education} />

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          {education.map((entry) => (
            <Reveal
              as="article"
              key={entry.degree}
              className="border-t border-line pt-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                <span>{entry.period}</span>
                <span>{entry.location}</span>
              </div>

              <h3 className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,3.6vw,3.25rem)] leading-[1.02] tracking-[-0.025em]">
                {entry.degree}
              </h3>
              <p className="mt-2 text-[15px] text-ink-muted">
                {entry.institution}
              </p>
              <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-ink-muted">
                {entry.detail}
              </p>

              <div className="mt-7">
                <p className="mono-label">Relevant coursework</p>
                <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-ink-muted">
                  {entry.coursework.join(", ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <div className="border-t border-line pt-6">
            <h3 className="mono-label">Experience</h3>
            {experience.length > 0 ? (
              <ul className="mt-5 space-y-6">
                {experience.map((role) => (
                  <li
                    key={`${role.company}-${role.role}`}
                    className="border-b border-line pb-6"
                  >
                    <p className="mono-label">{role.period}</p>
                    <p className="mt-2 text-[14px] text-ink">{role.role}</p>
                    <p className="text-[13px] text-ink-muted">
                      {role.company}
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                      {role.description}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-ink-muted">
                {experienceNote}
              </p>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
