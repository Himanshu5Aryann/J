import { Sparkles } from "lucide-react";
import { Container, Tag } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

const categories = ["Web Development", "SEO", "Business Technology", "Digital Growth", "Industry Insights"];

export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspective on websites, technology and business growth."
        description="A space for practical thinking on how businesses build credibility and generate opportunities online. Articles are on the way."
      />

      <section className="py-24 lg:py-28">
        <Container>
          <Reveal className="flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <Tag key={c}>{c}</Tag>
            ))}
          </Reveal>

          <Reveal delay={100} className="mx-auto mt-14 max-w-xl rounded-2xl border border-dashed border-ink-950/15 bg-white p-12 text-center">
            <Sparkles className="mx-auto h-8 w-8 text-indigo-650" strokeWidth={1.5} />
            <h2 className="mt-5 font-display text-2xl font-bold text-ink-950">Insights, coming soon.</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
              We're preparing considered, practical articles on web development, SEO and business technology. In the
              meantime, get in touch directly — we're happy to talk through your specific questions.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection title="Have a question we haven't answered yet?" />
    </>
  );
}
