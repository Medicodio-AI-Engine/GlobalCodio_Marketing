'use client';
import React, { useEffect, useState } from 'react';
import { SmartLink } from '../../components/ui/PageKit';

/* Timings for the entrance choreography (ms). */
const APPEAR_DELAY = 1200;  // wait after page load before the pill pops in
const EXPAND_DELAY = 1000;  // small pill holds for 1s, then expands to full width

// The banner always links to the full events page.
const EVENTS_HREF = '/events';

/**
 * Slim, dismissible announcement bar shown above the hero on the home page.
 * Tells visitors which event GlobalCodio is attending next and links to /events.
 *
 * `event` is the soonest upcoming event from Sanity (getNextEvent), passed down
 * from the home page. When no upcoming event exists, the banner renders nothing.
 *
 * Dismissal is intentionally in-memory only - closing it hides the banner for the
 * current view, but it reappears on every reload or whenever the visitor returns
 * to the page. Nothing is persisted to storage.
 */
export function EventBanner({ event }) {
  const [visible, setVisible] = useState(false);   // pops in after APPEAR_DELAY
  const [expanded, setExpanded] = useState(false); // small pill -> full width
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Phase 1: after 3s, mount the small pill (with its pop-in animation).
    const appearTimer = setTimeout(() => setVisible(true), APPEAR_DELAY);
    return () => clearTimeout(appearTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    // Phase 2: once the pill has popped in, expand it out to full width.
    const expandTimer = setTimeout(() => setExpanded(true), EXPAND_DELAY);
    return () => clearTimeout(expandTimer);
  }, [visible]);

  // Only render when there is a real upcoming event and the entrance has fired.
  if (!event || !visible || dismissed) return null;

  const dismiss = () => setDismissed(true);

  return (
    <aside
      className={`event-banner${expanded ? ' is-expanded' : ''}`}
      aria-label="Upcoming event announcement"
    >
      {/* Phase 1 - compact pill: pin icon + "Event Reminder" only. */}
      <span className="event-banner-compact" aria-hidden={expanded}>
        <span className="event-banner-pin event-banner-pin--ping">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </span>
        <span className="event-banner-compact-label">Event Reminder</span>
      </span>

      {/* Phase 2 - full content, revealed once expanded. */}
      <SmartLink href={EVENTS_HREF} className="event-banner-link">
        <span className="event-banner-copy">
          <span className="event-banner-text">
            <span className="event-banner-pin" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <strong>Meet us in person at {event.name}</strong>
          </span>
          <span className="event-banner-sep event-banner-sep--meta" aria-hidden="true">·</span>
          <span className="event-banner-meta-line">
            {event.booth && (
              <>
                <span className="event-banner-booth">{event.booth}</span>
                <span className="event-banner-sep" aria-hidden="true">·</span>
              </>
            )}
            <span className="event-banner-meta event-banner-dates">{event.dates}</span>
            <span className="event-banner-sep event-banner-sep--location" aria-hidden="true">·</span>
            <span className="event-banner-meta event-banner-location">{event.location}</span>
          </span>
        </span>
        <span className="event-banner-actions">
          <span className="event-banner-cta">
            <span>Events</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </span>
        </span>
      </SmartLink>
      <button
        type="button"
        className="event-banner-close"
        onClick={dismiss}
        aria-label="Dismiss event announcement"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M4 4l8 8M12 4l-8 8" />
        </svg>
      </button>
    </aside>
  );
}
