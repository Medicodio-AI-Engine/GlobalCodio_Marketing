'use client';

import { PageHero, Section, SectionEyebrow, FeatureGrid, CtaBand, SmartLink, SplitHeading } from '../../components/ui/PageKit';
import { Cpu, Workflow, Bot } from 'lucide-react';
import { SettingsIcon, GlobeIcon, TrendingUpIcon } from '@animateicons/react/lucide';

/* Verified history: Umesh Vaidyamath came to the US on an H-1B as an engineer;
   launched INSZoom (co-founded with brother Raj) from home in 1999 as the
   immigration industry's first cloud platform; grew to 125+ staff across
   Pleasanton, CA and Bangalore; 2,000+ forms updated within 24-48h; acquired
   by Mitratech in Nov 2020. */

const TIMELINE = [
  { year: '1999', title: 'INSZoom founded', body: "Umesh Vaidyamath, an engineer who came to the United States on an H-1B visa, co-founds INSZoom-the immigration industry's first cloud-based case management platform-bootstrapped from his home." },
  { year: '2003', title: 'Profitable within three years', body: 'INSZoom reaches profitability early-a strong indicator of product–market fit in a specialized, highly regulated market.' },
  { year: '2010s', title: 'Industry-scale operations', body: 'The company grows to 125+ professionals across Pleasanton, California and Bangalore, India, with 2,000+ immigration forms maintained within 24–48 hours of each regulatory release.' },
  { year: '2020', title: 'Acquired by Mitratech', body: 'After twenty years as the leading independent immigration case management platform, INSZoom is acquired by Mitratech. The founder then works directly with firms to define requirements for what comes next.' },
  { year: '2025', title: 'GlobalCodio launched', body: 'That work pointed to a fully managed, AI-powered technology operation-not another standalone product. GlobalCodio is the next chapter in that lineage.' },
];

const STATS = [
  ['20 yrs', 'building immigration tech'],
  ['1,000+', 'law firms served'],
  ['2,000+', 'forms, updated in 24–48h'],
  ['2', 'continents - US & India'],
];

const DIFFERENCE = [
  { Icon: Cpu,        animated: false, h: 'Purpose-built for immigration',        b: 'Not adapted legal tech - engineered from the ground up for immigration workflows.' },
  { Icon: Workflow,   animated: false, h: 'End-to-end managed',                   b: 'Not self-serve software - a complete, fully managed technology operation.' },
  { Icon: SettingsIcon,   animated: true,  h: 'CodioOps included with every engagement', b: 'A dedicated operations team configuring and optimizing your platform - not software you figure out yourself.', links: [{ href: '/codioops', label: 'Learn about CodioOps' }] },
  { Icon: Bot,            animated: false, h: 'AI-native architecture',               b: 'Designed for an AI workforce from day one, not bolted on after the fact.' },
  { Icon: GlobeIcon,      animated: true,  h: 'Global from day one',                  b: 'Built for worldwide immigration practice - not US-only.' },
  { Icon: TrendingUpIcon, animated: true,  h: 'Outcome-aligned pricing',              b: 'We earn when you earn. Pricing tied to results, not seats.' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About GlobalCodio"
        lead="Built by the people who"
        emphasis="built immigration tech."
        sub="GlobalCodio is the next chapter in immigration technology - designed by Umesh Vaidyamath, founder of the leading immigration case management platform, drawing on two decades of building the platform that immigration firms worldwide ran on."
        primary={{ href: '/letter-from-the-founder', label: "Read the founder's letter" }}
        secondary={{ href: '/contact', label: 'Book a tech audit' }}
      />

      {/* Stat band - full-width proof strip right under the hero */}
      <section className="sec about-statband-sec">
        <div className="container">
          <div className="m-grid metric-band">
            {STATS.map(([n, l], i) => (
              <div key={l} className={`reveal d${i + 1}`}>
                <div className="display type-display-metric metric-value" style={{ color: 'var(--blue)', letterSpacing: '-0.03em' }}>{n}</div>
                <div className="metric-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin - narrative head (left) + timeline (right) */}
      <Section id="history" tone="sec-surface">
        <div className="about-story">
          <div className="about-story-head reveal">
            <SectionEyebrow>Our History</SectionEyebrow>
            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <SplitHeading
                lead="Two decades defining"
                emphasis="immigration technology."
                className="type-display-lg about-story-title"
              />
            </div>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.65 }}>
              GlobalCodio builds on a sustained record of innovation that began with INSZoom. For twenty years, our
              leadership worked inside the operational realities of immigration practice-experience that informs every
              product and service decision we make today.
            </p>
            <SmartLink href="/letter-from-the-founder" className="feature-card-link" style={{ marginTop: 'var(--space-xl)', color: 'var(--blue)' }}>
              Read the founder&apos;s letter
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </SmartLink>
          </div>

          <ol className="about-timeline reveal d1">
            {TIMELINE.map((t, i) => (
              <li key={t.year} className="about-tl-item">
                <span className="mono about-tl-year">{t.year}</span>
                <div className="about-tl-rail" aria-hidden="true">
                  <span className={`about-tl-node${i === TIMELINE.length - 1 ? ' is-now' : ''}`} />
                </div>
                <div className="about-tl-body">
                  <h3 className="display about-tl-title">{t.title}</h3>
                  <p className="about-tl-text">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Thesis - full-width editorial pull-quote band */}
      <section className="sec about-thesis-sec">
        <div className="container">
          <div className="about-thesis reveal">
            <SectionEyebrow>The Thesis</SectionEyebrow>
            <div className="about-thesis-row">
              <p className="display about-thesis-quote">
                For twenty years we watched firms buy software and never get the value. The software was never the
                problem - <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>the missing operation around it was.</em>
              </p>
              <div className="about-thesis-grid">
                <div className="about-thesis-col reveal d1">
                  <span className="mono about-thesis-tag">What we kept seeing</span>
                  <p>Platforms went unconfigured. Workflows stayed manual. Tribal knowledge walked out the door with every staff departure.</p>
                </div>
                <div className="about-thesis-col reveal d2">
                  <span className="mono about-thesis-tag">What we built instead</span>
                  <p>Not software you have to figure out. A complete operation - platform, AI agents, network, and the team running all of it for you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <Section id="difference" eyebrow="The Difference" lead="What makes" emphasis="us different ?" headAlign="center" headInline>
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <FeatureGrid cols={3} items={DIFFERENCE} />
        </div>
      </Section>

      {/* Leadership - founder profile + editorial quote */}
      <section className="sec sec-surface about-founder-sec" aria-labelledby="about-founder-heading">
        <div className="container">
          <div className="about-founder reveal">
            <aside className="about-founder-aside" aria-label="Founder profile">
              <div className="about-founder-header">
                <div className="about-founder-portrait">
                  <img
                    src="/assets/founder.png"
                    alt="Umesh Vaidyamath, Founder and CEO"
                    width={72}
                    height={72}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="about-founder-id">
                  <h3 className="display about-founder-name" id="about-founder-heading">Umesh Vaidyamath</h3>
                  <p className="eyebrow about-founder-role">Founder &amp; CEO</p>
                </div>
              </div>
              <ul className="about-founder-facts">
                <li><span className="mono">1999</span> Co-founded INSZoom-the industry&apos;s first cloud immigration platform</li>
                <li><span className="mono">125+</span> Professionals across Pleasanton, CA &amp; Bangalore, India</li>
                <li><span className="mono">Nov &apos;20</span> INSZoom acquired by Mitratech</li>
                <li><span className="mono">2025</span> Founded GlobalCodio</li>
              </ul>
            </aside>
            <div className="about-founder-quote reveal d1">
              <SectionEyebrow>Leadership</SectionEyebrow>
              <p className="display about-founder-statement">
                Few have seen immigration practice from the inside as long, or as widely, as the team that built the
                platform firms ran on for{' '}
                <em className="text-grad-blue" style={{ fontStyle: 'italic' }}>two decades.</em>
              </p>
              <p className="about-founder-body">
                Umesh Vaidyamath came to the United States on an H-1B visa as a software engineer and later
                co-founded INSZoom in 1999, pioneering the immigration industry&apos;s first cloud-based case management
                platform. He led the company for more than twenty years-building teams in Pleasanton, California and
                Bangalore, India and serving corporations, law firms, and nonprofits worldwide-until Mitratech acquired
                INSZoom in November 2020. That operating experience now shapes GlobalCodio: a fully managed,
                AI-powered technology operation for modern immigration practice.
              </p>
              <SmartLink href="/letter-from-the-founder" className="feature-card-link about-founder-link" style={{ color: 'var(--blue)' }}>
                Read the letter from the founder
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </SmartLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        lead="Read the letter"
        emphasis="from the founder."
        sub="Twenty years of lessons, in his own words - and what comes next for immigration practice."
        primary={{ href: '/letter-from-the-founder', label: 'Read the letter' }}
        secondary={{ href: '/contact', label: 'Book a tech audit' }}
      />
    </>
  );
}
