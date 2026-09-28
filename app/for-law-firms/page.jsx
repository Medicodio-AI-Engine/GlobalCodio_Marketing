import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/for-law-firms',
  title: 'Immigration Law Firm Software & Managed Services',
  description: 'CodioCMS, CodioForms, 10 AI agents, CodioOps and CodioNetwork for immigration law firms. 70% less case prep time, $50K–$300K recovered renewals a year.',
  keywords: ['immigration law firm software', 'immigration law firm technology', 'AI immigration law firm', 'immigration case management law firm', 'immigration firm AI agents', 'law firm immigration automation'],
  ogTitle: 'For Immigration Law Firms | GlobalCodio',
  ogDescription: 'The complete AI-powered technology operation for solo, mid-size, and enterprise immigration law firms. Built by the founder of INSZoom.',
});

import ForLawFirms from '../../src/views/Firms';

export default function ForLawFirmsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.forLawFirms) }}
      />
      <ForLawFirms />
    </>
  );
}
