import { useMemo, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Letters } from "../ui";

function FloatingMotifs() {
  const reduce = useReducedMotion();
  const items = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        left: `${6 + ((i * 17) % 88)}%`,
        top: `${8 + ((i * 23) % 78)}%`,
        delay: `${(i % 7) * 0.85}s`,
        duration: `${7 + (i % 5)}s`,
        size: 3 + (i % 4) * 2,
      })),
    []
  );

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items.map((p, i) => (
        <span
          key={i}
          className="petal absolute rounded-full bg-brass/35"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-ivory"
    >
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(126,155,185,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(181,152,90,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(138,154,123,0.10),transparent_50%)]" />
      </motion.div>

      <FloatingMotifs />

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="h-[600px] w-[600px] rounded-full border border-dusty-blue/10 md:h-[800px] md:w-[800px]"
        />
        <motion.div
          animate={reduce ? undefined : { rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-brass/10"
        />
        <div className="absolute inset-16 rounded-full border border-sage/10" />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-sm font-medium uppercase tracking-[0.35em] text-dusty-blue"
        >
          Мы приглашаем вас на нашу свадьбу
        </motion.p>

        <h1 className="mt-6 font-serif text-6xl font-light leading-none tracking-tight text-neptune sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="inline-block whitespace-nowrap">
            <Letters text="Даниил" delay={0.4} />
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mx-3 inline-block font-serif text-4xl italic text-brass sm:text-5xl md:text-6xl lg:text-7xl"
            >
              &
            </motion.span>
          </span>
          <Letters text="Арина" delay={1.05} />
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="mx-auto mt-8 h-px w-48 origin-center bg-gradient-to-r from-transparent via-brass to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="mt-8 font-serif text-2xl font-light italic text-neptune/70 md:text-3xl"
        >
          30 апреля 2027
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16"
        >
          <a
            href="#countdown"
            className="flex flex-col items-center gap-2 text-dusty-blue/60"
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em]">
              Листайте вниз
            </span>
            <motion.span
              animate={reduce ? undefined : { y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
