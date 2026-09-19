import { defineCollection, z } from 'astro:content';

const vacatures = defineCollection({
  type: 'content',
  schema: z.object({
    titel: z.string(),
    functie: z.string(), // slug of the functie collection entry, e.g. "verzorgende-ig"
    regio: z.string(), // e.g. "Breda"
    uren: z.string(), // e.g. "24 - 32 uur"
    dienstverband: z.string().default('Loondienst'),
    samenvatting: z.string(),
    uitgelicht: z.boolean().default(false),
    gepubliceerd: z.date().default(() => new Date()),
  }),
});

const functies = defineCollection({
  type: 'content',
  schema: z.object({
    naam: z.string(),
    icoon: z.enum(['helpende', 'helpende-plus', 'verzorgende-ig', 'verpleegkundige', 'begeleider', 'assistent-begeleider']),
    omschrijving: z.string(),
    volgorde: z.number().default(0),
  }),
});

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    naam: z.string(),
    functie: z.string(),
    sterren: z.number().min(1).max(5).default(5),
    citaat: z.string(),
    volgorde: z.number().default(0),
  }),
});

export const collections = { vacatures, functies, reviews };
