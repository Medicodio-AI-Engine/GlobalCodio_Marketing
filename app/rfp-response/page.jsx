import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/rfp-response',
  title: 'RFP Response Support for Immigration Firms',
  description: 'We draft answers to technical, security and compliance RFP questions: SOC 2 Type II, ISO 27001, GDPR, encryption, DR and AI governance. Usually in 72 hours.',
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
