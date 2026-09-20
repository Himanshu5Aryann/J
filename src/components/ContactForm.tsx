import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/utils/cn";

const NEEDS = [
  "New Website",
  "Website Redesign",
  "E-commerce",
  "SEO",
  "Google Ads",
  "Meta Ads",
  "App Development",
  "Other",
];

const BUDGETS = ["Under ₹10,000", "₹10,000–₹25,000", "₹25,000–₹50,000", "₹50,000–₹1L", "₹1L+"];

export function ContactForm() {
  const [needs, setNeeds] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function toggleNeed(n: string) {
    setNeeds((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim();

    if (!name || !phone) {
      setError("Please share your name and phone number so we can reach you.");
      return;
    }
    if (needs.length === 0) {
      setError("Please select at least one option under 'What do you need?'");
      return;
    }
    setError("");
    // Form is presentation-ready for a backend/CRM integration.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[28px] border border-[#babecc] bg-[#f0f2f5] p-14 text-center shadow-[12px_12px_24px_#babecc,-12px_-12px_24px_#ffffff]">
        <CheckCircle2 className="h-12 w-12 text-[#34d399]" strokeWidth={1.5} />
        <h3 className="mt-5 font-display text-2xl font-bold text-[#2d3436]">Thank you — we've received it.</h3>
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[#4a5568]">
          A member of our team will get back to you shortly to discuss your project. No payment is required to start
          this conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-9 rounded-[28px] border border-[#babecc] bg-[#f0f2f5] p-8 shadow-[12px_12px_24px_#babecc,-12px_-12px_24px_#ffffff] lg:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your Name" name="name" placeholder="Full name" required />
        <Field label="Phone Number" name="phone" type="tel" placeholder="10-digit mobile number" required />
      </div>
      <Field label="Business Name (optional)" name="business" placeholder="Your company or brand name" />

      <fieldset>
        <legend className="text-sm font-semibold text-ink-950">What do you need?</legend>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {NEEDS.map((n) => (
            <label
              key={n}
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-[13px] font-medium transition-all duration-200",
                needs.includes(n)
                  ? "border-[#babecc] bg-[#ff4757] text-white shadow-[4px_4px_10px_rgba(166,50,60,0.32),-4px_-4px_10px_rgba(255,255,255,0.5)]"
                  : "border-[#babecc] bg-[#edf1f5] text-[#4a5568] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] hover:text-[#2d3436]"
              )}
            >
              <input type="checkbox" className="sr-only" checked={needs.includes(n)} onChange={() => toggleNeed(n)} />
              {n}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-ink-950">Approximate Budget</legend>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {BUDGETS.map((b) => (
            <label
              key={b}
              className={cn(
                "flex cursor-pointer items-center justify-center rounded-xl border px-3 py-2.5 text-center text-[12.5px] font-medium transition-all duration-200",
                budget === b
                  ? "border-[#babecc] bg-[#2d3436] text-white shadow-[4px_4px_10px_rgba(45,52,54,0.25)]"
                  : "border-[#babecc] bg-[#edf1f5] text-[#4a5568] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] hover:text-[#2d3436]"
              )}
            >
              <input type="radio" name="budget" className="sr-only" checked={budget === b} onChange={() => setBudget(b)} />
              {b}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="project" className="text-sm font-semibold text-[#2d3436]">
          Tell us about your project
        </label>
        <textarea
          id="project"
          name="project"
          rows={5}
          placeholder="What are you building, improving, or trying to solve?"
          className="mt-3 w-full resize-none rounded-xl border border-[#babecc] bg-[#edf1f5] px-4 py-3 text-sm text-[#2d3436] outline-none transition-colors placeholder:text-[#68768a] shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] focus:border-[#ff4757]"
        />
      </div>

      {error && <p className="text-sm font-medium text-rose-600">{error}</p>}

      <button
        type="submit"
        className="group inline-flex items-center gap-2 rounded-full border border-[#babecc] bg-[#ff4757] px-7 py-3.5 text-sm font-semibold text-white shadow-[6px_6px_12px_rgba(166,50,60,0.32),-6px_-6px_12px_rgba(255,100,110,0.28)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.12),inset_-6px_-6px_12px_rgba(255,255,255,0.08)]"
      >
        Get a Free Consultation
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
      </button>
      <p className="text-xs text-[#4a5568]">We do not require any payment in advance to start this conversation.</p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-[#2d3436]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full rounded-xl border border-[#babecc] bg-[#edf1f5] px-4 py-3 text-sm text-[#2d3436] outline-none transition-colors placeholder:text-[#68768a] shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] focus:border-[#ff4757]"
      />
    </div>
  );
}
