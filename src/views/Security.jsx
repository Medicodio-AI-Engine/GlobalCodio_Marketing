'use client';
import React from 'react';
import { ICON_PALETTE, ICON_SHADOW_MD } from '../../lib/tokens';

import { PageHero, Section, SectionEyebrow, FeatureGrid, CtaBand } from '../../components/ui/PageKit';
import { FaqAccordion } from '../../components/ui/FaqAccordion';
import { CertLogos } from '../components/ContentSections.jsx';
import { Lock, KeyRound, Eye, Database, Bot, ScrollText, SlidersHorizontal } from 'lucide-react';
import { GlobeIcon, UserCheckIcon } from '@animateicons/react/lucide';

const AUDIT_LOG_ENTRIES = [
  {
    agent: 'Forms Agent',
    action: 'Auto-filled I-129 · 47 fields mapped',
    meta: 'Confidence ≥ 0.92 on all fields · 3 amber fields flagged for review',
    time: '09:14:22',
    type: 'write',
  },
  {
    agent: 'Document Agent',
    action: 'Extracted passport data · 31 fields',
    meta: 'Read-only · No case data modified',
    time: '09:13:57',
    type: 'read',
  },
  {
    agent: 'Follow-Up Agent',
    action: 'Attempted status change → BLOCKED',
    meta: 'Action requires attorney role · Permission denied by RBAC',
    time: '09:11:04',
    type: 'blocked',
  },
  {
    agent: 'Case Assistant',
    action: 'Query answered · Blocking items surfaced',
    meta: 'Read-only · Sources cited in response',
    time: '09:06:18',
    type: 'read',
  },
];

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="var(--blue)" />
    <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const layers = [
  {
    Icon: Lock,
    animated: false,
    n: '01',
    h: 'Encryption',
    b: 'AES-256 at rest, TLS 1.3 in transit, and end-to-end encryption for sensitive document workflows.',
  },
  {
    Icon: KeyRound,
    animated: false,
    n: '02',
    h: 'Access Controls',
    b: 'MFA required for all users, role-based access aligned with case roles, and complete audit logging of all access and changes.',
  },
  {
    Icon: GlobeIcon,
    animated: true,
    n: '03',
    h: 'Data Residency',
    b: 'Compliant regional infrastructure for regulated countries, with configurable data residency for global enterprise clients.',
  },
  {
    Icon: Eye,
    animated: false,
    n: '04',
    h: 'Continuous Monitoring',
    b: '24/7 threat detection and intrusion monitoring, active vulnerability scanning and patch management, and incident response protocols.',
  },
  {
    Icon: Database,
    animated: false,
    n: '05',
    h: 'Backup & Recovery',
    b: 'Daily encrypted backups across regions, tested DR and business continuity plans, and defined RTO/RPO objectives.',
  },
  {
    Icon: UserCheckIcon,
    animated: true,
    n: '06',
    h: 'Personnel Security',
    b: 'Background-checked staff with signed confidentiality agreements, annual security training, and the principle of least privilege.',
  },
];

const docs = [
  'SOC 2 Type II Report',
  'ISO 27001 Certificate and Statement of Applicability',
  'Security Architecture Documentation',
  'Incident Response Plan',
  'Data Processing Agreements',
  'Subprocessor List and Vendor Risk Assessments',
];

const risks = [
  'Vulnerable clients.',
  'Sensitive immigration status data.',
  'Cross-border data flows.',
  'Increasing regulatory scrutiny.',
];

export default function Security() {
  return (
    <>
      <PageHero
        eyebrow="Security & Compliance"
        lead="Your clients trust you with their lives."
        emphasis="We protect that trust."
        sub="Immigration law firms handle some of the most sensitive personal data in legal practice - identity documents, family information, medical records, employment history, immigration status. GlobalCodio is built on enterprise-grade security and compliance from day one."
        primary={{ href: 'mailto:info@globalcodio.ai', label: 'Request compliance docs' }}
        secondary={{ href: '/contact', label: 'Book a tech audit' }}
      />

      <section id="standards" className="sec">
        <div className="container">
          <div className="how-grid cert-layout">
            <div className="reveal cert-section-head">
              <SectionEyebrow>Certifications &amp; Frameworks</SectionEyebrow>
              <h2 className="display type-display-lg">
                <span style={{ display: 'block' }}>Built to the standards</span>
                <em className="text-grad-blue" style={{ display: 'block', fontStyle: 'italic' }}>corporate buyers require.</em>
              </h2>
            </div>
            <div className="cert-panel">
              <CertLogos className="reveal d1" />
            </div>
          </div>
        </div>
      </section>

      <Section
        id="layers"
        eyebrow="Defense in Depth"
        lead="Security built into"
        emphasis="every layer."
        headAlign="center"
        headInline
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={layers} cols={3} />
        </div>
      </Section>

      <Section
        id="ai-governance"
        tone="sec-surface"
        eyebrow="AI Governance"
        lead="AI agents that can't go rogue."
        emphasis="Because the data is too important."
        intro="When AI operates on sensitive immigration data, the compliance question isn't just 'Is the platform secure?' - it's 'What can the AI actually do, and can you prove it?' GlobalCodio has a specific answer."
        headAlign="center"
      >
        <div
          className="reveal split-2--even"
          style={{ marginTop: 'var(--space-3xl)', alignItems: 'start' }}
        >
          {/* Left - three properties */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {[
              {
                Icon: SlidersHorizontal,
                title: 'Permission-bound',
                body: 'Agents operate within the same role-based access control as your human team. If an action requires elevated permissions, the agent cannot take it - full stop. No agent can exceed what your RBAC policy already authorises.',
              },
              {
                Icon: ScrollText,
                title: 'Fully auditable',
                body: 'Every agent action is written to the immutable audit log with timestamps and before/after diffs - the same trail you would show a regulator or respond to a client challenge. You can reconstruct exactly what changed, when, and which agent triggered it.',
              },
              {
                Icon: Bot,
                title: 'Confidence-scored outputs',
                body: 'Agent outputs pass through structured validation before anything is applied to a case. Low-confidence fields are flagged for human review rather than silently written. Attorneys stay in control of what gets filed.',
              },
            ].map((item, i, arr) => {
              const Icon = item.Icon;
              const pal = ICON_PALETTE[i % ICON_PALETTE.length];
              return (
                <div
                  key={item.title}
                  className={`reveal d${i + 1}`}
                  style={{
                    display: 'flex',
                    gap: 'var(--space-lg)',
                    paddingBottom: i < arr.length - 1 ? 'var(--space-lg)' : 0,
                    borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none',
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 'calc(40px * var(--ui-scale))',
                      height: 'calc(40px * var(--ui-scale))',
                      borderRadius: 'calc(10px * var(--ui-scale))',
                      background: pal.grad,
                      color: '#fff',
                      boxShadow: pal.shadow,
                      flexShrink: 0,
                      marginTop: 'calc(2px * var(--ui-scale))',
                    }}
                  >
                    <Icon size={17} strokeWidth={1.75} />
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: 'calc(15px * var(--ui-scale))',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        marginBottom: 'calc(6px * var(--ui-scale))',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.title}
                    </div>
                    <p style={{ fontSize: 'calc(13.5px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.65, margin: 0 }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right - audit log mock */}
          <div className="audit-log-mock reveal d2">
            <header className="audit-log-mock__head">
              <div className="audit-log-mock__brand">
                <span className="audit-log-mock__icon" aria-hidden="true">
                  <ScrollText size={16} strokeWidth={1.75} />
                </span>
                <div className="audit-log-mock__meta">
                  <span className="audit-log-mock__title">Immutable Audit Log</span>
                  <span className="mono audit-log-mock__sub">Every agent action · matter-wide</span>
                </div>
              </div>
              <span className="audit-log-mock__badge mono">
                <span className="audit-log-mock__pulse" aria-hidden="true" />
                Tamper-proof
              </span>
            </header>

            <div className="audit-log-mock__body">
              {AUDIT_LOG_ENTRIES.map((entry, i) => (
                <article key={`${entry.agent}-${entry.time}`} className={`audit-log-row audit-log-row--${entry.type} reveal d${(i % 4) + 1}`}>
                  <div className="audit-log-row__top">
                    <span className="audit-log-row__type mono">{entry.type}</span>
                    <span className="audit-log-row__agent">{entry.agent}</span>
                    <time className="audit-log-row__time mono" dateTime={`2025-01-01T${entry.time}`}>
                      {entry.time}
                    </time>
                  </div>
                  <p className="audit-log-row__action">{entry.action}</p>
                  <p className="audit-log-row__meta mono">{entry.meta}</p>
                </article>
              ))}
            </div>

            <footer className="audit-log-mock__foot">
              <span className="audit-log-mock__foot-item">Cryptographically signed</span>
              <span className="audit-log-mock__foot-item">Diffs stored</span>
              <span className="audit-log-mock__foot-item">Exportable for audit</span>
            </footer>
          </div>
        </div>
      </Section>

      <Section
        id="why"
        tone="sec-dark"
        eyebrow="Why It Matters"
        lead="Why this matters for"
        emphasis="immigration law."
        headAlign="center"
      >
        <div className="split-2" style={{ marginTop: 'var(--space-3xl)' }}>
          <div className="reveal">
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-2)', lineHeight: 1.6 }}>
              Immigration firms face unique risks.
            </p>
            <ul className="check-list" style={{ marginTop: 'var(--space-lg)' }}>
              {risks.map((r) => (
                <li key={r}>
                  <Check />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal d1">
            <p style={{ fontSize: 'calc(20px * var(--ui-scale))', color: 'var(--ink)', lineHeight: 1.55 }}>
              A data breach in an immigration practice isn't just a legal liability - it's a trust failure with
              people who trusted you with their futures.
            </p>
            <hr className="rule-blue" style={{ margin: 'var(--space-xl) 0' }} />
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.6 }}>
              We don't treat security as a feature. We treat it as the foundation of everything we build.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="documentation"
        tone="sec-surface"
        eyebrow="Trust Package"
        lead="Available to qualified"
        emphasis="prospects under NDA."
        intro="Our complete security and compliance documentation is available to qualified prospects under NDA."
        headAlign="center"
      >
        <ul className="check-list check-cols reveal" style={{ marginTop: 'var(--space-3xl)' }}>
          {docs.map((d) => (
            <li key={d}>
              <Check />
              {d}
            </li>
          ))}
        </ul>
      </Section>

      <FaqAccordion
        id="faq"
        eyebrow="Common Questions"
        lead="Questions about"
        emphasis="security and compliance."
        items={[
          {
            q: 'What security certifications does GlobalCodio hold?',
            a: 'GlobalCodio is SOC 2 Type II certified and ISO 27001 certified. The platform meets GDPR, UK GDPR, and CCPA/CPRA requirements, implements HIPAA-ready safeguards for immigration medical records, and follows ABA-aligned AI governance standards. Full compliance documentation is available to qualified prospects under NDA.',
            meta: ['SOC 2 Type II', 'ISO 27001'],
          },
          {
            q: 'How does GlobalCodio protect attorney-client privilege when using AI?',
            a: 'GlobalCodio never trains AI models on client data. All AI agent outputs are confidence-scored and require attorney review before being applied to a case. Agents operate within role-based access controls and cannot take any action a human in their role could not. Every agent action is logged in an immutable, cryptographically signed audit trail.',
            meta: ['No training on client data', 'Immutable audit log'],
          },
          {
            q: 'What encryption does GlobalCodio use to protect immigration data?',
            a: 'GlobalCodio uses AES-256 encryption for all data at rest and TLS 1.3 for all data in transit. Sensitive document workflows use end-to-end encryption. All audit log entries are cryptographically signed. Encrypted backups are stored across multiple geographic regions with tested disaster recovery plans.',
            meta: ['AES-256 at rest', 'TLS 1.3 in transit'],
          },
          {
            q: 'How does GlobalCodio handle data residency requirements?',
            a: 'GlobalCodio provides compliant regional infrastructure for countries with data residency requirements and configurable data residency for global enterprise clients. Data processing agreements and subprocessor lists are available as part of the standard compliance documentation package.',
            meta: ['Regional infrastructure', 'DPA available'],
          },
          {
            q: 'What compliance documentation is available for vendor due diligence?',
            a: 'GlobalCodio provides a full trust package to qualified prospects under NDA: SOC 2 Type II report, ISO 27001 certificate and Statement of Applicability, security architecture documentation, incident response plan, data processing agreements, and subprocessor list with vendor risk assessments.',
            meta: ['Full trust package', 'Available under NDA'],
          },
        ]}
      />

      <CtaBand
        lead="Security questionnaire incoming?"
        emphasis="We've got the answers."
        primary={{ href: 'mailto:info@globalcodio.ai', label: 'Request compliance documentation' }}
        secondary={{ href: '/rfp-response', label: 'See the RFP service' }}
      />
    </>
  );
}
