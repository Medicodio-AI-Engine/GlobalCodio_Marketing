'use client';
import React from 'react';

import { PageHero, Section, SectionEyebrow, FeatureGrid, CtaBand } from '../../components/ui/PageKit';
import { FaqAccordion } from '../../components/ui/FaqAccordion';
import { Network, BarChart3, Activity, DollarSign, Building2, GitCompare, FileText } from 'lucide-react';
import { UsersIcon, GlobeIcon, ShieldCheckIcon, TrendingUpIcon } from '@animateicons/react/lucide';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="var(--blue)" />
    <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CHALLENGES = [
  'Scaling employee visa volume across multiple countries',
  'Coordinating dozens of outside counsel and service vendors',
  'Maintaining compliance across countries',
  'Controlling cost without sacrificing quality',
  'Reporting visibility to executives and HR leadership',
];

const VISIBILITY_ITEMS = [
  {
    Icon: BarChart3,
    animated: false,
    n: '01',
    h: 'Workforce Pipeline Dashboards',
    b: 'Your entire employee immigration population visible at a glance. Filter by country, visa type, status, or risk level. No more requesting reports from outside counsel.',
  },
  {
    Icon: Activity,
    animated: false,
    n: '02',
    h: 'Immigration Health Scores',
    b: 'One number per visa program tells you if it\'s healthy or heading toward trouble. Drill into the breakdown when you need it. Problems surface before they become emergencies.',
    featured: true,
  },
  {
    Icon: GitCompare,
    animated: false,
    n: '03',
    h: 'Multi-Firm Performance Comparison',
    b: 'Managing more than one law firm? See who is actually delivering. Hold every outside counsel to the same standard, with data - not anecdote.',
  },
  {
    Icon: DollarSign,
    animated: false,
    n: '04',
    h: 'Budget Tracking & Forecasting',
    b: 'Immigration spend tracked in real time. Alerts surface at 75% of budget - not after you\'ve overrun. Renewal costs projected automatically so surprises stay off the executive report.',
  },
  {
    Icon: Building2,
    animated: false,
    n: '05',
    h: 'Executive PDF Reports',
    b: 'Stakeholders who never log into the platform still get the data they need. One-click executive reports, formatted for the boardroom - not the case manager\'s screen.',
  },
  {
    Icon: FileText,
    animated: false,
    n: '06',
    h: 'Versioned Immigration Policies',
    b: 'Corporate immigration policies live versioned inside the platform - not buried in a SharePoint document. When guidelines change, the updated version flows through to active cases automatically.',
  },
];

const SOLUTIONS = [
  {
    Icon: UsersIcon,
    animated: true,
    n: '01',
    h: 'Scale Without Adding Headcount',
    b: 'Codio AI Agents handle routine case work - intake, documents, forms, deadlines, employee communications - so your team focuses on strategy and exception management.',
    featured: true,
    links: [{ href: '/ai-agents', label: 'Meet the agents' }],
  },
  {
    Icon: GlobeIcon,
    animated: true,
    n: '02',
    h: 'One Platform for Global Operations',
    b: 'CodioCMS and CodioForms cover the countries you operate in, with new country support added on demand.',
    links: [{ href: '/platform', label: 'Explore the platform' }],
  },
  {
    Icon: Network,
    animated: false,
    n: '03',
    h: 'Vendor Coordination Through CodioNetwork',
    b: 'Manage translators, physicians, foreign attorneys, and apostille services through one integrated platform.',
    links: [{ href: '/network', label: 'See the network' }],
  },
  {
    Icon: ShieldCheckIcon,
    animated: true,
    n: '04',
    h: 'Compliance & Reporting Built In',
    b: 'Always-on deadline monitoring, audit-ready compliance records, and executive-level reporting.',
    links: [{ href: '/security', label: 'Security & compliance' }],
  },
  {
    Icon: TrendingUpIcon,
    animated: true,
    n: '05',
    h: 'Cost Predictability',
    b: 'Replace unpredictable outside counsel billing with a predictable managed service partnership.',
    links: [{ href: '/it-services', label: 'Explore services' }],
  },
];

export default function Corporate() {
  return (
    <>
      <PageHero
        eyebrow="For Corporate Immigration Teams"
        lead="Built for Corporate Immigration Teams."
        emphasis="Designed for Global Scale."
        sub="GlobalCodio is the complete technology operation for in-house mobility, HR, and legal operations teams managing global employee immigration. CodioCMS, CodioForms, AI agents, and a worldwide service network - all built for the realities of corporate immigration."
        primary={{ href: '/contact', label: 'Book a discovery call' }}
        secondary={{ href: '/platform', label: 'See the platform' }}
      />

      <Section
        id="challenges"
        eyebrow="Your Challenges"
        lead="The realities of"
        emphasis="corporate immigration at scale."
        headAlign="center"
      >
        <div className="split-2 corporate-challenges-split" style={{ marginTop: 'var(--space-3xl)' }}>
          <div className="reveal">
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-2)', lineHeight: 1.6 }}>
              In-house mobility, HR, and legal operations teams face a familiar set of pressures.
            </p>
            <ul className="check-list" style={{ marginTop: 'var(--space-lg)' }}>
              {CHALLENGES.map((c, i) => (
                <li key={c} className={`reveal d${(i % 4) + 1}`}>
                  <Check />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal d1">
            <p style={{ fontSize: 'calc(20px * var(--ui-scale))', color: 'var(--ink)', lineHeight: 1.55 }}>
              When employee immigration spans more countries, more vendors, and more executive scrutiny,
              fragmented tools and manual coordination stop scaling.
            </p>
            <hr className="rule-blue" style={{ margin: 'var(--space-xl) 0' }} />
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.6 }}>
              GlobalCodio replaces the patchwork of outside counsel portals, spreadsheets, and disconnected
              systems with one managed operation built for corporate mobility - CodioCMS for case workflow,
              CodioForms across the countries you operate in, AI agents for routine case work, and CodioNetwork
              for vendor coordination. Your team gets executive-ready reporting and compliance visibility without
              stitching together another stack of point solutions.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="visibility"
        tone="sec-surface"
        eyebrow="Built for HR & Mobility Teams"
        lead="Finally - immigration visibility"
        emphasis="your executives actually expect."
        intro="Most corporate mobility teams operate in the dark. Status updates come from email threads. Reports are built on request. Dashboards don't exist. GlobalCodio gives your team a dedicated HR portal - designed for what you actually need to do, not a lawyer's view with fields hidden."
        headAlign="center"
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={VISIBILITY_ITEMS} cols={3} />
        </div>
      </Section>

      <Section
        id="solutions"
        eyebrow="How GlobalCodio Solves Them"
        lead="One operation purpose-built"
        emphasis="for global mobility."
        intro="From AI-driven case work to a single platform for every country, GlobalCodio turns the hardest parts of corporate immigration into a predictable, managed operation."
        headAlign="center"
      >
        <div className="corporate-solutions-grid reveal" style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={SOLUTIONS} cols={3} />
        </div>

        {/* Law firm independence callout */}
        <div
          className="reveal d1 split-2--even"
          style={{
            marginTop: 'var(--space-3xl)',
            border: '1px solid var(--line-blue)',
            borderRadius: 'calc(16px * var(--ui-scale))',
            padding: 'calc(40px * var(--ui-scale))',
            background: 'linear-gradient(160deg,#fff 0%,var(--blue-tint-2) 150%)',
            boxShadow: 'var(--shadow-ambient)',
            alignItems: 'center',
          }}
        >
          <div>
            <SectionEyebrow>HR-Led Onboarding</SectionEyebrow>
            <h3
              className="display"
              style={{ fontSize: 'var(--text-display-md)', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 'var(--space-lg)' }}
            >
              Start before the law firm{' '}
              <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>is even engaged.</em>
            </h3>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65 }}>
              GlobalCodio lets your HR team collect employee information and initiate the immigration
              workflow weeks before outside counsel is brought in - so the law firm inherits a complete
              file, not a blank intake form. No double data entry. No coordination delay.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {[
              { n: '01', t: 'HR collects employee data', d: 'Your team initiates the process and gathers information through the HR portal - independently of the law firm.' },
              { n: '02', t: 'Law firm inherits a complete file', d: 'When outside counsel is engaged, the case already has everything they need. No re-collection, no delays.' },
              { n: '03', t: 'Policies stay versioned & current', d: 'Corporate immigration guidelines live inside the platform. When they change, every active case references the updated version automatically.' },
            ].map((step, i, arr) => (
              <div
                key={step.n}
                style={{
                  display: 'flex',
                  gap: 'var(--space-md)',
                  paddingBottom: i < arr.length - 1 ? 'var(--space-lg)' : 0,
                  borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
                }}
              >
                <span
                  className="mono"
                  style={{ fontSize: 'calc(10px * var(--ui-scale))', color: 'var(--blue)', fontWeight: 700, flexShrink: 0, paddingTop: '2px', letterSpacing: '.06em' }}
                >
                  {step.n}
                </span>
                <div>
                  <div style={{ fontSize: 'calc(14px * var(--ui-scale))', fontWeight: 600, color: 'var(--ink)', marginBottom: 'calc(4px * var(--ui-scale))' }}>{step.t}</div>
                  <div style={{ fontSize: 'calc(13px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.55 }}>{step.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <FaqAccordion
        id="faq"
        eyebrow="Common Questions"
        lead="Questions from"
        emphasis="corporate immigration teams."
        tone="sec-surface"
        items={[
          {
            q: 'What does GlobalCodio offer corporate immigration teams?',
            a: 'GlobalCodio gives corporate mobility, HR, and legal operations teams a complete immigration technology operation: CodioCMS with a dedicated HR portal, workforce pipeline dashboards, immigration health scores, multi-firm performance comparison, budget tracking, AI agents for routine case work, and CodioNetwork for vendor coordination. Executive-ready reporting is built in.',
            meta: ['HR portal built-in', 'Executive reporting'],
          },
          {
            q: 'How does GlobalCodio help HR teams manage employee immigration without waiting on outside counsel?',
            a: "GlobalCodio's HR portal allows HR and mobility teams to initiate immigration workflows, collect employee information, and build the case file independently - weeks before outside counsel is engaged. When the law firm is brought in, they inherit a complete file with no double data entry or coordination delay.",
            meta: ['HR-led onboarding', 'No double data entry'],
          },
          {
            q: 'Can GlobalCodio handle immigration across multiple countries?',
            a: 'Yes. CodioCMS handles case management across every country the corporate team operates in. CodioForms covers the US, Canada, Netherlands, India, and additional countries added on demand. CodioNetwork provides in-country attorneys, translators, and service providers for global coordination.',
            meta: ['Multi-country CMS', 'Global provider network'],
          },
          {
            q: 'How does GlobalCodio help corporate teams manage multiple outside law firms?',
            a: "GlobalCodio's multi-firm performance comparison dashboard gives HR and mobility teams objective data on every outside counsel firm: case throughput, turnaround time, and delivery quality - tracked automatically, not based on anecdote. Teams can benchmark all firms against the same standard.",
            meta: ['Multi-firm dashboard', 'Data-driven oversight'],
          },
          {
            q: 'How does GlobalCodio help with immigration budget predictability?',
            a: 'CodioCMS tracks immigration spend in real time and alerts teams at 75% of budget before overruns occur. Renewal costs are projected automatically so finance and HR leadership are never surprised. This replaces unpredictable outside counsel billing with a structured managed service model.',
            meta: ['Real-time spend tracking', '75% budget alerts'],
          },
        ]}
      />

      <CtaBand
        lead="Ready to give your mobility team"
        emphasis="the visibility it's been missing?"
        sub="Book a discovery call. We'll show you the HR portal, the analytics dashboards, and the compliance architecture - in 30 minutes."
        primary={{ href: '/contact', label: 'Book a discovery call' }}
        secondary={{ href: '/security', label: 'See security & compliance' }}
      />
    </>
  );
}
