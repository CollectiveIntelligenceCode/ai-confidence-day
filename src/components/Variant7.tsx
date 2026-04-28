import { useState } from "react";

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
        <div className="max-w-[1100px] px-8 flex justify-between items-center mx-auto">
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.15] max-w-[800px] mx-auto mb-6 font-normal">
            You are the most capable person in the room.{" "}
            <em className="italic text-brand-primary">Except when the topic is AI.</em>
          </h1>
          <p className="text-xl text-brand-text/80 max-w-[620px] mx-auto mb-4 leading-[1.65]">
            A private working day in London for CXOs and board members who are done nodding along on AI.
          </p>
          <div className="font-semibold text-3xl my-10">
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
          <h2 className="text-4xl md:text-5xl mb-5 font-normal">The reality no one says out loud.</h2>
          <p className="text-lg text-brand-text/80 max-w-[700px] mb-8 leading-[1.75]">
            AI is in every strategy deck. Your team is running experiments. Vendors are pitching AI-first solutions. Your board is asking questions that need confident answers.
          </p>
          <p className="text-lg text-brand-text/80 max-w-[700px] leading-[1.75]">
            And privately? The signal is noisy and the clarity is nowhere. That is not a personal failing. It is almost universal at senior level — which is why almost no one is saying it out loud.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-brand-border">
            {[
              { num: "74%", text: "of CEOs say gaps in AI understanding are affecting their boardroom decisions", source: "Cisco, 2025" },
              { num: "66%", text: "of board directors report limited to no knowledge or experience with AI", source: "McKinsey" },
              { num: "50%", text: "of CEOs believe their job stability depends on getting AI right in 2026", source: "BCG / WEF, 2026" },
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
          <p className="text-center mt-12 text-xl text-brand-text font-semibold">
            If any of this sounds familiar, this day was designed for you.
          </p>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center font-normal">Before this day. After this day.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="text-sm uppercase tracking-[2px] font-semibold mb-6 pb-3 border-b-2 border-brand-border text-brand-text/50">Where you are now</h3>
              <div className="text-brand-text/80 text-base leading-relaxed">
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
                    <span className="text-brand-text/50 mr-2">—</span>{item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[2px] font-semibold mb-6 pb-3 border-b-2 border-brand-primary text-brand-primary">Where you will be</h3>
              <div className="text-brand-text/80 text-base leading-relaxed">
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
          <div className="mt-12 pt-8 border-t border-brand-border flex flex-col md:flex-row gap-4 flex-wrap">
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
          <h2 className="text-4xl md:text-5xl mb-3 text-center font-normal">The Day</h2>
          <p className="text-center text-lg text-brand-text/80 mb-16">AI for you. AI for your company.</p>

          <div>
            {[
              {
                num: "01", time: "Morning", title: "Your AI Workflow",
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
                num: "02", time: "Afternoon", title: "AI Across Your Organisation",
                fac: "With Rujuta · Solved Together",
                desc: "This is not \"everyone should use ChatGPT.\" This session is about the harder question: how do you lead an organisation through genuine AI transformation? Cross-functional thinking, systems, processes. The frameworks that let a leadership team act on AI instead of reacting to it.",
                outcomes: [
                  "A framework to evaluate AI decisions at board level",
                  "Language to align your leadership team on AI priorities",
                  "How to evaluate vendor claims and answer board questions with confidence",
                  "Clarity on what transformation actually looks like in practice",
                ],
              },
              {
                num: "03", time: "Late Afternoon", title: "Your AI Worries",
                fac: "",
                desc: "AI conversations in boardrooms always come with a second, quieter conversation: what about data governance? What about regulatory risk? What about security? These are the questions that slow decisions, stall strategies, and keep leadership teams stuck between ambition and caution. This session addresses them directly.",
                outcomes: [
                  "Why AI risk requires a fundamentally different playbook from other technology — and what that playbook looks like",
                  "Data governance, privacy, and security at the organisational level — what boards actually need to know",
                  "How companies are implementing AI governance without creating bureaucracy that kills momentum",
                  "Using AI to manage risk — automated compliance, monitoring, and guardrails in practice",
                  "Regulatory landscape — what is coming, what matters, and what you can safely deprioritise",
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
                  "You are a non-technical CXO — CEO, CFO, CMO, CHRO, COO, CISO — who leads the business, not builds the technology",
                  "You are a board member — executive or non-executive — steering a company through AI uncertainty",
                  "You run a company or organisation with a team — ideally 50+ people, though this applies from small non-profits to enterprise",
                  "You either do not have an AI strategy, or your company has one but you want to be able to confidently navigate it yourself",
                  "You are done with just reading, listening, and talking about AI — you want to take the reins yourself",
                  "You want to learn by doing, not by sitting in another audience",
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
                  "You are a solopreneur or consultant — we are planning a separate session for you",
                  "You have a developer, engineering, or technical background and want a deep-dive into machine learning or AI architecture",
                  "You prefer being talked at — panels, keynotes, slide decks",
                  "You want theory without practice",
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

      {/* FACILITATORS */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center font-normal">Your facilitators.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                image: "/Chris Bradshaw Headshot.jpg",
                name: "Chris",
                org: "Collective Intelligence",
                desc: "Expert in individual productivity and AI-human synthesis for senior leadership. Chris works directly with board members and CXOs to integrate AI into their personal decision-making workflows. He makes the complex feel instinctive.",
                tag: "Morning · AI for You",
                videoSrc: "https://www.youtube-nocookie.com/embed/_QJxl9-i3Jc?si=comNnJPyTqM1kt4B&controls=0",
              },
              {
                image: "/Rujuta Singh.jpg",
                imageClass: "object-top",
                name: "Rujuta Singh",
                org: "Solved Together",
                desc: "22 years in enterprise transformation. Specialist in high-trust executive workshops and organisational change. Rujuta bridges the gap between AI potential and operational reality — and has a rare ability to make leaders feel safe enough to say what they really think.",
                tag: "Afternoon · AI for Your Company",
                videoSrc: "https://www.youtube-nocookie.com/embed/_QJxl9-i3Jc?si=comNnJPyTqM1kt4B&controls=0",
              },
            ].map((fac, idx) => (
              <div key={idx} className="bg-brand-bg p-8 md:p-10">
                <img
                  src={fac.image}
                  alt={fac.name}
                  className={`w-20 h-20 rounded-full mb-5 object-cover border border-brand-border ${fac.imageClass || ""}`}
                />
                <h4 className="text-xl font-semibold mb-1">{fac.name}</h4>
                <div className="text-sm text-brand-primary font-medium mb-3">{fac.org}</div>
                <p className="text-base text-brand-text/80 leading-relaxed mb-6">{fac.desc}</p>

                <div className="relative w-full aspect-video mb-4 overflow-hidden bg-brand-border">
                  {fac.videoSrc ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={fac.videoSrc}
                      title={`${fac.name} — video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-14 h-14 rounded-full bg-brand-primary/10 border-2 border-brand-primary flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-brand-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <p className="text-sm text-brand-text/50 italic">Video coming soon</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-xs uppercase tracking-[1.5px] text-brand-text/50">{fac.tag}</div>
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
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { src: "/03-SmithsofSmithfield (1) (1).jpg", alt: "Smiths of Smithfield venue" },
              { src: "/20240531115125_IMG_4439.jpg", alt: "Smiths of Smithfield venue" },
            ].map((photo, idx) => (
              <div key={idx} className="aspect-video overflow-hidden bg-brand-border">
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
              </div>
            ))}
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

          <div>
            {[
              {
                photo: "/attendee-samantha.jpeg",
                name: "Samantha Graham",
                role: "Founder and CEO, State of Mind",
                q: "\"I have been in leadership for twenty years and I have never sat in a room where I felt that safe to say I genuinely did not know something. That alone was worth the day.\"",
              },
              {
                photo: "/attendee-dan.jpeg",
                name: "Dan Brown",
                role: "International Sales Director, Dailymotion",
                q: "\"Rujuta has a rare ability to translate complexity into something actionable. I left with a framework I actually used in a board meeting the following week.\"",
              },
              {
                photo: "/attendee-samrat.jpeg",
                name: "Samrat Ghosh",
                role: "Cross Asset Sales and Execution, Aurel BGC",
                q: "\"I expected theory. I got a working session that changed how I approach every conversation about AI in my business.\"",
              },
              {
                photo: "/attendee-mark.jpeg",
                name: "Mark Gomez",
                role: "Global Sales Director, Wooshii",
                q: "\"An introduction to how AI enables business in every aspect. I realised I am not as far on the AI journey as I thought — especially for sales and lead generation.\"",
              },
            ].map((item, idx) => (
              <div key={idx} className="py-10 border-t border-brand-border flex gap-6 items-start">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0 border border-brand-border mt-1"
                />
                <div>
                  <blockquote className="text-xl leading-relaxed text-brand-text mb-3 italic font-normal">
                    {item.q}
                  </blockquote>
                  <div className="text-sm text-brand-text/50 font-medium">
                    {item.name} <span className="text-brand-text/30 mx-1">·</span> {item.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-brand-bg text-center mt-4 text-sm text-brand-text/50 italic border border-brand-border">
            Additional testimonials and LinkedIn screenshots to be added here.
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-brand-bg py-24 px-8 text-center" id="apply">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl mb-3 font-normal">Secure your place.</h2>
          <p className="text-lg text-brand-text/80 mb-12">Seats are allocated by application. We keep the room small deliberately.</p>

          <div className="flex flex-col md:flex-row max-w-[640px] mx-auto">
            <div className="flex-1 p-10 bg-white border-2 border-brand-primary">
              <div className="text-xs uppercase tracking-[2px] text-brand-primary font-semibold mb-2">Early Bird</div>
              <div className="text-6xl text-brand-text leading-none font-normal">£799</div>
              <div className="text-sm text-brand-text/50 mt-1.5 uppercase">+ VAT</div>
              <p className="text-sm text-brand-text/80 my-6 italic">Until early bird deadline</p>
              <a href="#apply" className="block w-full bg-brand-primary text-white py-4 text-base font-medium tracking-[0.5px] hover:bg-brand-primary/90 transition-colors no-underline">
                Apply for a Seat
              </a>
            </div>
            <div className="flex-1 p-10 bg-white border border-brand-border">
              <div className="text-xs uppercase tracking-[2px] text-brand-text/50 font-semibold mb-2">Standard</div>
              <div className="text-6xl text-brand-text/50 leading-none font-normal">£999</div>
              <div className="text-sm text-brand-text/50 mt-1.5 uppercase">+ VAT</div>
              <p className="text-sm text-brand-text/50 my-6 italic">After early bird expires</p>
              <a href="#apply" className="block w-full bg-brand-text/20 text-brand-text/60 py-4 text-base font-medium no-underline">
                Apply for a Seat
              </a>
            </div>
          </div>
          <p className="mt-8 text-sm text-brand-text/50 italic">
            100% satisfaction guarantee. Full refund if you are not satisfied.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl mb-12 text-center font-normal">Frequently asked questions.</h2>
          <div className="max-w-[800px] mx-auto">
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
              { q: "What is the difference between this and the Consultants & Small Business day?", a: "Two things: the room and the content. The people in your room are CXOs and board members of mid-sized and enterprise organisations — people navigating the same scale of decisions you are. That matters because this day is built around co-creation and solving problems together. The content is tailored to your reality: scaling AI across hundreds or thousands of people, building organisational playbooks, navigating implementation approaches, and making confident decisions at board level. The consultants day addresses a different set of problems — individual productivity, running a business on AI, and advising clients. Different problems, different room, different content." },
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
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-brand-bg py-32 px-8 text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-[700px] mx-auto mb-6 leading-[1.3] italic font-normal">
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
