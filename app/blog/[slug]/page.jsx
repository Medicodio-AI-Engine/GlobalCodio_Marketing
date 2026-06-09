export const revalidate = 60;

import { getPostBySlug, getAllPostSlugs } from '../../../lib/sanity';
import BlogPost from '../../../src/views/BlogPost';

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map(({ slug }) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Blog - GlobalCodio' };
    return {
      title: `${post.title} - GlobalCodio`,
      description: post.excerpt,
    };
  } catch {
    return { title: 'Blog - GlobalCodio' };
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  let sanityPost = null;
  try {
    sanityPost = await getPostBySlug(slug);
  } catch {
    // Fall through to static data in BlogPost component
  }
  return <BlogPost sanityPost={sanityPost} slug={slug} />;
}
