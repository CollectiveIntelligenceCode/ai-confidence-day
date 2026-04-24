import { motion } from "motion/react";
import { Shield, Users, Target, CheckCircle2, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

export const ChathamHouseRules = () => (
  <div className="chatham-rules-badge">
    <Shield className="w-3 h-3" />
    Chatham House Rules Apply
  </div>
);

export const SectionHeader = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">{title}</h2>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

export const FacilitatorCard = ({ name, role, bio }: { name: string; role: string; bio: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-brand-surface p-8 border border-brand-border hover:border-brand-primary/30 transition-all duration-300 shadow-sm"
  >
    <div className="w-24 h-24 bg-gray-200 mb-6 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden rounded-full">
      {/* Placeholder for headshot */}
      <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs uppercase tracking-widest">
        Photo
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-1">{name}</h3>
    <p className="text-brand-primary text-sm font-semibold uppercase tracking-wider mb-4">{role}</p>
    <p className="text-gray-600 leading-relaxed">{bio}</p>
  </motion.div>
);

export const Testimonial = ({ quote, author }: { quote: string; author: string }) => (
  <div className="bg-brand-surface p-8 border-l-4 border-brand-primary italic shadow-sm">
    <p className="text-lg text-gray-700 mb-4 leading-relaxed">"{quote}"</p>
    <p className="text-brand-primary font-semibold not-italic">— {author}</p>
  </div>
);

export const LogoCarousel = () => {
  const logos = [
    "Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix", "Salesforce", "Adobe"
  ];
  
  return (
    <div className="py-12 border-y border-brand-border overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">Trusted by leaders from</p>
      </div>
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="text-2xl font-bold text-gray-300 hover:text-brand-primary transition-colors cursor-default uppercase tracking-tighter">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "The only room where I felt I could actually admit what I didn't know. I left with a framework I use every single day.",
      author: "CEO, Global Logistics",
      role: "Past Attendee"
    },
    {
      quote: "Finally, a session that cuts through the hype and gives CXOs the actual tools to lead organizational change.",
      author: "Board Member, FTSE 100",
      role: "Past Attendee"
    },
    {
      quote: "Chris and Rujuta create a safe house for leadership. The hands-on workflows saved me hours of administrative load immediately.",
      author: "Founder, Tech Scale-up",
      role: "Past Attendee"
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="What Peers Are Saying" subtitle="Chatham House Rules apply to our feedback too. Honest reflections from previous high-trust sessions." />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i}>
              <Testimonial quote={t.quote} author={t.author} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTAButton = ({ children, variant = "primary", className = "" }: { children: ReactNode; variant?: "primary" | "secondary"; className?: string }) => {
  const baseStyles = "px-8 py-4 font-bold uppercase tracking-widest transition-all duration-300 text-sm rounded-lg";
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-black",
    secondary: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
  };
  
  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
