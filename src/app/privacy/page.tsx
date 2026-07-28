import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { site } from "@/config/site";
import { createMetadata } from "@/seo/createMetadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  canonical: "/privacy",
  description:
    "Privacy policy for the fictional Aurevia Capital HubZero Blueprint demonstration.",
});

export default function PrivacyPage() {
  return (
    <Page>
      <article className="legal-page">
        <Container size="text">
          <header>
            <p className="eyebrow">Legal</p>
            <h1>Privacy Policy</h1>
            <p>Effective July 28, 2026</p>
          </header>
          <section>
            <h2>About this policy</h2>
            <p>
              This website is a static HubZero Blueprint demonstration for a
              fictional company. Aurevia Capital does not exist, and this site
              does not operate an advisory business or collect information for
              one.
            </p>
          </section>
          <section>
            <h2>Information you provide</h2>
            <p>
              This site does not include a contact form, client portal, account
              registration, or newsletter subscription. Email and telephone
              links use applications on your device. Information sent through
              those applications is governed by the service you choose to use.
            </p>
          </section>
          <section>
            <h2>Technical information</h2>
            <p>
              The Blueprint does not include advertising trackers, analytics
              scripts, or marketing cookies. A production host may process
              routine server logs such as IP address, browser type, requested
              URL, and timestamp for security and reliability.
            </p>
          </section>
          <section>
            <h2>Third-party links</h2>
            <p>
              Links to HubZero or your email and telephone applications lead
              to services governed by their own privacy terms. This policy
              applies only to this demonstration website.
            </p>
          </section>
          <section>
            <h2>Data rights and contact</h2>
            <p>
              Because the site does not intentionally collect personal data,
              it has no user profile to access, correct, or delete. Questions
              about this implementation can be directed to{" "}
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
            </p>
          </section>
          <section>
            <h2>Changes</h2>
            <p>
              A production project based on this Blueprint must replace this
              demonstration policy with terms that accurately describe its
              organization, hosting, analytics, forms, vendors, retention, and
              legal obligations before launch.
            </p>
          </section>
        </Container>
      </article>
    </Page>
  );
}
