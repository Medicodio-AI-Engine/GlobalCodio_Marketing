'use client';
import React, { useState } from 'react';

import { PageHero, Section } from '../../components/ui/PageKit';
import { PLATFORM_TERMS_URL } from '../../lib/navigation';

const LAST_UPDATED = 'June 29, 2026';

const TOC = [
  { id: 'acceptance',    label: '1. Acceptance of Terms' },
  { id: 'use',           label: '2. Use of the Website' },
  { id: 'ip',            label: '3. Intellectual Property' },
  { id: 'privacy',       label: '4. Privacy' },
  { id: 'disclaimers',   label: '5. Disclaimers & No Warranties' },
  { id: 'liability',     label: '6. Limitation of Liability' },
  { id: 'indemnity',     label: '7. Indemnification' },
  { id: 'arbitration',   label: '8. Dispute Resolution & Arbitration' },
  { id: 'governing',     label: '9. Governing Law & Venue' },
  { id: 'electronic',    label: '10. Electronic Communications' },
  { id: 'changes',       label: '11. Changes to These Terms' },
  { id: 'notices',       label: '12. Notices' },
  { id: 'contact',       label: '13. Contact Us' },
];

export default function Terms() {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <div className="page-legal-doc">
      <PageHero
        eyebrow="Legal"
        lead="Website Terms of "
        emphasis="Use."
        headInline
        sub={`Effective date: ${LAST_UPDATED}. These Terms govern your access to and use of the public GlobalCodio website at www.globalcodio.ai. They apply to the website only - not to our products or platform.`}
      />

      <Section id="terms-content" style={{ paddingTop: 'var(--space-2xl)' }}>
        <div className="legal-layout">

          {/* Sticky TOC sidebar */}
          <nav
            aria-label="Table of contents"
            className="legal-toc"
          >
            <div style={{ fontSize: 'calc(10px * var(--ui-scale))', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 'var(--space-sm)', fontFamily: 'var(--mono)' }}>
              Contents
            </div>
            {TOC.map((item) => {
              const active = hoveredSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  style={{
                    fontSize: '14px',
                    color: active ? 'var(--blue)' : 'var(--ink-3)',
                    textDecoration: 'none',
                    padding: 'calc(5px * var(--ui-scale)) 0',
                    borderLeft: `2px solid ${active ? 'var(--blue)' : 'transparent'}`,
                    paddingLeft: 'calc(10px * var(--ui-scale))',
                    transition: 'color .15s, border-color .15s',
                    lineHeight: 1.4,
                    fontWeight: active ? 600 : 400,
                  }}
                  onMouseEnter={() => setHoveredSection(item.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Terms body */}
          <article style={{ minWidth: 0 }}>

            <div className="legal-callout" role="note">
              <p>
                <strong>Using the GlobalCodio platform?</strong> These terms cover the public website only. Your account and case data are governed by the{' '}
                <a href={PLATFORM_TERMS_URL} target="_blank" rel="noopener noreferrer">Platform Terms of Service</a>.
              </p>
            </div>

            {/* 1. Acceptance */}
            <div id="acceptance">
              <h2 className="legal-section-title">1. Acceptance of Terms</h2>
              <p className="legal-prose">
                These Terms of Use ("Terms") govern your access to and use of the public GlobalCodio website at <strong>www.globalcodio.ai</strong> (the "Website"). The Website is operated by Medicodio Inc. ("Company," "GlobalCodio," "we," "our," or "us"), a Delaware corporation. These Terms apply to the Website only and do <strong>not</strong> govern our products, platform, or any account-based services, which are covered by separate terms provided with those services.
              </p>
              <p className="legal-prose">
                By accessing or using the Website, you agree to be bound by these Terms and by our <a href="/privacy-policy" style={{ color: 'var(--blue)' }}>Privacy Policy</a>, which is incorporated by reference. If you do not agree, please do not use the Website.
              </p>
            </div>

            {/* 2. Use of the Website */}
            <div id="use">
              <h2 className="legal-section-title">2. Use of the Website</h2>
              <p className="legal-prose">
                The Website is provided for general informational and business purposes, such as learning about our products and services and contacting us. You agree to use the Website only for lawful purposes and not to:
              </p>
              <ul className="legal-list">
                <li>Use the Website in violation of any applicable law or regulation.</li>
                <li>Upload or transmit malware, or interfere with or disrupt the integrity or performance of the Website.</li>
                <li>Attempt to gain unauthorized access to the Website or its related systems.</li>
                <li>Use the Website or its forms to send unlawful, infringing, deceptive, or unsolicited communications.</li>
                <li>Scrape, harvest, or collect data from the Website, or use it to build a competing product, without our authorization.</li>
              </ul>
            </div>

            {/* 3. Intellectual Property */}
            <div id="ip">
              <h2 className="legal-section-title">3. Intellectual Property</h2>
              <p className="legal-prose">
                The Website and its content - including software, text, designs, graphics, logos, and trademarks, but excluding any information you submit to us - are owned by or licensed to Medicodio Inc. This content is protected by intellectual property laws.
              </p>
              <p className="legal-prose">
                We grant you a limited, non-exclusive, non-transferable, revocable license to access and view the Website for your personal or internal business purposes in accordance with these Terms.
              </p>
              <p className="legal-prose">
                You may not copy, modify, reverse engineer, resell, or create derivative works from the Website or its content except as expressly permitted. We respect intellectual property rights and will respond to notices of alleged infringement that comply with the U.S. Digital Millennium Copyright Act (DMCA). Send DMCA notices to <a href="mailto:info@globalcodio.ai" style={{ color: 'var(--blue)' }}>info@globalcodio.ai</a>.
              </p>
            </div>

            {/* 4. Privacy */}
            <div id="privacy">
              <h2 className="legal-section-title">4. Privacy</h2>
              <p className="legal-prose">
                Our collection and use of personal information through the Website is described in our <a href="/privacy-policy" style={{ color: 'var(--blue)' }}>Privacy Policy</a>. By using the Website, you acknowledge that information you provide or that is collected automatically will be handled as described there.
              </p>
            </div>

            {/* 5. Disclaimers */}
            <div id="disclaimers">
              <h2 className="legal-section-title">5. Disclaimers & No Warranties</h2>
              <p className="legal-prose">
                <strong>The Website and its content are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind, whether express, implied, or statutory.</strong> This includes the implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the Website will be uninterrupted, error-free, or secure, or that its content is accurate, current, or complete.
              </p>
              <p className="legal-prose">
                Content on the Website is provided for general information only and does not constitute legal advice. Nothing on the Website creates an attorney-client relationship.
              </p>
            </div>

            {/* 6. Limitation of Liability */}
            <div id="liability">
              <h2 className="legal-section-title">6. Limitation of Liability</h2>
              <p className="legal-prose">
                <strong>To the maximum extent permitted by law, Medicodio Inc. and its affiliates, officers, employees, and agents will not be liable for indirect, incidental, special, consequential, or punitive damages.</strong> This includes any loss of profits, revenue, data, or goodwill related to your use of the Website.
              </p>
              <p className="legal-prose">
                <strong>Our total aggregate liability arising out of or related to these Terms or the Website will not exceed one hundred U.S. dollars ($100).</strong> Some jurisdictions do not allow certain limitations, so some of the above may not apply to you.
              </p>
            </div>

            {/* 7. Indemnification */}
            <div id="indemnity">
              <h2 className="legal-section-title">7. Indemnification</h2>
              <p className="legal-prose">
                You agree to defend, indemnify, and hold harmless Medicodio Inc. and its affiliates, officers, directors, employees, and agents from claims, liabilities, damages, losses, and expenses (including reasonable attorneys&rsquo; fees) arising from:
              </p>
              <ul className="legal-list">
                <li>your use of the Website;</li>
                <li>your violation of these Terms or applicable law; or</li>
                <li>your violation of the rights of any third party.</li>
              </ul>
            </div>

            {/* 8. Arbitration */}
            <div id="arbitration">
              <h2 className="legal-section-title">8. Dispute Resolution & Arbitration</h2>
              <h3 className="legal-subsection-title">Informal Resolution First</h3>
              <p className="legal-prose">
                Before filing a claim, you agree to try to resolve the dispute informally by contacting us at <a href="mailto:info@globalcodio.ai" style={{ color: 'var(--blue)' }}>info@globalcodio.ai</a>. We will attempt to resolve the dispute by email. If the dispute is not resolved within fifteen (15) days, either party may bring a formal proceeding.
              </p>
              <h3 className="legal-subsection-title">Binding Arbitration</h3>
              <p className="legal-prose">
                You and the Company agree to resolve any disputes arising out of or relating to these Terms or the Website through final and binding arbitration. The only exceptions: either party may bring an individual claim in small-claims court, or seek injunctive relief for infringement or misuse of intellectual property. Disputes will be resolved on an individual basis; class actions and class-wide arbitration are not permitted.
              </p>
              <h3 className="legal-subsection-title">30-Day Opt-Out</h3>
              <p className="legal-prose">
                You may decline this agreement to arbitrate by emailing <a href="mailto:info@globalcodio.ai" style={{ color: 'var(--blue)' }}>info@globalcodio.ai</a> within thirty (30) days of first accepting these Terms. Opting out of arbitration will not affect any other part of these Terms.
              </p>
            </div>

            {/* 9. Governing Law */}
            <div id="governing">
              <h2 className="legal-section-title">9. Governing Law & Venue</h2>
              <p className="legal-prose">
                These Terms and the relationship between you and the Company are governed by the laws of the State of California, without regard to its conflict-of-law provisions. Subject to the arbitration provisions above, you and the Company agree that any judicial proceeding will be brought exclusively in the state or federal courts located in San Francisco, California. You consent to the personal jurisdiction of those courts.
              </p>
            </div>

            {/* 10. Electronic Communications */}
            <div id="electronic">
              <h2 className="legal-section-title">10. Electronic Communications</h2>
              <p className="legal-prose">
                By using the Website or contacting us electronically, you consent to receive communications from us electronically, including by email. You agree that all agreements, notices, disclosures, and other communications we provide electronically satisfy any legal requirement that such communications be in writing.
              </p>
            </div>

            {/* 11. Changes */}
            <div id="changes">
              <h2 className="legal-section-title">11. Changes to These Terms</h2>
              <p className="legal-prose">
                We may update these Terms from time to time. When we make material changes, we will update the "Effective date" above and, where appropriate, post a notice on the Website. Your continued use of the Website after the updated Terms take effect constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* 12. Notices */}
            <div id="notices">
              <h2 className="legal-section-title">12. Notices</h2>
              <p className="legal-prose">
                Legal notices to the Company must be sent to <a href="mailto:info@globalcodio.ai" style={{ color: 'var(--blue)' }}>info@globalcodio.ai</a> and, where written notice is required, to our registered office:
              </p>
              <div style={{
                background: 'var(--surface)',
                borderRadius: 'calc(14px * var(--ui-scale))',
                padding: 'calc(28px * var(--ui-scale))',
                marginTop: 'var(--space-lg)',
                display: 'grid',
                gap: 'calc(8px * var(--ui-scale))',
                fontSize: 'calc(15px * var(--ui-scale))',
                color: 'var(--ink-2)',
                lineHeight: 1.7,
              }}>
                <div><strong>Medicodio Inc.</strong> (operator of GlobalCodio)</div>
                <div>16192 Coastal Hwy, Lewes, DE 19958, USA</div>
              </div>
            </div>

            {/* 13. Contact */}
            <div id="contact">
              <h2 className="legal-section-title">13. Contact Us</h2>
              <p className="legal-prose">
                Questions about these Terms? Email us at <a href="mailto:info@globalcodio.ai" style={{ color: 'var(--blue)' }}>info@globalcodio.ai</a>.
              </p>
            </div>

          </article>
        </div>
      </Section>
    </div>
  );
}
