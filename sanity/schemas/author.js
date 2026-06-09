export const author = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Author Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'designation',
      title: 'Designation / Title',
      type: 'string',
      description: 'e.g. Founder & CEO, GlobalCodio',
      validation: Rule => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      rows: 4,
      description: 'Shown in the author section at the end of each blog post.',
      validation: Rule => Rule.required().max(400),
    },
    {
      name: 'link',
      title: 'Author Link (optional)',
      type: 'url',
      description: 'Defaults to /letter-from-the-founder if left blank.',
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'designation', media: 'image' },
  },
};
