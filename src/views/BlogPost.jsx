'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';

import { Section, SmartLink, CtaBand } from '../../components/ui/PageKit';
import NotFound from './NotFound.jsx';
import { POSTS_DATA } from './Blog.jsx';
import { urlFor } from '../../lib/sanity';

// ── Image helper ──────────────────────────────────────────────────────────────
function resolveImageUrl(img, width = 800) {
  if (!img) return null;
  if (typeof img === 'string') return img;
  try { return urlFor(img).width(width).auto('format').url(); } catch { return null; }
}

// ── Font annotation maps ──────────────────────────────────────────────────────
const FONT_SIZE_MAP = {
  sm: 'calc(13px * var(--ui-scale))',
  base: 'calc(16px * var(--ui-scale))',
  lg: 'calc(19px * var(--ui-scale))',
  xl: 'calc(22px * var(--ui-scale))',
  display: 'calc(28px * var(--ui-scale))',
};

const COLOR_MAP = {
  ink: 'var(--ink)',
  muted: 'var(--muted)',
  blue: 'var(--blue)',
  'grad-blue': undefined, // handled via className
};

// ── Portable Text component overrides ────────────────────────────────────────
const PROSE_BASE = {
  fontSize: 'calc(19px * var(--ui-scale))',
  color: 'var(--ink-2)',
  lineHeight: 1.8,
  marginTop: 'var(--space-xl)',
};

const portableComponents = {
  block: {
    normal: ({ children }) => (
      <p className="reveal" style={PROSE_BASE}>{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="reveal display" style={{
        fontSize: 'calc(28px * var(--ui-scale))',
        fontStyle: 'italic',
        lineHeight: 1.25,
        color: 'var(--ink)',
        margin: 'var(--space-2xl) 0 var(--space-md)',
        letterSpacing: '-0.02em',
      }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="reveal display" style={{
        fontSize: 'calc(22px * var(--ui-scale))',
        fontWeight: 700,
        lineHeight: 1.3,
        color: 'var(--ink)',
        margin: 'var(--space-xl) 0 var(--space-sm)',
        letterSpacing: '-0.01em',
      }}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="reveal" style={{
        fontSize: 'calc(17px * var(--ui-scale))',
        fontWeight: 700,
        color: 'var(--ink)',
        margin: 'var(--space-lg) 0 var(--space-sm)',
      }}>
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="reveal" style={{
        borderLeft: '3px solid var(--blue)',
        paddingLeft: 'var(--space-lg)',
        margin: 'var(--space-xl) 0',
        fontStyle: 'italic',
        fontSize: 'calc(20px * var(--ui-scale))',
        color: 'var(--ink-3)',
        lineHeight: 1.6,
      }}>
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="reveal" style={{ ...PROSE_BASE, paddingLeft: 'calc(24px * var(--ui-scale))', display: 'flex', flexDirection: 'column', gap: 'calc(8px * var(--ui-scale))' }}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="reveal" style={{ ...PROSE_BASE, paddingLeft: 'calc(24px * var(--ui-scale))', display: 'flex', flexDirection: 'column', gap: 'calc(8px * var(--ui-scale))' }}>
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li style={{ lineHeight: 1.7, color: 'var(--ink-2)' }}>{children}</li>,
    number: ({ children }) => <li style={{ lineHeight: 1.7, color: 'var(--ink-2)' }}>{children}</li>,
  },

  marks: {
    strong: ({ children }) => <strong style={{ fontWeight: 700, color: 'var(--ink)' }}>{children}</strong>,
    em: ({ children }) => <em style={{ fontStyle: 'italic' }}>{children}</em>,
    underline: ({ children }) => <span style={{ textDecoration: 'underline' }}>{children}</span>,
    'strike-through': ({ children }) => <span style={{ textDecoration: 'line-through' }}>{children}</span>,
    code: ({ children }) => (
      <code style={{
        fontFamily: 'var(--mono)',
        fontSize: '0.9em',
        background: 'var(--blue-soft)',
        color: 'var(--blue)',
        padding: '2px 6px',
        borderRadius: 4,
      }}>
        {children}
      </code>
    ),
    // Custom font annotations
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        style={{ color: 'var(--blue)', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 500 }}
      >
        {children}
      </a>
    ),
    fontSize: ({ value, children }) => (
      <span style={{ fontSize: FONT_SIZE_MAP[value?.size] || 'inherit' }}>{children}</span>
    ),
    fontWeight: ({ value, children }) => (
      <span style={{ fontWeight: value?.weight || 'inherit' }}>{children}</span>
    ),
    textColor: ({ value, children }) => {
      const color = value?.color;
      if (color === 'grad-blue') {
        return <em className="text-grad-blue" style={{ fontStyle: 'inherit' }}>{children}</em>;
      }
      return <span style={{ color: COLOR_MAP[color] || 'inherit' }}>{children}</span>;
    },
  },

  types: {
    image: ({ value }) => {
      const url = resolveImageUrl(value, 1200);
      if (!url) return null;
      return (
        <figure className="reveal" style={{ margin: 'var(--space-2xl) 0' }}>
          <img
            src={url}
            alt={value.alt || ''}
            style={{ width: '100%', borderRadius: 'calc(12px * var(--ui-scale))', objectFit: 'cover' }}
          />
          {value.caption && (
            <figcaption style={{
              marginTop: 'calc(10px * var(--ui-scale))',
              textAlign: 'center',
              fontSize: 'calc(13px * var(--ui-scale))',
              color: 'var(--muted)',
              fontFamily: 'var(--mono)',
              letterSpacing: '.03em',
            }}>
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    pullQuote: ({ value }) => (
      <div className="reveal" style={{
        margin: 'var(--space-2xl) 0',
        padding: 'calc(32px * var(--ui-scale)) calc(40px * var(--ui-scale))',
        background: 'var(--blue-soft)',
        borderRadius: 'calc(16px * var(--ui-scale))',
        border: '1px solid rgba(25,80,198,0.12)',
      }}>
        <p className="display" style={{
          fontSize: 'calc(24px * var(--ui-scale))',
          fontStyle: 'italic',
          color: 'var(--ink)',
          lineHeight: 1.4,
          letterSpacing: '-0.01em',
          margin: 0,
        }}>
          &ldquo;{value.text}&rdquo;
        </p>
        {value.attribution && (
          <p className="mono" style={{
            marginTop: 'calc(12px * var(--ui-scale))',
            fontSize: 'calc(12px * var(--ui-scale))',
            color: 'var(--blue)',
            letterSpacing: '.06em',
          }}>
            - {value.attribution}
          </p>
        )}
      </div>
    ),

    callout: ({ value }) => {
      const isBlue = value.style === 'blue';
      return (
        <div className="reveal" style={{
          margin: 'var(--space-xl) 0',
          padding: 'calc(20px * var(--ui-scale)) calc(24px * var(--ui-scale))',
          background: isBlue ? 'var(--blue-soft)' : 'var(--surface)',
          borderRadius: 'calc(12px * var(--ui-scale))',
          border: `1px solid ${isBlue ? 'rgba(25,80,198,0.15)' : 'var(--line-2)'}`,
          borderLeft: `3px solid ${isBlue ? 'var(--blue)' : 'var(--line-2)'}`,
        }}>
          <p style={{
            fontSize: 'calc(15px * var(--ui-scale))',
            color: isBlue ? 'var(--ink-2)' : 'var(--ink-3)',
            lineHeight: 1.65,
            margin: 0,
          }}>
            {value.text}
          </p>
        </div>
      );
    },
  },
};

// ── Legacy static content renderer (for POSTS_DATA fallback) ─────────────────
function LegacyContent({ content }) {
  return content.map((block, i) => {
    if (block.type === 'h2') return (
      <h2 key={i} className="reveal display" style={{
        fontSize: 'calc(28px * var(--ui-scale))',
        fontStyle: 'italic',
        lineHeight: 1.25,
        color: 'var(--ink)',
        margin: 'var(--space-2xl) 0 var(--space-md)',
        letterSpacing: '-0.02em',
      }}>
        {block.text}
      </h2>
    );
    return <p key={i} className="reveal" style={PROSE_BASE}>{block.text}</p>;
  });
}

// ── Author section (bottom of article) ───────────────────────────────────────
function AuthorSection({ author }) {
  if (!author) return null;

  const imageUrl = resolveImageUrl(author.image, 160);
  const authorLink = author.link || '/letter-from-the-founder';

  return (
    <div className="author-signoff reveal">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={author.name}
          className="author-signoff-photo"
          width={80}
          height={80}
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="author-signoff-body">
        <span className="mono author-signoff-eyebrow">ABOUT THE AUTHOR</span>
        <div className="display author-signoff-name">{author.name}</div>
        {author.designation && (
          <p className="author-signoff-role">{author.designation}</p>
        )}
        {author.bio && <p className="author-signoff-bio">{author.bio}</p>}
        <SmartLink href={authorLink} className="feature-card-link author-signoff-link">
          {author.link ? 'Learn more' : 'Read the founder\'s letter'}
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </SmartLink>
      </div>
    </div>
  );
}

// ── Main BlogPost component ───────────────────────────────────────────────────
// sanityPost: full post object from server fetch (preferred)
// slug: passed from the page route as fallback key into static POSTS_DATA
export default function BlogPost({ sanityPost, slug }) {
  const post = sanityPost || POSTS_DATA.find(p => p.slug === slug);

  if (!post) return <NotFound />;

  const isSanity = !!post.body; // body is portable text array from Sanity
  const featuredImageUrl = resolveImageUrl(post.featuredImage ?? post.image, 1400);

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : post.date ?? '';

  const authorImageUrl = resolveImageUrl(post.author?.image, 80);

  return (
    <>
      {/* ── Blog Header ────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="hero-aurora" aria-hidden="true" />
        <div className="hero-grid-overlay" aria-hidden="true" />
        <div className="container page-hero-inner">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.45 }}
            style={{ display: 'flex', alignItems: 'center', gap: 'calc(8px * var(--ui-scale))', marginBottom: 'var(--space-lg)', fontSize: 'calc(13px * var(--ui-scale))' }}
          >
            <Link href="/blog" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 600 }}>Blog</Link>
            <span style={{ color: 'var(--muted)' }}>›</span>
            <span style={{ color: 'var(--muted)' }}>{post.category}</span>
          </motion.div>

          {/* Category + read time */}
          <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, delay: 0.06 }}
            style={{ display: 'flex', alignItems: 'center', gap: 'calc(12px * var(--ui-scale))', marginBottom: 'var(--space-lg)', justifyContent: 'center' }}
          >
            <span style={{
              fontFamily: 'var(--mono)', fontSize: 'calc(10px * var(--ui-scale))',
              letterSpacing: '.08em', textTransform: 'uppercase',
              color: 'var(--blue)', fontWeight: 700,
              padding: 'calc(4px * var(--ui-scale)) calc(12px * var(--ui-scale))',
              background: 'var(--blue-soft)', borderRadius: 999,
            }}>
              {post.category}
            </span>
            <span className="mono" style={{ fontSize: 'calc(12px * var(--ui-scale))', color: 'var(--muted)' }}>
              {post.readTime} min read
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{ maxWidth: '70ch', margin: '0 auto', width: '100%' }}
          >
            <h1 className="display type-display-lg" style={{ textAlign: 'center', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              {post.title}
            </h1>
          </motion.div>

          {/* Author row */}
          <div style={{ marginTop: 'var(--space-lg)', display: 'flex', alignItems: 'center', gap: 'calc(12px * var(--ui-scale))', justifyContent: 'center' }}>
            {authorImageUrl && (
              <img
                src={authorImageUrl}
                alt={post.author?.name}
                width={44} height={44}
                style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '2px solid var(--blue-soft)' }}
              />
            )}
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 'calc(14px * var(--ui-scale))', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3 }}>
                {post.author?.name}
              </div>
              <div style={{ fontSize: 'calc(12px * var(--ui-scale))', color: 'var(--muted)', lineHeight: 1.3 }}>
                {post.author?.designation} · {formattedDate}
              </div>
            </div>
          </div>

          {/* Featured image */}
          {featuredImageUrl && (
            <div style={{ marginTop: 'var(--space-2xl)', width: '100%', maxWidth: '80ch', marginInline: 'auto' }}>
              <img
                src={featuredImageUrl}
                alt={post.title}
                style={{
                  width: '100%',
                  borderRadius: 'calc(16px * var(--ui-scale))',
                  objectFit: 'cover',
                  maxHeight: 'calc(480px * var(--ui-scale))',
                  display: 'block',
                }}
              />
            </div>
          )}
        </div>
      </section>

      {/* ── Article body ─────────────────────────────────────── */}
      <Section id="article" tone="" style={{ paddingTop: 'var(--space-xl)' }}>
        <div style={{ maxWidth: '70ch', margin: '0 auto' }}>

          {/* Lead excerpt */}
          <p className="reveal" style={{ ...PROSE_BASE, marginTop: 0, fontStyle: 'italic', color: 'var(--ink-3)' }}>
            {post.excerpt}
          </p>

          <hr className="rule-blue reveal" style={{ marginTop: 'var(--space-xl)' }} />

          {/* Body content */}
          {isSanity ? (
            <PortableText value={post.body} components={portableComponents} />
          ) : (
            <LegacyContent content={post.content} />
          )}

          <hr className="rule-blue reveal" style={{ marginTop: 'var(--space-2xl)' }} />

          {/* Author section */}
          <AuthorSection author={post.author} />

        </div>
      </Section>

      <CtaBand
        lead="Ready to see what's possible"
        emphasis="for your firm?"
        primary={{ href: '/contact', label: 'Book a Demo' }}
        secondary={{ href: 'mailto:info@globalcodio.ai', label: 'Talk to our team' }}
      />
    </>
  );
}
