import { Search, MapPin, FileText, LineChart, Link2, Gauge, ClipboardList, BarChart3 } from "lucide-react";
import { Container, SectionTitle, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

const services = [
  { icon: <Gauge className="h-5 w-5" />, title: "Technical SEO", description: "Site speed, crawlability and structure fixed at the foundation." },
  { icon: <FileText className="h-5 w-5" />, title: "On-Page SEO", description: "Content, metadata and page structure optimized around search intent." },
  { icon: <MapPin className="h-5 w-5" />, title: "Local SEO", description: "Visibility for businesses that depend on local customers finding them." },
  { icon: <Search className="h-5 w-5" />, title: "Keyword Research", description: "Identifying the terms your actual customers are searching for." },
  { icon: <ClipboardList className="h-5 w-5" />, title: "Content Strategy", description: "A content plan built around topics that drive qualified traffic." },
  { icon: <MapPin className="h-5 w-5" />, title: "Google Business Profile Optimization", description: "A strong, accurate presence in local search and maps results." },
  { icon: <Link2 className="h-5 w-5" />, title: "Link Building", description: "Earning credible references that support long-term authority." },
  { icon: <BarChart3 className="h-5 w-5" />, title: "SEO Reporting", description: "Clear, honest reporting on visibility and organic performance." },
];

export default function SEO() {
  return (
    <>
      <PageHero
        eyebrow="Organic Growth · SEO"
        title="Get Found by the People Looking for Your Business."
        description="Search-engine optimization designed to increase qualified organic visibility and inbound traffic — built on technical fundamentals, not shortcuts."
        actions={<Button to="/contact">Discuss Your SEO</Button>}
      />

      <section className="py-24 lg:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <SectionTitle
              eyebrow="Our Approach"
              title="Structured, measurable organic growth."
              description="SEO is a long-term discipline. We focus on the fundamentals that compound — sound technical structure, relevant content and consistent reporting — rather than promising rankings we can't guarantee."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 60} className="rounded-[24px] border border-[#babecc] bg-[#f0f2f5] p-6 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#babecc] bg-[#edf1f5] text-[#2d3436] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff]">{s.icon}</span>
                <h3 className="mt-4 font-display text-base font-semibold text-[#2d3436]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">{s.description}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-12 rounded-[24px] border border-[#babecc] bg-[#edf1f5] p-7 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]">
            <p className="flex items-start gap-3 text-sm leading-relaxed text-[#4a5568]">
              <LineChart className="mt-0.5 h-5 w-5 shrink-0 text-[#ff4757]" />
              We report on organic performance transparently and do not make unrealistic ranking guarantees. Search
              engine results depend on many factors outside any agency's direct control.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection title="Ready to improve your organic visibility?" primaryLabel="Discuss Your SEO" />
    </>
  );
}
