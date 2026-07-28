import type { Metadata } from "next";

import { seoDefaults } from "./defaults";

interface CreateMetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  keywords?: string[];
}

export function createMetadata({
  title,
  description,
  image = "/og.png",
  canonical,
  keywords = [],
}: CreateMetadataOptions = {}): Metadata {
  const metadataTitle = title ?? seoDefaults.title;
  const socialTitle = title
    ? `${title} | ${seoDefaults.siteName}`
    : seoDefaults.title;

  const pageDescription =
    description ?? seoDefaults.description;

  const url = canonical
    ? new URL(canonical, seoDefaults.url).toString()
    : seoDefaults.url;

  return {
    title: metadataTitle,

    description: pageDescription,

    keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: seoDefaults.type,
      locale: seoDefaults.locale,
      url,
      siteName: seoDefaults.siteName,
      title: socialTitle,
      description: pageDescription,
      images: [
        {
          url: image,
        },
      ],
    },

    twitter: {
      card: seoDefaults.twitterCard,
      title: socialTitle,
      description: pageDescription,
      images: [image],
    },
  };
}
