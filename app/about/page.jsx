import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/about',
  title: 'About Us - Immigration Technology Since 1999',
  description: 'Founded by Umesh Vaidyamath, co-founder of INSZoom (1999), GlobalCodio is a fully managed, AI-powered immigration technology operation for law firms.',
  keywords: ['GlobalCodio about', 'Umesh Vaidyamath', 'INSZoom founder', 'immigration technology company', 'immigration software company history', 'immigration AI company'],
  ogTitle: 'About GlobalCodio | Immigration Technology Since 1999',
  ogDescription: 'Founded by Umesh Vaidyamath, co-founder of INSZoom. 20+ years of immigration technology experience now powering GlobalCodio\'s AI workforce for immigration firms.',
});

import About from '../../src/views/About';

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.about) }}
      />
      <About />
    </>
  );
}
