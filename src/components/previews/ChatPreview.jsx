const conversations = [
  {
    name: "Maya S.",
    initial: "M",
    preview: "Shipping it now",
    online: true,
    unseen: 2,
    active: true,
  },
  {
    name: "Aarav",
    initial: "A",
    preview: "The upload looks good",
    online: false,
    unseen: 0,
    active: false,
  },
  {
    name: "Dev",
    initial: "D",
    preview: "Sent you the design file",
    online: true,
    unseen: 1,
    active: false,
  },
];

const messages = [
  {
    name: "Maya",
    initial: "M",
    time: "10:24",
    text: "The new build is live — want to check the chat flow?",
    own: false,
    hidden: true,
  },
  {
    name: "You",
    initial: "AR",
    time: "10:25",
    text: "On it. Testing read receipts and image upload now.",
    own: true,
    seen: true,
  },
  {
    name: "Maya",
    initial: "M",
    time: "10:26",
    image: true,
    own: false,
  },
  {
    name: "You",
    initial: "AR",
    time: "10:27",
    text: "Works. Seen state updates without a refresh.",
    own: true,
    seen: true,
  },
  {
    name: "Maya",
    initial: "M",
    time: "10:28",
    text: "Perfect. Shipping it.",
    own: false,
  },
];

function Photo({ className = "", variant = 0 }) {
  return (
    <svg
      viewBox="0 0 96 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="96" height="64" fill="var(--color-surface-2)" />
      <circle
        cx={variant === 0 ? 68 : 30}
        cy="20"
        r="8"
        fill="var(--color-accent)"
        opacity="0.75"
      />
      <path
        d="M0 44L26 24L50 42L68 30L96 50V64H0Z"
        fill="var(--color-line-strong)"
      />
      <path
        d="M0 54L30 38L58 54L78 44L96 56V64H0Z"
        fill="var(--color-line)"
      />
      <rect
        x="6"
        y="6"
        width="18"
        height="2"
        fill="var(--color-ink-faint)"
      />
    </svg>
  );
}

export default function ChatPreview() {
  return (
    <div className="grid h-full grid-cols-1 overflow-hidden border border-line bg-paper sm:grid-cols-[9rem_1fr]">
      <aside className="hidden min-h-0 flex-col justify-between border-r border-line p-3 sm:flex lg:p-4">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 bg-accent" />
            <span className="text-[11px] font-semibold tracking-tight text-ink">
              Talksy
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between gap-2 border border-line px-2 py-1.5 text-[7px] text-ink-faint">
            <span className="truncate">Search people</span>
            <span className="border border-line px-1 font-mono text-[6px]">
              /
            </span>
          </div>

          <p className="mt-3 font-mono text-[6.5px] uppercase tracking-[0.14em] text-ink-faint">
            Messages
          </p>
          <ul className="mt-1.5 space-y-0.5">
            {conversations.map((person) => (
              <li
                key={person.name}
                className={`flex items-center gap-2 px-2 py-1.5 ${
                  person.active ? "bg-surface-2" : ""
                }`}
              >
                <span className="relative grid size-5 shrink-0 place-items-center border border-line font-mono text-[6.5px] text-ink-muted">
                  {person.initial}
                  {person.online ? (
                    <span className="absolute -bottom-0.5 -right-0.5 size-1 bg-accent" />
                  ) : null}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-1">
                    <span
                      className={`truncate text-[8px] ${
                        person.active ? "text-ink" : "text-ink-muted"
                      }`}
                    >
                      {person.name}
                    </span>
                    {person.unseen > 0 ? (
                      <span className="grid size-3 shrink-0 place-items-center bg-accent font-mono text-[5.5px] text-accent-ink">
                        {person.unseen}
                      </span>
                    ) : null}
                  </span>
                  <span className="mt-0.5 block truncate text-[6.5px] text-ink-faint">
                    {person.preview}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 border-t border-line pt-2.5">
          <span className="grid size-6 shrink-0 place-items-center border border-line font-mono text-[7px] text-ink-muted">
            AR
          </span>
          <div className="min-w-0">
            <p className="truncate text-[9px] text-ink">Adarsh Raj</p>
            <p className="flex items-center gap-1 font-mono text-[6.5px] text-ink-faint">
              <span className="size-1 bg-accent" />
              online
            </p>
          </div>
        </div>
      </aside>

      <div className="flex min-h-0 flex-col">
        <div className="flex items-center justify-between gap-3 border-b border-line px-3 py-2 sm:px-4">
          <div className="flex min-w-0 items-center gap-2">
            <span className="relative grid size-6 shrink-0 place-items-center border border-line font-mono text-[7px] text-ink-muted">
              M
              <span className="absolute -bottom-0.5 -right-0.5 size-1 bg-accent" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[9px] text-ink">Maya S.</p>
              <p className="font-mono text-[6.5px] uppercase tracking-[0.1em] text-accent">
                Online
              </p>
            </div>
          </div>
          <span className="shrink-0 font-mono text-[6px] uppercase tracking-[0.12em] text-ink-faint">
            One-to-one
          </span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col justify-center gap-2.5 overflow-hidden px-3 py-3 sm:gap-3 sm:px-4 sm:py-4 lg:justify-end lg:px-5">
          <div className="flex items-center gap-2 pb-1">
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <span className="font-mono text-[6.5px] uppercase tracking-[0.14em] text-ink-faint">
              Today
            </span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>

          {messages.map((message) => (
            <div
              key={`${message.name}-${message.time}`}
              className={`${message.hidden ? "hidden" : "flex"} gap-2 ${
                message.own ? "flex-row-reverse" : ""
              }`}
            >
              <span
                className={`mt-0.5 grid size-5 shrink-0 place-items-center border font-mono text-[7px] ${
                  message.own
                    ? "border-accent/60 text-accent"
                    : "border-line-strong text-ink-muted"
                }`}
              >
                {message.initial}
              </span>
              <div
                className={`max-w-[86%] ${message.own ? "text-right" : ""}`}
              >
                <div
                  className={`flex items-baseline gap-2 ${
                    message.own ? "justify-end" : ""
                  }`}
                >
                  <span className="text-[9px] font-medium text-ink">
                    {message.name}
                  </span>
                  <span className="font-mono text-[7px] text-ink-faint">
                    {message.time}
                  </span>
                </div>

                {message.image ? (
                  <div className="mt-1 inline-block border border-line bg-surface-2 p-[3px]">
                    <Photo className="block h-16 w-28" variant={0} />
                  </div>
                ) : (
                  <p
                    className={`mt-1 inline-block max-w-full rounded-[2px] border px-2.5 py-1.5 text-left text-[9px] leading-snug sm:text-[10px] ${
                      message.own
                        ? "border-accent bg-accent text-accent-ink"
                        : "border-line bg-surface-2 text-ink-muted"
                    }`}
                  >
                    {message.text}
                  </p>
                )}

                {message.seen ? (
                  <p className="mt-1 font-mono text-[6px] uppercase tracking-[0.08em] text-ink-faint">
                    ✓✓ Seen
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-3 mb-3 flex items-center gap-2 border border-line bg-surface px-2 py-1.5 sm:mx-4 sm:mb-4 lg:mx-5">
          <span className="grid size-4 shrink-0 place-items-center border border-line font-mono text-[7px] text-ink-faint">
            +
          </span>
          <span className="min-w-0 flex-1 truncate text-[8px] text-ink-faint">
            Message Maya…
          </span>
          <span className="grid size-5 shrink-0 place-items-center bg-accent font-mono text-[9px] text-accent-ink">
            ↑
          </span>
        </div>
      </div>
    </div>
  );
}
