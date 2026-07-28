import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";
import { ArrowLink } from "@/components/shared/ArrowLink";
import { ConversationCta } from "@/components/shared/ConversationCta";
import { Reveal } from "@/components/shared/Reveal";
import { insights, services, testimonials, values } from "@/content/content";
import { createMetadata } from "@/seo/createMetadata";

export const metadata = createMetadata({
  canonical: "/",
  description:
    "Aurevia Capital provides independent wealth management, investment advisory, retirement planning, and family office services.",
  keywords: [
    "wealth management",
    "investment advisory",
    "financial planning",
    "family office services",
  ],
});

export default function HomePage() {
  const leadInsight = insights[0];

  return (
    <Page>
      <section className="home-hero">
        <Container className="home-hero-grid">
          <Reveal className="home-hero-copy">
            <p className="eyebrow">Independent advice. Enduring perspective.</p>
            <h1>Clarity for consequential wealth.</h1>
            <p className="home-hero-description">
              We align investments, planning, and governance around the life
              you intend to build.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button">
                Start a conversation
              </Link>
              <ArrowLink href="/about">Our approach</ArrowLink>
            </div>
          </Reveal>
          <Reveal className="home-hero-media" threshold={0.2}>
            <Image
              src="/images/aurevia-hero.webp"
              alt="A fictional Aurevia advisor and client reviewing a long-term financial plan"
              width={960}
              height={1200}
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </Reveal>
        </Container>
        <Container className="hero-proof">
          <p>Fiduciary by design</p>
          <span aria-hidden="true" />
          <p>Independent advice aligned solely with your interests.</p>
        </Container>
      </section>

      <Section className="approach-section">
        <Container>
          <Reveal className="statement-block">
            <p>
              Wealth becomes more useful when every decision is connected to a
              clear purpose.
            </p>
            <ArrowLink href="/about">How we advise</ArrowLink>
          </Reveal>
          <div className="value-grid">
            {values.map((value) => (
              <Reveal key={value.title} className="value-item">
                <h2>{value.title}</h2>
                <p>{value.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="services-feature">
        <Container>
          <div className="section-heading section-heading-centered">
            <h2>One view of your whole financial life.</h2>
            <p>
              Advice works better when investments, planning, tax strategy,
              estate planning, and family decisions are considered together.
            </p>
          </div>
          <div className="services-asymmetric">
            <Reveal className="featured-service">
              <Image
                src={services[0].image}
                alt={services[0].imageAlt}
                width={900}
                height={660}
                sizes="(max-width: 767px) 100vw, 50vw"
              />
              <h3>{services[0].title}</h3>
              <p>{services[0].summary}</p>
              <ArrowLink href={`/services/${services[0].slug}`}>
                Explore service
              </ArrowLink>
            </Reveal>
            <div className="service-list">
              {services.slice(1).map((service) => (
                <Reveal key={service.slug} className="service-list-item">
                  <Link href={`/services/${service.slug}`}>
                    <span>{service.title}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <p>{service.summary}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="section-action">
            <Link href="/services" className="button">
              Explore our services
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="client-perspective">
        <Container className="quote-layout">
          <div className="quote-intro">
            <h2>Advice that makes complexity feel manageable.</h2>
            <p>
              Every relationship begins with listening, then turns complexity
              into an understandable set of decisions.
            </p>
          </div>
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.name}>
              <blockquote>
                <p>“{testimonial.quote}”</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.context}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </Container>
      </Section>

      <Section className="insights-feature">
        <Container>
          <div className="section-heading">
            <h2>Perspective for decisions that outlast a market cycle.</h2>
            <p>
              Clear thinking on investing, planning, governance, and the
              choices that connect them.
            </p>
          </div>
          <div className="insights-layout">
            <Reveal className="lead-insight">
              <Link href={`/insights/${leadInsight.slug}`}>
                <Image
                  src={leadInsight.image}
                  alt={leadInsight.imageAlt}
                  width={1000}
                  height={600}
                  sizes="(max-width: 767px) 100vw, 62vw"
                />
                <span>{leadInsight.category}</span>
                <h3>{leadInsight.title}</h3>
              </Link>
            </Reveal>
            <div className="secondary-insights">
              {insights.slice(1).map((insight) => (
                <Reveal key={insight.slug}>
                  <article>
                    <h3>
                      <Link href={`/insights/${insight.slug}`}>
                        {insight.title}
                      </Link>
                    </h3>
                    <p>{insight.excerpt}</p>
                    <ArrowLink href={`/insights/${insight.slug}`}>
                      Read insight
                    </ArrowLink>
                  </article>
                </Reveal>
              ))}
              <ArrowLink href="/insights">View all insights</ArrowLink>
            </div>
          </div>
          <div className="resource-strip">
            <ArrowLink href="/resources">2026 planning guide</ArrowLink>
            <ArrowLink href="/faqs">Frequently asked questions</ArrowLink>
            <ArrowLink href="/resources">Family governance checklist</ArrowLink>
          </div>
        </Container>
      </Section>

      <ConversationCta />
    </Page>
  );
}
