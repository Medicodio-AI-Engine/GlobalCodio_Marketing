'use client';
import React from 'react';

import { PageHero, Section, SectionEyebrow, FeatureGrid, CtaBand } from '../../components/ui/PageKit';
import { Languages, Stethoscope, Stamp, Scale, Truck, Building2, Network as NetworkIcon, Workflow } from 'lucide-react';
import { GlobeIcon } from '@animateicons/react/lucide';

const NETWORK_ITEMS = [
  { Icon: Languages, n: '01', h: 'Certified Translators', b: 'Document translation across 40+ languages, delivered to immigration-grade standards.', stat: '40+ LANGUAGES' },
  { Icon: Stethoscope, n: '02', h: 'Immigration Physicians', b: 'USCIS and foreign-authority-approved medical exams from credentialed panel physicians.', stat: 'USCIS APPROVED' },
  { Icon: Stamp, n: '03', h: 'Apostille & Authentication', b: 'Document authentication and apostille services coordinated across countries.', stat: 'MULTI-COUNTRY' },
  { Icon: Scale, n: '04', h: 'Foreign Attorneys', b: 'In-country counsel for global immigration matters, vetted and ready to engage.', stat: 'IN-COUNTRY COUNSEL' },
  { Icon: Truck, n: '05', h: 'Specialized Couriers', b: 'Secure delivery to consulates and immigration authorities with full chain of custody.', stat: 'SECURE DELIVERY' },
  { Icon: Building2, n: '06', h: 'Consular Coordinators', b: 'Appointment scheduling and consular liaison handled by experienced coordinators.', stat: 'CONSULAR LIAISON' },
];

const PAIN_POINTS = [
  { n: '01', label: 'Translators', geo: 'One country' },
  { n: '02', label: 'Certified physicians', geo: 'Another country' },
  { n: '03', label: 'Apostille services', geo: 'A third country' },
  { n: '04', label: 'Foreign attorneys & couriers', geo: 'Multiple countries' },
];

const BENEFITS = [
  { title: 'Vetted across every discipline', body: 'Every provider in CodioNetwork is credentialed and cleared - translators, physicians, attorneys, apostille, couriers, and consular coordinators.' },
  { title: 'Standardized quality, case after case', body: 'No more variance between providers. Consistent standards across every country and service type, every time.' },
  { title: 'Integrated with CodioCMS', body: 'Surface providers, assign them to cases, and track progress without leaving your workflow. No separate tools or email chains.' },
  { title: 'One coordination layer', body: 'Replace dozens of manual handoffs with a single place to manage your entire global service operation.' },
];

export default function Network() {
  return (
    <>
      <PageHero
        eyebrow="CodioNetwork"
        lead="The Global Service Provider Network"
        emphasis="for Immigration."
        sub="A curated B2B network of certified translators, physicians, apostille services, foreign attorneys, courier services, and consular coordinators - accessible directly through CodioCMS."
        primary={{ href: '/contact', label: 'Request a walkthrough' }}
        secondary={{ href: '/platform', label: 'See the platform' }}
      />

      {/* ── The Coordination Problem ── */}
      <section className="sec network-problem-sec" id="why-network">
        <div className="container">

          {/* Headline left, pull quote right */}
          <div className="network-problem-head reveal">
            <SectionEyebrow>The Coordination Problem</SectionEyebrow>
            <div className="network-problem-head-row">
              <h2 className="display network-problem-title">
                <span>Immigration is global.</span>
                <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>Your providers should be too.</em>
              </h2>
              <div className="network-solution-pull reveal d1">
                <p className="display network-solution-quote">
                  CodioNetwork brings the entire global immigration service ecosystem into{' '}
                  <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>one place.</em>
                </p>
              </div>
            </div>
          </div>

          {/* Pain left, benefit cards right */}
          <div className="network-problem-body">
            <div className="network-pain reveal d1">
              <p className="network-pain-lead">
                Every immigration case is a coordination problem spanning multiple countries, jurisdictions, and service providers.
              </p>

              <ol className="network-pain-list">
                {PAIN_POINTS.map((p, i) => (
                  <li key={p.n} className={`network-pain-item reveal d${i + 1}`}>
                    <span className="mono network-pain-n">{p.n}</span>
                    <div className="network-pain-item-body">
                      <span className="network-pain-item-label">{p.label}</span>
                      <span className="mono network-pain-item-geo">{p.geo}</span>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="network-pain-verdict">
                <p>
                  Most firms manage all of this manually - losing time, racking up costs, and risking compliance failures.
                </p>
              </div>
            </div>

            <ul className="network-benefits-list">
              {BENEFITS.map((b, i) => (
                <li key={i} className={`network-benefit-item reveal d${(i % 4) + 1}`}>
                  <div className="network-benefit-dot" aria-hidden="true" />
                  <div>
                    <p className="network-benefit-title">{b.title}</p>
                    <p className="network-benefit-body">{b.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── The Ecosystem ── */}
      <Section
        id="whats-in-network"
        tone="sec-surface"
        eyebrow="The Ecosystem"
        lead="What's in"
        emphasis="the Network."
        intro="A curated roster of certified, vetted providers spanning every step of a global immigration case - ready to engage from within your workflow."
        headAlign="center"
        headInline
      >
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid items={NETWORK_ITEMS} cols={3} />
        </div>
      </Section>

      {/* ── Built into your platform ── */}
      <Section
        id="built-in"
        tone="sec-dark"
        eyebrow="Inside Your Workflow"
        lead="Built into your platform."
        emphasis="Available to your firm."
        intro="CodioNetwork is accessible directly through CodioCMS for GlobalCodio clients. Your team can identify providers, coordinate services, and track progress - all within the same workflow as your case management."
        headAlign="center"
      >
        <div style={{ marginTop: 'var(--space-2xl)' }}>
          <FeatureGrid
            cols={3}
            items={[
              { Icon: GlobeIcon, animated: true, n: '01', h: 'Identify Providers', b: 'Surface the right vetted providers for each country and service type, in seconds.' },
              { Icon: Workflow, animated: false, n: '02', h: 'Coordinate Services', b: 'Engage and manage providers without leaving CodioCMS - no separate tools or email chains.' },
              { Icon: NetworkIcon, animated: false, n: '03', h: 'Track Progress', b: 'Monitor every external service against the case, with full visibility into status and timing.' },
            ]}
          />
        </div>
        <p className="reveal d1 mono" style={{ marginTop: 'var(--space-2xl)', textAlign: 'center', fontSize: 'calc(12px * var(--ui-scale))', letterSpacing: '.06em', color: 'var(--ink-3)' }}>
          DETAILED NETWORK FEATURES AND PRICING AVAILABLE IN CLIENT MEETINGS.
        </p>
      </Section>

      <CtaBand
        lead="Bring your global ecosystem"
        emphasis="into one platform."
        primary={{ href: '/contact', label: 'Request a walkthrough' }}
        secondary={{ href: 'mailto:info@globalcodio.ai', label: 'Talk to our team' }}
      />
    </>
  );
}
