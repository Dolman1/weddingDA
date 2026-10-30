import { Heart } from "lucide-react";
import { Reveal } from "../ui";

export function Footer() {
  return (
    <footer className="border-t border-dusty-blue/10 bg-neptune-dark py-14 text-center">
      <Reveal>
        <p className="font-serif text-3xl font-light text-ivory/90 md:text-4xl">
          Даниил <span className="italic text-brass/80">&</span> Арина
        </p>
        <p className="mt-2 font-sans text-sm text-ivory/40">
          30.04.2027 · Нижний Новгород
        </p>
        <p className="mt-5 font-serif text-sm italic text-ivory/35">
          С нетерпением ждём вас
        </p>
        <Heart className="mx-auto mt-4 h-4 w-4 text-brass/60" fill="currentColor" />
      </Reveal>
    </footer>
  );
}
