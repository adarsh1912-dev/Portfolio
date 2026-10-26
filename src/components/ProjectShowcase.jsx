import ArrowLink from "./ArrowLink.jsx";
import ProjectPreview from "./ProjectPreview.jsx";
import TiltFrame from "./TiltFrame.jsx";

function ProjectEyebrow({ project }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.13em] text-ink-faint">
      <span className="text-ink">{project.index}</span>
      <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
      <span>{project.kind}</span>
    </p>
  );
}

function Highlights({ project, columns = 1, className = "" }) {
  return (
    <ul
      className={`${
        columns === 2
          ? "grid gap-x-8 gap-y-2 sm:grid-cols-2"
          : "space-y-2"
      } ${className}`}
    >
      {project.highlights.map((highlight) => (
        <li
          key={highlight}
          className="flex gap-3 text-[13px] leading-relaxed text-ink-muted"
        >
          <span
            aria-hidden="true"
            className="mt-[0.55rem] h-px w-3 shrink-0 bg-line-strong"
          />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectStack({ project }) {
  return (
    <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
      {project.stack.join(" · ")}
    </p>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
      <ArrowLink href={project.repoUrl}>Repository</ArrowLink>
      {project.liveUrl ? (
        <ArrowLink href={project.liveUrl}>
          {project.liveLabel || "Live demo"}
        </ArrowLink>
      ) : null}
    </div>
  );
}

function FeatureProject({ project }) {
  return (
    <article
      id={`project-${project.id}`}
      className="group scroll-mt-28"
    >
      <div className="grid gap-6 border-t border-line pt-6 md:grid-cols-12 md:gap-8">
        <div className="font-display text-[2.25rem] leading-none text-ink-faint md:col-span-1">
          {project.index}
        </div>
        <div className="md:col-span-6">
          <p className="mono-label">{project.kind}</p>
          <h3 className="mt-3 font-display text-[clamp(3rem,6vw,5.4rem)] leading-[0.88] tracking-[-0.035em]">
            {project.title}
          </h3>
        </div>
        <div className="md:col-span-5 md:pt-2">
          <p className="text-[15px] leading-relaxed text-ink">
            {project.summary}
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
            {project.description}
          </p>
        </div>
      </div>

      <TiltFrame className="mt-8 transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <ProjectPreview project={project} />
      </TiltFrame>

      <div className="mt-8 grid gap-8 border-t border-line pt-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <p className="mono-label">Selected details</p>
          <Highlights project={project} columns={2} className="mt-3" />
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <p className="mono-label">Stack</p>
          <ProjectStack project={project} />
          <div className="mt-6 border-t border-line pt-4">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}

function SplitProject({ project, previewSide, offsetCopy }) {
  const reversed = previewSide === "right";

  return (
    <article
      id={`project-${project.id}`}
      className="group grid scroll-mt-28 gap-10 border-t border-line pt-8 lg:grid-cols-12 lg:gap-10"
    >
      <div
        className={`lg:col-span-5 lg:row-start-1 lg:flex lg:flex-col ${
          reversed ? "lg:col-start-1" : "lg:col-start-8"
        } ${offsetCopy ? "lg:pt-16" : ""}`}
      >
        <div>
          <ProjectEyebrow project={project} />
          <h3 className="mt-4 font-display text-[clamp(2.75rem,4.6vw,4.25rem)] leading-[0.92] tracking-[-0.035em]">
            {project.title}
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink">
            {project.summary}
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
            {project.description}
          </p>
        </div>

        <div className="mt-8 lg:mt-auto lg:pt-8">
          <p className="mono-label">Selected details</p>
          <Highlights project={project} className="mt-3" />
          <div className="mt-6 border-t border-line pt-4">
            <p className="mono-label">Stack</p>
            <ProjectStack project={project} />
            <div className="mt-4">
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`lg:col-span-7 lg:row-start-1 ${
          reversed ? "lg:col-start-6" : "lg:col-start-1"
        }`}
      >
        <TiltFrame className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
          <ProjectPreview project={project} />
        </TiltFrame>
      </div>
    </article>
  );
}

function WideProject({ project }) {
  return (
    <article
      id={`project-${project.id}`}
      className="group grid scroll-mt-28 gap-10 border-t border-line pt-8 lg:grid-cols-12 lg:gap-10"
    >
      <div className="lg:col-span-4 lg:col-start-9 lg:row-start-1">
        <ProjectEyebrow project={project} />
        <h3 className="mt-4 font-display text-[clamp(2.75rem,4.2vw,4rem)] leading-[0.92] tracking-[-0.035em]">
          {project.title}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-ink">
          {project.summary}
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
          {project.description}
        </p>
        <div className="mt-6 border-t border-line pt-4">
          <ProjectLinks project={project} />
        </div>
      </div>

      <div className="lg:col-span-8 lg:col-start-1 lg:row-start-1">
        <TiltFrame className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
          <ProjectPreview project={project} />
        </TiltFrame>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="mono-label">Selected details</p>
            <Highlights project={project} className="mt-3" />
          </div>
          <div>
            <p className="mono-label">Stack</p>
            <ProjectStack project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectShowcase({ project }) {
  if (project.layout === "feature") {
    return <FeatureProject project={project} />;
  }

  if (project.layout === "split-left") {
    return <WideProject project={project} />;
  }

  return (
    <SplitProject
      project={project}
      previewSide="right"
      offsetCopy={false}
    />
  );
}
