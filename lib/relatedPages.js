/* Product pages a blog post can point readers to. Shared by the Sanity schema
   (the `relatedPages` picker) and BlogPost.jsx (the "Where GlobalCodio fits"
   block), so the two can never drift apart. Every blog post links to 2-3 of
   these - Google discovers and weights commercial pages through those links. */
export const RELATED_PAGES = {
  '/platform': { label: 'CodioCMS & CodioForms', blurb: 'Case management with native AI agents and 180+ USCIS forms.' },
  '/ai-agents': { label: 'Codio AI Agents', blurb: '10 agents for intake, documents, forms, deadlines and renewals.' },
  '/for-law-firms': { label: 'For Law Firms', blurb: 'The complete managed technology operation for immigration firms.' },
  '/for-corporate-teams': { label: 'For Corporate Teams', blurb: 'Visa pipeline dashboards and health scores for mobility teams.' },
  '/codioops': { label: 'CodioOps', blurb: 'The team that configures and tunes your platform to how you work.' },
  '/network': { label: 'CodioNetwork', blurb: 'Certified translators, physicians, apostille services and more.' },
  '/it-services': { label: 'Managed Services', blurb: 'Implementation, migration and IT operations, run for you.' },
  '/rfp-response': { label: 'RFP Response Support', blurb: 'Answers to technical, security and compliance RFP questions.' },
  '/security': { label: 'Security & Compliance', blurb: 'SOC 2 Type II examined, GDPR and HIPAA-ready.' },
  '/hrms-integration': { label: 'HRMS Integration', blurb: 'Connect Workday, SAP SuccessFactors, ADP and more.' },
};

/** Used when a post has no `relatedPages` set. */
export const DEFAULT_RELATED_PAGES = ['/platform', '/ai-agents', '/for-law-firms'];

export function resolveRelatedPages(paths) {
  const picked = (paths || []).filter(p => RELATED_PAGES[p]).slice(0, 3);
  return (picked.length ? picked : DEFAULT_RELATED_PAGES).map(path => ({ path, ...RELATED_PAGES[path] }));
}
