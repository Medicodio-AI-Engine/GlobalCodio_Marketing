import { buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/free-tech-audit',
  title: 'Free Immigration Tech Audit - Find Cost & Revenue Leaks',
  description: 'In a free 30-minute audit, GlobalCodio reviews your immigration firm\'s technology, identifies gaps, estimates annual cost savings and unrecovered renewal revenue, and delivers a written report within 48 hours. No commitment. Founder-led audits available for larger firms.',
  keywords: ['free immigration tech audit', 'immigration technology assessment', 'immigration firm cost savings', 'renewal revenue audit', 'immigration software evaluation'],
});

import FreeTechAudit from '../../src/views/Audit';
export default FreeTechAudit;
