'use client';
import React from 'react';

import { PageHero, Section, SectionEyebrow, FeatureGrid, CtaBand } from '../../components/ui/PageKit';
import { FaqAccordion } from '../../components/ui/FaqAccordion';
import { Cpu, FileText, Bot, Network, GitMerge, ClipboardList, PenLine, CheckSquare, History, GitBranch } from 'lucide-react';
import { SettingsIcon, MessageCircleIcon, TrendingUpIcon } from '@animateicons/react/lucide';
import { ICON_PALETTE } from '../../lib/tokens';

/* What You Get */
const WHAT_YOU_GET = [
  { Icon: Cpu, n: '01', h: 'CodioCMS', b: 'Configured to your exact workflows - not a generic template you have to bend your firm around.', links: [{ href: '/platform', label: 'Explore the platform' }] },
  { Icon: FileText, n: '02', h: 'CodioForms', b: 'Online and offline immigration forms for every country you practice in, kept current as rules change.', links: [{ href: '/platform', label: 'See CodioForms' }] },
  { Icon: Bot, n: '03', h: 'Codio AI Agents', b: 'A team of AI agents handling case prep, communications, renewals, and business development.', featured: true, links: [{ href: '/ai-agents', label: 'Meet the agents' }] },
  { Icon: Network, n: '04', h: 'CodioNetwork', b: 'A curated network for global service coordination - translators, physicians, apostille, foreign counsel.', links: [{ href: '/network', label: 'See the network' }] },
  { Icon: SettingsIcon, animated: true, n: '05', h: 'GlobalCodio Services', b: 'IT support, RFP response, and ongoing management. We run your technology operation end to end.', links: [{ href: '/it-services', label: 'Explore services' }] },
  { Icon: GitMerge, n: '06', h: 'Migration support', b: 'Switching from another platform? We handle the migration - data, workflows, and your team - cleanly.', links: [{ href: '/it-services', label: 'How migration works' }] },
];

/* A day with GlobalCodio - narrative beats */
const DAY = [
  { h: 'A new client signs up.', b: 'The Intake Agent captures their information and opens the case.', agent: 'Intake Agent', Icon: ClipboardList },
  { h: 'Documents arrive.', b: 'The Document Agent extracts and translates their passport.', agent: 'Document Agent', Icon: FileText },
  { h: 'Filing begins.', b: 'The Forms Agent prepares the I-130 while the Deadline Agent monitors filing windows.', agent: 'Forms + Deadline', Icon: PenLine },
  { h: 'Questions come in.', b: "The Client Comms Agent answers them in the client's native language.", agent: 'Client Comms Agent', Icon: MessageCircleIcon },
  { h: 'Meanwhile, revenue surfaces.', b: 'The Renewal Agent flags three dormant clients whose visas expire in 60 days, and the BD Agent books two consultations for next week.', agent: 'Renewal + BD', Icon: TrendingUpIcon },
];

/* Workflow integrity - three pillars */
const INTEGRITY_ITEMS = [
  {
    Icon: CheckSquare,
    n: '01',
    h: 'Approvals that can\'t skip steps',
    b: 'Forms, support letters, and documents each have structured review workflows. A partner can comment on a specific paragraph, approve only what they\'ve reviewed, and see exactly which data source populated each field - before signing off. Approved fields can\'t be silently changed after the fact.',
  },
  {
    Icon: GitBranch,
    n: '02',
    h: 'Case status that\'s always accurate',
    b: 'Status is derived from what has actually happened in the case - not from whatever a paralegal last typed. Auto-derived status means no manual updates, no stale data in client reports, and no partner walking into a review meeting with the wrong picture.',
    featured: true,
  },
  {
    Icon: History,
    n: '03',
    h: 'Document history you can query',
    b: '"Which version of the I-130 did we file last March?" is a one-click answer. Every document carries a full version lineage with timestamps. Every form field has an audit trail. Nothing gets quietly overwritten.',
  },
];

/* Why Firms Choose Us */
/* Firm-specific outcomes. 3× ROI lives in the Home metrics band, so it's omitted
   here to avoid repeating the same headline stat. */
const REASONS = [
  ['70%', 'reduction in case preparation time'],
  ['$50K–$300K', 'recovered renewal revenue annually'],
  ['Zero', 'missed deadlines'],
  ['One', 'partner & contract - everything managed'],
];

export default function Firms() {
  return (
    <>
      <PageHero
        eyebrow="For Immigration Law Firms"
        lead="Built for Immigration Law Firms."
        emphasis="By the People Who've Built for You Before."
        sub="GlobalCodio is the complete technology operation for solo, mid-size, and large immigration law firms - designed by Umesh Vaidyamath, founder of the world's leading immigration platform. The platform you've been waiting for is here."
        primary={{ href: '/contact', label: 'Book your free tech audit' }}
        secondary={{ href: '/ai-agents', label: 'Meet the AI Agents' }}
      />

      <Section
        id="what-you-get"
        eyebrow="What You Get"
        lead="Everything your firm runs on,"
        emphasis="built and managed for you."
        intro="One partner delivers the platform, the AI workforce, the forms engine, the service network, and the people who keep it all running - all built for immigration."
        headAlign="center"
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={WHAT_YOU_GET} cols={3} />
        </div>
      </Section>

      <Section
        id="a-day"
        tone="sec-surface"
        eyebrow="A Day in the Life"
        lead="What a day looks like"
        emphasis="with GlobalCodio."
        intro="From the first client intake to filing, client questions, and renewal outreach-specialized AI agents run routine work in parallel all day, so your staff stay focused on strategy and advocacy."
        headAlign="center"
      >
        <div className="day-grid">
          <ol className="day-timeline">
            {DAY.map((step, i) => {
              const pal = ICON_PALETTE[i % ICON_PALETTE.length];
              const Icon = step.Icon;
              return (
                <li
                  key={step.h}
                  className={`day-step reveal d${(i % 4) + 1}`}
                  style={{
                    '--day-step-color': pal.color,
                    '--day-step-grad': pal.grad,
                    '--day-step-glow': pal.glow,
                    '--day-step-soft': pal.soft,
                    '--day-step-border': pal.border,
                  }}
                >
                  <div className="day-step-rail">
                    <span className="day-step-icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={1.9} />
                    </span>
                    <span className={`day-step-dot${i === DAY.length - 1 ? ' is-now' : ''}`} aria-hidden="true" />
                  </div>
                  <div className="day-step-body">
                    <h3 className="display day-step-title">{step.h}</h3>
                    <p className="day-step-text">{step.b}</p>
                    <span className="day-step-agent mono">{step.agent}</span>
                  </div>
                </li>
              );
            })}
          </ol>

          <aside className="day-payoff reveal d1">
            <SectionEyebrow>The result</SectionEyebrow>
            <div className="day-payoff-inner">
              <div className="day-payoff-copy">
                <p className="display day-payoff-title">
                  Your staff focus on strategy, advocacy, and{' '}
                  <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>the work only humans can do.</em>
                </p>
                <p className="day-payoff-text">
                  Every routine step runs automatically, in parallel, all day - so the case load grows without the
                  headcount, and nothing slips while your team does the high-value work.
                </p>
              </div>
              <div className="day-payoff-stats">
                <div className="day-payoff-stat">
                  <span className="display day-payoff-stat-num">24/7</span>
                  <span className="day-payoff-stat-label">agents working in parallel</span>
                </div>
                <div className="day-payoff-stat">
                  <span className="display day-payoff-stat-num">8</span>
                  <span className="day-payoff-stat-label">agents on every case</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        id="process-integrity"
        eyebrow="Built-In Quality Control"
        lead="The platform enforces process."
        emphasis="So your team doesn't have to."
        intro="Most case management platforms are passive record-keepers. CodioCMS enforces your process actively - steps can't be marked complete without required reviews, approvals are logged with full context, and nothing gets silently changed after a partner signs off."
        headAlign="center"
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={INTEGRITY_ITEMS} cols={3} />
        </div>

        {/* Cross-case dependencies callout */}
        <div className="reveal d1 integrity-crosscase">
          <div>
            <SectionEyebrow>Cross-Case Awareness</SectionEyebrow>
            <h3 className="display integrity-crosscase-title">
              Family cases. Derivative cases.{' '}
              <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>
                All connected.
              </em>
            </h3>
            <p className="integrity-crosscase-lead">
              Dependent and derivative cases are first-class in CodioCMS - not a note in a text field
              you have to remember to check. When a principal case changes, related cases know.
              When a deadline in one case affects another, the system surfaces it - before it becomes
              a problem.
            </p>
          </div>
          <div className="integrity-crosscase-list">
            {[
              { label: 'Principal petitions', detail: 'Linked to all derivative beneficiaries - status changes propagate automatically.' },
              { label: 'Family-based cases', detail: 'Spouse and dependent cases tracked together, with shared deadline visibility.' },
              { label: 'Corporate transfers', detail: 'Prior visa history carried forward - no re-gathering what\'s already on file.' },
            ].map((item, i) => (
              <div key={item.label} className={`integrity-crosscase-item reveal d${i + 1}`}>
                <div className="integrity-crosscase-item-label">{item.label}</div>
                <div className="integrity-crosscase-item-detail">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="why-firms-choose-us"
        eyebrow="The Numbers"
        lead="Why firms"
        emphasis="choose us."
        intro="Immigration firms on GlobalCodio report faster case preparation, recovered renewal revenue, and fewer missed deadlines-without adding headcount or stitching together another stack of point solutions. These are the outcomes partners typically see in their first year on the platform."
        headAlign="center"
        headInline
      >
        <div className="reveal m-grid metric-band" style={{ marginTop: 'var(--space-3xl)' }}>
          {REASONS.map(([n, l], i) => (
            <div key={i}>
              <div className="display type-display-metric metric-value" style={{ color: 'var(--blue)', letterSpacing: '-0.03em' }}>{n}</div>
              <div className="metric-label">{l}</div>
            </div>
          ))}
        </div>
      </Section>

      <FaqAccordion
        id="faq"
        eyebrow="Common Questions"
        lead="Questions from"
        emphasis="immigration law firms."
        items={[
          {
            q: 'What does GlobalCodio provide for immigration law firms?',
            a: 'GlobalCodio provides a complete, managed technology operation for immigration law firms: CodioCMS (case management platform), CodioForms (global forms engine), 10 Codio AI Agents, CodioOps (dedicated operations team), and CodioNetwork (global service provider network). Everything is deployed and managed by GlobalCodio - your firm never manages technology again.',
            meta: ['Full-stack operation', 'We manage everything'],
          },
          {
            q: 'Is GlobalCodio suitable for solo immigration law practices?',
            a: 'Yes. GlobalCodio serves solo, mid-size, and enterprise immigration law firms. Solo and small firms benefit most from AI agents that replace the work of multiple paralegals and the managed operations model that eliminates the need for any internal IT or technology management.',
            meta: ['Solo to enterprise', 'No IT staff needed'],
          },
          {
            q: 'How does GlobalCodio help immigration firms respond to corporate RFPs?',
            a: 'GlobalCodio provides an RFP Response service that helps immigration law firms answer complex technical, security, and compliance questions from corporate clients. Firms on GlobalCodio can credibly document SOC 2 Type II, ISO 27001, GDPR, HIPAA-ready controls, and AI governance standards - exactly what corporate procurement teams require.',
            meta: ['SOC 2 Type II', 'RFP response support'],
          },
          {
            q: 'What is the typical ROI for immigration law firms using GlobalCodio?',
            a: 'Immigration law firms using GlobalCodio typically achieve a 3× ROI in year one. This combines cost savings from 70% reduced case preparation time, eliminated staff overhead for routine work (equivalent of $499,000/year in salaries), and $50,000–$300,000 in recovered renewal revenue from dormant client reactivation.',
            meta: ['3× ROI year one', '$50K–$300K renewal revenue'],
          },
          {
            q: 'We already have case management software. Do we need to replace it?',
            a: "Not necessarily. GlobalCodio integrates with existing tools and layers the AI workforce on top - no rip-and-replace required in many cases. Where migration to CodioCMS makes sense, GlobalCodio's team manages the entire process with zero disruption to active cases.",
            meta: ['No rip-and-replace', 'Guided migration'],
          },
        ]}
      />

      <CtaBand
        lead="See what GlobalCodio looks like"
        emphasis="for your firm."
        primary={{ href: '/contact', label: 'Book your free tech audit' }}
        secondary={{ href: '/letter-from-the-founder', label: "Read the founder's letter" }}
      />
    </>
  );
}
