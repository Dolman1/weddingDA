import { sectionIds, sectionLabels } from "../../constants";

export function NavDots({ activeIndex }) {
  return (
    <nav className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      {sectionIds.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={sectionLabels[i]}
          aria-current={i === activeIndex ? "true" : undefined}
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
