'use client';
import React from 'react';

import { PageHero, Section, CtaBand, SmartLink } from '../../components/ui/PageKit';
import { EventCardGallery } from '../components/EventCardGallery';
import { sortEventsForDisplay } from '../../lib/events.js';
import { Calendar } from 'lucide-react';
import { MapPinIcon, ExternalLinkIcon } from '@animateicons/react/lucide';

function EventCard({ event, index }) {
  const isPast = event.status === 'past';
  return (
    <article
      className={`event-card reveal d${(index % 3) + 1}${isPast ? ' event-card--past' : ''}`}
      aria-labelledby={`event-title-${event.id}`}
    >
      {isPast && (
        <span className="event-card-past-tag mono" aria-label="Past event">Past</span>
      )}
      <div className="event-card-top">
        <div className="event-card-badges">
          <span className={`event-badge event-badge--${event.badgeTone}`}>{event.badge}</span>
          <span className="event-month mono">{event.month}</span>
        </div>
        <h3 className="display event-card-title" id={`event-title-${event.id}`}>{event.name}</h3>
      </div>

      <div className="event-card-meta">
        <div className="event-meta-row">
          <Calendar size={14} strokeWidth={1.75} aria-hidden="true" />
          {event.booth && (
            <span className="event-meta-booth mono">{event.booth}</span>
          )}
          <span>{event.dates}</span>
        </div>
        <div className="event-meta-row">
          <MapPinIcon size={14} strokeWidth={1.75} aria-hidden="true" />
          <span>{event.location}</span>
        </div>
      </div>

      {(event.venues.length > 0 || event.topics.length > 0 || event.special.length > 0 || event.images?.length > 0) && (
        <>
          <hr className="rule-blue" />
          <div className={`event-card-body${event.images?.length ? ' event-card-body--with-gallery' : ''}`}>
            <div className="event-card-body-content">
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
            {event.images?.length > 0 && (
              <EventCardGallery images={event.images} eventName={event.name} />
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

export default function Events({ sanityEvents }) {
  const EVENTS = sortEventsForDisplay(sanityEvents ?? []);

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

      <Section
        id="events"
        eyebrow="Events"
        lead="Where we'll"
        emphasis="be next."
        headAlign="center"
        headInline
        intro="Upcoming conferences appear first, followed by events we've already attended."
      >
        {EVENTS.length > 0 ? (
          <div className="events-grid">
            {EVENTS.map((ev, i) => <EventCard key={ev.id} event={ev} index={i} />)}
          </div>
        ) : (
          <div className="events-empty reveal" role="status">
            <span className="events-empty-icon" aria-hidden="true">
              <Calendar size={26} strokeWidth={1.5} />
            </span>
            <p className="events-empty-title display">No events on the calendar just yet</p>
            <p className="events-empty-sub">
              We don&rsquo;t have any events scheduled right now, but new dates land here often.
              In the meantime, reach out and we&rsquo;ll set up a time to talk.
            </p>
            <SmartLink href="/contact" className="btn btn-primary events-empty-cta">
              Schedule a meeting
            </SmartLink>
          </div>
        )}
      </Section>

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
