import { motion } from "motion/react";
import { Gift } from "lucide-react";
import { Divider, Reveal } from "../ui";

export function WishesSection() {
  return (
    <section id="wishes" className="relative scroll-mt-16 overflow-hidden bg-ivory py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(181,152,90,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-brass">
            Подарки
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-neptune md:text-5xl lg:text-6xl">
            Пожелания
          </h2>
          <Divider />
        </Reveal>

        <Reveal delay={0.15}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35 }}
            className="mx-auto mt-10 max-w-xl rounded-2xl border border-brass/20 bg-cream/60 p-10 shadow-sm backdrop-blur-sm"
          >
            <Gift className="mx-auto h-10 w-10 text-brass" />
            <p className="mt-6 font-serif text-xl leading-relaxed text-neptune md:text-2xl">
              Лучший подарок для нас&nbsp;— ваше присутствие и тёплые слова.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-neptune/60">
              Но если вы хотите сделать нам подарок, мы будем благодарны за
              вклад в&nbsp;наше совместное будущее в&nbsp;денежном эквиваленте.
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
