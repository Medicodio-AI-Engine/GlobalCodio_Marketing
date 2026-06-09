'use client';
import React from 'react';
import {
  GitBranch,
  LayoutTemplate,
  ClipboardList,
  Award,
  BarChart3,
  Database,
  Workflow,
  FileText,
  RefreshCw,
} from 'lucide-react';
import { BookOpenIcon, ZapIcon, TrendingUpIcon } from '@animateicons/react/lucide';
import { PageHero, Section, SectionEyebrow, FeatureGrid, CtaBand, SmartLink, SplitHeading } from '../../components/ui/PageKit';
import { ICON_PALETTE } from '../../lib/tokens';

const PROBLEM_GAPS = [
  'Templates don\'t reflect your case types',
  'Workflows don\'t follow your process',
  'Automations are never turned on',
  'Best practices are never documented',
];

const DELIVERABLES = [
  {
    Icon: GitBranch,
    h: 'Workflow Configuration',
    b: 'We map your firm\'s case lifecycle and configure CodioCMS workflows to match exactly how you operate - not generic out-of-the-box defaults.',
  },
  {
    Icon: LayoutTemplate,
    h: 'Template Library',
    b: 'We build out your firm\'s full template library - case types, jurisdictions, client communications, forms packages, and document standards.',
  },
  {
    Icon: ClipboardList,
    h: 'Forms Setup',
    b: 'We configure CodioForms for the countries you practice in and integrate forms directly into your case workflows.',
  },
  {
    Icon: BookOpenIcon,
    animated: true,
    h: 'Process Documentation',
    b: 'We capture the tribal knowledge that lives in your team\'s heads and turn it into documented workflows that survive any staff turnover.',
  },
  {
    Icon: ZapIcon,
    animated: true,
    h: 'Automation Setup',
    b: 'We turn on the rules engine, reminders, escalations, integrations, and triggers - the automation work most firms never get to.',
  },
  {
    Icon: Award,
    h: 'Best Practice Implementation',
    b: 'We bring in immigration-specific best practices informed by two decades of working with 1,500+ firms - so you start ahead.',
  },
  {
    Icon: TrendingUpIcon,
    animated: true,
    h: 'Continuous Optimization',
    b: 'As your firm evolves, CodioOps continuously tunes workflows, automations, and templates. This is not a one-time project. It\'s an ongoing service.',
  },
  {
    Icon: BarChart3,
    h: 'Quarterly Business Reviews',
    b: 'Every quarter, we audit platform usage, identify gaps, and recommend optimizations - keeping your firm at peak operational efficiency.',
  },
];

const DELIVERABLE_GROUPS = [
  { label: 'Configured at setup', items: DELIVERABLES.slice(0, 4) },
  { label: 'Activated & ongoing', items: DELIVERABLES.slice(4) },
];

const PHASES = [
  {
    title: 'Discovery',
    span: 'Weeks 1–2',
    body: 'We meet your team. Map your existing workflows. Identify what works, what\'s broken, and where the firm is losing time and money. Output: a customized CodioOps roadmap for your firm.',
  },
  {
    title: 'Configuration',
    span: 'Weeks 3–4',
    body: 'We configure CodioCMS to your exact workflows. Build your template library. Set up your forms. Document your processes. Turn on automations.',
  },
  {
    title: 'Optimization Launch',
    span: 'Weeks 5–6',
    body: 'Your team is trained. The platform is live. CodioOps begins active monitoring of platform usage and continuous tuning.',
  },
  {
    title: 'Ongoing Operations',
    span: 'Month 2 and Forever',
    body: 'Continuous optimization. Quarterly business reviews. New workflows added as your firm evolves. New AI agents tuned to your firm\'s processes. New automations added as opportunities surface.',
  },
];

const PHASE_GROUPS = [
  { label: 'Weeks 1–4 · Build', phases: PHASES.slice(0, 2) },
  { label: 'Weeks 5+ · Launch & run', phases: PHASES.slice(2) },
];

const COMPARISON_COLS = [
  {
    title: 'Traditional Implementation',
    points: [
      'One-time project, then handoff',
      'Configures and walks away',
      'Generic out-of-the-box setup',
      'Sold as a separate engagement',
    ],
  },
  {
    title: 'Generic Customer Support',
    points: [
      'Reactive - fixes things when broken',
      'Answers tickets, doesn\'t optimize',
      'No firm-specific knowledge',
      'Often gated behind tiers',
    ],
  },
  {
    title: 'CodioOps',
    featured: true,
    points: [
      'Continuous, embedded operations team',
      'Configures, optimizes, and continuously tunes',
      'Built around your exact workflows',
      'Always bundled. Always premium.',
    ],
  },
];

const MIGRATION_STATS = [
  { value: '~6 wks', label: 'typical full migration' },
  { value: 'Parallel', label: 'ops until you cut over' },
  { value: 'Verified', label: 'data before go-live' },
];

const MIGRATION_STEPS = [
  {
    Icon: Database,
    h: 'Move your data',
    b: 'Full export from your current platform - imported into CodioCMS and verified before anything moves.',
  },
  {
    Icon: Workflow,
    h: 'Rebuild workflows',
    b: 'Operations reconfigured in CodioCMS to match how your firm actually works.',
  },
  {
    Icon: FileText,
    h: 'Document processes',
    b: "Institutional knowledge captured in the system, not in people's heads.",
  },
  {
    Icon: RefreshCw,
    h: 'Run in parallel',
    b: 'Dual operations until your team is fully transitioned-usually within six weeks.',
    featured: true,
  },
];

const MIGRATION_FROM = ['Legacy CMS', 'Spreadsheets', 'Other platforms'];

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="var(--blue)" />
    <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CodioOps() {
  return (
    <>
      <PageHero
        eyebrow="CodioOps"
        lead="Software Doesn't Run a Firm."
        emphasis="Operations Do."
        sub="CodioOps is the dedicated team that configures, optimizes, and continuously tunes your CodioCMS platform to match exactly how your firm operates. Bundled with every GlobalCodio engagement."
        primary={{ href: '/free-tech-audit', label: 'Book Your Free Tech Audit' }}
        secondary={{ href: '#what-is-included', label: "See What's Included" }}
      />

      {/* Problem section */}
      <Section id="the-problem" tone="sec-surface" className="sec-codioops-problem">
        <div className="reveal codioops-problem">
          <div className="codioops-problem-head">
            <SectionEyebrow align="center">The Problem</SectionEyebrow>
            <SplitHeading lead="Most Firms Buy Software." emphasis="Few Ever Use It Well." />
            <p className="codioops-problem-lead">
              The biggest hidden problem in immigration law firms isn&apos;t bad software - it&apos;s software that was
              never configured to match how the firm actually operates.
            </p>
          </div>

          <div className="codioops-problem-panel reveal d1">
            <div className="codioops-problem-stat">
              <span className="display codioops-problem-stat-value">20%</span>
              <span className="codioops-problem-stat-label">
                Typical platform utilization when configuration is left to the firm alone
              </span>
            </div>
            <ul className="codioops-problem-gaps">
              {PROBLEM_GAPS.map((gap, i) => (
                <li key={gap} className={`codioops-problem-gap reveal d${(i % 4) + 1}`}>
                  <span className="codioops-problem-gap-mark" aria-hidden="true" />
                  <span>{gap}</span>
                </li>
              ))}
            </ul>
            <p className="codioops-problem-payoff reveal d2">
              <strong>CodioOps is how we solve that.</strong> Permanently.
            </p>
          </div>
        </div>
      </Section>

      {/* 8 Deliverables */}
      <Section
        id="what-is-included"
        className="sec sec-codioops-deliverables"
        eyebrow="What CodioOps Delivers"
        lead="Your Dedicated"
        emphasis="Operations Team."
        intro="Eight things CodioOps does for every CodioCMS firm - at setup and continuously thereafter."
        headAlign="center"
        headInline
      >
        <div className="codioops-deliverables reveal">
          <div className="codioops-deliverables-grid">
            {(() => {
              let flatIdx = 0;
              return DELIVERABLE_GROUPS.map((group, gi) => (
                <div key={group.label} className={`codioops-deliverables-col reveal d${gi + 1}`}>
                  <div className="mono codioops-deliverables-label">{group.label}</div>
                  <ul className="codioops-deliverables-list">
                    {group.items.map((d) => {
                      const Icon = d.Icon;
                      const pal = ICON_PALETTE[flatIdx++ % ICON_PALETTE.length];
                      return (
                        <li key={d.h} className="codioops-deliverable">
                          <span className="codioops-deliverable-icon" aria-hidden="true" style={{ background: pal.grad, boxShadow: pal.shadow }}>
                            <Icon size={18} strokeWidth={1.65} />
                          </span>
                          <div className="codioops-deliverable-copy">
                            <h3 className="display codioops-deliverable-title">{d.h}</h3>
                            <p className="codioops-deliverable-text">{d.b}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ));
            })()}
          </div>
        </div>
      </Section>

      {/* Founder's Insight */}
      <section className="sec sec-surface">
        <div className="container">
          <div
            className="reveal"
            style={{
              maxWidth: '800px',
              marginInline: 'auto',
              textAlign: 'center',
            }}
          >
            <SectionEyebrow align="center">Why We Built CodioOps</SectionEyebrow>
            <h2
              className="display type-display-lg"
              style={{
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: 'var(--space-2xl)',
              }}
            >
              Why We Built{' '}
              <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>
                CodioOps.
              </em>
            </h2>
            <div
              style={{
                fontSize: 'var(--text-body)',
                color: 'var(--ink-3)',
                lineHeight: 1.75,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-lg)',
              }}
            >
              <p>
                After two decades building INSZoom - and watching 1,500+ immigration firms adopt case management
                software - we saw the same pattern again and again: firms bought platforms they never fully used.
                They blamed the software. The software wasn't the problem.
              </p>
              <p>
                The problem was that no one was responsible for making the platform actually fit the firm. So we
                built CodioOps. A dedicated team that owns the configuration, optimization, and operational fit of
                CodioCMS to your firm - at setup and forever after.
              </p>
              <p>
                This is not a one-time implementation engagement that ends. This is your operations team. For as
                long as you're a GlobalCodio client.
              </p>
            </div>
            <div
              style={{
                marginTop: 'var(--space-3xl)',
                paddingTop: 'var(--space-2xl)',
                borderTop: '1px solid var(--line)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-md)',
              }}
            >
              <div
                style={{
                  width: 'calc(48px * var(--ui-scale))',
                  height: 'calc(48px * var(--ui-scale))',
                  borderRadius: '50%',
                  background: 'var(--blue-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/assets/founder.png"
                  alt="Umesh Vaidyamath"
                  width={48}
                  height={48}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'calc(14px * var(--ui-scale))', fontWeight: 600, color: 'var(--ink)' }}>
                  Umesh Vaidyamath
                </div>
                <div className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.08em', color: 'var(--muted)' }}>
                  FOUNDER &amp; CEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <Section
        id="difference"
        eyebrow="What Makes CodioOps Different"
        lead="Not Implementation."
        emphasis="Not Support. Operations."
        headAlign="center"
      >
        <div
          className="check-cols reveal"
          style={{ marginTop: 'var(--space-3xl)', alignItems: 'stretch' }}
        >
          {COMPARISON_COLS.map((col, i) => (
            <article
              key={col.title}
              className={`feature-card${col.featured ? ' feature-card--featured' : ''} reveal d${i + 1}`}
              style={{ display: 'flex', flexDirection: 'column', padding: 'calc(32px * var(--ui-scale))' }}
            >
              <h3
                className="display"
                style={{
                  fontSize: 'var(--text-display-md)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: 'var(--space-lg)',
                }}
              >
                {col.featured ? (
                  <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>
                    {col.title}
                  </em>
                ) : (
                  col.title
                )}
              </h3>
              <ul className="check-list" style={{ display: 'grid', gap: 'var(--space-md)' }}>
                {col.points.map((p) => (
                  <li key={p}>
                    <Check />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* 4-phase timeline */}
      <Section
        id="how-it-works"
        className="sec-codioops-engagement"
        tone="sec-surface"
        eyebrow="How CodioOps Works"
        lead="The CodioOps"
        emphasis="Engagement Model."
        headAlign="center"
        headInline
      >
        <div className="codioops-phases reveal">
          <div className="codioops-phases-grid">
            {PHASE_GROUPS.map((group, gi) => (
              <div key={group.label} className={`codioops-phases-col reveal d${gi + 1}`}>
                <div className="mono codioops-phases-label">{group.label}</div>
                <ol className="codioops-phases-list">
                  {group.phases.map((p) => (
                    <li key={p.title} className="codioops-phase">
                      <div className="codioops-phase-head">
                        <h3 className="display codioops-phase-title">{p.title}</h3>
                        <span className="mono codioops-phase-span">{p.span}</span>
                      </div>
                      <p className="codioops-phase-text">{p.body}</p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Migration */}
      <Section id="migration" tone="sec-surface" className="sec-migration">
        <div className="migration-head-row reveal">
          <div className="section-head-wide migration-head-copy">
            <SectionEyebrow align="center">Migration</SectionEyebrow>
            <SplitHeading lead="Coming from another platform?" emphasis="We migrate you." />
            <p className="section-intro">
              On another CMS? Our team runs the full move - data, workflows, documentation, and parallel
              operations until you&apos;re live on CodioCMS.
            </p>
          </div>
        </div>

        <FeatureGrid items={MIGRATION_STEPS} cols={4} />

        <div className="migration-foot reveal d1">
          <div className="migration-statband migration-statband--foot" aria-label="Migration at a glance">
            {MIGRATION_STATS.map((s) => (
              <div key={s.label} className="migration-stat">
                <span className="display migration-stat-value">{s.value}</span>
                <span className="migration-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="migration-foot-copy">
            <p className="migration-foot-lead">We migrate firms from platforms including:</p>
            <div className="migration-platforms" role="list">
              {MIGRATION_FROM.map((name) => (
                <span key={name} className="migration-platform" role="listitem">
                  {name}
                </span>
              ))}
            </div>
          </div>
          <SmartLink href="mailto:info@globalcodio.ai" className="btn btn-primary migration-foot-cta">
            Talk to us about migration
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </SmartLink>
        </div>
      </Section>

      {/* Always Bundled */}
      <section className="sec">
        <div className="container">
          <div
            className="reveal"
            style={{
              maxWidth: '760px',
              marginInline: 'auto',
              textAlign: 'center',
            }}
          >
            <SectionEyebrow align="center">Always Bundled. Always Premium.</SectionEyebrow>
            <h2
              className="display type-display-lg"
              style={{
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: 'var(--space-2xl)',
              }}
            >
              Included With Every{' '}
              <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>
                GlobalCodio Engagement.
              </em>
            </h2>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.7, marginBottom: 'var(--space-lg)' }}>
              CodioOps is not an add-on. It is not a separate purchase. It is the operations team that comes with
              every CodioCMS engagement - because we don't believe in selling software you'll never fully use.
            </p>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-2)', lineHeight: 1.7, fontWeight: 500 }}>
              This is the difference between GlobalCodio and every other immigration tech vendor. They sell you a
              platform. We give you a platform plus the team that makes it work for your firm.
            </p>
            <div
              style={{
                marginTop: 'var(--space-3xl)',
                padding: 'calc(28px * var(--ui-scale)) calc(32px * var(--ui-scale))',
                background: 'var(--blue-soft)',
                borderRadius: 'calc(16px * var(--ui-scale))',
                border: '1px solid rgba(25,80,198,0.15)',
              }}
            >
              <p
                className="display"
                style={{
                  fontSize: 'calc(22px * var(--ui-scale))',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.35,
                  color: 'var(--blue-ink)',
                  fontStyle: 'italic',
                }}
              >
                "You don't just get software. You get the operations team that makes it work."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <Section
        id="explore"
        tone="sec-surface"
        eyebrow="Explore GlobalCodio"
        lead="Everything that powers"
        emphasis="your firm's operations."
        headAlign="center"
      >
        <div className="check-cols" style={{ marginTop: 'var(--space-3xl)' }}>
          {[
            { href: '/platform', label: 'CodioCMS Platform', desc: 'The case management platform CodioOps configures and runs for your firm.' },
            { href: '/ai-agents', label: 'Codio AI Agents', desc: 'The AI workforce that CodioOps activates and continuously tunes for your workflows.' },
            { href: '/free-tech-audit', label: 'Free Tech Audit', desc: 'See exactly what CodioOps would build, configure, and optimize for your practice.' },
          ].map((link, i) => (
            <SmartLink key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
              <article
                className={`feature-card reveal d${i + 1}`}
                style={{ padding: 'calc(28px * var(--ui-scale))', height: '100%', cursor: 'pointer', transition: 'box-shadow .18s, transform .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px -8px rgba(11,19,36,0.13)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <h3 className="display" style={{ fontSize: 'calc(20px * var(--ui-scale))', letterSpacing: '-0.01em', lineHeight: 1.2, color: 'var(--ink)', marginBottom: 'var(--space-md)' }}>
                  {link.label}
                </h3>
                <p style={{ fontSize: 'calc(13.5px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.6 }}>
                  {link.desc}
                </p>
                <div className="feature-card-link" style={{ marginTop: 'var(--space-lg)', display: 'flex', alignItems: 'center', gap: 4, fontSize: 'calc(13px * var(--ui-scale)', color: 'var(--blue)', fontWeight: 600 }}>
                  Learn more
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }} aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                </div>
              </article>
            </SmartLink>
          ))}
        </div>
      </Section>

      <CtaBand
        lead="Ready to See What CodioOps"
        emphasis="Looks Like for Your Firm?"
        sub="Book a free 30-minute Tech Audit. We'll show you exactly what CodioOps would build, configure, and continuously optimize for your practice."
        primary={{ href: '/free-tech-audit', label: 'Book Your Free Tech Audit' }}
        secondary={{ href: '/platform', label: 'Explore CodioCMS' }}
      />
    </>
  );
}
