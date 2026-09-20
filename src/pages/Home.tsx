import { ArrowUpRight, ShieldCheck, Gauge, LineChart, Layers } from "lucide-react";
import { Container, Eyebrow, Button, SectionTitle, Stat } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { PortfolioCard } from "@/components/PortfolioCard";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import {
  STATS,
  PROJECTS,
  INDUSTRIES,
  WHY_JBN,
  PROCESS_STEPS,
  TECHNOLOGIES,
} from "@/lib/site-data";
import { Link } from "react-router-dom";

export default function Home() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <>
      {/* 01 — HERO */}
      <section className="relative overflow-hidden bg-[#e0e5ec] pt-[140px] pb-24 lg:pt-[168px] lg:pb-32">
        <div className="absolute left-8 top-24 h-28 w-28 rounded-full border border-[#babecc] bg-[#ff4757] shadow-[8px_8px_16px_rgba(166,50,60,0.25)]" />
        <div className="absolute right-12 top-20 h-20 w-20 rotate-12 rounded-[32%] border border-[#babecc] bg-[#d1d9e6] shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]" />
        <div className="absolute left-1/2 top-40 h-80 w-80 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />

        <Container className="relative z-10 grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative z-10">
            <Reveal>
              <Eyebrow>JBN Tech Services · Digital Systems &amp; Growth</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <div className="mt-6 inline-block max-w-[620px] rounded-[30px] border border-[#babecc] bg-[#f0f2f5] p-[18px_24px] shadow-[12px_12px_24px_#babecc,-12px_-12px_24px_#ffffff]">
                <h1 className="text-balance font-display text-[40px] font-extrabold leading-[0.9] tracking-[-0.06em] text-[#2d3436] sm:text-5xl lg:text-[64px]">
                  Build the
                  <span className="block text-[#ff4757]">machine behind growth.</span>
                </h1>
              </div>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-7 max-w-xl text-balance text-base leading-relaxed text-[#4a5568] lg:text-lg">
                JBN Tech Services creates digital products and websites that feel well-engineered, user-friendly, and ready
                to perform in the real world — from clear positioning to lead generation and long-term growth.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button to="/contact" size="lg">
                  Get a Free Consultation
                </Button>
                <Button to="/work" variant="secondary" size="lg" icon={false}>
                  View Our Work
                </Button>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.14em] text-[#4a5568] hover:text-[#ff4757]"
              >
                Start a Project <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative">
              <div className="absolute -left-8 top-10 h-20 w-20 rounded-full border border-[#babecc] bg-[#d1d9e6] shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]" />
              <div className="absolute -right-6 bottom-6 h-24 w-24 rounded-[30%] border border-[#babecc] bg-[#ff4757] shadow-[8px_8px_16px_rgba(166,50,60,0.25)]" />
              <BrowserMockup domain="yourbusiness.com" accent="indigo" className="relative z-20" />
              <BrowserMockup
                domain="yourbusiness.in/app"
                accent="slate"
                className="absolute -right-6 -bottom-10 z-10 hidden w-[72%] rotate-2 opacity-95 sm:block lg:-right-10"
              />
            </div>
          </Reveal>
        </Container>

        <Container className="relative mt-20 lg:mt-28">
          <Reveal>
            <div className="grid grid-cols-2 gap-4 border-t border-b border-[#babecc] py-6 sm:grid-cols-4">
              {STATS.map((s, i) => (
                <div key={s.label} className={i > 0 ? "sm:border-l sm:border-[#babecc] sm:pl-4" : ""}>
                  <Stat value={s.value} label={s.label} />
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-ink-950/8 bg-white py-10">
        <Container>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-600">
            Selected work across hospitality, real estate, education, agriculture &amp; corporate businesses
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {PROJECTS.map((p) => (
              <span key={p.slug} className="font-display text-lg font-semibold text-ink-950/30 transition-colors hover:text-ink-950/60">
                {p.name}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* 04 — WHAT WE DO */}
      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionTitle
              eyebrow="What We Do"
              title="Websites first. Applications, SEO and growth built around them."
              description="Website development is our flagship capability — the foundation every other service is built to support."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <Link
                to="/services/website-development"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-ink-950/10 bg-ink-950 p-9 text-white transition-all duration-500 hover:-translate-y-1"
              >
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">01 — Flagship Service</span>
                  <h3 className="mt-4 font-display text-3xl font-bold">Website Development</h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/60">
                    Business, corporate, e-commerce, manufacturing, real-estate and custom websites engineered to
                    build credibility and generate enquiries.
                  </p>
                </div>
                <span className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-indigo-300">
                  Explore Website Development
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>

            <div className="grid gap-6">
              <ServiceMini
                index="02"
                label="Technology Capability"
                title="App Development"
                description="Business, customer and internal applications built on modern architecture."
                to="/services/app-development"
                icon={<Layers className="h-5 w-5" />}
              />
              <ServiceMini
                index="03"
                label="Organic Growth"
                title="SEO"
                description="Structured technical and on-page SEO to increase qualified visibility."
                to="/services/seo"
                icon={<LineChart className="h-5 w-5" />}
              />
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <ServiceMini
              index="04"
              label="Paid Acquisition"
              title="Google Ads"
              description="Search campaigns built on intent, structure and conversion tracking."
              to="/services/google-ads"
              icon={<Gauge className="h-5 w-5" />}
            />
            <ServiceMini
              index="04"
              label="Paid Acquisition"
              title="Meta Ads"
              description="Facebook and Instagram campaigns aligned to your funnel and landing pages."
              to="/services/meta-ads"
              icon={<ShieldCheck className="h-5 w-5" />}
            />
          </div>
        </Container>
      </section>

      {/* 05 — FEATURED WORK */}
      <section className="border-y border-ink-950/8 bg-white py-24 lg:py-32">
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              eyebrow="Selected Work"
              title="Recent projects, delivered end-to-end."
              description="A sample of businesses we've built digital experiences for — real, live websites."
            />
            <Link to="/work" className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-ink-950 hover:text-indigo-650 sm:inline-flex">
              View all work <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-x-8 gap-y-14 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <PortfolioCard project={p} />
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-xs text-ink-600/70">
            Selected work presented with appropriate client permission and/or publicly available reference.
          </p>
        </Container>
      </section>

      {/* 06 — INDUSTRIES */}
      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionTitle
              eyebrow="Industries"
              title="Built for the way real industries operate."
              description="Versatility across sectors — from manufacturers and developers to hoteliers and educators."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 60} className="group relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <img
                    src={ind.image}
                    alt={`${ind.name} industry`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg font-semibold text-white">{ind.name}</h3>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <Link to="/industries" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 hover:text-indigo-650">
              See all industries we work with <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* 07 — WHY JBN */}
      <section className="border-y border-ink-950/8 bg-white py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionTitle eyebrow="Why JBN" title="Principles that shape every project we deliver." align="center" />
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {WHY_JBN.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <span className="font-display text-3xl font-bold text-ink-950/15">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 08 — CASE STUDY */}
      <section className="py-24 lg:py-32">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <BrowserMockup domain="thakralrealestate.com" accent="rose" />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Case Study</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Building credibility for a real-estate business, online.
            </h2>
            <div className="mt-8 space-y-6">
              <CaseRow label="Challenge" text="A real-estate business needed a website that reflected the scale and credibility of its property portfolio to serious buyers." />
              <CaseRow label="Approach" text="We structured the site around clear property presentation, straightforward navigation and a direct path to enquiry." />
              <CaseRow label="Solution" text="A responsive, fast-loading website with dedicated property showcases built on a scalable content structure." />
              <CaseRow label="Result" text="A live, professional web presence that positions the business credibly to prospective buyers and partners." />
            </div>
            <Button href="https://thakralrealestate.com/" target="_blank" rel="noopener noreferrer" variant="secondary" className="mt-8">
              View Case Study
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* 09 — PROCESS */}
      <section className="border-y border-ink-950/8 bg-white py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionTitle eyebrow="Process" title="A clear, structured path from idea to launch." align="center" />
          </Reveal>
          <div className="mt-16 grid gap-10 lg:grid-cols-5">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 70} className="relative">
                <span className="font-display text-4xl font-bold text-indigo-650/25">{s.step}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink-950">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.description}</p>
                {i < PROCESS_STEPS.length - 1 && (
                  <span className="absolute right-[-20px] top-3 hidden h-px w-10 bg-ink-950/10 lg:block" />
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 10 — TESTIMONIALS (ready for real quotes) */}
      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionTitle eyebrow="Client Voice" title="Client testimonials — coming soon." align="center" />
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-12 max-w-2xl rounded-2xl border border-dashed border-ink-950/15 bg-white p-10 text-center">
            <p className="text-[15px] leading-relaxed text-ink-600">
              We're gathering verified feedback from businesses we've worked with. This space will feature real client
              testimonials as they become available — we don't publish quotes we can't stand behind.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 11 — TECHNOLOGY */}
      <section className="border-y border-ink-950/8 bg-white py-20">
        <Container>
          <Reveal className="flex flex-wrap items-center justify-between gap-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-600">Built With</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {TECHNOLOGIES.map((t) => (
                <span key={t} className="font-display text-sm font-semibold text-ink-950/50">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* PAYMENT POSITIONING */}
      <section className="py-24 lg:py-28">
        <Container className="grid items-center gap-10 rounded-2xl border border-ink-950/10 bg-white p-10 lg:grid-cols-[auto_1fr] lg:p-14">
          <Reveal>
            <ShieldCheck className="h-12 w-12 text-indigo-650" strokeWidth={1.5} />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">No Upfront Payment</h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-600">
              Start your project conversation without an upfront payment. We believe trust is earned through
              transparency — commercial terms are discussed clearly before any work begins.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FOUNDER TEASER */}
      <section className="pb-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
          <Reveal>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-ink-950 font-display text-2xl font-bold text-white">
              HA
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-600">Founded by Himanshu Aryan</p>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-600">
              JBN Tech Services was built on a simple principle: technology should create real value for the
              businesses it serves — not just look impressive.
            </p>
            <Link to="/about" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 hover:text-indigo-650">
              Read our story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <FAQSection />

      <CTASection />
    </>
  );
}

function ServiceMini({
  index,
  label,
  title,
  description,
  to,
  icon,
}: {
  index: string;
  label: string;
  title: string;
  description: string;
  to: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col justify-between rounded-2xl border border-ink-950/10 bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:border-ink-950/20 hover:shadow-lg hover:shadow-ink-950/5"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-100 text-ink-950">{icon}</span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-600/60">{index}</span>
      </div>
      <div className="mt-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-indigo-650">{label}</p>
        <h3 className="mt-1.5 font-display text-xl font-semibold text-ink-950">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{description}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 transition-colors group-hover:text-indigo-650">
        Learn more <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}

function CaseRow({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-l-2 border-ink-950/10 pl-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-600/70">{label}</p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-ink-700">{text}</p>
    </div>
  );
}
