/**
 * Seed the existing hardcoded events into Sanity.
 *
 * Idempotent: uses deterministic document IDs (`event-<id>`) with createOrReplace,
 * so re-running updates the same documents instead of creating duplicates.
 *
 * NOTE: IDs use hyphens, NOT dots. A dot in a Sanity document ID (e.g. "event.foo")
 * makes it a path-segmented document, which is PRIVATE even in a public dataset and
 * invisible to anonymous (tokenless) reads. The public site reads without a token,
 * so dotted IDs would make events 404 on the live site. Hyphens match the existing
 * blogPost/author ID convention and stay publicly readable.
 *
 * Run with:  node --env-file=.env scripts/seed-events.mjs
 */
import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN. Set them in .env.');
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

/* The three events currently hardcoded in src/views/Events.jsx, with an added
   `startDate` (ISO) used for ordering and the home-page "next event" banner. */
const EVENTS = [
  {
    id: 'aila-ac26',
    status: 'upcoming',
    badge: 'National',
    badgeTone: 'blue',
    month: 'June 2026',
    name: 'AILA Annual Conference & Webcast',
    dates: 'June 17 – 20, 2026',
    startDate: '2026-06-17',
    location: 'San Diego, CA',
    venues: ['Marriott Marquis San Diego Marina', 'Manchester Grand Hyatt San Diego'],
    format: 'In-person & online webcast',
    topics: ['Family immigration', 'Business immigration', 'Removal defense'],
    special: [
      'Global Migration Forum - June 15–16',
      'Welcome Taco Party - June 17',
      'Saturday Night Party at the San Diego Zoo',
    ],
    website: 'https://www.aila.org/ac26',
    websiteLabel: 'AILA AC26 Portal',
  },
  {
    id: 'aila-ca26',
    status: 'upcoming',
    badge: 'Regional',
    badgeTone: 'ink',
    month: 'November 2026',
    name: 'AILA California Chapters Conference',
    dates: 'November 5 – 7, 2026',
    startDate: '2026-11-05',
    location: 'San Francisco, CA',
    venues: ['Hyatt Regency San Francisco Downtown-SOMA'],
    format: 'In-person & online webcast',
    topics: ['Ninth Circuit updates', 'Regional enforcement priorities', 'Compliance panels'],
    special: [],
    website: 'https://www.aila.org/shop/products/view/california-chapters-conference',
    websiteLabel: 'AILA CA Chapters Page',
  },
  {
    id: 'aila-ac25',
    status: 'past',
    badge: 'National',
    badgeTone: 'muted',
    month: 'June 2025',
    name: 'AILA Annual Conference & Webcast',
    dates: 'June 2025',
    startDate: '2025-06-01',
    location: 'Chicago, IL',
    venues: [],
    format: 'In-person & online webcast',
    topics: [],
    special: [],
    website: 'https://www.aila.org/ac25',
    websiteLabel: 'AILA AC25 Portal',
  },
];

async function seed() {
  console.log(`Seeding ${EVENTS.length} events into "${dataset}"...\n`);
  for (const { id, startDate, ...rest } of EVENTS) {
    const doc = {
      _id: `event-${id}`,
      _type: 'event',
      // Store startDate as a full ISO datetime (schema field is `datetime`).
      startDate: new Date(`${startDate}T00:00:00.000Z`).toISOString(),
      ...rest,
    };
    const res = await client.createOrReplace(doc);
    console.log(`  ✓ ${res._id}  —  ${res.name} (${res.status})`);
  }
  console.log('\nDone.');
}

seed().catch(err => {
  console.error('\nSeed failed:', err.message);
  process.exit(1);
});
