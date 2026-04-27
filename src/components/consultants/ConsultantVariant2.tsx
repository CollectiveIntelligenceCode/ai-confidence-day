import { motion } from "motion/react";
import { ChathamHouseRules, SectionHeader, FacilitatorCard, CTAButton, LogoCarousel, TestimonialSection } from "../Common";
import { CheckCircle2, XCircle, Calendar, MapPin, Users } from "lucide-react";

export default function ConsultantVariant2() {
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
            <h1 className="text-3xl md:text-5xl font-bold text-brand-primary uppercase tracking-tighter mb-6">
              Your clients are hiring AI consultants. <br />
              <span className="text-brand-text">Are you one of them?</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              A hands-on working session for Partners who are tired of selling AI advice they don't fully understand.
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
          Early Bird: £799 · Limited Seats
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
                  "Clients asking deep AI questions in every engagement that you can't confidently answer.",
                  "A growing gap between the bold AI promises in your proposals and your firm's actual depth.",
                  "Boutique AI firms winning individual engagements by sounding more 'native' than your practice.",
                  "The inability to personally diagnose AI readiness or spot vendor hype on behalf of your clients."
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
                  "A rigorous methodology to evaluate AI maturity and roadmap development for any client.",
                  "The professional vocabulary to lead high-stakes strategy sessions without fear.",
                  "Ability to act as the neutral 'AI sense-check' for your clients' multi-vendor environments.",
                  "Frameworks to translate emerging AI capabilities into billable transformation value."
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
              name="Rujuta Singh"
              role="Founder, Solved Together"
              bio="22 years in enterprise transformation. Specialist in high-trust consultant workshops and organisational change — and has a rare ability to make leaders feel safe enough to say what they really think."
            />
            <FacilitatorCard
              name="Chris Bradshaw"
              role="Partner, Collective Intelligence"
              bio="Expert in individual productivity and AI-human synthesis for consulting partners. He makes the complex feel instinctive."
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
            No stages. No "thought leaders" pitching software. Just 12 partners, a white-board, and a clear path forward. We solve problems together, in real-time.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-10 uppercase tracking-tighter text-brand-text">Limited to 12 Seats.</h2>
          <div className="bg-brand-surface p-10 border border-brand-border mb-12 rounded-2xl">
            <div className="text-brand-primary text-sm font-bold uppercase tracking-[0.4em] mb-4">Investment</div>
            <div className="text-6xl font-bold mb-2 text-brand-text">£799</div>
            <div className="text-gray-500 text-sm">Early bird pricing · limited seats remaining</div>
          </div>
          <CTAButton className="w-full sm:w-auto px-16 py-6 text-xl">Apply for your seat</CTAButton>
        </div>
      </section>
    </div>
  );
}
