/**
 * Server-side mirror of the platform legal documents onto the marketing domain.
 *
 * Why this exists: USCIS reviews the business website named in our Torch Case
 * Status API affidavit (www.globalcodio.ai) and grades the privacy policy and
 * terms it finds there. Our website policy legitimately covers the marketing
 * site only, and the documents that actually govern account and case data live
 * on app.globalcodio.ai. A reviewer who does not follow an off-domain link ends
 * up grading the wrong document.
 *
 * Rather than copy the platform text into this repo - which would immediately
 * drift out of date, and would fork the source of truth for a legal document -
 * these routes fetch the canonical page at request time (ISR-cached) and
 * re-render its content inside this site's own shell. app.globalcodio.ai stays
 * the single place the text is edited; www just serves it at a URL on the
 * domain named in the affidavit.
 *
 * The fetched markup is re-emitted through a strict allowlist (see `sanitize`),
 * not passed through. The source is first-party, but this output reaches
 * `dangerouslySetInnerHTML`, so it is treated as untrusted regardless.
 */

import { PLATFORM_URL } from './navigation.js';

/** Re-fetch the source document at most once an hour. Legal text changes on a
 *  human cadence; the fallback below covers the source being unreachable. */
export const PLATFORM_LEGAL_REVALIDATE = 3600;

export const PLATFORM_DOCS = {
  privacy: {
    key: 'privacy',
    sourcePath: '/privacy',
    marketingPath: '/platform-privacy',
    /* The marketing-site counterpart, so each document can point at the other
       and a reviewer can see the scope split from either direction. */
    websitePath: '/privacy-policy',
    websiteLabel: 'Website Privacy Policy',
    heroLead: 'Platform Privacy ',
    heroEmphasis: 'Policy.',
    fallbackTitle: 'Platform Privacy Policy',
    fallbackIntro:
      'How the GlobalCodio application collects, uses, shares, and protects information.',
  },
  terms: {
    key: 'terms',
    sourcePath: '/terms',
    marketingPath: '/platform-terms',
    websitePath: '/terms',
    websiteLabel: 'Website Terms of Use',
    heroLead: 'Platform Terms of ',
    heroEmphasis: 'Service.',
    fallbackTitle: 'Platform Terms of Service',
    fallbackIntro:
      'The terms that govern your access to and use of the GlobalCodio platform.',
  },
};

/* ── Sanitizer ──────────────────────────────────────────────────────────── */

/** Tags kept in the output, mapped to the class this site styles them with.
 *  Anything not listed is unwrapped (children kept, tag dropped) or, for the
 *  void/executable tags in `DROP_ENTIRELY`, removed with its content. */
const TAG_CLASS = {
  h2: 'legal-section-title',
  h3: 'legal-subsection-title',
  h4: 'legal-subsection-title',
  p: 'legal-prose',
  ul: 'legal-list',
  ol: 'legal-list',
  li: null,
  strong: null,
  em: null,
  b: null,
  i: null,
  a: null,
  br: null,
  table: 'legal-table',
  thead: null,
  tbody: null,
  tr: null,
  th: null,
  td: null,
  blockquote: 'legal-quote',
  aside: 'legal-note',
};

/** The source wraps its inline callouts in a bordered `div` whose only marker
 *  is a utility class. Those carry real content (scope notes, Google API
 *  disclosures), so they are re-emitted as a styled `aside` rather than
 *  unwrapped into loose text. Its table wrappers match on `overflow-x-auto`
 *  instead and are dropped, because `wrapTables` adds our own. */
const NOTE_DIV = /(?:bg-info-subtle|border-info-border|bg-warning-subtle|bg-success-subtle)/;
const TABLE_WRAP_DIV = /overflow-x-auto/;

/** Removed along with everything inside them. */
const DROP_ENTIRELY = ['script', 'style', 'noscript', 'iframe', 'object', 'embed', 'svg', 'template'];

const VOID_TAGS = new Set(['br']);

/** Only these schemes survive on an anchor. Anything else loses its href, which
 *  also drops `javascript:` and `data:` payloads. */
const SAFE_HREF = /^(https?:\/\/|mailto:|#|\/)/i;

function safeHref(raw) {
  const value = decodeEntities(raw).trim();
  if (!SAFE_HREF.test(value)) return null;
  // A relative href in the source resolves against app.globalcodio.ai, not www.
  if (value.startsWith('/')) return `${PLATFORM_URL}${value}`;
  return value;
}

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Rewrite a fragment of source HTML to this site's own markup.
 *
 * Implemented as a single forward scan rather than a DOM parse so it can run in
 * any Next runtime without pulling in a parser dependency. Open tags on the
 * allowlist are re-emitted with our class and no other attributes; unknown tags
 * (the source's layout `div`s and `span`s) are unwrapped so their text
 * survives; a close tag is only emitted if its matching open tag was kept.
 */
function sanitize(html) {
  let src = html;

  // Strip dropped elements with their contents, and React's comment markers.
  for (const tag of DROP_ENTIRELY) {
    src = src.replace(new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?</${tag}>`, 'gi'), '');
    src = src.replace(new RegExp(`<${tag}\\b[^>]*/?>`, 'gi'), '');
  }
  src = src.replace(/<!--[\s\S]*?-->/g, '');

  const out = [];
  /** Per open element: `{ name }` is the source tag, `emit` the tag we wrote out
   *  (null when the element was unwrapped and its close tag emits nothing). */
  const stack = [];
  const tagPattern = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>/g;

  let cursor = 0;
  let match;
  while ((match = tagPattern.exec(src)) !== null) {
    out.push(src.slice(cursor, match.index));
    cursor = tagPattern.lastIndex;

    const [, closing, rawName, attrs, selfClosing] = match;
    const name = rawName.toLowerCase();

    if (closing) {
      // Close the nearest open element of this name; ignore strays.
      for (let i = stack.length - 1; i >= 0; i -= 1) {
        if (stack[i].name === name) {
          if (stack[i].emit) out.push(`</${stack[i].emit}>`);
          stack.splice(i, 1);
          break;
        }
      }
      continue;
    }

    // A source callout `div` becomes an `aside`; every other div/span is
    // unwrapped so its children survive without the source's own styling.
    let emit = name;
    if (name === 'div') {
      const cls = /class\s*=\s*"([^"]*)"/i.exec(attrs || '');
      emit = cls && NOTE_DIV.test(cls[1]) && !TABLE_WRAP_DIV.test(cls[1]) ? 'aside' : null;
    } else if (!Object.prototype.hasOwnProperty.call(TAG_CLASS, name)) {
      emit = null;
    }

    if (!emit) {
      if (!selfClosing) stack.push({ name, emit: null });
      continue;
    }

    const cls = TAG_CLASS[emit];
    let attrOut = cls ? ` class="${cls}"` : '';

    if (emit === 'a') {
      const hrefMatch = /href\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'>]+))/i.exec(attrs || '');
      const href = hrefMatch ? safeHref(hrefMatch[2] ?? hrefMatch[3] ?? hrefMatch[4] ?? '') : null;
      if (href) {
        const external = /^https?:\/\//i.test(href) && !href.startsWith(PLATFORM_URL);
        attrOut += ` href="${escapeAttr(href)}"`;
        if (/^https?:\/\//i.test(href)) {
          attrOut += ' target="_blank" rel="noopener noreferrer"';
        }
        if (external) attrOut += ' data-external="true"';
      }
    }

    out.push(`<${emit}${attrOut}>`);
    if (!VOID_TAGS.has(emit) && !selfClosing) stack.push({ name, emit });
  }

  out.push(src.slice(cursor));

  // Close anything the source left open so the fragment can't leak into the page.
  for (let i = stack.length - 1; i >= 0; i -= 1) {
    if (stack[i].emit) out.push(`</${stack[i].emit}>`);
  }

  return out
    .join('')
    .replace(/[ \t]*\n[ \t]*/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/** Plain text of a fragment, for TOC labels and the hero subhead. */
function textOf(html) {
  return decodeEntities(html.replace(/<[^>]*>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

/* ── Extraction ─────────────────────────────────────────────────────────── */

/** Tables need a horizontal scroll container of their own so a wide retention
 *  or subprocessor table never makes the page body scroll sideways. */
function wrapTables(html) {
  return html.replace(
    /<table class="legal-table">([\s\S]*?)<\/table>/g,
    '<div class="legal-table-wrap"><table class="legal-table">$1</table></div>',
  );
}

export function parsePlatformDoc(html, doc) {
  // The document heading is the one that names the platform document; the app
  // shell's own marketing h1 is skipped.
  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => textOf(m[1]));
  const title = headings.find((h) => /^Platform\b/i.test(h)) || doc.fallbackTitle;

  const meta = /Effective\s*(?:<!--\s*-->)?\s*([A-Z][a-z]+ \d{1,2}, \d{4})/.exec(html);
  const effective = meta ? meta[1] : null;

  const versionMatch = /Version\s*(?:<!--\s*-->)?\s*([\w.]+)/.exec(html);
  const version = versionMatch ? versionMatch[1] : null;

  const sectionMatches = [...html.matchAll(/<section id="([^"]+)"[^>]*>([\s\S]*?)<\/section>/gi)];
  const sections = sectionMatches
    .map(([, id, body]) => {
      const headingMatch = /<h2\b[^>]*>([\s\S]*?)<\/h2>/i.exec(body);
      return {
        id,
        label: headingMatch ? textOf(headingMatch[1]) : id.replace(/-/g, ' '),
        html: wrapTables(sanitize(body)),
      };
    })
    .filter((s) => s.html.length > 0);

  // The lead paragraph sits between the document heading and the first section.
  const firstSection = sectionMatches.length ? html.indexOf(sectionMatches[0][0]) : -1;
  let intro = doc.fallbackIntro;
  if (firstSection > 0) {
    const before = html.slice(0, firstSection);
    const paragraphs = [...before.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => textOf(m[1]));
    const lead = paragraphs.reverse().find((t) => t.length > 60 && !/^Effective\b/i.test(t));
    if (lead) intro = lead;
  }

  return { title, effective, version, intro, sections };
}

/**
 * Fetch and parse a platform legal document.
 *
 * Never throws and never returns a half-rendered page: on any failure the
 * caller gets `sections: []` plus `sourceUrl`, and the view renders a notice
 * pointing at the canonical document instead of an empty policy - an empty
 * policy page would fail the review this route exists to pass.
 */
export async function getPlatformDoc(key) {
  const doc = PLATFORM_DOCS[key];
  if (!doc) throw new Error(`Unknown platform legal document: ${key}`);

  const sourceUrl = `${PLATFORM_URL}${doc.sourcePath}`;
  const base = {
    ...doc,
    sourceUrl,
    title: doc.fallbackTitle,
    intro: doc.fallbackIntro,
    effective: null,
    version: null,
    sections: [],
    ok: false,
  };

  try {
    const res = await fetch(sourceUrl, {
      headers: { accept: 'text/html', 'user-agent': 'globalcodio-marketing/platform-legal-mirror' },
      next: { revalidate: PLATFORM_LEGAL_REVALIDATE },
    });
    if (!res.ok) return base;

    const parsed = parsePlatformDoc(await res.text(), doc);
    if (!parsed.sections.length) return { ...base, ...parsed, sections: [], ok: false };

    return { ...base, ...parsed, ok: true };
  } catch {
    return base;
  }
}
