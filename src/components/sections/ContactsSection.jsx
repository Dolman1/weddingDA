import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { Divider, Reveal } from "../ui";

export function ContactsSection() {
  return (
    <section id="contacts" className="relative scroll-mt-16 bg-ivory py-32 md:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-brass">
            Контакты
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-neptune md:text-5xl lg:text-6xl">
            Остались вопросы?
          </h2>
          <Divider />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 font-sans text-base leading-relaxed text-neptune/70 md:text-lg">
            Если у вас есть вопросы по организации, не стесняйтесь обращаться.
            Будем благодарны, если заранее подтвердите своё присутствие.
          </p>
          <motion.a
            href="tel:+111111111"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-dusty-blue/20 bg-cream/80 px-6 py-4 shadow-sm"
          >
            <Phone className="h-5 w-5 text-neptune" />
            <span className="font-sans text-lg font-medium text-neptune transition-colors hover:text-brass">
              +1 (111) 111-11-11
            </span>
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
