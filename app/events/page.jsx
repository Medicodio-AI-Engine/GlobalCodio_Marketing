import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/events',
  title: 'Events - Meet Us at AILA 2026 Conferences',
  description: 'Meet GlobalCodio at AILA 2026: the Annual Conference in San Diego (June 17-20) and the California Chapters Conference in San Francisco (Nov 5-7).',
  keywords: ['AILA conference 2026', 'immigration conferences 2026', 'AILA Annual Conference San Diego', 'immigration technology events', 'GlobalCodio events'],
});
export const revalidate = 60; // ISR - revalidate every 60 seconds

import { getAllEvents } from '../../lib/sanity';
import Events from '../../src/views/Events';

export default async function EventsPage() {
  let events = [];
  try {
    events = await getAllEvents();
  } catch {
    // Sanity not reachable at build time - fall through with an empty list.
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.events) }}
      />
      <Events sanityEvents={events} />
    </>
  );
}
