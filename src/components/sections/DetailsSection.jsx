import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Divider, Reveal } from "../ui";

export function DetailsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  const card1Y = useTransform(smooth, [0, 0.5], [120, 0]);
  const card2Y = useTransform(smooth, [0.05, 0.55], [120, 0]);
  const card3Y = useTransform(smooth, [0.1, 0.6], [120, 0]);
  const card1O = useTransform(smooth, [0, 0.35], [0, 1]);
  const card2O = useTransform(smooth, [0.05, 0.4], [0, 1]);
  const card3O = useTransform(smooth, [0.1, 0.45], [0, 1]);

  const details = [
    {
      icon: CalendarDays,
      title: "Дата",
      text: "30 апреля 2027",
      sub: "Пятница",
      y: card1Y,
      o: card1O,
    },
    {
      icon: Clock,
      title: "Время",
      text: "17:00",
      sub: "Сбор гостей",
      y: card2Y,
      o: card2O,
    },
    {
      icon: MapPin,
      title: "Место",
      text: "Набережная Гребного канала",
      sub: "д. 109, Нижний Новгород",
      y: card3Y,
      o: card3O,
    },
  ];

  return (
    <section id="details" ref={ref} className="relative scroll-mt-16 bg-cream pb-32 pt-10 md:pb-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-brass">
            Детали торжества
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-neptune md:text-5xl lg:text-6xl">
            Когда и где
          </h2>
          <Divider />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {details.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={i}
                style={{ y: d.y, opacity: d.o }}
                className="group rounded-2xl border border-dusty-blue/15 bg-ivory/80 p-8 text-center shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:border-brass/30 hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-dusty-blue/10 text-neptune transition-all duration-300 group-hover:scale-110 group-hover:bg-brass/15 group-hover:text-brass">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-dusty-blue">
                  {d.title}
                </p>
                <p className="mt-2 font-serif text-2xl font-medium text-neptune">
                  {d.text}
                </p>
                <p className="mt-1 font-sans text-sm text-neptune/60">{d.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
