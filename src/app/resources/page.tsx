import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { ConversationCta } from "@/components/shared/ConversationCta";
import { PageIntro } from "@/components/shared/PageIntro";
import { Reveal } from "@/components/shared/Reveal";
import { insights } from "@/content/content";
import { createMetadata } from "@/seo/createMetadata";

export const metadata = createMetadata({
  title: "Resources",
  canonical: "/resources",
  description:
    "Explore fictional financial planning guides, governance checklists, insights, and frequently asked questions from Aurevia Capital.",
  keywords: ["financial planning resources", "investment planning guide"],
});

const resourceGroups = [
  {
    title: "Planning foundations",
    description:
      "Questions and frameworks for organizing the financial decisions ahead.",
    items: [
      {
        title: "2026 planning guide",
        description:
          "A practical annual review covering cash flow, taxes, portfolio policy, estate documents, and family priorities.",
        href: "/faqs",
        label: "Review the guide",
      },
      {
        title: "Family governance checklist",
        description:
          "A concise framework for roles, meetings, decision rights, and next-generation participation.",
        href: `/insights/${insights[2].slug}`,
        label: "Explore governance",
      },
    ],
  },
  {
    title: "Investment decisions",
    description:
      "Context for setting policy, preparing liquidity, and staying disciplined.",
    items: insights.slice(0, 2).map((insight) => ({
      title: insight.title,
      description: insight.excerpt,
      href: `/insights/${insight.slug}`,
      label: "Read insight",
    })),
  },
] as const;

export default function ResourcesPage() {
  return (
    <Page>
      <PageIntro
        eyebrow="Resources"
        title="Useful context before an important conversation."
        description="Plain-language guides and perspectives to help families and institutions frame decisions, ask better questions, and understand the trade-offs."
      />
      <Section>
        <Container className="resource-groups">
          {resourceGroups.map((group) => (
            <section key={group.title} className="resource-group">
              <header>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </header>
              <div>
                {group.items.map((item) => (
                  <Reveal key={item.title} className="resource-item">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <ArrowLink href={item.href}>{item.label}</ArrowLink>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </Container>
      </Section>
      <Section className="resource-question">
        <Container>
          <div>
            <h2>Looking for a direct answer?</h2>
            <p>
              Our frequently asked questions explain how the fictional firm
              works, how fees are presented, and what this demonstration can
              and cannot provide.
            </p>
          </div>
          <Link className="button" href="/faqs">
            Browse FAQs
          </Link>
        </Container>
      </Section>
      <ConversationCta />
    </Page>
  );
}
