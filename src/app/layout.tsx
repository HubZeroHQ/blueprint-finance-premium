import "./globals.css";

import { metadata } from "@/config/metadata";
import { AppProvider } from "@/providers/AppProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/shared/JsonLd";
import { SkipLink } from "@/components/shared/SkipLink";
import {
  financialServiceJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/seo/jsonLd";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" data-scroll-behavior="smooth">
      <head>
        <JsonLd
          data={[
            organizationJsonLd(),
            financialServiceJsonLd(),
            websiteJsonLd(),
          ]}
        />
      </head>
      <body>
        <SkipLink />
        <AppProvider>
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
