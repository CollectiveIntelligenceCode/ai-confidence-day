import { motion } from "motion/react";
import { ChathamHouseRules, CTAButton, LogoCarousel, TestimonialSection } from "./Common";
import { Lock, EyeOff, ShieldAlert, Sparkles, Zap, MessageSquare } from "lucide-react";

export default function Variant3() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-primary selection:text-white font-quicksand">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-10">
              <div className="px-6 py-2 border border-brand-primary/20 bg-brand-primary/5 rounded-full flex items-center gap-3">
                <Lock className="w-4 h-4 text-brand-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">Strictly Confidential</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-tight tracking-tighter text-brand-text">
              What happens in the room <br />
              <span className="text-brand-primary italic">stays in the room.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Finally, a place to ask the "basic" AI questions you can't ask your team. A private working day for CXOs in London.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <CTAButton variant="secondary" className="px-12 py-5 text-lg border-2">Request an Invitation</CTAButton>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Vetted Cohort • 12 Seats Only</p>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <div className="w-px h-12 bg-gradient-to-b from-brand-primary to-transparent" />
        </div>
      </section>

      <LogoCarousel />

      {/* The Problem Section */}
      <section className="py-32 px-6 bg-brand-surface relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <ShieldAlert className="w-12 h-12 text-brand-primary/50" />
          </div>
          <p className="text-3xl md:text-4xl text-center leading-relaxed font-light italic text-gray-700">
            "It is lonely at the top when the world changes overnight. You are expected to be the visionary for a technology that didn't exist 36 months ago. You feel the pressure to lead, but you lack the playground to fail."
          </p>
          <div className="mt-12 text-center">
            <div className="h-px w-24 bg-brand-primary mx-auto mb-8" />
            <p className="text-xl text-brand-primary font-bold uppercase tracking-widest">This is your playground.</p>
          </div>
        </div>
      </section>

      {/* Outcomes Grid */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-brand-primary/10 flex items-center justify-center rounded-lg">
                <Sparkles className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-brand-text">Total Clarity</h3>
              <p className="text-gray-600 leading-relaxed">
                You will know exactly which AI trends matter to your industry and which are distractions. No more guessing.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-brand-primary/10 flex items-center justify-center rounded-lg">
                <Zap className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-brand-text">Personal Mastery</h3>
              <p className="text-gray-600 leading-relaxed">
                You will leave with AI "Clones" and workflows running on your own device. Practical tools you can use tonight.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-brand-primary/10 flex items-center justify-center rounded-lg">
                <MessageSquare className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-brand-text">The Language of Alignment</h3>
              <p className="text-gray-600 leading-relaxed">
                The specific vocabulary you need to direct your technical teams without being a technician. Lead with authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />

      {/* Logistics Card */}
      <section className="py-32 px-6 bg-brand-surface">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-brand-border p-12 md:p-20 relative overflow-hidden shadow-2xl rounded-3xl">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Lock className="w-32 h-32" />
            </div>
            
            <h2 className="text-4xl font-bold mb-12 text-brand-text">Logistics & Access</h2>
            
            <div className="grid sm:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">Location</div>
                <p className="text-xl text-brand-text">Private Venue, London</p>
                <p className="text-sm text-gray-500 mt-1">(Disclosed to attendees only)</p>
              </div>
              <div>
                <div className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">Investment</div>
                <p className="text-xl text-brand-text">£899 per person</p>
                <p className="text-sm text-gray-500 mt-1">Includes all materials & catering</p>
              </div>
              <div>
                <div className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">Capacity</div>
                <p className="text-xl text-brand-text">12 Seats Maximum</p>
                <p className="text-sm text-gray-500 mt-1">Deep-dive coaching guaranteed</p>
              </div>
              <div>
                <div className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">Protocol</div>
                <p className="text-xl text-brand-text">Chatham House Rules</p>
                <p className="text-sm text-gray-500 mt-1">Strict confidentiality enforced</p>
              </div>
            </div>
            
            <CTAButton className="w-full py-6">Request an Invitation</CTAButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <footer className="py-24 px-6 text-center border-t border-brand-border">
        <p className="text-gray-400 text-sm uppercase tracking-[0.5em] mb-8">Solved Together • 3rd July • London</p>
        <h2 className="text-3xl font-bold mb-4 text-brand-text">Don't figure it out alone.</h2>
        <p className="text-gray-500 mb-0">Join us on 3rd July for a day that changes the signal.</p>
      </footer>
    </div>
  );
}
