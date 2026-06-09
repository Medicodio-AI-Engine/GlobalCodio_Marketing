'use client';
import React, { useState } from 'react';

import { PageHero, Section } from '../../components/ui/PageKit';

const LAST_UPDATED = 'June 3, 2026';

const TOC = [
  { id: 'overview',      label: '1. Overview' },
  { id: 'collection',    label: '2. Information We Collect' },
  { id: 'use',           label: '3. How We Use Your Information' },
  { id: 'sharing',       label: '4. How We Share Information' },
  { id: 'retention',     label: '5. Data Retention' },
  { id: 'security',      label: '6. Security' },
  { id: 'rights',        label: '7. Your Rights & Choices' },
  { id: 'transfers',     label: '8. International Data Transfers' },
  { id: 'cookies',       label: '9. Cookies & Tracking' },
  { id: 'children',      label: '10. Children\'s Privacy' },
  { id: 'changes',       label: '11. Changes to This Policy' },
  { id: 'contact',       label: '12. Contact Us' },
];

const prose = {
  fontSize: 'calc(16px * var(--ui-scale))',
  color: 'var(--ink-3)',
  lineHeight: 1.75,
  marginTop: 'var(--space-md)',
};

const h3Style = {
  fontSize: 'calc(20px * var(--ui-scale))',
  fontWeight: 700,
  color: 'var(--ink)',
  letterSpacing: '-0.01em',
  marginTop: 'var(--space-2xl)',
  marginBottom: 'var(--space-sm)',
  fontFamily: 'var(--display)',
};

const h4Style = {
  fontSize: 'calc(14px * var(--ui-scale))',
  fontWeight: 700,
  color: 'var(--ink-2)',
  letterSpacing: '.04em',
  textTransform: 'uppercase',
  marginTop: 'var(--space-xl)',
  marginBottom: 'var(--space-xs)',
};

const listStyle = {
  paddingLeft: 'calc(20px * var(--ui-scale))',
  display: 'grid',
  gap: 'calc(6px * var(--ui-scale))',
  marginTop: 'var(--space-sm)',
  fontSize: 'calc(16px * var(--ui-scale))',
  color: 'var(--ink-3)',
  lineHeight: 1.7,
};

export default function PrivacyPolicy() {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="Legal"
        lead="Privacy "
        emphasis="Policy."
        headInline
        sub={`Effective date: ${LAST_UPDATED}. This policy explains how GlobalCodio collects, uses, and protects your personal information.`}
      />

      <Section id="privacy-content" style={{ paddingTop: 'var(--space-2xl)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'calc(240px * var(--ui-scale)) 1fr',
          gap: 'var(--space-2xl)',
          alignItems: 'start',
        }}>

          {/* Sticky TOC sidebar */}
          <nav
            aria-label="Table of contents"
            style={{
              position: 'sticky',
              top: 'calc(100px * var(--ui-scale))',
              display: 'flex',
              flexDirection: 'column',
              gap: 'calc(4px * var(--ui-scale))',
            }}
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
              <h2 style={h3Style}>1. Overview</h2>
              <p style={prose}>
                GlobalCodio, Inc. ("GlobalCodio," "we," "our," or "us") operates a managed immigration technology platform for immigration law firms and corporate immigration departments. This Privacy Policy describes how we collect, use, disclose, and protect personal information when you use our website at <strong>www.globalcodio.ai</strong>, our platform (CodioCMS, CodioForms, Codio AI Agents, CodioNetwork), or engage with our services.
              </p>
              <p style={prose}>
                By accessing or using our services, you agree to this Privacy Policy. If you do not agree, please discontinue use of our services.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div id="collection">
              <h2 style={h3Style}>2. Information We Collect</h2>

              <h3 style={h4Style}>Information You Provide Directly</h3>
              <ul style={listStyle}>
                <li><strong>Account information</strong> - name, work email address, organization name, job title, and password when you register.</li>
                <li><strong>Contact form submissions</strong> - full name, work email, organization name, company website, and any message you send via our contact form.</li>
                <li><strong>Client and case data</strong> - immigration case information, foreign national details, document data, and workflow data entered into CodioCMS or CodioForms by our firm clients.</li>
                <li><strong>Communications</strong> - emails, support tickets, and other messages you send to us.</li>
              </ul>

              <h3 style={h4Style}>Information Collected Automatically</h3>
              <ul style={listStyle}>
                <li><strong>Log data</strong> - IP address, browser type, pages visited, time spent, and referring URLs.</li>
                <li><strong>Device information</strong> - hardware model, operating system, and browser version.</li>
                <li><strong>Usage data</strong> - features used, actions taken, and performance metrics within our platform.</li>
                <li><strong>Cookies and tracking technologies</strong> - see Section 9 for details.</li>
              </ul>

              <h3 style={h4Style}>Information from Third Parties</h3>
              <ul style={listStyle}>
                <li>Information from third-party integrations you authorize (e.g., e-signature providers, calendar tools, accounting software).</li>
                <li>Business contact information from publicly available sources for outreach purposes.</li>
              </ul>
            </div>

            {/* 3. How We Use Your Information */}
            <div id="use">
              <h2 style={h3Style}>3. How We Use Your Information</h2>
              <p style={prose}>We use personal information to:</p>
              <ul style={listStyle}>
                <li>Provide, operate, and improve our platform and services.</li>
                <li>Process and manage immigration cases on behalf of our firm clients.</li>
                <li>Respond to inquiries, support requests, and contact form submissions.</li>
                <li>Send service-related communications including onboarding, updates, and security alerts.</li>
                <li>Send marketing communications where you have opted in or where permitted by law.</li>
                <li>Analyse usage patterns to improve functionality and user experience.</li>
                <li>Comply with legal obligations, including data protection laws and immigration regulations.</li>
                <li>Detect, prevent, and investigate fraud, abuse, and security incidents.</li>
              </ul>
              <p style={prose}>
                <strong>Legal bases (GDPR):</strong> We process personal data on the basis of contract performance, legitimate interests, legal obligations, and consent where applicable.
              </p>
            </div>

            {/* 4. How We Share Information */}
            <div id="sharing">
              <h2 style={h3Style}>4. How We Share Information</h2>
              <p style={prose}>We do not sell personal information. We may share information with:</p>

              <h3 style={h4Style}>Service Providers</h3>
              <p style={prose}>
                Third-party vendors who assist us in operating our platform, including cloud hosting providers, analytics tools, e-signature platforms, and customer support software. These vendors are contractually bound to process data only on our behalf and under our instructions.
              </p>

              <h3 style={h4Style}>CodioNetwork Partners</h3>
              <p style={prose}>
                When coordinating immigration services (translations, medical exams, apostille, courier), we share necessary case information with CodioNetwork service providers under confidentiality agreements.
              </p>

              <h3 style={h4Style}>Legal Requirements</h3>
              <p style={prose}>
                We may disclose information when required by law, court order, or governmental authority, or to protect the rights, property, or safety of GlobalCodio, our clients, or others.
              </p>

              <h3 style={h4Style}>Business Transfers</h3>
              <p style={prose}>
                In the event of a merger, acquisition, or sale of assets, personal information may be transferred as part of that transaction. We will notify affected parties prior to any such transfer.
              </p>
            </div>

            {/* 5. Data Retention */}
            <div id="retention">
              <h2 style={h3Style}>5. Data Retention</h2>
              <p style={prose}>
                We retain personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Immigration case data is retained in accordance with applicable immigration laws and our clients' instructions. When data is no longer required, we securely delete or anonymise it.
              </p>
              <ul style={listStyle}>
                <li><strong>Account data</strong> - retained for the duration of the client relationship plus 3 years.</li>
                <li><strong>Case data</strong> - retained per client instruction and applicable legal requirements.</li>
                <li><strong>Log and usage data</strong> - retained for up to 12 months.</li>
                <li><strong>Marketing data</strong> - retained until you opt out or withdraw consent.</li>
              </ul>
            </div>

            {/* 6. Security */}
            <div id="security">
              <h2 style={h3Style}>6. Security</h2>
              <p style={prose}>
                GlobalCodio implements industry-standard technical and organisational measures to protect personal information, including:
              </p>
              <ul style={listStyle}>
                <li>SOC 2 Type II audited security controls.</li>
                <li>ISO/IEC 27001 certified information security management.</li>
                <li>Encryption in transit (TLS 1.2+) and at rest (AES-256).</li>
                <li>Role-based access controls and multi-factor authentication.</li>
                <li>Regular penetration testing and vulnerability assessments.</li>
                <li>24/7 security monitoring and incident response.</li>
              </ul>
              <p style={prose}>
                Despite our safeguards, no system is completely secure. In the event of a data breach affecting your rights and freedoms, we will notify affected parties and relevant supervisory authorities as required by applicable law.
              </p>
            </div>

            {/* 7. Your Rights & Choices */}
            <div id="rights">
              <h2 style={h3Style}>7. Your Rights & Choices</h2>
              <p style={prose}>Depending on your location, you may have the following rights:</p>

              <h3 style={h4Style}>All Users</h3>
              <ul style={listStyle}>
                <li><strong>Access</strong> - request a copy of the personal data we hold about you.</li>
                <li><strong>Correction</strong> - request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion</strong> - request deletion of your personal data where no longer necessary.</li>
                <li><strong>Opt-out of marketing</strong> - unsubscribe from marketing emails at any time via the link in any email.</li>
              </ul>

              <h3 style={h4Style}>EEA, UK & Switzerland (GDPR / UK GDPR)</h3>
              <ul style={listStyle}>
                <li><strong>Portability</strong> - receive your data in a structured, machine-readable format.</li>
                <li><strong>Restriction</strong> - request that we limit how we process your data.</li>
                <li><strong>Objection</strong> - object to processing based on legitimate interests.</li>
                <li><strong>Withdraw consent</strong> - where processing is based on consent, withdraw at any time.</li>
                <li><strong>Lodge a complaint</strong> - with your local supervisory authority.</li>
              </ul>

              <h3 style={h4Style}>California Residents (CCPA / CPRA)</h3>
              <ul style={listStyle}>
                <li>Right to know what personal information is collected, disclosed, or sold.</li>
                <li>Right to delete personal information.</li>
                <li>Right to opt-out of the sale or sharing of personal information (we do not sell personal information).</li>
                <li>Right to non-discrimination for exercising your privacy rights.</li>
              </ul>

              <p style={prose}>
                To exercise any of these rights, contact us at <a href="mailto:info@globalcodio.ai" style={{ color: 'var(--blue)' }}>info@globalcodio.ai</a>. We will respond within 30 days (or as required by applicable law).
              </p>
            </div>

            {/* 8. International Data Transfers */}
            <div id="transfers">
              <h2 style={h3Style}>8. International Data Transfers</h2>
              <p style={prose}>
                GlobalCodio operates from the United States and India. If you are located outside these countries, your information may be transferred to and processed in countries that may not have equivalent data protection laws to your home country.
              </p>
              <p style={prose}>
                Where required by law (e.g., GDPR), we use appropriate safeguards such as Standard Contractual Clauses (SCCs) approved by the European Commission to protect data transferred outside the EEA.
              </p>
            </div>

            {/* 9. Cookies */}
            <div id="cookies">
              <h2 style={h3Style}>9. Cookies & Tracking</h2>
              <p style={prose}>We use the following types of cookies and similar technologies:</p>
              <ul style={listStyle}>
                <li><strong>Essential cookies</strong> - required for the platform to function (authentication, session management). Cannot be disabled.</li>
                <li><strong>Analytics cookies</strong> - help us understand how visitors interact with our website (e.g., page views, traffic sources).</li>
                <li><strong>Preference cookies</strong> - remember your settings and preferences.</li>
              </ul>
              <p style={prose}>
                You can control cookies through your browser settings. Disabling non-essential cookies will not affect your ability to use our core services. Where required by law, we obtain consent before placing non-essential cookies.
              </p>
            </div>

            {/* 10. Children's Privacy */}
            <div id="children">
              <h2 style={h3Style}>10. Children's Privacy</h2>
              <p style={prose}>
                Our services are intended for business users and are not directed at children under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child under 16 without appropriate consent, we will promptly delete it.
              </p>
            </div>

            {/* 11. Changes */}
            <div id="changes">
              <h2 style={h3Style}>11. Changes to This Policy</h2>
              <p style={prose}>
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by updating the "Effective date" at the top of this page and, where appropriate, by sending an email notification to registered users.
              </p>
              <p style={prose}>
                Your continued use of our services after the updated policy takes effect constitutes acceptance of the revised policy.
              </p>
            </div>

            {/* 12. Contact */}
            <div id="contact">
              <h2 style={h3Style}>12. Contact Us</h2>
              <p style={prose}>
                If you have questions about this Privacy Policy, wish to exercise your rights, or have a privacy concern, please contact us:
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
                <div><strong>GlobalCodio, Inc.</strong></div>
                <div>2603 Camino Ramon #200, San Ramon, CA 94583, USA</div>
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
