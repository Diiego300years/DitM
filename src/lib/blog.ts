import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Source = {
  id: string;
  title: string;
  publisher: string;
  published: string;
  dataYear: string;
  url: string;
};
export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  sources: Source[];
  content: string;
  chart?: "ai-adoption";
};
const directory = path.join(process.cwd(), "content/blog");

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(
        fs.readFileSync(path.join(directory, file), "utf8"),
      );
      for (const key of [
        "title",
        "date",
        "description",
        "category",
        "seoTitle",
        "seoDescription",
      ]) {
        if (typeof data[key] !== "string" || !data[key])
          throw new Error(`Missing ${key} in ${file}`);
      }
      if (
        !/^\d{4}-\d{2}-\d{2}$/.test(data.date) ||
        Number.isNaN(Date.parse(data.date))
      )
        throw new Error(`Invalid date in ${file}`);
      if (!Array.isArray(data.sources))
        throw new Error(`Missing sources in ${file}`);
      for (const source of data.sources) {
        if (
          !["id", "title", "publisher", "published", "dataYear", "url"].every(
            (key) => typeof source[key] === "string" && source[key],
          )
        )
          throw new Error(`Invalid source in ${file}`);
        if (!source.url.startsWith("https://"))
          throw new Error(`Source must use HTTPS in ${file}`);
      }
      return { ...data, slug: file.replace(/\.md$/, ""), content } as Post;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}
// Markdown is trusted editorial content committed to this repository, never user input.
export function renderMarkdown(content: string) {
  return marked.parse(content, { async: false, gfm: true });
}
