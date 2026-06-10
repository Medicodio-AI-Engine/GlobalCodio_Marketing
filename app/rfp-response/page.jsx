import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/rfp-response',
  title: 'RFP Response Support - Win Corporate Immigration Deals',
  description: 'GlobalCodio drafts immigration law firms\' responses to complex technical, security, and compliance RFP questions - documenting SOC 2 Type II, ISO 27001, GDPR, HIPAA-aligned controls, encryption, disaster recovery, and AI governance. Draft responses typically delivered within 72 hours.',
  keywords: ['immigration RFP response', 'law firm RFP support', 'security questionnaire response', 'corporate immigration RFP', 'SOC 2 RFP answers', 'immigration vendor due diligence'],
});

import RfpResponse from '../../src/views/Rfp';

export default function RfpResponsePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.rfpResponse) }}
      />
      <RfpResponse />
    </>
  );
}
