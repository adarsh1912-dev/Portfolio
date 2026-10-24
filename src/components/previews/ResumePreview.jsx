const navigation = [
  "Dashboard",
  "Editor",
  "Analyzer",
  "Tracker",
  "Templates",
];

const skillMatches = [
  { name: "React", matched: true },
  { name: "PostgreSQL", matched: true },
  { name: "API design", matched: true },
  { name: "Testing", matched: false },
];

const pipeline = [
  { role: "Frontend Engineer", status: "Interview" },
  { role: "Full-stack Developer", status: "Applied" },
  { role: "Software Engineer Intern", status: "Saved" },
];

export default function ResumePreview() {
  return (
    <div className="grid h-full grid-cols-1 overflow-hidden border border-line bg-paper sm:grid-cols-[8rem_1fr] lg:grid-cols-[9.5rem_1fr_13rem]">
      <aside className="hidden min-h-0 flex-col justify-between border-r border-line p-3 sm:flex">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 bg-accent" />
            <span className="text-[11px] font-semibold tracking-tight text-ink">
              Applyzen
            </span>
          </div>
          <p className="mt-1 font-mono text-[6px] uppercase tracking-[0.12em] text-ink-faint">
            Résumé workspace
          </p>

          <nav className="mt-4 space-y-0.5">
            {navigation.map((item) => {
              const active = item === "Editor";
              return (
                <span
                  key={item}
                  className={`flex items-center border-l-2 px-2 py-[5px] font-mono text-[8px] ${
                    active
                      ? "border-accent bg-surface-2 text-ink"
                      : "border-transparent text-ink-faint"
                  }`}
                >
                  {item}
                </span>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-line pt-2.5">
          <p className="font-mono text-[6px] uppercase tracking-[0.14em] text-ink-faint">
            Offline mode
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-[7px] text-ink-muted">
            <span className="size-1 bg-accent" />
            localStorage
          </p>
        </div>
      </aside>

      <div className="flex min-h-0 flex-col">
        <div className="flex items-center justify-between gap-3 border-b border-line px-3 py-2">
          <div className="min-w-0">
            <p className="font-mono text-[6.5px] uppercase tracking-[0.14em] text-ink-faint">
              Editor
            </p>
            <p className="mt-0.5 truncate text-[9px] text-ink">
              Frontend Engineer · tailored
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1 font-mono text-[7px] text-ink-faint">
            <span className="grid size-4 place-items-center border border-line">
              −
            </span>
            <span className="px-0.5">100%</span>
            <span className="grid size-4 place-items-center border border-line">
              +
            </span>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 items-center justify-center bg-surface/40 p-3 sm:p-5">
          <article className="flex h-full max-h-[30rem] aspect-[794/1123] flex-col overflow-hidden bg-ink p-4 text-paper shadow-[0_18px_50px_rgba(0,0,0,0.45)] sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-[14px] leading-none tracking-[-0.01em]">
                  Adarsh Raj
                </p>
                <p className="mt-1 font-mono text-[4.5px] uppercase tracking-[0.16em] text-paper/60">
                  Full-stack developer
                </p>
              </div>
              <div className="shrink-0 text-right font-mono text-[4.5px] leading-[1.8] text-paper/60">
                <p>Kolkata, India</p>
                <p>aj19122001@gmail.com</p>
                <p>github.com/adarsh1912-dev</p>
              </div>
            </div>

            <div className="mt-2.5 h-px bg-paper/25" />

            <section className="mt-2.5">
              <p className="font-mono text-[4.5px] uppercase tracking-[0.18em] text-paper/50">
                Summary
              </p>
              <p className="mt-1 text-[5.5px] leading-[1.7] text-paper/80">
                Information Technology student building full-stack applications
                with React, Node.js, and SQL. Interested in applied AI and
                reliable product engineering.
              </p>
            </section>

            <section className="mt-2.5">
              <p className="font-mono text-[4.5px] uppercase tracking-[0.18em] text-paper/50">
                Projects
              </p>
              <div className="mt-1 space-y-1.5">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-[6px] font-medium">
                      Applyzen — AI résumé builder
                    </p>
                    <p className="hidden font-mono text-[4px] text-paper/50 sm:block">
                      React · Express · PostgreSQL
                    </p>
                  </div>
                  <ul className="mt-0.5 list-disc space-y-0.5 pl-2 text-[5px] leading-[1.6] text-paper/70">
                    <li>
                      Live A4 preview, ATS templates, job-match analysis, and
                      application tracker.
                    </li>
                    <li>
                      Evidence-based AI rewrites with an offline localStorage
                      mode.
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-[6px] font-medium">
                      Talksy — real-time chat
                    </p>
                    <p className="hidden font-mono text-[4px] text-paper/50 sm:block">
                      React · Socket.IO · MongoDB
                    </p>
                  </div>
                  <ul className="mt-0.5 list-disc space-y-0.5 pl-2 text-[5px] leading-[1.6] text-paper/70">
                    <li>
                      One-to-one messaging with JWT auth, presence, read
                      receipts, and Cloudinary images.
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-[6px] font-medium">
                      Ymusix — terminal music player
                    </p>
                    <p className="hidden font-mono text-[4px] text-paper/50 sm:block">
                      Node.js · Ink · SQLite
                    </p>
                  </div>
                  <ul className="mt-0.5 list-disc space-y-0.5 pl-2 text-[5px] leading-[1.6] text-paper/70">
                    <li>
                      Local-first library, queue, search, and optional YouTube
                      streaming; published on npm.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-2.5">
              <p className="font-mono text-[4.5px] uppercase tracking-[0.18em] text-paper/50">
                Skills
              </p>
              <p className="mt-1 text-[5px] leading-[1.6] text-paper/70">
                JavaScript · Python · SQL · React · Node.js · Express ·
                PostgreSQL · MongoDB · Git · JWT
              </p>
            </section>

            <section className="mt-2.5">
              <p className="font-mono text-[4.5px] uppercase tracking-[0.18em] text-paper/50">
                Education
              </p>
              <div className="mt-1 flex items-baseline justify-between gap-2">
                <p className="text-[5.5px] font-medium">
                  B.Tech, Information Technology — Narula Institute of
                  Technology
                </p>
                <p className="shrink-0 font-mono text-[4px] text-paper/50">
                  2023 — 2027
                </p>
              </div>
            </section>

            <div className="mt-auto flex items-center justify-between border-t border-paper/15 pt-1.5">
              <p className="font-mono text-[3.5px] uppercase tracking-[0.14em] text-paper/40">
                ATS-conscious · single column
              </p>
              <p className="font-mono text-[3.5px] text-paper/40">1 / 1</p>
            </div>
          </article>
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-line px-3 py-1.5 font-mono text-[6px] uppercase tracking-[0.1em] text-ink-faint">
          <span className="flex items-center gap-1.5">
            <span className="size-1 bg-accent" />
            Autosaved
          </span>
          <span>A4 · 210 × 297 mm</span>
          <span className="hidden sm:block">Export PDF</span>
        </div>
      </div>

      <aside className="hidden min-h-0 flex-col justify-between border-l border-line p-3 lg:flex">
        <div>
          <div className="flex items-center justify-between">
            <p className="font-mono text-[6.5px] uppercase tracking-[0.14em] text-ink-faint">
              Job match
            </p>
            <span className="font-mono text-[6px] uppercase tracking-[0.1em] text-accent">
              Evidence
            </span>
          </div>
          <p className="mt-2 text-[7.5px] leading-relaxed text-ink-muted">
            Frontend Engineer posting — compared with résumé text only.
          </p>

          <ul className="mt-3 space-y-1.5">
            {skillMatches.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center justify-between border-b border-line pb-1 text-[7.5px]"
              >
                <span className="text-ink-muted">{skill.name}</span>
                <span
                  className={
                    skill.matched
                      ? "font-mono text-[6px] uppercase tracking-[0.08em] text-accent"
                      : "font-mono text-[6px] uppercase tracking-[0.08em] text-ink-faint"
                  }
                >
                  {skill.matched ? "Matched" : "Missing"}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-4 font-mono text-[6px] uppercase tracking-[0.14em] text-ink-faint">
            Pipeline
          </p>
          <ul className="mt-2 space-y-1">
            {pipeline.map((entry) => (
              <li
                key={entry.role}
                className="flex items-center justify-between gap-2"
              >
                <span className="truncate text-[7px] text-ink-muted">
                  {entry.role}
                </span>
                <span className="shrink-0 border border-line px-1 py-0.5 font-mono text-[5.5px] uppercase tracking-[0.06em] text-ink-faint">
                  {entry.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-line pt-2">
          <p className="font-mono text-[6px] uppercase tracking-[0.14em] text-ink-faint">
            No invented facts
          </p>
          <p className="mt-1 text-[7px] leading-relaxed text-ink-muted">
            Suggestions must cite evidence already present in the résumé.
          </p>
        </div>
      </aside>
    </div>
  );
}
