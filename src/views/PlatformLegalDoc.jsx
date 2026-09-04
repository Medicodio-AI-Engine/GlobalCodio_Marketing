import React from 'react';

import { PageHero, Section } from '../../components/ui/PageKit';
import { PlatformLegalToc } from '../../components/ui/PlatformLegalToc';

/**
 * Renders a platform legal document (fetched by `lib/platformLegal.js`) inside
 * this site's own legal-page shell, so the text that actually governs accounts
 * and case data is served from www.globalcodio.ai - the domain named in our
 * USCIS Torch Case Status API affidavit - instead of only from app.
 *
 * A server component: the fetched fragment never reaches the client bundle, and
 * only the table-of-contents hover state is client-side.
 *
 * `section.html` comes from the allowlist sanitizer in lib/platformLegal.js.
 * That function is the only reason `dangerouslySetInnerHTML` is acceptable
 * here - do not pass unsanitized markup into this component.
 */
export default function PlatformLegalDoc({ doc }) {
  const { title, intro, effective, version, sections, sourceUrl, ok, heroLead, heroEmphasis, websitePath, websiteLabel } = doc;

  const effectiveLine = [
    effective ? `Effective ${effective}` : null,
    version ? `Version ${version}` : null,
  ]
    .filter(Boolean)
    .join(' · ');

  /** True when the canonical source was fetched and parsed. Everything the page
   *  claims about reproducing the document is gated on this - in the fallback
   *  state the page must not assert it contains text it does not contain. */
  const mirrored = ok && sections.length > 0;

  const sub = [effectiveLine ? `${effectiveLine}.` : null, intro].filter(Boolean).join(' ');

  return (
    <div className="page-legal-doc">
      <PageHero eyebrow="Legal · Platform" lead={heroLead} emphasis={heroEmphasis} headInline sub={sub} />

      <Section id="platform-legal-content" style={{ paddingTop: 'var(--space-2xl)' }}>
        <div className="legal-layout">
          {mirrored ? (
            <PlatformLegalToc sections={sections} />
          ) : (
            <div aria-hidden="true" />
          )}

          <article style={{ minWidth: 0 }}>
            <div className="legal-callout legal-callout--lead" role="note">
              <p>
                <strong>This document governs the GlobalCodio application.</strong>
              </p>
              <p>
                It applies to your account, immigration case data, documents, and integrations
                &mdash; not to the public marketing website, which has its own{' '}
                <a href={websitePath}>{websiteLabel}</a>.{' '}
                {mirrored
                  ? `This page reproduces the ${title} in full from its canonical source at `
                  : `The canonical copy is published at `}
                <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                  {sourceUrl.replace(/^https?:\/\//, '')}
                </a>.
              </p>
            </div>

            {mirrored ? (
              sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  /* eslint-disable-next-line react/no-danger -- sanitized in lib/platformLegal.js */
                  dangerouslySetInnerHTML={{ __html: section.html }}
                />
              ))
            ) : (
              /* The source was unreachable. Never render an empty policy page -
                 that is worse for a reviewer than an honest pointer, because an
                 empty legal page reads as no policy at all. */
              <div className="legal-unavailable" role="alert">
                <h2 className="legal-section-title" style={{ marginTop: 0 }}>
                  Document temporarily unavailable here
                </h2>
                <p className="legal-prose">
                  This page mirrors the {title} published on the GlobalCodio application, and that
                  source could not be reached just now. The document itself is unaffected and remains
                  in force.
                </p>
                <p className="legal-prose">
                  Read the current version at{' '}
                  <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                    {sourceUrl.replace(/^https?:\/\//, '')}
                  </a>
                  , or email{' '}
                  <a href="mailto:info@globalcodio.ai">info@globalcodio.ai</a> and we will send you a
                  copy.
                </p>
              </div>
            )}

            <p className="legal-source-note">
              Published by Medicodio Inc., operator of the GlobalCodio platform. This page is served
              from www.globalcodio.ai and {mirrored ? 'reproduces' : 'points to'} the document
              maintained at{' '}
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                {sourceUrl.replace(/^https?:\/\//, '')}
              </a>
              , which is the controlling version if the two ever differ.
            </p>
          </article>
        </div>
      </Section>
    </div>
  );
}
