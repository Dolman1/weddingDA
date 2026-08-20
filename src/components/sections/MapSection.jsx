import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Check, Copy, MapPin } from "lucide-react";
import { ADDRESS } from "../../constants";
import { Divider, Reveal } from "../ui";

export function MapSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mapScale = useSpring(useTransform(scrollYProgress, [0.1, 0.5], [0.92, 1]), {
    stiffness: 100,
    damping: 25,
  });
  const mapOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="map" ref={ref} className="relative scroll-mt-16 bg-cream py-32 md:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-brass">
            Место проведения
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light text-neptune md:text-5xl lg:text-6xl">
            Как добраться
          </h2>
          <Divider />
        </Reveal>

        <Reveal className="mt-6 text-center" delay={0.1}>
          <p className="font-sans text-base text-neptune/70 md:text-lg">
            Оранжерея на Гребном, остров Печёрские Пески
            <br />
            Нижний Новгород, Нижегородская обл., 603093
          </p>
          <button
            type="button"
            onClick={copyAddress}
            className="mt-3 inline-flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-wider text-dusty-blue transition-colors hover:text-neptune"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "Скопировано" : "Скопировать адрес"}
          </button>
        </Reveal>

        <motion.div
          style={{ scale: mapScale, opacity: mapOpacity }}
          className="mt-12 overflow-hidden rounded-2xl border border-dusty-blue/15 shadow-lg"
        >
          <iframe
            title="Карта места проведения"
            src="https://yandex.ru/map-widget/v1/?ll=44.069403%2C56.328509&z=14&pt=44.069403%2C56.328509%2Cpm2rdl&lang=ru_RU"
            width="100%"
            height="450"
            allowFullScreen
          />

        </motion.div>

        <Reveal className="mt-8 flex justify-center" delay={0.2}>
          <motion.a
            href="https://yandex.ru/maps/?rtext=~56.328509%2C44.069403&rtt=auto"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border border-neptune/20 bg-neptune px-6 py-3 font-sans text-sm font-medium text-ivory shadow transition-colors hover:bg-neptune-dark"
          >
            <MapPin className="h-4 w-4" />
            Построить маршрут
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
