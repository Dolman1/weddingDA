import { motion } from "motion/react";
import { easeOut } from "../../constants";

export function MiniHeader({ visible }) {
  return (
    <motion.header
      initial={false}
      animate={{ y: visible ? 0 : -88, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.45, ease: easeOut }}
      className="fixed left-0 right-0 top-0 z-40 border-b border-dusty-blue/10 bg-ivory/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 pr-16 md:px-8">
        <a href="#hero" className="font-serif text-lg text-neptune md:text-xl">
          Даниил <span className="italic text-brass">&</span> Арина
        </a>
        <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-dusty-blue">
          30.04.2027
        </span>
      </div>
    </motion.header>
  );
}
