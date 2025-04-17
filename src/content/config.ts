import { defineCollection, z } from 'astro:content';

// Define the schema for pages
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    layout: z.string().default('Layout'),
    sections: z.array(z.string()).optional(),
    hero: z.object({
      title: z.string(),
      description: z.string(),
      ctaText: z.string().optional(),
      ctaLink: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
  }),
});

// Define the schema for sections
const sectionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    content: z.any(),
  }),
});

// Define the schema for global content
const globalsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    navigation: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })),
    footer: z.object({
      copyright: z.string(),
      links: z.array(z.object({
        label: z.string(),
        url: z.string(),
      })).optional(),
    }),
    site: z.object({
      title: z.string(),
      description: z.string(),
      logo: z.string().optional(),
    }),
  }),
});

export const collections = {
  'pages': pagesCollection,
  'sections': sectionsCollection,
  'globals': globalsCollection,
}; 