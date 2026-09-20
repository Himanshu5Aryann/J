import { Phone, MessageCircle } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { COMPANY, telHref, whatsappHref } from "@/lib/site-data";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-surface-50 pt-[150px] pb-24 lg:pt-[176px] lg:pb-32">
      <div className="grid-pattern pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <Container className="relative grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-ink-950 sm:text-5xl">Start Your Project</h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-600">
              Tell us what you're building, improving, or trying to solve. A short form helps us understand your
              project before we talk — no upfront payment required.
            </p>
          </Reveal>

          <Reveal delay={200} className="mt-10 space-y-4">
            <a
              href={telHref}
              className="group flex items-center gap-4 rounded-2xl border border-ink-950/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-950/25"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-950 text-white">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-600">Call Us</p>
                <p className="font-display text-lg font-semibold text-ink-950">{COMPANY.phoneDisplay}</p>
              </div>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-ink-950/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-950/25"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-600">WhatsApp</p>
                <p className="font-display text-lg font-semibold text-ink-950">Chat with us directly</p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={260} className="mt-10 rounded-2xl border border-ink-950/10 bg-ink-950 p-6 text-white">
            <h3 className="font-display text-base font-semibold">No Upfront Payment</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              Start your project conversation without an upfront payment. Commercial terms are discussed clearly and
              transparently before any work begins.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
