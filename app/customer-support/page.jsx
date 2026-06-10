import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/customer-support',
  title: 'Customer Support - GlobalCodio',
  description: 'Immigration-literate support from people who understand H-1Bs, I-140s, and USCIS deadlines. Whole-team onboarding, proactive customer success, and a dedicated CSM for larger accounts. Mon–Fri, 4am–5pm Pacific.',
  keywords: ['immigration software support', 'immigration case management support', 'GlobalCodio customer success', 'immigration tech onboarding', 'immigration platform support'],
  ogTitle: 'Customer Support | GlobalCodio',
  ogDescription: 'Support from people who actually know immigration. Whole-team onboarding, proactive check-ins, and domain-expert staff - not a generic helpdesk.',
});

import CustomerSupport from '../../src/views/CustomerSupport';

export default function CustomerSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.customerSupport) }}
      />
      <CustomerSupport />
    </>
  );
}
