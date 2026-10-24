import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}
