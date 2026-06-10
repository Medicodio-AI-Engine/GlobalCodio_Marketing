'use client';
import React, { useState } from 'react';

import { PageHero, Section } from '../../components/ui/PageKit';

const LAST_UPDATED = 'June 10, 2026';

const TOC = [
  { id: 'acceptance',    label: '1. Acceptance of Terms' },
  { id: 'accounts',      label: '2. Accounts' },
  { id: 'google',        label: '3. Links to Third-Party Accounts' },
  { id: 'ip',            label: '4. Intellectual Property' },
  { id: 'data',          label: '5. Data & Privacy' },
  { id: 'acceptable',    label: '6. Acceptable Use' },
  { id: 'disclaimers',   label: '7. Disclaimers & No Warranties' },
  { id: 'liability',     label: '8. Limitation of Liability' },
  { id: 'indemnity',     label: '9. Indemnification' },
  { id: 'arbitration',   label: '10. Dispute Resolution & Arbitration' },
  { id: 'governing',     label: '11. Governing Law & Venue' },
  { id: 'electronic',    label: '12. Electronic Communications' },
  { id: 'changes',       label: '13. Changes to These Terms' },
  { id: 'notices',       label: '14. Notices' },
  { id: 'contact',       label: '15. Contact Us' },
];

export default function Terms() {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="Legal"
        lead="Terms of "
        emphasis="Service."
        headInline
        sub={`Effective date: ${LAST_UPDATED}. These Terms govern your access to and use of GlobalCodio, a platform operated by Medicodio Inc.`}
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
                    fontSize: 'calc(13px * var(--ui-scale))',
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

            {/* 1. Acceptance */}
            <div id="acceptance">
              <h2 className="legal-section-title">1. Acceptance of Terms</h2>
              <p className="legal-prose">
                GlobalCodio is a platform operated by Medicodio Inc. ("Company," "GlobalCodio," "we," "our," or "us"), a Delaware corporation. These Terms of Service ("Terms") govern your access to and use of our website at <strong>www.globalcodio.ai</strong>, our platform (CodioCMS, CodioForms, Codio AI Agents, CodioNetwork), and related services (collectively, the "Services").
              </p>
              <p className="legal-prose">
                By accessing or using the Services, or by clicking to accept these Terms, you agree to be bound by these Terms and by our <a href="/privacy-policy" style={{ color: 'var(--blue)' }}>Privacy Policy</a>, which is incorporated by reference. If you are entering into these Terms on behalf of an organization, you represent that you have authority to bind that organization. If you do not agree, do not use the Services.
              </p>
            </div>

            {/* 2. Accounts */}
            <div id="accounts">
              <h2 className="legal-section-title">2. Accounts</h2>
              <p className="legal-prose">
                To use certain features, you must create an account. You agree to provide accurate, current, and complete information and to keep it up to date. You are responsible for safeguarding your credentials and for all activity that occurs under your account.
              </p>
              <ul className="legal-list">
                <li>You must be at least 18 years old and capable of forming a binding contract.</li>
                <li>You are responsible for maintaining the confidentiality of your password and account.</li>
                <li>Notify us promptly at <a href="mailto:info@globalcodio.ai" style={{ color: 'var(--blue)' }}>info@globalcodio.ai</a> of any unauthorized use of your account or any other breach of security.</li>
                <li>We may suspend or terminate accounts that violate these Terms or that we reasonably believe present a security or legal risk.</li>
              </ul>
            </div>

            {/* 3. Third-party / Google */}
            <div id="google">
              <h2 className="legal-section-title">3. Links to Third-Party Accounts</h2>
              <p className="legal-prose">
                The Services let you link third-party accounts, including your Google account, to enable features such as signing in with Google and sending case-status and notification emails from your own Gmail mailbox. By linking a third-party account, you authorize us to access and use information from that account as described in our <a href="/privacy-policy" style={{ color: 'var(--blue)' }}>Privacy Policy</a>.
              </p>
              <p className="legal-prose">
                Your use of Google services through GlobalCodio is also subject to Google&rsquo;s applicable terms and policies. GlobalCodio&rsquo;s use and transfer of information received from Google APIs to any other app will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)' }}>Google API Services User Data Policy</a>, including the Limited Use requirements. You may unlink your Google account at any time through your account settings or by contacting us; doing so may disable features that depend on it.
              </p>
              <p className="legal-prose">
                We are not responsible for the content, policies, or practices of any third-party service, and your dealings with third parties are solely between you and that third party.
              </p>
            </div>

            {/* 4. IP */}
            <div id="ip">
              <h2 className="legal-section-title">4. Intellectual Property</h2>
              <p className="legal-prose">
                The Services, including all software, text, designs, graphics, logos, and other content we provide (excluding your data), are owned by or licensed to Medicodio Inc. and are protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your internal business purposes in accordance with these Terms.
              </p>
              <p className="legal-prose">
                You retain all rights in the data and content you submit to the Services ("Your Content"). You grant us a limited license to host, process, and transmit Your Content solely to provide and support the Services. You may not copy, modify, reverse engineer, resell, or create derivative works from the Services except as expressly permitted.
              </p>
              <p className="legal-prose">
                We respect intellectual property rights and will respond to notices of alleged infringement that comply with the U.S. Digital Millennium Copyright Act (DMCA). Send DMCA notices to <a href="mailto:info@globalcodio.ai" style={{ color: 'var(--blue)' }}>info@globalcodio.ai</a>.
              </p>
            </div>

            {/* 5. Data & Privacy */}
            <div id="data">
              <h2 className="legal-section-title">5. Data & Privacy</h2>
              <p className="legal-prose">
                Our collection and use of personal information is described in our <a href="/privacy-policy" style={{ color: 'var(--blue)' }}>Privacy Policy</a>. We implement reasonable technical and organizational measures designed to protect data processed through the Services, including encryption in transit and at rest and role-based access controls. You are responsible for ensuring that your use of the Services, and the data you submit, complies with all laws applicable to you and your clients.
              </p>
            </div>

            {/* 6. Acceptable Use */}
            <div id="acceptable">
              <h2 className="legal-section-title">6. Acceptable Use</h2>
              <p className="legal-prose">You agree not to:</p>
              <ul className="legal-list">
                <li>Use the Services in violation of any applicable law or regulation.</li>
                <li>Upload or transmit malware, or interfere with or disrupt the integrity or performance of the Services.</li>
                <li>Attempt to gain unauthorized access to the Services or related systems.</li>
                <li>Use the Services to send unlawful, infringing, deceptive, or unsolicited communications.</li>
                <li>Use the Services to build a competing product or to scrape or harvest data without authorization.</li>
              </ul>
            </div>

            {/* 7. Disclaimers */}
            <div id="disclaimers">
              <h2 className="legal-section-title">7. Disclaimers & No Warranties</h2>
              <p className="legal-prose">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. We do not warrant that the Services will be uninterrupted, error-free, or secure, or that defects will be corrected.
              </p>
              <p className="legal-prose">
                GlobalCodio is a technology platform and does not provide legal advice. Nothing in the Services constitutes legal advice or creates an attorney-client relationship. You are solely responsible for the legal sufficiency of any case work, filing, or communication produced using the Services.
              </p>
            </div>

            {/* 8. Limitation of Liability */}
            <div id="liability">
              <h2 className="legal-section-title">8. Limitation of Liability</h2>
              <p className="legal-prose">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL MEDICODIO INC. OR ITS AFFILIATES, OFFICERS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUES, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES.
              </p>
              <p className="legal-prose">
                OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID US FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100). Some jurisdictions do not allow certain limitations, so some of the above may not apply to you.
              </p>
            </div>

            {/* 9. Indemnification */}
            <div id="indemnity">
              <h2 className="legal-section-title">9. Indemnification</h2>
              <p className="legal-prose">
                You agree to defend, indemnify, and hold harmless Medicodio Inc. and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys&rsquo; fees) arising out of or related to: (a) your use of the Services; (b) Your Content; (c) your violation of these Terms or applicable law; or (d) your violation of the rights of any third party.
              </p>
            </div>

            {/* 10. Arbitration */}
            <div id="arbitration">
              <h2 className="legal-section-title">10. Dispute Resolution & Arbitration</h2>
              <h3 className="legal-subsection-title">Informal Resolution First</h3>
              <p className="legal-prose">
                Before filing a claim, you agree to try to resolve the dispute informally by contacting us at <a href="mailto:info@globalcodio.ai" style={{ color: 'var(--blue)' }}>info@globalcodio.ai</a>. We will attempt to resolve the dispute by email. If the dispute is not resolved within fifteen (15) days, either party may bring a formal proceeding.
              </p>
              <h3 className="legal-subsection-title">Binding Arbitration</h3>
              <p className="legal-prose">
                You and the Company agree to resolve any disputes arising out of or relating to these Terms or the Services through final and binding arbitration, except that either party may bring an individual claim in small-claims court or seek injunctive relief for infringement or misuse of intellectual property. Disputes will be resolved on an individual basis; class actions and class-wide arbitration are not permitted.
              </p>
              <h3 className="legal-subsection-title">30-Day Opt-Out</h3>
              <p className="legal-prose">
                You may decline this agreement to arbitrate by emailing <a href="mailto:info@globalcodio.ai" style={{ color: 'var(--blue)' }}>info@globalcodio.ai</a> within thirty (30) days of first accepting these Terms. Opting out of arbitration will not affect any other part of these Terms.
              </p>
            </div>

            {/* 11. Governing Law */}
            <div id="governing">
              <h2 className="legal-section-title">11. Governing Law & Venue</h2>
              <p className="legal-prose">
                These Terms and the relationship between you and the Company are governed by the laws of the State of California, without regard to its conflict-of-law provisions. Subject to the arbitration provisions above, you and the Company agree that any judicial proceeding will be brought exclusively in the state or federal courts located in San Francisco, California, and you consent to the personal jurisdiction of those courts.
              </p>
            </div>

            {/* 12. Electronic Communications */}
            <div id="electronic">
              <h2 className="legal-section-title">12. Electronic Communications</h2>
              <p className="legal-prose">
                By using the Services or contacting us electronically, you consent to receive communications from us electronically, including by email and through the Services. You agree that all agreements, notices, disclosures, and other communications we provide electronically satisfy any legal requirement that such communications be in writing.
              </p>
            </div>

            {/* 13. Changes */}
            <div id="changes">
              <h2 className="legal-section-title">13. Changes to These Terms</h2>
              <p className="legal-prose">
                We may update these Terms from time to time. When we make material changes, we will update the "Effective date" above and, where appropriate, notify registered users. Your continued use of the Services after the updated Terms take effect constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* 14. Notices */}
            <div id="notices">
              <h2 className="legal-section-title">14. Notices</h2>
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

            {/* 15. Contact */}
            <div id="contact">
              <h2 className="legal-section-title">15. Contact Us</h2>
              <p className="legal-prose">
                Questions about these Terms? Email us at <a href="mailto:info@globalcodio.ai" style={{ color: 'var(--blue)' }}>info@globalcodio.ai</a>.
              </p>
            </div>

          </article>
        </div>
      </Section>
    </>
  );
}
