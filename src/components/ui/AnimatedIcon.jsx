'use client';
import { useRef, useCallback } from 'react';

/**
 * Returns { iconRef, cardProps } for wiring one animateicons icon to a card's hover.
 *
 * Usage:
 *   const { iconRef, cardProps } = useCardIconRef();
 *   <article className="feature-card" {...cardProps}>
 *     <SomeAnimatedIcon ref={iconRef} isAnimated={false} size={24} />
 *   </article>
 *
 * The icon uses isAnimated={false} so only card hover (not icon hover) triggers it.
 * For standalone icons (not in a card), just render normally with no ref — animateicons
 * handles hover natively.
 */
export function useCardIconRef() {
  const iconRef = useRef(null);
  const onMouseEnter = useCallback(() => { iconRef.current?.startAnimation(); }, []);
  const onMouseLeave = useCallback(() => { iconRef.current?.stopAnimation(); }, []);
  return { iconRef, cardProps: { onMouseEnter, onMouseLeave } };
}
