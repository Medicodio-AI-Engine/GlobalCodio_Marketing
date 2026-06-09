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
