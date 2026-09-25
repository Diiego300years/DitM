import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  const preview = process.env.VERCEL_ENV === "preview";
  return {
    rules: {
      userAgent: "*",
      ...(preview ? { disallow: "/" } : { allow: "/" }),
    },
    sitemap: new URL("/sitemap.xml", siteUrl).href,
  };
}
