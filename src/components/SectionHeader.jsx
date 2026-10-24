export default function SectionHeader({ index, label, meta, title, accent, lede, id }) {
  return (
    <header>
      <div className="flex items-baseline justify-between gap-4 border-t border-line pt-5">
        <p className="mono-label">
          {index} — {label}
        </p>
        {meta ? (
          <p className="mono-label hidden sm:block">{meta}</p>
        ) : null}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-12 md:items-end md:gap-10">
        <h2
          id={id}
          className="text-balance font-display text-[clamp(2.5rem,5.2vw,4.25rem)] leading-[0.96] tracking-[-0.02em] md:col-span-8"
        >
          {title}{" "}
          <span className="italic">{accent}</span>
        </h2>
        {lede ? (
          <p className="max-w-sm text-[0.95rem] leading-relaxed text-ink-muted md:col-span-4 md:justify-self-end">
            {lede}
          </p>
        ) : null}
      </div>
    </header>
  );
}
