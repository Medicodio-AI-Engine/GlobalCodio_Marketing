'use client';
import React, { useRef } from 'react';
import { Hero } from '../components/Hero.jsx';
// import { OperatingSystem } from '../components/OperatingSystem.jsx';
import { AgentOrbit, Testimonial, Metrics, ValueLevers, Certifications, CTA } from '../components/ContentSections.jsx';

import { Section, SectionEyebrow, FeatureGrid, SmartLink, SplitHeading } from '../../components/ui/PageKit';
import { ICON_PALETTE } from '../../lib/tokens';
import { Cpu, FileText, Bot, Network, Scale, Building2, Truck } from 'lucide-react';
import { SettingsIcon, ShieldCheckIcon, UsersIcon } from '@animateicons/react/lucide';

/* Founder credibility band */
const FOUNDER_STATS = [
  ['1,000+', 'law firms served by INSZoom'],
  ['20 yrs', 'inside immigration technology'],
  ['2020', 'INSZoom acquired'],
  ['2025', 'GlobalCodio founded'],
];

const FounderBand = () => (
  <Section id="founder" tone="sec-surface" className="sec-founder">
    <div className="reveal"><SectionEyebrow>The Next Chapter in Immigration Tech</SectionEyebrow></div>
    <div className="founder-layout">
      <div className="reveal founder-copy">
        <SplitHeading lead="Built by the people" emphasis="who built immigration tech." />
        <p className="founder-intro">
          In 1999, Umesh Vaidyamath founded INSZoom - the immigration case management platform that grew to serve
          more than 1,000 law firms worldwide before being acquired in 2020. After two decades inside immigration
          tech, he saw clearly what came next: not better software, but a complete technology operation, AI-powered
          and fully managed. GlobalCodio is that next chapter.
        </p>
        <SmartLink href="/letter-from-the-founder" className="feature-card-link founder-link">
          Read the Letter from the Founder
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
        </SmartLink>
      </div>

      <div className="founder-stat-grid">
        {FOUNDER_STATS.map(([n, l], i) => (
          <div key={l} className={`founder-stat reveal d${i + 1}`}>
            <div className="display founder-stat-num">{n}</div>
            <div className="founder-stat-label">{l}</div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

/* Pain recognition */
const PAINS = [
  'Your case management software was never properly configured to your workflows',
  'Your team uses 20% of the features because nobody set up the other 80%',
  "AI tools confuse more than they help - and you don't know which to trust",
  'Staff turnover keeps resetting your operations and losing institutional knowledge',
  "Corporate RFPs come in with deep technical questions you can't credibly answer",
  'You have no IT support, no security posture, and no one managing your technology',
];

const PainRecognition = () => (
  <Section id="pain" eyebrow="Sounds Familiar?" lead="If any of these describe your firm," emphasis="you're exactly who GlobalCodio was built for." headAlign="center">
    <ul className="check-list pain-list" style={{ marginTop: 'var(--space-2xl)', gridTemplateColumns: 'repeat(2,1fr)', gap: 'var(--space-lg)' }}>
      {PAINS.map((p, i) => (
        <li key={i} className="reveal pain-item">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}><circle cx="10" cy="10" r="10" fill="var(--blue)" /><path d="M6.5 10l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          {p}
        </li>
      ))}
    </ul>
    <p className="reveal d1 pain-payoff display">There&rsquo;s a better way. It&rsquo;s called <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>GlobalCodio.</em></p>
  </Section>
);

/* Five integrated layers */
const LAYERS = [
  { Icon: Cpu,         animated: false, h: 'CodioCMS',        b: 'The next-generation case management platform built by the founder of INSZoom. Configured to your exact workflows.',                                                                                                      featured: true, linkColor: '#1950C6',                                                         links: [{ href: '/platform',  label: 'Explore the platform'  }] },
  { Icon: FileText,    animated: false, h: 'CodioForms',      b: 'Online and offline immigration forms for USA, Canada, Netherlands, and India - with new countries added on demand.',                                                                                                        iconGrad: 'linear-gradient(135deg,#11a085 0%,#0d7c66 100%)', iconShadow: 'rgba(13,124,102,.28)', linkColor: '#0d7c66', links: [{ href: '/platform',  label: 'See CodioForms'        }] },
  { Icon: Bot,         animated: false, h: 'Codio AI Agents', b: 'A team of AI agents handling intake, documents, forms, deadlines, communications, renewals, and business development.',                                                                                                     iconGrad: 'linear-gradient(135deg,#7c5bc9 0%,#5b3fa8 100%)', iconShadow: 'rgba(91,63,168,.28)',  linkColor: '#5b3fa8', links: [{ href: '/ai-agents', label: 'Meet the agents'        }] },
  { Icon: SettingsIcon,animated: true,  h: 'CodioOps',        b: 'The dedicated operations team that configures, optimizes, and continuously tunes CodioCMS to match exactly how your firm operates. Bundled with every engagement.',                                                         iconGrad: 'linear-gradient(135deg,#d97706 0%,#b45309 100%)', iconShadow: 'rgba(180,83,9,.28)',   linkColor: '#b45309', links: [{ href: '/codioops',  label: 'Learn about CodioOps' }] },
  { Icon: Network,     animated: false, h: 'CodioNetwork',    b: 'A curated network of certified translators, physicians, apostille services, foreign attorneys, and consular coordinators.',                                                                                                  iconGrad: 'linear-gradient(135deg,#0ea5c9 0%,#0077a8 100%)', iconShadow: 'rgba(0,119,168,.28)',  linkColor: '#0077a8', links: [{ href: '/network',   label: 'See the network'      }] },
  { Icon: SettingsIcon,animated: true,  h: 'Technology Audit',b: "A comprehensive audit of your firm's current tech stack, workflows, and operations. Identifies gaps, risks, and opportunities before onboarding begins.",                                                                    iconGrad: 'linear-gradient(135deg,#e05c8a 0%,#be2d6c 100%)', iconShadow: 'rgba(190,45,108,.28)', linkColor: '#be2d6c', links: [{ href: '/contact',   label: 'Request an audit'     }] },
];

const FiveLayers = () => (
  <Section
    id="operation"
    tone="sec-surface"
    eyebrow="The Complete Operation"
    lead="One partner."
    emphasis="Your entire technology operation."
    intro="GlobalCodio is not a software vendor. We're the complete technology operation for your firm - a proprietary platform, AI workforce, global forms engine, service provider network, full managed services, and expert consulting. All built for immigration."
    headAlign="center"
  >
    <div style={{ marginTop: 'var(--space-3xl)' }}>
      <FeatureGrid items={LAYERS.slice(0, 3)} cols={3} />
      <div style={{ marginTop: 'var(--space-lg)' }}>
        <FeatureGrid items={LAYERS.slice(3)} cols={3} />
      </div>
    </div>
  </Section>
);

const CODIOOPS_STEPS = [
  { n: '01', h: 'Setup', b: 'Workflow configuration, template library, forms setup, process documentation - done by our team to match your firm exactly.' },
  { n: '02', h: 'Activation', b: 'Automations, integrations, best practices, team training - turned on and tuned for your specific operations.' },
  { n: '03', h: 'Continuous Operations', b: 'Ongoing optimization, quarterly business reviews, new workflows as your firm evolves. Not a project. An operations team.' },
];

/* CodioOps callout section */
const CodioOpsCallout = () => (
  <Section
    id="codioops-callout"
    eyebrow="Why GlobalCodio Is Different"
    lead="Software Doesn't Run a Firm."
    emphasis="Operations Do."
    intro="Every CodioCMS engagement includes CodioOps - a dedicated team that configures, optimizes, and continuously tunes the platform to match how your firm actually operates."
    headAlign="center"
  >
    <ol className="process-rail reveal" style={{ marginTop: 'var(--space-3xl)' }}>
      {CODIOOPS_STEPS.map((step, i) => (
        <li key={step.n} className={`process-rail-step reveal d${i + 1}`}>
          <div className="process-rail-marker">
            <span className="mono process-rail-num">{step.n}</span>
          </div>
          <div className="process-rail-body">
            <h3 className="display process-rail-title">{step.h}</h3>
            <p className="process-rail-text">{step.b}</p>
          </div>
        </li>
      ))}
    </ol>
    <div className="codioops-callout-foot reveal d3">
      <SmartLink href="/codioops" className="feature-card-link">
        Learn More About CodioOps
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
      </SmartLink>
    </div>
  </Section>
);

/* Five portals - one platform */
const PORTALS = [
  {
    Icon: Scale,
    animated: false,
    role: 'Attorney / Case Manager',
    tagline: 'Full case control, zero tab-switching.',
    bullets: ['Complete case state at a glance', 'AI agent output surfaced inline', 'Workflow enforcement and filing tools'],
    href: '/for-law-firms',
  },
  {
    Icon: UsersIcon,
    animated: true,
    role: 'Applicant / Beneficiary',
    tagline: 'Case status in language they understand.',
    bullets: ['Plain-English case timeline', 'Document upload to the right slots', 'Questionnaires with conditional logic'],
    href: '/platform',
  },
  {
    Icon: Building2,
    animated: false,
    role: 'HR / Employer',
    tagline: 'Workforce visibility, not a lawyer\'s UI.',
    bullets: ['Pipeline dashboards and health scores', 'Budget tracking and forecasting', 'Multi-firm performance comparison'],
    href: '/for-corporate-teams',
  },
  {
    Icon: Truck,
    animated: false,
    role: 'Service Provider',
    tagline: 'Work orders, not shared email threads.',
    bullets: ['Scoped access - only what they need', 'Deliverable submission and revision tracking', 'Deadline-aware coordination'],
    href: '/network',
  },
  {
    Icon: ShieldCheckIcon,
    animated: true,
    role: 'Firm & Platform Admin',
    tagline: 'Configure everything. No engineering tickets.',
    bullets: ['RBAC, branding, and feature rollout', 'Playbook and template management', 'Audit log and compliance controls'],
    href: '/security',
  },
];

function PortalCard({ p, i }) {
  const iconRef = useRef(null);
  const pal = ICON_PALETTE[i % ICON_PALETTE.length];
  const onMouseEnter = p.animated ? () => iconRef.current?.startAnimation() : undefined;
  const onMouseLeave = p.animated ? () => iconRef.current?.stopAnimation() : undefined;
  return (
    <SmartLink key={p.role} href={p.href} style={{ textDecoration: 'none' }}>
      <article
        className={`feature-card reveal d${(i % 4) + 1}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-md)',
          padding: 'calc(24px * var(--ui-scale))',
          height: '100%',
          cursor: 'pointer',
          transition: 'box-shadow .18s, transform .18s',
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
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
            boxShadow: pal.shadow,
            color: '#fff',
            flexShrink: 0,
          }}
        >
          {p.animated
            ? <p.Icon ref={iconRef} size={18} isAnimated={false} />
            : <p.Icon size={18} strokeWidth={1.75} />}
        </span>
        <div>
          <div
            className="mono"
            style={{
              fontSize: 'calc(9.5px * var(--ui-scale))',
              letterSpacing: '.08em',
              color: pal.color,
              fontWeight: 700,
              marginBottom: 'calc(4px * var(--ui-scale))',
              textTransform: 'uppercase',
            }}
          >
            {p.role}
          </div>
          <p
            style={{
              fontSize: 'calc(13px * var(--ui-scale))',
              fontWeight: 600,
              color: 'var(--ink)',
              lineHeight: 1.35,
              margin: 0,
            }}
          >
            {p.tagline}
          </p>
        </div>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 'calc(6px * var(--ui-scale))',
            marginTop: 'auto',
          }}
        >
          {p.bullets.map((b) => (
            <li
              key={b}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'calc(7px * var(--ui-scale))',
                fontSize: 'calc(12px * var(--ui-scale))',
                color: 'var(--ink-3)',
                lineHeight: 1.45,
              }}
            >
              <span
                style={{
                  width: 'calc(14px * var(--ui-scale))',
                  height: 'calc(14px * var(--ui-scale))',
                  borderRadius: '50%',
                  background: pal.soft,
                  color: pal.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 'calc(1px * var(--ui-scale))',
                }}
              >
                <svg viewBox="0 0 10 10" fill="none" style={{ width: 7, height: 7 }}>
                  <path d="M2 5l2 2L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {b}
            </li>
          ))}
        </ul>
      </article>
    </SmartLink>
  );
}

const FivePortals = () => (
  <Section
    id="portals"
    eyebrow="Built for Every Stakeholder"
    lead="One platform."
    emphasis="Purpose-built for each role."
    intro="Most platforms give every user the same interface with some fields hidden. GlobalCodio provides five purpose-built portals - each designed for how that person actually works, with no clutter from the roles that don't apply to them."
    headAlign="center"
  >
    <div className="portals-grid">
      {PORTALS.map((p, i) => <PortalCard key={p.role} p={p} i={i} />)}
    </div>
  </Section>
);

/* Revenue + economics highlight band */
const RevenueEconomics = () => (
  <Section id="economics" tone="sec-surface" eyebrow="The Revenue Hook"
    lead="Where the return"
    emphasis="actually comes from."
    headAlign="center">
    <div className="split-2--even" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'stretch' }}>
      <article className="feature-card feature-card--featured reveal d1" style={{ padding: 'calc(36px * var(--ui-scale))' }}>
        <h3 className="display" style={{ fontSize: 'var(--text-display-md)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 'var(--space-md)' }}>
          Your next <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>$200K</em> is already in your database.
        </h3>
        <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65 }}>
          Most firms have hundreds of dormant clients - visas expiring, green-card eligible, family petitions, citizenship.
          Codio AI Agents continuously mine your database and surface these before they expire. Most firms recover
          <strong> $50K-$300K</strong> in incremental annual revenue. Zero new marketing spend.
        </p>
        <div className="mono" style={{ marginTop: 'auto', paddingTop: 'var(--space-lg)', fontSize: 'calc(12px * var(--ui-scale))', letterSpacing: '.06em', color: 'var(--blue)' }}>
          $50K&ndash;$300K TYPICAL ANNUAL RECOVERY
        </div>
      </article>
      <article className="feature-card reveal d2" style={{ padding: 'calc(36px * var(--ui-scale))' }}>
        <h3 className="display" style={{ fontSize: 'var(--text-display-md)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 'var(--space-md)' }}>
          Less than one paralegal. <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>More productive than eight.</em>
        </h3>
        <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65 }}>
          The human equivalents of our AI Agents would run roughly <strong>$499,000/year</strong> in salaries.
          GlobalCodio delivers the same work, 24/7, for a fraction of that - plus the platform, forms, IT support, and
          managed operations.
        </p>
        <div className="mono" style={{ marginTop: 'auto', paddingTop: 'var(--space-lg)', fontSize: 'calc(12px * var(--ui-scale))', letterSpacing: '.06em', color: 'var(--blue)' }}>
          3&times; AVERAGE ROI IN YEAR ONE
        </div>
      </article>
    </div>
  </Section>
);

const AI_SAVINGS = [
  { stat: '70%', label: 'reduction in case preparation time', detail: 'AI agents handle document extraction, form prep, and questionnaire processing - work that used to take hours takes minutes.' },
  { stat: '$499K', label: 'in annual staff costs replaced', detail: 'The human equivalents of our 8 AI agents would cost nearly half a million dollars a year in salaries alone.' },
  { stat: '24/7', label: 'agents working, zero overtime', detail: 'Unlike staff, AI agents run in parallel around the clock - no sick days, no handoffs, no missed deadlines.' },
  { stat: '0', label: 'missed renewal deadlines', detail: 'The Deadline Agent monitors every case window automatically, flagging risks before they become failures.' },
];

/* Cost Savings by AI Agents */
const AiSavings = () => (
  <Section
    id="ai-savings"
    eyebrow="Cost Savings by AI Agents"
    lead="What AI agents"
    emphasis="actually save your firm."
    intro="Beyond recovering dormant revenue, Codio AI Agents replace hours of manual work every day - cutting operational costs, eliminating errors, and scaling your capacity without adding headcount."
    headAlign="center"
  >
    <div className="ai-savings-grid reveal" style={{ marginTop: 'var(--space-3xl)' }}>
      {AI_SAVINGS.map((s, i) => (
        <article key={i} className={`ai-savings-card reveal d${(i % 4) + 1}`}>
          <div className="display ai-savings-stat">{s.stat}</div>
          <p className="ai-savings-label">{s.label}</p>
          <hr className="rule-blue" />
          <p className="ai-savings-detail">{s.detail}</p>
        </article>
      ))}
    </div>
  </Section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <FounderBand />
      <PainRecognition />
      <FiveLayers />
      <CodioOpsCallout />
      <FivePortals />
      {/* <AgentOrbit /> */}
      <Certifications />
      <RevenueEconomics />
      <AiSavings />
      <Testimonial />
      {/* <OperatingSystem /> */}
      <ValueLevers />
      <Metrics />
      <CTA />
    </>
  );
}
