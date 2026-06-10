import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/contact',
  title: 'Contact GlobalCodio - Book a Demo or Free Tech Audit',
  description: 'Talk to GlobalCodio about a fully managed immigration technology operation. Book a demo, request a free 30-minute tech audit, or ask about the platform. Offices in San Ramon, California and Bangalore, India. We reply within one business day.',
  keywords: ['contact GlobalCodio', 'immigration software demo', 'immigration technology consultation', 'GlobalCodio sales', 'book immigration platform demo'],
});

import Contact from '../../src/views/Contact';

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.contact) }}
      />
      <Contact />
    </>
  );
}
