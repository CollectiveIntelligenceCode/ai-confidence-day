import { motion } from "motion/react";
import { ChathamHouseRules, SectionHeader, FacilitatorCard, CTAButton, LogoCarousel, TestimonialSection } from "./Common";
import { CheckCircle2, XCircle, Calendar, MapPin, Users } from "lucide-react";

export default function Variant2() {
  return (
    <div className="min-h-screen bg-brand-bg font-quicksand">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-brand-surface border-b border-brand-border">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <ChathamHouseRules />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-brand-primary uppercase tracking-tighter mb-6">
              The CXO AI Black Box. <br />
              <span className="text-brand-text">Decoded in One Day.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              May 15, 2026 | London. A hands-on working session for Board Members and C-Suite Executives who need a framework, not a lecture.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <CTAButton className="px-12 py-5 text-lg">Secure One of 12 Seats</CTAButton>
              <div className="flex items-center gap-8 text-sm uppercase tracking-widest text-gray-500 font-bold">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> May 15</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> London</span>
                <span className="flex items-center gap-2 text-brand-primary"><Users className="w-4 h-4" /> 12 Seats Max</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Early Bird Badge */}
        <div className="absolute top-10 right-10 rotate-12 bg-brand-primary text-white px-4 py-2 font-bold text-xs uppercase tracking-widest hidden lg:block rounded-md shadow-lg">
          Early Bird: $799 (Ends April 20)
        </div>
      </section>

      <LogoCarousel />

      {/* Grid Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-px bg-brand-border border border-brand-border shadow-2xl rounded-3xl overflow-hidden">
            {/* The Burden */}
            <div className="bg-white p-12">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-brand-text">
                <XCircle className="text-red-500 w-6 h-6" /> The Burden
              </h3>
              <ul className="space-y-6">
                {[
                  "Independent 'AI experiments' popping up in every department without oversight.",
                  "Constant pressure from the board to 'show AI progress' without a clear roadmap.",
                  "A nagging feeling that you're falling behind the curve while competitors move faster.",
                  "The inability to distinguish between technical hype and genuine business value."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-gray-600 leading-relaxed">
                    <span className="text-brand-primary font-bold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* The Command */}
            <div className="bg-brand-surface p-12">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-brand-text">
                <CheckCircle2 className="text-green-500 w-6 h-6" /> The Command
              </h3>
              <ul className="space-y-6">
                {[
                  "A unified framework for evaluating every AI decision across the organization.",
                  "A personal AI workflow that saves you 5+ hours a week on administrative load.",
                  "The confidence to lead the AI conversation in the boardroom, not just follow it.",
                  "Alignment language to direct technical teams without needing to be a technician."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-brand-text leading-relaxed font-medium">
                    <span className="text-brand-primary font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilitators */}
      <section className="py-24 px-6 bg-brand-surface">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="The Facilitators" subtitle="Expert guidance from the intersection of technology and leadership." />
          <div className="grid md:grid-cols-2 gap-12">
            <FacilitatorCard 
              name="Rujuta" 
              role="The Systems Architect" 
              bio="Founder of Solved Together. Specialist in high-trust executive workshops and organizational transformation. She bridges the gap between AI potential and operational reality."
            />
            <FacilitatorCard 
              name="Chris" 
              role="The Executive Partner" 
              bio="Expert in individual productivity and AI-human synthesis for senior leadership. Chris focuses on the 'hands-on' mastery required for CXOs to lead by example."
            />
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* The Vibe */}
      <section className="py-24 px-6 border-y border-brand-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-brand-primary">This is not a conference.</h2>
          <p className="text-2xl text-gray-700 leading-relaxed">
            No stages. No "thought leaders" pitching software. Just 12 executives, a white-board, and a clear path forward. We solve problems together, in real-time.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-10 uppercase tracking-tighter text-brand-text">Limited to 12 Seats.</h2>
          <div className="bg-brand-surface p-10 border border-brand-border mb-12 rounded-2xl">
            <div className="text-brand-primary text-sm font-bold uppercase tracking-[0.4em] mb-4">Investment</div>
            <div className="text-6xl font-bold mb-2 text-brand-text">$799</div>
            <div className="text-gray-500 text-sm">Early bird price available until April 20th</div>
          </div>
          <CTAButton className="w-full sm:w-auto px-16 py-6 text-xl">Apply for your seat</CTAButton>
        </div>
      </section>
    </div>
  );
}
