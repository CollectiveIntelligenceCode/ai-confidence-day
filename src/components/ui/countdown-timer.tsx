import { useEffect, useRef, useState } from "react";
import { useAnimate } from "motion/react";

// 31 May 2026 23:59:59 BST (UTC+1)
const DEADLINE = "2026-05-31T23:59:59+01:00";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type Unit = "Day" | "Hour" | "Minute" | "Second";

interface CountdownItemProps {
  unit: Unit;
  label: string;
  compact?: boolean;
}

function CountdownItem({ unit, label, compact = false }: CountdownItemProps) {
  const { ref, time } = useTimer(unit);
  const display = unit === "Second" || unit === "Minute" || unit === "Hour"
    ? String(time).padStart(2, "0")
    : String(time);

  if (compact) {
    return (
      <div className="flex items-baseline gap-[2px]">
        <div className="relative overflow-hidden">
          <span
            ref={ref}
            className="block text-[11px] font-bold tabular-nums text-brand-primary font-quicksand"
          >
            {display}
          </span>
        </div>
        <span className="text-[9px] font-semibold uppercase text-brand-primary/60 tracking-[0.5px]">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative overflow-hidden">
        <span
          ref={ref}
          className="block text-4xl font-bold tabular-nums text-brand-primary font-quicksand"
        >
          {display}
        </span>
      </div>
      <span className="text-[10px] font-semibold uppercase text-brand-text/40 tracking-[2px]">
        {label}
      </span>
    </div>
  );
}

function useTimer(unit: Unit) {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeRef = useRef(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const handleCountdown = async () => {
      const distance = new Date(DEADLINE).getTime() - Date.now();

      let newTime = 0;
      switch (unit) {
        case "Day":    newTime = Math.max(0, Math.floor(distance / DAY)); break;
        case "Hour":   newTime = Math.max(0, Math.floor((distance % DAY) / HOUR)); break;
        case "Minute": newTime = Math.max(0, Math.floor((distance % HOUR) / MINUTE)); break;
        default:       newTime = Math.max(0, Math.floor((distance % MINUTE) / SECOND));
      }

      if (newTime !== timeRef.current) {
        if (ref.current) {
          await animate(ref.current, { y: ["0%", "-50%"], opacity: [1, 0] }, { duration: 0.25 });
        }
        timeRef.current = newTime;
        setTime(newTime);
        if (ref.current) {
          await animate(ref.current, { y: ["50%", "0%"], opacity: [0, 1] }, { duration: 0.25 });
        }
      }
    };

    handleCountdown();
    intervalRef.current = setInterval(handleCountdown, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, time };
}

/** Compact strip for the sticky navbar */
export function NavCountdown() {
  return (
    <div className="flex items-center gap-2 mt-0.5">
      <CountdownItem unit="Day" label="d" compact />
      <span className="text-[9px] text-brand-primary/40 font-bold">·</span>
      <CountdownItem unit="Hour" label="h" compact />
      <span className="text-[9px] text-brand-primary/40 font-bold">·</span>
      <CountdownItem unit="Minute" label="m" compact />
      <span className="text-[9px] text-brand-primary/40 font-bold">·</span>
      <CountdownItem unit="Second" label="s" compact />
    </div>
  );
}

/** Full-size countdown for the pricing section */
export default function ShiftingCountdown() {
  return (
    <div className="flex items-center gap-8 my-6">
      <CountdownItem unit="Day" label="Days" />
      <CountdownItem unit="Hour" label="Hours" />
      <CountdownItem unit="Minute" label="Minutes" />
      <CountdownItem unit="Second" label="Seconds" />
    </div>
  );
}
