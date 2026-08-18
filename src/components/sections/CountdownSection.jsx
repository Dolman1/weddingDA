import { AnimatePresence, motion } from "motion/react";
import { CalendarDays, CalendarPlus } from "lucide-react";
import { WEDDING_AT, downloadIcs, easeOut, googleCalUrl } from "../../constants";
import { useCountdown } from "../../hooks/useCountdown";
import { Reveal } from "../ui";

function CountUnit({ value, label }) {
  const padded = String(value).padStart(2, "0");

  return (
    <div className="flex min-w-[4.5rem] flex-col items-center sm:min-w-[5.5rem]">
      <div className="relative flex h-16 w-full items-center justify-center overflow-hidden rounded-xl border border-dusty-blue/15 bg-ivory/80 shadow-sm sm:h-20">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={padded}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.28, ease: easeOut }}
            className="absolute font-serif text-3xl font-medium tabular-nums text-neptune sm:text-4xl"
          >
            {padded}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-dusty-blue sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export function CountdownSection() {
  const t = useCountdown(WEDDING_AT);

  return (
    <section id="countdown" className="relative bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-brass">
            {t.done ? "Этот день настал" : "До нашего дня"}
          </p>
          {!t.done && (
            <div
              className="mt-8 flex items-end justify-center gap-3 sm:gap-5"
              aria-live="polite"
              aria-atomic="true"
            >
              <CountUnit value={t.days} label="дней" />
              <CountUnit value={t.hours} label="часов" />
              <CountUnit value={t.minutes} label="минут" />
              <CountUnit value={t.seconds} label="секунд" />
            </div>
          )}
          {t.done && (
            <p className="mt-4 font-serif text-2xl italic text-neptune">
              Мы уже празднуем
            </p>
          )}
        </Reveal>

      </div>
    </section>
  );
}
