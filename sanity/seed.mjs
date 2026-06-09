/**
 * Sanity seed script - migrates all static POSTS_DATA into Sanity.
 *
 * Run once:
 *   node sanity/seed.mjs
 *
 * Requires SANITY_API_TOKEN env var with Editor role.
 * Get one from: https://www.sanity.io/manage → your project → API → Tokens → Add API token → Editor
 */

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-06-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// ── Author ────────────────────────────────────────────────────────────────────
const AUTHOR = {
  _type: 'author',
  _id: 'author-umesh-vaidyamath',
  name: 'Umesh Vaidyamath',
  slug: { _type: 'slug', current: 'umesh-vaidyamath' },
  designation: 'Founder & CEO, GlobalCodio',
  bio: 'Umesh founded INSZoom in 1999 - the immigration industry\'s first cloud-based case management platform, serving over 1,000 law firms worldwide before its acquisition in 2020. He founded GlobalCodio in 2025 to build the technology operation immigration firms have always needed.',
  // image is uploaded separately via the Studio - leave blank for seed
};

// ── Convert legacy content blocks to Portable Text ───────────────────────────
function toPortableText(blocks) {
  return blocks.map((block, i) => {
    if (block.type === 'h2') {
      return {
        _type: 'block',
        _key: `block-${i}`,
        style: 'h2',
        children: [{ _type: 'span', _key: `span-${i}-0`, text: block.text, marks: [] }],
        markDefs: [],
      };
    }
    return {
      _type: 'block',
      _key: `block-${i}`,
      style: 'normal',
      children: [{ _type: 'span', _key: `span-${i}-0`, text: block.text, marks: [] }],
      markDefs: [],
    };
  });
}

// ── Posts ─────────────────────────────────────────────────────────────────────
const POSTS = [
  {
    slug: 'why-immigration-case-management-is-not-ai-native',
    category: 'Immigration Tech',
    title: 'Why your immigration case management software is not AI-native - and why it matters',
    excerpt: 'Most immigration software was built before AI agents existed. Their data models, workflows, and integrations were never designed to support an autonomous workforce. Here is what that means for your firm.',
    publishedAt: '2026-06-03T00:00:00Z',
    readTime: 6,
    content: [
      { type: 'p', text: 'If you are running an immigration law firm today, you are almost certainly using case management software that was designed before anyone seriously believed AI would be doing real work. That is not a criticism - it is simply a fact of timing. The platforms that dominate immigration case management were built in the 2000s and 2010s, when the goal was to digitize paper processes and centralize case records. They did that well.' },
      { type: 'p', text: 'But the world has changed. AI agents can now perform genuine legal work - not just answer FAQ questions, but extract data from foreign documents, auto-fill government forms, track deadlines across thousands of cases, and identify dormant clients worth re-engaging. The question is not whether AI agents are ready. It is whether your platform is.' },
      { type: 'h2', text: 'What "AI-native" actually means' },
      { type: 'p', text: 'An AI-native platform is not one that has had AI features bolted on. It is one where the underlying data model, workflow architecture, and integration layer were designed from the ground up to support autonomous agents working alongside human attorneys.' },
      { type: 'p', text: 'This means case data is structured in a way that agents can read, reason over, and act on - not buried in PDF uploads and free-text notes. It means workflow state is exposed through APIs that agents can poll and update. It means the permission system understands the difference between what a human attorney should approve and what an agent can do autonomously.' },
      { type: 'h2', text: 'The hidden cost of legacy architecture' },
      { type: 'p', text: 'When you try to run AI agents on top of a legacy case management system, you encounter friction at every layer. The data extraction is unreliable because document storage was never designed for machine reading. The form auto-fill breaks because field mappings were built for humans, not pipelines. The deadline agent cannot monitor case state because there is no event stream - only a database that humans query manually.' },
      { type: 'p', text: 'This is why most firms that try to add AI to their existing stack end up with a collection of disconnected tools that require manual coordination. The AI is real, but the plumbing is not there to support it.' },
      { type: 'h2', text: 'What this means for your firm' },
      { type: 'p', text: 'CodioCMS was designed from the ground up to run native AI agents. Every case record, document, questionnaire response, and workflow step is structured for machine-readable access. The AI agents we deploy - intake, document extraction, forms, deadline, client comms, renewal, BD, and government notice monitoring - run inside the same data layer as your attorneys. They do not need to screen-scrape or call external APIs to do their work.' },
      { type: 'p', text: 'If you are evaluating whether to move to a new platform, the right question is not which system has more features. It is which system was built for the world we are in now.' },
    ],
  },
  {
    slug: 'the-200k-sitting-in-your-client-database',
    category: 'Guides',
    title: 'The $200K sitting in your client database - and how to surface it',
    excerpt: 'Most immigration firms have hundreds of dormant clients with expiring visas, green card eligibility, and family petitions that have never been actioned. Here is how a renewal agent changes that.',
    publishedAt: '2026-06-03T01:00:00Z',
    readTime: 5,
    content: [
      { type: 'p', text: 'Every immigration law firm has a graveyard. It is the section of the database where former clients sit after their last matter closed - visa holders whose work authorization has since expired, green card holders who qualified for citizenship three years ago, families who filed one petition and never came back.' },
      { type: 'p', text: 'These clients already trust you. They already paid you once. And the majority of them have unactioned immigration needs sitting in your own records. The problem is that finding them manually - scrolling through closed matters, cross-referencing expiry dates, identifying eligibility - is a full-time job that no one has time for.' },
      { type: 'h2', text: 'What the Renewal Agent does' },
      { type: 'p', text: 'The GlobalCodio Renewal Agent continuously scans your client database against a set of configurable rules. It surfaces cases where a visa is approaching expiry, where a green card holder has now been a permanent resident long enough to apply for citizenship, where a beneficiary on an approved petition has not yet taken the next step, and where a matter closed without the client receiving advice on what comes next.' },
      { type: 'p', text: 'When it finds a match, it does not just flag a record. It drafts an outreach message - personalized to the client, referencing their specific matter - and queues it for attorney review before sending. The attorney approves, the message goes, and the client receives a relevant, timely communication from a firm they already know.' },
      { type: 'h2', text: 'The numbers' },
      { type: 'p', text: 'Firms that run the Renewal Agent consistently recover between $50,000 and $300,000 in incremental annual revenue - entirely from their existing client base, with zero new marketing spend. The range depends on the size of the firm and how long the database has been dormant.' },
      { type: 'p', text: 'The math is straightforward. If you have 500 former clients and 15% of them have an actionable immigration need, and 40% of those convert into new matters, and the average matter is $3,500 - that is $105,000 in revenue that was sitting in your database, invisible, waiting to be found.' },
    ],
  },
  {
    slug: 'what-a-fully-managed-tech-operation-looks-like',
    category: 'Product Updates',
    title: 'What a fully managed technology operation looks like for an immigration law firm',
    excerpt: 'There is a difference between buying software and having someone run your technology. We break down what GlobalCodio actually does after onboarding - and what your team never has to touch again.',
    publishedAt: '2026-06-03T02:00:00Z',
    readTime: 7,
    content: [
      { type: 'p', text: 'When immigration firms evaluate software, they are used to a familiar sequence: demo, contract, implementation, training, go-live, and then you are on your own. The vendor\'s job ends at go-live. Your job - configuring workflows, updating forms, troubleshooting integrations, managing IT, answering staff questions - never ends.' },
      { type: 'p', text: 'GlobalCodio works differently. We are not a software vendor. We are a technology operation. When you partner with us, you are not buying a platform and walking away with it. You are handing us the keys to your entire technology stack and asking us to run it for you.' },
      { type: 'h2', text: 'What we do on day one' },
      { type: 'p', text: 'Before we touch any software, we start with a technology audit. We map your current stack, document your workflows, identify what is configured well and what is not, and build a migration plan. Most firms are surprised by how much of their existing setup was left at defaults - tools that were purchased but never properly configured.' },
      { type: 'p', text: 'Once the audit is complete, we migrate your data into CodioCMS and configure the platform to match how your firm actually works. Not a generic template. Your workflows, your matter types, your document checklists, your client communication cadences.' },
      { type: 'h2', text: 'What we do every day after that' },
      { type: 'p', text: 'After go-live, our team handles: platform updates and patches, AI agent monitoring and tuning, IT helpdesk for your staff, security monitoring, RFP response drafting when corporate clients ask technical questions, and ongoing operations management. Your attorneys open CodioCMS and it works. That is the entire experience from your side.' },
      { type: 'p', text: 'The goal is that your firm has zero technology decisions to make. We make them for you, based on what we know about how immigration firms operate. If a form version changes, we update it. If a new country needs to be added to CodioForms, we build it. If an integration breaks, we fix it.' },
    ],
  },
  {
    slug: 'how-ai-agents-handle-rfps',
    category: 'Case Studies',
    title: 'How AI agents are helping immigration firms win corporate RFPs',
    excerpt: 'Corporate clients are asking harder technical questions than ever before. Firms that can answer them in detail are winning business. Here is how GlobalCodio drafts your RFP responses - and why it works.',
    publishedAt: '2026-06-03T03:00:00Z',
    readTime: 4,
    content: [
      { type: 'p', text: 'Corporate legal departments have changed how they select outside immigration counsel. Where a firm\'s reputation and partner relationships once carried most of the weight, procurement processes now involve detailed RFPs - requests for proposal - that ask immigration firms to answer dozens of technical questions about their data security, platform capabilities, reporting infrastructure, and compliance posture.' },
      { type: 'p', text: 'Most immigration firms struggle to answer these questions well. Not because their technology is inadequate, but because they do not have the technical staff to translate what their platform does into the language that a corporate legal ops team or procurement officer expects.' },
      { type: 'h2', text: 'What an RFP actually asks' },
      { type: 'p', text: 'A typical corporate immigration RFP will ask about SOC 2 compliance, data residency, HIPAA alignment, role-based access control, audit logging, API capabilities, integration with HR systems, reporting on case volumes and cycle times, and the firm\'s disaster recovery posture. These are not questions that most immigration attorneys are prepared to answer in technical detail.' },
      { type: 'h2', text: 'How the RFP Response service works' },
      { type: 'p', text: 'When a client sends us an RFP, our team - the same people who built and run the platform - drafts the technical sections. We write about CodioCMS\'s permission architecture in the language that a CISO expects. We describe CodioForms\'s authority-syncing in terms that a compliance officer can evaluate. We answer questions about our security certifications (SOC 2 Type II, ISO 27001, GDPR, CCPA) accurately and completely.' },
      { type: 'p', text: 'The attorney reviews the draft, approves it, and submits it under the firm\'s name. The client receives a response that is technically accurate, professionally written, and demonstrates that the firm\'s technology infrastructure meets enterprise standards. That is a competitive advantage that most immigration firms cannot replicate on their own.' },
    ],
  },
  {
    slug: 'global-country-support-codioforms',
    category: 'Product Updates',
    title: 'CodioForms now supports global immigration forms and questionnaires across 4 countries',
    excerpt: 'We launched support for USA, Canada, Netherlands, and India - with new countries being added on client demand in days, not quarters. Here is how the forms engine works.',
    publishedAt: '2026-06-03T04:00:00Z',
    readTime: 3,
    content: [
      { type: 'p', text: 'Immigration practice is global, but most forms engines are not. The dominant immigration software platforms were built around USCIS forms - the I-130, I-485, H-1B package, N-400 - and everything else was either a workaround or an afterthought. Firms practicing in Canada, the Netherlands, India, or anywhere outside the US were left managing a patchwork of PDFs, government portals, and manual data re-entry.' },
      { type: 'p', text: 'CodioForms was built to be different from the start. Today we support four countries at launch - the United States, Canada, the Netherlands, and India - with more being added on client demand.' },
      { type: 'h2', text: 'How the forms engine works' },
      { type: 'p', text: 'Every form in CodioForms is tied to a specific authority and version. When USCIS releases a new edition of the I-130, we update the form in CodioForms before the old edition is retired. Your firm never files on a superseded form.' },
      { type: 'p', text: 'All forms are prefilled from CodioCMS case data. If a beneficiary\'s date of birth, passport number, and country of birth are already in the case record, they populate automatically into every form that requires them. The Forms Agent handles this - cross-referencing data across all forms in a package to ensure consistency and flagging any discrepancies before the package is finalized.' },
      { type: 'h2', text: 'Online forms vs. offline forms' },
      { type: 'p', text: 'Online forms are those that are filed digitally on government portals - USCIS\'s myUSCIS, IRCC\'s portal, IND\'s online system. CodioForms supports these by maintaining the correct data mappings for each portal\'s submission format. Offline forms are print-ready PDFs exported from CodioCMS for matters that still require paper submission. Same case data, either path.' },
    ],
  },
  {
    slug: 'document-extraction-vs-document-validation',
    category: 'Immigration Tech',
    title: 'Document extraction vs. document validation - why immigration firms need both',
    excerpt: 'Extracting data from a passport is not the same as validating that the passport is current, complete, and sufficient for the case. We explain why these are two separate agents - and why the distinction matters at filing.',
    publishedAt: '2026-06-03T05:00:00Z',
    readTime: 5,
    content: [
      { type: 'p', text: 'When we tell firms that GlobalCodio has a Document Agent, the natural assumption is that it reads documents and pulls out data. That is partly right. But we actually have two separate document agents - a Document Extraction Agent and a Document Validation Agent - and the distinction between them is not just semantic. It reflects a meaningful difference in what needs to happen for a case to be properly documented.' },
      { type: 'h2', text: 'What extraction does' },
      { type: 'p', text: 'The Document Extraction Agent takes an uploaded document - a passport, a visa, a foreign birth certificate, a police clearance, a medical exam - and extracts structured data from it. Name, date of birth, document number, expiry date, issuing authority, country. It translates foreign-language documents across 40+ languages. It classifies each file by document type and maps extracted fields directly into the CodioCMS case record.' },
      { type: 'p', text: 'Extraction is about getting data out of unstructured documents and into a format the system can use. It is fast, automated, and replaces what used to be a paralegal reading a document and typing information into a form.' },
      { type: 'h2', text: 'What validation does' },
      { type: 'p', text: 'The Document Validation Agent takes the extracted data and answers a different question: is this document sufficient for the case? It checks whether a passport expires within 6 months of the intended travel date. It verifies that a police clearance covers the required period. It flags a birth certificate that is missing an apostille for a country that requires one. It identifies gaps in the document checklist - items that have been requested but not yet received.' },
      { type: 'p', text: 'Validation is about case readiness. It is the check that happens after extraction, ensuring that what was submitted is not just readable but sufficient. In immigration practice, the cost of filing with an incomplete or invalid document is significant - RFEs, delays, and in some cases denials. Validation is what prevents that.' },
      { type: 'h2', text: 'Why both matter at filing' },
      { type: 'p', text: 'A firm that only has extraction can read documents quickly but still misses that a passport will expire before the visa validity period ends. A firm that only has validation can check requirements but cannot automate the data entry from documents. You need both - extraction to get the data, validation to assess it - working together inside the same case workflow.' },
    ],
  },
];

// ── Run ───────────────────────────────────────────────────────────────────────
async function seed() {
  console.log('Seeding Sanity...\n');

  // 1. Upsert author (no image - upload via Studio)
  await client.createOrReplace(AUTHOR);
  console.log('✓ Author: Umesh Vaidyamath');

  // 2. Upsert each post
  for (const post of POSTS) {
    const doc = {
      _type: 'blogPost',
      _id: `blogPost-${post.slug}`,
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      category: post.category,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      readTime: post.readTime,
      author: { _type: 'reference', _ref: 'author-umesh-vaidyamath' },
      body: toPortableText(post.content),
    };
    await client.createOrReplace(doc);
    console.log(`✓ Post: ${post.title.slice(0, 60)}...`);
  }

  const studioUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/studio`;
  console.log('\nDone! Open the Studio to add author image and featured images per post.');
  console.log(`Studio: ${studioUrl}`);
}

seed().catch(err => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
