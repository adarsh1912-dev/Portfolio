const tracks = [
  { title: "Blinding Lights", artist: "The Weeknd", length: "03:20", favorite: true },
  { title: "Starboy", artist: "The Weeknd", length: "03:50" },
  { title: "Borderline", artist: "Tame Impala", length: "03:57" },
  { title: "Time Moves Slow", artist: "BADBADNOTGOOD", length: "04:03" },
  { title: "Nangs", artist: "Tame Impala", length: "01:48", favorite: true },
  { title: "Sofia", artist: "Clairo", length: "03:08" },
];

export default function TerminalPreview() {
  return (
    <div className="flex h-full flex-col overflow-hidden border border-line bg-paper font-mono">
      <div className="flex items-center justify-between border-b border-line px-3 py-1.5 text-[7px] uppercase tracking-[0.12em]">
        <span className="flex items-center gap-1.5 text-accent">
          <span className="size-1.5 bg-accent" />
          Ymusix
        </span>
        <span className="text-ink-faint">Local · 6 tracks</span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-3 py-2.5">
        <div className="flex items-center justify-between border-b border-line pb-1.5">
          <div className="flex items-center gap-3 text-[7px] uppercase tracking-[0.1em]">
            <span className="border-b border-accent pb-1.5 text-accent">
              Library
            </span>
            <span className="pb-1.5 text-ink-faint">Queue</span>
            <span className="pb-1.5 text-ink-faint">Favorites</span>
          </div>
          <span className="text-[6px] uppercase tracking-[0.08em] text-ink-faint">
            ~/Music
          </span>
        </div>

        <div className="mt-2 flex-1">
          {tracks.map((track, index) => {
            const selected = index === 0;
            return (
              <div
                key={track.title}
                className={`flex items-center gap-2 border-l-2 px-2 py-[4px] text-[8px] sm:text-[9px] ${
                  selected
                    ? "border-accent bg-surface-2 text-ink"
                    : "border-transparent text-ink-muted"
                }`}
              >
                <span className="w-2 shrink-0 text-[6px] text-ink-faint">
                  {selected ? "▶" : index + 1}
                </span>
                <span className="flex w-3 shrink-0 justify-center">
                  {track.favorite ? (
                    <span className="block size-1.5 bg-accent" />
                  ) : null}
                </span>
                <span className="min-w-0 flex-1 truncate">{track.title}</span>
                <span className="hidden w-24 shrink-0 truncate text-right text-[7px] text-ink-faint sm:block">
                  {track.artist}
                </span>
                <span className="w-8 shrink-0 text-right text-[6.5px] text-ink-faint">
                  {track.length}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-2 border-t border-line pt-2">
          <p className="text-[6px] uppercase tracking-[0.1em] text-ink-faint">
            Next up
          </p>
          <div className="mt-1 flex items-center justify-between text-[7px] text-ink-muted">
            <span>Starboy</span>
            <span className="text-ink-faint">The Weeknd</span>
          </div>
          <div className="mt-0.5 flex items-center justify-between text-[7px] text-ink-muted">
            <span>Borderline</span>
            <span className="text-ink-faint">Tame Impala</span>
          </div>
        </div>

        <div className="mt-2 border-t border-line pt-2">
          <div className="flex items-center justify-between gap-2 text-[7px]">
            <p className="truncate text-ink">
              <span className="text-accent">▶</span> Blinding Lights{" "}
              <span className="text-ink-faint">— The Weeknd</span>
            </p>
            <span className="shrink-0 text-[6px] uppercase tracking-[0.1em] text-ink-faint">
              Local
            </span>
          </div>

          <div className="mt-1.5 flex items-center gap-2">
            <span className="shrink-0 text-[6px] text-ink-faint">00:42</span>
            <div className="h-1 flex-1 bg-surface-2">
              <div className="h-full w-[36%] bg-accent" />
            </div>
            <span className="shrink-0 text-[6px] text-ink-faint">03:20</span>
          </div>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[6px] uppercase tracking-[0.06em] text-ink-faint">
            <span className="text-accent">Vol 90</span>
            <span>Shuffle on</span>
            <span>Repeat all</span>
            <span className="ml-auto hidden sm:inline">mpv · local</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-line px-3 py-1.5 text-[6px] uppercase tracking-[0.06em] text-ink-faint">
        <span>↑↓ move</span>
        <span>enter play</span>
        <span>space pause</span>
        <span>/ search</span>
        <span className="ml-auto">q quit</span>
      </div>
    </div>
  );
}
