'use client';
import { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { motion, AnimatePresence } from 'framer-motion';
import { $locale, $menuOpen, setLocale, toggleMenu } from '@/store';
import { t } from '@/lib/translations';
import { site } from '@/lib/data';
import { setCursorHover } from '@/store';

const NAV_IDS = ['about', 'projects', 'exp', 'skills', 'contact'] as const;

export default function Header() {
  const locale = useStore($locale);
  const open = useStore($menuOpen);
  const copy = t[locale];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const navLinks = NAV_IDS.map((id) => ({
    href: `#${id}`,
    label: copy.nav[id],
  }));

  const hoverOn = () => setCursorHover(true);
  const hoverOff = () => setCursorHover(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(12,13,15,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.05)'
            : '1px solid transparent',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <a
            href="#home"
            className="font-display font-black text-[15px] tracking-[-0.03em]"
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
          >
            codewell<span style={{ color: 'var(--mint)' }}>-</span>dev
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[10px] tracking-[0.18em] uppercase transition-colors duration-200"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={(e) => {
                  hoverOn();
                  (e.currentTarget as HTMLElement).style.color = 'var(--cream)';
                }}
                onMouseLeave={(e) => {
                  hoverOff();
                  (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div
              className="hidden md:flex"
              style={{ border: '1px solid var(--border)' }}
            >
              {(['en', 'uk'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  onMouseEnter={hoverOn}
                  onMouseLeave={hoverOff}
                  className="font-mono text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 transition-all duration-200"
                  style={{
                    background: locale === l ? 'var(--mint)' : 'transparent',
                    color: locale === l ? 'var(--base)' : 'var(--muted)',
                  }}
                >
                  {l === 'en' ? 'EN' : 'UA'}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary hidden md:inline-flex"
              style={{ padding: '8px 18px', fontSize: '10px' }}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              {copy.navCta}
            </a>

            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              onClick={toggleMenu}
              aria-label="menu"
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block h-px bg-cream transition-all duration-300"
                  style={{
                    width: i === 1 && open ? '12px' : '20px',
                    opacity: i === 1 && open ? 0 : 1,
                    transform:
                      open && i === 0
                        ? 'rotate(45deg) translate(3.5px,3.5px)'
                        : open && i === 2
                        ? 'rotate(-45deg) translate(3.5px,-3.5px)'
                        : 'none',
                    background: 'var(--cream)',
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-8 md:hidden"
            style={{ background: 'var(--base)' }}
          >
            <nav className="flex flex-col gap-6 mb-14">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={toggleMenu}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display font-black leading-none"
                  style={{
                    fontSize: 'clamp(2.2rem, 10vw, 4rem)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-8">
              <div style={{ border: '1px solid var(--border)' }}>
                {(['en', 'uk'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLocale(l)}
                    className="font-mono text-[10px] tracking-[0.12em] uppercase px-3 py-2 transition-all"
                    style={{
                      background: locale === l ? 'var(--mint)' : 'transparent',
                      color: locale === l ? 'var(--base)' : 'var(--muted)',
                    }}
                  >
                    {l === 'en' ? 'EN' : 'UA'}
                  </button>
                ))}
              </div>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.16em] uppercase"
                style={{ color: 'var(--muted)' }}
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
