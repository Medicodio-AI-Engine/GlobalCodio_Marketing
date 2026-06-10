import { SITE_URL } from '../lib/navigation.js';
import { getAllPostSlugs } from '../lib/sanity';

// Revalidate the sitemap on the same cadence as blog content.
export const revalidate = 60;

/** Static routes with crawl priority + change frequency hints. */
const STATIC_ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/platform', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/ai-agents', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/network', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/for-law-firms', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/for-corporate-teams', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/security', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/it-services', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/codioops', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/hrms-integration', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/rfp-response', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/customer-support', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/letter-from-the-founder', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/events', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/free-tech-audit', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
];

export default async function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let postEntries = [];
  try {
    const slugs = await getAllPostSlugs();
    postEntries = slugs.map(({ slug, publishedAt }) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: publishedAt ? new Date(publishedAt) : now,
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  } catch {
    // Sanity unreachable at build time - ship the static routes only.
  }

  return [...staticEntries, ...postEntries];
}
