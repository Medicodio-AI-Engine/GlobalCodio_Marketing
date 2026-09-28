import { buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/free-tech-audit',
  title: 'Free Immigration Tech Audit',
  description: 'A free 30-minute review of your firm\'s technology: gaps, estimated annual savings and unrecovered renewal revenue, with a written report in 48 hours.',
  keywords: ['free immigration tech audit', 'immigration technology assessment', 'immigration firm cost savings', 'renewal revenue audit', 'immigration software evaluation'],
});

import FreeTechAudit from '../../src/views/Audit';
export default FreeTechAudit;
