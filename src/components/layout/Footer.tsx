import Link from "next/link";

import { Wordmark } from "@/components/brand/Wordmark";
import { Container } from "@/components/layout/Container";
import { footerNavigation } from "@/config/navigation";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-primary">
          <div className="footer-brand">
            <Wordmark inverted />
            <p>
              Independent wealth management and investment advisory for
              consequential decisions.
            </p>
          </div>
          <div className="footer-nav-groups">
            <FooterGroup title="Firm" items={footerNavigation.firm} />
            <FooterGroup title="Expertise" items={footerNavigation.expertise} />
            <FooterGroup title="Explore" items={footerNavigation.resources} />
          </div>
        </div>
        <div className="footer-contact">
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>
          <address>
            {site.contact.address.street}
            <br />
            {site.contact.address.city}, {site.contact.address.region}{" "}
            {site.contact.address.postalCode}
          </address>
        </div>
        <div className="footer-legal">
          <p>
            Aurevia Capital and all people, services, and content shown are
            fictional. A HubZero Blueprint demonstration.
          </p>
          <div>
            {footerNavigation.legal.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterGroup({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
