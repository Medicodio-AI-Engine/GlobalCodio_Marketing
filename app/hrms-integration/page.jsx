import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/hrms-integration',
  title: 'HRMS Integration - Connect Your Clients\' HR Systems | GlobalCodio',
  description: 'GlobalCodio connects your case management platform directly to Workday, SAP SuccessFactors, BambooHR, ADP, and Rippling. Meet the integration standard corporate clients now require in RFPs.',
  keywords: ['HRMS integration immigration', 'Workday immigration integration', 'HR system case management', 'corporate immigration RFP integration', 'immigration software HR sync'],
  ogTitle: 'HRMS Integration for Immigration Law Firms | GlobalCodio',
  ogDescription: 'Win corporate accounts by meeting the HR integration requirement that decides RFPs. GlobalCodio connects your case management to Workday, SAP SuccessFactors, BambooHR, ADP, and more.',
});

import HrmsIntegration from '../../src/views/HrmsIntegration';

export default function HrmsIntegrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.hrmsIntegration) }}
      />
      <HrmsIntegration />
    </>
  );
}
