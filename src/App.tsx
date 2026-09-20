import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import WebsiteDevelopment from "@/pages/WebsiteDevelopment";
import AppDevelopment from "@/pages/AppDevelopment";
import SEO from "@/pages/SEO";
import GoogleAds from "@/pages/GoogleAds";
import MetaAds from "@/pages/MetaAds";
import Work from "@/pages/Work";
import Industries from "@/pages/Industries";
import About from "@/pages/About";
import Insights from "@/pages/Insights";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import TermsOfService from "@/pages/legal/TermsOfService";
import CookiePolicy from "@/pages/legal/CookiePolicy";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/website-development" element={<WebsiteDevelopment />} />
        <Route path="services/app-development" element={<AppDevelopment />} />
        <Route path="services/seo" element={<SEO />} />
        <Route path="services/google-ads" element={<GoogleAds />} />
        <Route path="services/meta-ads" element={<MetaAds />} />
        <Route path="work" element={<Work />} />
        <Route path="industries" element={<Industries />} />
        <Route path="about" element={<About />} />
        <Route path="insights" element={<Insights />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
