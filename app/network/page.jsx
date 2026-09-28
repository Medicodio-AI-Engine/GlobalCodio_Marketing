import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/network',
  title: 'CodioNetwork - Immigration Service Providers',
  description: 'A curated network of certified immigration providers: translators in 40+ languages, USCIS-approved physicians, apostille services and foreign attorneys.',
  keywords: ['immigration service provider network', 'immigration translators', 'USCIS immigration physicians', 'CodioNetwork', 'immigration apostille service', 'foreign immigration attorneys', 'immigration vendor management'],
  ogTitle: 'CodioNetwork - Global Immigration Service Network | GlobalCodio',
  ogDescription: 'Curated network of certified translators, physicians, foreign attorneys, and apostille services - coordinated through CodioCMS with structured workflows and field-level confidentiality.',
});

import CodioNetwork from '../../src/views/Network';

export default function NetworkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.network) }}
      />
      <CodioNetwork />
    </>
  );
}
