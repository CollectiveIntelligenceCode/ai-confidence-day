import { motion } from "motion/react";
import { ChathamHouseRules, SectionHeader, FacilitatorCard, Testimonial, CTAButton, LogoCarousel, TestimonialSection } from "../Common";
import { ArrowRight, ShieldCheck, Users2, BrainCircuit } from "lucide-react";

export default function ConsultantVariant1() {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-primary selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <ChathamHouseRules />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-8 max-w-4xl text-balance text-brand-text">
              You advise leaders on transformation. <span className="text-brand-primary">But when they ask about AI, how confident are you really?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
              A private, high-trust day in London for partners to stop selling AI advice they don't fully understand and start leading with genuine authority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton>Apply for a Private Seat</CTAButton>
              <div className="flex items-center gap-2 text-gray-500 text-sm font-medium px-4">
                May 15, 2026 • London
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent -z-0" />
      </section>

      <LogoCarousel />

      {/* The Mirror Section */}
      <section className="py-24 px-6 bg-brand-surface">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-brand-text">
                Your clients are hiring AI consultants. Are you one of them?
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  You’ve seen the strategy decks. But there is a silent gap between what you say in client proposals and what you actually know. You're nodding in engagements because, at your level, you're expected to have the answers.
                </p>
                <p>
                  But privately? You’re not sure how to diagnose AI readiness or spot vendor nonsense for your clients. There is no safe space to admit that you're selling a future you haven't mastered yet.
                </p>
                <p className="text-brand-primary font-bold">
                  On May 15, we provide that space. Shift from performed confidence to actual mastery—and walk away with the frameworks to prove it.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-100 border border-brand-primary/20 relative overflow-hidden shadow-xl rounded-2xl">
                <img 
                  src="https://picsum.photos/seed/consultant/800/1000?grayscale" 
                  alt="Focused consultant" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="h-px w-full bg-brand-primary mb-4" />
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-primary font-bold">London Strategy Room • May 15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Sessions */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="The Working Day" 
            subtitle="Not a conference. Not a lecture. A hands-on working session designed for the consultant schedule."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 border border-brand-border bg-brand-surface hover:border-brand-primary/20 transition-all shadow-sm rounded-2xl">
              <BrainCircuit className="w-12 h-12 text-brand-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-brand-text">Session 1: High-Stakes Advisory Tools</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                How do you advise clients on AI when the ground is shifting? We build the specific frameworks you need to diagnose readiness and lead transformations.
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-brand-primary" /> Diagnosing AI Readiness</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-brand-primary" /> Spotting Vendor Nonsense</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-brand-primary" /> Delivery Mastery</li>
              </ul>
            </div>
            <div className="p-10 border border-brand-border bg-brand-surface hover:border-brand-primary/20 transition-all shadow-sm rounded-2xl">
              <Users2 className="w-12 h-12 text-brand-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-brand-text">Session 2: The Organizational Blueprint</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                This isn't about tools; it's about systems. How to lead a cross-functional shift that doesn't just "use AI," but solves complex problems with it.
              </p>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-brand-primary" /> Cross-functional Thinking</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-brand-primary" /> Systemic Transformation</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-brand-primary" /> AI Strategy Framework</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* Protocol */}
      <section className="py-24 px-6 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">Strict Chatham House Rules.</h2>
          <p className="text-xl font-medium leading-relaxed">
            We cap the room at 12 people. Nothing shared is attributed outside. Your questions—and your gaps—stay within these four walls. This is a safe house for leadership.
          </p>
        </div>
      </section>

      {/* Facilitators */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Your Facilitators" />
          <div className="grid md:grid-cols-2 gap-8">
            <FacilitatorCard 
              name="Rujuta" 
              role="The Systems Architect" 
              bio="Founder of Solved Together. Specialist in high-trust consultant sessions and firm-wide transformation. Rujuta has a track record of helping consulting partners navigate complex shifts with clarity and confidence."
            />
            <FacilitatorCard 
              name="Chris" 
              role="The Consultant Partner" 
              bio="Expert in individual productivity and AI-human synthesis for consulting partners. Chris works directly with Managing Partners to integrate AI into their high-stakes decision-making workflows."
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 border-t border-brand-border text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-text">Don't figure it out alone.</h2>
          <p className="text-xl text-gray-600 mb-10">
            Join 11 other peers in a room where you can finally ask the right questions.
          </p>
          <CTAButton className="w-full sm:w-auto">Apply for your seat</CTAButton>
          <p className="mt-6 text-sm text-gray-400 uppercase tracking-widest">
            Early bird pricing · limited seats remaining
          </p>
        </div>
      </section>
    </div>
  );
}
