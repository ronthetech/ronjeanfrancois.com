import { defineCollection, z } from "astro:content"

export const collections = {
  blog: defineCollection({
    schema: z.object({
      layout: z.string(),
      title: z.string(),
      description: z.string(),
      date: z.date().transform((str) => new Date(str)),
      pubDate: z.string(),
      slug: z.string().optional(),
      heroImage: z.string().optional(),
      alt: z.string().optional(),
      // draft: z.boolean().default(false), if its not a draft, its publishable
      category: z.string(),
      tags: z.array(z.string()).optional(),
    }),
  }),
}
