import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
  useMotionValueEvent,
} from "motion/react";
import {
  ChevronDown,
  Heart,
  MapPin,
  Clock,
  CalendarDays,
  Gift,
  Phone,
  Shirt,
} from "lucide-react";

// Neptune #2c3e6b | Dusty Blue #7e9bb9 | Sage Green #8a9a7b
// Gray #b5b3ae | Brass #b5985a | Cream #f7f5f0 | Ivory #fdfcf9

// animation
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <div className="h-px w-16 bg-dusty-blue/30" />
      <Heart className="h-4 w-4 text-brass" fill="currentColor" />
      <div className="h-px w-16 bg-dusty-blue/30" />
    </div>
  );
}

const sectionIds = ["hero", "details", "schedule", "dresscode", "wishes", "map", "contacts"];
const sectionLabels = ["Главная", "Детали", "Программа", "Дресс-код", "Подарки", "Карта", "Контакты"];

function NavDots({ activeIndex }) {
  return (
    <nav className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      {sectionIds.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={sectionLabels[i]}
          className="group relative flex items-center justify-end"
        >
          <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md bg-neptune/90 px-2 py-1 font-sans text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            {sectionLabels[i]}
          </span>
          <span
            className={`block h-2.5 w-2.5 rounded-full border-2 transition-all duration-300 ${
              i === activeIndex
                ? "scale-125 border-brass bg-brass"
                : "border-dusty-blue/50 bg-transparent hover:border-neptune"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}

function HeroSection() {
  const ref = useRef(null);
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ivory"
    >
      {/* декоративный фон */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(126,155,185,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(181,152,90,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(138,154,123,0.10),transparent_50%)]" />
      </motion.div>

      {/* декоративные кольца */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[600px] rounded-full border border-dusty-blue/10 md:h-[800px] md:w-[800px]" />
        <div className="absolute inset-8 rounded-full border border-brass/10" />
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

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-6 font-serif text-6xl font-light leading-none tracking-tight text-neptune sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Даниил
          <span className="mx-3 inline-block font-serif text-4xl italic text-brass sm:text-5xl md:text-6xl lg:text-7xl">
            &
          </span>
          Арина
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mx-auto mt-8 h-px w-48 origin-center bg-gradient-to-r from-transparent via-brass to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-8 font-serif text-2xl font-light italic text-neptune/70 md:text-3xl"
        >
          30 апреля 2027
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-dusty-blue/60"
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em]">
              Листайте вниз
            </span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function DetailsSection() {
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
    <section id="details" ref={ref} className="relative bg-cream py-32 md:py-40">
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
                className="group rounded-2xl border border-dusty-blue/15 bg-ivory/80 p-8 text-center shadow-sm backdrop-blur-sm transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-dusty-blue/10 text-neptune transition-colors group-hover:bg-brass/15 group-hover:text-brass">
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


const schedule = [
  { time: "17:00", title: "Сбор гостей", desc: "Welcome-зона, лёгкие закуски и напитки" },
  { time: "17:30", title: "Церемония", desc: "Торжественная выездная регистрация" },
  { time: "18:00", title: "Фуршет", desc: "Поздравления, общение и коктейли" },
  { time: "19:00", title: "Банкет", desc: "Праздничный ужин, тосты и первый танец" },
  { time: "21:00", title: "Вечерняя программа", desc: "Музыка, танцы, торт и сюрпризы" },
  { time: "23:00", title: "Завершение", desc: "Финальный танец и прощание" },
];

function ScheduleSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineScale = useSpring(
    useTransform(scrollYProgress, [0.1, 0.7], [0, 1]),
    { stiffness: 80, damping: 20 }
  );

  return (
    <section
      id="schedule"
      ref={containerRef}
      className="relative overflow-hidden bg-ivory py-32 md:py-40"
    >
      {/* фоновые декорации */}
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
          {/* вертикальная линия */}
          <div className="absolute left-6 top-0 h-full w-px bg-dusty-blue/15 md:left-1/2 md:-translate-x-px">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top bg-gradient-to-b from-brass via-dusty-blue to-sage"
            />
          </div>

          {schedule.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal
                key={i}
                delay={i * 0.08}
                className={`relative mb-12 flex items-start gap-6 pl-16 last:mb-0 md:pl-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* точка на таймлайне */}
                <div className="absolute left-4 top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-brass bg-ivory md:left-1/2 md:-translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-brass" />
                </div>

                {/* контент */}
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

                {/* пустая половина для десктопа */}
                <div className="hidden w-1/2 md:block" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function DresscodeSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const paletteScale = useTransform(smooth, [0.1, 0.45], [0.85, 1]);
  const paletteOpacity = useTransform(smooth, [0.1, 0.4], [0, 1]);

  const colors = [
    { name: "Neptune", hex: "#2c3e6b" },
    { name: "Dusty Blue", hex: "#7e9bb9" },
    { name: "Sage Green", hex: "#8a9a7b" },
    { name: "Gray", hex: "#b5b3ae" },
    { name: "Brass", hex: "#b5985a" },
  ];

  return (
    <section id="dresscode" ref={ref} className="relative bg-cream py-32 md:py-40">
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
            воздержитесь от&nbsp;<span className="font-medium text-neptune">чёрных костюмов и чёрных платьев</span>.
          </p>
        </Reveal>

        <motion.div
          style={{ scale: paletteScale, opacity: paletteOpacity }}
          className="mx-auto mt-14 flex flex-wrap items-center justify-center gap-5"
        >
          {colors.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-2">
              <div
                className="h-20 w-20 rounded-full border-4 border-ivory shadow-md transition-transform hover:scale-110 md:h-24 md:w-24"
                style={{ backgroundColor: c.hex }}
              />
              <span className="font-sans text-xs font-medium tracking-wider text-neptune/70">
                {c.name}
              </span>
            </div>
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


function WishesSection() {
  return (
    <section id="wishes" className="relative overflow-hidden bg-ivory py-32 md:py-40">
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
          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-brass/20 bg-cream/60 p-10 shadow-sm backdrop-blur-sm">
            <Gift className="mx-auto h-10 w-10 text-brass" />
            <p className="mt-6 font-serif text-xl leading-relaxed text-neptune md:text-2xl">
              Лучший подарок для нас&nbsp;— ваше присутствие и тёплые слова.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-neptune/60">
              Но если вы хотите сделать нам подарок, мы будем благодарны за
              вклад в&nbsp;наше совместное будущее в&nbsp;денежном эквиваленте.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


function MapSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mapScale = useSpring(
    useTransform(scrollYProgress, [0.1, 0.5], [0.92, 1]),
    { stiffness: 100, damping: 25 }
  );
  const mapOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section id="map" ref={ref} className="relative bg-cream py-32 md:py-40">
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
            Набережная Гребного канала, д. 109
            <br />
            Нижний Новгород, Нижегородская обл., 603093
          </p>
        </Reveal>

        <motion.div
          style={{ scale: mapScale, opacity: mapOpacity }}
          className="mt-12 overflow-hidden rounded-2xl border border-dusty-blue/15 shadow-lg"
        >
          <iframe
            title="Карта места проведения"
            src="https://yandex.ru/map-widget/v1/?ll=43.947512%2C56.302990&z=16&pt=43.947512%2C56.302990%2Cpm2rdl&lang=ru_RU"
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
          />
        </motion.div>

        <Reveal className="mt-8 flex justify-center" delay={0.2}>
          <a
            href="https://yandex.ru/maps/?rtext=~56.302990%2C43.947512&rtt=auto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neptune/20 bg-neptune px-6 py-3 font-sans text-sm font-medium text-ivory shadow transition-colors hover:bg-neptune-dark"
          >
            <MapPin className="h-4 w-4" />
            Построить маршрут
          </a>
        </Reveal>
      </div>
    </section>
  );
}


function ContactsSection() {
  return (
    <section id="contacts" className="relative bg-ivory py-32 md:py-40">
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
            Если у вас есть вопросы по организации, не стесняйтесь обращаться:
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-dusty-blue/20 bg-cream/80 px-6 py-4 shadow-sm">
            <Phone className="h-5 w-5 text-neptune" />
            <a
              href="tel:+111111111"
              className="font-sans text-lg font-medium text-neptune transition-colors hover:text-brass"
            >
              +1 (111) 111-11-11
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-dusty-blue/10 bg-neptune-dark py-14 text-center">
      <Reveal>
        <p className="font-serif text-3xl font-light text-ivory/90 md:text-4xl">
          Даниил & Арина
        </p>
        <p className="mt-2 font-sans text-sm text-ivory/40">
          30.04.2027 · Нижний Новгород
        </p>
        <Heart className="mx-auto mt-4 h-4 w-4 text-brass/60" fill="currentColor" />
      </Reveal>
    </footer>
  );
}


export default function App() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionIds.indexOf(entry.target.id);
            if (idx !== -1) setActiveSection(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <NavDots activeIndex={activeSection} />
      <HeroSection />
      <DetailsSection />
      <ScheduleSection />
      <DresscodeSection />
      <WishesSection />
      <MapSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}

