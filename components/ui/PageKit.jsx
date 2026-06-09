'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ICON_PALETTE } from '../../lib/tokens';

const ease = [0.22, 1, 0.36, 1];
const btnTap = { whileHover: { scale: 1.03, y: -2 }, whileTap: { scale: 0.98 } };

export const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export const SmartLink = ({ href, className, children, ...rest }) => {
  const isInternal = href && href.startsWith('/') && !href.startsWith('//');
  if (isInternal) return <Link href={href} className={className} {...rest}>{children}</Link>;
  return <a href={href} className={className} {...rest}>{children}</a>;
};

export const SectionEyebrow = ({ children, align = 'left' }) => (
  <div className={`section-eyebrow-row${align === 'center' ? ' section-eyebrow-row--center' : ''}`}>
    <span className="pill section-eyebrow-pill">
      <span className="hero-eyebrow-dot" aria-hidden="true" />
      <span className="section-eyebrow-text">{children}</span>
    </span>
  </div>
);

export const SplitHeading = ({ lead, emphasis, className = 'type-display-lg', as: Tag = 'h2', inline = false, style }) => (
  <Tag className={`display ${className}${inline ? ' split-heading--inline' : ''}`.trim()} style={style}>
    {lead && <span style={inline ? { color: 'var(--ink)' } : { display: 'block' }}>{lead}{inline && emphasis ? ' ' : null}</span>}
    {emphasis && <em className="text-grad-blue" style={{ ...(inline ? {} : { display: 'block' }), fontStyle: 'italic' }}>{emphasis}</em>}
  </Tag>
);

export const PageHero = ({ eyebrow, lead, emphasis, sub, primary, secondary, headInline, children }) => (
  <section className="page-hero">
    <div className="hero-aurora" aria-hidden="true" />
    <div className="hero-grid-overlay" aria-hidden="true" />
    <div className="container page-hero-inner">
      {eyebrow && (
        <motion.div
          className="page-hero-eyebrow"
          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="pill hero-eyebrow-pill"><span className="hero-eyebrow-dot" aria-hidden="true" />{eyebrow}</span>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.65, delay: 0.06, ease }}
      >
        <SplitHeading lead={lead} emphasis={emphasis} className={`type-display-xl page-hero-title${headInline ? ' page-hero-title--inline' : ''}`} as="h1" inline={headInline} />
      </motion.div>
      {sub && (
        <motion.p
          className="page-hero-sub"
          initial={{ opacity: 0, y: 14, filter: 'blur(7px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.65, delay: 0.16, ease }}
        >
          {sub}
        </motion.p>
      )}
      {(primary || secondary) && (
        <motion.div
          className="page-hero-cta"
          initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.55, delay: 0.26, ease }}
        >
          {primary && <motion.span {...btnTap} style={{ display: 'inline-flex' }}><SmartLink href={primary.href} className="btn btn-primary">{primary.label}<Arrow /></SmartLink></motion.span>}
          {secondary && <motion.span {...btnTap} style={{ display: 'inline-flex' }}><SmartLink href={secondary.href} className="btn btn-glass">{secondary.label}</SmartLink></motion.span>}
        </motion.div>
      )}
      {children}
    </div>
  </section>
);

export const Section = ({ id, tone, eyebrow, lead, emphasis, intro, introMaxWidth, headAlign = 'left', headInline = false, children, className = '', style }) => (
  <section id={id} className={`sec ${tone || ''} ${className}`.trim()} style={style}>
    <div className="container">
      {(eyebrow || lead || emphasis || intro) && (
        <div className="reveal section-head-wide" style={headAlign === 'center' ? { marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' } : undefined}>
          {eyebrow && <SectionEyebrow align={headAlign}>{eyebrow}</SectionEyebrow>}
          {(lead || emphasis) && <SplitHeading lead={lead} emphasis={emphasis} inline={headInline} />}
          {intro && (
            <p
              className="section-intro"
              style={{
                ...(headAlign === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : null),
                ...(introMaxWidth ? { maxWidth: introMaxWidth } : null),
              }}
            >
              {intro}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  </section>
);

function FeatureCard({ it, i }) {
  const iconRef = useRef(null);
  const pal = it.iconGrad
    ? { grad: it.iconGrad, shadow: it.iconShadow || '0 2px 8px var(--blue-a16)', color: it.linkColor || ICON_PALETTE[i % ICON_PALETTE.length].color }
    : ICON_PALETTE[i % ICON_PALETTE.length];
  const Icon = it.Icon;
  const onMouseEnter = it.animated ? () => iconRef.current?.startAnimation() : undefined;
  const onMouseLeave = it.animated ? () => iconRef.current?.stopAnimation() : undefined;
  return (
    <article
      key={it.h || i}
      className={`feature-card reveal d${(i % 4) + 1}${it.featured ? ' feature-card--featured' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {Icon && (
        <div className="feature-card-top">
          <div className="agent-icon" aria-hidden="true" style={{ background: pal.grad, boxShadow: pal.shadow }}>
            {it.animated
              ? <Icon ref={iconRef} size={24} isAnimated={false} />
              : <Icon size={24} strokeWidth={1.6} />}
          </div>
        </div>
      )}
      <h3 className="display feature-card-title">{it.h}</h3>
      {it.b && <p className="feature-card-body">{it.b}</p>}
      {it.stat && <div className="mono feature-card-stat" style={{ color: pal.color }}>{it.stat}</div>}
      {it.links && (
        <div className="feature-card-links">
          {it.links.map((l) => (
            <SmartLink key={l.label} href={l.href} className="feature-card-link" style={it.linkColor ? { color: it.linkColor } : undefined}>
              {l.label} <Arrow />
            </SmartLink>
          ))}
        </div>
      )}
    </article>
  );
}

export const FeatureGrid = ({ items, cols = 3 }) => (
  <div className={`feature-grid feature-grid--${cols}`}>
    {items.map((it, i) => <FeatureCard key={it.h || i} it={it} i={i} />)}
  </div>
);

export const StepList = ({ steps, revealRows = true }) => (
  <ol className="step-list">
    {steps.map((s, i) => (
      <li key={i} className={`step-row${revealRows ? ' reveal' : ''}`}>
        <span className="mono step-index">{String(i + 1).padStart(2, '0')}</span>
        <div className="step-body">
          <h4 className="step-title">{s.h}</h4>
          {s.b && <p className="step-text">{s.b}</p>}
        </div>
      </li>
    ))}
  </ol>
);

export const CtaBand = ({ lead, emphasis, sub, primary, secondary }) => (
  <section className="sec sec-cta">
    <div className="container-narrow" style={{ textAlign: 'center', position: 'relative' }}>
      <div aria-hidden="true" className="blue-glow" />
      <h2 className="reveal d1 display type-display-cta" style={{ position: 'relative', textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
        <span style={{ display: 'block' }}>{lead}</span>
        {emphasis && <em className="text-grad-blue" style={{ display: 'block', fontStyle: 'italic' }}>{emphasis}</em>}
      </h2>
      {sub && <p className="reveal d1" style={{ fontSize: 'calc(18px * var(--ui-scale))', color: 'var(--ink-3)', maxWidth: '54ch', margin: '0 auto var(--space-3xl)', lineHeight: 1.55, position: 'relative' }}>{sub}</p>}
      <div className="reveal d2" style={{ display: 'flex', gap: 'var(--space-xs)', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
        {primary && <SmartLink href={primary.href} className="btn btn-dark">{primary.label} <Arrow /></SmartLink>}
        {secondary && <SmartLink href={secondary.href} className="btn btn-surface">{secondary.label}</SmartLink>}
      </div>
    </div>
  </section>
);
