import { PAGE_SCHEMAS } from '../../lib/seo.js';

export const metadata = {
  title: 'For Immigration Law Firms - AI Platform & Managed Services',
  description: 'GlobalCodio gives immigration law firms a complete AI-powered technology operation: CodioCMS, CodioForms, 10 AI agents, CodioOps managed services, and CodioNetwork. 70% less case prep time. $50K–$300K recovered renewal revenue per year.',
  keywords: ['immigration law firm software', 'immigration law firm technology', 'AI immigration law firm', 'immigration case management law firm', 'immigration firm AI agents', 'law firm immigration automation'],
  openGraph: {
    title: 'For Immigration Law Firms | GlobalCodio',
    description: 'The complete AI-powered technology operation for solo, mid-size, and enterprise immigration law firms. Built by the founder of INSZoom.',
  },
};

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
