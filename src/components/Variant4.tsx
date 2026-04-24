import { motion } from "motion/react";
import { ChathamHouseRules, SectionHeader, FacilitatorCard, CTAButton, LogoCarousel, TestimonialSection } from "./Common";
import { Sparkles, Target, Shield, Zap, ArrowRight, Users, Calendar, MapPin } from "lucide-react";

export default function Variant4() {
  return (
    <div className="min-h-screen bg-white font-quicksand text-black selection:bg-brand-primary selection:text-white">
      {/* Hero Section - Mindvalley Inspired */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-brand-surface">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <ChathamHouseRules />
            </div>
            <h1 className="text-5xl md:text-8xl font-bold font-roboto leading-tight tracking-tighter mb-8 uppercase">
              The AI Mastery Day <br />
              <span className="text-brand-primary">For The C-Suite</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Stop feeling out of depth in board meetings. A private, high-energy working session in London to gain absolute AI confidence in 8 hours.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <CTAButton className="px-16 py-6 text-xl shadow-2xl hover:shadow-brand-primary/20">
                Secure Your Private Invitation
              </CTAButton>
              
              <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-500">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-brand-primary" /> May 15, 2026</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-primary" /> London, UK</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-brand-primary" /> 12 Seats Max</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[120px]" />
        </div>
      </section>

      <LogoCarousel />

      {/* The "Safe House" Positioning */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 bg-brand-primary/5 rounded-2xl mb-8">
            <Shield className="w-12 h-12 text-brand-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-roboto mb-8 uppercase tracking-tight">
            The Safe Space for "I Don't Know"
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
            You are expected to lead the AI vision, yet the world changed overnight. Most CXOs are nodding along while feeling completely lost. 
            <span className="block mt-6 font-bold text-black">This is the only room where you can take off the mask.</span>
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-brand-surface border border-brand-border rounded-2xl">
              <h4 className="font-bold text-brand-primary mb-2 uppercase tracking-widest text-sm">The Reality</h4>
              <p className="text-gray-600">Nervousness in board meetings, relying on jargon, and feeling behind the curve.</p>
            </div>
            <div className="p-8 bg-brand-primary text-white rounded-2xl">
              <h4 className="font-bold mb-2 uppercase tracking-widest text-sm opacity-80">The Outcome</h4>
              <p>Absolute clarity, a personal AI framework, and the confidence to direct technical teams with authority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Core Sessions - High Energy Grid */}
      <section className="py-24 px-6 bg-brand-surface">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="The Curriculum of Confidence" 
            subtitle="Two high-impact sessions designed to transform both your personal productivity and your organizational strategy."
          />
          
          <div className="grid md:grid-cols-2 gap-px bg-brand-border border border-brand-border rounded-3xl overflow-hidden shadow-2xl">
            {/* Session 1 */}
            <div className="bg-white p-12 md:p-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-brand-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Session 01 • Chris</span>
              </div>
              <h3 className="text-3xl font-bold font-roboto mb-6 uppercase">Individual Productivity</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                How do you, as a leader, actually change your day-to-day? We move beyond theory into practical, hands-on mastery.
              </p>
              <ul className="space-y-4">
                {[
                  "AI as your Personal Clone: Automating your unique voice.",
                  "AI as your Board Advisor: Stress-testing decisions in seconds.",
                  "Practical Exercises: Real-time workflows on your own device.",
                  "The 5-Hour Weekly Win: Reclaiming your executive time."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <ArrowRight className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Session 2 */}
            <div className="bg-white p-12 md:p-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-brand-primary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Session 02 • Rujuta</span>
              </div>
              <h3 className="text-3xl font-bold font-roboto mb-6 uppercase">Organizational Transformation</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                This isn't "everyone use ChatGPT." This is a complete mindset shift in how your organization solves complex problems.
              </p>
              <ul className="space-y-4">
                {[
                  "Cross-Functional Systems: AI as the organizational glue.",
                  "Solving Complex Problems: Beyond simple task automation.",
                  "The Mindset Shift: Leading a culture of AI-first thinking.",
                  "Blueprint for Scale: A roadmap for the next 18 months."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <ArrowRight className="w-5 h-5 text-brand-primary shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* Facilitators */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Your Guides" subtitle="Expertise from the intersection of high-level leadership and cutting-edge execution." />
          <div className="grid md:grid-cols-2 gap-12">
            <FacilitatorCard 
              name="Rujuta" 
              role="The Systems Architect" 
              bio="Founder of Solved Together. Specialist in organizational transformation. She bridges the gap between AI potential and operational reality for global boards."
            />
            <FacilitatorCard 
              name="Chris" 
              role="The Executive Partner" 
              bio="Expert in individual productivity and AI-human synthesis. Chris focuses on the 'hands-on' mastery required for CXOs to lead by example."
            />
          </div>
        </div>
      </section>

      {/* Pricing & Scarcity */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-roboto mb-12 uppercase tracking-tighter">
            Limited to 12 Seats.
          </h2>
          <div className="bg-white/5 border border-white/10 p-12 rounded-3xl mb-12">
            <div className="text-brand-primary text-sm font-bold uppercase tracking-[0.4em] mb-6">Investment</div>
            <div className="text-7xl md:text-8xl font-bold font-roboto mb-4">$799</div>
            <p className="text-gray-400 text-lg mb-8">Early bird price available until April 20th</p>
            <div className="h-px w-full bg-white/10 mb-8" />
            <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">Includes Private London Venue • Full Catering • All Materials</p>
          </div>
          <CTAButton className="w-full sm:w-auto px-20 py-6 text-xl">Request Your Seat</CTAButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-brand-border">
        <p className="text-gray-400 text-xs uppercase tracking-[0.5em]">Solved Together • May 15 • London</p>
      </footer>
    </div>
  );
}
