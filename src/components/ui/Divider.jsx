import { motion, useReducedMotion } from "motion/react";
import { Heart } from "lucide-react";

export function Divider() {
  const reduce = useReducedMotion();

  return (
    <div className="flex items-center justify-center gap-4 py-5">
      <div className="h-px w-12 bg-dusty-blue/30 sm:w-16" />
      <motion.span
        animate={reduce ? undefined : { scale: [1, 1.18, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="inline-flex"
      >
        <Heart className="h-4 w-4 text-brass" fill="currentColor" />
      </motion.span>
      <div className="h-px w-12 bg-dusty-blue/30 sm:w-16" />
    </div>
  );
}
