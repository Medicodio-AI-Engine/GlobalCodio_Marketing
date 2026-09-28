import { RELATED_PAGES } from '../../lib/relatedPages.js';

export const blogPost = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    // ── Core metadata ──────────────────────────────────────
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().max(120),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Product Updates', value: 'Product Updates' },
          { title: 'Immigration Tech', value: 'Immigration Tech' },
          { title: 'Guides', value: 'Guides' },
          { title: 'Case Studies', value: 'Case Studies' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Shown in blog cards and as the lead italic line in the article.',
      validation: Rule => Rule.required().max(300),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: Rule => Rule.required(),
      options: { dateFormat: 'MMMM D, YYYY' },
    },
    {
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(60),
    },

    // ── Media ──────────────────────────────────────────────
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          validation: Rule => Rule.required(),
        },
      ],
    },

    // ── Author (reference to reusable Author document) ─────
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: Rule => Rule.required(),
    },

    // ── Rich body content ──────────────────────────────────
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: 'Full article content. Use the annotation toolbar for per-span font size, weight, and color controls.',
    },

    // ── Search & linking ───────────────────────────────────
    // The headline and excerpt stay as written; these give Google a short
    // version. The site appends " | GlobalCodio" to the SEO title itself.
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Shown in Google results instead of the headline. Aim for 45 characters or fewer - " | GlobalCodio" is added automatically. Falls back to the Title.',
      validation: Rule => Rule.max(50).warning('Over 50 characters - Google will cut it off.'),
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      description: 'Shown under the title in Google results. 140-155 characters. Falls back to the Excerpt.',
      validation: Rule => Rule.max(160).warning('Over 160 characters - Google will cut it off.'),
    },
    {
      name: 'relatedPages',
      title: 'Related Product Pages',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: Object.entries(RELATED_PAGES).map(([value, { label }]) => ({ title: label, value })),
      },
      description: 'Pick 2-3 product pages this post leads readers to. Shown as "Where GlobalCodio fits" at the end of the post. Defaults to Platform, AI Agents and For Law Firms.',
      validation: Rule => Rule.max(3).unique(),
    },
  ],

  // ── Orderings in Studio ────────────────────────────────
  orderings: [
    {
      title: 'Published Date, New → Old',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'featuredImage',
      authorName: 'author.name',
    },
    prepare: ({ title, subtitle, media, authorName }) => ({
      title,
      subtitle: `${subtitle ?? ''} · ${authorName ?? ''}`,
      media,
    }),
  },
};
