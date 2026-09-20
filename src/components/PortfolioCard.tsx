import { ArrowUpRight } from "lucide-react";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { Tag } from "@/components/ui/primitives";
import type { Project } from "@/lib/site-data";

export function PortfolioCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const domain = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="group block"
      aria-label={`Visit ${project.name} website (opens in a new tab)`}
    >
      <div className="overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <BrowserMockup domain={domain} accent={project.accent} />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#ff4757]">{project.industry}</p>
          <h3 className="mt-1.5 font-display text-xl font-semibold text-[#2d3436]">{project.name}</h3>
        </div>
        <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#babecc] bg-[#f0f2f5] text-[#2d3436] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] transition-all duration-300 group-hover:bg-[#ff4757] group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <p className={`mt-2 text-sm leading-relaxed text-[#4a5568] ${featured ? "max-w-lg" : ""}`}>{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2d3436] underline decoration-[#2d3436]/20 underline-offset-4 transition-colors group-hover:text-[#ff4757] group-hover:decoration-[#ff4757]/40">
        Visit Website →
      </span>
    </a>
  );
}
