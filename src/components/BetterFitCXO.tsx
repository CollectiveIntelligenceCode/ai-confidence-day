import PageMeta from "./PageMeta";

export default function BetterFitCXO() {
  return (
    <div className="font-quicksand text-brand-text bg-brand-surface leading-relaxed min-h-screen">
      <PageMeta
        title="A Better Fit — AI Confidence Day for CXOs"
        description="Based on your profile, the AI Confidence Day for CXOs & Board Members may be a better fit."
        url="https://ai-confidence-day.vercel.app/apply/better-fit"
      />

      {/* RED TOP BAR */}
      <div className="h-[4px] bg-brand-primary fixed top-0 left-0 right-0 z-[100]" />

      {/* NAV */}
      <nav className="fixed top-[4px] left-0 right-0 z-[99] bg-brand-surface/95 backdrop-blur-md border-b border-brand-border py-3">
        <div className="max-w-[1100px] px-8 flex items-center justify-between mx-auto">
          <a
            href="/apply/consultants"
            className="text-sm text-brand-text/60 hover:text-brand-text transition-colors no-underline flex items-center gap-2"
          >
            <span>←</span> Back
          </a>
          <span className="text-sm font-medium tracking-[1px] uppercase text-brand-text/50">
            Apply for a Seat
          </span>
        </div>
      </nav>

      <div className="pt-[88px] pb-24 px-6">
        <div className="max-w-[620px] mx-auto">

          <div className="py-16 text-center">
            <div className="text-xs uppercase tracking-[2px] text-brand-primary font-semibold mb-6">
              One moment
            </div>
            <h1 className="text-3xl md:text-4xl font-normal mb-6 leading-[1.3]">
              There is a better room for you.
            </h1>
            <p className="text-base text-brand-text/70 leading-relaxed max-w-[480px] mx-auto">
              The Consultants &amp; Small Business Owners day is designed for individuals and small teams running their own businesses.
            </p>
          </div>

          <div className="border border-brand-border bg-white p-8 mb-6">
            <div className="text-xs uppercase tracking-[2px] text-brand-primary font-semibold mb-4">
              Based on your team size
            </div>
            <p className="text-base text-brand-text/80 leading-relaxed mb-4">
              With a team of 200+, your challenge is different — it is not just about you using AI, it is about how your entire organisation adopts it, builds confidence at scale, and stays ahead.
            </p>
            <p className="text-base text-brand-text/80 leading-relaxed">
              We run a separate <strong>AI Confidence Day for CXOs &amp; Board Members</strong>, built specifically for leaders of larger businesses who need to think about AI strategically, not just personally.
            </p>
          </div>

          <div className="border-2 border-brand-primary bg-white p-8 mb-6 text-center">
            <div className="text-xs uppercase tracking-[2px] text-brand-primary font-semibold mb-3">
              We think you belong here
            </div>
            <h2 className="text-2xl font-normal mb-2">AI Confidence Day</h2>
            <p className="text-brand-text/60 mb-1 text-sm uppercase tracking-[1px]">For CXOs &amp; Board Members</p>
            <p className="text-sm text-brand-text/60 mt-4 mb-6 leading-relaxed">
              Strategic AI adoption · Organisational playbooks · Board-level decision making · Enterprise implementation
            </p>
            <a
              href="/"
              className="block w-full bg-brand-primary text-white py-4 text-base font-medium tracking-[0.5px] hover:bg-brand-primary/90 transition-colors no-underline text-center"
            >
              See the CXO Event →
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-brand-text/50 mb-3">
              Still think the Consultants day is right for you?
            </p>
            <a
              href="/apply/consultants"
              className="text-sm text-brand-primary underline underline-offset-2 hover:opacity-75 transition-opacity"
            >
              Go back and continue your application
            </a>
          </div>

        </div>
      </div>

      <footer className="py-8 px-8 text-center border-t border-brand-border text-sm text-brand-text/50 uppercase tracking-wider">
        © 2026 Solved Together &amp; Collective Intelligence · contact@solvedtogether.co.uk
      </footer>
    </div>
  );
}
