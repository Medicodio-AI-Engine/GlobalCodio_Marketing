/** Primary nav with dropdown groups. Items with `children` render a dropdown;
 *  `href` on a parent (optional) makes the label itself a link to an overview. */
export const SITE_NAV = [
  { href: '/', label: 'Home' },
  {
    label: 'Products',
    children: [
      { href: '/platform', label: 'Platform', desc: 'CodioCMS & CodioForms' },
      { href: '/ai-agents', label: 'Codio AI Agents', desc: '10+ specialized agents' },
      { href: '/network', label: 'CodioNetwork', desc: 'Global service providers' },
    ],
  },
  {
    label: 'Services',
    href: '/it-services',
    children: [
      { href: '/codioops', label: 'CodioOps', desc: 'Managed case management operations' },
      { href: '/hrms-integration', label: 'HRMS Integration', desc: 'Connect to Workday, SAP, ADP & more' },
      { href: '/rfp-response', label: 'RFP Response', desc: 'We draft your technical answers' },
      { href: '/customer-support', label: 'Customer Support', desc: 'Immigration-literate support & onboarding' },
      { href: '/it-services', label: 'IT Services Overview', desc: 'Migration, IT support, audit, managed ops' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { href: '/for-law-firms', label: 'For Immigration Law Firms', desc: 'Solo to enterprise practices' },
      { href: '/for-corporate-teams', label: 'For Corporate Teams', desc: 'In-house mobility & HR' },
    ],
  },
  { href: '/security', label: 'Security' },
  {
    label: 'Company',
    href: '/about',
    children: [
      { href: '/about', label: 'About', desc: 'The next chapter in immigration tech' },
      { href: '/letter-from-the-founder', label: "Founder's Letter", desc: 'From Umesh Vaidyamath' },
      { href: '/blog', label: 'Blog', desc: 'Insights for immigration teams' },
      { href: '/events', label: 'Events', desc: '2026 AILA conferences' },
    ],
  },
  { href: '/contact', label: 'Contact' },
];

/** Flat list - kept for the SEO shell, footer fallbacks, and any flat consumers. */
export const SITE_NAV_LINKS = [
  { href: '/platform', label: 'Platform' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/network', label: 'Network' },
  { href: '/it-services', label: 'IT Services' },
  { href: '/security', label: 'Security' },
  { href: '/about', label: 'About' },
];

export const SIGN_IN_URL = process.env.NEXT_PUBLIC_SIGN_IN_URL || 'https://app.globalcodio.ai/login';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.globalcodio.ai';
export const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'info@globalcodio.ai';
export const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`;
export const AUDIT_URL = '/free-tech-audit';

export const FOOTER_COLUMNS = [
  {
    title: 'Products',
    links: [
      { href: '/platform', label: 'CodioCMS' },
      { href: '/platform', label: 'CodioForms' },
      { href: '/ai-agents', label: 'Codio AI Agents' },
      { href: '/network', label: 'CodioNetwork' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/codioops', label: 'CodioOps' },
      { href: '/hrms-integration', label: 'HRMS Integration' },
      { href: '/rfp-response', label: 'RFP Response Service' },
      { href: '/customer-support', label: 'Customer Support' },
      { href: '/it-services', label: 'Migration & Onboarding' },
      { href: '/it-services', label: 'IT Support Services' },
      { href: '/it-services', label: 'Managed Operations' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { href: '/for-law-firms', label: 'For Immigration Law Firms' },
      { href: '/for-corporate-teams', label: 'For Corporate Teams' },
      { href: '/security', label: 'Security & Compliance' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/letter-from-the-founder', label: 'Letter from the Founder' },
      { href: '/blog', label: 'Blog' },
      { href: '/events', label: 'Events' },
      { href: '/contact', label: 'Contact Us' },
      { href: AUDIT_URL, label: 'Book Free Tech Audit' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: SUPPORT_MAILTO, label: SUPPORT_EMAIL },
      { href: 'https://www.linkedin.com/company/globalcodio', label: 'LinkedIn' },
    ],
  },
];
