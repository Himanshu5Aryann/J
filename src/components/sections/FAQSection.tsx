import { useState } from "react";
import { Plus } from "lucide-react";
import { Container, SectionTitle } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { FAQS } from "@/lib/site-data";
import { cn } from "@/utils/cn";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionTitle
            eyebrow="FAQ"
            title="Common questions, answered directly."
            description="Clear answers before you get in touch — because trust is built on transparency, not sales pressure."
          />
        </Reveal>
        <div className="divide-y divide-ink-950/8 border-t border-ink-950/8">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="text-[15px] font-medium text-ink-950">{item.q}</span>
                  <Plus
                    className={cn("h-4 w-4 shrink-0 text-ink-600 transition-transform duration-300", open && "rotate-45 text-indigo-650")}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300 ease-out",
                    open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-ink-600">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
