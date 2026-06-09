'use client';
import React, { useState } from 'react';

import { Section, SmartLink } from '../../components/ui/PageKit';
import { ICON_GRAD } from '../../lib/tokens';
import { motion } from 'framer-motion';
import { urlFor } from '../../lib/sanity';

const CATEGORIES = ['All', 'Product Updates', 'Immigration Tech', 'Guides', 'Case Studies'];

const AUTHOR = {
  name: 'Umesh Vaidyamath',
  designation: 'Founder & CEO, GlobalCodio',
  image: '/assets/founder.png',
};

/* ── Placeholder posts - swap for real data when ready ─── */
export const POSTS_DATA = [
  {
    slug: 'why-immigration-case-management-is-not-ai-native',
    category: 'Immigration Tech',
    title: 'Why your immigration case management software is not AI-native - and why it matters',
    excerpt: 'Most immigration software was built before AI agents existed. Their data models, workflows, and integrations were never designed to support an autonomous workforce. Here is what that means for your firm.',
    date: 'June 3, 2026',
    readTime: 6,
    image: null,
    author: AUTHOR,
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
    date: 'June 3, 2026',
    readTime: 5,
    image: null,
    author: AUTHOR,
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
    date: 'June 3, 2026',
    readTime: 7,
    image: null,
    author: AUTHOR,
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
    date: 'June 3, 2026',
    readTime: 4,
    image: null,
    author: AUTHOR,
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
    date: 'June 3, 2026',
    readTime: 3,
    image: null,
    author: AUTHOR,
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
    date: 'June 3, 2026',
    readTime: 5,
    image: null,
    author: AUTHOR,
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

const POSTS = POSTS_DATA;

/* ── Ghost card skeleton ──────────────────────────────── */
const GhostCard = ({ large = false }) => (
  <div style={{
    background: 'var(--surface)',
    border: '1.5px dashed var(--line-2)',
    borderRadius: 'calc(16px * var(--ui-scale))',
    overflow: 'hidden',
    opacity: 0.5,
    ...(large ? { gridColumn: '1 / -1' } : {}),
  }}>
    <div style={{
      height: large ? 'calc(260px * var(--ui-scale))' : 'calc(160px * var(--ui-scale))',
      background: 'linear-gradient(135deg, var(--line) 0%, var(--surface) 100%)',
    }} />
    <div style={{ padding: 'calc(24px * var(--ui-scale))' }}>
      <div style={{ width: '30%', height: 'calc(20px * var(--ui-scale))', background: 'var(--line-2)', borderRadius: 4, marginBottom: 'calc(12px * var(--ui-scale))' }} />
      <div style={{ width: '85%', height: 'calc(24px * var(--ui-scale))', background: 'var(--line-2)', borderRadius: 4, marginBottom: 'calc(8px * var(--ui-scale))' }} />
      <div style={{ width: '60%', height: 'calc(24px * var(--ui-scale))', background: 'var(--line-2)', borderRadius: 4, marginBottom: 'calc(16px * var(--ui-scale))' }} />
      <div style={{ width: '100%', height: 'calc(14px * var(--ui-scale))', background: 'var(--line-2)', borderRadius: 4, marginBottom: 'calc(6px * var(--ui-scale))' }} />
      <div style={{ width: '75%', height: 'calc(14px * var(--ui-scale))', background: 'var(--line-2)', borderRadius: 4 }} />
    </div>
  </div>
);

/* ── Resolve image URL from either Sanity asset or plain string ─── */
function resolveImageUrl(img, width = 800) {
  if (!img) return null;
  if (typeof img === 'string') return img;
  try { return urlFor(img).width(width).auto('format').url(); } catch { return null; }
}

/* ── Real post card ───────────────────────────────────── */
const PostCard = ({ post, featured = false }) => {
  const imageUrl = resolveImageUrl(post.featuredImage ?? post.image, featured ? 1200 : 600);
  const authorImageUrl = resolveImageUrl(post.author?.image, 80);
  const rawDate = post.date ?? post.publishedAt ?? '';
  const parsedDate = rawDate ? new Date(rawDate) : null;
  const formattedDate = parsedDate && !isNaN(parsedDate)
    ? parsedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : rawDate;

  return (
    <SmartLink
      href={`/blog/${post.slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#fff',
        border: '1.5px solid var(--line-2)',
        borderRadius: 'calc(16px * var(--ui-scale))',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'border-color .18s, transform .18s, box-shadow .18s',
        ...(featured ? { gridColumn: '1 / -1' } : {}),
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(calc(-3px * var(--ui-scale)))'; e.currentTarget.style.borderColor = 'var(--line-blue)'; e.currentTarget.style.boxShadow = 'var(--shadow-blue-lift)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--line-2)'; e.currentTarget.style.boxShadow = ''; }}
    >
      {imageUrl && (
        <div style={{
          height: featured ? 'calc(320px * var(--ui-scale))' : 'calc(180px * var(--ui-scale))',
          background: `url(${imageUrl}) center/cover no-repeat`,
          flexShrink: 0,
        }} />
      )}
      <div style={{ padding: 'calc(24px * var(--ui-scale))', display: 'flex', flexDirection: 'column', gap: 'calc(10px * var(--ui-scale))', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'calc(10px * var(--ui-scale))' }}>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: 'calc(10px * var(--ui-scale))',
            letterSpacing: '.08em', textTransform: 'uppercase',
            color: 'var(--blue)', fontWeight: 700,
            padding: 'calc(3px * var(--ui-scale)) calc(10px * var(--ui-scale))',
            background: 'var(--blue-soft)', borderRadius: 999,
          }}>
            {post.category}
          </span>
          <span style={{ fontSize: 'calc(12px * var(--ui-scale))', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
            {post.readTime} min read
          </span>
        </div>
        <h3 className="display" style={{
          fontSize: featured ? 'calc(28px * var(--ui-scale))' : 'calc(20px * var(--ui-scale))',
          letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--ink)',
          margin: 0,
        }}>
          {post.title}
        </h3>
        <p style={{ fontSize: 'calc(14px * var(--ui-scale))', color: 'var(--ink-3)', lineHeight: 1.65, margin: 0 }}>
          {post.excerpt}
        </p>
        <div style={{ marginTop: 'auto', paddingTop: 'calc(14px * var(--ui-scale))', borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'calc(8px * var(--ui-scale))' }}>
            {authorImageUrl ? (
              <img src={authorImageUrl} alt={post.author?.name ?? ''} width={28} height={28}
                style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
            ) : (
              <span style={{
                width: 'calc(28px * var(--ui-scale))', height: 'calc(28px * var(--ui-scale))',
                borderRadius: '50%', flexShrink: 0,
                background: ICON_GRAD,
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 'calc(10px * var(--ui-scale))', fontWeight: 700,
              }}>
                {(post.author?.name ?? 'A').split(' ').map(w => w[0]).slice(0, 2).join('')}
              </span>
            )}
            <div>
              <div style={{ fontSize: 'calc(12px * var(--ui-scale))', fontWeight: 600, color: 'var(--ink-2)', lineHeight: 1.2 }}>{post.author?.name}</div>
              <div style={{ fontSize: 'calc(10px * var(--ui-scale))', color: 'var(--muted)', lineHeight: 1.2 }}>{formattedDate}</div>
            </div>
          </div>
          <span style={{ fontSize: 'calc(13px * var(--ui-scale))', color: 'var(--blue)', fontWeight: 600, flexShrink: 0 }}>Read →</span>
        </div>
      </div>
    </SmartLink>
  );
};

export default function Blog({ sanityPosts }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Use live Sanity posts when available; fall back to static data
  const allPosts = (sanityPosts && sanityPosts.length > 0) ? sanityPosts : POSTS;
  const filtered = allPosts.filter(p => activeCategory === 'All' || p.category === activeCategory);
  const isEmpty = filtered.length === 0;

  return (
    <>
      {/* Page header */}
      <section style={{
        position: 'relative', isolation: 'isolate', overflow: 'hidden',
        background: 'linear-gradient(180deg, #f4f8ff 0%, #fbfcff 60%, #ffffff 100%)',
        padding: 'calc(var(--nav-bar-total) + var(--space-3xl)) 0 calc(var(--space-3xl))',
      }}>
        <div className="hero-aurora" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.5 }}>
            <div className="hero-eyebrow-row" style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
              <span className="pill hero-eyebrow-pill">
                <span className="hero-eyebrow-dot" aria-hidden="true" />
                Blog
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="display type-display-hero"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.65, delay: 0.08 }}
            style={{ textAlign: 'center', lineHeight: 1.1, marginBottom: 'var(--space-md)' }}
          >
            <span style={{ display: 'block' }}>Ideas for</span>
            <em className="text-grad-blue" style={{ display: 'block', fontStyle: 'italic' }}>immigration teams.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14, filter: 'blur(7px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.65, delay: 0.16 }}
            style={{ textAlign: 'center', fontSize: 'var(--text-body)', color: 'var(--ink-3)', maxWidth: '52ch', margin: '0 auto var(--space-2xl)', lineHeight: 1.6 }}
          >
            Insights on AI in immigration workflows, technology operations, and what it takes to build a modern immigration practice.
          </motion.p>

          {/* Category filter tabs */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(5px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ delay: 0.26 }}
            style={{ display: 'flex', justifyContent: 'center', gap: 'calc(6px * var(--ui-scale))', flexWrap: 'wrap' }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: 'var(--body)',
                    fontSize: 'calc(13px * var(--ui-scale))',
                    fontWeight: isActive ? 600 : 400,
                    padding: 'calc(7px * var(--ui-scale)) calc(16px * var(--ui-scale))',
                    borderRadius: 999,
                    border: `1.5px solid ${isActive ? 'var(--blue)' : 'var(--line-2)'}`,
                    background: isActive ? 'var(--blue)' : '#fff',
                    color: isActive ? '#fff' : 'var(--ink-3)',
                    cursor: 'pointer',
                    transition: 'all .18s',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Posts grid */}
      <Section id="posts" style={{ paddingTop: 'var(--space-2xl)' }}>
        {isEmpty ? (
          /* ── Empty state ── */
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3xl)' }}>
            {/* Ghost skeleton grid */}
            <div className="blog-posts-grid" style={{ width: '100%' }}>
              <GhostCard large />
              <GhostCard />
              <GhostCard />
              <GhostCard />
            </div>

            {/* Subscribe card */}
            <div style={{
              background: 'linear-gradient(145deg, var(--blue) 0%, var(--blue-ink) 100%)',
              borderRadius: 'calc(20px * var(--ui-scale))',
              padding: 'calc(52px * var(--ui-scale)) calc(64px * var(--ui-scale))',
              textAlign: 'center',
              maxWidth: 'calc(640px * var(--ui-scale))',
              width: '100%',
              boxShadow: '0 0 60px rgba(25,80,198,.2)',
            }}>
              <div className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.14em', color: 'rgba(255,255,255,.55)', marginBottom: 'calc(14px * var(--ui-scale))' }}>
                COMING SOON
              </div>
              <h2 className="display" style={{ fontSize: 'calc(32px * var(--ui-scale))', letterSpacing: '-0.02em', lineHeight: 1.15, color: '#fff', marginBottom: 'calc(12px * var(--ui-scale))' }}>
                The blog is on its way.
              </h2>
              <p style={{ fontSize: 'calc(16px * var(--ui-scale))', color: 'rgba(255,255,255,.7)', lineHeight: 1.6, maxWidth: '42ch', margin: '0 auto calc(28px * var(--ui-scale))' }}>
                Subscribe to get our first post on AI in immigration workflows - straight to your inbox.
              </p>
              {subscribed ? (
                <p className="mono" style={{ fontSize: 'calc(13px * var(--ui-scale))', color: 'rgba(255,255,255,.9)', letterSpacing: '.04em' }}>
                  ✓ You're on the list.
                </p>
              ) : (
                <form
                  onSubmit={e => { e.preventDefault(); if (email) setSubscribed(true); }}
                  style={{ display: 'flex', gap: 'calc(8px * var(--ui-scale))', maxWidth: 'calc(420px * var(--ui-scale))', margin: '0 auto' }}
                >
                  <input
                    type="email"
                    required
                    placeholder="your@firm.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{
                      flex: 1,
                      fontFamily: 'var(--body)',
                      fontSize: 'calc(14px * var(--ui-scale))',
                      padding: 'calc(12px * var(--ui-scale)) calc(16px * var(--ui-scale))',
                      borderRadius: 'calc(10px * var(--ui-scale))',
                      border: '1.5px solid rgba(255,255,255,.25)',
                      background: 'rgba(255,255,255,.12)',
                      color: '#fff',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                  <button type="submit" className="btn btn-surface" style={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
                    Notify me
                  </button>
                </form>
              )}
            </div>
          </div>
        ) : (
          /* ── Posts grid ── */
          <div className="blog-posts-grid">
            {filtered.map((post, i) => (
              <div key={post.slug} className={`reveal d${(i % 3) + 1}`}>
                <PostCard post={post} featured={i === 0} />
              </div>
            ))}
          </div>
        )}

        {/* ── Subscribe strip - full width, low height ── */}
        <div className="reveal d1" style={{
          marginTop: 'var(--space-xl)',
          background: 'linear-gradient(90deg, var(--blue) 0%, var(--blue-ink) 100%)',
          borderRadius: 'calc(16px * var(--ui-scale))',
          padding: 'calc(24px * var(--ui-scale)) calc(32px * var(--ui-scale))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-2xl)',
          boxShadow: '0 0 40px rgba(25,80,198,.18)',
          flexWrap: 'wrap',
        }}>
          <div>
            <div className="mono" style={{ fontSize: 'calc(10px * var(--ui-scale))', letterSpacing: '.12em', color: 'rgba(255,255,255,.5)', marginBottom: 'calc(4px * var(--ui-scale))' }}>
              STAY IN THE LOOP
            </div>
            <div className="display" style={{ fontSize: 'calc(20px * var(--ui-scale))', letterSpacing: '-0.01em', color: '#fff', fontWeight: 700 }}>
              Get new posts in your inbox.
            </div>
          </div>
          {subscribed ? (
            <p className="mono" style={{ fontSize: 'calc(13px * var(--ui-scale))', color: 'rgba(255,255,255,.9)', letterSpacing: '.04em', flexShrink: 0 }}>
              ✓ You're on the list.
            </p>
          ) : (
            <form
              onSubmit={e => { e.preventDefault(); if (email) setSubscribed(true); }}
              style={{ display: 'flex', gap: 'calc(8px * var(--ui-scale))', flexShrink: 0 }}
            >
              <input
                type="email"
                required
                placeholder="your@firm.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="blog-email-input"
                style={{
                  fontFamily: 'var(--body)',
                  fontSize: 'calc(14px * var(--ui-scale))',
                  padding: 'calc(10px * var(--ui-scale)) calc(16px * var(--ui-scale))',
                  borderRadius: 'calc(14px * var(--ui-scale))',
                  border: '1.5px solid rgba(255,255,255,.25)',
                  background: 'rgba(255,255,255,.12)',
                  color: '#fff',
                  outline: 'none',
                  width: 'calc(308px * var(--ui-scale))',
                  boxSizing: 'border-box',
                }}
              />
              <button type="submit" className="btn btn-surface" style={{ whiteSpace: 'nowrap' }}>
                Notify me
              </button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
