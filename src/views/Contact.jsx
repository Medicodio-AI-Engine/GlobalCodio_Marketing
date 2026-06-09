'use client';
import React, { useState, useEffect } from 'react';

import { PageHero, Section, CtaBand } from '../../components/ui/PageKit';
import { HowItWorks } from '../components/MarketingSections.jsx';
import { Navigation, ArrowRight } from 'lucide-react';
import { MailIcon, MapPinIcon, ExternalLinkIcon } from '@animateicons/react/lucide';
import { ICON_PALETTE, ICON_SHADOW_LG } from '../../lib/tokens';

const OFFICES = [
  {
    country: 'USA',
    lines: ['2603 Camino Ramon #200', 'San Ramon, CA 94583'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=2603+Camino+Ramon+%23200+San+Ramon+CA+94583',
  },
  {
    country: 'India',
    lines: ['B-Block, 8th Floor, Brigade Tech Park', '134/1, Whitefield Main Road', 'Bangalore – 560 066'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Brigade+Tech+Park+134%2F1+Whitefield+Main+Road+Bangalore+560066',
  },
];

const HOW_DID_YOU_HEAR = ['LinkedIn', 'Google', 'Email', 'Webinar', 'Conference', 'Referral', 'Other'];

/* ─── Shared input style ─────────────────────────────────────────────────── */
const field = {
  fontFamily: 'var(--body)',
  fontSize: 'calc(15px * var(--ui-scale))',
  color: 'var(--ink)',
  background: '#fff',
  border: '1.5px solid rgba(0,0,0,0.11)',
  borderRadius: 'calc(10px * var(--ui-scale))',
  padding: 'calc(13px * var(--ui-scale)) calc(16px * var(--ui-scale))',
  width: '100%',
  outline: 'none',
  boxSizing: 'border-box',
  lineHeight: 1.5,
  transition: 'border-color .18s, box-shadow .18s',
};

const lbl = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'calc(6px * var(--ui-scale))',
};

const ltext = {
  fontSize: 'calc(11px * var(--ui-scale))',
  fontWeight: 700,
  color: 'var(--ink-2)',
  letterSpacing: '.06em',
  textTransform: 'uppercase',
};

/* ─── Compact info card ──────────────────────────────────────────────────── */
function InfoCard({ icon: Icon, tag, children, action, palIdx = 0 }) {
  const pal = ICON_PALETTE[palIdx % ICON_PALETTE.length];
  return (
    <div
      style={{
        background: '#fff',
        border: '1.5px solid rgba(0,0,0,0.08)',
        borderRadius: 'calc(16px * var(--ui-scale))',
        padding: 'calc(20px * var(--ui-scale)) calc(22px * var(--ui-scale))',
        display: 'flex',
        flexDirection: 'column',
        gap: 'calc(10px * var(--ui-scale))',
      }}
    >
      {/* Tag row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'calc(8px * var(--ui-scale))' }}>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'calc(30px * var(--ui-scale))',
            height: 'calc(30px * var(--ui-scale))',
            borderRadius: 'calc(8px * var(--ui-scale))',
            background: pal.grad,
            color: '#fff',
            boxShadow: pal.shadow,
            flexShrink: 0,
          }}
        >
          <Icon size={14} strokeWidth={2} />
        </span>
        <span style={{ fontSize: 'calc(11px * var(--ui-scale))', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
          {tag}
        </span>
      </div>

      {/* Content */}
      <div style={{ fontSize: 'calc(14px * var(--ui-scale))', color: 'var(--ink-2)', lineHeight: 1.6 }}>
        {children}
      </div>

      {/* Optional action link */}
      {action && (
        <a
          href={action.href}
          target={action.external ? '_blank' : undefined}
          rel={action.external ? 'noopener noreferrer' : undefined}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'calc(5px * var(--ui-scale))',
            fontSize: 'calc(12px * var(--ui-scale))',
            fontWeight: 600,
            color: 'var(--blue)',
            textDecoration: 'none',
            marginTop: 'calc(2px * var(--ui-scale))',
          }}
        >
          {action.label}
          <ArrowRight size={11} strokeWidth={2.5} />
        </a>
      )}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState({ fullName: '', workEmail: '', orgName: '', website: '', howHeard: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // Auto-reset form to initial state after 5 seconds
  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => {
      setSubmitted(false);
      setForm({ fullName: '', workEmail: '', orgName: '', website: '', howHeard: '', message: '' });
    }, 5000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Send failed');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try emailing us directly at info@globalcodio.ai');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        lead="Let's talk about your"
        emphasis="technology operation."
        sub="Whether you're ready to book a demo, have questions about our platform, or want to explore what a fully managed immigration tech operation looks like for your firm - we're here."
        primary={{ href: '#contact-form', label: 'Send us a message' }}
        secondary={{ href: 'mailto:info@globalcodio.ai', label: 'Email us directly' }}
      />

      <Section id="contact-form" eyebrow="Get in Touch" lead="Send us a " emphasis="message." headAlign="center" headInline>
        <div className="contact-layout reveal">

          {/* ── LEFT: form ─────────────────────────────────────────────── */}
          {submitted ? (
            <div
              style={{
                background: '#fff',
                border: '1.5px solid rgba(0,0,0,0.08)',
                borderRadius: 'calc(20px * var(--ui-scale))',
                padding: 'calc(80px * var(--ui-scale))',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-md)',
                textAlign: 'center',
                minHeight: 'calc(500px * var(--ui-scale))',
              }}
            >
              <div
                style={{
                  width: 'calc(56px * var(--ui-scale))',
                  height: 'calc(56px * var(--ui-scale))',
                  borderRadius: '50%',
                  background: ICON_PALETTE[0].grad,
                  boxShadow: ICON_SHADOW_LG,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MailIcon size={22} style={{ color: '#fff' }} />
              </div>
              <h3 className="display" style={{ fontSize: 'var(--text-display-md)', letterSpacing: '-0.02em' }}>
                Message received.
              </h3>
              <p style={{ fontSize: 'var(--text-body)', color: 'var(--ink-3)', lineHeight: 1.6, maxWidth: '42ch' }}>
                Our team will get back to you within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: '#fff',
                border: '1.5px solid rgba(0,0,0,0.08)',
                borderRadius: 'calc(20px * var(--ui-scale))',
                padding: 'calc(48px * var(--ui-scale))',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-xl)',
                height: '100%',
                boxSizing: 'border-box',
              }}
            >
              {/* Form header */}
              <div style={{ paddingBottom: 'var(--space-lg)', borderBottom: '1px solid rgba(0,0,0,0.07)', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-lg)' }}>
                <h3 className="display" style={{ fontSize: 'var(--text-display-sm)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                  Tell us about your firm
                </h3>
                <p style={{ fontSize: 'calc(13px * var(--ui-scale))', color: '#e53e3e', fontWeight: 600, lineHeight: 1.4, flexShrink: 0, textAlign: 'right' }}>
                  Fields marked <span style={{ fontWeight: 800 }}>*</span> are required.
                </p>
              </div>

              {/* Full name + Work email */}
              <div className="contact-form-row">
                <label style={lbl}>
                  <span style={ltext}>Full Name <span style={{ color: 'var(--blue)' }}>*</span></span>
                  <input type="text" required placeholder="Jane Smith" value={form.fullName} onChange={set('fullName')} style={field} />
                </label>
                <label style={lbl}>
                  <span style={ltext}>Work Email <span style={{ color: 'var(--blue)' }}>*</span></span>
                  <input type="email" required placeholder="jane@yourfirm.com" value={form.workEmail} onChange={set('workEmail')} style={field} />
                </label>
              </div>

              {/* Org name + Website */}
              <div className="contact-form-row">
                <label style={lbl}>
                  <span style={ltext}>Organization Name <span style={{ color: 'var(--blue)' }}>*</span></span>
                  <input type="text" required placeholder="Smith Immigration Law" value={form.orgName} onChange={set('orgName')} style={field} />
                </label>
                <label style={lbl}>
                  <span style={ltext}>Company Website <span style={{ color: 'var(--blue)' }}>*</span></span>
                  <input type="url" required placeholder="https://yourfirm.com" value={form.website} onChange={set('website')} style={field} />
                </label>
              </div>

              {/* How did you hear */}
              <label style={lbl}>
                <span style={ltext}>How Did You Hear About Us? <span style={{ color: 'var(--blue)' }}>*</span></span>
                <div style={{ position: 'relative' }}>
                  <select
                    required
                    value={form.howHeard}
                    onChange={set('howHeard')}
                    style={{ ...field, appearance: 'none', cursor: 'pointer', paddingRight: 'calc(40px * var(--ui-scale))' }}
                  >
                    <option value="" disabled>Select an option</option>
                    {HOW_DID_YOU_HEAR.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"
                    style={{ position: 'absolute', right: 'calc(14px * var(--ui-scale))', top: '50%', transform: 'translateY(-50%)', width: 'calc(12px * var(--ui-scale))', height: 'calc(12px * var(--ui-scale))', pointerEvents: 'none', color: 'var(--ink-3)' }}>
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </label>

              {/* Message - grows to fill remaining form height */}
              <label style={{ ...lbl, flex: 1, minHeight: 0 }}>
                <span style={{ ...ltext, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span>Tell Us More</span>
                  <span style={{ fontSize: 'calc(11px * var(--ui-scale))', color: 'var(--ink-3)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                    {form.message.length} / 1000
                  </span>
                </span>
                <textarea
                  maxLength={1000}
                  placeholder="Tell us about your firm, current tech stack, or what you're looking to solve…"
                  value={form.message}
                  onChange={set('message')}
                  style={{ ...field, flex: 1, resize: 'none', lineHeight: 1.65, minHeight: 'calc(120px * var(--ui-scale))' }}
                />
              </label>

              {/* Error message */}
              {error && (
                <p style={{ fontSize: 'calc(13px * var(--ui-scale))', color: '#e53e3e', lineHeight: 1.5, margin: 0 }}>
                  {error}
                </p>
              )}

              {/* Submit row */}
              <div style={{ paddingTop: 'calc(4px * var(--ui-scale))' }}>
                <button type="submit" className="btn btn-primary" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
              </div>
            </form>
          )}

          {/* ── RIGHT: stacked info cards ───────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'calc(12px * var(--ui-scale))', height: '100%' }}>

            {/* USA office */}
            <InfoCard palIdx={0} icon={MapPinIcon} tag="USA Office" action={{ href: OFFICES[0].mapUrl, label: 'Get directions', external: true }}>
              {OFFICES[0].lines.map((l) => <div key={l}>{l}</div>)}
            </InfoCard>

            {/* India office */}
            <InfoCard palIdx={1} icon={MapPinIcon} tag="India Office" action={{ href: OFFICES[1].mapUrl, label: 'Get directions', external: true }}>
              {OFFICES[1].lines.map((l) => <div key={l}>{l}</div>)}
            </InfoCard>

            {/* Email */}
            <InfoCard palIdx={2} icon={MailIcon} tag="Email" action={{ href: 'mailto:info@globalcodio.ai', label: 'info@globalcodio.ai' }}>
              General enquiries, partnerships &amp; client support.
            </InfoCard>

            {/* LinkedIn */}
            <InfoCard palIdx={3} icon={ExternalLinkIcon} tag="LinkedIn" action={{ href: 'https://www.linkedin.com/company/globalcodio', label: 'Visit our page', external: true }}>
              Updates on immigration technology, AI agents, and company news.
            </InfoCard>

            {/* Response time badge - grows to match form height */}
            <div
              style={{
                background: 'var(--blue-soft)',
                borderRadius: 'calc(14px * var(--ui-scale))',
                padding: 'calc(20px * var(--ui-scale)) calc(22px * var(--ui-scale))',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'calc(10px * var(--ui-scale))',
                flex: 1,
              }}
            >
              <div
                style={{
                  width: 'calc(8px * var(--ui-scale))',
                  height: 'calc(8px * var(--ui-scale))',
                  borderRadius: '50%',
                  background: 'var(--blue)',
                  flexShrink: 0,
                  marginTop: 'calc(6px * var(--ui-scale))',
                }}
              />
              <p style={{ fontSize: 'calc(13px * var(--ui-scale))', color: 'var(--blue-ink)', lineHeight: 1.55 }}>
                <strong>Response time:</strong> We aim to reply to all enquiries within one business day.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <HowItWorks />

      <CtaBand
        lead="Ready to see what's possible"
        emphasis="for your firm?"
        primary={{ href: '#contact-form', label: 'Send us a message' }}
        secondary={{ href: 'mailto:info@globalcodio.ai', label: 'Email our team' }}
      />
    </>
  );
}
