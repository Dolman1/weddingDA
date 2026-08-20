import { useEffect, useState } from "react";
import { AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { sectionIds } from "./constants";
import { useScrollLock } from "./hooks/useScrollLock";
import {
  Footer,
  InviteOverlay,
  MiniHeader,
  MobileNav,
  NavDots,
  ScrollProgress,
} from "./components/layout";
import {
  ContactsSection,
  CountdownSection,
  DetailsSection,
  DresscodeSection,
  HeroSection,
  MapSection,
  QuoteBand,
  ScheduleSection,
  WishesSection,
} from "./components/sections";

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [showHeader, setShowHeader] = useState(false);
  const [showInvite, setShowInvite] = useState(() => {
    try {
      return sessionStorage.getItem("da-invite-open") !== "1";
    } catch {
      return true;
    }
  });

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => {
    setShowHeader(v > 480);
  });

  useScrollLock(showInvite);

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
    <div className="min-h-dvh">
      <div inert={showInvite || undefined}>
        <ScrollProgress />
        <MiniHeader visible={showHeader && !showInvite} />
        <NavDots activeIndex={activeSection} />
        <MobileNav activeIndex={activeSection} />

        <HeroSection />
        <CountdownSection />
        <DetailsSection />
        <QuoteBand />
        <ScheduleSection />
        <DresscodeSection />
        <WishesSection />
        <MapSection />
        <ContactsSection />
        <Footer />
      </div>

      <AnimatePresence>
        {showInvite && <InviteOverlay onOpened={() => setShowInvite(false)} />}
      </AnimatePresence>
    </div>
  );
}
