import { LegalPage, LegalHeading } from "./LegalPage";

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" updated="2026">
      <p>
        This website may use essential and analytics cookies to ensure the site functions correctly and to help us
        understand how it is used.
      </p>

      <LegalHeading>Essential Cookies</LegalHeading>
      <p>These cookies are necessary for core site functionality and cannot be disabled.</p>

      <LegalHeading>Analytics Cookies</LegalHeading>
      <p>
        Where enabled, analytics tools such as Google Analytics may use cookies to help us understand aggregate site
        usage. No personally identifying information is exposed publicly through this website's interface.
      </p>

      <LegalHeading>Managing Cookies</LegalHeading>
      <p>
        You can control or delete cookies through your browser settings at any time. Disabling cookies may affect
        certain aspects of site functionality.
      </p>
    </LegalPage>
  );
}
