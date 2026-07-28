import { Container } from "@/components/layout/Container";
import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";
import { ConversationCta } from "@/components/shared/ConversationCta";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageIntro } from "@/components/shared/PageIntro";
import { faqs } from "@/content/content";
import { createMetadata } from "@/seo/createMetadata";

export const metadata = createMetadata({
  title: "Frequently Asked Questions",
  canonical: "/faqs",
  description:
    "Answers about Aurevia Capital's fictional clients, services, advisory model, fees, and important demonstration disclosures.",
});

export default function FaqsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Page>
      <JsonLd data={faqJsonLd} />
      <PageIntro
        eyebrow="FAQs"
        title="Straight answers, without the fine-print tone."
        description="A clear overview of who the fictional firm serves, how an engagement begins, and the limits of this demonstration."
      />
      <Section>
        <Container size="text" className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </Container>
      </Section>
      <ConversationCta />
    </Page>
  );
}
