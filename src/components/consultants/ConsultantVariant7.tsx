import { useState, useRef } from "react";
import PageMeta from "../PageMeta";
import { NavCountdown } from "../ui/countdown-timer";
import ShiftingCountdown from "../ui/countdown-timer";
import TestimonialsCarousel from "../ui/TestimonialsCarousel";

export default function ConsultantVariant7() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const workshopCarouselRef = useRef<HTMLDivElement>(null);
  const venueCarouselRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="font-quicksand text-brand-text bg-brand-surface leading-relaxed text-lg font-light min-h-screen">
      <PageMeta
        title="AI Confidence Day for Consultants & Small Business Owners | Solved Together"
        description="A private, hands-on working day in London for consultants and small business owners who are done bookmarking AI guides they never go back to. 19th June 2026. 12 people maximum."
        url="https://ai.solvedtogether.co.uk/consultants"
      />

      {/* RED TOP BAR */}
      <div className="h-[4px] bg-brand-primary fixed top-0 left-0 right-0 z-[100]" />

      {/* NAV */}
      <nav className="fixed top-[4px] left-0 right-0 z-[99] bg-brand-surface/95 backdrop-blur-md border-b border-brand-border py-3">
        <div className="max-w-[1100px] px-8 flex items-center justify-between mx-auto">
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm tracking-[1.5px] uppercase text-brand-text">Early bird · £899</span>
            <span className="text-brand-text/30 text-sm">·</span>
            <span className="text-xs font-medium tracking-[1px] uppercase text-brand-text/50">ends in</span>
            <NavCountdown />
          </div>
          <a
            href="/apply/consultants"
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
            Not another webinar. Not another prompt engineering class.
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.15] max-w-[800px] mx-auto mb-6 font-normal">
            Stop spending time on what AI can do.{" "}
            <em className="italic text-brand-primary">Start spending it on what only you can do.</em>
          </h1>
          <p className="text-xl text-brand-text/80 max-w-[620px] mx-auto mb-4 leading-[1.65]">
            A private, hands-on working day in London for consultants and small business owners who are done bookmarking AI guides they never go back to.
          </p>
          <div className="font-semibold text-3xl my-10">
            One Day. Built, Not Bookmarked.
          </div>
          <a
            href="/apply/consultants"
            className="inline-block bg-brand-primary text-white px-10 py-4 text-base font-medium no-underline tracking-[0.5px] mt-2 hover:bg-brand-primary/90 transition-colors"
          >
            Apply for a Seat
          </a>
          <div className="mt-8 text-sm text-brand-text/50 tracking-[1px]">
            19th June 2026 · London · 12 people maximum
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <div className="bg-white border-b border-brand-border py-10 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1px] bg-brand-border max-w-[800px] mx-auto">
          {[
            { label: "Date", value: "19th June 2026" },
            { label: "Location", value: "London, UK" },
            { label: "Format", value: "Full-Day Workshop" },
            { label: "Audience", value: "Consultants & Small Business Owners" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 text-center">
              <div className="text-xs uppercase tracking-[2px] text-brand-text/50 mb-1.5 font-medium">
                {item.label}
              </div>
              <div className="font-semibold text-xl text-brand-text">
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

      {/* THE REALITY */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl mb-10 font-normal text-center">You already know AI gives you an unfair advantage. You just have not had the breathing space to figure out how.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Left: video */}
            <div className="flex flex-col justify-center">
              <div className="relative w-full aspect-video overflow-hidden bg-brand-border">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube-nocookie.com/embed/3lATCQTJ9v4?si=hw41VdsiIaEIsd09"
                  title="Chris Bradshaw — the reality no one says out loud"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
            {/* Right: body text */}
            <div className="flex flex-col justify-center">
              <p className="text-lg text-brand-text/80 mb-8 leading-[1.75]">
                You are delivering client work, marketing yourself, writing proposals, chasing invoices, doing the admin you hate. And every time you carve out an evening to finally learn AI properly, a client emergency lands and the evening disappears.
              </p>
              <p className="text-lg text-brand-text/80 leading-[1.75]">
                So you bookmark another guide. Save another LinkedIn post. Tell yourself you will get to it next week. You know the pattern.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-brand-border">
            {[
              { num: "75%", text: "of independent workers now use AI — but fewer than a quarter of them have meaningfully adopted it", source: "MBO Partners / Simply Business, 2025" },
              { num: "9hrs", text: "saved per week by independent workers who have properly adopted AI into their workflow", source: "MBO Partners, 2025" },
              { num: "25–60%", text: "higher rates commanded by AI-skilled freelancers and consultants vs. general practitioners", source: "Upwork, 2025–2026" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-semibold text-5xl text-brand-primary leading-tight">{stat.num}</div>
                <div className="text-sm text-brand-text/80 mt-2 leading-normal">{stat.text}</div>
                <div className="text-xs text-brand-text/50 mt-1 uppercase tracking-[1px]">{stat.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOUND LIKE YOU */}
      <section className="bg-brand-bg py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center font-normal">Does this sound like you?</h2>
          <div className="space-y-4">
            {[
              "\"I am delivering, marketing, selling, and doing admin. I physically cannot take on one more thing — but I know AI could change everything if I just had the time.\"",
              "\"A competitor sent a client a proposal five minutes after the call ended. Mine took three days.\"",
              "\"I have saved about forty AI guides, bookmarked twelve tools, and actually implemented none of them.\"",
              "\"I know there is a version of my business where I operate like a team of five. I just cannot see how to get there from here.\"",
              "\"I have a feeling I am leaving 95% on the table. I just do not know what that 95% looks like.\"",
            ].map((thought, idx) => (
              <div key={idx} className="bg-white border-l-[3px] border-brand-primary p-6 md:px-8 italic text-brand-text/80 text-lg leading-relaxed">
                {thought}
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-xl text-brand-text font-semibold">
            If any of this sounds familiar, this day was designed for you.
          </p>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center font-normal">Before / After — AI Confidence Day</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="text-sm uppercase tracking-[2px] font-semibold mb-6 pb-3 border-b-2 border-brand-border text-brand-text/50">Where you are now</h3>
              <div className="text-brand-text/80 text-base leading-relaxed">
                {[
                  "I use AI for emails and summaries and think I am keeping up. I am using about 5% of what is possible.",
                  "I spend days on proposals, content, and client prep that could take hours.",
                  "When a client asks about AI, I change the subject or give a vague answer.",
                  "I keep seeing other consultants positioning themselves as \"AI-native\" and I do not know how they got there.",
                  "I am not sure what is worth paying for and what is noise.",
                ].map((item, idx) => (
                  <div key={idx} className="py-3.5 border-b border-brand-border">
                    <span className="text-brand-text/50 mr-2">—</span>{item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[2px] font-semibold mb-6 pb-3 border-b-2 border-brand-primary text-brand-primary">Where you will be</h3>
              <div className="text-brand-text/80 text-base leading-relaxed">
                {[
                  "I have a personal AI workflow that turns proposals, content, and research into a fraction of the time they used to take.",
                  "I can advise clients on what AI can do for their business, what it costs, and what is realistic — and they see me as the expert.",
                  "I know exactly which tools are worth my money and which I can ignore.",
                  "My pricing and delivery have an edge that larger competitors cannot match.",
                  "I have a way of thinking about AI that does not expire every time a new tool launches.",
                ].map((item, idx) => (
                  <div key={idx} className="py-3.5 border-b border-brand-border">
                    <span className="text-brand-primary mr-2">✓</span>{item}
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
          <h2 className="text-4xl md:text-5xl mb-12 font-normal">What this day is.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: "Private & Small", desc: "Twelve people. Consultants, founders, and small business owners. No audience, no observers. Everyone in the room has the same sense of urgency about AI that you do." },
              { title: "Hands-On, Not Theoretical", desc: "You will build your own AI workflow during the day. Not watch someone demo theirs. You leave with something you made — and can use the next morning." },
              { title: "Facilitated, Not Lectured", desc: "Rujuta and Chris have run these rooms before. They know how to create the conditions for real learning. Past attendees ask when the next one is." },
              { title: "Chatham House Rules", desc: "Nothing shared in this room is attributed outside it. You can be honest about where you are — and that is where the best learning happens." },
            ].map((item, idx) => (
              <div key={idx} className="py-6">
                <h4 className="text-sm uppercase tracking-[2px] text-brand-primary font-semibold mb-2.5">{item.title}</h4>
                <p className="text-brand-text/80 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-brand-border flex flex-col md:flex-row gap-4 flex-wrap">
            {["Not a webinar", "Not a prompt engineering class", "Not a tools roundup", "Not a vendor showcase"].map((item, idx) => (
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
          <h2 className="text-4xl md:text-5xl mb-16 text-center font-normal">The Day</h2>

          <div>
            {[
              {
                num: "01", time: "Morning", title: "Your AI Workflow",
                fac: "",
                desc: "You wear every hat. AI can wear most of them with you. This session is hands-on: you will build a personal workflow that changes how you write proposals, prepare for client calls, create content, and handle the operational load that eats your evenings and weekends.",
                outcomes: [
                  "A personal AI workflow built around your actual day — not someone else's",
                  "How to go from client call to polished proposal in hours, not days",
                  "AI for content, marketing, and client communications — in your voice, not a generic one",
                  "Practical techniques you can deploy the next morning",
                ],
              },
              {
                num: "02", time: "Afternoon", title: "AI for Your Business",
                fac: "",
                desc: "This is not \"use ChatGPT more.\" This is about rethinking how your business operates. How you price. How you deliver. How you compete. How you advise your clients. The frameworks that turn AI from a tool you occasionally use into an operating advantage that changes your economics.",
                outcomes: [
                  "How to advise clients on AI with genuine confidence — scope, cost, what is realistic",
                  "A framework for evaluating which AI tools are worth your money and which are noise",
                  "How to position yourself as AI-native in your market — and actually back it up",
                  "Pricing, packaging, and delivery models that leverage AI as a competitive edge",
                ],
              },
              {
                num: "03", time: "Late Afternoon", title: "Your AI Worries",
                fac: "",
                desc: "Every conversation about AI comes with a shadow conversation: what about data? What about privacy? What about my clients' data? These are not irrational fears. They are the questions that most AI training deliberately avoids. This session tackles them head-on — practically, not theoretically.",
                outcomes: [
                  "Why AI risk needs a different playbook from other technology — and what that playbook looks like",
                  "Data, privacy, and security — what you need to know for yourself and what your clients will ask you",
                  "How to use AI to manage risk — compliance, monitoring, and guardrails in practice",
                  "What tools are available right now, what they cost, and the trade-offs of each",
                  "An honest assessment of what deserves genuine caution and what is overblown",
                ],
              },
            ].map((session, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 py-12 border-t border-brand-border">
                <div className="text-sm text-brand-text/50 md:text-right pt-1">
                  {session.num}
                  <span className="block text-xs uppercase tracking-[1.5px] mt-1">{session.time}</span>
                </div>
                <div>
                  <h3 className="text-3xl mb-1 font-normal">{session.title}</h3>
                  {session.fac && <div className="text-sm text-brand-primary font-medium mb-4">{session.fac}</div>}
                  <p className="text-brand-text/80 text-base leading-relaxed mb-5">{session.desc}</p>
                  <ul>
                    {session.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="py-2 text-base text-brand-text/80 border-b border-brand-border">
                        <span className="text-brand-primary mr-2">→</span>{outcome}
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
          <h2 className="text-4xl md:text-5xl mb-2 font-normal">What you leave with.</h2>
          <p className="text-lg text-brand-text/80 mb-12">Things you build during the day and use on Monday.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              "A working AI system for your business — proposals, content, research, client prep — built by you, during the day",
              "The confidence to talk to clients about AI — scope it, cost it, and know what is realistic for their business",
              "A practical understanding of AI data, privacy, and security — for yourself and for advising clients",
              "A safe, close-knit group of peers — no competition, no politics — to go back to whenever you need a sounding board",
            ].map((outcome, idx) => (
              <div key={idx} className="bg-white p-8 border-l-[3px] border-brand-primary">
                <div className="text-4xl md:text-5xl text-brand-primary opacity-40 mb-2 leading-none font-normal">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="text-base text-brand-text/80 leading-relaxed">{outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR YOU / NOT FOR YOU */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center font-normal">Is this day for you?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-sm uppercase tracking-[2px] font-semibold mb-6 pb-3 border-b-2 border-brand-primary text-brand-primary">This day is for you if&hellip;</h3>
              <div className="text-brand-text/80 text-base leading-relaxed">
                {[
                  "You are a consultant, fractional executive, freelance professional, or small business owner",
                  "You already use AI but you know you are barely scratching the surface",
                  "You want to learn by building, not by watching another webinar",
                  "You want to be the person clients call when the AI question comes up",
                ].map((item, idx) => (
                  <div key={idx} className="py-3 border-b border-brand-border flex gap-3">
                    <span className="text-brand-primary font-semibold text-lg flex-shrink-0">+</span>{item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[2px] font-semibold mb-6 pb-3 border-b-2 border-brand-border text-brand-text/50">This day is not for you if&hellip;</h3>
              <div className="text-brand-text/80 text-base leading-relaxed">
                {[
                  "You have a technical or engineering background and want a deep-dive into machine learning or AI architecture",
                  "You prefer a passive learning experience — talks, slides, someone presenting at you",
                  "You are already running your business on AI and feel confident in your setup",
                  <>You are a CXO or board member of a mid-sized or enterprise business — <a href="/" className="text-brand-primary underline underline-offset-2 hover:opacity-75 transition-opacity">we have a separate AI Confidence Day built for you, check it out</a></>,
                ].map((item, idx) => (
                  <div key={idx} className="py-3 border-b border-brand-border flex gap-3">
                    <span className="text-brand-text/50 flex-shrink-0">—</span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVERYTHING INCLUDED */}
      <section className="bg-brand-bg py-24 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-12 font-normal">Everything included.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "All Materials", desc: "Every framework, template, and resource from the day — sent to you afterwards" },
              { title: "Full Catering", desc: "Breakfast, lunch, and refreshments throughout the day" },
              { title: "Peer Community", desc: "A private group of independents at your level — no competition, no agenda. A safe sounding board long after the day ends." },
              { title: "Certificate", desc: "Personalised Certificate of Mastery with your name" },
              { title: "Follow-Up Resources", desc: "Continued access to frameworks and tools as AI evolves" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-7 text-center">
                <h4 className="text-base font-semibold text-brand-text mb-2">{item.title}</h4>
                <p className="text-sm text-brand-text/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITATORS */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center font-normal">Your facilitators.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                image: "/Chris Bradshaw Headshot.jpg",
                name: "Chris Bradshaw",
                org: "Collective Intelligence",
                desc: "22 years building companies, four of his own, including Collective Intelligence and Creative Capital Group, with stints as Group CEO and Global Strategy Director along the way. Enterprise AI Partner at Board of Innovation. Chris has been the consultant and founder wearing every hat; he built his own AI workflow to change that. His sessions are hands-on by design: you leave with something you built yourself, not slides you'll never open.",
                videoSrc: "https://www.youtube-nocookie.com/embed/3lATCQTJ9v4?si=hw41VdsiIaEIsd09",
              },
              {
                image: "/Rujuta Singh.jpg",
                imageClass: "object-top",
                name: "Rujuta Singh",
                org: "Solved Together",
                desc: "Over two decades leading large-scale transformation in Fortune 500 companies across insurance, banking, PE, public sector, education, real estate, and more. Ex-PwC, ex-Accenture, ex-Microsoft. Founded Solved Together, combining neuroscience-based advanced collaboration methods with deep transformation expertise — helping leaders compress time and cost to value with AI in days, not years.",
                videoSrc: "https://www.youtube-nocookie.com/embed/X-GWD6l5708?si=2ndtifwJzVyjwA8W",
              },
            ].map((fac, idx) => (
              <div key={idx} className="bg-brand-bg p-8 md:p-10">
                <img
                  src={fac.image}
                  alt={fac.name}
                  className={`w-[200px] h-[200px] rounded-full mb-5 object-cover border border-brand-border mx-auto block ${fac.imageClass || ""}`}
                />
                <h4 className="text-xl font-semibold mb-1">{fac.name}</h4>
                <div className="text-sm text-brand-primary font-medium mb-3">{fac.org}</div>
                <p className="text-base text-brand-text/80 leading-relaxed">{fac.desc}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE VENUE */}
      <section className="bg-brand-bg py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-center font-normal">The venue.</h2>
          <p className="text-center text-lg text-brand-text/80 mb-12 max-w-[600px] mx-auto">
            A carefully chosen space in London — designed for the kind of focused, honest conversation that doesn't happen in a hotel conference room.
          </p>

          <div className="relative mb-8">
            <div
              ref={venueCarouselRef}
              className="flex gap-3 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none" }}
            >
              {[
                { src: "/03-SmithsofSmithfield (1) (1).jpg", alt: "Smiths of Smithfield venue" },
                { src: "/3.png", alt: "Smiths of Smithfield venue" },
                { src: "/4.png", alt: "Smiths of Smithfield venue" },
                { src: "/5.png", alt: "Smiths of Smithfield venue" },
              ].map((photo, idx) => (
                <div key={idx} className="flex-none w-[80%] md:w-[45%] snap-start">
                  <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover rounded-sm" />
                </div>
              ))}
            </div>
            <button
              onClick={() => venueCarouselRef.current?.scrollBy({ left: -420, behavior: "smooth" })}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white border border-brand-border flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white transition-colors shadow-sm z-10"
            >
              ←
            </button>
            <button
              onClick={() => venueCarouselRef.current?.scrollBy({ left: 420, behavior: "smooth" })}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white border border-brand-border flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white transition-colors shadow-sm z-10"
            >
              →
            </button>
          </div>

          <p className="text-center text-sm text-brand-text/40 tracking-[1px] mt-4">London · Exact address shared on registration</p>
        </div>
      </section>

      {/* FROM PAST WORKSHOPS */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-center font-normal">From past workshops.</h2>
          <p className="text-center text-lg text-brand-text/80 mb-12 max-w-[600px] mx-auto">
            Real rooms. Real people. Real outcomes.
          </p>

          {/* WORKSHOP PHOTOS */}
          <div className="relative mb-16">
            <div
              ref={workshopCarouselRef}
              className="flex gap-3 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none" }}
            >
              {[
                "/workshop-photo-1.png",
                "/workshop-photo-2.png",
                "/workshop-photo-3.png",
                "/workshop-photo-4.jpg",
                "/workshop-photo-5.jpg",
                "/6.jpg",
                "/7.jpg",
              ].map((src, idx) => (
                <div key={idx} className="flex-none w-[80%] md:w-[45%] snap-start">
                  <img src={src} alt="Previous workshop" className="w-full h-64 object-cover rounded-sm" />
                </div>
              ))}
            </div>
            <button
              onClick={() => workshopCarouselRef.current?.scrollBy({ left: -420, behavior: "smooth" })}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white border border-brand-border flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white transition-colors shadow-sm z-10"
            >
              ←
            </button>
            <button
              onClick={() => workshopCarouselRef.current?.scrollBy({ left: 420, behavior: "smooth" })}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white border border-brand-border flex items-center justify-center text-brand-text hover:bg-brand-primary hover:text-white transition-colors shadow-sm z-10"
            >
              →
            </button>
          </div>

          {/* TESTIMONIALS CAROUSEL */}
          <TestimonialsCarousel testimonials={[
            { photo: "/attendee-samantha.jpeg", name: "Samantha Graham", role: "Founder and CEO, State of Mind", q: "It was great — excellent process and some clear next steps for me to follow up on. That kind of well-held facilitation is totally what busy leaders need." },
            { photo: "/attendee-evelyn.jpg", name: "Evelyn Truter", role: "Marketing Director, Ricoh Europe", q: "We gathered the combined brainpower of sales and marketing leaders, from across industries, to reflect on our AI journeys, co-create solutions, and gain actionable tools to bring back to our teams. Thank you to Rujuta Singh for delivering transformative insights and inspiring us to translate these ideas into tangible, high-impact projects." },
            { photo: "/attendee-dan.jpeg", name: "Dan Brown", role: "International Sales Director, Dailymotion", q: "What surprised me was the extent we can apply AI to everyday tasks and simplify mundane activities. Recommend for anyone wanting structured, strategic implementation." },
            { photo: null, name: "Matthew Townson", role: "Vodafone", q: "I jumped into this dynamic workshop led by the brilliant Rujuta Singh. We explored the real-world challenges businesses face when considering AI adoption. The session helped us understand what it takes to make AI tangible, accessible, and actionable." },
            { photo: "/attendee-samrat.jpeg", name: "Samrat Ghosh", role: "Cross Asset Sales and Execution, Aurel BGC", q: "This should be a starting point for any AI implementation. Surprised by how this process breaks down information barriers regarding siloed AI approaches." },
            { photo: null, name: "Kevin Levin", role: "Senior Legal Counsel, Citi Bank", q: "The 2-hour AI Problem Solving Workshop with Rujuta Singh was a personal highlight." },
            { photo: "/attendee-mark.jpeg", name: "Mark Gomez", role: "Global Sales Director, Wooshii", q: "An introduction to how AI enables business in every aspect. I realised I am not as far on the AI journey as I thought — especially for sales and lead generation." },
            { photo: null, name: "Rebecca Wilson", role: "Armstrong Watson", q: "Thought-provoking with surprising breadth and depth." },
            { photo: null, name: "Linda Ayoola", role: "TEDx UK", q: "I highly recommend Chris for his outstanding work building and executing our AI strategy at TEDx London. Chris brought genuine strategic and technical knowledge to what felt like an overwhelming topic. His guidance was instrumental in helping us understand where AI could actually move the needle — and quickly." },
            { photo: null, name: "Dearg O'Bartuín", role: "Co-founder & CTPO, Mara", q: "Chris is a natural leader when it comes to AI adoption. He has a talent for identifying where each person in the room is on their AI journey and meeting them there. By the end of our session the whole team had a shared language around AI and a clear path forward." },
            { photo: null, name: "Mike Brothers", role: "Commercial Leader / Investor / Mentor", q: "Chris helped me build an AI strategy and commercial validation model for my business. His process helped us understand exactly where AI could accelerate growth, and the frameworks he produced gave us something concrete to act on immediately — not just theory." },
            { photo: null, name: "Maren Brombeiss", role: "Founder, Working with Creative Personalities", q: "Chris has been a trusted guide through my AI journey over the last couple of years. He brings fresh ideas and always implements them in a straightforward, no-jargon way. What I appreciate most is that he's always available — whether it's a quick question or a deeper strategic conversation about where AI is taking my business." },
          ]} />

        </div>
      </section>

      {/* PRICING */}
      <section className="bg-brand-bg py-24 px-8 text-center" id="apply">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl mb-3 font-normal">Secure your place.</h2>
          <p className="text-lg text-brand-text/80 mb-12">Seats are allocated by application. We keep the room small deliberately.</p>

          <div className="flex flex-col md:flex-row max-w-[900px] mx-auto">
            <div className="flex-1 p-10 bg-white border-2 border-brand-primary">
              <div className="text-xs uppercase tracking-[2px] text-brand-primary font-semibold mb-2">Early Bird</div>
              <div className="text-6xl text-brand-text leading-none font-normal">£899</div>
              <div className="text-sm text-brand-text/50 mt-1.5 uppercase">+ VAT</div>
              <p className="text-sm text-brand-text/80 my-4 italic">Until 31 May 2026</p>
              <ShiftingCountdown />
              <a
                href="/apply/consultants"
                className="block w-full bg-brand-primary text-white py-4 text-base font-medium tracking-[0.5px] hover:bg-brand-primary/90 transition-colors no-underline text-center"
              >
                Apply for a Seat
              </a>
            </div>
            <div className="flex-1 p-10 bg-white border border-brand-border">
              <div className="text-xs uppercase tracking-[2px] text-brand-text/50 font-semibold mb-2">Standard</div>
              <div className="text-6xl text-brand-text/50 leading-none font-normal">£1,099</div>
              <div className="text-sm text-brand-text/50 mt-1.5 uppercase">+ VAT</div>
              <p className="text-sm text-brand-text/50 my-6 italic">After early bird expires</p>
              <a
                href="#apply"
                className="block w-full bg-brand-text/20 text-brand-text/60 py-4 text-base font-medium tracking-[0.5px] no-underline"
              >
                Apply for a Seat
              </a>
            </div>
            <div className="flex-1 p-10 bg-white border border-brand-border">
              <div className="text-xs uppercase tracking-[2px] text-brand-text/50 font-semibold mb-2">On the Door</div>
              <div className="text-6xl text-brand-text/50 leading-none font-normal">£1,299</div>
              <div className="text-sm text-brand-text/50 mt-1.5 uppercase">+ VAT</div>
              <p className="text-sm text-brand-text/50 my-6 italic">If spaces are still available</p>
              <a
                href="#apply"
                className="block w-full bg-brand-text/20 text-brand-text/60 py-4 text-base font-medium tracking-[0.5px] no-underline"
              >
                Apply for a Seat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center font-normal">Frequently asked questions.</h2>
          <div className="max-w-[800px] mx-auto">
            {[
              { q: "Do I need any technical knowledge?", a: "No. This is designed for non-technical people who run businesses. You do not need to code or understand machine learning. Just bring curiosity and willingness to get your hands dirty." },
              { q: "I already use ChatGPT. Is this still relevant?", a: "Especially so. Using ChatGPT for emails and summaries is about 5% of what is possible. This day shows you the other 95% — how to build workflows that genuinely change your capacity, your speed, and how you compete." },
              { q: "Why is this in person?", a: "Because you have already tried the online version. You have bookmarked the guides, saved the posts, signed up for the courses. How many have you gone back to? This is deliberately in-person so you actually do the work, in a room with peers at your level, and leave having done it — not just read about it." },
              { q: "Will there be recordings?", a: "No. All materials are sent to you afterwards. But Chatham House Rules mean the conversations stay in the room — and that is what makes people honest about where they really are." },
              { q: "I run my business on my own with no team. Is this for me?", a: "Especially. If you are doing everything yourself, AI is the closest thing to hiring a team without the cost. This day shows you how to operate like a team of five." },
              { q: "What does the 100% money-back guarantee* cover?", a: "If you attend the morning session and, before the lunch break, feel this day is not for you — you can leave. Let us know before lunch and we will refund you in full, no questions asked. We do not offer refunds after the lunch break as the full day's content will have been delivered by that point." },
              { q: "Are there early bird discounts?", a: "Yes. Register before 31 May 2026 for the early bird rate of £899 + VAT. After that, the standard price of £1,099 + VAT applies. If spaces are still available on the day, the on-the-door price is £1,299 + VAT." },
              { q: "What is the difference between this and the CXO & Board Members day?", a: "Two things: the room and the content. The people in your room are consultants, founders, and small business owners — people who share your problems, your pace, and your objectives. That matters because this day is built around co-creation and solving problems together, not just listening. The content is also tailored differently. For a small business, AI can deliver ROI on day one — because you are the business. The tools, the financials, and the threshold for value are immediate and personal. The CXO day addresses a different reality: scaling AI across hundreds or thousands of people, building organisational playbooks, navigating implementation methodologies, and making the case at board level. Different problems, different room, different content." },
              { q: "Will you be running more of these?", a: "Yes. We also run a separate AI Confidence Day for CXOs and board members of larger organisations. And we plan to run intermediate-level days for those who have attended the first one. This is the beginning, not the end." },
              { q: "Do you have other dates, later in the year?", a: <>We currently have no other dates planned for a public training for the rest of this year. We do run these privately for companies, where we have more flexibility on dates. <a href="mailto:aiconfidence@collectiveintelligence.co" className="text-brand-primary underline underline-offset-2 hover:opacity-75 transition-opacity">Reach out</a> if that is more suitable.</> },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-brand-border">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left py-5 flex justify-between items-center group"
                >
                  <span className="text-lg font-medium text-brand-text leading-tight pr-4">{faq.q}</span>
                  <span className="text-2xl text-brand-text/50 font-light flex-shrink-0 transition-transform group-hover:scale-110">
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
          <p className="mt-10 text-sm text-brand-text/50 italic max-w-[800px] mx-auto">* 100% money-back guarantee: full refund if you leave before the lunch break, no questions asked.</p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-brand-bg py-32 px-8 text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-[700px] mx-auto mb-6 leading-[1.3] italic font-normal">
            You have been running your business alone long enough.
          </h2>
          <p className="text-lg text-brand-text/80 max-w-[600px] mx-auto mb-2">
            One day to learn how AI can run it with you. That is all it takes.
          </p>
          <a
            href="/apply/consultants"
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
        © 2026 Solved Together & Collective Intelligence · aiconfidence@collectiveintelligence.co
      </footer>
    </div>
  );
}
