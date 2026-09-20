import { Container, SectionTitle, Tag } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { INDUSTRIES, ADDITIONAL_INDUSTRIES } from "@/lib/site-data";

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Versatility across the industries businesses actually operate in."
        description="From manufacturers and developers to hoteliers, educators and interior designers — we build websites that understand the language of your industry."
      />

      <section className="py-24 lg:py-28">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 3) * 70} className="group overflow-hidden rounded-2xl border border-ink-950/10 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={ind.image}
                    alt={`${ind.name} industry representative photograph`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-ink-950">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{ind.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-950/8 bg-white py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionTitle eyebrow="Also Serving" title="And a wide range of additional sectors." align="center" />
          </Reveal>
          <Reveal delay={80} className="mt-10 flex flex-wrap justify-center gap-3">
            {ADDITIONAL_INDUSTRIES.map((name) => (
              <Tag key={name}>{name}</Tag>
            ))}
          </Reveal>
        </Container>
      </section>

      <CTASection title="Don't see your industry?" description="We build for businesses across nearly every sector. Tell us about yours." />
    </>
  );
}
