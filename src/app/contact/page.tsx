import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";
import { PageIntro } from "@/components/shared/PageIntro";
import { site } from "@/config/site";
import { createMetadata } from "@/seo/createMetadata";

export const metadata = createMetadata({
  title: "Contact",
  canonical: "/contact",
  description:
    "Contact the fictional Aurevia Capital advisory team by email or phone and learn what to expect from a first conversation.",
});

export default function ContactPage() {
  return (
    <Page>
      <PageIntro
        eyebrow="Contact"
        title="Begin with a clear conversation."
        description="Tell us what you are navigating. We will explain how we can help, what an engagement may involve, and where we may not be the right fit."
      />
      <Section className="contact-section">
        <Container className="contact-grid">
          <div className="contact-primary">
            <h2>Speak with our advisory team.</h2>
            <a className="button" href={`mailto:${site.contact.email}`}>
              Start a conversation
            </a>
            <p>
              This action opens your email application. The demonstration does
              not collect or submit personal information.
            </p>
          </div>
          <div className="contact-methods">
            <div>
              <h2>Email</h2>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              <p>For introductions and general inquiries.</p>
            </div>
            <div>
              <h2>Phone</h2>
              <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
              <p>Monday through Friday, 8:30 a.m. to 5:00 p.m. Pacific.</p>
            </div>
            <div>
              <h2>Office</h2>
              <address>
                {site.contact.address.street}
                <br />
                {site.contact.address.city}, {site.contact.address.region}{" "}
                {site.contact.address.postalCode}
              </address>
              <p>Meetings are scheduled in advance.</p>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="first-conversation">
        <Container>
          <div className="section-heading">
            <h2>What to expect.</h2>
          </div>
          <ol className="process-list">
            <li>
              <h3>Share the context</h3>
              <p>
                We listen for the decision, the people involved, the timing,
                and the advice already in place.
              </p>
            </li>
            <li>
              <h3>Clarify the fit</h3>
              <p>
                We explain relevant capabilities, potential conflicts, and any
                specialists the situation may require.
              </p>
            </li>
            <li>
              <h3>Define the next step</h3>
              <p>
                If the fit is sound, we prepare a written scope, fee schedule,
                and responsibilities for review.
              </p>
            </li>
          </ol>
          <Link className="text-link" href="/faqs">
            Read frequently asked questions
          </Link>
        </Container>
      </Section>
    </Page>
  );
}
