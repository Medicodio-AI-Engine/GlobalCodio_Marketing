import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

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
    `*[_type == "blogPost"]{ "slug": slug.current }`
  );
}
