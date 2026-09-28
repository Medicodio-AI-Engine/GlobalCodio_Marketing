import React from 'react';
import { AUDIT_URL } from '../../lib/navigation';

/* Hero entrance is CSS-only (.hero-in + heroRise in global.css): it starts on first
   paint from the server-rendered HTML instead of waiting for hydration, and animates
   only opacity/transform so it stays on the compositor. --hd sets the stagger delay. */
const d = (s) => ({ '--hd': `${s}s` });

/* Static assets in /public */
const dashboardPreviewSrc = '/assets/dashboard.webp';
const dashboardPreviewSrcSet =
  '/assets/dashboard-960.webp 960w, /assets/dashboard-1280.webp 1280w, /assets/dashboard.webp 1920w';

/* Hero - editorial headline, sub, CTAs, then dashboard preview below.
   Background: clean light base with a faint top-down blue wash; the premium
   depth comes from .hero-aurora (blue/sky radials) + the dashboard glow,
   so the serif headline stays crisp and legible (light-enterprise direction). */
export const Hero = () => (
    <section
      className="hero-full-viewport hero-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        position: 'relative',
        isolation: 'isolate',
        background:
          'linear-gradient(180deg, #f9f8f7 0%, #fcfbfa 35%, #ffffff 75%)',
      }}
    >
      <div className="hero-aurora" aria-hidden="true" />
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-copy-stack">
        <div
          className="container"
          style={{ position: 'relative', zIndex: 2, width: '100%' }}
        >

          {/* Headline - word-by-word rise */}
          <h1
            className="reveal d1 display type-display-hero"
            style={{ textAlign: 'center', marginBottom: 'var(--space-sm)', lineHeight: 1.12 }}
          >
            {/* Line 1 */}
            <span style={{ display: 'block' }}>
              {['Win', 'Cases.'].map((word, i, arr) => (
                <React.Fragment key={i}>
                  <span className="hero-in" style={{ display: 'inline-block', ...d(0.02 + i * 0.06) }}>
                    {word}
                  </span>
                  {i < arr.length - 1 && ' '}
                </React.Fragment>
              ))}
            </span>

            {/* Line 2: animate the whole em as one unit */}
            <em
              className="text-grad-blue hero-in"
              style={{ display: 'block', fontStyle: 'italic', ...d(0.12) }}
            >
              We&rsquo;ll Handle All the Technology.
            </em>
          </h1>

          {/* Pills */}
          <div
            className="reveal hero-pill-row hero-in"
            style={{ textAlign: 'center', ...d(0.14) }}
          >
            {['Global Immigration Case Management', 'Global Immigration Forms', 'Managed Tech Operations', 'Technology Audit'].map((label) => (
              <span key={label} className="pill">{label}</span>
            ))}
          </div>

          {/* Body copy - full */}
          <p
            className="reveal d2 type-lead hero-lead hero-lead-full hero-in"
            style={{ lineHeight: 1.55, color: 'var(--ink-3)', textAlign: 'center', margin: '0 auto var(--space-md)', ...d(0.18) }}
          >
            GlobalCodio gives immigration law firms and corporate immigration departments their own AI workforce-built,
            deployed, and managed end-to-end. Our AI Agents handle case management, client communications, renewals,
            and business development,{' '}
            <strong>while our team runs the entire technology operation.</strong>{' '}
            Connected to a global ecosystem of immigration partners, we help your team cut costs and grow revenue-without ever
            managing technology again.
          </p>

          {/* Body copy - mobile */}
          <p
            className="reveal d2 type-lead hero-lead hero-lead-mobile hero-in"
            style={{ lineHeight: 1.48, color: 'var(--ink-3)', textAlign: 'center', margin: '0 auto var(--space-md)', ...d(0.18) }}
          >
            Your AI workforce for immigration-agents for cases, clients, renewals, and growth,{' '}
            <strong>while our team runs the entire technology operation.</strong>
          </p>

          {/* CTAs */}
          <div
            className="reveal d3 hero-cta-row hero-in"
            style={{ display: 'flex', gap: 'var(--space-xs)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 0, ...d(0.24) }}
          >
            <a href={AUDIT_URL} className="btn btn-dark">
              Book your free tech audit
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a href="#operation" className="btn btn-glass">
              See how it works
            </a>
          </div>

          {/* Trust line */}
          <div
            className="reveal d4 hero-trust hero-in"
            style={d(0.3)}
            aria-label="Trusted by immigration practices worldwide"
          >
            <span className="hero-trust-copy">
              Built by the founder of <strong>INSZoom</strong> - trusted by 1,000+ immigration firms.
            </span>
          </div>

        </div>
      </div>

      {/* Dashboard preview - hidden on mobile via .hero-dashboard-slot in global.css */}
      <div className="hero-dashboard-slot">
        <div aria-hidden="true" className="blue-glow hero-dashboard-glow" />
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <HeroDashboard />
        </div>
        <div
          aria-hidden="true"
          className="hero-dashboard-fade"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '100vw',
            height: 'clamp(calc(120px * var(--ui-scale)), calc(32vw * var(--ui-scale)), calc(300px * var(--ui-scale)))',
            pointerEvents: 'none',
            zIndex: 6,
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 32%, rgba(255,255,255,0.55) 68%, rgba(255,255,255,0.94) 88%, #ffffff 100%)',
          }}
        />
      </div>
    </section>
);

export const HeroDashboard = ({ imageHeight } = {}) => (
  <div
    className="hero-dash-in"
    style={{
      position: 'relative',
      width: '100%',
      borderRadius: '20px 20px 0 0',
      overflow: 'hidden',
      border: '1px solid var(--line-2)',
      borderBottom: 'none',
      background: '#fff',
      boxShadow: '0 40px 80px -36px rgba(11,19,36,.22), 0 8px 16px rgba(11,19,36,.04)',
      perspective: 1200,
    }}
  >
    {/* Browser chrome - Safari-like light pills; icons use currentColor from header */}
    <div
      className="hero-dash-chrome"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 14px',
        borderBottom: '1px solid var(--line)',
        background: 'var(--surface-2)',
        color: 'var(--ink-3)',
        fontFamily: 'var(--sans)',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexShrink: 0 }} aria-hidden="true">
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '5px 9px',
          background: '#fff',
          border: '1px solid var(--line)',
          borderRadius: 999,
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.35">
          <rect x="2.5" y="3" width="7" height="10" rx="1.2" />
          <path d="M11 5v6" strokeLinecap="round" />
        </svg>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M2.5 3.5L5 6l2.5-2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          padding: '4px 6px',
          background: '#fff',
          border: '1px solid var(--line)',
          borderRadius: 999,
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round">
          <path d="M10.5 4.5L6 9l4.5 4.5" />
        </svg>
        <span style={{ width: 1, height: 14, background: 'var(--line)', margin: '0 1px' }} />
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" opacity={0.35}>
          <path d="M7.5 4.5L12 9l-4.5 4.5" />
        </svg>
      </div>

      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 360,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '6px 12px',
            background: '#fff',
            border: '1px solid var(--line)',
            borderRadius: 999,
            fontSize: 12.5,
            fontWeight: 550,
            color: 'currentColor',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round">
            <path d="M3 4.5h10M3 8h10M3 11.5h7" />
          </svg>
          <span
            style={{
              flex: 1,
              minWidth: 0,
              textAlign: 'center',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--mono)',
              fontWeight: 500,
            }}
          >
            app.globalcodio.ai
          </span>
          <span
            aria-hidden="true"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 2,
              margin: 0,
              color: 'inherit',
              cursor: 'default',
              flexShrink: 0,
              lineHeight: 0,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 2v6h-6" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L21 10" />
            </svg>
          </span>
        </div>
      </div>

      <div
        style={{
          fontSize: 10,
          fontFamily: 'var(--mono)',
          fontWeight: 600,
          letterSpacing: '0.06em',
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          flexShrink: 0,
          color: 'currentColor',
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#22c55e',
            animation: 'livepulse 2s infinite',
          }}
        />
        LIVE
      </div>
    </div>

    <div
      style={{
        position: 'relative',
        background: '#fff',
        overflow: 'hidden',
      }}
    >
      <img
        src={dashboardPreviewSrc}
        srcSet={dashboardPreviewSrcSet}
        sizes="(max-width: 1320px) 100vw, 1264px"
        alt="GlobalCodio AI workforce immigration platform dashboard for law firms and corporate teams"
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        style={{
          display: 'block',
          width: '100%',
          height: imageHeight ?? 'clamp(calc(220px * var(--ui-scale)), calc(40vw * var(--ui-scale)), calc(480px * var(--ui-scale)))',
          objectFit: 'cover',
          objectPosition: 'center 2%',
        }}
      />

      {/* Floating annotation pills */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '18%',
          right: '-2%',
          padding: '10px 14px',
          background: '#fff',
          border: '1px solid var(--line-2)',
          borderRadius: 12,
          boxShadow: '0 20px 40px -20px rgba(11,19,36,.2)',
          fontSize: 12,
          display: 'none',
          alignItems: 'center',
          gap: 8,
        }}
        className="float-anno"
      >
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--blue)' }} />
        <span>
          <b>Policy delta detected</b>
          <br />
          <span style={{ color: 'var(--muted)' }}>USCIS I-129 Part 5</span>
        </span>
      </div>
    </div>
  </div>
);
