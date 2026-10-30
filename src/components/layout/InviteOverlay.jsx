import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Heart } from "lucide-react";
import { Flourish } from "../ui";

export function InviteOverlay({ onOpened }) {
  const [opening, setOpening] = useState(false);
  const reduce = useReducedMotion();
  const timerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const open = () => {
    if (opening) return;
    try {
      sessionStorage.setItem("da-invite-open", "1");
    } catch {
      /* ignore */
    }
    if (reduce) {
      onOpened();
      return;
    }
    setOpening(true);
    timerRef.current = window.setTimeout(onOpened, 1100);
  };

  return (
    <div className={`fixed inset-0 z-[100] overflow-hidden overscroll-none ${opening ? "pointer-events-none" : ""}`}>
      <motion.div
        animate={opening ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.08 }}
        className="absolute inset-x-0 top-0 h-1/2 bg-ivory"
      />
      <motion.div
        animate={opening ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.08 }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-ivory"
      />

      <motion.div
        animate={opening ? { opacity: 0, scale: 0.96 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[420px] w-[420px] rounded-full border border-dusty-blue/15 md:h-[560px] md:w-[560px]" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-sans text-xs font-medium uppercase tracking-[0.4em] text-dusty-blue"
        >
          Приглашение на свадьбу
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-5 font-serif text-5xl font-light text-neptune sm:text-6xl md:text-7xl"
        >
          Даниил
          <span className="mx-2 italic text-brass">&</span>
          Арина
        </motion.h2>

        <Flourish className="mt-6 h-6 w-52 text-brass/55" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-5 font-serif text-xl italic text-neptune/70"
        >
          30 апреля 2027
        </motion.p>

        <motion.button
          type="button"
          onClick={open}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="mt-12 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-brass text-ivory shadow-[0_10px_32px_rgba(181,152,90,0.45)] ring-4 ring-brass/15"
          aria-label="Открыть приглашение"
        >
          <Heart className="h-6 w-6" fill="currentColor" />
          <span className="mt-1 font-sans text-[10px] font-medium uppercase tracking-[0.18em]">
            Открыть
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}
