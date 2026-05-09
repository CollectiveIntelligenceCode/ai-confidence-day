import PageMeta from "./PageMeta";

const config = {
  cxo: {
    title: "AI Confidence Day for CXOs & Board Members | Confirmed",
    description: "Your seat is confirmed for AI Confidence Day — 3rd July 2026, London.",
    url: "https://ai-confidence-day.vercel.app/thank-you/cxo",
    event: "AI Confidence Day for CXOs & Board Members",
    date: "3rd July 2026 · London",
  },
  consultants: {
    title: "AI Confidence Day for Consultants & Small Business Owners | Confirmed",
    description: "Your seat is confirmed for AI Confidence Day — 19th June 2026, London.",
    url: "https://ai-confidence-day.vercel.app/thank-you/consultants",
    event: "AI Confidence Day for Consultants & Small Business Owners",
    date: "19th June 2026 · London",
  },
};

export default function ThankYou({ variant }: { variant: "cxo" | "consultants" }) {
  const c = config[variant];

  return (
    <div className="font-quicksand text-brand-text bg-brand-surface leading-relaxed text-lg font-light min-h-screen">
      <PageMeta title={c.title} description={c.description} url={c.url} />

      {/* RED TOP BAR */}
      <div className="h-[4px] bg-brand-primary fixed top-0 left-0 right-0 z-[100]" />

      {/* CONFIRMATION */}
      <section className="min-h-screen flex items-center justify-center px-8 py-24">
        <div className="max-w-[600px] w-full text-center">
          <div className="text-6xl text-brand-primary mb-8 font-normal">✓</div>
          <h1 className="text-4xl md:text-5xl font-normal mb-4">Your seat is confirmed.</h1>
          <div className="text-sm font-medium tracking-[2px] uppercase text-brand-primary mb-8">
            {c.event}
          </div>
          <div className="text-base text-brand-text/50 tracking-[1px] mb-10">
            {c.date}
          </div>
          <p className="text-lg text-brand-text/80 leading-[1.75] mb-4">
            We'll be in touch by email with everything you need ahead of the day.
          </p>
          <p className="text-base text-brand-text/60 leading-[1.75] mb-8">
            If you have any questions in the meantime, reach us at{" "}
            <a
              href="mailto:aiconfidence@collectiveintelligence.co"
              className="text-brand-primary underline underline-offset-2 hover:opacity-75 transition-opacity"
            >
              aiconfidence@collectiveintelligence.co
            </a>
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-brand-text/50">
            <a
              href="https://www.linkedin.com/in/chrisbradshawai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-primary transition-colors"
            >
              Chris Bradshaw on LinkedIn
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/rujutasingh/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-primary transition-colors"
            >
              Rujuta Singh on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 px-8 text-center border-t border-brand-border text-sm text-brand-text/50 uppercase tracking-wider">
        © 2026 Solved Together & Collective Intelligence · aiconfidence@collectiveintelligence.co
      </footer>
    </div>
  );
}
