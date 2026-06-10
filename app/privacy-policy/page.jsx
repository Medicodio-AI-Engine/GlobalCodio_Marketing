import { buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/privacy-policy',
  title: 'Privacy Policy',
  description: 'How GlobalCodio collects, uses, protects, and retains personal data across its immigration technology platform and services, including GDPR, UK GDPR, and CCPA/CPRA commitments.',
});

import PrivacyPolicy from '../../src/views/PrivacyPolicy';
export default PrivacyPolicy;
