'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.2, 0.7, 0.2, 1];

/* ── Stagger containers ── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const headlineStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.02 } },
};
/* Word-by-word stagger for split text */
const wordStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0 } },
};

/* ── Variants ── */

/* Primary headline words: blur(10px) + slide up + fade */
const wordRise = {
  hidden: { opacity: 0, y: 12, filter: 'blur(10px)' },
  show: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.55, ease },
  },
};

/* Gradient headline words: no filter - blur breaks background-clip:text on the parent em */
const wordRiseGradient = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease },
  },
};

/* Body / sub-copy: lighter blur (7px) + smaller lift */
const bodyRise = {
  hidden: { opacity: 0, y: 10, filter: 'blur(7px)' },
  show: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.58, ease },
  },
};

/* Pills / trust line: faintest blur (5px) */
const subtleRise = {
  hidden: { opacity: 0, y: 8, filter: 'blur(5px)' },
  show: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.52, ease },
  },
};

/* Dashboard: lift from further below, slight perspective tilt */
const dashRise = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  show: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.9, delay: 0.38, ease },
  },
};

/* Helper: split a string into word-span elements */
const Words = ({ text, className, style }) => (
  <motion.span className={className} style={style} variants={wordStagger}>
    {text.split(' ').map((word, i) => (
      <motion.span
        key={i}
        variants={wordRise}
        style={{ display: 'inline-block', whiteSpace: 'pre' }}
      >
        {word}{i < text.split(' ').length - 1 ? ' ' : ''}
      </motion.span>
    ))}
  </motion.span>
);

const btnTap = { whileHover: { scale: 1.03, y: -2 }, whileTap: { scale: 0.98 } };

/* Static assets in /public */
const dashboardPreviewSrc = '/assets/dashboard.png';

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
        <motion.div
          className="container"
          style={{ position: 'relative', zIndex: 2, width: '100%' }}
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          {/* Headline - word-by-word blur+slide */}
          <motion.h1
            className="reveal d1 display type-display-hero"
            style={{ textAlign: 'center', marginBottom: 'var(--space-sm)', lineHeight: 1.12 }}
            variants={headlineStagger}
          >
            {/* Line 1 */}
            <motion.span style={{ display: 'block' }} variants={wordStagger}>
              {['Win', 'Cases.'].map((word, i, arr) => (
                <React.Fragment key={i}>
                  <motion.span variants={wordRise} style={{ display: 'inline-block' }}>
                    {word}
                  </motion.span>
                  {i < arr.length - 1 && ' '}
                </React.Fragment>
              ))}
            </motion.span>

            {/* Line 2: animate the whole em as one unit - blur on the parent works fine */}
            <motion.em
              className="text-grad-blue"
              style={{ display: 'block', fontStyle: 'italic' }}
              variants={wordRise}
            >
              We&rsquo;ll Handle All the Technology.
            </motion.em>
          </motion.h1>

          {/* Pills - subtle blur tier */}
          <motion.div
            className="reveal hero-pill-row"
            style={{ textAlign: 'center' }}
            variants={subtleRise}
          >
            {['Global Immigration Case Management', 'Global Immigration Forms', 'Managed Tech Operations', 'Technology Audit'].map((label) => (
              <span key={label} className="pill">{label}</span>
            ))}
          </motion.div>

          {/* Body copy - medium blur tier, full */}
          <motion.p
            className="reveal d2 type-lead hero-lead hero-lead-full"
            style={{ lineHeight: 1.55, color: 'var(--ink-3)', textAlign: 'center', margin: '0 auto var(--space-md)' }}
            variants={bodyRise}
          >
            GlobalCodio gives immigration law firms and corporate immigration departments their own AI workforce-built,
            deployed, and managed end-to-end. Our AI Agents handle case management, client communications, renewals,
            and business development,{' '}
            <strong>while our team runs the entire technology operation.</strong>{' '}
            Connected to a global ecosystem of immigration partners, we help your team cut costs and grow revenue-without ever
            managing technology again.
          </motion.p>

          {/* Body copy - mobile */}
          <motion.p
            className="reveal d2 type-lead hero-lead hero-lead-mobile"
            style={{ lineHeight: 1.48, color: 'var(--ink-3)', textAlign: 'center', margin: '0 auto var(--space-md)' }}
            variants={bodyRise}
          >
            Your AI workforce for immigration-agents for cases, clients, renewals, and growth,{' '}
            <strong>while our team runs the entire technology operation.</strong>
          </motion.p>

          {/* CTAs - subtle tier, slide-up */}
          <motion.div
            className="reveal d3 hero-cta-row"
            style={{ display: 'flex', gap: 'var(--space-xs)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 0 }}
            variants={subtleRise}
          >
            <motion.a href="/contact" className="btn btn-dark" {...btnTap}>
              Book your free tech audit
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </motion.a>
            <motion.a href="#operation" className="btn btn-glass" {...btnTap}>
              See how it works
            </motion.a>
          </motion.div>

          {/* Trust line - faintest tier */}
          <motion.div
            className="reveal d4 hero-trust"
            variants={subtleRise}
            aria-label="Trusted by immigration practices worldwide"
          >
            <span className="hero-trust-copy">
              Built by the founder of <strong>INSZoom</strong> - trusted by 1,000+ immigration firms.
            </span>
          </motion.div>

        </motion.div>
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
  <motion.div
    variants={dashRise}
    initial="hidden"
    animate="show"
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
      <motion.img
        src={dashboardPreviewSrc}
        alt="GlobalCodio AI workforce immigration platform dashboard for law firms and corporate teams"
        width={1200}
        height={630}
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
  </motion.div>
);
