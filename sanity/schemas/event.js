export const event = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    // ── Core metadata ──────────────────────────────────────
    {
      name: 'name',
      title: 'Event Name',
      type: 'string',
      validation: Rule => Rule.required().max(160),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Past', value: 'past' },
        ],
        layout: 'radio',
      },
      initialValue: 'upcoming',
      validation: Rule => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      description:
        'Used to order events and to pick the next upcoming event for the home-page banner.',
      validation: Rule => Rule.required(),
      options: { dateFormat: 'MMMM D, YYYY' },
    },

    // ── Display copy ────────────────────────────────────────
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
      description: 'Short label shown on the card and banner, e.g. "National" or "Regional".',
      validation: Rule => Rule.required(),
    },
    {
      name: 'badgeTone',
      title: 'Badge Tone',
      type: 'string',
      options: {
        list: [
          { title: 'Blue', value: 'blue' },
          { title: 'Ink', value: 'ink' },
          { title: 'Muted (past events)', value: 'muted' },
        ],
        layout: 'radio',
      },
      initialValue: 'blue',
      validation: Rule => Rule.required(),
    },
    {
      name: 'month',
      title: 'Month Label',
      type: 'string',
      description: 'Human-readable month shown on the card, e.g. "June 2026".',
      validation: Rule => Rule.required(),
    },
    {
      name: 'dates',
      title: 'Dates Label',
      type: 'string',
      description: 'Human-readable date range, e.g. "June 17 – 20, 2026".',
      validation: Rule => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City, state — e.g. "San Diego, CA".',
      validation: Rule => Rule.required(),
    },
    {
      name: 'format',
      title: 'Format',
      type: 'string',
      description: 'e.g. "In-person & online webcast".',
    },
    {
      name: 'booth',
      title: 'Booth',
      type: 'string',
      description: 'Optional booth number or location, e.g. "Booth 412".',
    },

    // ── Rich card sections ─────────────────────────────────
    {
      name: 'venues',
      title: 'Venues',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'special',
      title: 'Special Events',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      description:
        'Photos shown on the right side of the event card. One image displays statically; multiple images auto-rotate every 3 seconds.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description: 'Describe the image for accessibility.',
            },
          ],
        },
      ],
    },

    // ── Link ───────────────────────────────────────────────
    {
      name: 'website',
      title: 'Website URL',
      type: 'url',
      validation: Rule => Rule.required(),
    },
    {
      name: 'websiteLabel',
      title: 'Website Link Label',
      type: 'string',
      description: 'Text for the outbound link, e.g. "AILA AC26 Portal".',
      validation: Rule => Rule.required(),
    },
  ],

  // ── Orderings in Studio ────────────────────────────────
  orderings: [
    {
      title: 'Start Date, Soonest First',
      name: 'startDateAsc',
      by: [{ field: 'startDate', direction: 'asc' }],
    },
    {
      title: 'Start Date, Latest First',
      name: 'startDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
  ],

  preview: {
    select: {
      title: 'name',
      status: 'status',
      dates: 'dates',
      location: 'location',
    },
    prepare: ({ title, status, dates, location }) => ({
      title,
      subtitle: `${status === 'past' ? '[Past] ' : ''}${dates ?? ''} · ${location ?? ''}`,
    }),
  },
};
