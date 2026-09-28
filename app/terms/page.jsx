import { buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/terms',
  title: 'Terms of Use',
  description: 'The terms that govern your use of the GlobalCodio website, including acceptable use, intellectual property, disclaimers, and limitations of liability.',
});

import Terms from '../../src/views/Terms';
export default Terms;
