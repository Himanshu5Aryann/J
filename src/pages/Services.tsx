import { ArrowUpRight, Layers, LineChart, Gauge, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Container, SectionTitle } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/primitives";

const websiteTypes = [
  "Business Websites",
  "Corporate Websites",
  "E-commerce Websites",
  "Manufacturing Websites",
  "Real-Estate Websites",
  "Landing Pages",
  "Custom Web Applications",
  "Website Redesigns",
  "CMS Websites",
  "High-Performance Websites",
];

const otherServices = [
  {
    index: "02",
    label: "Technology Capability",
    title: "App Development",
    description: "Business, customer and internal applications — mobile and web, built on modern architecture.",
    to: "/services/app-development",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    index: "03",
    label: "Organic Growth",
    title: "SEO",
    description: "Technical, on-page and local SEO to increase qualified organic visibility.",
    to: "/services/seo",
    icon: <LineChart className="h-5 w-5" />,
  },
  {
    index: "04",
    label: "Paid Acquisition",
    title: "Google Ads",
    description: "Search campaigns structured around intent, conversion tracking and optimization.",
    to: "/services/google-ads",
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    index: "04",
    label: "Paid Acquisition",
    title: "Meta Ads",
    description: "Facebook and Instagram advertising aligned to your funnel and landing pages.",
    to: "/services/meta-ads",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Websites → Applications → Growth."
        description="A focused set of services built around one flagship capability: websites engineered to establish credibility and generate opportunities. Everything else is built to support it."
        actions={
          <>
            <Button to="/services/website-development">Explore Website Development</Button>
            <Button to="/contact" variant="secondary" icon={false}>
              Start a Project
            </Button>
          </>
        }
      />

      {/* Flagship service */}
      <section className="py-24 lg:py-28">
        <Container>
          <div className="overflow-hidden rounded-[28px] border border-[#babecc] bg-[#2d3436] p-10 text-white shadow-[12px_12px_24px_rgba(45,52,54,0.25),-12px_-12px_24px_#ffffff] lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <Reveal>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ffb2b7]">01 — Flagship Service</span>
                <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Website Development</h2>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#e0e5ec]">
                  Website development is the foundation of everything we build — the single service that receives the
                  most emphasis, investment and attention to detail in our process.
                </p>
                <Link
                  to="/services/website-development"
                  className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-[#babecc] bg-[#ff4757] px-6 py-3 text-sm font-semibold text-white shadow-[6px_6px_12px_rgba(166,50,60,0.32),-6px_-6px_12px_rgba(255,100,110,0.28)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-[2px]"
                >
                  Explore Website Development <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
              <Reveal delay={100}>
                <div className="grid grid-cols-2 gap-3">
                  {websiteTypes.map((w) => (
                    <div key={w} className="rounded-xl border border-[#babecc] bg-[#3a444d] px-4 py-3 text-sm text-[#e0e5ec] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.18),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]">
                      {w}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Other services */}
      <section className="border-t border-[#babecc] bg-[#edf1f5] py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              eyebrow="Supporting Capabilities"
              title="Technology and growth services built around your website."
              description="Each service exists to strengthen the same objective: a stronger digital presence and more business opportunities."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {otherServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <Link
                  to={s.to}
                  className="group flex h-full flex-col justify-between rounded-[28px] border border-[#babecc] bg-[#f0f2f5] p-8 shadow-[10px_10px_18px_#babecc,-10px_-10px_18px_#ffffff] transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#babecc] bg-[#f0f2f5] text-[#2d3436] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff]">{s.icon}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#4a5568]">{s.index}</span>
                  </div>
                  <div className="mt-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#ff4757]">{s.label}</p>
                    <h3 className="mt-1.5 font-display text-xl font-semibold text-[#2d3436]">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">{s.description}</p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2d3436] transition-colors group-hover:text-[#ff4757]">
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
