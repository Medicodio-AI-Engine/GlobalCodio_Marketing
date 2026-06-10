export const revalidate = 60;

import { getPostBySlug, getAllPostSlugs, urlFor } from '../../../lib/sanity';
import { SITE_URL, buildArticleSchema } from '../../../lib/seo.js';
import BlogPost from '../../../src/views/BlogPost';

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    return slugs.map(({ slug }) => ({ slug }));
  } catch {
    return [];
  }
}

/** Best-effort absolute image URL for OG/structured data. */
function postImage(post) {
  if (!post?.featuredImage) return undefined;
  try {
    return urlFor(post.featuredImage).width(1200).height(630).url();
  } catch {
    return undefined;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const url = `${SITE_URL}/blog/${slug}`;
  try {
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Blog - GlobalCodio', alternates: { canonical: url } };
    const image = postImage(post);
    return {
      title: `${post.title} - GlobalCodio`,
      description: post.excerpt,
      alternates: { canonical: url },
      openGraph: {
        type: 'article',
        url,
        title: post.title,
        description: post.excerpt,
        publishedTime: post.publishedAt,
        authors: post.author?.name ? [post.author.name] : undefined,
        ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: post.title }] } : {}),
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        ...(image ? { images: [image] } : {}),
      },
    };
  } catch {
    return { title: 'Blog - GlobalCodio', alternates: { canonical: url } };
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

  const articleSchema = sanityPost
    ? buildArticleSchema({
        title: sanityPost.title,
        description: sanityPost.excerpt,
        url: `${SITE_URL}/blog/${slug}`,
        datePublished: sanityPost.publishedAt,
        authorName: sanityPost.author?.name,
        image: postImage(sanityPost),
      })
    : null;

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <BlogPost sanityPost={sanityPost} slug={slug} />
    </>
  );
}
