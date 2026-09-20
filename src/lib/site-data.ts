// Central, single source of truth for all static content used across the site.
// Keeping copy here avoids duplication and keeps every page consistent.

export const COMPANY = {
  name: "JBN TECH SERVICES",
  phoneDisplay: "8725838779",
  phoneIntl: "+918725838779",
  tagline: "Websites. Technology. Business Growth.",
};

export const telHref = `tel:${COMPANY.phoneIntl}`;
export const whatsappHref = `https://wa.me/${COMPANY.phoneIntl.replace("+", "")}?text=${encodeURIComponent(
  "Hello JBN Tech Services, I'd like to discuss a project."
)}`;

export type NavItem = { label: string; to: string };

export const NAV_LINKS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Industries", to: "/industries" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export const SERVICE_LINKS: NavItem[] = [
  { label: "Website Development", to: "/services/website-development" },
  { label: "App Development", to: "/services/app-development" },
  { label: "SEO", to: "/services/seo" },
  { label: "Google Ads", to: "/services/google-ads" },
  { label: "Meta Ads", to: "/services/meta-ads" },
];

export const STATS = [
  { value: "500+", label: "Websites Delivered" },
  { value: "500+", label: "Businesses Served" },
  { value: "15+", label: "Industries" },
  { value: "5+", label: "Years of Experience" },
];

export type Project = {
  slug: string;
  name: string;
  url: string;
  industry: string;
  description: string;
  tags: string[];
  accent: "amber" | "emerald" | "slate" | "indigo" | "rose";
};

export const PROJECTS: Project[] = [
  {
    slug: "hotel-binwa-view",
    name: "Hotel Binwa View",
    url: "https://www.hotelbinwaview.com/",
    industry: "Hospitality",
    description:
      "A premium hospitality website built to showcase rooms, amenities and location while making it effortless for guests to enquire and book.",
    tags: ["Hospitality", "Website Development", "Booking Enquiry"],
    accent: "amber",
  },
  {
    slug: "khehhra-group",
    name: "Khehhra Group",
    url: "https://www.khehhragroup.in/",
    industry: "Corporate / Business Group",
    description:
      "A corporate web presence designed to communicate scale, credibility and diversified business operations to partners and clients.",
    tags: ["Corporate", "Website Development", "Brand Presence"],
    accent: "slate",
  },
  {
    slug: "mann-organiculture",
    name: "Mann Organiculture",
    url: "https://mannorganiculture.com/",
    industry: "Agriculture / Organic Products",
    description:
      "A clean, trust-led website for an organic products business, built to communicate authenticity and product quality.",
    tags: ["Agriculture", "E-commerce Ready", "Brand Website"],
    accent: "emerald",
  },
  {
    slug: "gyanodeepti-schools",
    name: "Gyanodeepti Schools",
    url: "https://gyanodeeptischools.in/",
    industry: "Education",
    description:
      "An institutional website for an educational organization, structured to inform parents and build confidence in the institution.",
    tags: ["Education", "Institutional Website", "Information Architecture"],
    accent: "indigo",
  },
  {
    slug: "thakral-real-estate",
    name: "Thakral Real Estate",
    url: "https://thakralrealestate.com/",
    industry: "Real Estate",
    description:
      "A real-estate website engineered to present listings and developments with the credibility serious buyers expect.",
    tags: ["Real Estate", "Lead Generation", "Property Presentation"],
    accent: "rose",
  },
];

export type Industry = {
  name: string;
  description: string;
  image?: string;
};

export const INDUSTRIES: Industry[] = [
  {
    name: "Manufacturing",
    description: "Corporate and industrial websites that communicate scale, capability and reliability to buyers and partners.",
    image:
      "https://images.pexels.com/photos/34221997/pexels-photo-34221997.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    name: "Real Estate",
    description: "Property and developer websites built to present listings and developments with credibility.",
    image:
      "https://images.pexels.com/photos/38026454/pexels-photo-38026454.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    name: "Hospitality",
    description: "Hotel and resort websites designed around visual storytelling and effortless enquiry generation.",
    image:
      "https://images.pexels.com/photos/6758531/pexels-photo-6758531.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    name: "Interior Design",
    description: "Portfolio-led websites that let design work speak for itself through considered visual presentation.",
    image:
      "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    name: "Education",
    description: "Institutional websites structured to inform parents and students, and to build lasting confidence.",
    image:
      "https://images.pexels.com/photos/31367512/pexels-photo-31367512.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
  {
    name: "E-commerce",
    description: "Product-led online stores built for browsing, trust and conversion across every device.",
    image:
      "https://images.pexels.com/photos/21838827/pexels-photo-21838827.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  },
];

export const ADDITIONAL_INDUSTRIES = [
  "Professional Services",
  "Construction",
  "Retail",
  "Healthcare",
  "Restaurants",
  "Local Businesses",
  "Corporate Businesses",
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business, customers, competitors and objectives — before any design begins.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "We define the site structure, content approach and technical direction aligned to your business goals.",
  },
  {
    step: "03",
    title: "Design",
    description: "We design an interface that reflects your brand and builds credibility with the people you want to reach.",
  },
  {
    step: "04",
    title: "Development",
    description: "We build a fast, secure, responsive product using modern, maintainable engineering practices.",
  },
  {
    step: "05",
    title: "Launch",
    description: "We deploy, test across devices, and hand over a website that is ready to generate opportunities.",
  },
];

export const WHY_JBN = [
  {
    title: "Business-First Thinking",
    description: "Every decision is evaluated against a single question: does this help the business grow?",
  },
  {
    title: "Performance",
    description: "Fast, technically sound websites built on modern foundations — not bloated templates.",
  },
  {
    title: "Conversion",
    description: "Interfaces designed to turn visitors into enquiries, not just impressions.",
  },
  {
    title: "Scalability",
    description: "Architecture that can grow with your business, from a single site to a full digital ecosystem.",
  },
  {
    title: "Professional Execution",
    description: "Clear process, clear communication, and a team that treats your business like it matters.",
  },
];

export const FAQS = [
  {
    q: "What types of websites do you build?",
    a: "We build business, corporate, e-commerce, manufacturing, real-estate, institutional and custom web-application websites — from new builds to complete redesigns.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes. We work with local businesses, growing companies, and established organizations alike, and tailor our approach to each stage of the business.",
  },
  {
    q: "Do you build corporate websites?",
    a: "Yes, corporate and institutional websites are a core part of what we do, designed to communicate credibility at scale.",
  },
  {
    q: "Do you provide SEO?",
    a: "Yes. We offer technical SEO, on-page SEO, local SEO and ongoing organic growth support.",
  },
  {
    q: "Do you manage Google Ads?",
    a: "Yes, we plan, build and manage Google Search advertising campaigns aligned with your business goals.",
  },
  {
    q: "Do you manage Meta Ads?",
    a: "Yes, we run Facebook and Instagram advertising campaigns, from creative strategy to performance optimization.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. Website redesigns are one of our most common projects — we assess your current site and rebuild it with a stronger foundation.",
  },
  {
    q: "Can you build custom web applications?",
    a: "Yes. Beyond marketing websites, we build custom web and business applications, dashboards and internal tools.",
  },
  {
    q: "How does the process work?",
    a: "Every project follows the same structured path: Discovery, Strategy, Design, Development and Launch — with clear communication throughout.",
  },
  {
    q: "Do you charge money in advance?",
    a: "No. We do not require any upfront payment to begin a project conversation. Commercial terms are discussed transparently before any work begins.",
  },
];

export const TECHNOLOGIES = [
  "React",
  "Next.js",
  "WordPress",
  "Shopify",
  "Node.js",
  "Tailwind CSS",
  "Google Analytics",
  "Google Search Console",
  "Google Ads Manager",
  "Meta Ads Manager",
  "Figma",
];
