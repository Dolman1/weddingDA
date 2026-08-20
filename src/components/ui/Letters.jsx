import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "../../constants";

export function Letters({ text, delay = 0, className = "" }) {
  const reduce = useReducedMotion();

  const wrapClass = `inline-block whitespace-nowrap ${className}`.trim();

  if (reduce) {
    return <span className={wrapClass}>{text}</span>;
  }

  return (
    <span className={wrapClass} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: delay + i * 0.07, ease: easeOut }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}
