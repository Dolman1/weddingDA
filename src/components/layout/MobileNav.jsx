import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { sectionIds, sectionLabels } from "../../constants";
import { setScrollLockRestoreY, useScrollLock } from "../../hooks/useScrollLock";

function scrollToSection(id) {
 document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export function MobileNav({ activeIndex }) {
  const [open, setOpen] = useState(false);
  const pendingId = useRef(null);
  useScrollLock(open);

  useEffect(() => {
    if (open) return;
    const id = pendingId.current;
    if (!id) return;
    pendingId.current = null;
    scrollToSection(id);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Открыть меню"
        className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-dusty-blue/20 bg-ivory/80 text-neptune shadow-sm backdrop-blur md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-70 flex flex-col items-center justify-center overflow-hidden overscroll-none bg-ivory/96 backdrop-blur-md md:hidden"
          >
            <button
              type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                  }}
              aria-label="Закрыть меню"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-dusty-blue/20 text-neptune"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="mb-8 font-serif text-2xl font-light text-neptune">
              Даниил <span className="italic text-brass">&</span> Арина
            </p>

            <nav className="flex flex-col items-center gap-5">
              {sectionIds.map((id, i) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    pendingId.current = id;
                    if (id === "hero") setScrollLockRestoreY(0);
                    setOpen(false);
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className={`font-serif text-3xl transition-colors ${
                    i === activeIndex ? "text-brass" : "text-neptune"
                  }`}
                >
                  {sectionLabels[i]}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
