import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { site } from "@/config/site";
import { createMetadata } from "@/seo/createMetadata";

export const metadata = createMetadata({
  title: "Terms of Service",
  canonical: "/terms",
  description:
    "Terms of service and financial information disclosures for the fictional Aurevia Capital demonstration.",
});

export default function TermsPage() {
  return (
    <Page>
      <article className="legal-page">
        <Container size="text">
          <header>
            <p className="eyebrow">Legal</p>
            <h1>Terms of Service</h1>
            <p>Effective July 28, 2026</p>
          </header>
          <section>
            <h2>Demonstration only</h2>
            <p>
              Aurevia Capital, {site.legalName}, its team, office, clients,
              testimonials, services, and publications are fictional. This
              website is a HubZero Blueprint reference implementation and is
              provided solely to demonstrate architecture, design, content,
              and engineering patterns.
            </p>
          </section>
          <section>
            <h2>No advisory relationship</h2>
            <p>
              Using this website, following a link, or sending an email does
              not create an investment advisory, fiduciary, client, or other
              professional relationship. The site does not accept accounts,
              assets, orders, applications, or instructions.
            </p>
          </section>
          <section>
            <h2>No investment, tax, or legal advice</h2>
            <p>
              Content is general and illustrative. It is not a recommendation,
              offer, solicitation, forecast, or personalized advice. Financial
              decisions should be evaluated with qualified professionals who
              understand your circumstances and jurisdiction.
            </p>
          </section>
          <section>
            <h2>No performance representation</h2>
            <p>
              The site does not present actual investment performance, assets
              under management, regulatory registrations, awards, or client
              outcomes. Any scenario described is fictional and should not be
              interpreted as a promise or expectation.
            </p>
          </section>
          <section>
            <h2>Intellectual property</h2>
            <p>
              The implementation and HubZero Blueprint materials are subject
              to the license and notices in this repository. Fictional Aurevia
              brand assets are included for demonstration and should be
              replaced when adapting this Blueprint for a real organization.
            </p>
          </section>
          <section>
            <h2>Availability and accuracy</h2>
            <p>
              The demonstration is provided as-is. It may be changed or removed
              without notice. Although the content is written to be believable,
              no representation is made that it is current or appropriate for
              any real person or organization.
            </p>
          </section>
          <section>
            <h2>Production use</h2>
            <p>
              Before launch, an adopting organization must replace all
              fictional disclosures, contact details, legal terms, privacy
              statements, regulatory language, and content with accurate,
              reviewed information.
            </p>
          </section>
        </Container>
      </article>
    </Page>
  );
}
