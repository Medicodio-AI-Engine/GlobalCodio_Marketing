import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/it-services',
  title: 'Services - Managed Immigration Technology Operations',
  description: 'GlobalCodio provides fully managed immigration technology services: CodioCMS implementation, AI agent deployment, platform migration from legacy systems, RFP response support, IT operations, and ongoing optimization. No internal IT team required.',
  keywords: ['immigration technology services', 'managed immigration services', 'immigration platform migration', 'immigration IT services', 'immigration software implementation', 'immigration managed services'],
  ogTitle: 'Managed Immigration Technology Services | GlobalCodio',
  ogDescription: 'Full-service immigration technology management: platform deployment, AI agents, migration from legacy CMS, and ongoing operations. Your firm focuses on cases; we run the technology.',
});

import Services from '../../src/views/Services';

export default function ItServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.itServices) }}
      />
      <Services />
    </>
  );
}
