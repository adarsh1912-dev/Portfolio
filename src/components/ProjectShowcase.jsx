import ArrowLink from "./ArrowLink.jsx";
import ProjectPreview from "./ProjectPreview.jsx";

function ProjectMeta({ project }) {
  return (
    <div className="mt-7 md:mt-6">
      <p className="mono-label">Scope</p>
      <ul className="mt-3 space-y-2">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2.5 text-[13px] leading-relaxed text-ink-muted"
          >
            <span
              aria-hidden="true"
              className="mt-[0.45rem] size-1 shrink-0 bg-line-strong"
            />
            {highlight}
          </li>
        ))}
      </ul>

      <p className="mono-label mt-6">Stack</p>
      <ul className="mt-2 flex flex-wrap gap-x-2.5 gap-y-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">
        {project.stack.map((tech, index) => (
          <li key={tech} className="flex gap-2.5">
            {tech}
            {index < project.stack.length - 1 ? (
              <span aria-hidden="true" className="text-line-strong">
                ·
              </span>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 border-t border-line pt-3">
        <ArrowLink href={project.repoUrl}>Repository</ArrowLink>
        {project.liveUrl ? (
          <ArrowLink href={project.liveUrl}>
            {project.liveLabel || "Live demo"}
          </ArrowLink>
        ) : null}
      </div>
    </div>
  );
}

function ProjectTitle({ project }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <p className="mono-label">
          {project.index} / {project.kind}
        </p>
        {project.year && project.year !== "—" ? (
          <p className="mono-label">{project.year}</p>
        ) : null}
      </div>
      <h3 className="mt-5 font-display text-4xl leading-[0.95] tracking-[-0.02em] md:text-[3.25rem]">
        {project.title}
      </h3>
      <p className="mt-4 text-[0.95rem] leading-relaxed text-ink">
        {project.summary}
      </p>
      <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-muted">
        {project.description}
      </p>
    </div>
  );
}

function FeatureProject({ project }) {
  return (
    <article className="group">
      <div className="flex items-baseline justify-between gap-4">
        <p className="mono-label">
          {project.index} / {project.kind}
        </p>
        {project.year && project.year !== "—" ? (
          <p className="mono-label">{project.year}</p>
        ) : null}
      </div>

      <div className="relative mt-4 transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <ProjectPreview project={project} />
      </div>

      <div className="mt-8 grid gap-8 border-t border-line pt-8 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <h3 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-ink">
            {project.summary}
          </p>
          <p className="mt-3 max-w-xl text-[0.9rem] leading-relaxed text-ink-muted">
            {project.description}
          </p>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <ProjectMeta project={project} />
        </div>
      </div>
    </article>
  );
}

function SplitProject({ project, previewSide, copyOffset }) {
  const reversed = previewSide === "right";

  return (
    <article className="group grid gap-8 lg:grid-cols-12 lg:gap-10">
      <div
        className={`lg:col-span-6 lg:row-start-1 ${
          reversed ? "lg:col-start-7" : "lg:col-start-1"
        }`}
      >
        <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
          <ProjectPreview project={project} />
        </div>
      </div>

      <div
        className={`lg:col-span-5 lg:row-start-1 ${
          reversed ? "lg:col-start-1" : "lg:col-start-8"
        } ${copyOffset ? "lg:pt-14" : ""}`}
      >
        <ProjectTitle project={project} />
        <ProjectMeta project={project} />
      </div>
    </article>
  );
}

export default function ProjectShowcase({ project }) {
  if (project.layout === "feature") {
    return <FeatureProject project={project} />;
  }

  return (
    <SplitProject
      project={project}
      previewSide={project.layout === "split-right" ? "right" : "left"}
      copyOffset={project.layout === "split-left"}
    />
  );
}
