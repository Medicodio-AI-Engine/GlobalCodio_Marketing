'use client';

import Link from 'next/link';
import { FOOTER_COLUMNS, SUPPORT_EMAIL, SUPPORT_MAILTO, SITE_URL, PLATFORM_PRIVACY_PATH, PLATFORM_TERMS_PATH } from '../../lib/navigation';
import { OPEN_PREFERENCES_EVENT } from '../../lib/consent';
import { Logo } from './Nav';

const FooterLink = ({ href, children, ...rest }) => {
  const internal = href && href.startsWith('/') && !href.startsWith('//');
  return internal ? <Link href={href} {...rest}>{children}</Link> : <a href={href} {...rest}>{children}</a>;
};

const openPreferences = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
  }
};

export const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="ft-grid">
        <div className="ft-brand">
          <div className="ft-brand-logo">
            <Logo height={36} className="nav-logo" />
          </div>
          <p className="ft-brand-tagline">
            AI Workforce for Global Immigration. Deployed and Managed.
          </p>
          <div className="ft-brand-links">
            <a href={SITE_URL}>www.globalcodio.ai</a>
            <a href={SUPPORT_MAILTO}>{SUPPORT_EMAIL}</a>
          </div>
          {/* Corporate disclosure. GlobalCodio is a product line, not a legal
              entity - Medicodio Inc. is the contracting party named in every
              legal document on this site and in regulatory filings. Stated
              site-wide so it is visible without having to open a legal page. */}
          <p className="ft-brand-disclosure">
            GlobalCodio is a product of <strong>Medicodio Inc.</strong>, a Delaware corporation.
          </p>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title} className="ft-col">
            <div className="ft-col-title mono">{col.title}</div>
            <ul className="ft-col-links">
              {col.links.map((it) => {
                const isExternal = it.href.startsWith('https://') && !it.href.startsWith('https://www.globalcodio');
                return (
                  <li key={it.label + it.href}>
                    <FooterLink
                      href={it.href}
                      className="ft-link"
                      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {it.label}
                      {isExternal && (
                        <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ft-link-external">
                          <path d="M1.5 8.5l7-7M4 1.5h4.5V6" />
                        </svg>
                      )}
                    </FooterLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="ft-bar">
        <div className="ft-bar-legal">
          <span>© 2026 GlobalCodio, a product of Medicodio Inc. All rights reserved.</span>
          <span className="ft-bar-sep" aria-hidden="true">·</span>
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          <span className="ft-bar-sep" aria-hidden="true">·</span>
          <FooterLink href="/terms">Terms of Use</FooterLink>
          <span className="ft-bar-sep" aria-hidden="true">·</span>
          <FooterLink href={PLATFORM_PRIVACY_PATH}>Platform Privacy Policy</FooterLink>
          <span className="ft-bar-sep" aria-hidden="true">·</span>
          <FooterLink href={PLATFORM_TERMS_PATH}>Platform Terms</FooterLink>
          <span className="ft-bar-sep" aria-hidden="true">·</span>
          <button type="button" className="ft-legal-btn" onClick={openPreferences}>
            Cookie Preferences
          </button>
          <span className="ft-bar-sep" aria-hidden="true">·</span>
          <span>California, USA · Bangalore, India</span>
        </div>
        <div className="ft-bar-tagline mono">Win Cases. We&rsquo;ll Handle All the Technology.</div>
      </div>
      <div className="ft-watermark" aria-hidden="true">
        <div className="ft-watermark-text display">
          GlobalCodio<span className="ft-watermark-accent">.ai</span>
        </div>
        <div className="ft-watermark-fade" aria-hidden="true" />
      </div>
    </div>
  </footer>
);
