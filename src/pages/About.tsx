import { Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About JBN Tech Services"
        title="Technology built with intention, and a name built on gratitude."
        description="JBN Tech Services was founded with the intention of building more than just a technology company — a business rooted in faith, ancestry and a genuine desire to help other businesses move forward."
      />

      {/* Founder */}
      <section className="py-24 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.55fr_1fr] lg:items-start">
          <Reveal>
            <div className="sticky top-28 rounded-[28px] border border-[#babecc] bg-[#f0f2f5] p-7 shadow-[12px_12px_24px_#babecc,-12px_-12px_24px_#ffffff]">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border border-[#babecc] bg-[#ff4757] font-display text-4xl font-bold text-white shadow-[6px_6px_12px_rgba(166,50,60,0.32),-6px_-6px_12px_rgba(255,255,255,0.75)]">
                HA
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold text-[#2d3436]">Himanshu Aryan</h2>
              <p className="mt-1 text-sm font-medium text-[#ff4757]">Founder, JBN Tech Services</p>
              <p className="mt-4 text-sm leading-relaxed text-[#4a5568]">B.Com — Delhi University School of Open Learning (DU SOL)</p>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <Eyebrow>Founder's Note</Eyebrow>
            <h3 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              "Technology should not exist simply to look impressive."
            </h3>
            <p className="text-[15px] leading-relaxed text-ink-600">
              JBN Tech Services was founded by Himanshu Aryan with the intention of building more than just a
              technology company. The company represents his desire to create meaningful technology solutions that
              genuinely help people and businesses move forward.
            </p>
            <p className="text-[15px] leading-relaxed text-ink-600">
              Himanshu believes that technology should not exist simply to look impressive. It should solve problems,
              create opportunities, strengthen businesses, and deliver measurable value.
            </p>
            <p className="text-[15px] leading-relaxed text-ink-600">
              From websites and digital solutions to applications, marketing technology, and other modern business
              solutions, JBN Tech Services aims to help businesses establish a stronger digital presence and operate
              more effectively.
            </p>
            <blockquote className="border-l-2 border-[#ff4757] pl-6">
              <p className="font-display text-xl font-semibold text-[#2d3436]">Build technology that creates real value.</p>
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* Bhairav Devta story — respectful editorial section */}
      <section className="border-y border-[#babecc] bg-[#edf1f5] py-24 lg:py-28">
        <Container className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow className="justify-center">With the Blessings of Bhairav Devta</Eyebrow>
            <h2 className="mt-4 text-center font-display text-3xl font-bold text-[#2d3436] sm:text-4xl">
              The story behind the name JBN
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-10 space-y-6 text-[15px] leading-loose text-[#4a5568]">
            <p>
              JBN Tech Services carries a name and identity deeply rooted in faith, gratitude, and respect for our
              Bhairav Devta — a revered spiritual presence connected with the ancestral roots of the founder,
              Himanshu Aryan.
            </p>
            <p>
              The foundation of JBN is inspired by Jai Bhairav Nath Devta, whose name represents the spiritual origin
              and guiding force behind the company. For Himanshu Aryan, this is not simply a company name; it is a
              representation of his roots, faith, values, and gratitude.
            </p>
            <p>
              The ancestral roots of Himanshu's family are connected with Kheera village in Uttarakhand, a place that
              holds deep significance for his family and generations before him. His grandfather and ancestors have
              their roots in this land, making the connection with Bhairav Devta an important part of the family's
              heritage.
            </p>
            <p>
              JBN Tech Services was established with a belief that every achievement should begin with gratitude.
              Himanshu Aryan considers himself blessed by the grace of Bhairav Devta and regards that blessing as a
              source of strength, guidance, and inspiration as he builds the company.
            </p>
            <p className="font-medium text-ink-950">
              The name JBN therefore carries more than a business identity. It carries a story of faith, ancestry,
              humility, and ambition.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-28">
        <Container className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Our Mission</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              Reliable, practical, result-oriented technology.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-600">
              <p>
                Our mission is to provide businesses with reliable, modern, practical, and result-oriented technology
                solutions that help them grow.
              </p>
              <p>
                We aim to understand the unique needs of every client and create solutions that are not merely
                delivered, but genuinely useful to their business.
              </p>
              <p>
                Whether it is a local business, an established company, a growing startup, a manufacturer, a service
                provider, or a larger organization, JBN Tech Services strives to provide technology that contributes
                to long-term growth.
              </p>
              <p>
                We believe every business deserves access to professional technology, regardless of its current size.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>Our Vision</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              Building a global technology brand.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-600">
              <p>
                The long-term vision of JBN Tech Services is to grow from a technology company serving businesses in
                India into a recognized global technology brand.
              </p>
              <p>
                Our ambition is not limited to one city, one state, or one market. We aim to progressively expand our
                reach across India and, ultimately, international markets.
              </p>
              <p>As the company grows, our vision is to build a technology ecosystem capable of delivering:</p>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-[#4a5568]">
              {[
                "Website Development",
                "Web Applications",
                "Mobile Applications",
                "Business Automation",
                "AI-Powered Solutions",
                "Digital Marketing Technology",
                "SEO Solutions",
                "Google & Meta Advertising",
                "Custom Software",
                "Business Technology Solutions",
              ].map((item) => (
                <li key={item} className="rounded-xl border border-[#babecc] bg-[#edf1f5] px-3 py-2 shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff]">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <CTASection title="Want to build something meaningful together?" />
    </>
  );
}
