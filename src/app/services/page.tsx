import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { ConversationCta } from "@/components/shared/ConversationCta";
import { PageIntro } from "@/components/shared/PageIntro";
import { Reveal } from "@/components/shared/Reveal";
import { services } from "@/content/content";
import { createMetadata } from "@/seo/createMetadata";

export const metadata = createMetadata({
  title: "Services",
  canonical: "/services",
  description:
    "Explore private wealth management, investment advisory, retirement planning, family office, and institutional advisory services.",
  keywords: [
    "wealth management services",
    "investment advisory services",
    "family office services",
  ],
});

export default function ServicesPage() {
  return (
    <Page>
      <PageIntro
        eyebrow="Services"
        title="Advice connected across every important decision."
        description="Each engagement is built around a clear mandate, then coordinated across investments, planning, governance, and the professionals already around you."
      />
      <Section>
        <Container className="service-index">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              className="service-index-item"
              data-image-right={index % 2 === 1}
            >
              <Link
                href={`/services/${service.slug}`}
                className="service-index-media"
                aria-label={`Explore ${service.title}`}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={900}
                  height={660}
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </Link>
              <div className="service-index-copy">
                <h2>{service.title}</h2>
                <p className="service-promise">{service.promise}</p>
                <p>{service.summary}</p>
                <ArrowLink href={`/services/${service.slug}`}>
                  Explore {service.shortTitle}
                </ArrowLink>
              </div>
            </Reveal>
          ))}
        </Container>
      </Section>
      <ConversationCta
        title="Not sure where to begin?"
        description="A first conversation can clarify the decision in front of you and the kind of support it requires."
      />
    </Page>
  );
}
