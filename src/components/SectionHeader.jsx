export default function SectionHeader({
  index,
  label,
  meta,
  title,
  accent,
  lede,
  id,
}) {
  return (
    <header className="border-t border-line pt-5">
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-2">
          <span className="font-display text-[2.75rem] leading-none text-ink-faint">
            {index}
          </span>
          <p className="mono-label mt-3">{label}</p>
          {meta ? <p className="mono-label mt-1">{meta}</p> : null}
        </div>

        <div className="md:col-span-7">
          <h2
            id={id}
            className="font-display text-[clamp(2.6rem,4.6vw,4.35rem)] leading-[0.94] tracking-[-0.025em]"
          >
            {title} <span className="text-ink-muted">{accent}</span>
          </h2>
        </div>

        {lede ? (
          <p className="max-w-xs text-[13px] leading-relaxed text-ink-muted md:col-span-3 md:pt-2">
            {lede}
          </p>
        ) : null}
      </div>
    </header>
  );
}
