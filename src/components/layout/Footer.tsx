import { Link } from "react-router-dom";
import { Container } from "@/components/ui/primitives";
import { COMPANY, SERVICE_LINKS, telHref, whatsappHref } from "@/lib/site-data";

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
];

const resourceLinks = [
  { label: "Insights", to: "/insights" },
  { label: "Services", to: "/services" },
  { label: "FAQs", to: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Cookie Policy", to: "/cookie-policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#babecc] bg-[#2d3436] text-white">
      <Container className="grid gap-14 py-20 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-[#ff4757] text-sm font-bold text-white shadow-[4px_4px_10px_rgba(166,50,60,0.32),-4px_-4px_10px_rgba(255,255,255,0.15)]">
              J
            </span>
            <span className="font-display text-[15px] font-extrabold tracking-[-0.04em] text-white">JBN TECH SERVICES</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#e0e5ec]">
            A technology company building websites, applications and growth systems for businesses that mean business.
          </p>
          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffb2b7]">{COMPANY.tagline}</p>
        </div>

        <FooterColumn title="Company" links={companyLinks} />

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffb2b7]">Services</h3>
          <ul className="mt-5 space-y-3">
            {SERVICE_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-[#dfe7ee] transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffb2b7]">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={telHref} className="text-[#dfe7ee] transition-colors hover:text-white">
                {COMPANY.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-[#dfe7ee] transition-colors hover:text-white">
                WhatsApp
              </a>
            </li>
          </ul>
          <h3 className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffb2b7]">Resources</h3>
          <ul className="mt-5 space-y-3">
            {resourceLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-[#dfe7ee] transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-xs text-[#dfe7ee] sm:flex-row">
        <p>© 2026 JBN Tech Services. All Rights Reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {legalLinks.map((l) => (
            <Link key={l.to} to={l.to} className="transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffb2b7]">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-sm text-[#dfe7ee] transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
