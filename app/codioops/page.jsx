import { PAGE_SCHEMAS, buildPageMetadata } from '../../lib/seo.js';

export const metadata = buildPageMetadata({
  path: '/codioops',
  title: 'CodioOps - Managed Case Management Operations | GlobalCodio',
  description: 'CodioOps is the dedicated team that configures, optimizes, and continuously tunes your CodioCMS platform to match exactly how your firm operates. Bundled with every GlobalCodio engagement.',
  keywords: ['case management operations', 'immigration case management implementation', 'immigration law firm operations services', 'CodioOps', 'managed case management services'],
});

import CodioOps from '../../src/views/CodioOps';

export default function CodioOpsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMAS.codioOps) }}
      />
      <CodioOps />
    </>
  );
}
