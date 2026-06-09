'use client';

import Link from 'next/link';
import { FOOTER_COLUMNS, SUPPORT_EMAIL, SUPPORT_MAILTO, SITE_URL, AUDIT_URL } from '../../lib/navigation';
import { Logo } from './Nav';

const FooterLink = ({ href, children, ...rest }) => {
  const internal = href && href.startsWith('/') && !href.startsWith('//');
  return internal ? <Link href={href} {...rest}>{children}</Link> : <a href={href} {...rest}>{children}</a>;
};

export const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--line)', padding: '64px 0 36px', background: '#fff' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr', gap: 32, marginBottom: 48 }} className="ft-grid">
        <div style={{ maxWidth: '32ch' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16, lineHeight: 0 }}>
            <Logo height={36} />
          </div>
          <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>
            AI Workforce for Global Immigration. Deployed and Managed.
          </p>
          <div style={{ marginTop: 16, fontSize: 13.5, lineHeight: 1.8 }}>
            <a href={SITE_URL} style={{ color: 'var(--ink-3)', display: 'block' }}>www.globalcodio.ai</a>
            <a href={SUPPORT_MAILTO} style={{ color: 'var(--ink-3)', display: 'block' }}>{SUPPORT_EMAIL}</a>
          </div>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>{col.title}</div>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 10, fontSize: 13.5 }}>
              {col.links.map((it) => {
                const isExternal = it.href.startsWith('https://') && !it.href.startsWith('https://www.globalcodio');
                return (
                  <li key={it.label + it.href}>
                    <FooterLink href={it.href} style={{ color: 'var(--ink-3)', display: 'inline-flex', alignItems: 'center', gap: 4 }} {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                      {it.label}
                      {isExternal && (
                        <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 10, height: 10, opacity: 0.5, flexShrink: 0 }}>
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
      <div style={{ borderTop: '1px solid var(--line)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'var(--muted)', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <span>© 2026 GlobalCodio. All rights reserved.</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <FooterLink href="/privacy-policy" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Privacy Policy</FooterLink>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>California, USA · Bangalore, India</span>
        </div>
        <div className="mono" style={{ letterSpacing: '.05em', color: 'var(--blue)' }}>Win Cases. We&rsquo;ll Handle All the Technology.</div>
      </div>
      <div aria-hidden="true" style={{ position: 'relative', marginTop: 48, textAlign: 'center' }}>
        <div className="display" style={{ fontSize: 'clamp(72px,18vw,260px)', color: 'var(--surface)', pointerEvents: 'none', letterSpacing: '-0.03em', lineHeight: 0.95, userSelect: 'none' }}>
          GlobalCodio<span style={{ color: 'var(--blue-soft)' }}>.ai</span>
        </div>
        <div aria-hidden style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '50%', pointerEvents: 'none', background: 'linear-gradient(to top,#fff 0%,rgba(255,255,255,.92) 28%,rgba(255,255,255,.4) 62%,rgba(255,255,255,0) 100%)' }} />
      </div>
      <style>{`@media(max-width:1024px){.ft-grid{grid-template-columns:1fr 1fr 1fr !important;}}@media(max-width:640px){.ft-grid{grid-template-columns:1fr 1fr !important;}}`}</style>
    </div>
  </footer>
);
