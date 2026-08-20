import { motion } from "motion/react";
import { Shirt } from "lucide-react";
import { easeOut } from "../../constants";
import { Divider, Reveal } from "../ui";

const colors = [
  { name: "Морская глубина", hex: "#2c3e6b" },
  { name: "Пыльная лазурь", hex: "#7e9bb9" },
  { name: "Шалфей", hex: "#8a9a7b" },
  { name: "Лён", hex: "#b5b3ae" },
  { name: "Латунь", hex: "#b5985a" },
];

export function DresscodeSection() {
  return (
    <section id="dresscode" className="relative scroll-mt-16 bg-cream py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-brass">
            Дресс-код
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-neptune md:text-5xl lg:text-6xl">
            Что надеть
          </h2>
          <Divider />
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center" delay={0.15}>
          <p className="font-sans text-base leading-relaxed text-neptune/70 md:text-lg">
            Мы будем рады, если ваш образ будет выдержан в&nbsp;нежных,
            приглушённых тонах нашей свадебной палитры. Пожалуйста,
            воздержитесь от&nbsp;
            <span className="font-medium text-neptune">чёрных костюмов и чёрных платьев</span>.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="mx-auto mt-14 flex flex-wrap items-center justify-center gap-5"
        >
          {colors.map((c) => (
            <motion.div
              key={c.name}
              variants={{
                hidden: { opacity: 0, scale: 0.55, y: 18 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
              }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="h-20 w-20 rounded-full border-4 border-ivory shadow-md transition-transform duration-300 hover:scale-110 md:h-24 md:w-24"
                style={{ backgroundColor: c.hex }}
              />
              <span className="font-sans text-xs font-medium tracking-wider text-neptune/70">
                {c.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-12 text-center" delay={0.2}>
          <div className="inline-flex items-center gap-2 rounded-full border border-dusty-blue/20 bg-ivory/80 px-5 py-3 shadow-sm">
            <Shirt className="h-4 w-4 text-neptune/50" />
            <span className="font-sans text-sm text-neptune/70">
              Полуформальный стиль · Cocktail / Semi-formal
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
