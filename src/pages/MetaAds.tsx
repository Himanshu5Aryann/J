import { Camera, Share2, Palette, Users, LayoutTemplate, Repeat, Target, BarChart3 } from "lucide-react";
import { Container, SectionTitle, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

const points = [
  { icon: <Share2 className="h-5 w-5" />, title: "Facebook Advertising", description: "Campaigns built for awareness, consideration and direct response on Facebook." },
  { icon: <Camera className="h-5 w-5" />, title: "Instagram Advertising", description: "Visual-first campaigns designed for how people actually browse Instagram." },
  { icon: <Palette className="h-5 w-5" />, title: "Creative Strategy", description: "Creative direction built around your brand and what actually earns attention." },
  { icon: <Users className="h-5 w-5" />, title: "Audience Targeting", description: "Precise targeting based on who your business actually serves." },
  { icon: <LayoutTemplate className="h-5 w-5" />, title: "Campaign Structure", description: "Structured campaigns that make performance easy to read and optimize." },
  { icon: <Repeat className="h-5 w-5" />, title: "Retargeting", description: "Reconnecting with people who've already shown interest in your business." },
  { icon: <Target className="h-5 w-5" />, title: "Conversion Tracking", description: "Reliable tracking connected to real business outcomes." },
  { icon: <BarChart3 className="h-5 w-5" />, title: "Performance Optimization", description: "Ongoing optimization of creative, audience and budget allocation." },
];

export default function MetaAds() {
  return (
    <>
      <PageHero
        eyebrow="Paid Acquisition · Meta Ads"
        title="Reach the right audience across Facebook and Instagram."
        description="Meta advertising built on creative strategy, precise audience targeting and landing pages that stay aligned with what your ads actually promise."
        actions={<Button to="/contact">Discuss Your Campaign</Button>}
      />

      <section className="py-24 lg:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <SectionTitle eyebrow="How We Approach It" title="Creative and targeting working as one system." />
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
