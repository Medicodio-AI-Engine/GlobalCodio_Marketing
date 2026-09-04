'use client';

import React, { useState } from 'react';

/**
 * Sticky table of contents for the mirrored platform legal pages.
 *
 * Split out as its own client component so `PlatformLegalDoc` can stay a server
 * component - the fetched policy fragment is large and has no reason to ship to
 * the browser. Mirrors the hover treatment on /privacy-policy and /terms, and
 * uses the same 14px floor those pages needed for the USCIS review.
 */
export const PlatformLegalToc = ({ sections }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <nav aria-label="Table of contents" className="legal-toc">
      <div className="legal-toc-title">Contents</div>
      {sections.map((section, i) => {
        const active = hovered === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            style={{
              fontSize: '14px',
              color: active ? 'var(--blue)' : 'var(--ink-3)',
              textDecoration: 'none',
              padding: 'calc(5px * var(--ui-scale)) 0',
              borderLeft: `2px solid ${active ? 'var(--blue)' : 'transparent'}`,
              paddingLeft: 'calc(10px * var(--ui-scale))',
              transition: 'color .15s, border-color .15s',
              lineHeight: 1.4,
              fontWeight: active ? 600 : 400,
            }}
            onMouseEnter={() => setHovered(section.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {i + 1}. {section.label}
          </a>
        );
      })}
    </nav>
  );
};
