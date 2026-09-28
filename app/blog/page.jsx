import { buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/blog',
  title: 'Blog - Ideas for Immigration Teams',
  description: 'GlobalCodio insights on AI in immigration workflows, managed tech operations, renewal revenue, corporate RFPs and running a modern immigration practice.',
  keywords: ['immigration technology blog', 'AI immigration insights', 'immigration law firm technology', 'immigration case management blog', 'GlobalCodio blog'],
});
export const revalidate = 60; // ISR - revalidate every 60 seconds

import { getAllPosts } from '../../lib/sanity';
import Blog from '../../src/views/Blog';

export default async function BlogPage() {
  let posts = [];
  try {
    posts = await getAllPosts();
  } catch {
    // Sanity not reachable at build time - fall through to static data in Blog.jsx
  }
  return <Blog sanityPosts={posts} />;
}
