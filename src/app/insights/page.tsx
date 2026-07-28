import Image from "next/image";
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
  title: "Insights",
  canonical: "/insights",
  description:
    "Read Aurevia Capital's fictional perspectives on investing, founder liquidity, family governance, and long-term financial planning.",
  keywords: [
    "investment insights",
    "wealth planning articles",
    "family governance",
  ],
});

export default function InsightsPage() {
  const [lead, ...remaining] = insights;

  return (
    <Page>
      <PageIntro
        eyebrow="Insights"
        title="Clear thinking for consequential decisions."
        description="Practical perspective on markets, planning, governance, and the choices that connect capital with purpose."
      />
      <Section>
        <Container>
          <Reveal>
            <article className="insight-lead">
              <Link href={`/insights/${lead.slug}`} className="insight-lead-media">
                <Image
                  src={lead.image}
                  alt={lead.imageAlt}
                  width={1200}
                  height={720}
                  priority
                  sizes="(max-width: 767px) 100vw, 62vw"
                />
              </Link>
              <div className="insight-lead-copy">
                <p className="article-meta">
                  {lead.category} <span>{lead.published}</span>
                </p>
                <h2>
                  <Link href={`/insights/${lead.slug}`}>{lead.title}</Link>
                </h2>
                <p>{lead.excerpt}</p>
                <ArrowLink href={`/insights/${lead.slug}`}>
                  Read insight
                </ArrowLink>
              </div>
            </article>
          </Reveal>
          <div className="insight-index">
            {remaining.map((insight) => (
              <Reveal key={insight.slug}>
                <article>
                  <Image
                    src={insight.image}
                    alt={insight.imageAlt}
                    width={800}
                    height={480}
                    sizes="(max-width: 767px) 100vw, 42vw"
                  />
                  <p className="article-meta">
                    {insight.category} <span>{insight.published}</span>
                  </p>
                  <h2>
                    <Link href={`/insights/${insight.slug}`}>
                      {insight.title}
                    </Link>
                  </h2>
                  <p>{insight.excerpt}</p>
                  <ArrowLink href={`/insights/${insight.slug}`}>
                    Read insight
                  </ArrowLink>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <ConversationCta
        title="Put the perspective into practice."
        description="A conversation can turn a broad concern into a defined decision and a practical next step."
      />
    </Page>
  );
}
