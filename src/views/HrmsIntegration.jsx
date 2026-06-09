'use client';
import React from 'react';

import { PageHero, Section, SectionEyebrow, FeatureGrid, SplitHeading, CtaBand, SmartLink } from '../../components/ui/PageKit';
import { ICON_PALETTE, ICON_GRAD, ICON_SHADOW_MD } from '../../lib/tokens';
import {
  Database,
  RefreshCw,
  Link2,
  Plug,
  BarChart3,
} from 'lucide-react';
import {
  ShieldCheckIcon,
  TrendingUpIcon,
  UsersIcon,
  ZapIcon,
} from '@animateicons/react/lucide';

const WHY_DRIVERS = [
  {
    Icon: Database,
    animated: false,
    h: 'Scale makes manual exchange untenable',
    b: "A company managing dozens or hundreds of foreign nationals cannot have HR teams re-keying employee data into a law firm's system. At volume, every manual handoff is a source of error, delay, and cost.",
    featured: true,
  },
  {
    Icon: ShieldCheckIcon,
    animated: true,
    h: 'Compliance risk lives in the data',
    b: "I-9 verification, LCA management, and visa expiration tracking all depend on accurate, current employee data. When HR and the law firm work from disconnected systems, status changes fall through the cracks.",
  },
  {
    Icon: BarChart3,
    animated: false,
    h: 'Integration is now a scored RFP criterion',
    b: "Corporations no longer ask whether your attorneys are good. In RFPs, they ask whether your systems connect to theirs. Firms that cannot integrate are screened out before legal merits are evaluated.",
  },
];

const WHAT_IT_DELIVERS = [
  {
    Icon: TrendingUpIcon,
    animated: true,
    h: 'Win more corporate work',
    b: "Meet the integration requirement that decides RFP outcomes. Your firm becomes the one that connects - not the one that can't.",
  },
  {
    Icon: ZapIcon,
    animated: true,
    h: 'Zero double entry',
    b: 'Employee details and status sync automatically across systems. No spreadsheets, no re-keying, no divergent records.',
  },
  {
    Icon: ShieldCheckIcon,
    animated: true,
    h: 'Automated compliance tracking',
    b: 'Employee and dependent expiration dates are monitored continuously from your clients\' HR system - no manual chasing required.',
  },
  {
    Icon: UsersIcon,
    animated: true,
    h: 'Real-time visibility for HR teams',
    b: 'HR staff, hiring managers, and employees all see live case status - not "wait for an email update" workflows.',
  },
  {
    Icon: RefreshCw,
    animated: false,
    h: 'Faster case initiation',
    b: 'New sponsored hires can trigger a case automatically at the moment of offer, directly from your clients\' HR or ATS system.',
  },
  {
    Icon: Link2,
    animated: false,
    h: 'One source of truth',
    b: 'Guaranteed data consistency between HR and case management - exactly what auditors and corporate legal teams want to see.',
  },
];

const HR_PLATFORMS = [
  {
    name: 'Workday',
    desc: 'Sync employee records, org structure, cost centres, and employment status directly into case management.',
    tag: 'HCM',
    i: 0,
    logo: '/assets/hrms/workday.svg',
  },
  {
    name: 'SAP SuccessFactors',
    desc: 'Connect HCM data and trigger onboarding cases automatically when new hires requiring sponsorship are created.',
    tag: 'HCM',
    i: 1,
    logo: '/assets/hrms/sap.svg',
  },
  {
    name: 'BambooHR',
    desc: 'Automate the full employee lifecycle — new hire intake, status changes, and offboarding — across HR and immigration.',
    tag: 'HRIS',
    i: 2,
    logo: '/assets/hrms/bamboohr.svg',
  },
  {
    name: 'ADP',
    desc: 'Sync payroll and workforce data to keep LCA filings and compliance records accurate without manual re-entry.',
    tag: 'Payroll',
    i: 3,
    logo: '/assets/hrms/adp.svg',
  },
  {
    name: 'Rippling',
    desc: 'Trigger immigration cases directly from Rippling onboarding flows and keep offboarding status in sync automatically.',
    tag: 'HRIS',
    i: 4,
    logo: '/assets/hrms/rippling.svg',
  },
  {
    name: 'ATS & Custom APIs',
    desc: 'Connect applicant tracking systems or proprietary HR platforms via API — sponsored hires trigger cases at the moment of offer.',
    tag: 'Custom',
    i: 2,
    logo: null,
  },
];

const RFP_CONSEQUENCES = [
  {
    n: '01',
    t: "Manual exchange doesn't scale",
    d: 'At volume, every handoff between HR and the law firm is a source of error, delay, and cost - and a liability in any audit.',
  },
  {
    n: '02',
    t: 'Disconnected systems break compliance',
    d: 'A termination or role change that HR records but the law firm never receives puts every active case at risk.',
  },
  {
    n: '03',
    t: 'Firms without integration are screened out',
    d: 'Corporate procurement scores integration capability before legal merits are ever reviewed. No integration means no seat at the table.',
  },
];

const COVERED_ITEMS = [
  'Workday - employee records, org data, and status sync',
  'SAP SuccessFactors - HCM data and onboarding triggers',
  'BambooHR - employee lifecycle and new hire automation',
  'ADP - payroll and workforce data sync',
  'Rippling - employee onboarding and offboarding flows',
  'ATS systems - sponsored hire case initiation at offer',
  'Custom HR APIs - enterprise and proprietary platforms',
  'Dependent and expiration date monitoring across all systems',
];

export default function HrmsIntegration() {
  return (
    <>
      <PageHero
        eyebrow="HRMS Integration"
        lead="Integrate With Your Clients' HR Systems."
        emphasis="Win the Work That Requires It."
        sub="GlobalCodio connects your case management directly to Workday, SAP SuccessFactors, BambooHR, ADP, and more - so employee data flows automatically and your firm meets the integration standard corporations now require in RFPs."
        primary={{ href: '/free-tech-audit', label: 'Book a free tech audit' }}
        secondary={{ href: '/it-services', label: 'See all services' }}
      />

      {/* Why This Matters — heading + platform cards */}
      <section className="sec" id="the-case">
        <div className="container">

          {/* Section heading */}
          <div
            className="reveal section-head-wide"
            style={{ marginBottom: 'var(--space-3xl)', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}
          >
            <SectionEyebrow align="center">HR Platforms We Connect</SectionEyebrow>
            <SplitHeading
              lead="Corporations don't just ask if your attorneys are good."
              emphasis="They ask if your systems connect."
              className="type-display-lg hrms-case-heading"
            />
            <p className="section-intro" style={{ maxWidth: '72ch', marginLeft: 'auto', marginRight: 'auto' }}>
              GlobalCodio connects your case management directly to your corporate clients'
              HR systems — so employee data flows automatically and your firm meets the
              integration standard that corporate RFPs now require.
            </p>
          </div>

          {/* Platform card grid */}
          <div className="hrms-platform-cards reveal d1">
            {HR_PLATFORMS.map(({ name, desc, tag, logo, i }) => {
              const pal = ICON_PALETTE[i % ICON_PALETTE.length];
              return (
                <article key={name} className="hrms-plat-card">
                  {/* Logo + name row */}
                  <div className="hrms-plat-card-header">
                    <span
                      className={`hrms-plat-logo${logo ? '' : ' hrms-plat-logo--fallback'}`}
                      style={logo ? undefined : { background: pal.grad, boxShadow: pal.shadow }}
                    >
                      {logo ? (
                        <img
                          src={logo}
                          alt={`${name} logo`}
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                        />
                      ) : (
                        <Plug size={20} strokeWidth={1.75} color="#fff" aria-hidden="true" />
                      )}
                    </span>
                    <span className="hrms-plat-name display">{name}</span>
                  </div>
                  {/* Description */}
                  <p className="hrms-plat-desc">{desc}</p>
                  {/* Tag */}
                  <span className="hrms-plat-tag" style={{ color: pal.color, background: `color-mix(in srgb, ${pal.color} 10%, transparent)`, border: `1px solid color-mix(in srgb, ${pal.color} 22%, transparent)` }}>
                    {tag}
                  </span>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why corporations require it */}
      <Section
        id="why-corporations-require"
        tone="sec-surface"
        eyebrow="Why Corporations Require It"
        lead="The forces behind"
        emphasis="the integration mandate."
        headAlign="center"
        headInline
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={WHY_DRIVERS} cols={3} />
        </div>
      </Section>

      {/* What it delivers */}
      <Section
        id="what-it-delivers"
        eyebrow="What It Delivers"
        lead="Everything that flows"
        emphasis="once you're connected."
        headAlign="center"
        headInline
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={WHAT_IT_DELIVERS} cols={3} />
        </div>
      </Section>

      {/* The GlobalCodio Advantage - dark section, two-column inline grid */}
      <section className="sec sec-dark" id="advantage">
        <div className="container">
          <div className="hrms-advantage-grid reveal">
            {/* Left - heading */}
            <div className="hrms-advantage-head">
              <SectionEyebrow>The GlobalCodio Advantage</SectionEyebrow>
              <SplitHeading lead="Enterprise-grade HR integration" emphasis="built for law firms." />
            </div>
            {/* Right - copy */}
            <div className="hrms-advantage-copy reveal d1">
              <p>
                Most case management tools built for law firms integrate with legal billing and practice management
                software - not enterprise HR systems. The platforms that do offer deep HR integration are typically
                sold direct to corporations as full-service replacements for outside counsel.
              </p>
              <p>
                GlobalCodio closes that gap: we give law firms the enterprise-grade HRMS integration their corporate
                clients demand, without an internal IT team. We deploy it, we manage it, and we keep it running.
                Employee data syncs automatically, compliance timelines stay current, and your corporate clients get
                the real-time visibility they expect.
              </p>
              <hr className="rule-blue" style={{ margin: 'var(--space-xl) 0' }} />
              <p className="mono" style={{ fontSize: 'calc(14px * var(--ui-scale))', color: 'rgba(255,255,255,.55)', lineHeight: 1.6, letterSpacing: '.04em' }}>
                HRMS Integration is included as part of the GlobalCodio managed technology operation - not a
                separate platform to purchase or maintain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's covered */}
      <Section id="covered-platforms" tone="sec-surface" eyebrow="What's Covered" lead="No integration" emphasis="left behind." headAlign="center" headInline>
        <div className="cs-scope-grid reveal" style={{ marginTop: 'var(--space-3xl)' }}>
          {COVERED_ITEMS.map((item, i) => (
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

      <CtaBand
        lead="See how HRMS integration can win your firm"
        emphasis="its next corporate account."
        primary={{ href: '/free-tech-audit', label: 'Book a free tech audit' }}
        secondary={{ href: '/contact', label: 'Talk to our team' }}
      />

      <style>{`
        #the-case .section-head-wide .hrms-case-heading > span{white-space:nowrap;}
        @media(max-width:900px){
          #the-case .section-head-wide .hrms-case-heading > span{white-space:normal;}
        }
      `}</style>
    </>
  );
}
