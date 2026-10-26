function Slab({ cx, cy, width, height, thickness, top, left, right }) {
  const topFace = [
    [cx, cy - height / 2],
    [cx + width / 2, cy],
    [cx, cy + height / 2],
    [cx - width / 2, cy],
  ]
    .map((point) => point.join(","))
    .join(" ");

  const leftFace = [
    [cx - width / 2, cy],
    [cx, cy + height / 2],
    [cx, cy + height / 2 + thickness],
    [cx - width / 2, cy + thickness],
  ]
    .map((point) => point.join(","))
    .join(" ");

  const rightFace = [
    [cx, cy + height / 2],
    [cx + width / 2, cy],
    [cx + width / 2, cy + thickness],
    [cx, cy + height / 2 + thickness],
  ]
    .map((point) => point.join(","))
    .join(" ");

  return (
    <g>
      <polygon points={leftFace} fill={left} />
      <polygon points={rightFace} fill={right} />
      <polygon
        points={topFace}
        fill={top}
        stroke={top}
        strokeOpacity="0.7"
        strokeLinejoin="round"
      />
    </g>
  );
}

export default function HeroStackArt() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <svg
        viewBox="0 0 480 560"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        role="presentation"
        focusable="false"
      >
        <ellipse
          cx="252"
          cy="430"
          rx="172"
          ry="24"
          fill="#0F0E0A"
          opacity="0.55"
        />

        <g stroke="#343026" strokeWidth="1">
          <line x1="70" y1="160" x2="70" y2="420" />
          <line x1="65" y1="226" x2="75" y2="226" />
          <line x1="65" y1="292" x2="75" y2="292" />
          <line x1="65" y1="360" x2="75" y2="360" />
        </g>
        <g
          fill="#8B8474"
          fontFamily="IBM Plex Mono, ui-monospace, monospace"
          fontSize="9"
          letterSpacing="1"
          textAnchor="end"
        >
          <text x="58" y="230">
            01
          </text>
          <text x="58" y="296">
            02
          </text>
          <text x="58" y="364">
            03
          </text>
        </g>

        <Slab
          cx={250}
          cy={360}
          width={340}
          height={150}
          thickness={28}
          top="#332F26"
          left="#201E17"
          right="#29261E"
        />
        <Slab
          cx={240}
          cy={292}
          width={306}
          height={136}
          thickness={26}
          top="#A7A093"
          left="#6E685C"
          right="#8A8376"
        />
        <Slab
          cx={256}
          cy={226}
          width={276}
          height={122}
          thickness={24}
          top="#E8DFCF"
          left="#B8AD9A"
          right="#D1C5B0"
        />

        <rect
          x="226"
          y="232"
          width="62"
          height="3"
          fill="#A69B88"
          opacity="0.65"
        />
        <circle cx="330" cy="214" r="8" fill="#D3F04A" />
        <circle cx="327" cy="211" r="2" fill="#F1EBDD" opacity="0.7" />
      </svg>
    </div>
  );
}
