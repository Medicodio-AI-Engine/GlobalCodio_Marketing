import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/security',
  title: 'Security & Compliance - SOC 2 Type II',
  description: 'SOC 2 Type II examined, GDPR and HIPAA-ready. A product of Medicodio Inc. (ISO 27001 certified). AES-256 encryption, audit logs, ABA-aligned AI governance.',
  keywords: ['immigration software security', 'SOC 2 immigration platform', 'HIPAA immigration software', 'ISO 27001 legal software', 'immigration data security', 'attorney-client privilege AI', 'immigration compliance software'],
  ogTitle: 'Security & Compliance | GlobalCodio',
  ogDescription: 'SOC 2 Type II examined, GDPR and HIPAA-ready, ISO 27001 certified at the Medicodio Inc. group level. Enterprise-grade security built for immigration law firms handling sensitive client data.',
});

import Security from '../../src/views/Security';

export default function SecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.security) }}
      />
      <Security />
    </>
  );
}
