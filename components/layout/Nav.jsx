'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { AUDIT_URL, FOOTER_COLUMNS, SIGN_IN_URL, SITE_NAV } from '../../lib/navigation';

const NavItem = ({ href, className, children, onClick }) => {
  const internal = href && href.startsWith('/') && !href.startsWith('//');
  if (internal) return <Link href={href} className={className} onClick={onClick}>{children}</Link>;
  return <a href={href} className={className} onClick={onClick}>{children}</a>;
};

const DropChevron = () => (
  <svg className="navlink-chev" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg className="nav-mobile-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NavGroup = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const closeT = React.useRef(null);
  const pathname = usePathname();

  React.useEffect(() => { setOpen(false); }, [pathname]);

  if (!item.children) return <NavItem className="navlink" href={item.href}>{item.label}</NavItem>;

  const isActive = item.children.some((c) => c.href === pathname) || item.href === pathname;
  const cancelClose = () => closeT.current && clearTimeout(closeT.current);
  const scheduleClose = () => { cancelClose(); closeT.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div className={`nav-group${open ? ' is-open' : ''}`} onMouseEnter={() => { cancelClose(); setOpen(true); }} onMouseLeave={scheduleClose}>
      <button type="button" className={`navlink navlink-trigger${isActive ? ' is-active' : ''}`} aria-haspopup="true" aria-expanded={open} onClick={() => !item.href && setOpen((v) => !v)} onFocus={() => { cancelClose(); setOpen(true); }}>
        {item.label}<DropChevron />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="nav-dropdown" role="menu" initial={{ opacity: 0, y: 8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 6, scale: 0.98 }} transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }} onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
            {item.children.map((c) => (
              <Link key={c.href} href={c.href} className="nav-dropdown-item" role="menuitem">
                <span className="nav-dropdown-item-label">{c.label}</span>
                {c.desc && <span className="nav-dropdown-item-desc">{c.desc}</span>}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNavList = ({ items, onNavigate }) => {
  const [openIdx, setOpenIdx] = React.useState(null);
  return (
    <>
      {items.map((item, i) => {
        if (!item.children) return (
          <NavItem key={item.label} className="nav-mobile-link" href={item.href} onClick={onNavigate}>
            <span>{item.label}</span>
          </NavItem>
        );
        const open = openIdx === i;
        return (
          <div key={item.label} className={`nav-mobile-group${open ? ' is-open' : ''}`}>
            <button type="button" className="nav-mobile-link nav-mobile-grouptrigger" aria-expanded={open} onClick={() => setOpenIdx(open ? null : i)}>
              <span>{item.label}</span><ChevronRight />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div className="nav-mobile-sub" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: [0.2, 0.7, 0.2, 1] }} style={{ overflow: 'hidden' }}>
                  {item.children.map((c) => (
                    <NavItem key={c.href} className="nav-mobile-sublink" href={c.href} onClick={onNavigate}>{c.label}</NavItem>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </>
  );
};

export const Logo = ({ height, style, className, alt = 'GlobalCodio - AI Workforce for Global Immigration', wide }) => (
  <img src="/logo.png" alt={alt} width={wide ? 720 : 180} height={wide ? 120 : (height ?? 30)} draggable={false} className={className}
    style={{ display: 'block', ...(wide ? { width: 'min(88%, 720px)', height: 'auto' } : className?.includes('nav-logo') || className?.includes('nav-mobile-logo') || className?.includes('ft-logo') ? { width: 'auto' } : { height: height ?? 30, width: 'auto' }), ...style }} />
);

const drawerEase = [0.2, 0.7, 0.2, 1];

export const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuToggleRef = React.useRef(null);
  const closeBtnRef = React.useRef(null);

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const closeMenu = React.useCallback(() => setMenuOpen(false), []);
  const openMenu = React.useCallback(() => setMenuOpen(true), []);

  React.useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') closeMenu(); };
    window.addEventListener('keydown', onKey);
    closeBtnRef.current?.focus();
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); menuToggleRef.current?.focus(); };
  }, [menuOpen, closeMenu]);

  const surface = scrolled || menuOpen
    ? { background: 'linear-gradient(180deg,rgba(255,255,255,.82) 0%,rgba(255,255,255,.7) 100%)', backdropFilter: 'blur(24px) saturate(150%) brightness(1.04)', WebkitBackdropFilter: 'blur(24px) saturate(150%) brightness(1.04)', border: '1px solid rgba(255,255,255,.55)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.7),0 10px 36px -16px rgba(11,19,36,.14)' }
    : { background: 'linear-gradient(180deg,rgba(255,255,255,.55) 0%,rgba(255,255,255,.38) 100%)', backdropFilter: 'blur(20px) saturate(140%) brightness(1.03)', WebkitBackdropFilter: 'blur(20px) saturate(140%) brightness(1.03)', border: '1px solid rgba(255,255,255,.45)', boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.55),0 6px 24px -14px rgba(11,19,36,.1)' };

  return (
    <header>
      <div className={`nav-shell${menuOpen ? ' nav-shell-menu-open' : ''}`} style={{ position: 'fixed', top: 'var(--nav-shell-top)', left: 0, right: 0, zIndex: menuOpen ? 200 : 100, display: 'flex', justifyContent: 'center', paddingLeft: 'max(calc(20px * var(--ui-scale)),env(safe-area-inset-left,0px))', paddingRight: 'max(calc(20px * var(--ui-scale)),env(safe-area-inset-right,0px))', pointerEvents: 'none' }}>
        <motion.nav className={`site-nav${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-menu-open' : ''}`} initial={{ y: -18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: drawerEase }} style={{ pointerEvents: 'auto', width: '100%', maxWidth: 'var(--container-max)', borderRadius: 56, transition: 'background .35s,backdrop-filter .35s,-webkit-backdrop-filter .35s,border-color .35s,box-shadow .35s', ...surface }}>
          <div className="nav-inner">
            <Link href="/" className="nav-logo-link" aria-label="GlobalCodio home"><Logo className="nav-logo" /></Link>
            <div className="navlinks navlinks-desktop">{SITE_NAV.map((item) => <NavGroup key={item.label} item={item} />)}</div>
            <div className="nav-actions nav-actions-desktop">
              <Link href={AUDIT_URL} className="btn btn-primary nav-signin nav-audit-cta">Free Tech Audit</Link>
              <a href={SIGN_IN_URL} className="btn btn-surface nav-signin">Sign in</a>
            </div>
            {!menuOpen && (
              <button ref={menuToggleRef} type="button" className="nav-menu-toggle" aria-label="Open menu" aria-expanded={false} aria-controls="nav-mobile-panel" onClick={openMenu}>
                <span className="nav-menu-toggle-lines" aria-hidden="true"><span /><span /><span /></span>
              </button>
            )}
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div id="nav-mobile-panel" className="nav-mobile-panel" role="dialog" aria-modal="true" aria-label="Site navigation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.28, ease: drawerEase }}>
            <header className="nav-mobile-header">
              <Link href="/" className="nav-mobile-logo-link" aria-label="GlobalCodio home" onClick={closeMenu}><Logo className="nav-mobile-logo" /></Link>
              <button ref={closeBtnRef} type="button" className="nav-close-btn" aria-label="Close menu" onClick={closeMenu}>
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" /></svg>
              </button>
            </header>
            <nav className="nav-mobile-list"><MobileNavList items={SITE_NAV} onNavigate={closeMenu} /></nav>
            <div className="nav-mobile-footer">
              <Link href={AUDIT_URL} className="btn btn-primary nav-mobile-cta" onClick={closeMenu}>Book your free tech audit</Link>
              <a href={SIGN_IN_URL} className="btn btn-surface nav-mobile-signin" onClick={closeMenu}>Sign in</a>
            </div>
            <div className="nav-mobile-contact">
              {FOOTER_COLUMNS.find((col) => col.title === 'Contact')?.links.slice(1).map(({ href, label }) => (
                <a key={label} href={href} className="nav-mobile-contact-link" onClick={closeMenu}>{label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
