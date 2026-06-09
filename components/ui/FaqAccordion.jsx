'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionEyebrow } from './PageKit';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * FaqAccordion - matches the HowItWorks accordion style from MarketingSections.
 *
 * Props:
 *   items   – array of { q: string, a: string, meta?: string[] }
 *   eyebrow – optional eyebrow label (default "Common Questions")
 *   lead    – heading first line
 *   emphasis – heading second line (italic blue)
 *   id      – section id attribute
 *   tone    – optional tone class ('sec-surface' | undefined)
 */
export function FaqAccordion({
  items = [],
  eyebrow = "Common Questions",
  lead = "Straight answers,",
  emphasis = "before you commit.",
  id = "faq",
  tone,
}) {
  const [open, setOpen] = useState(0);

  const toggle = (i) => {
    setOpen((prev) => (prev === i ? null : i));
    window.setTimeout(() => ScrollTrigger.refresh(), 620);
  };

  return (
    <section
      id={id}
      className={`sec${tone ? ` ${tone}` : ''}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 'var(--space-7xl)',
            alignItems: 'start',
          }}
          className="how-grid"
        >
          {/* Left - heading (sticky so it stays visible while scrolling long answer lists) */}
          <div className="reveal faq-accordion-left">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h2
              id={`${id}-heading`}
              className="display type-display-lg"
              style={{ marginBottom: 'var(--space-xl)' }}
            >
              <span style={{ display: 'block' }}>{lead}</span>
              <em
                style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)' }}
              >
                {emphasis}
              </em>
            </h2>
          </div>

          {/* Right - accordion */}
          <div role="list">
            {items.map((item, i) => (
              <div
                key={i}
                role="listitem"
                className="reveal"
                style={{
                  borderBottom:
                    i < items.length - 1 ? '1px solid var(--line)' : 'none',
                  padding: 'calc(22px * var(--ui-scale)) 0',
                }}
              >
                <button
                  type="button"
                  id={`${id}-q-${i}`}
                  aria-expanded={open === i}
                  aria-controls={`${id}-a-${i}`}
                  onClick={() => toggle(i)}
                  style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'baseline',
                    gap: 'var(--space-xl)',
                    textAlign: 'left',
                    padding: 0,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    font: 'inherit',
                    color: 'inherit',
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: 'calc(14px * var(--ui-scale))',
                      color: open === i ? 'var(--blue)' : 'var(--muted)',
                      letterSpacing: '.06em',
                      transition: 'color 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                      flexShrink: 0,
                    }}
                  >
                    /{String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="display type-display-md"
                    style={{
                      flex: 1,
                      color: open === i ? 'var(--ink)' : 'var(--muted)',
                      transition: 'color 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    {item.q}
                  </span>
                  <motion.span
                    aria-hidden
                    className="faq-toggle-icon"
                    style={{
                      width: 'calc(32px * var(--ui-scale))',
                      height: 'calc(32px * var(--ui-scale))',
                      borderRadius: '50%',
                      border: '1px solid var(--line-blue)',
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                    }}
                    animate={{
                      backgroundColor: open === i ? 'var(--blue)' : '#ffffff',
                      color: open === i ? '#ffffff' : 'var(--blue)',
                    }}
                    transition={{
                      backgroundColor: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                      color: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                    }}
                  >
                    <motion.svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      style={{ display: 'block' }}
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 320,
                        damping: 26,
                        mass: 0.75,
                      }}
                    >
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" />
                    </motion.svg>
                  </motion.span>
                </button>

                <motion.div
                  id={`${id}-a-${i}`}
                  role="region"
                  aria-labelledby={`${id}-q-${i}`}
                  initial={false}
                  animate={{ height: open === i ? 'auto' : 0 }}
                  transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <motion.div
                    style={{
                      padding:
                        'calc(24px * var(--ui-scale)) 0 calc(4px * var(--ui-scale)) calc(42px * var(--ui-scale))',
                      maxWidth: '62ch',
                    }}
                    initial={false}
                    animate={{
                      opacity: open === i ? 1 : 0,
                      y: open === i ? 0 : -6,
                    }}
                    transition={{
                      duration: open === i ? 0.42 : 0.22,
                      ease: [0.22, 1, 0.36, 1],
                      delay: open === i ? 0.06 : 0,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 'calc(16px * var(--ui-scale))',
                        color: 'var(--ink-3)',
                        lineHeight: 1.65,
                        marginBottom: item.meta?.length
                          ? 'calc(18px * var(--ui-scale))'
                          : 0,
                      }}
                    >
                      {item.a}
                    </p>
                    {item.meta?.length > 0 && (
                      <div
                        style={{
                          display: 'flex',
                          gap: 'calc(10px * var(--ui-scale))',
                          flexWrap: 'wrap',
                        }}
                      >
                        {item.meta.map((m) => (
                          <span
                            key={m}
                            className="mono"
                            style={{
                              fontSize: 'calc(11.5px * var(--ui-scale))',
                              padding:
                                'calc(5px * var(--ui-scale)) calc(10px * var(--ui-scale))',
                              background: '#fff',
                              border: '1px solid var(--line)',
                              borderRadius: 56,
                              color: 'var(--ink-3)',
                              letterSpacing: '.02em',
                            }}
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
