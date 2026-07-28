import type { MetadataRoute } from "next";

import { insights, services } from "@/content/content";
import { seoDefaults } from "./defaults";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-28");
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/leadership", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/insights", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/resources", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/faqs", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${seoDefaults.url}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: `${seoDefaults.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...insights.map((insight) => ({
      url: `${seoDefaults.url}/insights/${insight.slug}`,
      lastModified: new Date(insight.published),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
