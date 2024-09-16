import { MetadataRoute } from "next";
import posts from "@/data/posts.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitesSitemap: MetadataRoute.Sitemap = posts.map(({ slug }) => ({
    url: `https://lenaptzk.com/blog/${slug}`,
  }));

  return [
    {
      url: `https://lenaptzk.com`,
    },
    {
      url: `https://lenaptzk.com/portfolio`,
    },
    {
      url: `https://lenaptzk.com/blog`,
    },
    ...sitesSitemap,
  ];
}
