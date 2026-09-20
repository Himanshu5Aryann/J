import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

const ACCENTS = {
  amber: { bg: "from-[#f5d27d] to-[#f5b55d]", chip: "bg-[#ffb703]", line: "bg-[#f4d7a5]" },
  emerald: { bg: "from-[#bcebd8] to-[#94d6b8]", chip: "bg-[#34d399]", line: "bg-[#cfeee2]" },
  slate: { bg: "from-[#dfe7ee] to-[#c1ced8]", chip: "bg-[#4a5568]", line: "bg-[#dae2eb]" },
  indigo: { bg: "from-[#f5d4d8] to-[#f0bfc6]", chip: "bg-[#ff4757]", line: "bg-[#f7dce0]" },
  rose: { bg: "from-[#f5dcd1] to-[#f1b9af]", chip: "bg-[#ff8a80]", line: "bg-[#f7d6cd]" },
} as const;

export type Accent = keyof typeof ACCENTS;

export function BrowserMockup({
  domain,
  accent = "indigo",
  className,
  children,
}: {
  domain: string;
  accent?: Accent;
  className?: string;
  children?: ReactNode;
}) {
  const a = ACCENTS[accent];
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[24px] border border-[#babecc] bg-[#f0f2f5] shadow-[12px_12px_24px_#babecc,-12px_-12px_24px_#ffffff]",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-[#babecc] bg-[#edf1f5] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff4757]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        </div>
        <div className="ml-2 flex-1 truncate rounded-full border border-[#babecc] bg-white px-3 py-1 text-[11px] font-medium text-[#4a5568] shadow-[inset_2px_2px_4px_rgba(186,190,204,0.8),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
          {domain}
        </div>
      </div>
      <div className={cn("relative aspect-[16/11] w-full bg-gradient-to-br p-5 scanlines", a.bg)}>
        {children ?? (
          <div className="flex h-full flex-col gap-3">
            <div className={cn("h-3 w-16 rounded-full border border-[#babecc]", a.chip)} />
            <div className="h-3 w-3/4 rounded-full border border-[#babecc] bg-white/80" />
            <div className="h-3 w-1/2 rounded-full border border-[#babecc] bg-white/60" />
            <div className="mt-2 grid flex-1 grid-cols-3 gap-2">
              <div className={cn("rounded-[18px] border border-[#babecc] shadow-[inset_4px_4px_8px_rgba(186,190,204,0.8),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]", a.line)} />
              <div className={cn("rounded-[18px] border border-[#babecc] shadow-[inset_4px_4px_8px_rgba(186,190,204,0.8),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]", a.line)} />
              <div className={cn("rounded-[18px] border border-[#babecc] shadow-[inset_4px_4px_8px_rgba(186,190,204,0.8),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]", a.line)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
