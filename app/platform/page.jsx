import { PAGE_SCHEMAS } from '../../lib/seo.js';

export const metadata = {
  title: 'Platform - CodioCMS & CodioForms',
  description: 'CodioCMS is next-generation immigration case management software with native AI agents, five purpose-built portals, and global CodioForms for 180+ USCIS forms and multi-country practice. Built by the founder of INSZoom.',
  keywords: ['immigration case management software', 'CodioCMS', 'CodioForms', 'immigration forms automation', 'USCIS forms software', 'immigration platform', 'case management immigration law firm'],
  openGraph: {
    title: 'CodioCMS & CodioForms - Immigration Platform | GlobalCodio',
    description: 'Next-generation immigration case management software with native AI agents, five-portal architecture, and 180+ authority-synced immigration forms. Built by the founder of INSZoom.',
  },
};

import Platform from '../../src/views/Platform';

export default function PlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.platform) }}
      />
      <Platform />
    </>
  );
}
