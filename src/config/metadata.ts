import type { Metadata } from "next";

import { site } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  applicationName: site.name,

  authors: [
    {
      name: site.author.name,
      url: site.author.url,
    },
  ],

  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
    images: [
      {
        url: site.openGraphImage,
        width: 1200,
        height: 630,
        alt: `${site.name}: ${site.tagline}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.openGraphImage],
  },
  icons: {
    icon: site.icon,
    apple: site.appleTouchIcon,
  },
};
