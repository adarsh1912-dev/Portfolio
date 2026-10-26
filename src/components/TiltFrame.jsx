import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export default function TiltFrame({ children, className = "" }) {
  const frame = useRef(null);
  const raf = useRef(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType === "touch") return;

    const element = frame.current;
    if (!element) return;

    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      element.style.setProperty("--tilt-x", `${(-y * 1.6).toFixed(2)}deg`);
      element.style.setProperty("--tilt-y", `${(x * 2.2).toFixed(2)}deg`);
    });
  };

  const resetTilt = () => {
    cancelAnimationFrame(raf.current);

    const element = frame.current;
    if (!element) return;

    element.style.setProperty("--tilt-x", "0deg");
    element.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      ref={frame}
      className={`tilt-frame ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
    >
      <div className="tilt-inner">{children}</div>
    </div>
  );
}
