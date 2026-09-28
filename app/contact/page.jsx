import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/contact',
  title: 'Contact Us - Book a Demo or Free Tech Audit',
  description: 'Book a demo, request a free 30-minute tech audit, or ask about the platform. Offices in San Ramon, CA and Bangalore. We reply within one business day.',
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
