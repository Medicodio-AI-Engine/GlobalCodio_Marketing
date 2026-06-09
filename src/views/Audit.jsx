'use client';
import React from 'react';

import { PageHero, Section, SectionEyebrow, SplitHeading, StepList, CtaBand, SmartLink } from '../../components/ui/PageKit';
import { UserCheck } from 'lucide-react';

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="var(--blue)" />
    <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const deliverables = [
  'A clear picture of where your current technology is failing.',
  'A configuration assessment of any software your firm currently uses.',
  'An estimate of annual cost savings from consolidating onto one operation.',
  'An estimate of renewal revenue sitting unused in your client database.',
  'A recommended technology roadmap customized to your firm.',
  "A customized GlobalCodio proposal - if and when you're ready.",
];

const steps = [
  { h: 'Book a time that works for you.', b: 'Pick a slot that fits your schedule. The process starts the moment you reach out.' },
  { h: '30-minute discovery call with our team.', b: 'A focused conversation to understand your firm, your stack, and where the friction lives.' },
  { h: 'Audit report delivered within 48 hours of the call.', b: 'A written assessment of your technology operation, gaps, and opportunities.' },
  { h: 'No pressure to move forward - the audit is yours regardless.', b: 'Whatever you decide afterward, the findings are yours to keep and act on.' },
];

export default function Audit() {
  return (
    <>
      <PageHero
        eyebrow="Free Tech Audit"
        lead="Find out exactly where your firm is"
        emphasis="leaking cost and revenue."
        sub="In 30 minutes, we'll audit your firm's technology, identify gaps, and show you what a fully managed operation would look like. No commitment. No pressure. Just clarity."
        primary={{ href: '/contact#contact-form', label: 'Book your audit' }}
        secondary={{ href: '/letter-from-the-founder', label: "Read the founder's letter" }}
      />

      <Section
        id="what-youll-get"
        eyebrow="What You'll Get"
        lead="Six concrete takeaways,"
        emphasis="not a sales pitch."
        intro="Every audit produces a tangible set of findings about your firm's technology operation - the kind of clarity most firms have never had."
        headAlign="center"
      >
        <ul className="check-list check-cols reveal" style={{ marginTop: 'var(--space-3xl)' }}>
          {deliverables.map((d) => (
            <li key={d}>
              <Check />
              {d}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="how-it-works" tone="sec-surface">
        <div className="how-it-works-split reveal">
          <div className="how-it-works-head">
            <SectionEyebrow>How It Works</SectionEyebrow>
            <SplitHeading lead="Four simple steps," emphasis="from booking to report." />
          </div>
          <div className="how-it-works-steps">
            <StepList steps={steps} revealRows={true} />
          </div>
        </div>
      </Section>

      <section className="sec audit-founder-sec" id="founder-access" aria-labelledby="founder-access-heading">
        <div className="container">
          <div className="audit-founder-layout reveal">
            <div className="audit-founder-copy">
              <SectionEyebrow>Founder Access</SectionEyebrow>
              <h2 className="display audit-founder-heading" id="founder-access-heading">
                <span style={{ display: 'block' }}>Audit led by</span>
                <em className="text-grad-blue" style={{ display: 'block', fontStyle: 'italic' }}>the founder himself.</em>
              </h2>
              <p className="audit-founder-body">
                Mid-size and larger firms can request a tech audit conducted personally by Umesh Vaidyamath -
                founder of INSZoom, the immigration industry's first cloud-based case management platform,
                built and led for over two decades before its 2020 acquisition by Mitratech.
              </p>

              <ul className="audit-founder-facts">
                {[
                  { yr: '1999', text: "Co-founded INSZoom - the industry's first cloud immigration platform" },
                  { yr: '20 yrs', text: 'Leading immigration technology serving firms worldwide' },
                  { yr: '2020', text: 'INSZoom acquired by Mitratech' },
                  { yr: '2025', text: 'Founded GlobalCodio - the next chapter' },
                ].map((f, i) => (
                  <li key={f.yr} className={`reveal d${i + 1}`}>
                    <span className="mono audit-founder-fact-label">{f.yr}</span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <div className="audit-founder-cta">
                <SmartLink href="/contact#contact-form" className="btn btn-primary">
                  Request founder-led audit
                </SmartLink>
                <span className="mono audit-founder-avail">Mid-size &amp; larger firms · by request</span>
              </div>
            </div>

            <div className="audit-founder-portrait-wrap reveal d1">
              <div className="audit-founder-portrait-frame">
                <img
                  src="/assets/founder.png"
                  alt="Umesh Vaidyamath, Founder and CEO of GlobalCodio"
                  className="audit-founder-portrait-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="audit-founder-portrait-badge">
                  <UserCheck size={15} strokeWidth={1.75} aria-hidden="true" />
                  <span>Founder &amp; CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        lead="Ready to see what's"
        emphasis="possible?"
        sub="Book your free tech audit on our contact page. Our team will be in touch within one business day to schedule your 30-minute call - no cost, no commitment."
        primary={{ href: '/contact#contact-form', label: 'Book your free tech audit' }}
        secondary={{ href: '/letter-from-the-founder', label: "Read the founder's letter" }}
      />
    </>
  );
}
