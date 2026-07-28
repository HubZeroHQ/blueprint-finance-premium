import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { ConversationCta } from "@/components/shared/ConversationCta";
import { JsonLd } from "@/components/shared/JsonLd";
import { Reveal } from "@/components/shared/Reveal";
import { getInsight, getService, services } from "@/content/content";
import { createMetadata } from "@/seo/createMetadata";
import { breadcrumbJsonLd } from "@/seo/jsonLd";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: service.title,
    description: service.summary,
    canonical: `/services/${service.slug}`,
    keywords: [service.title.toLowerCase(), "financial advisory"],
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedInsight = getInsight(service.relatedInsight);

  return (
    <Page>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${service.slug}` },
        ])}
      />
      <section className="service-hero">
        <Container className="service-hero-grid">
          <Reveal className="service-hero-copy">
            <p className="eyebrow">Aurevia services</p>
            <h1>{service.title}</h1>
            <p className="service-hero-promise">{service.promise}</p>
            <p>{service.audience}</p>
            <ArrowLink href="/contact">Start a conversation</ArrowLink>
          </Reveal>
          <Reveal className="service-hero-media">
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={1000}
              height={760}
              priority
              sizes="(max-width: 767px) 100vw, 52vw"
            />
          </Reveal>
        </Container>
      </section>
      <Section>
        <Container>
          <div className="section-heading">
            <h2>A coordinated scope, shaped around the mandate.</h2>
            <p>{service.summary}</p>
          </div>
          <div className="capability-grid">
            {service.capabilities.map((capability) => (
              <Reveal key={capability.title} className="capability-item">
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="process-section">
        <Container>
          <div className="section-heading">
            <h2>How the work moves forward.</h2>
          </div>
          <ol className="process-list">
            {service.process.map((item) => (
              <Reveal key={item.title}>
                <li>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>
      {relatedInsight ? (
        <Section className="related-insight">
          <Container className="related-insight-grid">
            <div>
              <p className="eyebrow">Related perspective</p>
              <h2>{relatedInsight.title}</h2>
              <p>{relatedInsight.excerpt}</p>
              <ArrowLink href={`/insights/${relatedInsight.slug}`}>
                Read insight
              </ArrowLink>
            </div>
            <Image
              src={relatedInsight.image}
              alt={relatedInsight.imageAlt}
              width={900}
              height={540}
              sizes="(max-width: 767px) 100vw, 48vw"
            />
          </Container>
        </Section>
      ) : null}
      <ConversationCta />
    </Page>
  );
}
