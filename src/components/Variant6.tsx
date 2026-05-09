import { motion } from "motion/react";
import { ChathamHouseRules, LogoCarousel, CTAButton } from "./Common";
import { Shield, ArrowRight } from "lucide-react";

export default function Variant6() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-quicksand relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[800] h-[62px] flex items-center justify-between px-10 bg-white/94 backdrop-blur-md border-b border-black/10">
        <a href="#" className="font-roboto font-bold text-sm uppercase tracking-widest text-black">
          Solved<span className="text-brand-primary">Together</span>
        </a>
        <div className="flex items-center gap-8">
          <span className="hidden md:block font-roboto text-[10px] font-bold uppercase tracking-widest text-gray-500">3rd July 2026</span>
          <a href="#logistics" className="bg-brand-primary text-white font-roboto font-bold text-[11px] uppercase tracking-widest px-6 py-2 hover:bg-[#f5336a] transition-colors">
            Apply for a Seat
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-end px-10 pb-20 relative overflow-hidden">
        <div className="absolute top-[10%] right-[-10%] w-[700px] h-[700px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.09)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_0%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-roboto font-bold text-[28rem] text-transparent stroke-brand-primary/10 stroke-1 pointer-events-none select-none leading-none tracking-tighter" style={{ WebkitTextStroke: "1px rgba(242, 5, 68, 0.07)" }}>
          AI
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-brand-primary/35 font-roboto font-bold text-xs uppercase tracking-widest text-brand-primary">
                <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse-custom" />
                CXO AI Day
              </div>
              <div className="flex-1 h-px bg-black/15" />
            </div>

            <h1 className="font-roboto font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tighter text-black mb-12">
              One Day.<br />
              Total <span className="italic text-brand-primary">Clarity.</span>
            </h1>

            <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
              <div>
                <p className="max-w-xl text-xl text-gray-600 leading-relaxed mb-10">
                  A full-day workshop for CXOs and Board Members. Cut through the AI hype, align your leadership, and leave with a strategy your teams can actually execute.
                </p>
                <div className="flex flex-col items-start gap-4">
                  <CTAButton className="px-12 py-4 text-xs tracking-[0.15em]">Apply for a Seat →</CTAButton>
                  <span className="font-roboto text-[10px] uppercase tracking-widest text-gray-400">Limited cohort · 3rd July 2026 · £899 + VAT</span>
                </div>
              </div>

              <div className="flex flex-wrap border border-black/15">
                {[
                  { label: "Date", value: "3rd July 2026" },
                  { label: "Venue", value: "London, UK", placeholder: true },
                  { label: "Format", value: "Full-Day Workshop" },
                  { label: "Investment", value: "£899 + VAT" },
                  { label: "For", value: "CXOs & Board Members" }
                ].map((item, i) => (
                  <div key={i} className="p-4 border-r border-black/10 last:border-r-0 flex flex-col gap-1">
                    <span className="font-roboto text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.label}</span>
                    <span className={`font-roboto text-sm font-bold text-black ${item.placeholder ? "italic text-gray-400" : ""}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-brand-primary to-transparent animate-pulse" />
        </div>
      </section>

      <LogoCarousel />

      {/* Problem Section */}
      <section className="py-32 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <span className="font-roboto font-bold text-sm uppercase tracking-widest text-brand-primary">The Problem</span>
            <hr className="flex-1 border-t border-black/10" />
          </div>
          
          <p className="font-roboto text-4xl md:text-5xl font-light leading-tight text-black max-w-3xl mb-20">
            AI is moving fast. Your board wants a strategy. Your teams are making <span className="italic text-brand-primary">independent bets.</span> And nobody can agree on what's real.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-black/15">
            {[
              { num: "01", title: "No Strategic Alignment", desc: "Every leader on your team has different assumptions about what AI can do, where to apply it, and how fast to move." },
              { num: "02", title: "Board Pressure, No Clarity", desc: "The board wants a coherent AI strategy. You need to answer confidently — without becoming a technical expert first." },
              { num: "03", title: "Hype vs. Real Capability", desc: "You can't tell what's genuine competitive advantage and what's a vendor pitch. The cost of a wrong bet is high." },
              { num: "04", title: "Planning Cycles Too Slow", desc: "Technology changes monthly. Your planning cycles can't keep pace. Competitors make decisions while you're building consensus." },
              { num: "05", title: "Disconnected Department Bets", desc: "Each team runs its own AI pilots. No shared framework. No coordination. No compounding returns. Just costs and confusion." },
              { num: "06", title: "Strategy to Execution Gap", desc: "Even when there's a plan, it stalls. The path from 'we should use AI' to 'our teams are executing' remains undefined." }
            ].map((item, i) => (
              <div key={i} className="p-10 border-r border-b border-black/10 hover:bg-gray-50 transition-colors group">
                <div className="font-roboto text-5xl font-bold text-transparent stroke-brand-primary/15 stroke-1 mb-4" style={{ WebkitTextStroke: "1px rgba(242, 5, 68, 0.15)" }}>
                  {item.num}
                </div>
                <h3 className="font-roboto font-bold text-2xl text-black mb-3">{item.title}</h3>
                <p className="text-lg text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-primary py-0 border-t-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 border border-black/12">
            {[
              { num: "75%", label: "of enterprises will operationalize AI by 2025", source: "Gartner" },
              { num: "50%", label: "higher ROI from strategic AI adoption", source: "McKinsey" },
              { num: "15%", label: "profit margin boost for AI-integrated businesses", source: "Deloitte" }
            ].map((item, i) => (
              <div key={i} className="p-14 border-r border-black/12 text-center last:border-r-0">
                <div className="font-roboto text-7xl font-bold text-white mb-2">{item.num}</div>
                <div className="font-roboto text-[11px] font-bold uppercase tracking-widest text-white/75 mb-1">{item.label}</div>
                <div className="text-[11px] text-white/45 uppercase tracking-widest">{item.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Day */}
      <section className="py-32 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
            <h2 className="font-roboto text-5xl md:text-6xl font-bold leading-[1.05] text-black">
              A day designed<br />for <span className="italic text-brand-primary">decision-makers.</span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              Two sessions. One framework. You'll leave with practical tools you can use immediately and a strategic roadmap your leadership team can execute on — without another 6-month planning cycle.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-0.5">
            {[
              { 
                period: "AM", 
                badge: "Morning Session", 
                title: "AI for You", 
                sub: "Individual Productivity & Leadership",
                body: "A hands-on session built around a real leadership problem, worked through live. You'll see how AI augments your thinking, sharpens decisions, and compresses your workflow — immediately and practically.",
                list: ["AI as a strategic thought partner", "Faster decisions with better context", "Clearer communication and execution", "Workflows you can use that same evening", "AI on the move: real-time, mobile-first"]
              },
              { 
                period: "PM", 
                badge: "Afternoon Session", 
                title: "AI for Your Company", 
                sub: "Organisational Strategy & Transformation",
                body: "The strategic layer. How to think about AI at the business level, build alignment across leadership, evaluate real ROI, and create a roadmap your teams can actually execute — in months, not years.",
                list: ["What AI can actually do for your business", "Identifying your highest-value opportunities", "Evaluating vendor claims and answering the board", "Building execution roadmaps without planning paralysis", "Aligning your entire leadership team"]
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#eeeeee] p-14 relative overflow-hidden group">
                <div className="absolute bottom-[-0.15em] right-1 font-roboto text-[12rem] font-bold text-transparent stroke-brand-primary/5 stroke-1 pointer-events-none select-none leading-none" style={{ WebkitTextStroke: "1px rgba(242, 5, 68, 0.06)" }}>
                  {item.period}
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1 bg-brand-primary/5 border border-brand-primary/15 mb-6">
                  <span className="font-roboto font-bold text-[10px] uppercase tracking-widest text-brand-primary">{item.badge}</span>
                </div>
                <h3 className="font-roboto font-bold text-3xl text-black mb-1">{item.title}</h3>
                <p className="font-roboto text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">{item.sub}</p>
                <p className="text-lg text-gray-500 leading-relaxed mb-8 relative z-10">{item.body}</p>
                <ul className="space-y-3 relative z-10">
                  {item.list.map((li, j) => (
                    <li key={j} className="flex items-start gap-3 text-lg text-[#1a1a1a]/80">
                      <span className="text-brand-primary font-roboto mt-1">→</span>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section className="py-32 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-8 mb-12">
            <span className="font-roboto font-bold text-[11px] uppercase tracking-widest text-brand-primary">What You'll Learn</span>
            <hr className="flex-1 border-t border-black/10" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-black/15">
            {[
              { num: "01", title: "Real AI Capability", desc: "Separate signal from noise. Make decisions based on what AI can actually do, not what vendors claim." },
              { num: "02", title: "Your Highest-Value Opportunities", desc: "Where AI creates genuine competitive advantage for your business — and where it's just distraction." },
              { num: "03", title: "Strategic AI Thinking", desc: "Connect AI to your business goals. Not technology for technology's sake — AI as a lever for outcomes you're already chasing." },
              { num: "04", title: "Understanding Real ROI", desc: "What results look like. How to evaluate vendor claims and answer board questions with confidence." },
              { num: "05", title: "Organisational Agility", desc: "How to move fast when technology changes monthly. What separates companies that ride the wave from those that follow." },
              { num: "06", title: "Execution Roadmaps That Work", desc: "From strategy to action in months, not years — without planning cycles technology outpaces before you finish." }
            ].map((item, i) => (
              <div key={i} className="p-10 border-r border-b border-black/10 hover:bg-gray-50 transition-colors">
                <div className="font-roboto text-6xl font-bold text-transparent stroke-brand-primary/15 stroke-1 mb-4" style={{ WebkitTextStroke: "1px rgba(242, 5, 68, 0.14)" }}>
                  {item.num}
                </div>
                <h3 className="font-roboto font-bold text-2xl text-black mb-3">{item.title}</h3>
                <p className="text-lg text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilitators */}
      <section className="py-32 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <span className="font-roboto font-bold text-[11px] uppercase tracking-widest text-brand-primary">Your Facilitators</span>
            <hr className="flex-1 border-t border-black/10" />
          </div>

          <div className="grid md:grid-cols-2 gap-0.5">
            {[
              { name: "Rujuta", role: "Founder, Solved Together", bio: "Specialist in high-trust executive workshops and organizational transformation. She bridges the gap between AI potential and operational reality.", session: "Morning: AI for You" },
              { name: "Chris Bradshaw", role: "Executive Partner", bio: "Expert in individual productivity and AI-human synthesis. Chris works directly with board members to integrate AI into their personal decision-making workflows.", session: "Afternoon: AI for Your Company" }
            ].map((item, i) => (
              <div key={i} className="bg-[#eeeeee] p-12 flex gap-8 hover:bg-[#1f1f1f] hover:text-white transition-all group">
                <div className="w-20 h-20 border border-black/15 bg-gray-50 flex items-center justify-center font-roboto text-3xl font-bold text-brand-primary shrink-0 group-hover:bg-gray-800">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-roboto font-bold text-2xl text-black group-hover:text-white mb-1">{item.name}</h4>
                  <p className="font-roboto text-[10px] uppercase tracking-widest text-brand-primary mb-4">{item.role}</p>
                  <p className="text-lg text-gray-500 group-hover:text-gray-400 leading-relaxed mb-6">{item.bio}</p>
                  <div className="inline-block px-3 py-1 bg-brand-primary/5 border border-brand-primary/15 font-roboto text-[10px] uppercase tracking-widest text-brand-primary">
                    {item.session}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Section */}
      <section className="py-32 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <span className="font-roboto font-bold text-[11px] uppercase tracking-widest text-brand-primary">Is This For You?</span>
            <hr className="flex-1 border-t border-black/10" />
          </div>

          <div className="grid md:grid-cols-2 border border-black/15">
            <div className="p-12">
              <div className="font-roboto font-bold text-[11px] uppercase tracking-widest text-brand-primary mb-8">This day is for you if…</div>
              <ul className="space-y-4">
                {[
                  "You're a CXO, Founder, or board member responsible for strategic direction",
                  "You need to make AI decisions without becoming a technical expert",
                  "Your leadership team lacks a shared understanding of AI",
                  "You want a clear framework, not more pilots and experiments",
                  "You're ready to move from 'exploring AI' to 'executing on AI'",
                  "You want clarity and leadership alignment in a single intensive day"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-[#1a1a1a]">
                    <span className="text-brand-primary font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12 border-l border-black/10">
              <div className="font-roboto font-bold text-[11px] uppercase tracking-widest text-gray-400 mb-8">This day is not for you if…</div>
              <ul className="space-y-4">
                {[
                  "You want a technical deep-dive into models and infrastructure",
                  "You're looking for a generic overview available from any podcast",
                  "You're pre-revenue and still finding product-market fit",
                  "You need vendor product evaluations or tool comparisons",
                  "You're expecting a passive presentation — this is hands-on"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-lg text-gray-400">
                    <span className="text-gray-400 font-bold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section id="logistics" className="py-32 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-12">
            <span className="font-roboto font-bold text-[11px] uppercase tracking-widest text-brand-primary">Details & Registration</span>
            <hr className="flex-1 border-t border-black/10" />
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="border border-black/15 bg-white">
              {[
                { key: "Date", val: "3rd July 2026" },
                { key: "Venue", val: "London, UK", placeholder: true },
                { key: "Format", val: "Full-day workshop", sub: "Registration from 08:30 · Closes 17:30" },
                { key: "Cohort", val: "Limited capacity", placeholder: true },
                { key: "Investment", val: "£899 + VAT", sub: "Includes lunch, all materials & follow-up resources" }
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-[120px_1fr] border-b border-black/10 last:border-b-0">
                  <div className="p-6 border-r border-black/10 font-roboto text-[10px] uppercase tracking-widest text-gray-500 flex items-center">
                    {item.key}
                  </div>
                  <div className={`p-6 text-lg text-black ${item.placeholder ? "italic text-gray-400" : ""}`}>
                    {item.val}
                    {item.sub && <small className="block text-xs text-gray-500 mt-1">{item.sub}</small>}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-8">
              <h3 className="font-roboto font-bold text-5xl md:text-6xl text-black leading-[1.05]">Stop navigating<br />AI <span className="italic text-brand-primary">alone.</span></h3>
              <p className="text-xl text-gray-500 leading-relaxed">The companies winning with AI aren't the ones with the biggest budgets. They're the ones with clarity, alignment, and the ability to execute. One day changes that for your leadership team.</p>
              
              <div className="bg-white border border-black/15 p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-roboto text-[11px] uppercase tracking-widest text-gray-500">Seats remaining</span>
                  <span className="font-roboto text-[11px] font-bold text-brand-primary italic">[X] of [Total] left</span>
                </div>
                <div className="h-0.5 bg-black/10 relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "72%" }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="absolute inset-y-0 left-0 bg-brand-primary" 
                  />
                </div>
              </div>

              <CTAButton className="w-full py-6 text-xs tracking-[0.15em]">Apply for a Seat →</CTAButton>
              <p className="text-sm text-gray-400 text-center">Seats allocated on application. We may ask a few questions to confirm fit for this cohort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="font-roboto font-bold text-sm uppercase tracking-widest text-brand-primary mb-8">3rd July 2026 · CXO AI Day</div>
          <h2 className="font-roboto font-bold text-6xl md:text-8xl lg:text-9xl text-black leading-[0.95] tracking-tighter mb-12">
            Your leadership<br />team deserves<br /><span className="italic text-brand-primary">alignment.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-lg mx-auto mb-12 leading-relaxed">While others spend months building AI consensus, technology moves forward and competitors make decisions. This is the shortcut.</p>
          <CTAButton className="px-16 py-6 text-xs tracking-[0.15em]">Secure Your Place →</CTAButton>
          
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-black/15 to-transparent mx-auto my-16" />
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="#" className="font-roboto text-[10px] uppercase tracking-widest text-gray-400 hover:text-brand-primary transition-colors">solvedtogether.co.uk</a>
            <span className="w-1 h-1 bg-gray-200 rounded-full" />
            <span className="font-roboto text-[10px] uppercase tracking-widest text-gray-400">CXO AI Day</span>
            <span className="w-1 h-1 bg-gray-200 rounded-full" />
            <span className="font-roboto text-[10px] uppercase tracking-widest text-gray-400">3rd July 2026</span>
            <span className="w-1 h-1 bg-gray-200 rounded-full" />
            <a href="#" className="font-roboto text-[10px] uppercase tracking-widest text-gray-400 hover:text-brand-primary transition-colors">aiconfidence@collectiveintelligence.co</a>
          </div>
        </div>
      </section>
    </div>
  );
}
