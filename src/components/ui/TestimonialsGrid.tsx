interface Testimonial {
  photo: string | null;
  name: string;
  role: string;
  q: string;
}

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialsGrid({ testimonials }: Props) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
      {testimonials.map((item, idx) => {
        const initials = item.name.split(" ").map((n) => n[0]).join("");
        return (
          <div
            key={idx}
            className="break-inside-avoid bg-white border border-brand-border p-8 mb-6"
          >
            <div className="text-4xl text-brand-primary/20 font-serif leading-none mb-3 select-none">"</div>
            <blockquote className="text-base leading-relaxed text-brand-text italic font-normal mb-6">
              {item.q.replace(/^\"|\"$/g, "")}
            </blockquote>
            <div className="flex items-center gap-3">
              {item.photo ? (
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-brand-border"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-brand-bg border border-brand-border flex-shrink-0 flex items-center justify-center text-brand-text/50 font-medium text-sm">
                  {initials}
                </div>
              )}
              <div>
                <div className="font-semibold text-brand-text text-sm">{item.name}</div>
                <div className="text-brand-text/50 text-xs">{item.role}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
