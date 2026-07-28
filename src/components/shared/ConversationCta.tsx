import { Container } from "@/components/layout/Container";
import { site } from "@/config/site";

interface ConversationCtaProps {
  title?: string;
  description?: string;
}

export function ConversationCta({
  title = "Begin with a clear conversation.",
  description = "Tell us what you are navigating. We will explain how we can help and where we may not be the right fit.",
}: ConversationCtaProps) {
  return (
    <section className="conversation-cta">
      <Container className="conversation-cta-grid">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="conversation-action">
          <a className="button button-light" href={`mailto:${site.contact.email}`}>
            Start a conversation
          </a>
          <span>Opens your email app</span>
        </div>
        <div className="conversation-detail">
          <span>Call</span>
          <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
        </div>
        <address className="conversation-detail">
          <span>Office</span>
          {site.contact.address.street}
          <br />
          {site.contact.address.city}, {site.contact.address.region}{" "}
          {site.contact.address.postalCode}
        </address>
      </Container>
    </section>
  );
}
