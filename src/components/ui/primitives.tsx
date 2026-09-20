import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-12", className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 rounded-full border border-[#babecc] bg-[#f0f2f5] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2d3436] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff]",
        className
      )}
    >
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff4757] shadow-[0_0_10px_rgba(255,71,87,0.7)]" />
      {children}
    </span>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#babecc] text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-200 ease-out focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#ff4757] text-white shadow-[6px_6px_12px_rgba(166,50,60,0.32),-6px_-6px_12px_rgba(255,100,110,0.28)] hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.12),inset_-6px_-6px_12px_rgba(255,255,255,0.08)]",
  secondary: "bg-[#e0e5ec] text-[#2d3436] shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-[inset_6px_6px_12px_#babecc,inset_-6px_-6px_12px_#ffffff]",
  outline: "bg-[#f0f2f5] text-[#2d3436] hover:bg-[#f8fafc]",
  ghost: "border-transparent bg-transparent px-0 py-0 text-[#2d3436] shadow-none hover:underline hover:decoration-[#ff4757] hover:underline-offset-4",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4 text-[10px]",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined; href?: undefined };
type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { to: string; href?: undefined };
type ButtonAsAnchor = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { to?: undefined; href: string };

export function Button(props: ButtonAsButton | ButtonAsLink | ButtonAsAnchor) {
  const { variant = "primary", size = "md", icon = true, className, children, ...rest } = props as CommonProps &
    Record<string, unknown>;
  const cls = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#2d3436] shadow-[inset_1px_1px_0_rgba(255,255,255,0.8)]">
          <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      )}
    </>
  );

  if ("to" in props && props.to) {
    const { to, ...linkRest } = rest as unknown as ButtonAsLink;
    return (
      <Link to={to} className={cls} {...(linkRest as object)}>
        {content}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    const { href, ...aRest } = rest as unknown as ButtonAsAnchor;
    return (
      <a href={href} className={cls} {...(aRest as object)}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}

export const SectionTitle = forwardRef<
  HTMLDivElement,
  { eyebrow?: string; title: ReactNode; description?: ReactNode; align?: "left" | "center"; className?: string }
>(({ eyebrow, title, description, align = "left", className }, ref) => (
  <div ref={ref} className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
    {eyebrow && <Eyebrow className={cn(align === "center" && "justify-center")}>{eyebrow}</Eyebrow>}
    <h2 className="mt-5 text-balance text-4xl leading-[0.95] text-[#2d3436] sm:text-5xl lg:text-[4rem]">
      {title}
    </h2>
    {description && <p className="mt-5 text-balance text-[15px] leading-relaxed text-[#4a5568] lg:text-lg">{description}</p>}
  </div>
));
SectionTitle.displayName = "SectionTitle";

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-2xl border border-[#babecc] bg-[#f0f2f5] p-4 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff]">
      <span className="font-mono text-3xl font-bold text-[#2d3436] lg:text-[2.5rem]">{value}</span>
      <span className="text-[10px] uppercase tracking-[0.18em] text-[#4a5568]">{label}</span>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-[#babecc] bg-[#f0f2f5] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#2d3436] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff]">
      {children}
    </span>
  );
}
