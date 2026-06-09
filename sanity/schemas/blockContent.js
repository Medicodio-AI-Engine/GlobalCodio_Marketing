// Rich text block schema with per-paragraph font styling controls.
// Used as the body field type in the blogPost schema.

export const blockContent = {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      // Standard heading styles + normal paragraph
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      // Inline marks: standard + custom font controls
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          // Inline links
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: Rule =>
                  Rule.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
              },
              {
                name: 'blank',
                type: 'boolean',
                title: 'Open in new tab',
                initialValue: false,
              },
            ],
          },
          // Per-span font size override
          {
            name: 'fontSize',
            type: 'object',
            title: 'Font Size',
            fields: [
              {
                name: 'size',
                type: 'string',
                title: 'Size',
                options: {
                  list: [
                    { title: 'Small (13px)', value: 'sm' },
                    { title: 'Body (16px)', value: 'base' },
                    { title: 'Large (19px)', value: 'lg' },
                    { title: 'XL (22px)', value: 'xl' },
                    { title: 'Display (28px)', value: 'display' },
                  ],
                  layout: 'radio',
                },
              },
            ],
          },
          // Per-span font weight override
          {
            name: 'fontWeight',
            type: 'object',
            title: 'Font Weight',
            fields: [
              {
                name: 'weight',
                type: 'string',
                title: 'Weight',
                options: {
                  list: [
                    { title: 'Regular (400)', value: '400' },
                    { title: 'Medium (500)', value: '500' },
                    { title: 'Semibold (600)', value: '600' },
                    { title: 'Bold (700)', value: '700' },
                  ],
                  layout: 'radio',
                },
              },
            ],
          },
          // Per-span color override
          {
            name: 'textColor',
            type: 'object',
            title: 'Text Color',
            fields: [
              {
                name: 'color',
                type: 'string',
                title: 'Color',
                options: {
                  list: [
                    { title: 'Default (ink)', value: 'ink' },
                    { title: 'Muted', value: 'muted' },
                    { title: 'Blue', value: 'blue' },
                    { title: 'Blue gradient', value: 'grad-blue' },
                  ],
                  layout: 'radio',
                },
              },
            ],
          },
        ],
      },
    },
    // Inline images within the body
    {
      type: 'image',
      title: 'Image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          validation: Rule => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption (optional)',
        },
      ],
    },
    // Pull quote block
    {
      name: 'pullQuote',
      title: 'Pull Quote',
      type: 'object',
      fields: [
        {
          name: 'text',
          type: 'text',
          title: 'Quote text',
          rows: 3,
          validation: Rule => Rule.required(),
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution (optional)',
        },
      ],
      preview: {
        select: { title: 'text' },
        prepare: ({ title }) => ({ title: `" ${title?.slice(0, 60)}…"` }),
      },
    },
    // Callout / highlight box
    {
      name: 'callout',
      title: 'Callout Box',
      type: 'object',
      fields: [
        {
          name: 'text',
          type: 'text',
          title: 'Text',
          rows: 3,
          validation: Rule => Rule.required(),
        },
        {
          name: 'style',
          type: 'string',
          title: 'Style',
          options: {
            list: [
              { title: 'Blue (info)', value: 'blue' },
              { title: 'Surface (neutral)', value: 'surface' },
            ],
            layout: 'radio',
          },
          initialValue: 'blue',
        },
      ],
      preview: {
        select: { title: 'text', subtitle: 'style' },
      },
    },
  ],
};
