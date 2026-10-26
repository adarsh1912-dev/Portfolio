const mono = "JetBrains Mono, ui-monospace, monospace";

const layers = [
  {
    id: "interface",
    y: 28,
    label: "INTERFACE",
    tech: "React · Tailwind",
    active: false,
  },
  {
    id: "logic",
    y: 118,
    label: "LOGIC",
    tech: "Node.js · Express",
    active: true,
  },
  {
    id: "data",
    y: 208,
    label: "DATA",
    tech: "MongoDB · PostgreSQL",
    active: false,
  },
];

export default function HeroDiagramArt() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <svg
        viewBox="0 0 360 300"
        className="h-full w-full"
        role="presentation"
        focusable="false"
      >
        <defs>
          <pattern
            id="hero-grid-fallback"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M30 0H0V30"
              fill="none"
              stroke="#2A2A26"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>

        <rect
          width="360"
          height="300"
          fill="url(#hero-grid-fallback)"
          opacity="0.22"
        />

        <g stroke="#3C3C35" strokeWidth="1" fill="none">
          <path d="M12 20v-8h8" />
          <path d="M348 20v-8h-8" />
          <path d="M12 280v8h8" />
          <path d="M348 280v8h-8" />
        </g>

        <g stroke="#2A2A26" strokeWidth="1">
          <line x1="10" y1="28" x2="10" y2="270" />
          <line x1="7" y1="28" x2="13" y2="28" />
          <line x1="7" y1="270" x2="13" y2="270" />
          <line x1="7" y1="118" x2="13" y2="118" />
          <line x1="7" y1="180" x2="13" y2="180" />
          <line x1="7" y1="208" x2="13" y2="208" />
        </g>

        {layers.map((layer, index) => (
          <g key={layer.id}>
            <rect
              x="26"
              y={layer.y}
              width="218"
              height="62"
              fill={layer.active ? "#161a0d" : "#121211"}
              stroke={layer.active ? "#C9F24D" : "#3C3C35"}
              strokeOpacity={layer.active ? "0.65" : "1"}
            />
            {layer.active ? (
              <rect x="26" y={layer.y} width="2" height="62" fill="#C9F24D" />
            ) : null}
            <text
              x="40"
              y={layer.y + 25}
              fill="#EDEAE1"
              fontFamily={mono}
              fontSize="9"
              letterSpacing="1.8"
            >
              {layer.label}
            </text>
            <text
              x="40"
              y={layer.y + 43}
              fill="#A6A299"
              fontFamily={mono}
              fontSize="9"
              letterSpacing="0.3"
            >
              {layer.tech}
            </text>
            <text
              x="230"
              y={layer.y + 25}
              fill="#858176"
              fontFamily={mono}
              fontSize="8"
              letterSpacing="1"
              textAnchor="end"
            >
              0{index + 1}
            </text>
            {index === 0 ? (
              <circle cx="230" cy={layer.y + 40} r="2.4" fill="#C9F24D" />
            ) : null}
          </g>
        ))}

        <g stroke="#858176" strokeWidth="1" strokeDasharray="2 3">
          <line x1="118" y1="90" x2="118" y2="114" />
          <line x1="118" y1="180" x2="118" y2="204" />
        </g>
        <path d="M118 118l-3-5h6z" fill="#858176" />
        <path d="M118 208l-3-5h6z" fill="#858176" />

        <g fill="#858176" fontFamily={mono} fontSize="7.5" letterSpacing="1.3">
          <text x="128" y="106">
            JSON
          </text>
          <text x="128" y="196">
            QUERY
          </text>
        </g>

        <g stroke="#3C3C35" strokeWidth="1">
          <line x1="244" y1="59" x2="256" y2="59" />
          <line x1="244" y1="149" x2="256" y2="149" />
          <line x1="244" y1="239" x2="256" y2="239" />
        </g>
        <g fill="#858176" fontFamily={mono} fontSize="7.5" letterSpacing="1.3">
          <text x="260" y="62">
            RENDERS
          </text>
          <text x="260" y="152">
            VALIDATES
          </text>
          <text x="260" y="242">
            PERSISTS
          </text>
        </g>

        <g stroke="#2A2A26" strokeWidth="1">
          <line x1="26" y1="282" x2="344" y2="282" />
          <line x1="26" y1="278" x2="26" y2="286" />
          <line x1="344" y1="278" x2="344" y2="286" />
        </g>
        <rect x="30" y="289" width="3" height="3" fill="#C9F24D" />
        <text
          x="40"
          y="293"
          fill="#858176"
          fontFamily={mono}
          fontSize="7.5"
          letterSpacing="1.3"
        >
          REQUEST → RESPONSE
        </text>
        <text
          x="344"
          y="293"
          fill="#858176"
          fontFamily={mono}
          fontSize="7.5"
          letterSpacing="1.3"
          textAnchor="end"
        >
          V1.0
        </text>
      </svg>
    </div>
  );
}
