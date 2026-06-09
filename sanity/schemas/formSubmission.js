export const formSubmission = {
  name: 'formSubmission',
  title: 'Form Submission',
  type: 'document',
  // Read-only in Studio - nobody edits these, they only review them
  __experimental_actions: ['update', 'publish', 'delete'],
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
