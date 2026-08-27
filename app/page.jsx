import { buildPageMetadata } from '../lib/seo.js';

/* Title, description, OG and Twitter cards are inherited from app/layout.jsx.
   This exists so the homepage declares its own canonical - without it, every
   UTM-tagged variant of `/` (the LinkedIn distribution links, in particular)
   is a duplicate candidate with no declared preferred URL. */
export const metadata = buildPageMetadata({ path: '/' });

export const revalidate = 60; // ISR - revalidate every 60 seconds

import { getNextEvent } from '../lib/sanity';
import Home from '../src/views/Home';

export default async function HomePage() {
  let nextEvent = null;
  try {
    nextEvent = await getNextEvent();
  } catch {
    // Sanity not reachable at build time - EventBanner renders nothing when null.
  }
  return <Home nextEvent={nextEvent} />;
}
