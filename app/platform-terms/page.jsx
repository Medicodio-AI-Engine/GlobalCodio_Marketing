import { buildPageMetadata } from '../../lib/seo.js';
import { getPlatformDoc } from '../../lib/platformLegal.js';
import PlatformLegalDoc from '../../src/views/PlatformLegalDoc';

/* Literal for Next's static segment-config analysis. Keep in step with
   PLATFORM_LEGAL_REVALIDATE in lib/platformLegal.js. */
export const revalidate = 3600;

export const metadata = buildPageMetadata({
  path: '/platform-terms',
  title: 'Platform Terms of Service',
  description:
    'The terms of service governing access to and use of the GlobalCodio application, including accounts, fees, data ownership, disclaimers, limitation of liability, and dispute resolution. Published by Medicodio Inc.',
});

export default async function PlatformTermsPage() {
  const doc = await getPlatformDoc('terms');
  return <PlatformLegalDoc doc={doc} />;
}
