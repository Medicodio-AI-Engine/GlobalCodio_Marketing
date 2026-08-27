import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/ai-agents',
  title: 'Codio AI Agents - Immigration AI Workforce',
  description: 'GlobalCodio\'s 10 specialized AI agents handle immigration case intake, document extraction, form preparation, deadline tracking, client communications, renewal detection, and business development. Purpose-built for immigration, managed end-to-end.',
  keywords: ['AI agents immigration', 'immigration automation', 'immigration AI software', 'immigration case automation', 'AI immigration agents', 'immigration workflow automation', 'USCIS forms AI'],
  ogTitle: 'Codio AI Agents - Immigration AI Workforce | GlobalCodio',
  ogDescription: '10 specialized AI agents purpose-built for immigration: intake, documents, forms, deadlines, client comms, renewals, and BD. Managed end-to-end by GlobalCodio.',
});

import AiAgents from '../../src/views/Agents';

export default function AiAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.aiAgents) }}
      />
      <AiAgents />
    </>
  );
}
