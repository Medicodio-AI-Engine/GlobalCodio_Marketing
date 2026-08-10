/**
 * First-touch attribution capture (client-side).
 *
 * On the visitor's first page of a session we record where they came from -
 * UTM campaign parameters, the external referrer, and the landing page - into
 * sessionStorage. This is read at contact-form submit time so each lead carries
 * its acquisition source.
 *
 * Notes:
 * - First-touch: we only capture once per session and never overwrite, so the
 *   original entry point is preserved even after the visitor navigates around.
 * - sessionStorage (not a cookie): transient, cleared when the tab closes, and
 *   only ever transmitted when the user actively submits the form. No tracking
 *   cookie, no consent banner required.
 */

const KEY = 'gc_attribution';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

export function captureAttribution() {
  if (typeof window === 'undefined') return;
  try {
    if (sessionStorage.getItem(KEY)) return; // already captured this session

    const params = new URLSearchParams(window.location.search);
    const referrer = document.referrer || '';
    const isInternalReferrer = referrer && referrer.startsWith(window.location.origin);

    const data = {
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || '',
      utmTerm: params.get('utm_term') || '',
      utmContent: params.get('utm_content') || '',
      referrer: isInternalReferrer ? '' : referrer,
      landingPage: window.location.pathname + window.location.search,
    };

    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* storage unavailable (private mode) - attribution is best-effort */
  }
}

export function getAttribution() {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || '{}');
  } catch {
    return {};
  }
}

export { UTM_KEYS };
