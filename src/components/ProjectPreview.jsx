import ChatPreview from "./previews/ChatPreview.jsx";
import ResumePreview from "./previews/ResumePreview.jsx";
import TerminalPreview from "./previews/TerminalPreview.jsx";

const previews = {
  chat: ChatPreview,
  resume: ResumePreview,
  terminal: TerminalPreview,
};

const ratios = {
  chat: "aspect-[4/5] sm:aspect-[6/5]",
  resume: "aspect-[4/5] sm:aspect-[16/9]",
  terminal: "aspect-[4/5] sm:aspect-[16/10]",
};

export default function ProjectPreview({ project }) {
  const Preview = previews[project.preview] ?? ChatPreview;
  const isTerminal = project.preview === "terminal";
  const badge = project.liveUrl?.includes("npmjs.com")
    ? "npm"
    : project.liveUrl
      ? "Demo"
      : "Concept";

  return (
    <div className="relative overflow-hidden border border-line bg-surface transition-colors duration-300 group-hover:border-line-strong">
      <div className="flex h-9 items-center gap-3 border-b border-line bg-surface-2 px-3 sm:px-4">
        <div className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="size-1.5 border border-line-strong" />
          <span className="size-1.5 border border-line-strong" />
          <span className="size-1.5 border border-accent/60" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-[18rem] items-center justify-center border border-line bg-paper px-2">
          <span className="truncate font-mono text-[8px] tracking-[0.04em] text-ink-faint">
            {isTerminal ? "ymusix  ~/Music" : project.demoHost}
          </span>
        </div>
        <span className="hidden shrink-0 font-mono text-[8px] uppercase tracking-[0.14em] text-ink-faint sm:block">
          {badge}
        </span>
      </div>

      <div className="p-3 sm:p-4">
        <div
          className={`${ratios[project.preview] ?? ratios.chat} w-full`}
          role="img"
          aria-label={project.previewAlt}
        >
          <div className="h-full pointer-events-none select-none" aria-hidden="true">
            <Preview />
          </div>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
      />
    </div>
  );
}
