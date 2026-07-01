import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { EVENT_BANNER_LEAD_DAYS } from './events.js';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

// Read-only client (CDN) - used for all page data fetching
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Write client - server-side only, never shipped to the browser.
// SANITY_API_TOKEN must be an Editor-role token. Set it in .env (never prefix with NEXT_PUBLIC_).
const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// ── Form submissions ──────────────────────────────────────────────────────────

export async function saveFormSubmission(data) {
  const ctx = data.context || {};
  return writeClient.create({
    _type: 'formSubmission',
    submittedAt: new Date().toISOString(),
    fullName: data.fullName,
    workEmail: data.workEmail,
    orgName: data.orgName,
    website: data.website,
    howHeard: data.howHeard,
    message: data.message || '',
    status: 'new',
    // Lead context — approximate location + first-touch acquisition source
    locationCity: ctx.city || '',
    locationRegion: ctx.region || '',
    locationCountry: ctx.country || '',
    timezone: ctx.timezone || '',
    utmSource: ctx.utmSource || '',
    utmMedium: ctx.utmMedium || '',
    utmCampaign: ctx.utmCampaign || '',
    utmTerm: ctx.utmTerm || '',
    utmContent: ctx.utmContent || '',
    referrer: ctx.referrer || '',
    landingPage: ctx.landingPage || '',
    submittedFrom: ctx.submittedFrom || '',
  });
}

// ── GROQ queries ──────────────────────────────────────────────────────────────

const AUTHOR_PROJECTION = `
  "author": {
    "name": author->name,
    "designation": author->designation,
    "bio": author->bio,
    "link": author->link,
    "image": author->image,
    "slug": author->slug.current,
    "showAuthorSection": coalesce(author->showAuthorSection, true),
  }
`;

export async function getAllPosts() {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      "slug": slug.current,
      title,
      category,
      excerpt,
      readTime,
      "publishedAt": publishedAt,
      "featuredImage": featuredImage,
      ${AUTHOR_PROJECTION}
    }`
  );
}

export async function getPostBySlug(slug) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      "slug": slug.current,
      title,
      category,
      excerpt,
      readTime,
      "publishedAt": publishedAt,
      "featuredImage": featuredImage,
      body,
      ${AUTHOR_PROJECTION}
    }`,
    { slug }
  );
}

export async function getAllPostSlugs() {
  return client.fetch(
    `*[_type == "blogPost"]{ "slug": slug.current, "publishedAt": publishedAt }`
  );
}

// ── Events ──────────────────────────────────────────────────────────────────

/* Shared projection - mirrors the shape consumed by Events.jsx / EventBanner.jsx.
   `id` falls back to the document _id so React keys stay stable. */
const EVENT_PROJECTION = `
  "id": _id,
  status,
  badge,
  badgeTone,
  month,
  name,
  dates,
  location,
  format,
  booth,
  "venues": coalesce(venues, []),
  "topics": coalesce(topics, []),
  "special": coalesce(special, []),
  "images": coalesce(images, []),
  "website": website,
  websiteLabel,
  startDate
`;

// All upcoming events, soonest first.
export async function getUpcomingEvents() {
  return client.fetch(
    `*[_type == "event" && status == "upcoming"] | order(startDate asc) { ${EVENT_PROJECTION} }`
  );
}

// All events for the /events page - upcoming first, then past (sorted in sortEventsForDisplay).
export async function getAllEvents() {
  return client.fetch(`*[_type == "event"] { ${EVENT_PROJECTION} }`);
}

// The soonest upcoming event within the banner window - used by the home-page banner.
export async function getNextEvent() {
  const now = new Date();
  const windowEnd = new Date(now);
  windowEnd.setDate(windowEnd.getDate() + EVENT_BANNER_LEAD_DAYS);

  return client.fetch(
    `*[_type == "event" && status == "upcoming" && startDate >= $now && startDate <= $windowEnd] | order(startDate asc)[0] { ${EVENT_PROJECTION} }`,
    { now: now.toISOString(), windowEnd: windowEnd.toISOString() }
  );
}
