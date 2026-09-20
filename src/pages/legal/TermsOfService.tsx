import { LegalPage, LegalHeading } from "./LegalPage";
import { COMPANY, telHref } from "@/lib/site-data";

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" updated="2026">
      <p>
        These Terms of Service govern your use of the {COMPANY.name} website and your engagement with us for
        website development, application development, SEO and advertising services.
      </p>

      <LegalHeading>Engagement</LegalHeading>
      <p>
        Project scope, timelines and commercial terms are agreed in writing before work begins, following an initial
        consultation. We do not require any payment in advance to begin a project conversation.
      </p>

      <LegalHeading>Client Responsibilities</LegalHeading>
      <p>
        Clients are responsible for providing accurate business information, timely feedback and any content or
        assets required to complete a project.
      </p>

      <LegalHeading>Intellectual Property</LegalHeading>
      <p>
        Ownership of final deliverables transfers to the client upon completion of agreed commercial terms, as set
        out in the specific project agreement.
      </p>

      <LegalHeading>Third-Party Links</LegalHeading>
      <p>
        Our portfolio may link to independently operated third-party websites. We are not responsible for the
        content or practices of those websites.
      </p>

      <LegalHeading>Contact</LegalHeading>
      <p>
        For questions about these terms, contact us at{" "}
        <a href={telHref} className="font-medium text-ink-950 underline">
          {COMPANY.phoneDisplay}
        </a>
        .
      </p>
    </LegalPage>
  );
}
