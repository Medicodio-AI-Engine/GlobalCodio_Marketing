'use client';

/**
 * Cookie consent banner + preferences modal (analytics only).
 *
 * - Banner auto-appears only when analytics is actually configured AND the
 *   visitor has not yet chosen (opt-in model).
 * - The preferences modal is reachable any time via the footer "Cookie
 *   Preferences" control (OPEN_PREFERENCES_EVENT).
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  CATEGORIES,
  TRACKING_ENABLED,
  OPEN_PREFERENCES_EVENT,
  getEffectiveConsent,
  writeConsent,
  grantAll,
  denyAll,
} from '../../lib/consent';

const PRIVACY_HREF = '/privacy-policy#cookies';

function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className="gc-toggle"
      data-on={checked ? 'true' : 'false'}
    >
      <span className="gc-toggle-knob" />
    </button>
  );
}

export function ConsentManager() {
  const [mounted, setMounted] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false });
  const dialogRef = useRef(null);

  // Initialise from stored consent after mount (avoids hydration mismatch).
  useEffect(() => {
    setMounted(true);
    const c = getEffectiveConsent();
    setPrefs({ analytics: c.analytics });
    if (TRACKING_ENABLED && !c.decided) setBannerOpen(true);
  }, []);

  // Footer "Cookie Preferences" control opens the modal.
  useEffect(() => {
    const onOpen = () => {
      const c = getEffectiveConsent();
      setPrefs({ analytics: c.analytics });
      setBannerOpen(false);
      setModalOpen(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, onOpen);
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

  // ESC closes the modal.
  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => e.key === 'Escape' && closeModal();
    window.addEventListener('keydown', onKey);
    dialogRef.current?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen, closeModal]);

  const persist = useCallback((choice) => {
    writeConsent(choice);
    setBannerOpen(false);
    setModalOpen(false);
  }, []);

  if (!mounted) return null;

  const acceptAll = () => persist(grantAll());
  const rejectAll = () => persist(denyAll());
  const savePrefs = () => persist(prefs);

  return (
    <>
      {/* ── Banner ─────────────────────────────────────────────── */}
      {bannerOpen && (
        <div className="gc-banner" role="region" aria-label="Cookie consent">
          <button
            type="button"
            className="gc-banner-close"
            aria-label="Close and accept necessary cookies only"
            title="Accept necessary cookies only"
            onClick={rejectAll}
          >
            ×
          </button>
          <div className="gc-banner-inner">
            <div className="gc-banner-copy">
              <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>We value your privacy!</strong>
              <p>
                We use essential cookies to run this site. With your consent we also use analytics
                cookies to understand how it’s used and improve it. You can change your choice any
                time via “Cookie Preferences” in the footer. See our{' '}
                <a href={PRIVACY_HREF}>Privacy Policy</a>.
              </p>
            </div>
            <div className="gc-banner-actions">
              <button
                type="button"
                className="btn btn-glass gc-btn-sm"
                onClick={() => {
                  setPrefs(getEffectiveConsent());
                  setBannerOpen(false);
                  setModalOpen(true);
                }}
              >
                Learn more
              </button>
              <button type="button" className="btn btn-outline gc-btn-sm" onClick={rejectAll}>
                Accept Necessary Only
              </button>
              <button type="button" className="btn btn-primary gc-btn-sm" onClick={acceptAll}>
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Preferences modal ──────────────────────────────────── */}
      {modalOpen && (
        <div className="gc-overlay" onClick={closeModal}>
          <div
            className="gc-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gc-modal-title"
            tabIndex={-1}
            ref={dialogRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gc-modal-head">
              <h2 id="gc-modal-title" className="display" style={{ fontSize: 'var(--text-display-md)' }}>
                Privacy preferences
              </h2>
              <button
                type="button"
                className="gc-modal-close"
                aria-label="Close preferences"
                onClick={closeModal}
              >
                ×
              </button>
            </div>

            <p className="gc-modal-intro">
              Manage how this website uses cookies and similar technologies. Essential cookies are
              always on. Read more in our <a href={PRIVACY_HREF}>Privacy Policy</a>.
            </p>

            {!TRACKING_ENABLED && (
              <div className="gc-note gc-note-info">
                This site currently uses <strong>only essential, first-party cookies</strong> — no
                analytics technologies are active. Your selection below will be saved and applied
                automatically if analytics is introduced.
              </div>
            )}

            {/* Essential — always on */}
            <div className="gc-cat">
              <div className="gc-cat-text">
                <div className="gc-cat-title">Strictly necessary</div>
                <p className="gc-cat-desc">
                  Required for the site to function (security, session, load balancing, and storing
                  this consent choice). Always active.
                </p>
              </div>
              <span className="gc-cat-locked">Always on</span>
            </div>

            {/* Configurable categories */}
            {CATEGORIES.map((cat) => (
              <div className="gc-cat" key={cat.key}>
                <div className="gc-cat-text">
                  <div className="gc-cat-title">{cat.title}</div>
                  <p className="gc-cat-desc">{cat.description}</p>
                </div>
                <Toggle
                  label={`${cat.title} cookies`}
                  checked={!!prefs[cat.key]}
                  onChange={(val) => setPrefs((p) => ({ ...p, [cat.key]: val }))}
                />
              </div>
            ))}

            <div className="gc-modal-actions">
              <button type="button" className="btn btn-outline gc-btn-sm" onClick={rejectAll}>
                Reject all
              </button>
              <button type="button" className="btn btn-glass gc-btn-sm" onClick={savePrefs}>
                Save preferences
              </button>
              <button type="button" className="btn btn-primary gc-btn-sm" onClick={acceptAll}>
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
