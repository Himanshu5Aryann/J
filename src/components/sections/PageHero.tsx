import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden border-b border-[#babecc] bg-[#edf1f5] pt-[150px] pb-20 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] lg:pt-[176px] lg:pb-24">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/icons8-team-CrW-TbykPBQ-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          opacity: 1,
          filter: "none",
          mixBlendMode: "normal",
          backgroundBlendMode: "normal",
        }}
      />
      <Container className="relative">
        <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          <Reveal>
            <Eyebrow className={align === "center" ? "justify-center" : ""}>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-balance font-display text-4xl font-bold leading-[1.08] text-[#2d3436] sm:text-5xl lg:text-[58px]">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={150}>
              <p className="mt-6 text-balance text-base leading-relaxed text-[#4a5568] lg:text-lg">{description}</p>
            </Reveal>
          )}
          {actions && (
            <Reveal delay={220}>
              <div className={`mt-9 flex flex-wrap gap-4 ${align === "center" ? "justify-center" : ""}`}>{actions}</div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
