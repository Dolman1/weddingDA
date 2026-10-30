import { useRef } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "motion/react";
import { easeOut, schedule } from "../../constants";
import { Divider, Reveal } from "../ui";

function ScheduleItem({ item, i, isEven }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <Reveal
      delay={i * 0.06}
      className={`relative mb-12 flex items-start gap-6 pl-16 last:mb-0 md:pl-0 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div
        ref={ref}
        className="absolute left-4 top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-brass bg-ivory md:left-1/2 md:-translate-x-1/2"
      >
        <motion.div
          animate={inView ? { scale: [0, 1.3, 1] } : { scale: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="h-2 w-2 rounded-full bg-brass"
        />
      </div>

      <div
        className={`w-full md:w-1/2 ${
          isEven ? "md:pr-14 md:text-right" : "md:pl-14 md:text-left"
        }`}
      >
        <span className="font-sans text-sm font-semibold uppercase tracking-widest text-brass">
          {item.time}
        </span>
        <h3 className="mt-1 font-serif text-2xl font-medium text-neptune">
          {item.title}
        </h3>
        <p className="mt-1 font-sans text-sm leading-relaxed text-neptune/60">
          {item.desc}
        </p>
      </div>

      <div className="hidden w-1/2 md:block" />
    </Reveal>
  );
}

export function ScheduleSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineScale = useSpring(useTransform(scrollYProgress, [0.1, 0.7], [0, 1]), {
    stiffness: 80,
    damping: 20,
  });

  return (
    <section
      id="schedule"
      ref={containerRef}
      className="relative scroll-mt-16 overflow-hidden bg-ivory py-32 md:py-40"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-sage/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-dusty-blue/5 blur-3xl" />

      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-brass">
            Программа дня
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-neptune md:text-5xl lg:text-6xl">
            Как пройдёт день
          </h2>
          <Divider />
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-dusty-blue/15 md:left-1/2 md:-translate-x-px">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top bg-gradient-to-b from-brass via-dusty-blue to-sage"
            />
          </div>

          {schedule.map((item, i) => (
            <ScheduleItem key={item.time} item={item} i={i} isEven={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
