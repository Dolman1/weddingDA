import { useEffect } from "react";

let lockCount = 0;
let savedY = 0;

const SCROLL_KEYS = new Set([
  " ",
  "Spacebar",
  "ArrowUp",
  "ArrowDown",
  "PageUp",
  "PageDown",
  "Home",
  "End",
]);

function onKeyDown(e) {
  if (!SCROLL_KEYS.has(e.key)) return;
  const tag = e.target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) return;
  e.preventDefault();
}

function applyLock() {
  savedY = window.scrollY;
  document.documentElement.classList.add("scroll-locked");
  document.body.style.position = "fixed";
  document.body.style.top = `-${savedY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  window.addEventListener("keydown", onKeyDown, { passive: false });
}

export function setScrollLockRestoreY(y) {
  savedY = Math.max(0, y);
}

function releaseLock() {
  document.documentElement.classList.remove("scroll-locked");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  window.removeEventListener("keydown", onKeyDown);

  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, savedY);
  html.style.scrollBehavior = previous;
}

export function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;

    if (lockCount === 0) applyLock();
    lockCount += 1;

    return () => {
      lockCount -= 1;
      if (lockCount === 0) releaseLock();
    };
  }, [locked]);
}
