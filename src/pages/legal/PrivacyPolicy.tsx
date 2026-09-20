import { LegalPage, LegalHeading } from "./LegalPage";
import { COMPANY, telHref } from "@/lib/site-data";

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="2026">
      <p>
        {COMPANY.name} ("we", "us", "our") respects your privacy. This Privacy Policy explains how we collect, use
        and protect information you share with us through this website, primarily via our contact and consultation
        forms.
      </p>

      <LegalHeading>Information We Collect</LegalHeading>
      <p>
        When you submit a form on this website, we may collect your name, phone number, business name, project
        requirements and budget range — only the information you choose to provide.
      </p>

      <LegalHeading>How We Use Information</LegalHeading>
      <p>
        Information submitted through our forms is used solely to understand your project and respond to your
        enquiry. We do not sell or rent personal information to third parties.
      </p>

      <LegalHeading>Communication</LegalHeading>
      <p>
        We may contact you by phone or WhatsApp using the number you provide, in order to discuss your enquiry.
      </p>

      <LegalHeading>Analytics</LegalHeading>
      <p>
        We may use analytics tools such as Google Analytics and Google Search Console to understand how visitors use
        this website, in aggregate and non-identifying form, to improve our service.
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>
        For any questions regarding this policy, you can reach us at{" "}
        <a href={telHref} className="font-medium text-ink-950 underline">
          {COMPANY.phoneDisplay}
        </a>
        .
      </p>
    </LegalPage>
  );
}
