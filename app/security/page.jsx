import { PAGE_SCHEMAS } from '../../lib/seo.js';

export const metadata = {
  title: 'Security & Compliance - SOC 2 Type II, ISO 27001, HIPAA',
  description: 'GlobalCodio is SOC 2 Type II certified, ISO 27001 certified, GDPR and HIPAA-ready. AES-256 encryption, immutable audit logs, ABA-aligned AI governance, and attorney-client privilege safeguards. Built for immigration law firm compliance requirements.',
  keywords: ['immigration software security', 'SOC 2 immigration platform', 'HIPAA immigration software', 'ISO 27001 legal software', 'immigration data security', 'attorney-client privilege AI', 'immigration compliance software'],
  openGraph: {
    title: 'Security & Compliance | GlobalCodio',
    description: 'SOC 2 Type II, ISO 27001, GDPR, HIPAA-ready. Enterprise-grade security built for immigration law firms handling sensitive client data.',
  },
};

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
