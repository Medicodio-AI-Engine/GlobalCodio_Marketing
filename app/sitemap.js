import { SITE_URL } from '../lib/navigation.js';
import { getAllPostSlugs } from '../lib/sanity';

// Revalidate the sitemap on the same cadence as blog content.
export const revalidate = 60;

/* Static public routes. `priority` and `changeFrequency` are deliberately absent -
   Google has stated for years that it ignores both, and they were the only reason
   this list carried per-route metadata. `lastModified` is omitted too: it used to
   be stamped with `new Date()` at render time, which - on a 60-second ISR window -
   told Google that every page on the site changed every minute. An absent lastmod
   is read as "unknown"; a wrong one trains Google to distrust the field. Blog
   entries below do carry a real date, because there is a real one to give. */
const STATIC_ROUTES = [
  '/',
  '/platform',
  '/ai-agents',
  '/network',
  '/for-law-firms',
  '/for-corporate-teams',
  '/security',
  '/it-services',
  '/codioops',
  '/hrms-integration',
  '/rfp-response',
  '/customer-support',
  '/about',
  '/letter-from-the-founder',
  '/blog',
  '/events',
  '/contact',
  '/free-tech-audit',
  '/privacy-policy',
  '/terms',
];

/** Coerce a Sanity date string to a Date, or undefined if absent/unparseable. */
function toDate(value) {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export default async function sitemap() {
  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
  }));

  let postEntries = [];
  try {
    const slugs = await getAllPostSlugs();
    postEntries = slugs
      .filter(({ slug }) => Boolean(slug))
      .map(({ slug, publishedAt, _updatedAt }) => {
        const lastModified = toDate(_updatedAt) ?? toDate(publishedAt);
        return {
          url: `${SITE_URL}/blog/${slug}`,
          ...(lastModified ? { lastModified } : {}),
        };
      });
  } catch {
    // Sanity unreachable at build time - ship the static routes only.
  }

  return [...staticEntries, ...postEntries];
}
