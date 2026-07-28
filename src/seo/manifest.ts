import type { MetadataRoute } from "next";

import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f3f5f2",
    theme_color: site.themeColor,
    icons: [
      {
        src: site.icon,
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: site.appleTouchIcon,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
