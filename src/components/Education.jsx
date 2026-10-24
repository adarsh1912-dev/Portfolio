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
            <Reveal as="article" key={entry.degree} className="border-t border-line pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <p className="mono-label">{entry.period}</p>
                <p className="mono-label">{entry.location}</p>
              </div>
              <h3 className="mt-5 font-display text-3xl leading-[1.05] tracking-[-0.01em] md:text-4xl">
                {entry.degree}
              </h3>
              <p className="mt-2 text-[0.95rem] text-ink-muted">
                {entry.institution}
              </p>
              <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-ink-faint">
                {entry.detail}
              </p>

              <div className="mt-7">
                <p className="mono-label">Relevant coursework</p>
                <ul className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-mono text-[11px] text-ink-muted">
                  {entry.coursework.map((course, index) => (
                    <li key={course} className="flex items-baseline gap-3">
                      {course}
                      {index < entry.coursework.length - 1 ? (
                        <span aria-hidden="true" className="text-line-strong">
                          /
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <div className="border-t border-line pt-6">
            <h3 className="mono-label">Experience</h3>
            {experience.length > 0 ? (
              <ul className="mt-6 space-y-6">
                {experience.map((role) => (
                  <li
                    key={`${role.company}-${role.role}`}
                    className="border-b border-line pb-6"
                  >
                    <p className="mono-label">{role.period}</p>
                    <p className="mt-2 text-[0.95rem] text-ink">{role.role}</p>
                    <p className="text-sm text-ink-muted">{role.company}</p>
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
