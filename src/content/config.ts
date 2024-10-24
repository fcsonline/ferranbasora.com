import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    pubDate: z.coerce.date(),
    canonical: z.string().optional(),
    thumbnail: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    pubDate: z.coerce.date(),
    repository: z.string(),
  }),
});

export const collections = { posts, projects };
