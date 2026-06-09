'use client';
import React from 'react';
import { ICON_PALETTE } from '../../lib/tokens';

import { PageHero, Section, SectionEyebrow, FeatureGrid, CtaBand, SmartLink, SplitHeading } from '../../components/ui/PageKit';
import { FaqAccordion } from '../../components/ui/FaqAccordion';
import {
  Workflow,
  GitMerge,
  Cpu,
  RefreshCw,
  Bot,
  FileText,
  Database,
  Building2,
  Network,
  ClipboardList,
  BarChart3,
  Languages,
  Stethoscope,
  Stamp,
  Scale,
  Truck,
} from 'lucide-react';
import { UsersIcon, GlobeIcon, SettingsIcon, ShieldCheckIcon } from '@animateicons/react/lucide';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="var(--blue)" />
    <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CMS_FEATURES = [
  {
    Icon: Workflow,
    animated: false,
    n: '01',
    h: 'End-to-end case lifecycle',
    b: 'Full case lifecycle management for every immigration matter type - from intake through filing to closure.',
  },
  {
    Icon: UsersIcon,
    animated: true,
    n: '02',
    h: 'Applicant portal',
    b: 'Secure portal for foreign nationals and beneficiaries to submit documents, answer questionnaires, track their case status - and own their immigration record across every matter they ever open.',
  },
  {
    Icon: Building2,
    animated: false,
    n: '03',
    h: 'HR portal',
    b: 'Dedicated portal for corporate HR and mobility teams to manage employee visa cases, track immigration health, and view workforce analytics.',
  },
  {
    Icon: Network,
    animated: false,
    n: '04',
    h: 'Service provider portal',
    b: 'Controlled access portal for external service providers to receive assignments, submit deliverables, and coordinate directly within CodioCMS.',
  },
  {
    Icon: ShieldCheckIcon,
    animated: true,
    n: '05',
    h: 'Role-based access control',
    b: 'Granular permissions across 27 modules and 7 action types - attorney, HR admin, firm admin, provider, and super admin roles with data-scope isolation.',
  },
  {
    Icon: ClipboardList,
    animated: false,
    n: '06',
    h: 'Client questionnaires',
    b: 'Structured intake and case questionnaires with conditional logic, prefill from case data, per-portal delivery, and attorney review workflows.',
  },
  {
    Icon: GlobeIcon,
    animated: true,
    n: '07',
    h: 'Global country support',
    b: 'Case handling across every country you serve in one unified system - with new countries added on demand.',
  },
  {
    Icon: SettingsIcon,
    animated: true,
    n: '08',
    h: 'Customizable workflows',
    b: "Playbook templates and work-step automations configured to your firm's exact operations - not one-size-fits-all defaults.",
  },
  {
    Icon: GitMerge,
    animated: false,
    n: '09',
    h: 'Native integrations',
    b: 'Native integrations with email, calendar, e-signature, and accounting tools your team already relies on.',
  },
  {
    Icon: BarChart3,
    animated: false,
    n: '10',
    h: 'Reporting & analytics',
    b: 'Executive reports, HR analytics dashboards, firm performance comparison, renewal pipeline, budget tracking, and bottleneck alerts.',
  },
];

const FORMS_STATS = [
  { value: '4', label: 'countries live today' },
  { value: 'Days', label: 'not quarters for new countries' },
  { value: '1', label: 'source of truth tied to CodioCMS' },
];

const CATALOG_FORMS = [
  { id: 'I-130', name: 'Petition for Alien Relative', country: 'US', active: true },
  { id: 'I-485', name: 'Adjustment of Status', country: 'US', active: false },
  { id: 'IMM 0008', name: 'Generic Application', country: 'CA', active: false },
  { id: 'MVV', name: 'Provisional residence permit', country: 'NL', active: false },
];

const ACTIVE_FORM_FIELDS = [
  ['Part 1 · Relationship', 'Spouse of U.S. citizen'],
  ['Part 2 · Beneficiary', 'Chen, Wei · DOB 14 Mar 1991'],
  ['Part 4 · Processing', 'Adjustment of status · Concurrent filing'],
];

const FORMS_CAPS = [
  { n: '01', color: 'var(--teal)',   h: 'Online & offline',         b: 'Online forms are filled directly on government portals (USCIS, IRCC, etc.). Offline forms are pre-populated PDFs exported from CodioCMS for traditional paper submission. Same case data, either path.' },
  { n: '02', color: 'var(--blue)',   h: 'Authority-synced versions', b: 'Every edition tracked to USCIS, IRCC, IND, and MEA releases. Your firm never files on a superseded form.' },
  { n: '03', color: 'var(--violet)', h: 'New countries on demand',   b: "Need a country we don't support yet? We scope, build, and release it in days - not product quarters." },
];



const CODIOOPS_STATS = [
  { value: 'Setup', label: 'Workflow & template configuration' },
  { value: 'Activation', label: 'Automations & team training' },
  { value: 'Ongoing', label: 'Continuous platform tuning' },
];

const NETWORK_PROVIDERS = [
  { Icon: Languages, label: 'Certified Translators', tag: '40+ languages' },
  { Icon: Stethoscope, label: 'Immigration Physicians', tag: 'USCIS approved' },
  { Icon: Stamp, label: 'Apostille & Auth', tag: 'Multi-country' },
  { Icon: Scale, label: 'Foreign Attorneys', tag: 'In-country counsel' },
  { Icon: Truck, label: 'Specialized Couriers', tag: 'Secure delivery' },
  { Icon: Building2, label: 'Consular Coordinators', tag: 'Appointment liaison' },
];

const NETWORK_ASSIGNMENTS = [
  {
    provider: 'Elena Vasquez',
    type: 'Certified Translator',
    task: 'I-130 supporting docs · ES→EN',
    deadline: 'Due Jun 10',
    status: 'delivered',
    scope: 'Scoped: Name, DOB, doc type only',
  },
  {
    provider: 'Dr. Arjun Mehta',
    type: 'Immigration Physician',
    task: 'I-693 medical exam',
    deadline: 'Due Jun 14',
    status: 'pending',
    scope: 'Scoped: Case ref, client name only',
  },
];

const NETWORK_CAPS = [
  { n: '01', color: 'var(--blue)',   h: 'Structured provider workflows', b: 'Outsourcing is a managed workflow, not an email. Assign work, set deliverables, track revisions, and extend deadlines - all with a paper trail both parties can see.' },
  { n: '02', color: 'var(--violet)', h: 'Field-level confidentiality',   b: 'Send a translator exactly what they need - not salary details, not passport numbers, not case strategy. Confidentiality is enforced at the data field level, automatically.' },
  { n: '03', color: 'var(--teal)',   h: 'Data-driven provider selection', b: 'Every assignment builds history - with structured feedback, billing, and revisions tracked in one place. No disputed invoices or lost email threads.' },
];

const AI_ERA_POINTS = [
  {
    Icon: Cpu,
    n: '01',
    h: 'Built before AI existed',
    b: 'Every other case management platform in immigration was built before AI agents existed. Their workflows, integrations, and data models were never designed to support an AI workforce.',
  },
  {
    Icon: Bot,
    n: '02',
    h: 'Native AI from the ground up',
    b: 'CodioCMS is different - designed from the ground up to run native AI agents, automate routine work, and grow with your firm.',
    featured: true,
    linkColor: 'var(--blue)',
    links: [{ href: '/ai-agents', label: 'Meet the AI Agents' }],
  },
  {
    Icon: RefreshCw,
    n: '03',
    h: 'Not AI bolted on',
    b: 'This is not legacy software with AI bolted on. This is the platform AI was waiting for.',
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

/* ── CMS Bento ───────────────────────────────────────────
   Hero card (left, spans full height) + 3 grouped columns (right)
   Groups: Case Management · Portals & Access · Intelligence
──────────────────────────────────────────────────────── */
const CMS_GROUPS = [
  {
    tag: 'Case Management',
    color: 'var(--blue)',
    iconGrad: 'linear-gradient(135deg,var(--blue-bright) 0%,var(--blue) 100%)',
    iconShadow: 'var(--blue-a16)',
    headBg: 'var(--blue-tint-2)',
    headBorder: 'var(--line-blue)',
    items: [
      {
        Icon: Workflow,
        h: 'Case lifecycle & workflows',
        b: 'From intake through filing to closure - playbook templates and automations built for your firm, every matter type in one system.',
      },
      {
        Icon: FileText,
        h: 'Forms & questionnaires',
        b: 'Government forms pre-filled from case data and structured client intake - conditional logic, authority-synced editions, and attorney review.',
      },
      {
        Icon: GlobeIcon,
        h: 'Global country support',
        b: 'Every country you practice in, with new countries added on demand.',
      },
    ],
  },
  {
    tag: 'Portals & Access',
    color: 'var(--violet)',
    iconGrad: 'linear-gradient(135deg,var(--violet-bright) 0%,var(--violet) 100%)',
    iconShadow: 'var(--violet-a12)',
    headBg: 'var(--violet-soft)',
    headBorder: 'var(--violet-a12)',
    items: [
      { Icon: UsersIcon,     h: 'Applicant portal',          b: 'Foreign nationals submit documents, track status, and answer questionnaires.' },
      { Icon: Building2, h: 'HR & employer portal',      b: 'Corporate HR teams manage employee visa cases and workforce analytics.' },
      { Icon: Network,   h: 'Service provider portal',   b: 'Translators, physicians, and attorneys coordinate inside the same platform.' },
    ],
  },
  {
    tag: 'Intelligence',
    color: 'var(--teal)',
    iconGrad: 'linear-gradient(135deg,var(--teal-bright) 0%,var(--teal) 100%)',
    iconShadow: 'var(--teal-a12)',
    headBg: 'var(--teal-soft)',
    headBorder: 'var(--teal-a12)',
    items: [
      { Icon: ShieldCheckIcon, h: 'Role-based access control', b: '27 permission modules, 7 action types, and full data-scope isolation.' },
      { Icon: GitMerge,    h: 'Native integrations',       b: 'Email, calendar, e-signature, and accounting tools connected natively to CodioCMS.' },
      { Icon: BarChart3,   h: 'Reporting & analytics',     b: 'Executive reports, HR dashboards, renewal pipeline, and bottleneck alerts.' },
    ],
  },
];

function CMSBento() {
  return (
    <div className="cms-bento">
      {/* ── Hero card ── */}
      <div className="cms-bento-hero reveal d1">
        <div>
          <div className="mono cms-bento-hero-label">CODIOCMS</div>
          <div className="display cms-bento-hero-title">
            Everything your firm needs.<br />
            <em>Nothing it doesn&apos;t.</em>
          </div>
        </div>
        <div style={{ marginTop: 'calc(32px * var(--ui-scale))' }}>
          <div className="mono cms-bento-hero-cap-label">9 CAPABILITIES</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'calc(8px * var(--ui-scale))' }}>
            {CMS_GROUPS.map(g => (
              <div key={g.tag} className="cms-bento-hero-cap-item">
                <span style={{ width: 'calc(8px * var(--ui-scale))', height: 'calc(8px * var(--ui-scale))', borderRadius: '50%', background: g.color, flexShrink: 0 }} />
                <span>{g.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Three category columns ── */}
      <div className="cms-bento-cols">
        {CMS_GROUPS.map((group, gi) => (
          <div key={group.tag} className={`cms-bento-col reveal d${gi + 2}`} style={{ borderColor: group.headBorder }}>
            <div className="cms-bento-col-head" style={{ background: group.headBg, borderBottomColor: group.headBorder }}>
              <span className="cms-bento-col-dot" style={{ background: group.color }} />
              <span className="mono" style={{ color: group.color }}>{group.tag}</span>
            </div>
            <div className="cms-bento-col-rows">
              {group.items.map((item) => {
                const Icon = item.Icon;
                return (
                  <div key={item.h} className="cms-bento-col-row">
                    <div className="cms-bento-col-row-top">
                      <span className="cms-bento-col-row-icon" aria-hidden="true" style={{ background: group.iconGrad, boxShadow: `0 2px 6px ${group.iconShadow}` }}>
                        <Icon size={13} strokeWidth={1.75} />
                      </span>
                      <span className="cms-bento-col-row-title">{item.h}</span>
                    </div>
                    <p className="cms-bento-col-row-body">{item.b}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Platform() {
  return (
    <>
      <PageHero
        eyebrow="The Platform"
        lead="The Platform Built by the People"
        emphasis="Who Built Immigration Tech."
        sub="CodioCMS and CodioForms are the foundation of GlobalCodio - a next-generation case management platform and global immigration forms engine, designed from the ground up for the AI era."
        primary={{ href: '/contact', label: 'Book a free tech audit' }}
        secondary={{ href: 'mailto:info@globalcodio.ai', label: 'Talk to us about migration' }}
      />

      {/* CodioCMS */}
      <Section id="codiocms" className="sec-codiocms">
        <div className="reveal section-head-wide cms-head-copy">
          <SectionEyebrow align="center">CodioCMS</SectionEyebrow>
          <SplitHeading lead="Global immigration" emphasis="case management software." />
          <p className="section-intro">
            Immigration case management for firms and corporate teams - built by the founder of the world's leading immigration case management platform. Not generic legal tech: a modern platform with native AI agents, CodioForms, and our global services network.
          </p>
        </div>

        <CMSBento />

        {/* Passport Vault callout - hidden for now
        <div className="cms-passport-vault reveal d1">
          <div>
            <div className="mono cms-passport-vault-label">IMMIGRATION PASSPORT VAULT</div>
            <h3 className="display cms-passport-vault-title">
              Applicants own their record.{' '}
              <em>Across every matter they ever open.</em>
            </h3>
            <p className="cms-passport-vault-body">
              Every document an applicant submits is stored in their personal Immigration Passport Vault.
              They control what is shared, with whom, and for how long. When they change employers,
              switch law firms, or start a new matter, they carry their complete record with them -
              no re-submission, no starting from scratch, no lost history.
            </p>
          </div>

          <div className="cms-passport-vault-features">
            {[
              {
                Icon: Vault,
                title: 'Permanent personal record',
                detail: 'Passports, visas, work permits, and supporting documents - stored securely and accessible to the applicant at any time, regardless of which firm they work with.',
              },
              {
                Icon: UserCheck,
                title: 'Granular, revocable consent',
                detail: 'Applicants choose exactly what to share and with whom. Consent can be granted per-matter and revoked at any time. Their data, their control.',
              },
              {
                Icon: ArrowRightLeft,
                title: 'Portable across employers and firms',
                detail: 'A new job, a new country, a new attorney - the vault travels with the applicant. No more repeating the same document collection from scratch.',
              },
            ].map((item) => {
              const Icon = item.Icon;
              return (
                <div key={item.title} className="cms-passport-vault-feature">
                  <span className="cms-passport-vault-feature-icon" aria-hidden="true">
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="cms-passport-vault-feature-title">{item.title}</div>
                    <div className="cms-passport-vault-feature-detail">{item.detail}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        */}

        <div className="codioops-foot reveal d3">
          <div className="codioops-statband codioops-statband--foot" aria-label="CodioOps at a glance">
            {CODIOOPS_STATS.map((s, i) => (
              <div key={s.label} className={`codioops-stat reveal d${i + 1}`}>
                <span className="display codioops-stat-value">{s.value}</span>
                <span className="codioops-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <p className="codioops-foot-lead">
            Every CodioCMS engagement includes CodioOps - dedicated operations that configure your workflows,
            templates, and automations, then continuously tune the platform as your firm evolves.
          </p>
          <SmartLink href="/codioops" className="btn btn-primary codioops-foot-cta">
            Learn more about CodioOps
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </SmartLink>
        </div>
      </Section>

      {/* CodioForms */}
      <Section id="codioforms" tone="sec-surface" className="sec-codioforms">
        <div className="reveal section-head-wide forms-head-copy">
          <SectionEyebrow>CodioForms</SectionEyebrow>
          <SplitHeading lead="Global immigration forms" emphasis="and questionnaires." />
          <p className="section-intro">
            The only immigration forms and questionnaires engine built for multi-country practice - every edition authority-synced,
            prefilled from CodioCMS, and available online or as print-ready PDF.
          </p>
        </div>

        <div className="forms-bento">
          <div className="forms-bento-grid">
            <div className="reveal forms-catalog" aria-label="CodioForms catalog preview">
              <div className="forms-catalog-head">
                <span className="forms-catalog-brand">
                  <span className="forms-catalog-brand-icon" aria-hidden="true">
                    <FileText size={15} strokeWidth={1.75} />
                  </span>
                  CodioForms
                </span>
                <span className="mono forms-catalog-matter">Matter #1847 · Chen family</span>
                <div className="forms-catalog-mode" role="group" aria-label="Filling mode">
                  <span className="forms-catalog-mode-on">Online</span>
                  <span className="forms-catalog-mode-off">Offline PDF</span>
                </div>
              </div>

              <div className="forms-catalog-body">
                <nav className="forms-catalog-nav" aria-label="Forms in matter">
                  {CATALOG_FORMS.map((f) => (
                    <div
                      key={f.id}
                      className={`forms-catalog-item${f.active ? ' is-active' : ''}`}
                      aria-current={f.active ? 'true' : undefined}
                    >
                      <span className="mono forms-catalog-id">{f.id}</span>
                      <span className="forms-catalog-name">{f.name}</span>
                      <span className="mono forms-catalog-country">{f.country}</span>
                    </div>
                  ))}
                </nav>

                <div className="forms-catalog-detail">
                  <div className="forms-detail-head">
                    <h3 className="forms-detail-title">I-130 · Petition for Alien Relative</h3>
                    <span className="mono forms-detail-edition">Edition 04/01/24 · USCIS current</span>
                  </div>
                  <p className="forms-detail-sync">
                    <span className="forms-detail-sync-dot" aria-hidden="true" />
                    <span className="mono">Prefilled from CodioCMS · 847 fields mapped · last sync 2m ago</span>
                  </p>
                  <dl className="forms-field-rows">
                    {ACTIVE_FORM_FIELDS.map(([label, value]) => (
                      <div key={label} className="forms-field-row">
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="forms-detail-actions">
                    <span className="forms-detail-action forms-detail-action--primary">Review &amp; sign</span>
                    <span className="forms-detail-action">Export PDF</span>
                  </div>
                </div>
              </div>

              <div className="forms-catalog-foot">
                <span className="forms-catalog-foot-live" aria-hidden="true" />
                <span className="mono forms-catalog-foot-label">Live authority sync</span>
                <div className="forms-catalog-foot-tags" aria-label="Synced authorities">
                  {['USCIS', 'IRCC', 'IND', 'MEA / FRRO'].map((authority) => (
                    <span key={authority} className="forms-catalog-foot-tag">{authority}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="forms-cap-stack">
              {FORMS_CAPS.map((cap, i) => (
                <article key={cap.h} className={`forms-cap-card reveal d${i + 1}`} style={{ borderTopColor: cap.color }}>
                  <span className="mono forms-cap-n" style={{ color: cap.color }}>{cap.n}</span>
                  <h3 className="display forms-cap-title">{cap.h}</h3>
                  <p className="forms-cap-text">{cap.b}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="forms-foot reveal d1">
            <div className="forms-statband forms-statband--foot" aria-label="CodioForms at a glance">
              {FORMS_STATS.map((s) => (
                <div key={s.label} className="forms-stat">
                  <span className="display forms-stat-value">{s.value}</span>
                  <span className="forms-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <p className="forms-foot-lead">
              🇺🇸 🇨🇦 🇳🇱 🇮🇳 Four countries live - USCIS, IRCC, IND & MEA editions synced in CodioCMS.
              <br />
              New countries on demand. Prefilled from case data, online or PDF.
            </p>
            <SmartLink href="/platform#codioforms" className="btn btn-primary forms-foot-cta">
              Learn more about CodioForms
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </SmartLink>
          </div>
        </div>
      </Section>

      {/* CodioNetwork */}
      <Section id="codionetwork" className="sec-codionetwork">
        <div className="network-head reveal">
          <div className="section-head-wide network-head-copy">
            <SectionEyebrow align="center">CodioNetwork</SectionEyebrow>
            <SplitHeading lead="The global service provider network" emphasis="for immigration." />
            <p className="section-intro">
              A curated B2B network accessible directly through CodioCMS. One coordination layer instead of
              dozens of manual handoffs - with structured workflows, field-level confidentiality, and a full
              history of every assignment.
            </p>
          </div>
        </div>

        <div className="network-bento">
          <div className="network-bento-grid">
            <div className="reveal network-console" aria-label="CodioNetwork coordination preview">
              <div className="network-console-head">
                <span className="network-console-brand">CodioNetwork</span>
                <span className="mono network-console-matter">Matter #2241 · Vasquez family</span>
                <span className="network-console-status">2 active</span>
              </div>

              <div className="network-console-body">
                <nav className="network-console-nav" aria-label="Provider disciplines">
                  {NETWORK_PROVIDERS.map((p, pi) => {
                    const Icon = p.Icon;
                    const pal = ICON_PALETTE[pi % ICON_PALETTE.length];
                    return (
                      <div
                        key={p.label}
                        className={`network-console-item${p.active ? ' is-active' : ''}`}
                        aria-current={p.active ? 'true' : undefined}
                      >
                        <span className="network-console-icon" aria-hidden="true" style={{ background: pal.grad, boxShadow: pal.shadow }}>
                          <Icon size={14} strokeWidth={1.75} />
                        </span>
                        <span className="network-console-name">{p.label}</span>
                        <span className="mono network-console-tag">{p.tag.toUpperCase()}</span>
                      </div>
                    );
                  })}
                </nav>

                <div className="network-console-detail">
                  <div className="network-detail-head">
                    <h3 className="network-detail-title">Provider assignments</h3>
                    <span className="mono network-detail-edition">Structured workflows · scoped fields only</span>
                  </div>

                  <div className="network-assignment-list">
                    {NETWORK_ASSIGNMENTS.map((row) => (
                      <article key={row.provider} className="network-assignment">
                        <div className="network-assignment-top">
                          <div className="network-assignment-who">
                            <span className="network-assignment-name">{row.provider}</span>
                            <span className="mono network-assignment-type">{row.type.toUpperCase()}</span>
                          </div>
                          <span className={`network-assignment-badge network-assignment-badge--${row.status}`}>
                            {row.status}
                          </span>
                        </div>
                        <p className="network-assignment-task">{row.task}</p>
                        <div className="network-assignment-meta">
                          <span className="mono network-assignment-scope">{row.scope}</span>
                          <span className="mono network-assignment-deadline">{row.deadline}</span>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="network-detail-callout">
                    <p className="network-detail-callout-text">
                      <strong>Vetted providers</strong> · assignment history · billing in one place
                    </p>
                    <span className="pill network-detail-callout-pill">In CodioCMS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="network-cap-stack">
              {NETWORK_CAPS.map((cap, i) => (
                <article key={cap.h} className={`network-cap-card reveal d${i + 1}`} style={{ borderTopColor: cap.color }}>
                  <span className="mono network-cap-n" style={{ color: cap.color }}>{cap.n}</span>
                  <h3 className="display network-cap-title">{cap.h}</h3>
                  <p className="network-cap-text">{cap.b}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="network-foot reveal d1">
            <p className="network-foot-lead">
              Replace dozens of manual handoffs with one coordination layer inside CodioCMS. Assign vetted
              providers from the case with field-level confidentiality and a complete assignment history.
            </p>
            <SmartLink href="/network" className="btn btn-primary network-foot-cta">
              Explore CodioNetwork
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </SmartLink>
          </div>
        </div>
      </Section>

      {/* AI Era */}
      <Section
        id="ai-era"
        eyebrow="Built for the AI Era"
        lead="The first immigration platform"
        emphasis="built for the AI era."
        headAlign="center"
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={AI_ERA_POINTS} cols={3} />
        </div>
      </Section>

      {/* Migration
      <Section id="migration" tone="sec-surface" className="sec-migration">
        <div className="migration-head-row reveal">
          <div className="section-head-wide migration-head-copy">
            <SectionEyebrow align="center">Migration</SectionEyebrow>
            <SplitHeading lead="Coming from another platform?" emphasis="We migrate you." />
            <p className="section-intro">
              On another CMS? Our team runs the full move - data, workflows, documentation, and parallel
              operations until you're live on CodioCMS.
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
      */}

      <FaqAccordion
        id="faq"
        eyebrow="Common Questions"
        lead="Questions about"
        emphasis="the platform."
        items={[
          {
            q: 'What is CodioCMS?',
            a: "CodioCMS is a next-generation immigration case management platform built by the founder of INSZoom - the world's leading immigration CMS. It provides end-to-end case lifecycle management, five purpose-built portals (attorney, applicant, HR, service provider, admin), native AI agent integration, and global country support. Every engagement includes CodioOps - a dedicated team that configures and continuously optimizes the platform to your exact workflows.",
            meta: ['Five-portal architecture', 'Native AI agents'],
          },
          {
            q: 'What immigration forms does CodioForms support?',
            a: 'CodioForms supports 180+ US forms (USCIS-synced), the full IRCC suite for Canada, Netherlands MVV and residence permits, and India visa and OCI forms. Every form edition is tracked to the issuing authority so your firm never files on a superseded version. New countries are scoped and built in days based on client priority.',
            meta: ['180+ US forms', 'Multi-country'],
          },
          {
            q: 'How does CodioCMS differ from other immigration case management software?',
            a: "CodioCMS is the only immigration platform designed from the ground up for native AI agents - not legacy software with AI bolted on. It includes five dedicated role portals, a global forms engine, an Immigration Passport Vault giving applicants portable document ownership, and CodioOps managed services bundled with every engagement.",
            meta: ['AI-native architecture', 'CodioOps bundled'],
          },
          {
            q: 'Can we migrate from our current immigration software to CodioCMS?',
            a: "Yes. GlobalCodio's team manages the full migration: data export from your current platform, mapping and verification, workflow reconstruction in CodioCMS, and parallel operations until your team is fully transitioned. Typical migration takes approximately six weeks with zero disruption to active cases.",
            meta: ['~6 week migration', 'Zero case disruption'],
          },
          {
            q: 'What is the Immigration Passport?',
            a: 'The Immigration Passport is a personal document record within CodioCMS where applicants store passports, visas, permits, and supporting documents securely. Applicants control what they share and with whom. When they change employers or switch firms, their complete record travels with them - no re-submission or starting from scratch.',
            meta: ['Applicant-owned', 'Portable across firms'],
          },
        ]}
      />

      <CtaBand
        lead="We demo the features that solve"
        emphasis="your challenges. Not a generic demo."
        primary={{ href: '/contact', label: 'Book your free tech audit' }}
        secondary={{ href: '/ai-agents', label: 'Explore the AI Agents' }}
      />
    </>
  );
}
