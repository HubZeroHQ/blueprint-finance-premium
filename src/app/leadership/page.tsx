import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";
import { ConversationCta } from "@/components/shared/ConversationCta";
import { PageIntro } from "@/components/shared/PageIntro";
import { Reveal } from "@/components/shared/Reveal";
import { leadership } from "@/content/content";
import { createMetadata } from "@/seo/createMetadata";

export const metadata = createMetadata({
  title: "Leadership",
  canonical: "/leadership",
  description:
    "Meet the fictional leadership team behind Aurevia Capital's wealth, investment, family, and institutional advisory disciplines.",
});

export default function LeadershipPage() {
  return (
    <Page>
      <PageIntro
        eyebrow="Leadership"
        title="Judgment built across market cycles."
        description="Our advisors bring investment discipline, planning depth, and the patience to understand what matters beyond the portfolio."
      />
      <Section>
        <Container className="leadership-grid">
          {leadership.map((person, index) => (
            <Reveal
              key={person.name}
              className="leader-profile"
              data-featured={index === 0}
            >
              <Image
                src={person.image}
                alt={person.alt}
                width={720}
                height={860}
                sizes={
                  index === 0
                    ? "(max-width: 767px) 100vw, 48vw"
                    : "(max-width: 767px) 100vw, 25vw"
                }
              />
              <div>
                <h2>{person.name}</h2>
                <p className="leader-role">{person.role}</p>
                <p>{person.bio}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </Section>
      <Section className="leadership-principle">
        <Container>
          <blockquote>
            <p>
              “Our work is to help clients see the decision clearly enough to
              choose with confidence.”
            </p>
            <footer>Mara Ellison, Chief Executive Officer</footer>
          </blockquote>
        </Container>
      </Section>
      <ConversationCta />
    </Page>
  );
}
