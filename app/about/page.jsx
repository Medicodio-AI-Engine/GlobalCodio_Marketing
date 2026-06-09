import { PAGE_SCHEMAS } from '../../lib/seo.js';

export const metadata = {
  title: 'About GlobalCodio - Immigration Technology Since 1999',
  description: 'GlobalCodio was founded by Umesh Vaidyamath, who co-founded INSZoom in 1999 - the immigration industry\'s first cloud platform, serving 1,000+ law firms before its 2020 acquisition. GlobalCodio is the next chapter: a fully managed, AI-powered immigration technology operation.',
  keywords: ['GlobalCodio about', 'Umesh Vaidyamath', 'INSZoom founder', 'immigration technology company', 'immigration software company history', 'immigration AI company'],
  openGraph: {
    title: 'About GlobalCodio | Immigration Technology Since 1999',
    description: 'Founded by Umesh Vaidyamath, co-founder of INSZoom. 20+ years of immigration technology experience now powering GlobalCodio\'s AI workforce for immigration firms.',
  },
};

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
