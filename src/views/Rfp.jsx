'use client';
import React from 'react';

import { PageHero, Section, SectionEyebrow, SplitHeading, StepList, CtaBand } from '../../components/ui/PageKit';
import { ICON_PALETTE } from '../../lib/tokens';
import {
  BarChart3,
  FileCheck,
  KeyRound,
  Lock,
  Plug,
  RefreshCw,
  Workflow,
} from 'lucide-react';
import { GlobeIcon, ShieldCheckIcon } from '@animateicons/react/lucide';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="var(--blue)" />
    <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const technicalSections = [
  'Case Management Platform Capabilities',
  'Data Security & Encryption Standards',
  'SOC 2 Type II & ISO 27001 Compliance',
  'HIPAA-Aligned Data Handling',
  'User Access Controls & Audit Logging',
  'Disaster Recovery & Business Continuity',
  'API & Integration Capabilities',
  'Reporting & Analytics',
  'Vendor Management Processes',
  'Geographic & Multi-Jurisdictional Capacity',
  'Attorney-Client Privilege Protections',
];

const RFP_BUYER_ASKS = [
  { Icon: Workflow, t: 'Case management & workflows' },
  { Icon: ShieldCheckIcon, t: 'SOC 2 & ISO compliance' },
  { Icon: Lock, t: 'Encryption & data residency' },
  { Icon: KeyRound, t: 'Access controls & SSO' },
  { Icon: RefreshCw, t: 'DR & business continuity' },
  { Icon: Plug, t: 'APIs & integrations' },
  { Icon: FileCheck, t: 'HIPAA & GDPR posture' },
  { Icon: GlobeIcon, t: 'Multi-jurisdiction & privilege' },
  { Icon: BarChart3, t: 'Reporting & analytics' },
];

const RFP_STAKES = [
  {
    n: '01',
    t: 'Partners spend weeks on answers they cannot verify',
    d: 'Technical sections pull attorneys and ops leaders off billable work - with no guarantee the responses hold up under scrutiny.',
  },
  {
    n: '02',
    t: 'The response sounds uncertain to corporate procurement',
    d: 'Vague or inconsistent security language signals risk. Scoring committees flag the firm before immigration expertise is ever evaluated.',
  },
  {
    n: '03',
    t: 'The mandate goes to a competitor - or the deal is declined',
    d: 'Firms either fumble the RFP or skip it entirely, leaving seven-figure corporate relationships on the table.',
  },
];

const steps = [
  { h: 'You forward us the RFP.', b: 'Within hours, not days.' },
  { h: 'We draft the technical sections.', b: 'Typically within 72 hours.' },
  { h: 'Your team reviews and customizes.', b: 'You stay in control of voice and pricing.' },
  { h: 'You submit a winning response.', b: 'Backed by real security and compliance posture.' },
];

export default function Rfp() {
  return (
    <>
      <PageHero
        eyebrow="RFP Response Service"
        lead="Stop Losing Corporate Deals to"
        emphasis="Technical RFP Questions."
        sub="When corporate clients send 50-page RFPs with deep technical and security questions about your case management platform, data security, and infrastructure - our team drafts your responses. Accurately. Professionally. On time."
        primary={{ href: 'mailto:info@globalcodio.ai', label: 'Send us your RFP' }}
        secondary={{ href: '/it-services', label: 'See all services' }}
      />

      <Section id="the-problem">
        <div className="rfp-problem-split reveal">
          <div className="rfp-problem-head">
            <SectionEyebrow align="center">The Problem</SectionEyebrow>
            <SplitHeading lead="Your Best Corporate Opportunity Just Hit Your Inbox." emphasis="Now What?" />
            <div className="rfp-problem-intro">
              <p>
                Corporate immigration RFPs are no longer questionnaires about your legal team. They arrive as
                50-page procurement packages - security exhibits, architecture diagrams, vendor due diligence,
                and scored technical sections evaluated by IT and compliance stakeholders.
              </p>
              <p>
                Most firms have outstanding immigration attorneys and paralegals. They rarely have a CIO, security
                engineer, or operations lead who can speak fluently to encryption standards, penetration testing,
                subprocessors, and audit evidence. The result is weeks of partner time spent on answers no one is
                confident submitting - or the opportunity is passed to a competitor.
              </p>
            </div>
          </div>

          <div className="rfp-problem-panel reveal d1">
            <div className="rfp-problem-panel-block">
              <h3 className="display rfp-problem-panel-title">What corporate buyers now require</h3>
              <div className="rfp-problem-asks-grid">
                {RFP_BUYER_ASKS.map(({ Icon, t }, i) => {
                  const pal = ICON_PALETTE[i % ICON_PALETTE.length];
                  return (
                    <div key={t} className={`rfp-problem-ask-tile reveal d${(i % 3) + 1}`}>
                      <div className="rfp-problem-ask-icon" aria-hidden="true" style={{ background: pal.grad, boxShadow: pal.shadow }}>
                        <Icon size={16} strokeWidth={1.75} />
                      </div>
                      <div className="rfp-problem-ask-title">{t}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rfp-problem-panel-block">
              <h3 className="display rfp-problem-panel-title">When firms cannot answer credibly</h3>
              <div className="rfp-problem-stakes">
                {RFP_STAKES.map((item, i, arr) => (
                  <div
                    key={item.n}
                    className={`rfp-problem-stake reveal d${i + 1}${i < arr.length - 1 ? ' rfp-problem-stake--ruled' : ''}`}
                  >
                    <span className="mono rfp-problem-stake-num">{item.n}</span>
                    <div>
                      <div className="rfp-problem-stake-title">{item.t}</div>
                      <p className="rfp-problem-stake-desc">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="technical-sections"
        tone="sec-surface"
        eyebrow="What We Cover"
        lead="The Technical Sections"
        emphasis="We Draft for You."
        headAlign="center"
      >
        <ul className="check-list check-cols reveal d1" style={{ marginTop: 'var(--space-xl)' }}>
          {technicalSections.map((item) => (
            <li key={item}>
              <Check />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="how-it-works">
        <div className="how-it-works-split reveal">
          <div className="how-it-works-head">
            <SectionEyebrow>How It Works</SectionEyebrow>
            <SplitHeading lead="From Inbox to" emphasis="Winning Response." />
          </div>
          <div className="how-it-works-steps">
            <StepList steps={steps} revealRows={true} />
          </div>
        </div>
      </Section>

      <Section id="why" tone="sec-dark">
        <div className="rfp-why-split reveal">
          <div className="rfp-why-head">
            <SectionEyebrow>Why This Service Exists</SectionEyebrow>
            <SplitHeading lead="The Answers, Written" emphasis="by a Partner." />
          </div>
          <div className="rfp-why-copy reveal d1">
            <p>
              We built this service because we kept hearing the same story - immigration firms losing
              seven-figure corporate accounts because they couldn't credibly answer the technical
              sections of an RFP.
            </p>
            <p>
              With GlobalCodio managing your technology operation, you don't just have the answers. You
              have a partner who writes them for you.
            </p>
            <hr className="rule-blue" />
            <p className="mono rfp-why-note">
              RFP Response Support is available exclusively as a bundled add-on to GlobalCodio clients.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        lead="Have an RFP coming up?"
        emphasis="Send it over."
        primary={{ href: 'mailto:info@globalcodio.ai', label: 'Send us your RFP' }}
        secondary={{ href: '/contact', label: 'Book a tech audit' }}
      />
    </>
  );
}
