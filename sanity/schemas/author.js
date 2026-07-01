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
      name: 'showAuthorSection',
      title: "Show \"About the Author\" section",
      type: 'boolean',
      description: 'When off, the "About the Author" section is hidden on blog posts by this author. It is also hidden automatically if no bio is set.',
      initialValue: true,
    },
    {
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      rows: 4,
      description: 'Shown in the "About the Author" section at the end of each blog post. Leave blank to hide the section.',
      validation: Rule => Rule.max(400),
    },
    {
      name: 'link',
      title: 'Author Link (optional)',
      type: 'url',
      description: 'Optional "Learn more" link shown in the author section. Left blank, no link is shown.',
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'designation', media: 'image' },
  },
};
