'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { urlFor } from '../../lib/sanity';

const ROTATE_MS = 3000;

function resolveImageUrl(image, width = 800) {
  if (!image?.asset) return null;
  try {
    return urlFor(image).width(width).auto('format').url();
  } catch {
    return null;
  }
}

/**
 * Event card photo gallery. A single image renders statically; multiple images
 * cross-fade every 3s with dot indicators.
 */
export function EventCardGallery({ images, eventName }) {
  const slides = useMemo(
    () =>
      (images ?? [])
        .map((image, index) => {
          const src = resolveImageUrl(image);
          if (!src) return null;
          return {
            key: image.asset?._ref ?? image._key ?? `slide-${index}`,
            src,
            alt: image.alt || `${eventName} photo ${index + 1}`,
          };
        })
        .filter(Boolean),
    [images, eventName],
  );

  const [active, setActive] = useState(0);
  const count = slides.length;

  useEffect(() => {
    setActive(0);
  }, [count]);

  useEffect(() => {
    if (count <= 1) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, ROTATE_MS);

    return () => clearInterval(timer);
  }, [count]);

  if (!count) return null;

  return (
    <div className="event-card-gallery" aria-label={`${eventName} photos`}>
      <div className="event-card-gallery-track">
        {slides.map((slide, index) => (
          <img
            key={slide.key}
            src={slide.src}
            alt={slide.alt}
            className={`event-card-gallery-slide${index === active ? ' is-active' : ''}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>

      {count > 1 && (
        <div className="event-card-gallery-dots" role="tablist" aria-label="Gallery slides">
          {slides.map((slide, index) => (
            <button
              key={slide.key}
              type="button"
              role="tab"
              className={`event-card-gallery-dot${index === active ? ' is-active' : ''}`}
              aria-selected={index === active}
              aria-label={`Show photo ${index + 1} of ${count}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
