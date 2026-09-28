// Backfill seoTitle / seoDescription / relatedPages on every blog post.
// Run from the repo: node --env-file=.env sanity/backfill-blog-seo.mjs [--apply]
import { createClient } from '@sanity/client';
import { RELATED_PAGES } from '../lib/relatedPages.js';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-06-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const P = (seoTitle, seoDescription, relatedPages) => ({ seoTitle, seoDescription, relatedPages });

const DATA = {
  'blogPost-eb-cases-skip-the-affidavit-of-support-not-public-charge': P(
    'EB Cases Skip the I-864, Not Public Charge',
    'USCIS applies the public charge ground to EB-1, EB-2, EB-3 and EB-5 adjustment applicants and their derivatives - the I-864 exemption does not change that.',
    ['/for-corporate-teams', '/ai-agents', '/platform']),
  'blogPost-duration-of-status-postponed-but-the-forms-shipped-anyway': P(
    'Duration of Status Postponed, New Forms Ship',
    'A judge postponed the Duration of Status rule on September 14, but the new I-539 and I-765 editions still take effect September 15. Be ready for both.',
    ['/platform', '/ai-agents', '/for-law-firms']),
  'blogPost-i-485-september-18-rejection-traps-public-charge': P(
    'I-485 Rejection Traps on September 18',
    'From September 18 USCIS rejects the 01/20/25 I-485, the new edition cannot be filed early, and a wider public charge standard applies. Filing date matters.',
    ['/platform', '/ai-agents', '/for-law-firms']),
  'blogPost-ready-for-the-september-15-form-editions-cutover': P(
    'CodioForms Ready for the Sept 15 Form Cutover',
    'USCIS rejects older I-539 and I-765 editions on September 15 with no grace period. All six affected artifacts are configured and date-gated in CodioForms.',
    ['/platform', '/codioops', '/for-law-firms']),
  'blogPost-uscis-mandatory-e-filing-sixty-days-notice-is-the-new-clock': P(
    'Mandatory USCIS E-Filing: 22 Forms, 60 Days',
    "A DHS interim final rule lets USCIS make any form online-only with 60 days' notice, and 22 forms already qualify. Why that is a re-tooling window.",
    ['/platform', '/it-services', '/for-law-firms']),
  'blogPost-duration-of-status-corporate-immigration-two-adjudications-one-start-date': P(
    'End of Duration of Status for Corporate Teams',
    'From September 15, 2026 an OPT or STEM OPT hire can need two USCIS approvals before a start date - and the controlling date is not on the EAD.',
    ['/for-corporate-teams', '/ai-agents', '/hrms-integration']),
  'blogPost-airport-enforcement-when-you-cannot-prove-status-in-the-moment': P(
    'ICE Airport Detentions: Proving Status Fast',
    'ICE enforcement now covers at least 15 airports, with 800+ arrests. Many detained travelers are mid-process. The real risk is proving status in the moment.',
    ['/ai-agents', '/platform', '/for-law-firms']),
  'blogPost-end-of-duration-of-status-every-f-j-date-is-now-a-deadline': P(
    'End of Duration of Status: F and J Deadlines',
    'DHS is replacing Duration of Status with fixed admission dates for F, J and I visa holders. Every I-94, extension and grace period becomes a hard deadline.',
    ['/ai-agents', '/platform', '/for-corporate-teams']),
  'blogPost-audit-proof-h1b-perm-files-before-the-subpoena': P(
    'Audit-Proof Your H-1B and PERM Files Now',
    "The Department of Labor's H-1B and PERM fraud probe raises one question: what would an investigator find in your files? Audit yourself first.",
    ['/platform', '/security', '/for-corporate-teams']),
  'blogPost-h1b-perm-fraud-investigation-your-records-are-your-defense': P(
    'H-1B Fraud Probe: Records Are Your Defense',
    'The Department of Labor has opened a major H-1B and PERM fraud probe, with dozens of subpoenas out. Complete, consistent, auditable records hold up.',
    ['/platform', '/for-law-firms', '/for-corporate-teams']),
  'blogPost-adjustment-of-status-discretion-may-2026-memo': P(
    'Adjustment of Status Discretion: The May Memo',
    'USCIS\'s May 21 memo reframed adjustment of status as "discretion and administrative grace." The defense is a complete, well-documented file with no gaps.',
    ['/ai-agents', '/platform', '/for-law-firms']),
  'blogPost-immigration-firms-adopting-ai-the-wrong-way': P(
    'Immigration Firms Are Adopting AI the Wrong Way',
    'AILA 2026 was full of AI tools. Bolting AI onto an old workflow just speeds up a broken process. The firms that win redesign the practice around AI.',
    ['/ai-agents', '/it-services', '/for-law-firms']),
  'blogPost-h1b-fy2027-weighted-selection-employers': P(
    'H-1B FY2027 Weighted Selection for Employers',
    'FY2027 ran as a wage-weighted H-1B selection, and a $100,000 supplemental fee changed the math again. The cap is now a modeled, monitored workflow.',
    ['/for-corporate-teams', '/platform', '/ai-agents']),
  'blogPost-what-ac26-signaled-about-immigration-practice': P(
    'What AC26 Confirmed About Immigration Practice',
    "AILA's Annual Conference showed immigration leads every practice area in AI adoption, yet firms have no operation underneath it. How to close that gap.",
    ['/ai-agents', '/it-services', '/for-law-firms']),
  'blogPost-document-extraction-vs-document-validation': P(
    'Document Extraction vs. Document Validation',
    'Extracting data from a passport is not the same as validating that it is current, complete and sufficient for the case. Why immigration firms need both.',
    ['/ai-agents', '/platform']),
  'blogPost-global-country-support-codioforms': P(
    'CodioForms Adds Global Immigration Forms',
    'CodioForms now supports immigration forms and questionnaires for the USA, Canada, the Netherlands and India, with new countries added in days on request.',
    ['/platform', '/network', '/for-corporate-teams']),
  'blogPost-how-ai-agents-handle-rfps': P(
    'How AI Agents Help Immigration Firms Win RFPs',
    'Corporate clients ask harder technical questions than ever. Firms that answer in detail win. How GlobalCodio drafts your RFP responses, and why it works.',
    ['/rfp-response', '/ai-agents', '/security']),
  'blogPost-what-a-fully-managed-tech-operation-looks-like': P(
    'What a Fully Managed Tech Operation Looks Like',
    'Buying software is not the same as having someone run your technology. What GlobalCodio does after onboarding, and what your team never touches again.',
    ['/it-services', '/codioops', '/for-law-firms']),
  'blogPost-the-200k-sitting-in-your-client-database': P(
    'The $200K Sitting in Your Client Database',
    'Most immigration firms have hundreds of dormant clients with expiring visas, green card eligibility and open family petitions. How a renewal agent helps.',
    ['/ai-agents', '/for-law-firms']),
  'blogPost-why-immigration-case-management-is-not-ai-native': P(
    "Why Your Case Management Isn't AI-Native",
    'Most immigration software was built before AI agents existed. Its data models, workflows and integrations were never designed for an autonomous workforce.',
    ['/platform', '/ai-agents', '/it-services']),
};

const apply = process.argv.includes('--apply');
let bad = 0;
const ids = await client.fetch('*[_type=="blogPost"]._id');
for (const id of ids) if (!DATA[id]) { console.log('MISSING DATA FOR', id); bad++; }

for (const [id, d] of Object.entries(DATA)) {
  const problems = [];
  if (!ids.includes(id)) problems.push('doc not found');
  if (d.seoTitle.length > 47) problems.push(`title ${d.seoTitle.length}`);
  if (d.seoDescription.length > 158 || d.seoDescription.length < 120) problems.push(`desc ${d.seoDescription.length}`);
  if (/[—‘’“”]/.test(d.seoTitle + d.seoDescription)) problems.push('em-dash/curly quote');
  if (d.relatedPages.some(p => !RELATED_PAGES[p])) problems.push('unknown related page');
  if (problems.length) bad++;
  console.log(`${String(d.seoTitle.length).padStart(2)} | ${d.seoDescription.length} | ${id.replace(/^(drafts\.)?blogPost-/, '$1')}${problems.length ? '  <-- ' + problems.join(', ') : ''}`);
}
if (bad) { console.error(`\n${bad} problem(s) - nothing written.`); process.exit(1); }
if (!apply) { console.log('\nDry run OK. Re-run with --apply to write.'); process.exit(0); }

const tx = client.transaction();
for (const [id, d] of Object.entries(DATA)) tx.patch(id, p => p.set(d));
const res = await tx.commit();
console.log(`\n✓ Patched ${res.documentIds.length} documents in one transaction.`);
