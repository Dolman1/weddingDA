import { useEffect, useState } from "react";

function getCountdown(target) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff === 0,
  };
}

export function useCountdown(target) {
  const [value, setValue] = useState(() => getCountdown(target));

  useEffect(() => {
    const id = window.setInterval(() => setValue(getCountdown(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return value;
}
