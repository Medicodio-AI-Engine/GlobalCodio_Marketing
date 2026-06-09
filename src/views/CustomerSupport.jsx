'use client';
import React, { useRef } from 'react';
import { ICON_GRAD, ICON_PALETTE, ICON_SHADOW_MD } from '../../lib/tokens';
import {
  HeadphonesIcon,
  Clock,
  RefreshCw,
  Star,
  Users,
  CheckCircle,
  CalendarClock,
  Zap,
  Shield,
} from 'lucide-react';
import {
  UserCheckIcon,
  BookOpenIcon,
  MessageCircleIcon,
} from '@animateicons/react/lucide';
import { PageHero, Section, FeatureGrid, CtaBand, SmartLink, SplitHeading } from '../../components/ui/PageKit';

const SUPPORT_PILLARS = [
  {
    Icon: UserCheckIcon,
    animated: true,
    n: '01',
    h: 'Immigration-literate staff',
    b: 'Our support team understands H-1Bs, I-140s, I-485s, and the pressure of USCIS deadlines. You will never explain what a priority date is to someone reading from a script.',
    featured: true,
  },
  {
    Icon: BookOpenIcon,
    animated: true,
    n: '02',
    h: 'Structured onboarding',
    b: 'We onboard your whole firm - managing attorneys, paralegals, and case managers. Not just the person who signed the contract. Everyone gets trained before go-live.',
  },
  {
    Icon: RefreshCw,
    animated: false,
    n: '03',
    h: 'Proactive success reviews',
    b: 'Regular check-ins, workflow reviews, and feature adoption guidance. We reach out before something breaks - not just after you file a ticket.',
  },
];

const SUPPORT_DETAILS = [
  {
    Icon: Clock,
    animated: false,
    h: 'Support hours',
    b: 'Monday through Friday, 4am to 5pm Pacific. We are there when your office is open and your team is under deadline.',
  },
  {
    Icon: MessageCircleIcon,
    animated: true,
    h: 'Multiple channels',
    b: 'Reach us by email, live chat, or phone. No endless ticket queues. You get a real person who knows your firm.',
  },
  {
    Icon: CalendarClock,
    animated: false,
    h: 'Fast response',
    b: 'We prioritize urgent requests - active case issues, filing deadlines, and data questions get same-day attention.',
  },
  {
    Icon: UserCheckIcon,
    animated: true,
    h: 'Dedicated CSM',
    b: 'Larger accounts get a dedicated Customer Success Manager who stays with your firm, learns your workflows, and brings proactive recommendations.',
  },
];

const ONBOARDING_STEPS = [
  {
    n: '01',
    t: 'Kickoff & discovery',
    d: 'We meet your team, map your workflows, and understand how your firm operates before we configure anything.',
  },
  {
    n: '02',
    t: 'Hands-on training',
    d: 'Role-specific training for attorneys, paralegals, and admins. Live sessions, recordings, and written guides your team can reference.',
  },
  {
    n: '03',
    t: 'Go-live support',
    d: 'Your Customer Success team is on standby during your first live weeks. Real-time help when it matters most.',
  },
  {
    n: '04',
    t: 'Ongoing partnership',
    d: 'Quarterly business reviews, new feature walkthroughs, and proactive workflow optimization as your firm grows.',
  },
];

const CS_OUTCOMES = [
  { stat: '4am–5pm PST', label: 'Mon – Fri support coverage' },
  { stat: 'Same day', label: 'response for urgent case issues' },
  { stat: 'Whole team', label: 'onboarded before go-live' },
  { stat: 'Proactive', label: 'check-ins, not just reactive tickets' },
];

const WHAT_WE_COVER = [
  'Platform questions and how-to guidance',
  'Case workflow configuration help',
  'Form and questionnaire troubleshooting',
  'AI agent output questions and review',
  'Integration and data issues',
  'User access and permissions',
  'Training for new team members',
  'Filing deadline and case urgency triage',
];

function SupportDetailCard({ item, i }) {
  const iconRef = useRef(null);
  const pal = ICON_PALETTE[i % ICON_PALETTE.length];
  const onMouseEnter = item.animated ? () => iconRef.current?.startAnimation() : undefined;
  const onMouseLeave = item.animated ? () => iconRef.current?.stopAnimation() : undefined;
  return (
    <article
      className={`feature-card cs-details-card reveal d${(i % 2) + 1}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="feature-card-top">
        <div className="agent-icon" aria-hidden="true" style={{ background: pal.grad, boxShadow: `0 calc(4px * var(--ui-scale)) calc(12px * var(--ui-scale)) ${pal.shadow}` }}>
          {item.animated
            ? <item.Icon ref={iconRef} size={18} isAnimated={false} />
            : <item.Icon size={18} strokeWidth={1.75} />}
        </div>
      </div>
      <h3 className="display feature-card-title cs-details-card-title">{item.h}</h3>
      <p className="feature-card-body">{item.b}</p>
    </article>
  );
}

export default function CustomerSupport() {
  return (
    <>
      <PageHero
        eyebrow="Customer Support"
        lead="Support from people who"
        emphasis="know immigration."
        sub="Most software vendors hand you a help center article. GlobalCodio gives you a team that understands immigration workflows, speaks your language, and stays with you from onboarding through every case milestone."
        primary={{ href: '/contact', label: 'Talk to our team' }}
        secondary={{ href: '/it-services', label: 'See all services' }}
      />

      {/* Stat band */}
      <Section id="cs-stats" className="sec-cs-stats">
        <div className="reveal m-grid">
          {CS_OUTCOMES.map((s, i) => (
            <div key={i}>
              <div className="display type-display-metric metric-value" style={{ color: 'var(--blue)', letterSpacing: '-0.03em' }}>
                {s.stat}
              </div>
              <div className="metric-label">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Three pillars */}
      <Section
        id="cs-pillars"
        eyebrow="How We're Different"
        lead="Not a helpdesk."
        emphasis="A success partner."
        intro="The single biggest complaint immigration firms have about their software vendor is that support is slow, generic, and staffed by people who don't understand immigration. GlobalCodio is built differently."
        headAlign="center"
        headInline
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={SUPPORT_PILLARS} cols={3} />
        </div>
      </Section>

      {/* Support details - 2 col grid */}
      <Section id="cs-details" tone="sec-surface" eyebrow="Support Details" lead="Everything your firm" emphasis="needs to stay unblocked." headAlign="center">
        <div className="cs-details-grid">
          {SUPPORT_DETAILS.map((item, i) => <SupportDetailCard key={i} item={item} i={i} />)}
        </div>
      </Section>

      {/* Onboarding steps */}
      <Section
        id="cs-onboarding"
        eyebrow="How Onboarding Works"
        lead="Your whole team."
        emphasis="Ready from day one."
        intro="We don't hand you a PDF and a login. We run structured onboarding with your entire team - role by role - so every attorney, paralegal, and admin is confident before a single case goes live."
        headAlign="center"
      >
        <ol className="process-rail reveal" style={{ marginTop: 'var(--space-3xl)' }}>
          {ONBOARDING_STEPS.map((step, i) => (
            <li key={step.n} className={`process-rail-step reveal d${i + 1}`}>
              <div className="process-rail-marker">
                <span className="mono process-rail-num">{step.n}</span>
              </div>
              <div className="process-rail-body">
                <h3 className="display process-rail-title">{step.t}</h3>
                <p className="process-rail-text">{step.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* What we cover */}
      <Section id="cs-scope" tone="sec-surface" eyebrow="What We Cover" lead="No question is" emphasis="out of scope." headAlign="center" headInline>
        <div className="cs-scope-grid reveal">
          {WHAT_WE_COVER.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'calc(10px * var(--ui-scale))', padding: 'calc(14px * var(--ui-scale)) 0', borderBottom: '1px solid var(--line)' }}>
                <span style={{ width: 'calc(18px * var(--ui-scale))', height: 'calc(18px * var(--ui-scale))', borderRadius: '50%', background: ICON_GRAD, color: '#fff', boxShadow: ICON_SHADOW_MD, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 'calc(2px * var(--ui-scale))' }}>
                  <svg viewBox="0 0 10 10" fill="none" style={{ width: 8, height: 8 }}>
                    <path d="M2 5l2 2L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span style={{ fontSize: 'calc(14.5px * var(--ui-scale))', color: 'var(--ink-2)', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
        </div>
      </Section>

      {/* Differentiator callout */}
      <Section id="cs-callout">
        <div className="cs-callout-grid reveal">
          <article className="feature-card feature-card--featured" style={{ padding: 'calc(40px * var(--ui-scale))' }}>
            <p className="mono cs-callout-tag">The difference</p>
            <h3 className="display" style={{ fontSize: 'var(--text-display-md)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 'var(--space-md)' }}>
              We know what an{' '}
              <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>I-129 is.</em>
            </h3>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65 }}>
              Most immigration software is supported by a generic helpdesk team reading from a knowledge base.
              Our Customer Success team comes from operations and implementation backgrounds - they understand
              immigration case workflows, filing sequences, and the pressure your team is under.
            </p>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65, marginTop: 'var(--space-md)' }}>
              When you say "the I-485 concurrent filing workflow isn't triggering the right questionnaire," we know
              exactly what you mean - and exactly where to look.
            </p>
          </article>
          <article className="feature-card" style={{ padding: 'calc(40px * var(--ui-scale))' }}>
            <p className="mono cs-callout-tag">Proactive, not reactive</p>
            <h3 className="display" style={{ fontSize: 'var(--text-display-md)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 'var(--space-md)' }}>
              We check in before{' '}
              <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>you have to.</em>
            </h3>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65 }}>
              Customer success means we reach out to you - not the other way around. Your CSM tracks feature
              adoption, flags underused automations, and surfaces workflow improvements before they become pain points.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 'var(--space-md) 0 0', display: 'flex', flexDirection: 'column', gap: 'calc(8px * var(--ui-scale))' }}>
              {['Quarterly business reviews', 'New feature walkthroughs', 'Workflow optimization suggestions', 'Team expansion onboarding'].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'calc(8px * var(--ui-scale))', fontSize: 'calc(13.5px * var(--ui-scale))', color: 'var(--ink-3)' }}>
                  <span style={{ width: 'calc(5px * var(--ui-scale))', height: 'calc(5px * var(--ui-scale))', borderRadius: '50%', background: 'var(--blue)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <CtaBand
        lead="Ready to meet your"
        emphasis="success team?"
        primary={{ href: '/contact', label: 'Talk to our team' }}
        secondary={{ href: '/it-services', label: 'See all services' }}
      />
    </>
  );
}
