import { Check } from "lucide-react";
import { Container, SectionTitle, Button, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

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

const capabilities = [
  { title: "Responsive Design", description: "Interfaces engineered to work precisely across desktop, tablet and mobile." },
  { title: "Performance", description: "Fast-loading pages built on clean, modern technical foundations." },
  { title: "Conversion-Focused UX", description: "Layouts and flows designed to turn visitors into genuine enquiries." },
  { title: "SEO Foundations", description: "Semantic structure, clean URLs and technical groundwork built in from day one." },
  { title: "CMS", description: "Content management so your team can update the site without depending on us." },
  { title: "Analytics", description: "Visibility into how visitors use your site, ready from launch." },
  { title: "Security", description: "Secure forms, safe data handling and modern hosting practices." },
  { title: "Integrations", description: "Payment, booking, CRM and business-tool integrations where needed." },
  { title: "Scalable Architecture", description: "A foundation that can grow as your business and content needs grow." },
];

export default function WebsiteDevelopment() {
  return (
    <>
      <PageHero
        eyebrow="Flagship Service · Website Development"
        title="Digital Experiences Built for Serious Businesses."
        description="A website should not merely look good. It should communicate credibility, generate enquiries, improve customer experience, perform quickly, work across every device, support SEO, convert visitors, and scale with your business."
        actions={<Button to="/contact">Start Your Website Project</Button>}
      />

      <section className="py-24 lg:py-28">
        <Container className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <BrowserMockup domain="yourbusiness.com" accent="indigo" />
              <BrowserMockup
                domain="yourbusiness.com/mobile"
                accent="slate"
                className="absolute -bottom-10 -right-6 w-[55%] rotate-3 shadow-2xl"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Every Type of Website</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Built for the way your business actually works.
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {websiteTypes.map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm text-ink-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-650" />
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-ink-950/8 bg-white py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              eyebrow="What's Built In"
              title="Every website is engineered on the same rigorous foundation."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 60}>
                <h3 className="font-display text-lg font-semibold text-ink-950">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{c.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Start your website project."
        description="Tell us about your business and goals — we'll map out an approach with no upfront payment required to begin the conversation."
        primaryLabel="Start Your Website Project"
      />
    </>
  );
}
