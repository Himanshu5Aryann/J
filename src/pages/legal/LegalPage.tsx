import type { ReactNode } from "react";
import { Container } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/PageHero";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow={`Legal · Updated ${updated}`} title={title} />
      <section className="py-20 lg:py-24">
        <Container className="max-w-3xl space-y-6 text-[15px] leading-relaxed text-ink-600">{children}</Container>
      </section>
    </>
  );
}

export function LegalHeading({ children }: { children: ReactNode }) {
  return <h2 className="!mt-12 font-display text-xl font-semibold text-ink-950">{children}</h2>;
}
