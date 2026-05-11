import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  photo: string | null;
  name: string;
  role: string;
  q: string;
}

interface Props {
  testimonials: Testimonial[];
  interval?: number;
}

export default function TestimonialsCarousel({ testimonials, interval = 5000 }: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 250);
  }, [animating]);

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = useCallback(() => goTo((current + 1) % testimonials.length), [current, testimonials.length, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [paused, next, interval]);

  const item = testimonials[current];
  const initials = item.name.split(" ").map((n) => n[0]).join("");

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main card */}
      <div
        className="bg-white border border-brand-border p-10 md:p-14 transition-opacity duration-250"
        style={{ opacity: animating ? 0 : 1 }}
      >
        {/* Quote mark */}
        <div className="text-6xl text-brand-primary/20 font-serif leading-none mb-4 select-none">"</div>

        <blockquote className="text-xl md:text-2xl leading-relaxed text-brand-text italic font-normal mb-8">
          {item.q.replace(/^"|"$/g, "")}
        </blockquote>

        <div className="flex items-center gap-4">
          {item.photo ? (
            <img
              src={item.photo}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover flex-shrink-0 border border-brand-border"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-brand-bg border border-brand-border flex-shrink-0 flex items-center justify-center text-brand-text/50 font-medium">
              {initials}
            </div>
          )}
          <div>
            <div className="font-semibold text-brand-text text-sm">{item.name}</div>
            <div className="text-brand-text/50 text-sm">{item.role}</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current ? "bg-brand-primary w-6" : "bg-brand-border hover:bg-brand-primary/40"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-9 h-9 border border-brand-border flex items-center justify-center text-brand-text/50 hover:border-brand-primary hover:text-brand-primary transition-colors text-sm"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-9 h-9 border border-brand-border flex items-center justify-center text-brand-text/50 hover:border-brand-primary hover:text-brand-primary transition-colors text-sm"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      {/* Progress bar */}
      {!paused && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-border overflow-hidden" style={{ bottom: "-1px" }}>
          <div
            key={current}
            className="h-full bg-brand-primary"
            style={{
              animation: `progress ${interval}ms linear`,
              width: "100%",
              transformOrigin: "left",
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
