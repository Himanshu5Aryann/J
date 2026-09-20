import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { Container } from "@/components/ui/primitives";
import { NAV_LINKS } from "@/lib/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-200",
          scrolled ? "border-b border-[#babecc] bg-[#e0e5ec]/90 backdrop-blur-sm" : "border-b border-transparent bg-transparent"
        )}
      >
        <Container>
          <nav className={cn("flex items-center justify-between transition-all duration-200", scrolled ? "h-[68px]" : "h-[84px]")}>
            <Link to="/" className="flex items-center gap-3" aria-label="JBN Tech Services — Home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#babecc] bg-[#ff4757] text-sm font-bold text-white shadow-[4px_4px_10px_rgba(166,50,60,0.32),-4px_-4px_10px_rgba(255,255,255,0.75)]">
                J
              </span>
              <span className="font-display text-[15px] font-extrabold tracking-[-0.04em] text-[#2d3436]">JBN TECH SERVICES</span>
            </Link>

            <div className="hidden items-center gap-2 lg:flex">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-200",
                      isActive
                        ? "border-[#babecc] bg-[#f0f2f5] text-[#2d3436] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff]"
                        : "border-transparent text-[#4a5568] hover:border-[#babecc] hover:bg-[#f0f2f5]"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-[#babecc] bg-[#ff4757] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[6px_6px_12px_rgba(166,50,60,0.32),-6px_-6px_12px_rgba(255,100,110,0.28)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.12),inset_-6px_-6px_12px_rgba(255,255,255,0.08)]"
              >
                Start a Project
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#2d3436]">→</span>
              </Link>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#babecc] bg-[#f0f2f5] text-[#2d3436] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </nav>
        </Container>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-[#e0e5ec] transition-all duration-200 ease-out lg:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        )}
      >
        <Container>
          <div className="flex h-[84px] items-center justify-between">
            <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#babecc] bg-[#ff4757] text-sm font-bold text-white shadow-[4px_4px_10px_rgba(166,50,60,0.32),-4px_-4px_10px_rgba(255,255,255,0.75)]">
                J
              </span>
              <span className="font-display text-[15px] font-extrabold tracking-[-0.04em] text-[#2d3436]">JBN TECH SERVICES</span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#babecc] bg-[#f0f2f5] text-[#2d3436] shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </Container>
        <Container className="flex flex-1 flex-col justify-center gap-1 pb-24">
          {NAV_LINKS.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={({ isActive }) =>
                cn(
                  "border-b border-[#babecc] py-4 font-display text-3xl font-semibold transition-all duration-200",
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  isActive ? "text-[#2d3436]" : "text-[#4a5568]"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#babecc] bg-[#ff4757] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[6px_6px_12px_rgba(166,50,60,0.32),-6px_-6px_12px_rgba(255,100,110,0.28)]">
            Start a Project →
          </Link>
        </Container>
      </div>
    </>
  );
}
