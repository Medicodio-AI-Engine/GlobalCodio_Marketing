'use client';
import React, { useState } from 'react';

import { PageHero, Section, CtaBand, SmartLink } from '../../components/ui/PageKit';
import { Calendar, Clock } from 'lucide-react';
import { MapPinIcon, ExternalLinkIcon } from '@animateicons/react/lucide';

/* ─── All events - past + upcoming ─── */
const ALL_EVENTS = [
  /* ── UPCOMING ── */
  {
    id: 'aila-ac26',
    status: 'upcoming',
    badge: 'National',
    badgeTone: 'blue',
    month: 'June 2026',
    name: 'AILA Annual Conference & Webcast',
    dates: 'June 17 – 20, 2026',
    location: 'San Diego, CA',
    venues: ['Marriott Marquis San Diego Marina', 'Manchester Grand Hyatt San Diego'],
    format: 'In-person & online webcast',
    topics: ['Family immigration', 'Business immigration', 'Removal defense'],
    special: [
      'Global Migration Forum - June 15–16',
      'Welcome Taco Party - June 17',
      'Saturday Night Party at the San Diego Zoo',
    ],
    website: 'https://www.aila.org/ac26',
    websiteLabel: 'AILA AC26 Portal',
  },
  {
    id: 'aila-ca26',
    status: 'upcoming',
    badge: 'Regional',
    badgeTone: 'ink',
    month: 'November 2026',
    name: 'AILA California Chapters Conference',
    dates: 'November 5 – 7, 2026',
    location: 'San Francisco, CA',
    venues: ['Hyatt Regency San Francisco Downtown-SOMA'],
    format: 'In-person & online webcast',
    topics: ['Ninth Circuit updates', 'Regional enforcement priorities', 'Compliance panels'],
    special: [],
    website: 'https://www.aila.org/shop/products/view/california-chapters-conference',
    websiteLabel: 'AILA CA Chapters Page',
  },
  /* ── PAST ── */
  {
    id: 'aila-ac25',
    status: 'past',
    badge: 'National',
    badgeTone: 'muted',
    month: 'June 2025',
    name: 'AILA Annual Conference & Webcast',
    dates: 'June 2025',
    location: 'Chicago, IL',
    venues: [],
    format: 'In-person & online webcast',
    topics: [],
    special: [],
    website: 'https://www.aila.org/ac25',
    websiteLabel: 'AILA AC25 Portal',
  },
];

const UPCOMING = ALL_EVENTS.filter(e => e.status === 'upcoming');
// const PAST = ALL_EVENTS.filter(e => e.status === 'past');

function EventCard({ event, index }) {
  const isPast = event.status === 'past';
  return (
    <article
      className={`event-card reveal d${(index % 3) + 1}${isPast ? ' event-card--past' : ''}`}
      aria-labelledby={`event-title-${event.id}`}
    >
      <div className="event-card-top">
        <div className="event-card-badges">
          <span className={`event-badge event-badge--${event.badgeTone}`}>{event.badge}</span>
          {isPast && <span className="event-badge event-badge--past">Past</span>}
          <span className="event-month mono">{event.month}</span>
        </div>
        <h3 className="display event-card-title" id={`event-title-${event.id}`}>{event.name}</h3>
      </div>

      <div className="event-card-meta">
        <div className="event-meta-row">
          <Calendar size={14} strokeWidth={1.75} aria-hidden="true" />
          <span>{event.dates}</span>
        </div>
        <div className="event-meta-row">
          <MapPinIcon size={14} strokeWidth={1.75} aria-hidden="true" />
          <span>{event.location}</span>
        </div>
      </div>

      {!isPast && (
        <>
          <hr className="rule-blue" />
          <div className="event-card-body">
            {event.venues.length > 0 && (
              <div className="event-venues">
                <span className="event-section-label mono">Venue{event.venues.length > 1 ? 's' : ''}</span>
                <ul className="event-venue-list">
                  {event.venues.map(v => <li key={v}>{v}</li>)}
                </ul>
              </div>
            )}
            {event.topics.length > 0 && (
              <div className="event-offerings">
                <span className="event-section-label mono">Topics</span>
                <ul className="event-topic-list">
                  {event.topics.map(t => <li key={t}>{t}</li>)}
                </ul>
              </div>
            )}
            {event.special.length > 0 && (
              <div className="event-special">
                <span className="event-section-label mono">Special Events</span>
                <ul className="event-special-list">
                  {event.special.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
            )}
          </div>
        </>
      )}

      <div className="event-card-footer">
        <SmartLink
          href={event.website}
          className="event-website-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${event.websiteLabel} (opens in a new tab)`}
        >
          <ExternalLinkIcon size={13} strokeWidth={1.75} aria-hidden="true" />
          {event.websiteLabel}
        </SmartLink>
      </div>
    </article>
  );
}

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        lead="Come and meet us"
        emphasis="in person."
        sub="GlobalCodio attends immigration conferences, industry summits, and trade events throughout the year. Find out where we'll be - and come say hello."
        primary={{ href: '/contact', label: 'Schedule a meeting' }}
        secondary={{ href: '/free-tech-audit', label: 'Book a free tech audit' }}
      />

      {/* Upcoming */}
      <Section
        id="upcoming"
        eyebrow="Upcoming Events"
        lead="Where we'll"
        emphasis="be next."
        headAlign="center"
        headInline
        intro="We'll be at the following events in 2026. Reach out before you arrive to schedule time with our team - or find us on the floor."
      >
        <div className="events-grid">
          {UPCOMING.map((ev, i) => <EventCard key={ev.id} event={ev} index={i} />)}
        </div>
      </Section>

      {/* Past */}
      {/*
      <Section
        id="past"
        tone="sec-surface"
        eyebrow="Past Events"
        lead="Where we've"
        emphasis="been."
        headAlign="center"
        headInline
      >
        <div className="events-past-grid reveal" style={{ marginTop: 'var(--space-3xl)' }}>
          {PAST.map((ev, i) => (
            <div key={ev.id} className="event-past-row">
              <div className="event-past-meta">
                <span className="mono event-past-month">{ev.month}</span>
                <div>
                  <p className="event-past-name">{ev.name}</p>
                  <span className="event-past-loc">
                    <MapPinIcon size={11} strokeWidth={1.75} aria-hidden="true" />
                    {ev.location}
                  </span>
                </div>
              </div>
              <SmartLink href={ev.website} className="event-website-link">
                <ExternalLinkIcon size={12} strokeWidth={1.75} aria-hidden="true" />
                {ev.websiteLabel}
              </SmartLink>
            </div>
          ))}
        </div>
      </Section>
      */}

      <CtaBand
        lead="Want to meet our team"
        emphasis="at an event?"
        sub="Book a 30-minute slot before you arrive - or reach out and we'll make time on the floor."
        primary={{ href: '/contact', label: 'Schedule a meeting' }}
        secondary={{ href: '/free-tech-audit', label: 'Book a free tech audit' }}
      />
    </>
  );
}
