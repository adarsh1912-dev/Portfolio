import {
  Component,
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
} from "react";
import { useReducedMotion } from "motion/react";
import HeroDiagramArt from "./HeroDiagramArt.jsx";

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
    <figure className="relative overflow-hidden border border-line bg-surface/50">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <figcaption className="mono-label">Fig. 01 — Core</figcaption>
        <span className="mono-label flex items-center gap-2">
          <span aria-hidden="true" className="size-1 bg-accent" />
          {live ? "Interactive" : "Static"}
        </span>
      </div>

      <div
        ref={stageRef}
        className="hero-stage relative aspect-[6/5] w-full overflow-hidden"
      >
        {live ? (
          <SceneBoundary
            fallback={<HeroDiagramArt />}
            onError={() => setSceneFailed(true)}
          >
            <Suspense fallback={<HeroDiagramArt />}>
              <div
                className="hero-scene-in absolute inset-0"
                aria-hidden="true"
              >
                <HeroScene active={active} />
              </div>
            </Suspense>
          </SceneBoundary>
        ) : (
          <HeroDiagramArt />
        )}

        {live ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between"
          >
            <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-ink-faint">
              Core / 001
            </span>
            <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-ink-faint">
              Pointer
            </span>
          </div>
        ) : null}
      </div>

      <div className="flex items-center justify-between border-t border-line px-4 py-3">
        <span className="mono-label">Interface → data</span>
        <span className="mono-label">
          {live ? "Pointer active" : "Static study"}
        </span>
      </div>
    </figure>
  );
}
