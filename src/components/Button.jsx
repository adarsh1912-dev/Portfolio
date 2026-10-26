import { motion, useReducedMotion } from "motion/react";

const variants = {
  primary:
    "border border-ink bg-ink text-paper hover:border-accent hover:bg-accent hover:text-ink",
  secondary:
    "border border-line bg-transparent text-ink hover:border-ink hover:bg-surface",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon: Icon,
  className = "",
  ...props
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      whileHover={reduceMotion ? undefined : { y: -1 }}
      whileTap={reduceMotion ? undefined : { y: 0, scale: 0.99 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 px-5 py-3 font-sans text-[13px] font-medium tracking-[-0.01em] transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {Icon ? (
        <Icon
          aria-hidden="true"
          className="size-3.5 transition-transform duration-200 group-hover:translate-y-0.5"
          strokeWidth={1.75}
        />
      ) : null}
    </motion.a>
  );
}
