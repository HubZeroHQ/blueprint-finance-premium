import { site } from "@/config/site";

export type JsonLdObject = Record<string, unknown>;

/**
 * Organization schema applies to every HubZero blueprint regardless of
 * architecture. Architecture-specific schema (Product, Article, LocalBusiness,
 * etc.) belongs in the blueprint that needs it, not here.
 */
export function organizationJsonLd(
  overrides: JsonLdObject = {}
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: new URL(site.logo, site.url).toString(),
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address.street,
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.region,
      postalCode: site.contact.address.postalCode,
      addressCountry: site.contact.address.country,
    },
    ...overrides,
  };
}

export function financialServiceJsonLd(): JsonLdObject {
  return organizationJsonLd({
    "@type": "FinancialService",
    description: site.description,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  });
}

export function websiteJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; href: string }>
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.href, site.url).toString(),
    })),
  };
}
