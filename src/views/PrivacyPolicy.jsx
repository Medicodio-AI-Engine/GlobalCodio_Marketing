'use client';
import React, { useState } from 'react';

import { PageHero, Section } from '../../components/ui/PageKit';

const LAST_UPDATED = 'June 29, 2026';

const TOC = [
  { id: 'overview',    label: '1. Overview' },
  { id: 'collection',  label: '2. Information We Collect' },
  { id: 'use',         label: '3. How We Use Your Information' },
  { id: 'cookies',     label: '4. Cookies, Analytics & Tracking' },
  { id: 'sharing',     label: '5. How We Share Information' },
  { id: 'retention',   label: '6. Data Retention' },
  { id: 'rights',      label: '7. Your Rights & Choices' },
  { id: 'transfers',   label: '8. International Data Transfers' },
  { id: 'security',    label: '9. Security' },
  { id: 'children',    label: '10. Children\'s Privacy' },
  { id: 'changes',     label: '11. Changes to This Policy' },
  { id: 'contact',     label: '12. Contact Us' },
];

export default function PrivacyPolicy() {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="Legal"
        lead="Website Privacy "
        emphasis="Policy."
        headInline
        sub={`Effective date: ${LAST_UPDATED}. This policy explains how the GlobalCodio website (operated by Medicodio Inc.) collects, uses, and protects the personal information of visitors to www.globalcodio.ai. It applies to the public website only — not to our products or platform.`}
      />

      <Section id="privacy-content" style={{ paddingTop: 'var(--space-2xl)' }}>
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

          {/* Policy body */}
          <article style={{ minWidth: 0 }}>

            {/* 1. Overview */}
            <div id="overview">
              <h2 className="legal-section-title">1. Overview</h2>
              <p className="legal-prose">
                This Privacy Policy applies to the public GlobalCodio website at <strong>www.globalcodio.ai</strong> (the "Website"), operated by Medicodio Inc. ("Company," "GlobalCodio," "we," "our," or "us"), a Delaware corporation. It describes how we collect, use, disclose, and protect personal information when you browse the Website, submit our contact or demo forms, or otherwise interact with us as a visitor.
              </p>

            </div>

            {/* 2. Information We Collect */}
            <div id="collection">
              <h2 className="legal-section-title">2. Information We Collect</h2>

              <h3 className="legal-subsection-title">Information You Provide Directly</h3>
              <ul className="legal-list">
                <li><strong>Contact &amp; demo form submissions</strong> - full name, work email, organization name, company website, how you heard about us, and any message you send via our forms.</li>
                <li><strong>Communications</strong> - emails and other messages you send to us, and our correspondence with you.</li>
              </ul>

              <h3 className="legal-subsection-title">Information Collected Automatically</h3>
              <ul className="legal-list">
                <li><strong>Log data</strong> - IP address, browser type, pages visited, time spent, and referring URLs.</li>
                <li><strong>Approximate location</strong> - city, region, and country derived from your IP address (for example, to add context to a contact form submission). This is coarse, IP-based location and not precise GPS location.</li>
                <li><strong>Referral and campaign data</strong> - the website that referred you and any campaign parameters (e.g., UTM tags) in the link you arrived through, so we can understand how enquiries reach us.</li>
                <li><strong>Device information</strong> - hardware model, operating system, and browser version.</li>
                <li><strong>Cookies and similar technologies</strong> - see Section 4 for details.</li>
              </ul>

              <h3 className="legal-subsection-title">Information from Third Parties</h3>
              <ul className="legal-list">
                <li>Business contact information from publicly available sources for outreach and marketing purposes.</li>
              </ul>
            </div>

            {/* 3. How We Use Your Information */}
            <div id="use">
              <h2 className="legal-section-title">3. How We Use Your Information</h2>
              <p className="legal-prose">We use the personal information collected through the Website to:</p>
              <ul className="legal-list">
                <li>Respond to inquiries, demo requests, and contact form submissions.</li>
                <li>Send service-related communications about your enquiry.</li>
                <li>Send marketing communications where you have opted in or where permitted by law.</li>
                <li>Operate, maintain, analyse, and improve the Website and user experience.</li>
                <li>Understand how enquiries and visitors reach us (referral and campaign attribution).</li>
                <li>Detect, prevent, and investigate fraud, abuse, and security incidents.</li>
                <li>Comply with legal obligations.</li>
              </ul>
              <p className="legal-prose">
                <strong>Legal bases (GDPR):</strong> We process this personal data on the basis of consent (e.g., for non-essential cookies and marketing), legitimate interests (e.g., responding to enquiries, securing and improving the Website), and compliance with legal obligations.
              </p>
            </div>

            {/* 4. Cookies, Analytics & Tracking */}
            <div id="cookies">
              <h2 className="legal-section-title">4. Cookies, Analytics &amp; Tracking</h2>
              <p className="legal-prose">We use the following types of cookies and similar technologies on the Website:</p>
              <ul className="legal-list">
                <li><strong>Essential cookies</strong> - required for the Website to function (security, session, load balancing, and remembering your cookie choice). Cannot be disabled.</li>
                <li><strong>Analytics cookies</strong> - help us understand how visitors interact with the Website (e.g., page views, traffic sources). Loaded only with your consent.</li>
              </ul>
              <p className="legal-prose">
                Where required by law, we obtain your consent before placing non-essential cookies. You can accept or decline non-essential cookies when you first visit, and change your choice at any time via the <strong>&ldquo;Cookie Preferences&rdquo;</strong> link in our footer. Declining non-essential cookies will not affect your ability to use the Website.
              </p>
              <h3 className="legal-subsection-title">Google Analytics</h3>
              <p className="legal-prose">
                We may use Google Analytics to measure and improve our public Website &mdash; for example, to analyze website traffic and understand how visitors use our pages. Where analytics is enabled, it is loaded <strong>only after you consent</strong> via our cookie banner and applies <strong>only to Website visitors</strong>. We do <strong>not</strong> use Google advertising products and do not engage in interest-based advertising, remarketing, audience building, or the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information for cross-context behavioral advertising. You can manage your choice any time via the &ldquo;Cookie Preferences&rdquo; link in our footer, or opt out of Google Analytics using Google&rsquo;s <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)' }}>browser add-on</a>.
              </p>
            </div>

            {/* 5. How We Share Information */}
            <div id="sharing">
              <h2 className="legal-section-title">5. How We Share Information</h2>
              <p className="legal-prose">We do not sell or share your personal information for cross-context behavioral advertising. We may disclose information collected through the Website with:</p>

              <h3 className="legal-subsection-title">Service Providers</h3>
              <p className="legal-prose">
                Third-party vendors who help us operate the Website, including website hosting, email delivery (for responding to and storing contact form submissions), and analytics providers. These vendors are contractually bound to process data only on our behalf and under our instructions.
              </p>

              <h3 className="legal-subsection-title">Legal Requirements</h3>
              <p className="legal-prose">
                We may disclose information when required by law, court order, or governmental authority, or to protect the rights, property, or safety of GlobalCodio, our users, or others.
              </p>

              <h3 className="legal-subsection-title">Business Transfers</h3>
              <p className="legal-prose">
                In the event of a merger, acquisition, or sale of assets, personal information may be transferred as part of that transaction. We will notify affected parties prior to any such transfer.
              </p>
            </div>

            {/* 6. Data Retention */}
            <div id="retention">
              <h2 className="legal-section-title">6. Data Retention</h2>
              <p className="legal-prose">
                We retain personal information collected through the Website only for as long as necessary for the purposes described in this policy, after which we securely delete or anonymise it.
              </p>
              <ul className="legal-list">
                <li><strong>Contact &amp; enquiry data</strong> - retained to handle your enquiry and for a reasonable follow-up period, then deleted.</li>
                <li><strong>Marketing data</strong> - retained until you opt out or withdraw consent.</li>
                <li><strong>Log and analytics data</strong> - retained for up to 12 months.</li>
              </ul>
            </div>

            {/* 7. Your Rights & Choices */}
            <div id="rights">
              <h2 className="legal-section-title">7. Your Rights &amp; Choices</h2>
              <p className="legal-prose">Depending on your location, you may have the following rights:</p>

              <h3 className="legal-subsection-title">All Users</h3>
              <ul className="legal-list">
                <li><strong>Access</strong> - request a copy of the personal data we hold about you.</li>
                <li><strong>Correction</strong> - request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion</strong> - request deletion of your personal data where no longer necessary.</li>
                <li><strong>Opt-out of marketing</strong> - unsubscribe from marketing emails at any time via the link in any email.</li>
              </ul>

              <h3 className="legal-subsection-title">EEA, UK &amp; Switzerland (GDPR / UK GDPR)</h3>
              <ul className="legal-list">
                <li><strong>Portability</strong> - receive your data in a structured, machine-readable format.</li>
                <li><strong>Restriction</strong> - request that we limit how we process your data.</li>
                <li><strong>Objection</strong> - object to processing based on legitimate interests.</li>
                <li><strong>Withdraw consent</strong> - where processing is based on consent, withdraw at any time.</li>
                <li><strong>Lodge a complaint</strong> - with your local supervisory authority.</li>
              </ul>

              <h3 className="legal-subsection-title">California Residents (CCPA / CPRA)</h3>
              <ul className="legal-list">
                <li>Right to know what personal information is collected, disclosed, or sold.</li>
                <li>Right to delete personal information.</li>
                <li>Right to correct inaccurate personal information.</li>
                <li>Right to opt-out of the sale or sharing of personal information (we do not sell or share personal information).</li>
                <li>Right to non-discrimination for exercising your privacy rights.</li>
              </ul>

              <p className="legal-prose">
                To exercise any of these rights, contact us at <a href="mailto:info@globalcodio.ai" style={{ color: 'var(--blue)' }}>info@globalcodio.ai</a>. We will respond within 30 days (or as required by applicable law).
              </p>
            </div>

            {/* 8. International Data Transfers */}
            <div id="transfers">
              <h2 className="legal-section-title">8. International Data Transfers</h2>
              <p className="legal-prose">
                GlobalCodio operates from the United States and India. If you are located outside these countries, your information may be transferred to and processed in countries that may not have equivalent data protection laws to your home country.
              </p>
              <p className="legal-prose">
                Where required by law (e.g., GDPR), we use appropriate safeguards such as Standard Contractual Clauses (SCCs) approved by the European Commission to protect data transferred outside the EEA.
              </p>
            </div>

            {/* 9. Security */}
            <div id="security">
              <h2 className="legal-section-title">9. Security</h2>
              <p className="legal-prose">
                We implement industry-standard technical and organisational measures to protect personal information, including:
              </p>
              <ul className="legal-list">
                <li>Encryption in transit (TLS 1.2+).</li>
                <li>Role-based access controls and least-privilege access.</li>
                <li>Security monitoring and incident response.</li>
                <li>Regular review of our security practices.</li>
              </ul>
              <p className="legal-prose">
                Despite our safeguards, no system is completely secure. In the event of a data breach affecting your rights and freedoms, we will notify affected parties and relevant supervisory authorities as required by applicable law.
              </p>
            </div>

            {/* 10. Children's Privacy */}
            <div id="children">
              <h2 className="legal-section-title">10. Children's Privacy</h2>
              <p className="legal-prose">
                The Website is intended for business users and is not directed at children under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child under 16 without appropriate consent, we will promptly delete it.
              </p>
            </div>

            {/* 11. Changes */}
            <div id="changes">
              <h2 className="legal-section-title">11. Changes to This Policy</h2>
              <p className="legal-prose">
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by updating the "Effective date" at the top of this page and, where appropriate, by other prominent means.
              </p>
              <p className="legal-prose">
                Your continued use of the Website after the updated policy takes effect constitutes acceptance of the revised policy.
              </p>
            </div>

            {/* 12. Contact */}
            <div id="contact">
              <h2 className="legal-section-title">12. Contact Us</h2>
              <p className="legal-prose">
                The GlobalCodio website is operated by Medicodio Inc. If you have questions about this Privacy Policy, wish to exercise your rights, or have a privacy concern, please email <a href="mailto:info@globalcodio.ai" style={{ color: 'var(--blue)' }}>info@globalcodio.ai</a> or write to us at any of the addresses below:
              </p>
              <div style={{
                background: 'var(--surface)',
                borderRadius: 'calc(14px * var(--ui-scale))',
                padding: 'calc(28px * var(--ui-scale))',
                marginTop: 'var(--space-lg)',
                display: 'grid',
                gap: 'calc(16px * var(--ui-scale))',
                fontSize: 'calc(15px * var(--ui-scale))',
                color: 'var(--ink-2)',
                lineHeight: 1.7,
              }}>
                <div><strong>Medicodio Inc.</strong> (operator of GlobalCodio), a Delaware corporation</div>
                <div>
                  <div style={{ fontSize: 'calc(11px * var(--ui-scale))', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>Registered office (Delaware)</div>
                  <div>16192 Coastal Hwy, Lewes, DE 19958, USA</div>
                </div>
                <div>
                  <div style={{ fontSize: 'calc(11px * var(--ui-scale))', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>US office (California)</div>
                  <div>2603 Camino Ramon #200, San Ramon, CA 94583, USA</div>
                </div>
                <div>
                  <div style={{ fontSize: 'calc(11px * var(--ui-scale))', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>India operations (Bangalore)</div>
                  <div>B-Block, 8th Floor, Brigade Tech Park, 134/1, Whitefield, Bangalore &ndash; 560 066, India</div>
                </div>
                <div>
                  Email: <a href="mailto:info@globalcodio.ai" style={{ color: 'var(--blue)' }}>info@globalcodio.ai</a>
                </div>
                <div style={{ marginTop: 'calc(4px * var(--ui-scale))', fontSize: 'calc(13px * var(--ui-scale))', color: 'var(--ink-3)' }}>
                  We aim to respond to all privacy enquiries within 30 days.
                </div>
              </div>
            </div>

          </article>
        </div>
      </Section>
    </>
  );
}
