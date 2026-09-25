import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...["/", "/blog", "/kontakt"].map((route) => ({
      url: new URL(route, siteUrl).href,
    })),
    ...getAllPosts().map((post) => ({
      url: new URL(`/blog/${post.slug}`, siteUrl).href,
      lastModified: post.date,
    })),
  ];
}
