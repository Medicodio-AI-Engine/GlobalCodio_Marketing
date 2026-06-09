import { SITE_URL, SUPPORT_EMAIL } from './navigation.js';

export { SITE_URL };

export const SITE_NAME = 'GlobalCodio';

/** Primary & secondary keywords from brand positioning + product copy. */
export const SEO_KEYWORDS = [
  'AI workforce global immigration',
  'AI agents global immigration',
  'AI immigration agents',
  'immigration law firm software',
  'corporate immigration platform',
  'immigration case management',
  'managed technology operations',
  'global immigration ecosystem',
  'immigration automation',
  'visa case management',
  'immigration document automation',
  'immigration ROI',
  'cut costs grow revenue immigration',
];

export const SEO_TITLE =
  'GlobalCodio | AI Workforce for Global Immigration - Deployed and Managed';

export const SEO_DESCRIPTION =
  'GlobalCodio gives immigration law firms and corporate departments their own AI workforce - built, deployed, and managed end-to-end. Cut costs and grow revenue without managing technology.';

export const SEO_TAGLINE = 'AI Workforce for Global Immigration. Deployed and Managed.';

export const SEO_BRAND_STATEMENT =
  'GlobalCodio gives immigration law firms and corporate immigration departments their own AI workforce - built, deployed, and managed end-to-end. Our AI Agents handle case management, client communications, renewals, and business development, while our team runs the entire technology operation. Connected to a global ecosystem of immigration partners, we help your team cut costs and grow revenue - without ever managing technology again.';

export const OG_IMAGE = `${SITE_URL}/assets/dashboard.png`;
export const OG_IMAGE_ALT =
  'GlobalCodio AI workforce immigration platform dashboard for law firms and corporate immigration teams';

export const TWITTER_HANDLE = process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@globalcodio';

export const AI_AGENTS = [
  { name: 'Intake Agent', description: 'Collects client info, validates documents, opens cases' },
  { name: 'Document Agent', description: 'Extracts data from passports, visas, foreign records, translates' },
  { name: 'Forms Agent', description: 'Auto-fills I-130, I-485, N-400, H-1B, EB-5, and other USCIS forms' },
  { name: 'Deadline Agent', description: 'Tracks every case deadline, alerts on expirations' },
  { name: 'Client Comms Agent', description: 'Proactively updates clients, answers FAQs, sends reminders' },
  { name: 'Renewal Agent', description: 'Surfaces renewal opportunities from existing client data' },
  { name: 'BD Agent', description: 'Runs business development campaigns, qualifies leads' },
  { name: 'Ecosystem Agent', description: 'Coordinates with translators, courier services, foreign agents' },
];

/** FAQ content - mirrors on-page "Common questions" section for structured data. */
export const FAQ_ITEMS = [
  {
    question: 'We already have case management software.',
    answer:
      'We integrate with your existing tools and layer our platform on top - so you keep your systems and still get the outcomes. No rip-and-replace required.',
  },
  {
    question: "We don't have time to implement new software.",
    answer:
      'We manage the full technology operation for you. Your team keeps working while we handle implementation, configuration, training, and go-live.',
  },
  {
    question: 'Will AI Agents replace our attorneys?',
    answer:
      'No. Agents augment your team - handling repetitive case prep, comms, and renewals so attorneys focus on what only humans can do. Every extraction and draft remains attorney-reviewable before it leaves your firm.',
  },
  {
    question: 'Switching platforms seems risky - will we lose data or downtime?',
    answer:
      'Migration is planned and handled by our team. Your records are mapped before anything moves, active cases keep running, and we manage extraction from your current vendor so nothing important gets left behind.',
  },
];

/** Extended FAQ sets for individual product/solution pages. */
export const FAQ_PLATFORM = [
  {
    question: 'What is CodioCMS?',
    answer:
      'CodioCMS is a next-generation immigration case management platform built by Umesh Vaidyamath, founder of INSZoom. It provides end-to-end case lifecycle management, five purpose-built portals (attorney, applicant, HR, service provider, admin), native AI agent integration, global country support, and customizable workflow automation for immigration law firms and corporate mobility teams.',
  },
  {
    question: 'What immigration forms does CodioForms support?',
    answer:
      'CodioForms supports 180+ US immigration forms (USCIS-synced), the full IRCC suite for Canada, Netherlands MVV and residence permits, and India visa and OCI forms. Every edition is tracked to the issuing authority, and new countries are scoped and built in days based on client priority.',
  },
  {
    question: 'How does CodioCMS differ from other immigration case management software?',
    answer:
      'CodioCMS is the only immigration case management platform designed from the ground up for native AI agents - not legacy software with AI bolted on afterward. It also includes five dedicated portals for different user roles, a global forms engine, and an Immigration Passport Vault giving applicants portable ownership of their records. Every engagement includes CodioOps - a dedicated team that configures and continuously optimizes the platform.',
  },
  {
    question: 'Can we migrate from our current immigration software to CodioCMS?',
    answer:
      'Yes. GlobalCodio\'s team manages the full migration - data export from your current platform, data mapping and verification, workflow reconstruction in CodioCMS, and parallel operations until your team is fully transitioned. Typical migration takes approximately six weeks with zero active case disruption.',
  },
  {
    question: 'What is the Immigration Passport?',
    answer:
      'The Immigration Passport is a personal document record within CodioCMS where applicants store passports, visas, work permits, and supporting documents securely. Applicants control what they share and with whom. When they change employers, switch law firms, or start a new matter, their complete record travels with them - no re-submission or starting from scratch.',
  },
];

export const FAQ_AGENTS = [
  {
    question: 'What are Codio AI Agents?',
    answer:
      'Codio AI Agents are a team of 10 specialized autonomous AI workers purpose-built for immigration workflows. Each agent handles a specific stage of the immigration process: intake, document extraction, document validation, form preparation, deadline tracking, client communications, renewal detection, business development, ecosystem coordination, and government notice monitoring. They operate natively within CodioCMS, run 24/7, and are deployed and managed by GlobalCodio\'s team.',
  },
  {
    question: 'How do AI agents handle attorney-client privilege and data security?',
    answer:
      'Codio AI Agents operate within the same role-based access controls as human staff - they cannot take any action that would require elevated permissions. All agent outputs are confidence-scored and flagged for attorney review before being applied to a case. GlobalCodio never trains AI models on client data. Every agent action is written to an immutable, cryptographically signed audit log.',
  },
  {
    question: 'How much time do AI agents save on immigration case preparation?',
    answer:
      'Immigration law firms on GlobalCodio typically see a 70% reduction in case preparation time. AI agents handle document extraction, form preparation, questionnaire processing, and deadline tracking - work that previously took hours takes minutes. The human equivalent of all eight core AI agents would cost approximately $499,000 per year in salaries.',
  },
  {
    question: 'Can AI agents replace paralegals or case managers?',
    answer:
      'AI agents handle the repetitive, time-consuming work that paralegals and case managers currently do: document processing, form filling, deadline monitoring, client status updates, and renewal outreach. This frees your human team for strategy, client relationships, and the complex judgment that requires legal expertise. Most firms scale their caseload without adding headcount.',
  },
  {
    question: 'How does the Renewal Agent recover revenue?',
    answer:
      'The Renewal Agent continuously scans your existing client database for expiring visas, green card upgrade eligibility, citizenship eligibility, and dormant cases worth reopening. It identifies these opportunities, drafts outreach automatically, and tracks revenue recovered. Most firms recover $50,000–$300,000 in additional annual revenue from clients already in their database.',
  },
  {
    question: 'Do we need technical staff to manage the AI agents?',
    answer:
      'No. GlobalCodio deploys, configures, monitors, and manages all AI agents as part of the managed service. Your firm does not need IT staff, data scientists, or AI expertise. CodioOps - bundled with every engagement - handles all ongoing management and optimization.',
  },
];

export const FAQ_LAW_FIRMS = [
  {
    question: 'What does GlobalCodio provide for immigration law firms?',
    answer:
      'GlobalCodio provides a complete, managed technology operation for immigration law firms: CodioCMS (case management platform), CodioForms (global forms engine), Codio AI Agents (10 specialized AI workers), CodioOps (dedicated operations team), and CodioNetwork (global service provider network). Everything is deployed and managed by GlobalCodio - firms never manage technology themselves.',
  },
  {
    question: 'Is GlobalCodio suitable for solo immigration law firms?',
    answer:
      'Yes. GlobalCodio serves solo, mid-size, and enterprise immigration law firms. Solo and small firms benefit most from AI agents that replace the work of multiple paralegals and the managed operations model that eliminates the need for any internal IT or technology management.',
  },
  {
    question: 'How does GlobalCodio help immigration firms respond to corporate RFPs?',
    answer:
      'GlobalCodio provides an RFP Response service that helps immigration law firms answer complex technical, security, and compliance questions from corporate clients. Firms on GlobalCodio can credibly document SOC 2 Type II, ISO 27001, GDPR, HIPAA-ready controls, and AI governance - the standards corporate procurement teams require.',
  },
  {
    question: 'What is the typical ROI for immigration law firms using GlobalCodio?',
    answer:
      'Immigration law firms using GlobalCodio typically see a 3× ROI in year one. This combines cost savings from reduced case preparation time (70% reduction), eliminated staff overhead for routine work (equivalent of $499,000/year), and recovered renewal revenue ($50,000–$300,000 from dormant client reactivation).',
  },
];

export const FAQ_CORPORATE = [
  {
    question: 'What does GlobalCodio offer corporate immigration teams?',
    answer:
      'GlobalCodio gives corporate mobility, HR, and legal operations teams a complete immigration technology operation: CodioCMS with a dedicated HR portal, workforce pipeline dashboards, immigration health scores, multi-firm performance comparison, budget tracking, AI agents for routine case work, and CodioNetwork for vendor coordination. Executive-ready reporting is built in.',
  },
  {
    question: 'How does GlobalCodio help HR teams manage employee immigration without waiting on outside counsel?',
    answer:
      'GlobalCodio\'s HR portal allows HR and mobility teams to initiate immigration workflows, collect employee information, and build the case file independently - weeks before outside counsel is engaged. When the law firm is brought in, they inherit a complete file with no double data entry or coordination delay.',
  },
  {
    question: 'Can GlobalCodio handle immigration across multiple countries?',
    answer:
      'Yes. CodioCMS handles case management across every country the corporate team operates in. CodioForms covers the US, Canada, Netherlands, India, and additional countries added on demand. CodioNetwork provides in-country attorneys, translators, and service providers for global coordination.',
  },
];

export const FAQ_SECURITY = [
  {
    question: 'What security certifications does GlobalCodio hold?',
    answer:
      'GlobalCodio is SOC 2 Type II certified and ISO 27001 certified. The platform also meets GDPR, UK GDPR, and CCPA/CPRA requirements, implements HIPAA-ready safeguards for immigration medical records, and follows ABA-aligned AI governance standards. Full compliance documentation is available to qualified prospects under NDA.',
  },
  {
    question: 'How does GlobalCodio protect attorney-client privilege when using AI?',
    answer:
      'GlobalCodio never trains AI models on client data. All AI agent outputs are confidence-scored and require attorney review before being applied to a case. Agents operate within role-based access controls and cannot exceed what human staff are permitted to do. Every agent action is logged in an immutable, tamper-proof audit trail.',
  },
  {
    question: 'What encryption standards does GlobalCodio use?',
    answer:
      'GlobalCodio uses AES-256 encryption for data at rest and TLS 1.3 for data in transit. Sensitive document workflows use end-to-end encryption. All audit log entries are cryptographically signed. Backups are encrypted and stored across multiple geographic regions.',
  },
  {
    question: 'How does GlobalCodio handle data residency requirements?',
    answer:
      'GlobalCodio provides compliant regional infrastructure for countries with data residency requirements and configurable data residency for global enterprise clients. Data processing agreements and subprocessor lists are available as part of the standard compliance documentation package.',
  },
];

export const PILLARS = [
  {
    name: 'AI Agents',
    description:
      'A suite of autonomous AI workers handling case management, client communications, renewals, and business development - purpose-built for immigration workflows.',
  },
  {
    name: 'Managed Technology Operations',
    description:
      'We deploy, configure, monitor, and optimize the entire agent ecosystem within your firm. Updates, integrations, support, and ongoing improvements - fully managed by our team.',
  },
  {
    name: 'Global Immigration Ecosystem',
    description:
      'Curated network of pre-vetted immigration service providers worldwide - translators, document authentication services, foreign attorneys, medical exam centers, courier services, and more - all accessible through one platform.',
  },
];

export function buildStructuredData() {
  const orgId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        description: SEO_BRAND_STATEMENT,
        email: SUPPORT_EMAIL,
        contactPoint: {
          '@type': 'ContactPoint',
          email: SUPPORT_EMAIL,
          contactType: 'customer support',
          availableLanguage: ['English'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: SEO_DESCRIPTION,
        publisher: { '@id': orgId },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: SITE_URL,
        name: SEO_TITLE,
        description: SEO_DESCRIPTION,
        isPartOf: { '@id': websiteId },
        about: { '@id': orgId },
        inLanguage: 'en-US',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: OG_IMAGE,
          description: OG_IMAGE_ALT,
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: SITE_NAME,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: SITE_URL,
        description:
          'AI Agents for global immigration - case management, client communications, renewals, and business development with managed operations and a global partner ecosystem.',
        featureList: AI_AGENTS.map((a) => a.name),
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Base retainer plus value share tied to measurable cost savings and revenue growth',
          url: `${SITE_URL}/#certifications`,
        },
        provider: { '@id': orgId },
      },
      {
        '@type': 'Service',
        name: 'GlobalCodio AI Workforce for Global Immigration',
        provider: { '@id': orgId },
        serviceType: 'AI immigration agents with managed technology operations',
        areaServed: 'Worldwide',
        description: SEO_BRAND_STATEMENT,
        audience: [
          {
            '@type': 'BusinessAudience',
            audienceType: 'Immigration law firms',
          },
          {
            '@type': 'BusinessAudience',
            audienceType: 'Corporate immigration departments',
          },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'GlobalCodio Three Pillars',
        itemListElement: PILLARS.map((pillar, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: pillar.name,
          description: pillar.description,
        })),
      },
      {
        '@type': 'ItemList',
        name: 'GlobalCodio AI Agents',
        itemListElement: AI_AGENTS.map((agent, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: agent.name,
          description: agent.description,
        })),
      },
    ],
  };
}

/** Crawler-readable HTML injected into index.html at build time (non-JS bots + first paint). */
export function buildStaticSeoHtml() {
  const pillarList = PILLARS.map(
    (p) => `<li><strong>${p.name}</strong> - ${p.description}</li>`,
  ).join('');

  const agentList = AI_AGENTS.map(
    (a) => `<li><strong>${a.name}</strong> - ${a.description}</li>`,
  ).join('');

  const faqList = FAQ_ITEMS.map(
    (f) => `<dt>${f.question}</dt><dd>${f.answer}</dd>`,
  ).join('');

  return `<a class="skip-link" href="#main-content">Skip to main content</a>
<header>
  <p><strong>${SITE_NAME}</strong> - ${SEO_TAGLINE}</p>
</header>
<main id="main-content">
  <h1>Win Cases. We'll Handle All the Technology.</h1>
  <p><strong>${SEO_TAGLINE}</strong></p>
  <p>${SEO_BRAND_STATEMENT}</p>
  <p><a href="${SITE_URL}/free-tech-audit">Book your free tech audit</a> · <a href="https://app.globalcodio.ai/login">Sign in</a></p>
  <nav aria-label="Primary">
    <ul>
      <li><a href="${SITE_URL}/platform">Platform - CodioCMS &amp; CodioForms</a></li>
      <li><a href="${SITE_URL}/ai-agents">Codio AI Agents</a></li>
      <li><a href="${SITE_URL}/network">CodioNetwork</a></li>
      <li><a href="${SITE_URL}/services">Services</a></li>
      <li><a href="${SITE_URL}/security">Security &amp; Compliance</a></li>
      <li><a href="${SITE_URL}/about">About</a></li>
      <li><a href="${SITE_URL}/letter-from-the-founder">Letter from the Founder</a></li>
      <li><a href="${SITE_URL}/free-tech-audit">Free Tech Audit</a></li>
    </ul>
  </nav>
  <section id="pillars">
    <h2>AI Agents, Managed Operations, and Global Immigration Ecosystem</h2>
    <ul>${pillarList}</ul>
  </section>
  <section id="certifications">
    <h2>Trust and compliance for immigration law firms</h2>
    <p>SOC 2 Type II, ISO 27001, GDPR, CCPA/CPRA, HIPAA-ready controls, AES-256 and TLS 1.3 encryption, ABA-aligned AI governance, attorney-client privilege safeguards, and enterprise SSO/MFA.</p>
  </section>
  <section id="agents">
    <h2>GlobalCodio AI Agents</h2>
    <ul>${agentList}</ul>
  </section>
  <section id="how">
    <h2>Common questions for immigration law firms and corporate teams</h2>
    <dl>${faqList}</dl>
  </section>
  <section id="operating-system">
    <h2>One platform. Complete control.</h2>
    <p>Codio is your operating system. Codio manages your cases. Codio prepares your documents. Codio keeps clients informed. Codio drives execution. Codio prepares your filings. Codio fills your forms.</p>
  </section>
  <section id="value-levers">
    <h2>Where savings and revenue come from</h2>
    <p>Cost savings from reduced case prep and AI-powered support. Revenue growth from renewal detection and BD automation - each tied to measurable agent outcomes.</p>
  </section>
</main>
<footer>
  <p>© 2026 GlobalCodio Inc. · <a href="${SITE_URL}">www.globalcodio.ai</a> · <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a></p>
</footer>`;
}

export const STRUCTURED_DATA_JSON = JSON.stringify(buildStructuredData());

/** Build a FAQPage schema from an array of {question, answer} items. */
export function buildFaqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/** Build a BreadcrumbList schema. items = [{name, url}] from root to current. */
export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Build a SoftwareApplication schema for a specific product page. */
export function buildSoftwareAppSchema({ name, description, features, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url,
    featureList: features,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      description: 'Base retainer plus value share tied to measurable cost savings and revenue growth',
      url: `${SITE_URL}/contact`,
    },
  };
}

/** Combine multiple schema objects into a @graph. */
export function buildSchemaGraph(...schemas) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}

/** Pre-built page schemas for injection into page-level script tags. */
export const PAGE_SCHEMAS = {
  platform: buildSchemaGraph(
    buildFaqSchema(FAQ_PLATFORM),
    buildBreadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Platform', url: `${SITE_URL}/platform` },
    ]),
    buildSoftwareAppSchema({
      name: 'CodioCMS - Immigration Case Management Platform',
      description: 'Next-generation immigration case management software with native AI agents, five-portal architecture, and global forms engine. Built by the founder of INSZoom.',
      features: ['End-to-end case lifecycle management', 'Applicant portal', 'HR/Employer portal', 'Service provider portal', 'Role-based access control', 'Client questionnaires', 'Global country support', 'Customizable workflows', 'Native integrations', 'Reporting & analytics'],
      url: `${SITE_URL}/platform`,
    }),
  ),
  aiAgents: buildSchemaGraph(
    buildFaqSchema(FAQ_AGENTS),
    buildBreadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'AI Agents', url: `${SITE_URL}/ai-agents` },
    ]),
    buildSoftwareAppSchema({
      name: 'Codio AI Agents - Immigration AI Workforce',
      description: '10 specialized AI agents purpose-built for immigration workflows: intake, document extraction, form preparation, deadline tracking, client communications, renewal detection, business development, and ecosystem coordination.',
      features: ['Intake Agent', 'Document Extraction Agent', 'Document Validation Agent', 'Forms Agent', 'Deadline Agent', 'Client Communications Agent', 'Renewal Agent', 'BD Agent', 'Ecosystem Agent', 'Government Notice Update Agent'],
      url: `${SITE_URL}/ai-agents`,
    }),
  ),
  forLawFirms: buildSchemaGraph(
    buildFaqSchema(FAQ_LAW_FIRMS),
    buildBreadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'For Immigration Law Firms', url: `${SITE_URL}/for-law-firms` },
    ]),
  ),
  forCorporateTeams: buildSchemaGraph(
    buildFaqSchema(FAQ_CORPORATE),
    buildBreadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'For Corporate Teams', url: `${SITE_URL}/for-corporate-teams` },
    ]),
  ),
  security: buildSchemaGraph(
    buildFaqSchema(FAQ_SECURITY),
    buildBreadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Security & Compliance', url: `${SITE_URL}/security` },
    ]),
  ),
  about: buildSchemaGraph(
    buildBreadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'About', url: `${SITE_URL}/about` },
    ]),
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description: SEO_BRAND_STATEMENT,
      email: SUPPORT_EMAIL,
      foundingDate: '2025',
      founder: {
        '@type': 'Person',
        name: 'Umesh Vaidyamath',
        jobTitle: 'Founder & CEO',
        description: 'Co-founded INSZoom in 1999 - the immigration industry\'s first cloud-based case management platform, acquired by Mitratech in 2020.',
      },
    },
  ),
};
