import { useEffect, useRef, useState } from "react";
import { useAnimate } from "motion/react";

// 26 May 2026 23:59:59 BST (UTC+1)
const DEADLINE = "2026-05-26T23:59:59+01:00";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type Unit = "Day" | "Hour" | "Minute" | "Second";

interface CountdownItemProps {
  unit: Unit;
  label: string;
}

function CountdownItem({ unit, label }: CountdownItemProps) {
  const { ref, time } = useTimer(unit);
  const display = unit === "Second" || unit === "Minute" || unit === "Hour"
    ? String(time).padStart(2, "0")
    : String(time);

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

/** Navbar countdown — sits inline, units close together */
export function NavCountdown() {
  return (
    <div className="flex items-center gap-3">
      <NavUnit unit="Day" label="Days" />
      <span className="text-brand-primary/25 font-light">·</span>
      <NavUnit unit="Hour" label="Hrs" />
      <span className="text-brand-primary/25 font-light">·</span>
      <NavUnit unit="Minute" label="Mins" />
      <span className="text-brand-primary/25 font-light">·</span>
      <NavUnit unit="Second" label="Secs" />
    </div>
  );
}

function NavUnit({ unit, label }: { unit: Unit; label: string }) {
  const { ref, time } = useTimer(unit);
  const display =
    unit === "Second" || unit === "Minute" || unit === "Hour"
      ? String(time).padStart(2, "0")
      : String(time);

  return (
    <div className="flex items-baseline gap-1.5">
      <div className="relative overflow-hidden">
        <span
          ref={ref}
          className="block text-xl font-bold tabular-nums text-brand-primary font-quicksand leading-none"
        >
          {display}
        </span>
      </div>
      <span className="text-[10px] font-semibold uppercase text-brand-text/40 tracking-[1px]">
        {label}
      </span>
    </div>
  );
}

/** Full-size countdown for the pricing section */
export default function ShiftingCountdown() {
  return (
    <div className="flex items-center justify-between w-full my-6">
      <CountdownItem unit="Day" label="Days" />
      <CountdownItem unit="Hour" label="Hours" />
      <CountdownItem unit="Minute" label="Minutes" />
      <CountdownItem unit="Second" label="Seconds" />
    </div>
  );
}
