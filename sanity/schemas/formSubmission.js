export const formSubmission = {
  name: 'formSubmission',
  title: 'Form Submission',
  type: 'document',
  // Read-only in Studio - nobody edits these, they only review them
  __experimental_actions: ['update', 'publish', 'delete'],
  fieldsets: [
    {
      name: 'context',
      title: 'Lead Context (location & source)',
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    },
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'workEmail',
      title: 'Work Email',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'orgName',
      title: 'Organization Name',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
      readOnly: true,
    },
    {
      name: 'howHeard',
      title: 'How They Heard',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 5,
      readOnly: true,
    },
    // Internal CRM-style status field - the one thing editors CAN update
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'In Progress', value: 'in_progress' },
          { title: 'Closed', value: 'closed' },
        ],
        layout: 'radio',
      },
      initialValue: 'new',
    },
    {
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      rows: 4,
      description: 'Internal notes for follow-up. Not visible to the submitter.',
    },

    // ── Lead context — captured automatically, read-only ──────────────────────
    { name: 'locationCity', title: 'City (approx.)', type: 'string', readOnly: true, fieldset: 'context' },
    { name: 'locationRegion', title: 'Region (approx.)', type: 'string', readOnly: true, fieldset: 'context' },
    { name: 'locationCountry', title: 'Country (approx.)', type: 'string', readOnly: true, fieldset: 'context' },
    { name: 'timezone', title: 'Time Zone', type: 'string', readOnly: true, fieldset: 'context' },
    { name: 'utmSource', title: 'UTM Source', type: 'string', readOnly: true, fieldset: 'context' },
    { name: 'utmMedium', title: 'UTM Medium', type: 'string', readOnly: true, fieldset: 'context' },
    { name: 'utmCampaign', title: 'UTM Campaign', type: 'string', readOnly: true, fieldset: 'context' },
    { name: 'utmTerm', title: 'UTM Term', type: 'string', readOnly: true, fieldset: 'context' },
    { name: 'utmContent', title: 'UTM Content', type: 'string', readOnly: true, fieldset: 'context' },
    { name: 'referrer', title: 'Referrer', type: 'string', readOnly: true, fieldset: 'context' },
    { name: 'landingPage', title: 'Landing Page', type: 'string', readOnly: true, fieldset: 'context' },
    { name: 'submittedFrom', title: 'Submitted From', type: 'string', readOnly: true, fieldset: 'context' },
  ],

  orderings: [
    {
      title: 'Newest First',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],

  preview: {
    select: {
      title: 'fullName',
      subtitle: 'orgName',
      date: 'submittedAt',
      status: 'status',
    },
    prepare: ({ title, subtitle, date, status }) => ({
      title: title || 'Unknown',
      subtitle: `${subtitle ?? ''} · ${status ?? 'new'} · ${date ? new Date(date).toLocaleDateString() : ''}`,
    }),
  },
};
