import { Container, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  title = "Let's talk about your next website.",
  description = "Tell us about your business and what you're trying to achieve. We'll take it from there — no upfront payment required to start the conversation.",
  primaryLabel = "Get a Free Consultation",
  primaryTo = "/contact",
  secondaryLabel = "View Our Work",
  secondaryTo = "/work",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-[#babecc] bg-[#f0f2f5] py-20 lg:py-28">
      <div className="absolute -left-8 top-8 h-28 w-28 rounded-full border border-[#babecc] bg-[#ff4757] shadow-[8px_8px_16px_rgba(166,50,60,0.25)]" />
      <div className="absolute bottom-8 right-8 h-16 w-16 rotate-12 rounded-[30%] border border-[#babecc] bg-[#d1d9e6] shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]" />
      <Container>
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold text-[#2d3436] sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-[15px] leading-relaxed text-[#4a5568]">{description}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button to={primaryTo} variant="primary" size="lg">
              {primaryLabel}
            </Button>
            <Button to={secondaryTo} variant="secondary" size="lg">
              {secondaryLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
