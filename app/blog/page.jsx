export const metadata = { title: 'Blog - GlobalCodio' };
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
