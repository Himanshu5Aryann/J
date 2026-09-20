import { Target, LayoutTemplate, ListChecks, XCircle, SlidersHorizontal, BarChart3, Search } from "lucide-react";
import { Container, SectionTitle, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

const points = [
  { icon: <Search className="h-5 w-5" />, title: "Search Intent", description: "Campaigns built around what people are actually searching to find." },
  { icon: <LayoutTemplate className="h-5 w-5" />, title: "Campaign Structure", description: "Clean account structure that keeps spend accountable and easy to optimize." },
  { icon: <Target className="h-5 w-5" />, title: "Conversion Tracking", description: "Accurate tracking so every result can be measured and understood." },
  { icon: <LayoutTemplate className="h-5 w-5" />, title: "Landing Pages", description: "Landing pages aligned to ad intent, built to convert traffic into enquiries." },
  { icon: <ListChecks className="h-5 w-5" />, title: "Keyword Strategy", description: "Keyword selection based on relevance, intent and commercial value." },
  { icon: <XCircle className="h-5 w-5" />, title: "Negative Keywords", description: "Ongoing exclusion of irrelevant search terms to protect your budget." },
  { icon: <SlidersHorizontal className="h-5 w-5" />, title: "Optimization", description: "Continuous refinement based on real performance data." },
  { icon: <BarChart3 className="h-5 w-5" />, title: "Reporting", description: "Transparent reporting tied directly to business outcomes." },
];

export default function GoogleAds() {
  return (
    <>
      <PageHero
        eyebrow="Paid Acquisition · Google Ads"
        title="Reach people at the exact moment they're searching."
        description="Search advertising is precise by nature — professionally structured Google Ads campaigns put your business in front of people actively looking for what you offer."
        actions={<Button to="/contact">Discuss Your Campaign</Button>}
      />

      <section className="py-24 lg:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <SectionTitle eyebrow="How We Approach It" title="Built on structure, not guesswork." />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 60} className="rounded-2xl border border-ink-950/10 bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-100 text-ink-950">{p.icon}</span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Ready to discuss a campaign?" primaryLabel="Discuss Your Campaign" />
    </>
  );
}
