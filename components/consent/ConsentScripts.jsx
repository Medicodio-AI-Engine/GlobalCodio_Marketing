'use client';

/**
 * Loads Google Analytics behind Google Consent Mode v2.
 *
 * - Renders nothing unless NEXT_PUBLIC_GA_ID is configured (dormant by default).
 * - Sets analytics consent DEFAULT to "denied" before the tag fires, so no
 *   analytics storage is used until the visitor opts in.
 * - Re-applies the visitor's stored choice on mount and whenever it changes.
 */

import { useEffect } from 'react';
import Script from 'next/script';
import {
  GA_MEASUREMENT_ID,
  TRACKING_ENABLED,
  CONSENT_CHANGED_EVENT,
  getEffectiveConsent,
  updateGoogleConsent,
} from '../../lib/consent';

export function ConsentScripts() {
  useEffect(() => {
    if (!TRACKING_ENABLED) return;

    // Apply any prior decision once gtag exists, then keep it in sync.
    const sync = () => {
      const c = getEffectiveConsent();
      if (c.decided) updateGoogleConsent(c);
    };
    sync();
    window.addEventListener(CONSENT_CHANGED_EVENT, sync);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, sync);
  }, []);

  if (!TRACKING_ENABLED) return null;

  return (
    <>
      <Script id="gc-consent-bootstrap" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          window.gtag = gtag;
          gtag('js', new Date());
          // Consent Mode v2 - deny analytics storage until the user opts in.
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            wait_for_update: 500
          });
          gtag('config', ${JSON.stringify(GA_MEASUREMENT_ID)}, { anonymize_ip: true });
        `}
      </Script>
      <Script
        id="gc-gtag-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
