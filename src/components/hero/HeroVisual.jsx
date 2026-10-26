import {
  Component,
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
} from "react";
import { useReducedMotion } from "motion/react";
import HeroStackArt from "./HeroStackArt.jsx";

const HeroScene = lazy(() => import("./HeroScene.jsx"));

class SceneBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError?.();
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function canUseWebGL() {
  if (typeof window === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

export default function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const [webgl, setWebgl] = useState(false);
  const [sceneFailed, setSceneFailed] = useState(false);
  const [active, setActive] = useState(true);
  const stageRef = useRef(null);

  useEffect(() => {
    setWebgl(canUseWebGL());
  }, []);

  useEffect(() => {
    const element = stageRef.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "120px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const showScene = webgl && !reduceMotion;
  const live = showScene && !sceneFailed;

  return (
    <figure
      ref={stageRef}
      className="night-panel relative h-full min-h-[24rem] w-full overflow-hidden"
    >
      <div className="stack-stage absolute inset-0" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/25"
      />

      {live ? (
        <SceneBoundary
          fallback={<HeroStackArt />}
          onError={() => setSceneFailed(true)}
        >
          <Suspense fallback={<HeroStackArt />}>
            <div
              className="hero-scene-in absolute inset-0"
              aria-hidden="true"
            >
              <HeroScene active={active} />
            </div>
          </Suspense>
        </SceneBoundary>
      ) : (
        <HeroStackArt />
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-5 top-5 flex items-start justify-between gap-4"
      >
        <span className="mono-label text-ink-faint">
          Specimen 01 / 03 layers
        </span>
        <span className="mono-label flex shrink-0 items-center gap-2 text-ink-faint">
          <span className="size-1 bg-accent" />
          {live ? "Interactive" : "Static"}
        </span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-4"
      >
        <ol className="flex flex-wrap gap-x-5 gap-y-1">
          {["Interface", "Logic", "Data"].map((label, index) => (
            <li
              key={label}
              className="mono-label flex items-baseline gap-1.5"
            >
              <span
                className={index === 0 ? "text-accent" : "text-ink-faint"}
              >
                0{index + 1}
              </span>
              <span className="text-ink-muted">{label}</span>
            </li>
          ))}
        </ol>
        <span className="mono-label hidden shrink-0 text-ink-faint sm:block">
          {live ? "Pointer / rotate" : "Specimen study"}
        </span>
      </div>

      <figcaption className="sr-only">
        An interactive 3D specimen of three stacked material layers
        representing interface, logic, and data.
      </figcaption>
    </figure>
  );
}
