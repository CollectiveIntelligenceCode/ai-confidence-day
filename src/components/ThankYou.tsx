import { useState } from "react";
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

const SHARE_TEXT = "I'm going to the AI Confidence Day to adopt new AI skills and level-up my business 🚀";
const SHARE_URL = "https://ai-confidence-day.vercel.app";

export default function ThankYou({ variant }: { variant: "cxo" | "consultants" }) {
  const c = config[variant];
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ text: SHARE_TEXT, url: SHARE_URL });
        return;
      } catch {
        // user cancelled — do nothing
        return;
      }
    }
    // Fallback: copy to clipboard
    await navigator.clipboard.writeText(`${SHARE_TEXT} ${SHARE_URL}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

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
              href="mailto:contact@solvedtogether.co.uk"
              className="text-brand-primary underline underline-offset-2 hover:opacity-75 transition-opacity"
            >
              contact@solvedtogether.co.uk
            </a>
          </p>
          {/* LINKEDIN CTAs */}
          <div className="mb-10">
            <p className="text-sm font-medium tracking-[1px] uppercase text-brand-text/40 mb-4">
              Connect with your hosts
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/chrisbradshawai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90 w-full sm:w-auto justify-center"
                style={{ backgroundColor: "#0A66C2" }}
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Chris Bradshaw
              </a>
              <a
                href="https://www.linkedin.com/in/rujutasingh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90 w-full sm:w-auto justify-center"
                style={{ backgroundColor: "#0A66C2" }}
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Rujuta Singh
              </a>
            </div>
          </div>

          {/* SHARE */}
          <div className="border-t border-brand-border pt-8">
            <p className="text-sm font-medium tracking-[1px] uppercase text-brand-text/40 mb-2">
              Know someone who'd benefit?
            </p>
            <p className="text-sm text-brand-text/50 mb-5 leading-relaxed">
              "{SHARE_TEXT}"
            </p>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md text-sm font-semibold bg-brand-primary text-white hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              {copied ? "Copied to clipboard!" : "Share with friends"}
            </button>
          </div>
        </div>
      </section>

      <footer className="py-10 px-8 text-center border-t border-brand-border text-sm text-brand-text/50 uppercase tracking-wider">
        © 2026 Solved Together & Collective Intelligence · contact@solvedtogether.co.uk
      </footer>
    </div>
  );
}
