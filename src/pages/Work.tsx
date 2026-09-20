import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { PortfolioCard } from "@/components/PortfolioCard";
import { PROJECTS } from "@/lib/site-data";

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="A portfolio built on real, live websites."
        description="Every project below is a real website we've built, currently live for the business it serves. Click through to visit any of them directly."
      />

      <section className="py-24 lg:py-28">
        <Container>
          <div className="grid gap-x-8 gap-y-16 lg:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80}>
                <PortfolioCard project={p} featured />
              </Reveal>
            ))}
          </div>
          <p className="mt-14 max-w-2xl text-sm leading-relaxed text-ink-600/80">
            Selected work presented with appropriate client permission and/or publicly available reference. Each
            project links directly to the live, independently operated website.
          </p>
        </Container>
      </section>

      <CTASection title="Want your business featured here next?" />
    </>
  );
}
