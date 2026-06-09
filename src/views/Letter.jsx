'use client';
import React from 'react';

import { PageHero, Section, CtaBand } from '../../components/ui/PageKit';

export default function Letter() {
  const proseStyle = {
    fontSize: 'calc(19px * var(--ui-scale))',
    color: 'var(--text-body)',
    lineHeight: 1.8,
    marginTop: 'var(--space-xl)',
  };
  const proseLeadStyle = { ...proseStyle, marginTop: 'var(--space-md)' };

  return (
    <>
      <PageHero
        eyebrow="A Letter from the Founder"
        lead="A letter from"
        emphasis="the founder."
        sub="Umesh Vaidyamath - Founder & CEO, GlobalCodio · Founder & CEO, INSZoom (1999-2020)"
        primary={{ href: '/contact', label: 'Book your free tech audit' }}
        secondary={{ href: '/about', label: 'About GlobalCodio' }}
      />

      <Section id="letter" tone="">
        <div style={{ maxWidth: '70ch', margin: '0 auto' }}>
          <p className="reveal" style={proseLeadStyle}>
            To the immigration law firms and corporate immigration teams that have shaped my career -
          </p>

          <p className="reveal" style={proseStyle}>
            In 1999, I founded INSZoom because I saw an industry being underserved by technology.
            Immigration law was complex, document-heavy, deadline-driven, and globally distributed -
            and the tools available simply weren't built for it. So we built them.
          </p>

          <p className="reveal" style={proseStyle}>
            Over the next twenty years, we built INSZoom into the leading immigration case management
            platform in the world, serving more than 1,000 law firms across every kind of immigration
            practice. We watched solo attorneys grow into mid-size firms. We watched mid-size firms grow
            into enterprise practices. We watched corporate immigration teams scale to manage tens of
            thousands of cases. We learned what worked. And we learned, painfully sometimes, what didn't.
          </p>

          <p className="reveal" style={proseStyle}>
            When INSZoom was acquired in 2020, I stepped back. Within weeks, my phone started ringing.
            Firms I had worked with for years were reaching out - not because I had contacted them, but
            because they needed help. They were struggling with the same problems, and they remembered
            who had built the tools they relied on. The answers they gave me were remarkably consistent.
          </p>

          <p className="reveal" style={proseStyle}>
            They didn't need more software. They had software. They had too much of it. They didn't need
            another AI tool - they were drowning in AI tools they didn't know how to use. They didn't need
            another vendor - they had a list of vendors as long as their arm, and none of them coordinated.
          </p>

          <p className="reveal" style={proseStyle}>
            What they needed was someone to run their technology for them. Not sell them another tool.
            Not implement and disappear. Not promise outcomes and deliver features. They needed a partner
            who would build the right foundation, configure it to how they actually worked, run it day in
            and day out, and be accountable for the outcomes.
          </p>

          <p
            className="reveal display"
            style={{
              fontStyle: 'italic',
              fontSize: 'calc(34px * var(--ui-scale))',
              lineHeight: 1.25,
              color: 'var(--ink-1, var(--text-body))',
              margin: 'var(--space-2xl) 0',
              textAlign: 'center',
            }}
          >
            That's <span className="text-grad-blue">GlobalCodio.</span>
          </p>

          <hr className="rule-blue reveal" />

          <p className="reveal" style={proseStyle}>
            We are not a software company. We are a technology operation. We deploy proprietary case
            management software (CodioCMS), the only truly global immigration forms engine in the market
            (CodioForms), a team of specialized AI agents (Codio AI Agents), a curated network of global
            service providers (CodioNetwork), and a complete services layer that includes IT support,
            security management, RFP response, and ongoing operations.
          </p>

          <p
            className="reveal display"
            style={{
              fontStyle: 'italic',
              fontSize: 'calc(30px * var(--ui-scale))',
              lineHeight: 1.3,
              color: 'var(--ink-1, var(--text-body))',
              margin: 'var(--space-2xl) 0',
              textAlign: 'center',
            }}
          >
            We do all of it. As one team. For one fee.{' '}
            <span className="text-grad-blue">With outcomes we are willing to be measured on.</span>
          </p>

          <p className="reveal" style={proseStyle}>
            I built INSZoom for the firms of the 2000s and 2010s. GlobalCodio is what those same firms -
            and the new ones rising up after them - deserve in the 2020s and beyond. It is what I would
            have built if I were starting an immigration firm today.
          </p>

          <p className="reveal" style={proseStyle}>
            If you're an immigration law firm partner, a managing attorney, a corporate immigration lead,
            or an operations head reading this - I'd love to talk. Book a free tech audit with our team.
            Bring your hardest questions. Let us show you what a fully managed technology operation looks
            like for your practice.
          </p>

          <p className="reveal" style={proseStyle}>
            The next twenty years of immigration tech are going to be remarkable. I'm thrilled to be
            building them with you.
          </p>

          <hr className="rule-blue reveal" style={{ marginTop: 'var(--space-2xl)' }} />

          <div className="letter-signature reveal">
            <img
              src="/assets/founder.png"
              alt="Umesh Vaidyamath, Founder and CEO of GlobalCodio"
              className="letter-signature-photo"
              width={80}
              height={80}
              loading="lazy"
              decoding="async"
            />
            <div className="letter-signature-id">
              <span className="display letter-signature-name">Umesh Vaidyamath</span>
              <span className="eyebrow letter-signature-role">Founder &amp; CEO, GlobalCodio</span>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        lead="Bring your hardest questions."
        emphasis="We’ll show you what’s possible."
        primary={{ href: '/contact', label: 'Book your free tech audit' }}
        secondary={{ href: '/about', label: 'About GlobalCodio' }}
      />
    </>
  );
}
