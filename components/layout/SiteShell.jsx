'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Nav } from './Nav';
import { Footer } from './Footer';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ limitCallbacks: true });

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const delayForReveal = (el) => {
  if (el.classList.contains('d5')) return 0.24;
  if (el.classList.contains('d4')) return 0.2;
  if (el.classList.contains('d3')) return 0.15;
  if (el.classList.contains('d2')) return 0.1;
  if (el.classList.contains('d1')) return 0.05;
  return 0;
};

export function SiteShell({ children }) {
  const pathname = usePathname();
  const [editMode, setEditMode] = useState(false);
  const [tweaks, setTweaks] = useState(
    typeof window !== 'undefined' ? (window.__TWEAKS__ || { accent: 'blue' }) : { accent: 'blue' }
  );

  // Scroll reveals per route
  useEffect(() => {
    if (reducedMotion()) {
      document.querySelectorAll('section:not(.hero-full-viewport):not(.page-hero) .reveal').forEach((el) => {
        el.classList.add('is-in');
      });
      return;
    }
    const reveals = gsap.utils.toArray(
      'section:not(.hero-full-viewport):not(.page-hero):not(.logo-strip-section) .reveal'
    );
    /* Blur amount scales with element importance (d1 = headlines, no class = body) */
    const blurFor = (el) => {
      if (el.classList.contains('d1')) return 10;
      if (el.classList.contains('d2')) return 7;
      if (el.classList.contains('d3')) return 5;
      return 6;
    };

    // Trigger point: element enters view when its top crosses this % of the viewport.
    // Using 98% means nearly any visible pixel fires the animation - eliminates the
    // "blank bottom" gap where the element is technically on screen but hasn't triggered yet.
    const TRIGGER_PCT = 98;

    const ctx = gsap.context(() => {
      reveals.forEach((el) => {
        const blur = blurFor(el);
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;

        // Already in view on load (top half of viewport) - animate immediately, no ScrollTrigger
        if (rect.top < vh * 0.75 && rect.bottom > 0) {
          gsap.fromTo(el,
            { y: 16, opacity: 0, filter: `blur(${blur}px)` },
            {
              y: 0, opacity: 1, filter: 'blur(0px)',
              duration: 0.7, delay: 0.04 + delayForReveal(el),
              ease: 'power3.out', clearProps: 'translate,rotate,scale,transform,filter',
              onComplete: () => el.classList.add('is-in'),
            }
          );
          return;
        }

        // Below fold - fire as soon as any part of the element enters the viewport
        gsap.fromTo(el,
          { y: 22, opacity: 0, filter: `blur(${blur}px)` },
          {
            y: 0, opacity: 1, filter: 'blur(0px)',
            duration: 0.75, delay: delayForReveal(el),
            ease: 'power3.out', clearProps: 'translate,rotate,scale,transform,filter',
            scrollTrigger: {
              trigger: el,
              // "top N%" = element top hits N% down from viewport top.
              // 98% fires the moment the element's top edge is almost at the bottom of screen.
              start: `top ${TRIGGER_PCT}%`,
              toggleActions: 'play none none none',
              onEnter: () => el.classList.add('is-in'),
            },
          }
        );
      });
    });

    // Immediate reveal pass: catch anything already visible that GSAP missed
    // (e.g. elements mid-viewport on a short page, or after fast navigation)
    const revealVisible = () => {
      reveals.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0 && !el.classList.contains('is-in')) {
          el.classList.add('is-in');
          gsap.set(el, { opacity: 1, clearProps: 'translate,rotate,scale,transform,filter' });
        }
      });
    };

    // Run immediately, then again after layout settles (fonts, images)
    revealVisible();
    const failsafe = window.setTimeout(revealVisible, 600);
    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => { window.clearTimeout(failsafe); ctx.revert(); };
  }, [pathname, tweaks]);

  // Accent token swap
  useEffect(() => {
    const r = document.documentElement;
    const accents = {
      blue: { a: '#1950C6', h: '#4a7ee0', i: '#0e266c', s: '#e8eefc' },
      deep: { a: '#0e266c', h: '#1950C6', i: '#071640', s: '#dce3f2' },
      ink:  { a: '#0a0b0d', h: '#282b31', i: '#000',    s: '#eef0f3' },
    }[tweaks.accent || 'blue'];
    r.style.setProperty('--blue', accents.a);
    r.style.setProperty('--blue-hover', accents.h);
    r.style.setProperty('--blue-ink', accents.i);
    r.style.setProperty('--blue-soft', accents.s);
  }, [tweaks.accent]);

  // Lenis smooth scroll
  useEffect(() => {
    if (reducedMotion()) return;
    // Prevent the browser from restoring scroll position on refresh - we always
    // want to land at the top. Without this, the browser fires its own scroll
    // restore after Lenis initialises, jumping mid-page.
    if (typeof window !== 'undefined') {
      history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
    const lenis = new Lenis({
      lerp: 0.12, smoothWheel: true, wheelMultiplier: 1,
      touchMultiplier: 1.1, syncTouch: true, syncTouchLerp: 0.1, autoRaf: false,
      prevent: (node) => node?.classList?.contains('nav-mobile-panel'),
    });
    window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -88, duration: 1.35, easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)) });
    };
    document.addEventListener('click', onAnchorClick);
    const onTick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    const onLoad = () => { lenis.resize(); requestAnimationFrame(() => ScrollTrigger.refresh()); };
    window.addEventListener('load', onLoad);
    document.fonts?.ready?.then(() => requestAnimationFrame(() => ScrollTrigger.refresh()));
    requestAnimationFrame(() => { lenis.resize(); ScrollTrigger.refresh(); });
    return () => {
      document.removeEventListener('click', onAnchorClick);
      window.removeEventListener('load', onLoad);
      gsap.ticker.remove(onTick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  // Reset scroll on route change
  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true });
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname]);

  // Edit mode bridge
  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data?.type) return;
      if (e.data.type === '__activate_edit_mode') setEditMode(true);
      if (e.data.type === '__deactivate_edit_mode') setEditMode(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
