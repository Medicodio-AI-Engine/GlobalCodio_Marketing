import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/events',
  title: 'Events - Meet GlobalCodio at AILA 2026 Conferences',
  description: 'Meet the GlobalCodio team at immigration industry events in 2026, including the AILA Annual Conference in San Diego (June 17-20, 2026) and the AILA California Chapters Conference in San Francisco (November 5-7, 2026).',
  keywords: ['AILA conference 2026', 'immigration conferences 2026', 'AILA Annual Conference San Diego', 'immigration technology events', 'GlobalCodio events'],
});

import Events from '../../src/views/Events';

export default function EventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.events) }}
      />
      <Events />
    </>
  );
}
