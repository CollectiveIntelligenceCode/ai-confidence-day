import { motion } from "motion/react";
import { ChathamHouseRules, LogoCarousel, CTAButton } from "./Common";
import { Shield, ArrowRight } from "lucide-react";

export default function Variant5() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#F2EDE4] font-quicksand relative overflow-x-hidden">
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-8 py-5 flex items-center justify-between bg-[#0C0C0C]/85 backdrop-blur-md border-b border-white/5">
        <a href="#" className="font-roboto font-bold text-lg uppercase tracking-widest text-white">
          Solved<span className="text-brand-primary">Together</span>
        </a>
        <a href="#logistics" className="bg-brand-primary text-[#0C0C0C] font-roboto font-bold text-sm uppercase tracking-widest px-6 py-2.5 hover:opacity-85 transition-opacity">
          Apply for a Seat
        </a>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-end px-8 pb-20 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[70vh] bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-brand-primary text-brand-primary font-roboto font-bold text-sm uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse-custom" />
                CXO AI Day · 3rd July 2026
              </div>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-end">
              <div>
                <h1 className="font-roboto font-bold text-6xl md:text-8xl lg:text-9xl leading-[1.05] tracking-tighter text-white mb-8">
                  AI Clarity<br />
                  for the<br />
                  <span className="italic text-brand-primary">C-Suite.</span>
                </h1>
                <p className="max-w-xl text-xl md:text-2xl text-gray-400 leading-relaxed mb-10">
                  One full day. No hype. No theory. Just the strategic clarity and practical tools your leadership team needs to make confident decisions in the AI age.
                </p>
                <div className="flex flex-wrap items-center gap-8">
                  <CTAButton className="px-10 py-4">Apply for a Seat</CTAButton>
                  <span className="text-2xl text-gray-600 font-light">
                    Limited to <strong className="text-[#F2EDE4] font-medium">12 executives</strong>
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-8 min-w-[260px] pb-3">
                {[
                  { label: "Date", value: "3rd July 2026" },
                  { label: "Location", value: "London, UK" },
                  { label: "Format", value: "Full-Day Workshop" },
                  { label: "Audience", value: "CXOs & Board Members" }
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-white/10 pl-4">
                    <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">{item.label}</span>
                    <span className="font-roboto font-semibold text-lg text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-10 bg-gradient-to-b from-brand-primary to-transparent animate-pulse" />
        </div>
      </section>

      <LogoCarousel />

      {/* Problem Section */}
      <section className="py-28 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="font-roboto font-bold text-sm uppercase tracking-widest text-brand-primary">The Problem</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          
          <p className="font-roboto text-3xl md:text-5xl font-light leading-tight text-white max-w-3xl mb-16">
            AI is moving fast. Your board wants a strategy. Your teams are making <span className="italic text-brand-primary">independent bets.</span> And you're not sure what's real.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-white/5">
            {[
              { num: "01", title: "No strategic alignment", desc: "Everyone on your leadership team has different assumptions about what AI can do and where to apply it." },
              { num: "02", title: "Board pressure, no clarity", desc: "The board wants a coherent AI strategy. You need to answer confidently — without becoming a technical expert first." },
              { num: "03", title: "Hype vs. real capability", desc: "You can't tell what's genuine competitive advantage and what's marketing noise. The cost of a wrong bet is high." },
              { num: "04", title: "Planning cycles too slow", desc: "Technology changes monthly. Your planning cycles can't keep pace. Competitors are making decisions faster." },
              { num: "05", title: "Independent bets, no coherence", desc: "Each department is running its own AI pilots. No shared framework. No coordination. No compounding returns." },
              { num: "06", title: "Strategy to execution gap", desc: "Even when there's a strategy, it stalls. The path from 'we should use AI' to 'our teams are executing' is undefined." }
            ].map((item, i) => (
              <div key={i} className="p-10 border-r border-b border-white/5 hover:bg-white/5 transition-colors group">
                <div className="font-roboto text-4xl font-bold text-transparent stroke-brand-primary/30 stroke-1 mb-4" style={{ WebkitTextStroke: "1px rgba(242, 5, 68, 0.3)" }}>
                  {item.num}
                </div>
                <h3 className="font-roboto font-bold text-xl uppercase tracking-widest text-[#F2EDE4] mb-3 group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-primary py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 border border-black/15">
            {[
              { num: "75%", label: "of enterprises will operationalize AI by 2025", source: "Gartner" },
              { num: "50%", label: "higher ROI from strategic AI adoption", source: "McKinsey" },
              { num: "15%", label: "profit margin boost for AI-integrated businesses", source: "Deloitte" }
            ].map((item, i) => (
              <div key={i} className="p-10 border-r border-black/15 text-center last:border-r-0">
                <div className="font-roboto text-6xl font-bold text-[#0C0C0C] mb-2">{item.num}</div>
                <div className="font-roboto text-xs font-bold uppercase tracking-widest text-black/60 mb-1">{item.label}</div>
                <div className="text-[10px] text-black/40 uppercase tracking-widest">{item.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Day */}
      <section className="py-28 px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="font-roboto font-bold text-sm uppercase tracking-widest text-brand-primary">The Day</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid lg:grid-cols-2 border border-white/5">
            {/* Morning */}
            <div className="p-12 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="absolute bottom-[-0.15em] right-2 font-roboto text-[12rem] font-bold text-transparent stroke-white/5 stroke-1 pointer-events-none select-none" style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.05)" }}>
                AM
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 mb-6">
                <span className="font-roboto font-bold text-xs uppercase tracking-widest text-brand-primary">Morning Session</span>
              </div>
              <h3 className="font-roboto font-bold text-4xl text-white mb-2">AI for You</h3>
              <p className="font-roboto text-sm uppercase tracking-widest text-brand-primary mb-6">Individual Productivity & Leadership</p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8 relative z-10">
                A hands-on session structured around a real leadership problem, worked through live. You'll see exactly how AI augments your thinking, sharpens your decisions, and compresses your workflow.
              </p>
              <ul className="space-y-3 relative z-10">
                {[
                  "AI as a strategic thought partner",
                  "Faster decision-making with better context",
                  "Clearer communication and execution",
                  "Workflow tools you can use that same evening",
                  "AI on the move: real-time, mobile-first approaches"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-[#F2EDE4]/80">
                    <span className="text-brand-primary font-roboto mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Afternoon */}
            <div className="p-12 relative overflow-hidden">
              <div className="absolute bottom-[-0.15em] right-2 font-roboto text-[12rem] font-bold text-transparent stroke-white/5 stroke-1 pointer-events-none select-none" style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.05)" }}>
                PM
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 mb-6">
                <span className="font-roboto font-bold text-xs uppercase tracking-widest text-brand-primary">Afternoon Session</span>
              </div>
              <h3 className="font-roboto font-bold text-4xl text-white mb-2">AI for Your Company</h3>
              <p className="font-roboto text-sm uppercase tracking-widest text-brand-primary mb-6">Organisational Strategy & Transformation</p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8 relative z-10">
                The strategic layer. How to think about AI at the business level, build alignment across your leadership team, evaluate real ROI, and create a roadmap your teams can actually execute.
              </p>
              <ul className="space-y-3 relative z-10">
                {[
                  "What AI can actually do for your specific business",
                  "Identifying your highest-value opportunities",
                  "How to evaluate vendor claims and answer board questions",
                  "Building execution roadmaps without planning paralysis",
                  "Aligning your leadership team around a shared framework"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-[#F2EDE4]/80">
                    <span className="text-brand-primary font-roboto mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilitators */}
      <section className="py-28 px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="font-roboto font-bold text-sm uppercase tracking-widest text-brand-primary">Facilitators</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10">
            {[
              { name: "Rujuta", role: "Founder, Solved Together", bio: "Specialist in high-trust executive workshops and organizational transformation. She bridges the gap between AI potential and operational reality.", session: "Morning: AI for You" },
              { name: "Chris Bradshaw", role: "Executive Partner", bio: "Expert in individual productivity and AI-human synthesis. Chris works directly with board members to integrate AI into their personal decision-making workflows.", session: "Afternoon: AI for Your Company" }
            ].map((item, i) => (
              <div key={i} className="bg-[#0C0C0C] p-12 flex gap-8 hover:bg-white/5 transition-colors group">
                <div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center font-roboto text-3xl font-bold text-brand-primary shrink-0">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-roboto font-bold text-2xl text-white mb-1">{item.name}</h4>
                  <p className="font-roboto text-xs uppercase tracking-widest text-brand-primary mb-4">{item.role}</p>
                  <p className="text-gray-500 leading-relaxed mb-6">{item.bio}</p>
                  <div className="inline-block px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 font-roboto text-[10px] uppercase tracking-widest text-brand-primary">
                    {item.session}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section id="logistics" className="py-28 px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="font-roboto font-bold text-sm uppercase tracking-widest text-brand-primary">Details & Registration</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="border border-white/5">
              {[
                { key: "Date", val: "3rd July 2026" },
                { key: "Venue", val: "London, UK (Private Venue)" },
                { key: "Format", val: "Full-day workshop", sub: "Registration from 08:30 · Closes 17:30" },
                { key: "Cohort", val: "Limited to 12 executives" },
                { key: "Investment", val: "£899 + VAT" },
                { key: "Includes", val: "All materials, lunch, and follow-up resources" }
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-[120px_1fr] border-b border-white/5 last:border-b-0">
                  <div className="p-6 border-r border-white/5 font-roboto text-[10px] uppercase tracking-widest text-gray-500 flex items-center">
                    {item.key}
                  </div>
                  <div className="p-6 text-lg text-white">
                    {item.val}
                    {item.sub && <small className="block text-xs text-gray-500 mt-1">{item.sub}</small>}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-8">
              <h3 className="font-roboto font-bold text-5xl text-white leading-tight">
                Stop navigating<br />AI <span className="italic text-brand-primary">alone.</span>
              </h3>
              <p className="text-xl text-gray-500 leading-relaxed">
                The companies winning with AI aren't the ones with the biggest budgets. They're the ones with clarity, alignment, and the ability to execute. One day changes that for your leadership team.
              </p>
              
              <div className="bg-[#0C0C0C] border border-white/5 p-6 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-roboto text-[10px] uppercase tracking-widest text-gray-500">Seats remaining</span>
                  <strong className="text-brand-primary font-roboto text-xs">4 of 12 left</strong>
                </div>
                <div className="h-1 bg-white/5 relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute inset-y-0 left-0 bg-brand-primary" 
                  />
                </div>
              </div>

              <CTAButton className="w-full py-6 text-lg">Apply for a Seat</CTAButton>
              <p className="text-xs text-gray-600 uppercase tracking-widest text-center">
                Seats are allocated on application to ensure cohort fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-36 px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="font-roboto font-bold text-sm uppercase tracking-widest text-brand-primary mb-8">One Day. Total Clarity.</div>
          <h2 className="font-roboto font-bold text-6xl md:text-8xl text-white leading-tight mb-10 tracking-tighter">
            Your leadership team<br />deserves alignment.
          </h2>
          <CTAButton className="px-16 py-6 text-xl">Apply for a Seat →</CTAButton>
          
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent mx-auto my-16" />
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="#" className="font-roboto text-[10px] uppercase tracking-widest text-gray-600 hover:text-brand-primary transition-colors">solvedtogether.co.uk</a>
            <span className="w-1 h-1 bg-gray-800 rounded-full" />
            <span className="font-roboto text-[10px] uppercase tracking-widest text-gray-600">AI Day for CXOs & Board Members</span>
            <span className="w-1 h-1 bg-gray-800 rounded-full" />
            <a href="#" className="font-roboto text-[10px] uppercase tracking-widest text-gray-600 hover:text-brand-primary transition-colors">contact@solvedtogether.co.uk</a>
          </div>
        </div>
      </section>
    </div>
  );
}
