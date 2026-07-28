import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { ConversationCta } from "@/components/shared/ConversationCta";
import { JsonLd } from "@/components/shared/JsonLd";
import { getInsight, insights } from "@/content/content";
import { site } from "@/config/site";
import { createMetadata } from "@/seo/createMetadata";
import { breadcrumbJsonLd, type JsonLdObject } from "@/seo/jsonLd";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) {
    return {};
  }

  return createMetadata({
    title: insight.title,
    description: insight.excerpt,
    canonical: `/insights/${insight.slug}`,
    image: insight.image,
    keywords: [insight.category.toLowerCase(), "financial planning"],
  });
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) {
    notFound();
  }

  const articleJsonLd: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    datePublished: new Date(insight.published).toISOString(),
    image: new URL(insight.image, site.url).toString(),
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: new URL(site.logo, site.url).toString(),
      },
    },
    mainEntityOfPage: new URL(`/insights/${insight.slug}`, site.url).toString(),
  };

  return (
    <Page>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Insights", href: "/insights" },
            { name: insight.title, href: `/insights/${insight.slug}` },
          ]),
          articleJsonLd,
        ]}
      />
      <article>
        <header className="article-header">
          <Container size="text">
            <p className="article-meta">
              {insight.category} <span>{insight.published}</span>{" "}
              <span>{insight.readTime}</span>
            </p>
            <h1>{insight.title}</h1>
            <p>{insight.excerpt}</p>
          </Container>
        </header>
        <Container className="article-hero-image">
          <Image
            src={insight.image}
            alt={insight.imageAlt}
            width={1440}
            height={820}
            priority
            sizes="(max-width: 767px) 100vw, 82rem"
          />
        </Container>
        <Section className="article-body-section">
          <Container size="text" className="article-body">
            <p className="article-introduction">{insight.introduction}</p>
            {insight.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
            <div className="article-disclosure">
              <p>
                This fictional publication is for demonstration and general
                educational purposes only. It is not personalized investment,
                tax, or legal advice.
              </p>
            </div>
            <ArrowLink href="/insights">Back to insights</ArrowLink>
          </Container>
        </Section>
      </article>
      <ConversationCta />
    </Page>
  );
}
