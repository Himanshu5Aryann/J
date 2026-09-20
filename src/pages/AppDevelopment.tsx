import { Smartphone, LayoutDashboard, Building2, Users, Globe, Cpu } from "lucide-react";
import { Container, SectionTitle, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

const areas = [
  { icon: <Building2 className="h-5 w-5" />, title: "Business Applications", description: "Tools built around how your business actually operates day to day." },
  { icon: <Users className="h-5 w-5" />, title: "Customer Applications", description: "Applications that let your customers interact with your business directly." },
  { icon: <Cpu className="h-5 w-5" />, title: "Internal Applications", description: "Internal tools that reduce manual work and streamline operations." },
  { icon: <Smartphone className="h-5 w-5" />, title: "Mobile Applications", description: "Mobile experiences built for the way your users actually work." },
  { icon: <Globe className="h-5 w-5" />, title: "Web Applications", description: "Browser-based applications that don't require installation." },
  { icon: <LayoutDashboard className="h-5 w-5" />, title: "Dashboards & Custom Software", description: "Purpose-built software and reporting tools designed around your data." },
];

export default function AppDevelopment() {
  return (
    <>
      <PageHero
        eyebrow="Technology Capability · App Development"
        title="Applications that extend what your website can do."
        description="Beyond marketing websites, we build the business, customer and internal applications that help organizations operate more effectively — as a technology capability alongside our core website development work."
        actions={<Button to="/contact">Discuss Your Application</Button>}
      />

      <section className="py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              eyebrow="Where We Build"
              title="Software built around real business processes."
              description="Every application starts with the same question we ask for websites: what does this need to actually accomplish for the business?"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 60} className="rounded-2xl border border-ink-950/10 bg-white p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-100 text-ink-950">{a.icon}</span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-950">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{a.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Have an application in mind?"
        description="Whether it's a customer-facing tool or an internal system, we'll help you scope what's actually needed."
        primaryLabel="Discuss Your Application"
      />
    </>
  );
}
