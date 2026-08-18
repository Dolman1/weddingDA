import { Flourish, Reveal } from "../ui";

export function QuoteBand() {
  return (
    <section className="relative overflow-hidden bg-neptune py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(181,152,90,0.16),transparent_65%)]" />
      <Reveal className="relative mx-auto max-w-3xl px-8 text-center">
        <Flourish className="mx-auto mb-6 h-5 w-44 text-brass/50" />
        <p className="font-serif text-2xl font-light italic leading-relaxed text-ivory/90 md:text-3xl">
          Этот день мы хотим разделить
          <br className="hidden sm:block" /> с самыми близкими
        </p>
        <Flourish className="mx-auto mt-6 h-5 w-44 rotate-180 text-brass/50" />
      </Reveal>
    </section>
  );
}
