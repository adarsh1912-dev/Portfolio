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

  return (
    <div className="plate-dark relative overflow-hidden">
      <div className="p-2.5 sm:p-3">
        <div
          className={`${ratios[project.preview] ?? ratios.chat} w-full`}
          role="img"
          aria-label={project.previewAlt}
        >
          <div
            className="pointer-events-none h-full select-none"
            aria-hidden="true"
          >
            <Preview />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-line px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
        <span>
          {project.index} / {project.title}
        </span>
        <span className="flex shrink-0 items-center gap-2">
          <span aria-hidden="true" className="size-1 bg-accent" />
          Concept preview
        </span>
      </div>

      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
      />
    </div>
  );
}
