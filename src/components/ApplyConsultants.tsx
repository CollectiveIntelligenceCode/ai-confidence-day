import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import PageMeta from "./PageMeta";

const TEAM_SIZE_OPTIONS = [
  "Just me",
  "2–5",
  "6–15",
  "16–50",
  "51–200",
  "200+",
];

interface FormData {
  email: string;
  fullName: string;
  businessName: string;
  country: string;
  phone: string;
  teamSize: string;
  jobRole: string;
  aiUseCurrently: string;
  agreedToTerms: boolean;
}

const EMPTY_FORM: FormData = {
  email: "",
  fullName: "",
  businessName: "",
  country: "GB",
  phone: "",
  teamSize: "",
  jobRole: "",
  aiUseCurrently: "",
  agreedToTerms: false,
};

const inputClass =
  "w-full border border-brand-border bg-white px-4 py-3 text-base text-brand-text placeholder-brand-text/30 focus:outline-none focus:border-brand-primary transition-colors";

const labelClass = "block text-sm font-medium text-brand-text/70 mb-1.5 uppercase tracking-[0.8px]";

export default function ApplyConsultants() {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const set = (field: keyof FormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  function validateStep1() {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address";
    if (!form.fullName.trim()) errs.fullName = "Full name is required";
    if (!form.jobRole.trim()) errs.jobRole = "Job role is required";
    if (!form.teamSize) errs.teamSize = "Please select your team size";
    return errs;
  }

  function validateStep2() {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.aiUseCurrently.trim()) errs.aiUseCurrently = "Please tell us how you're using AI today";
    return errs;
  }

  function validateStep3() {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.agreedToTerms) errs.agreedToTerms = "Please confirm to continue";
    return errs;
  }

  function handleNextStep(e: FormEvent) {
    e.preventDefault();
    if (step === 1) {
      const errs = validateStep1();
      if (Object.keys(errs).length) { setErrors(errs); return; }
      setErrors({});
      setStep(2);
    } else if (step === 2) {
      const errs = validateStep2();
      if (Object.keys(errs).length) { setErrors(errs); return; }
      setErrors({});
      setStep(3);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validateStep3();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setServerError("");

    try {
      // Test mode: use Stripe Payment Link directly (£0 test product)
      window.location.href = "https://buy.stripe.com/4gMcMXahM8AfaQ36X72ZO0a";
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="font-quicksand text-brand-text bg-brand-surface leading-relaxed min-h-screen">
      <PageMeta
        title="Apply for a Seat — AI Confidence Day for Consultants"
        description="Secure your place at AI Confidence Day for Consultants & Small Business Owners. 19th June 2026, London."
        url="https://ai-confidence-day.vercel.app/apply/consultants"
      />

      {/* RED TOP BAR */}
      <div className="h-[4px] bg-brand-primary fixed top-0 left-0 right-0 z-[100]" />

      {/* NAV */}
      <nav className="fixed top-[4px] left-0 right-0 z-[99] bg-brand-surface/95 backdrop-blur-md border-b border-brand-border py-3">
        <div className="max-w-[1100px] px-8 flex items-center justify-between mx-auto">
          <a
            href="/consultants"
            className="text-sm text-brand-text/60 hover:text-brand-text transition-colors no-underline flex items-center gap-2"
          >
            <span>←</span> Back
          </a>
          <span className="text-sm font-medium tracking-[1px] uppercase text-brand-text/50">
            Apply for a Seat
          </span>
        </div>
      </nav>

      {/* FORM */}
      <div className="pt-[88px] pb-24 px-6">
        <div className="max-w-[620px] mx-auto">

          {/* Header */}
          <div className="py-12 text-center">
            <div className="text-xs uppercase tracking-[2px] text-brand-primary font-semibold mb-3">
              19th June 2026 · London · 12 seats maximum
            </div>
            <h1 className="text-3xl md:text-4xl font-normal mb-2">
              {step === 1 ? "Tell us about yourself." : step === 2 ? "How are you using AI today?" : "One last thing."}
            </h1>
            <p className="text-base text-brand-text/60">
              {step === 1
                ? "We keep the room small and curated. This takes 60 seconds."
                : step === 2
                ? "There is no wrong answer. We want to know where you are starting from."
                : "Review your details and confirm to proceed to payment."}
            </p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-10">
            <div className={`flex-1 h-[2px] ${step >= 1 ? "bg-brand-primary" : "bg-brand-border"}`} />
            <div className={`flex-1 h-[2px] ${step >= 2 ? "bg-brand-primary" : "bg-brand-border"}`} />
            <span className="text-xs font-semibold text-brand-text/50 uppercase tracking-[1px] flex-shrink-0">
              Step {step} of 3
            </span>
            <div className={`flex-1 h-[2px] ${step >= 3 ? "bg-brand-primary" : "bg-brand-border"}`} />
          </div>

          {/* ── STEP 1: Contact Details ── */}
          {step === 1 && (
            <form onSubmit={handleNextStep} noValidate className="space-y-5">
              <div>
                <label className={labelClass}>Email address *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="you@yourbusiness.com"
                  className={inputClass}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>Full name *</label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => set("fullName", e.target.value)}
                  placeholder="Jane Smith"
                  className={inputClass}
                  autoComplete="name"
                />
                {errors.fullName && (
                  <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>Business name</label>
                <input
                  type="text"
                  value={form.businessName}
                  onChange={(e) => set("businessName", e.target.value)}
                  placeholder="Acme Consulting Ltd"
                  className={inputClass}
                  autoComplete="organization"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Country</label>
                  <select
                    value={form.country}
                    onChange={(e) => set("country", e.target.value)}
                    className={inputClass}
                  >
                    <option value="GB">United Kingdom (+44)</option>
                    <option value="IE">Ireland (+353)</option>
                    <option value="US">United States (+1)</option>
                    <option value="AU">Australia (+61)</option>
                    <option value="CA">Canada (+1)</option>
                    <option value="DE">Germany (+49)</option>
                    <option value="FR">France (+33)</option>
                    <option value="NL">Netherlands (+31)</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="+44 7700 900000"
                    className={inputClass}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Team size *</label>
                <select
                  value={form.teamSize}
                  onChange={(e) => set("teamSize", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select...</option>
                  {TEAM_SIZE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.teamSize && (
                  <p className="text-sm text-red-500 mt-1">{errors.teamSize}</p>
                )}
              </div>

              <div>
                <label className={labelClass}>Job role / title *</label>
                <input
                  type="text"
                  value={form.jobRole}
                  onChange={(e) => set("jobRole", e.target.value)}
                  placeholder="Founder, Consultant, Director..."
                  className={inputClass}
                />
                {errors.jobRole && (
                  <p className="text-sm text-red-500 mt-1">{errors.jobRole}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-brand-primary text-white py-4 text-base font-medium tracking-[0.5px] hover:bg-brand-primary/90 transition-colors mt-4"
              >
                Continue →
              </button>
            </form>
          )}

          {/* ── STEP 2: AI Usage ── */}
          {step === 2 && (
            <form onSubmit={handleNextStep} noValidate className="space-y-5">
              <div>
                <label className={labelClass}>What do you use AI for right now, in your day-to-day? *</label>
                <textarea
                  value={form.aiUseCurrently}
                  onChange={(e) => set("aiUseCurrently", e.target.value)}
                  placeholder="e.g. I use ChatGPT for emails and summarising documents, but I haven't gone much further than that..."
                  rows={6}
                  className={`${inputClass} resize-none`}
                />
                {errors.aiUseCurrently && (
                  <p className="text-sm text-red-500 mt-1">{errors.aiUseCurrently}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-brand-primary text-white py-4 text-base font-medium tracking-[0.5px] hover:bg-brand-primary/90 transition-colors mt-4"
              >
                Continue →
              </button>
              <button
                type="button"
                onClick={() => { setStep(1); setErrors({}); window.scrollTo({ top: 0 }); }}
                className="w-full text-sm text-brand-text/50 hover:text-brand-text transition-colors py-2"
              >
                ← Back
              </button>
            </form>
          )}

          {/* ── STEP 3: Confirmation ── */}
          {step === 3 && (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">

              {/* Summary card */}
              <div className="border border-brand-border bg-white p-6 space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[1px] text-brand-text/50 mb-4">
                  Your details
                </h3>
                {[
                  ["Name", form.fullName],
                  ["Email", form.email],
                  form.businessName && ["Business", form.businessName],
                  ["Country", form.country],
                  form.phone && ["Phone", form.phone],
                  ["Team size", form.teamSize],
                  ["Role", form.jobRole],
                ]
                  .filter(Boolean)
                  .map(([label, value]) => (
                    <div key={label as string} className="flex justify-between text-sm gap-4">
                      <span className="text-brand-text/50 uppercase tracking-[0.5px] flex-shrink-0">
                        {label}
                      </span>
                      <span className="text-brand-text text-right">{value as string}</span>
                    </div>
                  ))}
                <div className="pt-3 border-t border-brand-border mt-1">
                  <p className="text-xs text-brand-text/50 uppercase tracking-[0.5px] mb-1">AI use today</p>
                  <p className="text-sm text-brand-text leading-relaxed">{form.aiUseCurrently}</p>
                </div>
                <div className="flex gap-4 mt-2">
                  <button
                    type="button"
                    onClick={() => { setStep(1); setErrors({}); window.scrollTo({ top: 0 }); }}
                    className="text-xs text-brand-primary underline hover:opacity-75"
                  >
                    Edit contact details
                  </button>
                  <button
                    type="button"
                    onClick={() => { setStep(2); setErrors({}); window.scrollTo({ top: 0 }); }}
                    className="text-xs text-brand-primary underline hover:opacity-75"
                  >
                    Edit answer
                  </button>
                </div>
              </div>

              {/* Pricing summary */}
              <div className="border border-brand-primary bg-white p-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium uppercase tracking-[1px]">Early Bird</span>
                  <span className="text-2xl font-normal">£899</span>
                </div>
                <p className="text-xs text-brand-text/50">+ VAT · AI Confidence Day for Consultants · 19th June 2026</p>
              </div>

              {/* Agreement */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={form.agreedToTerms}
                    onChange={(e) => set("agreedToTerms", e.target.checked)}
                    className="mt-1 w-4 h-4 accent-brand-primary flex-shrink-0"
                  />
                  <span className="text-sm text-brand-text/80 leading-relaxed">
                    I confirm my details are correct and I am ready to proceed to payment. I understand that my seat is reserved on receipt of payment and that the{" "}
                    <a
                      href="/consultants#apply"
                      className="text-brand-primary underline underline-offset-2 hover:opacity-75"
                    >
                      100% money-back guarantee
                    </a>{" "}
                    applies if I leave before the lunch break.
                  </span>
                </label>
                {errors.agreedToTerms && (
                  <p className="text-sm text-red-500 mt-2 ml-7">{errors.agreedToTerms}</p>
                )}
              </div>

              {serverError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                  {serverError}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-brand-primary text-white py-4 text-base font-medium tracking-[0.5px] hover:bg-brand-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Redirecting to payment…" : "Proceed to Payment →"}
              </button>

              <p className="text-xs text-brand-text/40 text-center">
                Secure checkout powered by Stripe. You will not be charged until the next step.
              </p>
            </form>
          )}

        </div>
      </div>

      <footer className="py-8 px-8 text-center border-t border-brand-border text-sm text-brand-text/50 uppercase tracking-wider">
        © 2026 Solved Together & Collective Intelligence · aiconfidence@collectiveintelligence.co
      </footer>
    </div>
  );
}
