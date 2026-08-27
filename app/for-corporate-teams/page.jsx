import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/for-corporate-teams',
  title: 'For Corporate Immigration Teams - Global Mobility Platform',
  description: 'GlobalCodio gives corporate mobility, HR, and legal operations teams a complete immigration technology operation: employee visa pipeline dashboards, immigration health scores, multi-firm performance comparison, and AI agents that scale without headcount.',
  keywords: ['corporate immigration software', 'corporate mobility platform', 'employee immigration management', 'HR immigration portal', 'corporate immigration AI', 'global mobility software', 'corporate visa management'],
  ogTitle: 'For Corporate Immigration Teams | GlobalCodio',
  ogDescription: 'Complete immigration technology for in-house mobility, HR, and legal operations teams. Pipeline visibility, AI automation, and global scale without adding headcount.',
});

import ForCorporate from '../../src/views/Corporate';

export default function ForCorporatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.forCorporateTeams) }}
      />
      <ForCorporate />
    </>
  );
}
