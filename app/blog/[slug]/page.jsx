export const revalidate = 60;

import { getPostBySlug, getAllPostSlugs, urlFor } from '../../../lib/sanity';
import {
  SITE_URL,
  SITE_NAME,
  OG_IMAGE,
  OG_IMAGE_ALT,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildSchemaGraph,
} from '../../../lib/seo.js';
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
    // Fall back to the site OG image so a post without a featured image still
    // renders a card when shared - LinkedIn is the primary distribution channel.
    const image = postImage(post) || OG_IMAGE;
    return {
      title: `${post.title} - GlobalCodio`,
      description: post.excerpt,
      alternates: { canonical: url },
      openGraph: {
        type: 'article',
        locale: 'en_US',
        siteName: SITE_NAME,
        url,
        title: post.title,
        description: post.excerpt,
        publishedTime: post.publishedAt,
        modifiedTime: post._updatedAt || post.publishedAt,
        authors: post.author?.name ? [post.author.name] : undefined,
        images: [{ url: image, width: 1200, height: 630, alt: post.title || OG_IMAGE_ALT }],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [image],
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

  /* BlogPosting + BreadcrumbList in one graph. The article template renders a
     visible Home / Blog / title breadcrumb, which had no machine-readable
     counterpart - so no breadcrumb trail appeared in search results. */
  const articleSchema = sanityPost
    ? buildSchemaGraph(
        buildArticleSchema({
          title: sanityPost.title,
          description: sanityPost.excerpt,
          url: `${SITE_URL}/blog/${slug}`,
          datePublished: sanityPost.publishedAt,
          dateModified: sanityPost._updatedAt,
          authorName: sanityPost.author?.name,
          image: postImage(sanityPost),
        }),
        buildBreadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
          { name: sanityPost.title, url: `${SITE_URL}/blog/${slug}` },
        ]),
      )
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
