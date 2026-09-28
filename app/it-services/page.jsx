import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/it-services',
  title: 'Managed Immigration Technology Services',
  description: 'Fully managed immigration tech: CodioCMS implementation, AI agent deployment, migration from legacy systems, RFP support and IT operations. No IT team needed.',
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
