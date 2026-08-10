/**
 * Cookie / analytics consent - single source of truth.
 *
 * Model: opt-in (GDPR/ePrivacy). Analytics defaults to DENIED until the user
 * makes a choice. Google Consent Mode v2 is wired so the analytics tag (when
 * configured) only fires after consent.
 *
 * The site runs no advertising / "sale or sharing" of personal information, so
 * there is no CPRA opt-out, GPC, or "Do Not Sell or Share" machinery here.
 *
 * Trackers load ONLY when a measurement ID is present in the environment. With
 * no ID configured the whole framework is dormant: no scripts load, no cookies
 * are set, and the banner does not appear - but a visitor can still pre-set a
 * preference from the footer "Cookie Preferences" control, and it applies the
 * moment analytics is introduced.
 */

export const CONSENT_COOKIE = 'gc_consent';
export const CONSENT_VERSION = 2;
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 365; // 1 year, in seconds

// DOM events the manager and footer control communicate over.
export const CONSENT_CHANGED_EVENT = 'gc:consent-changed';
export const OPEN_PREFERENCES_EVENT = 'gc:open-preferences';

/**
 * Non-essential categories the user can control. Essential cookies (session,
 * security, load-balancing, the consent record itself) are always on and are
 * intentionally not listed here.
 */
export const CATEGORIES = [
  {
    key: 'analytics',
    title: 'Analytics',
    description:
      'Help us understand how visitors use the website (e.g. page views, traffic sources) so we can improve it. Powered by Google Analytics when enabled.',
  },
];

/**
 * Whether analytics is actually configured for this build. NEXT_PUBLIC_* vars
 * are inlined at build time, so this is a static boolean on the client.
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';
export const TRACKING_ENABLED = Boolean(GA_MEASUREMENT_ID);

const isBrowser = () => typeof window !== 'undefined';

/** All non-essential categories denied. */
export function denyAll() {
  return { analytics: false };
}

/** All non-essential categories granted. */
export function grantAll() {
  return { analytics: true };
}

/** Read the stored consent record, or null if the user has not chosen yet. */
export function readStoredConsent() {
  if (!isBrowser()) return null;
  try {
    const match = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${CONSENT_COOKIE}=`));
    if (!match) return null;
    const parsed = JSON.parse(decodeURIComponent(match.split('=').slice(1).join('=')));
    if (!parsed || parsed.v !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * The consent that is in effect right now. `decided` is false until the user
 * has made a choice.
 */
export function getEffectiveConsent() {
  const stored = readStoredConsent();
  return {
    analytics: stored ? !!stored.analytics : false,
    decided: !!stored,
  };
}

/**
 * Persist a consent choice, mirror it to localStorage, push it to Google
 * Consent Mode, and notify listeners.
 */
export function writeConsent({ analytics }) {
  if (!isBrowser()) return;
  const record = {
    v: CONSENT_VERSION,
    analytics: !!analytics,
    ts: Date.now(),
  };

  const value = encodeURIComponent(JSON.stringify(record));
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${CONSENT_MAX_AGE}; SameSite=Lax${secure}`;
  try {
    localStorage.setItem(CONSENT_COOKIE, JSON.stringify(record));
  } catch {
    /* storage may be unavailable (private mode); cookie is the source of truth */
  }

  updateGoogleConsent(record);
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: record }));
}

/**
 * Translate our consent record into a Google Consent Mode v2 update.
 * No-op until a gtag tag is present (i.e. until an ID is configured).
 */
export function updateGoogleConsent({ analytics }) {
  if (!isBrowser() || typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    analytics_storage: analytics ? 'granted' : 'denied',
  });
}
