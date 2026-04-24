import { useState } from "react";
import chrisImage from '../../public/chris.png';
import rujutaImage from '../../public/rujuta.jpg';
import { Play } from "lucide-react";

export default function Variant7() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="font-quicksand text-brand-text bg-brand-surface leading-relaxed text-lg font-light min-h-screen">
      {/* RED TOP BAR */}
      <div className="h-[4px] bg-brand-primary fixed top-0 left-0 right-0 z-[100]" />

      {/* NAV */}
      <nav className="fixed top-[4px] left-0 right-0 z-[99] bg-brand-surface/95 backdrop-blur-md border-b border-brand-border py-4">
        <div className="max-w-[1100px] margin-0 auto px-8 flex justify-between items-center mx-auto">
          <div className="font-semibold text-sm tracking-[2px] uppercase">
            Early bird: £799 · Limited seats
          </div>
          <a
            href="#apply"
            className="bg-brand-primary text-white px-6 py-2.5 text-sm font-medium cursor-pointer tracking-[0.5px] no-underline hover:bg-brand-primary/90 transition-colors"
          >
            Apply for a Seat
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-[180px] pb-24 px-8 text-center bg-white border-b border-brand-border">
        <div className="max-w-[900px] mx-auto">
          <div className="text-sm font-medium tracking-[2px] uppercase text-brand-primary mb-12">
            Not another conference. Not another lecture.
          </div>
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.15] max-w-[800px] mx-auto mb-6 font-normal">
            You are the most capable person in the room.{" "}
            <em className="italic text-brand-primary not-italic">Except when the topic is AI.</em>
          </h1>
          <p className="text-xl text-brand-text/80 max-w-[620px] mx-auto mb-4 leading-[1.65]">
            A private working day in London for CXOs and board members who are done nodding along on AI.
          </p>
          <div className="font-bold text-3xl my-10">
            One Day. Total Clarity.
          </div>
          <a
            href="#apply"
            className="inline-block bg-brand-primary text-white px-10 py-4 text-base font-medium no-underline tracking-[0.5px] mt-2 hover:bg-brand-primary/90 transition-colors"
          >
            Apply for a Seat
          </a>
          <div className="mt-8 text-sm text-brand-text/50 tracking-[1px]">
            May 15, 2026 · London · 12 people maximum
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <div className="bg-white border-b border-brand-border py-10 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1px] bg-brand-border max-w-[800px] mx-auto">
          {[
            { label: "Date", value: "May 15, 2026" },
            { label: "Location", value: "London, UK" },
            { label: "Format", value: "Full-Day Workshop" },
            { label: "Audience", value: "CXOs & Board Members" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 text-center">
              <div className="text-xs uppercase tracking-[2px] text-brand-text/50 mb-1.5 font-medium">
                {item.label}
              </div>
              <div className="font-bold text-xl text-brand-text">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHATHAM NOTICE */}
      <div className="text-center py-5 px-8 bg-brand-bg border-b border-brand-border text-sm tracking-[1.5px] uppercase text-brand-text/50 font-medium">
        Chatham House Rules Apply
      </div>

      {/* VIDEO PLACEHOLDER */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="bg-brand-bg border border-brand-border p-20 max-w-[700px] mx-auto">
            <Play className="w-12 h-12 mx-auto mb-4 text-brand-text opacity-80" />
            <p className="text-base text-brand-text/80 italic">
              Video: Why we started these CXO sessions
            </p>
            <p className="text-sm text-brand-text/50 mt-2">
              Placeholder — to be filmed
            </p>
          </div>
        </div>
      </section>

      {/* THE REALITY */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-5">The reality no one says out loud.</h2>
          <p className="text-lg text-brand-text/80 max-w-[700px] mb-12 leading-[1.75]">
            AI is in every strategy deck. Your team is running experiments. Vendors are pitching AI-first solutions. Your board is asking questions that need confident answers.
          </p>
          <p className="text-lg text-brand-text/80 max-w-[700px] mb-12 leading-[1.75]">
            And privately? The signal is noisy and the clarity is nowhere. That is not a personal failing. It is almost universal at senior level — which is why almost no one is saying it out loud.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-brand-border">
            {[
              { num: "74%", text: "of CEOs say gaps in AI understanding are affecting their boardroom decisions", source: "Cisco, 2025" },
              { num: "66%", text: "of board directors report limited to no knowledge or experience with AI", source: "McKinsey" },
              { num: "50%", text: "of CEOs believe their job stability depends on getting AI right in 2026", source: "BCG / WEF, 2026" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-bold text-5xl text-brand-primary leading-tight">
                  {stat.num}
                </div>
                <div className="text-sm text-brand-text/80 mt-2 leading-normal">
                  {stat.text}
                </div>
                <div className="text-xs text-brand-text/50 mt-1 uppercase tracking-[1px]">
                  {stat.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOUND LIKE YOU */}
      <section className="bg-brand-bg py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">Does this sound like you?</h2>
          <div className="space-y-4">
            {[
              "\"I nod in board meetings when AI comes up and hope nobody asks me a direct question.\"",
              "\"Every vendor tells me their solution is the one. I cannot tell the difference.\"",
              "\"My team is running AI experiments I did not authorise and do not fully understand.\"",
              "\"When my CTO talks about AI, I am not sure which questions I should even be asking.\"",
              "\"I know AI matters. I just do not know what I should actually be doing about it.\"",
              "\"I have sat through three AI presentations this quarter. I left all of them more confused than when I arrived.\"",
              "\"I use AI for emails, summaries, the odd report. I know there is more to it. I just have not had the time to figure out what.\"",
              "\"I have a feeling I am leaving 95% on the table. I just do not know what that 95% looks like.\"",
            ].map((thought, idx) => (
              <div key={idx} className="bg-white border-l-[3px] border-brand-primary p-6 md:px-8 italic text-brand-text/80 text-lg leading-relaxed">
                {thought}
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-xl text-brand-text font-bold">
            If any of this sounds familiar, this day was designed for you.
          </p>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">Before this day. After this day.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div className="">
              <h3 className="text-sm uppercase tracking-[2px] font-semibold mb-6 pb-3 border-b-2 border-brand-border text-brand-text/50">Where you are now</h3>
              <div className="space-y-0 text-brand-text/80 text-base leading-relaxed">
                {[
                  "I use AI for emails and summaries and think I am keeping up. I am using about 5% of what is possible.",
                  "I manage AI conversations by staying vague and deferring to my technical team.",
                  "I cannot tell the difference between genuine capability and vendor marketing.",
                  "Every department is running independent AI experiments with no shared framework.",
                  "The board is asking questions about AI that I am not confident answering.",
                  "I feel the pressure to lead on AI but have nowhere safe to admit what I do not know.",
                  "I am making decisions about AI investment based on what my peers seem to be doing, not what I understand.",
                ].map((item, idx) => (
                  <div key={idx} className="py-3.5 border-b border-brand-border">
                    <span className="text-brand-text/50 mr-2">—</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <h3 className="text-sm uppercase tracking-[2px] font-semibold mb-6 pb-3 border-b-2 border-brand-primary text-brand-primary">Where you will be</h3>
              <div className="space-y-0 text-brand-text/80 text-base leading-relaxed">
                {[
                  "I have a framework to evaluate any AI decision at board level — regardless of which tools emerge next.",
                  "I can spot vendor nonsense within five minutes of a pitch.",
                  "I have alignment language to direct my technical teams without needing to be a technician.",
                  "I can lead any board conversation about AI with genuine confidence, not performed confidence.",
                  "I have a personal AI workflow I built myself and can use from the next morning.",
                  "I know exactly which questions to ask my CTO, my vendors, and my board — and I understand the answers.",
                  "I have a small, trusted group of peers I can go back to — independent, neutral, no company politics — whenever I need a sounding board.",
                ].map((item, idx) => (
                  <div key={idx} className="py-3.5 border-b border-brand-border">
                    <span className="text-brand-primary mr-2">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS DAY IS */}
      <section className="bg-brand-bg py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12">What this day is.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: "Private & Exclusive", desc: "Ten to twelve senior leaders. No audience. No observers. Just the room. Everyone is here for the same reason you are." },
              { title: "Hands-On, Not Theoretical", desc: "Two working sessions. You build things. You leave with frameworks and a workflow you made yourself — not slides you may never look at again." },
              { title: "Facilitated, Not Lectured", desc: "Rujuta and Chris have run these rooms before. They know how to create the conditions for real thinking. Past attendees ask when the next one is." },
              { title: "Chatham House Rules", desc: "Nothing shared in this room is attributed outside it. This is what makes genuine conversation possible — and it is why people come back." },
            ].map((item, idx) => (
              <div key={idx} className="py-6">
                <h4 className="text-sm uppercase tracking-[2px] text-brand-primary font-semibold mb-2.5">{item.title}</h4>
                <p className="text-brand-text/80 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-brand-border flex flex-col md:flex-row gap-6 flex-wrap">
            {["Not a conference", "Not a panel discussion", "Not a software demo", "Not a vendor showcase", "Not a lecture"].map((item, idx) => (
              <div key={idx} className="text-sm text-brand-text/50 px-5 py-2 border border-brand-border bg-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE DAY */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-3 text-center">The Day</h2>
          <p className="text-center text-lg text-brand-text/80 mb-16">AI for you. AI for your company.</p>

          <div className="space-y-0">
            {[
              {
                num: "01",
                time: "Morning",
                title: "Your AI Workflow",
                fac: "With Chris · Collective Intelligence",
                desc: "How do CXOs and board members actually change their day-to-day using AI? This session is hands-on. You will use AI as a clone, as a board of advisors, as a personal strategist. Not a demo. A working session you walk out of with a workflow that is yours.",
                outcomes: [
                  "A personal AI workflow built around your specific role",
                  "Confidence to use AI tools without a team supporting you",
                  "Practical techniques you can deploy the next morning",
                  "AI on the move — real-time, mobile-first approaches",
                ],
              },
              {
                num: "02",
                time: "Afternoon",
                title: "AI Across Your Organisation",
                fac: "With Rujuta · Solved Together",
                desc: "This is not \"everyone should use ChatGPT.\" This session is about the harder question: how do you lead an organisation through genuine AI transformation? Cross-functional thinking, systems, processes. The frameworks that let a leadership team act on AI instead of reacting to it.",
                outcomes: [
                  "A framework to evaluate AI decisions at board level",
                  "Language to align your leadership team on AI priorities",
                  "How to evaluate vendor claims and answer board questions with confidence",
                  "Clarity on what transformation actually looks like in practice",
                ],
              },
            ].map((session, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 py-12 border-t border-brand-border">
                <div className="font-bold text-sm text-brand-text/50 md:text-right pt-1">
                  {session.num}
                  <span className="block font-quicksand text-xs uppercase tracking-[1.5px] mt-1">{session.time}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-3xl mb-1">{session.title}</h3>
                  <div className="text-sm text-brand-primary font-medium mb-4">{session.fac}</div>
                  <p className="text-brand-text/80 text-base leading-relaxed mb-5">{session.desc}</p>
                  <ul className="space-y-0">
                    {session.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="py-2 text-base text-brand-text/80 border-b border-brand-border">
                        <span className="text-brand-primary mr-2">→</span> {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-brand-bg py-24 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-bold text-4xl md:text-5xl mb-2">What you leave with.</h2>
          <p className="text-lg text-brand-text/80 mb-12">Outcomes, not handouts.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              "Clarity on what AI can actually do for your business — no hype, no jargon",
              "A framework to evaluate AI decisions with confidence — one that outlasts any specific tool",
              "The confidence to lead any board conversation about AI",
              "A personal AI workflow you built yourself and can use from the following morning",
              "Alignment language you can take back to your leadership team",
              "A safe, close-knit group of peers you can go back to — independent from your company, free from politics, there when you need a sounding board",
            ].map((outcome, idx) => (
              <div key={idx} className="bg-white p-8 md:px-8 md:py-7 border-l-[3px] border-brand-primary">
                <div className="font-bold text-4xl md:text-5xl text-brand-primary opacity-40 mb-2 leading-none">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <div className="text-base text-brand-text/80 leading-relaxed">
                  {outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR YOU / NOT FOR YOU */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">Is this day for you?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-sm uppercase tracking-[2px] font-semibold mb-6 pb-3 border-b-2 border-brand-primary text-brand-primary">This day is for you if&hellip;</h3>
              <div className="space-y-0 text-brand-text/80 text-base leading-relaxed">
                {[
                  "You are a non-technical CXO — CEO, CFO, CMO, CHRO, COO, CISO — who leads the business, not builds the technology",
                  "You are a board member — executive or non-executive — steering a company through AI uncertainty",
                  "You run a company or organisation with a team — ideally 50+ people, though this applies from small non-profits to enterprise",
                  "You either do not have an AI strategy, or your company has one but you want to be able to confidently navigate it yourself",
                  "You are done with just reading, listening, and talking about AI — you want to take the reins yourself",
                  "You want to learn by doing, not by sitting in another audience",
                ].map((item, idx) => (
                  <div key={idx} className="py-3 border-b border-brand-border flex gap-3">
                    <span className="text-brand-primary font-semibold text-lg flex-shrink-0">+</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[2px] font-semibold mb-6 pb-3 border-b-2 border-brand-border text-brand-text/50">This day is not for you if&hellip;</h3>
              <div className="space-y-0 text-brand-text/80 text-base leading-relaxed">
                {[
                  "You are a solopreneur or consultant — we are planning a separate session for you",
                  "You have a developer, engineering, or technical background and want a deep-dive into machine learning or AI architecture",
                  "You prefer being talked at — panels, keynotes, slide decks",
                  "You want theory without practice",
                ].map((item, idx) => (
                  <div key={idx} className="py-3 border-b border-brand-border flex gap-3">
                    <span className="text-brand-text/50 flex-shrink-0">—</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="bg-brand-bg py-24 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-bold text-4xl md:text-5xl mb-12">Everything included.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "All Materials", desc: "Every framework, template, and resource from the day — sent to you afterwards" },
              { title: "Full Catering", desc: "Breakfast, lunch, and refreshments throughout the day" },
              { title: "Peer Community", desc: "A private group of leaders at your level — independent, neutral, no company politics. A safe sounding board long after the day ends." },
              { title: "Certificate", desc: "Personalised Certificate of Mastery with your name" },
              { title: "Follow-Up Resources", desc: "Continued access to frameworks and tools as AI evolves" },
              { title: "Satisfaction Guarantee", desc: "100% money-back guarantee. If you are not satisfied, full refund. No questions." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-7 text-center">
                <h4 className="text-base font-semibold text-brand-text mb-2">{item.title}</h4>
                <p className="text-sm text-brand-text/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-bold text-4xl md:text-5xl mb-12">From past workshops.</h2>
          <div className="space-y-0 text-left">
            {[
              { q: "\"I have been in leadership for twenty years and I have never sat in a room where I felt that safe to say I genuinely did not know something. That alone was worth the day.\"", attr: "Chief Executive — Professional Services" },
              { q: "\"Rujuta has a rare ability to translate complexity into something actionable. I left with a framework I actually used in a board meeting the following week.\"", attr: "Non-Executive Director — FTSE 250" },
              { q: "\"I expected theory. I got a working session that changed how I approach every conversation about AI in my business.\"", attr: "Founder & CEO — Scale-up" },
            ].map((item, idx) => (
              <div key={idx} className="py-10 border-t border-brand-border">
                <blockquote className="font-bold text-2xl leading-relaxed text-brand-text mb-4 font-normal italic">
                  {item.q}
                </blockquote>
                <div className="text-sm text-brand-text/50 font-medium uppercase tracking-[0.5px]">
                  {item.attr}
                </div>
              </div>
            ))}
          </div>
          <div className="p-8 bg-brand-bg text-center mt-8 text-sm text-brand-text/50 italic">
            Additional testimonials and LinkedIn screenshots to be added here.
          </div>
        </div>
      </section>

      {/* FACILITATORS */}
      <section className="bg-brand-bg py-24 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-bold text-4xl md:text-5xl mb-12">Your facilitators.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {[
              {
                initial: "C",
                image: chrisImage,
                name: "Chris",
                org: "Collective Intelligence",
                desc: "Expert in individual productivity and AI-human synthesis for senior leadership. Chris works directly with board members and CXOs to integrate AI into their personal decision-making workflows. He makes the complex feel instinctive.",
                tag: "Morning · AI for You",
              },
              {
                initial: "R",
                image: rujutaImage,
                imageClass: "object-top",
                name: "Rujuta Singh",
                org: "Solved Together",
                desc: "22 years in enterprise transformation. Specialist in high-trust executive workshops and organisational change. Rujuta bridges the gap between AI potential and operational reality — and has a rare ability to make leaders feel safe enough to say what they really think.",
                tag: "Afternoon · AI for Your Company",
              },
            ].map((fac, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10">
                {fac.image ? (
                  <img src={fac.image} alt={fac.name} className={`w-20 h-20 rounded-full mb-5 object-cover border border-brand-border ${fac.imageClass || ''}`} />
                ) : (
                  <div className="w-20 h-20 bg-brand-border rounded-full mb-5 flex items-center justify-center text-3xl text-brand-text/50 font-bold">
                    {fac.initial}
                  </div>
                )}
                <h4 className="text-xl font-semibold mb-1">{fac.name}</h4>
                <div className="text-sm text-brand-primary font-medium mb-3">{fac.org}</div>
                <p className="text-base text-brand-text/80 leading-relaxed mb-4">{fac.desc}</p>
                <div className="mt-4 text-xs uppercase tracking-[1.5px] text-brand-text/50">{fac.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white py-24 px-8 text-center" id="apply">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-3">Secure your place.</h2>
          <p className="text-lg text-brand-text/80 mb-12">Seats are allocated by application. We keep the room small deliberately.</p>

          <div className="flex flex-col md:flex-row max-w-[640px] mx-auto">
            <div className="flex-1 p-10 bg-white border-2 border-brand-primary">
              <div className="text-xs uppercase tracking-[2px] text-brand-primary font-semibold mb-2">Early Bird</div>
              <div className="font-bold text-6xl text-brand-text leading-none">£799</div>
              <div className="text-sm text-brand-text/50 mt-1.5 uppercase"> + VAT </div>
              <p className="text-sm text-brand-text/80 my-6 italic">Until early bird deadline</p>
              <button className="w-full bg-brand-primary text-white py-4 text-base font-medium tracking-[0.5px] hover:bg-brand-primary/90 transition-colors">
                Apply for a Seat
              </button>
            </div>
            <div className="flex-1 p-10 bg-brand-bg">
              <div className="text-xs uppercase tracking-[2px] text-brand-text/50 font-semibold mb-2">Standard</div>
              <div className="font-bold text-6xl text-brand-text/50 leading-none">£999</div>
              <div className="text-sm text-brand-text/50 mt-1.5 uppercase"> + VAT </div>
              <p className="text-sm text-brand-text/50 my-6 italic">After early bird expires</p>
              <button className="w-full bg-brand-text/80 text-white py-4 text-base font-medium tracking-[0.5px] hover:bg-brand-text/90 transition-colors">
                Apply for a Seat
              </button>
            </div>
          </div>
          <p className="mt-8 text-sm text-brand-text/50 italic">
            100% satisfaction guarantee. Full refund if you are not satisfied.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-bg py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-bold text-4xl md:text-5xl mb-12 text-center">Frequently asked questions.</h2>
          <div className="space-y-0 max-w-[800px] mx-auto">
            {[
              { q: "Are there early bird discounts?", a: "Yes. Register before the early bird deadline for the reduced rate. After that, the standard price applies." },
              { q: "Will there be recordings?", a: "No. This is an in-person session with no recordings. All materials taught during the day are sent to participants afterwards. Chatham House Rules mean the conversations in this room stay in this room." },
              { q: "Why is the group limited to 12?", a: "Deliberately. We want a safe space where senior leaders can say \"I do not know,\" ask real questions, and express concerns without judgement. A small group makes that possible. It also means every participant gets hands-on attention and genuine peer connection." },
              { q: "Why is this in person?", a: "We have seen a significant difference in impact and depth between virtual and in-person sessions, especially at leadership level. Much of the learning happens through the people in the room — not just the facilitators. The connections formed in person are often more valuable than the content itself. Speed of learning, retention, quality of conversation — everything is better face to face." },
              { q: "What if I cannot attend the full day?", a: "The day is designed to flow from one session to the next. We strongly encourage full-day attendance. Arriving late or leaving early means missing context that builds throughout the day." },
              { q: "Are virtual sessions planned?", a: "Not for the public programme. We do run private CXO AI days tailored to individual companies and PE houses for their portfolio companies, and we travel to different locations for those. This public session is specifically designed as an in-person experience in London." },
              { q: "Do I need technical knowledge?", a: "No. This is specifically designed for non-technical leaders — CEOs, CFOs, CHROs, CMOs, COOs, board members. You do not need to code or understand machine learning. Just bring curiosity and willingness to learn by doing." },
              { q: "What if I am not satisfied?", a: "100% satisfaction guarantee. Full refund if you are not satisfied. No questions asked." },
              { q: "Is this for CXOs only, or board members too?", a: "Both. C-suite executives and board members (executive and non-executive) of mid-sized companies, family businesses, enterprise organisations, and non-profits. Anyone in a leadership role with a team who wants to understand AI's impact on their business. We are planning a separate session for solopreneurs and consultants." },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-brand-border">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left py-5 flex justify-between items-center group"
                >
                  <span className="text-lg font-medium text-brand-text leading-tight">{faq.q}</span>
                  <span className="text-2xl text-brand-text/50 font-light transition-transform group-hover:scale-110">
                    {openFaq === idx ? "–" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="pb-6 text-base text-brand-text/80 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-white py-32 px-8 text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl max-w-[700px] mx-auto mb-6 leading-[1.3] font-normal italic">
            You do not have to figure this out alone.
          </h2>
          <p className="text-lg text-brand-text/80 max-w-[600px] mx-auto mb-2">
            There is a room where the question "what do I actually do about AI?" is not only allowed — it is the point.
          </p>
          <a
            href="#apply"
            className="inline-block bg-brand-primary text-white px-12 py-4 text-base font-medium no-underline mt-8 hover:bg-brand-primary/90 transition-colors"
          >
            Apply for a Seat
          </a>
          <div className="mt-8 text-sm text-brand-text/50 tracking-[1px] uppercase">
            Chatham House Rules Apply
          </div>
        </div>
      </section>

      <footer className="py-10 px-8 text-center border-t border-brand-border text-sm text-brand-text/50 uppercase tracking-wider">
        © 2026 Solved Together & Collective Intelligence · contact@solvedtogether.co.uk
      </footer>
    </div>
  );
}
