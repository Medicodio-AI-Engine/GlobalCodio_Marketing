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
