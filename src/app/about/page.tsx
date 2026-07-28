import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { ConversationCta } from "@/components/shared/ConversationCta";
import { PageIntro } from "@/components/shared/PageIntro";
import { Reveal } from "@/components/shared/Reveal";
import { values } from "@/content/content";
import { createMetadata } from "@/seo/createMetadata";

export const metadata = createMetadata({
  title: "About",
  canonical: "/about",
  description:
    "Learn about Aurevia Capital's independent advisory model, values, and approach to long-term financial stewardship.",
  keywords: ["independent financial advisor", "fiduciary wealth management"],
});

export default function AboutPage() {
  return (
    <Page>
      <PageIntro
        eyebrow="The firm"
        title="Built for decisions measured in decades."
        description="Aurevia brings investment discipline, planning depth, and family perspective to the choices that shape lasting wealth."
      />
      <Section className="about-story">
        <Container className="about-story-grid">
          <Reveal className="about-story-media">
            <Image
              src="/images/about-aurevia.webp"
              alt="A quiet advisory library with planning materials in natural light"
              width={1000}
              height={760}
              sizes="(max-width: 767px) 100vw, 55vw"
            />
          </Reveal>
          <Reveal className="about-story-copy">
            <h2>Independent thinking, organized around your life.</h2>
            <p>
              Aurevia was founded in 2008 on a simple belief: financial advice
              is more useful when the advisor sees the whole picture and can
              explain each decision plainly.
            </p>
            <p>
              We combine portfolio stewardship with financial planning,
              governance, and coordination across a client&apos;s other
              professionals. The result is not more activity. It is a clearer
              connection between capital and purpose.
            </p>
            <ArrowLink href="/leadership">Meet our leadership</ArrowLink>
          </Reveal>
        </Container>
      </Section>
      <Section className="mission-section">
        <Container className="mission-grid">
          <div>
            <h2>Our mission</h2>
            <p>
              Help clients make consequential financial decisions with
              confidence, context, and a long-term view.
            </p>
          </div>
          <div>
            <h2>Our vision</h2>
            <p>
              A standard of advice where clarity, alignment, and stewardship
              are more valuable than complexity.
            </p>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="section-heading">
            <h2>Principles that guide the work.</h2>
          </div>
          <div className="value-grid">
            {values.map((value) => (
              <Reveal key={value.title} className="value-item">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </Reveal>
            ))}
          </div>
          <div className="disclosure-note">
            <h2>About this demonstration</h2>
            <p>
              Aurevia Capital, its team, office, services, testimonials, and
              publications are entirely fictional. This site is HubZero&apos;s
              Finance + Premium Blueprint reference implementation and does
              not provide financial, investment, tax, or legal advice.
            </p>
            <Link href="/terms">Read the terms of service</Link>
          </div>
        </Container>
      </Section>
      <ConversationCta />
    </Page>
  );
}
