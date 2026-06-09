'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionEyebrow } from '../../components/ui/PageKit';
import {
  Bot,
  CalendarClock,
  ClipboardList,
  FileText,
  Network,
  PenLine,
  RefreshCw,
} from 'lucide-react';
import {
  GlobeIcon,
  MessageCircleIcon,
  SettingsIcon,
  TrendingUpIcon,
} from '@animateicons/react/lucide';

export const LogoStrip = () => {
  const logos = [
    'Immigration law firms',
    'Corporate immigration departments',
    'Boutique & solo practices',
    'National immigration firms',
    'Corporate mobility teams',
    'Enterprise immigration groups',
    'HR–legal hybrid teams',
    'High-volume consular firms',
  ];
  return (
    <section className="logo-strip-section">
      <div className="container">
        <p className="logo-strip-title eyebrow" style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: 'var(--space-xl)' }}>
          Immigration practices from solo to enterprise
        </p>
        <div className="logo-strip-marquee">
          <div className="logo-strip-fade logo-strip-fade--left" aria-hidden="true" />
          <div className="logo-strip-fade logo-strip-fade--right" aria-hidden="true" />
          <div className="logo-strip-track">
            {[...logos, ...logos].map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const OutcomesHeadline = () => (
  <section className="outcomes-headline-section">
    <div className="container">
      <div className="reveal section-head-wide">
        <SectionEyebrow>Value-Based Partnership</SectionEyebrow>
        <h2 className="display type-display-lg">
          <span style={{ display: 'block' }}>Agents that handle the work -</span>
          <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)' }}>pricing tied to what they deliver.</em>
        </h2>
        <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.6, maxWidth: '62ch', marginTop: 'var(--space-lg)' }}>
          What if AI Agents handled your case prep, renewals, and client comms - and you only paid based on
          the savings and revenue they generated?
        </p>
      </div>
    </div>
  </section>
);

const PILLARS = [
  { n: '01', Icon: Bot, animated: false, h: 'AI Agents', b: 'A suite of autonomous AI workers handling case management, client communications, renewals, and business development - purpose-built for immigration workflows.', featured: true },
  { n: '02', Icon: SettingsIcon, animated: true, h: 'Managed Technology Operations', b: 'We deploy, configure, monitor, and optimize the entire agent ecosystem within your firm. Updates, integrations, support, and ongoing improvements - fully managed by our team.' },
  { n: '03', Icon: Network, animated: false, h: 'Global Immigration Ecosystem', b: 'Curated network of pre-vetted immigration service providers worldwide - translators, document authentication services, foreign attorneys, medical exam centers, courier services, and more - all accessible through one platform.' },
];

function PillarCard({ v, i }) {
  const iconRef = useRef(null);
  const onMouseEnter = v.animated ? () => iconRef.current?.startAnimation() : undefined;
  const onMouseLeave = v.animated ? () => iconRef.current?.stopAnimation() : undefined;
  return (
    <article
      className={`pillar-card reveal d${i + 1}${v.featured ? ' pillar-card--featured' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="pillar-card-top">
        <div className="agent-icon pillar-icon" aria-hidden="true">
          {v.animated
            ? <v.Icon ref={iconRef} size={20} isAnimated={false} />
            : <v.Icon size={20} strokeWidth={1.75} />}
        </div>
        <span className="mono pillar-index">/{v.n}</span>
      </div>
      <h3 className="display pillar-title">{v.h}</h3>
      <p className="pillar-body">{v.b}</p>
    </article>
  );
}

export const ValueProp = () => (
  <section className="sec sec-pillars" id="pillars">
    <div className="container">
      <div className="reveal section-head-wide">
        <SectionEyebrow>The Three Pillars</SectionEyebrow>
        <h2 className="display type-display-lg">
          <span style={{ display: 'block' }}>One operation,</span>
          <em style={{ display: 'block', fontStyle: 'italic' }} className="text-grad-blue">three pillars working as one.</em>
        </h2>
      </div>

      <div className="pillars-grid vp-grid">
        {PILLARS.map((v, i) => <PillarCard key={i} v={v} i={i} />)}
      </div>
    </div>
  </section>
);

const AGENTS = [
  { Icon: ClipboardList, animated: false, h: 'Intake Agent', b: 'Collects client info, validates documents, opens cases' },
  { Icon: FileText, animated: false, h: 'Document Agent', b: 'Extracts data from passports, visas, foreign records, translates' },
  { Icon: PenLine, animated: false, h: 'Forms Agent', b: 'Auto-fills I-130, I-485, N-400, H-1B, EB-5, and other USCIS forms' },
  { Icon: CalendarClock, animated: false, h: 'Deadline Agent', b: 'Tracks every case deadline, alerts on expirations' },
  { Icon: MessageCircleIcon, animated: true, h: 'Client Comms Agent', b: 'Proactively updates clients, answers FAQs, sends reminders' },
  { Icon: RefreshCw, animated: false, h: 'Renewal Agent', b: 'Surfaces renewal opportunities from existing client data' },
  { Icon: TrendingUpIcon, animated: true, h: 'BD Agent', b: 'Runs business development campaigns, qualifies leads' },
  { Icon: GlobeIcon, animated: true, h: 'Ecosystem Agent', b: 'Coordinates with translators, courier services, foreign agents' },
];

function AgentCard({ a, i }) {
  const iconRef = useRef(null);
  const onMouseEnter = a.animated ? () => iconRef.current?.startAnimation() : undefined;
  const onMouseLeave = a.animated ? () => iconRef.current?.stopAnimation() : undefined;
  return (
    <article
      key={a.h}
      className={`card card-compact reveal d${(i % 4) + 1}`}
      style={{ display: 'flex', flexDirection: 'column', gap: 'calc(10px * var(--ui-scale))' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="agent-icon" aria-hidden="true">
        {a.animated
          ? <a.Icon ref={iconRef} size={20} isAnimated={false} />
          : <a.Icon size={20} strokeWidth={1.75} />}
      </div>
      <h3 className="display text-card-sm">{a.h}</h3>
      <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--ink-3)', lineHeight: 1.55 }}>{a.b}</p>
    </article>
  );
}

export const AgentCatalog = () => (
  <section className="sec sec-surface" id="agents">
    <div className="container">
      <div className="reveal section-head-wide">
        <SectionEyebrow>The AI Agents</SectionEyebrow>
        <h2 className="display type-display-lg">
          <span style={{ display: 'block' }}>Autonomous workers</span>
          <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)' }}>for every immigration workflow.</em>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-lg)' }} className="agent-catalog-grid">
        {AGENTS.map((a, i) => <AgentCard key={a.h} a={a} i={i} />)}
      </div>
    </div>
  </section>
);

export const HowItWorks = () => {
  const [open, setOpen] = React.useState(0);
  const toggle = (i) => {
    setOpen((prev) => (prev === i ? null : i));
    window.setTimeout(() => ScrollTrigger.refresh(), 620);
  };
  const steps = [
    {
      t: '01',
      h: 'We already have case management software.',
      b: 'Current case management platforms were not built for AI - they are not AI-native. CodioCMS is designed from the ground up to work seamlessly with AI agents; it is the platform immigration tech has been waiting for. Yes, you will need to migrate to our software. We manage the full technology operation: your team keeps working while we handle implementation, configuration, training, and transition. Afterwards, we continue to manage it for you.',
      meta: ['AI-native platform', 'We manage the migration'],
    },
    {
      t: '02',
      h: 'We don\'t have time to implement new software.',
      b: 'We manage the full technology operation for you. Your team keeps working while we handle implementation, configuration, training, and go-live.',
      meta: ['Fully managed ops', 'We own the rollout'],
    },
    {
      t: '03',
      h: 'Will AI Agents replace our staff?',
      b: 'No. Agents augment your team - handling repetitive case prep, comms, and renewals so attorneys focus on what only humans can do. Every extraction and draft remains attorney-reviewable before it leaves your firm.',
      meta: ['Augment, not replace', 'Attorney sign-off'],
    },
    {
      t: '04',
      h: 'Switching platforms seems risky - will we lose data or downtime?',
      b: 'Migration is planned and handled by our team. Your records are mapped before anything moves, active cases keep running, and we manage extraction from your current vendor so nothing important gets left behind.',
      meta: ['Guided migration', 'Active cases continue'],
    },
  ];

  return (
    <section id="how" className="sec sec-surface" aria-labelledby="faq-heading">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'var(--space-7xl)', alignItems: 'start' }} className="how-grid">
          <div className="reveal">
            <SectionEyebrow>FAQ&apos;s</SectionEyebrow>
            <h2 id="faq-heading" className="display type-display-lg" style={{ marginBottom: 'var(--space-xl)' }}>
              <span style={{ display: 'block' }}>Straight answers,</span>
              <em style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)' }}>before you commit.</em>
            </h2>
          </div>

          <div role="list">
            {steps.map((s, i) => (
              <div
                key={i}
                role="listitem"
                className="reveal"
                style={{
                  borderBottom: i < steps.length - 1 ? '1px solid var(--line)' : 'none',
                  padding: 'calc(22px * var(--ui-scale)) 0',
                }}
              >
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={open === i}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => toggle(i)}
                  style={{ display: 'flex', width: '100%', alignItems: 'baseline', gap: 'var(--space-xl)', textAlign: 'left', padding: 0, background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'inherit' }}
                >
                  <span className="mono" style={{ fontSize: 'calc(14px * var(--ui-scale))', color: open === i ? 'var(--blue)' : 'var(--muted)', letterSpacing: '.06em', transition: 'color 0.45s cubic-bezier(0.22, 1, 0.36, 1)' }}>/{s.t}</span>
                  <span className="display type-display-md" style={{ flex: 1, color: open === i ? 'var(--ink)' : 'var(--muted)', transition: 'color 0.45s cubic-bezier(0.22, 1, 0.36, 1)' }}>{s.h}</span>
                  <motion.span
                    aria-hidden
                    className="faq-toggle-icon"
                    style={{ width: 'calc(32px * var(--ui-scale))', height: 'calc(32px * var(--ui-scale))', borderRadius: '50%', border: '1px solid var(--line-blue)', display: 'grid', placeItems: 'center', flexShrink: 0 }}
                    animate={{ backgroundColor: open === i ? 'var(--blue)' : '#ffffff', color: open === i ? '#ffffff' : 'var(--blue)' }}
                    transition={{ backgroundColor: { duration: 0.48, ease: [0.22, 1, 0.36, 1] }, color: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } }}
                  >
                    <motion.svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ display: 'block' }} animate={{ rotate: open === i ? 45 : 0 }} transition={{ type: 'spring', stiffness: 320, damping: 26, mass: 0.75 }}>
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" />
                    </motion.svg>
                  </motion.span>
                </button>
                <motion.div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} initial={false} animate={{ height: open === i ? 'auto' : 0 }} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: 'hidden' }}>
                  <motion.div
                    style={{ padding: 'calc(24px * var(--ui-scale)) 0 calc(4px * var(--ui-scale)) calc(42px * var(--ui-scale))', maxWidth: '62ch' }}
                    initial={false}
                    animate={{ opacity: open === i ? 1 : 0, y: open === i ? 0 : -6 }}
                    transition={{ duration: open === i ? 0.42 : 0.22, ease: [0.22, 1, 0.36, 1], delay: open === i ? 0.06 : 0 }}
                  >
                    <p style={{ fontSize: 'calc(16px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.65, marginBottom: 'calc(18px * var(--ui-scale))' }}>{s.b}</p>
                    <div style={{ display: 'flex', gap: 'calc(10px * var(--ui-scale))', flexWrap: 'wrap' }}>
                      {s.meta.map((m) => (
                        <span key={m} className="mono" style={{ fontSize: 'calc(11.5px * var(--ui-scale))', padding: 'calc(5px * var(--ui-scale)) calc(10px * var(--ui-scale))', background: '#fff', border: '1px solid var(--line)', borderRadius: 56, color: 'var(--ink-3)', letterSpacing: '.02em' }}>{m}</span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
