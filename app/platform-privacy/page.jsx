import { buildPageMetadata } from '../../lib/seo.js';
import { getPlatformDoc } from '../../lib/platformLegal.js';
import PlatformLegalDoc from '../../src/views/PlatformLegalDoc';

/* Must be a literal - Next statically analyses segment config, so it cannot
   read PLATFORM_LEGAL_REVALIDATE. Keep in step with that constant. */
export const revalidate = 3600;

export const metadata = buildPageMetadata({
  path: '/platform-privacy',
  title: 'Platform Privacy Policy',
  description: 'How the GlobalCodio application collects, uses, shares, retains and protects account data, immigration case data, documents and integrations. By Medicodio Inc.',
});

export default async function PlatformPrivacyPage() {
  const doc = await getPlatformDoc('privacy');
  return <PlatformLegalDoc doc={doc} />;
}
