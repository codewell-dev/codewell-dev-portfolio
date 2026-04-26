'use client'
import { useStore } from '@nanostores/react'
import { $locale } from '@/store'
import { t } from '@/lib/translations'
import { site } from '@/lib/data'

export default function Footer() {
  const locale = useStore($locale)
  const copy   = t[locale]
  const year   = new Date().getFullYear()

  const links = [
    { label: copy.nav.about,    href: '#about'    },
    { label: copy.nav.projects, href: '#projects' },
    { label: copy.nav.exp,      href: '#exp'      },
    { label: copy.nav.skills,   href: '#skills'   },
    { label: copy.nav.contact,  href: '#contact'  },
  ]

  const socials = [
    { label: 'GitHub',    href: site.github    },
    { label: 'LinkedIn',  href: site.linkedin  },
    { label: 'Instagram', href: site.instagram },
  ]

  return (
    <footer
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '48px 0 32px' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p
              className="font-display font-black text-base mb-3"
              style={{ letterSpacing: '-0.03em' }}
            >
              Vladyslav<span style={{ color: 'var(--mint)' }}>.</span>dev
            </p>
            <p
              className="font-mono"
              style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.25)', lineHeight: 1.7, maxWidth: '220px' }}
            >
              {locale === 'uk'
                ? 'Full Stack розробник. Швидкі, масштабовані застосунки для EU клієнтів.'
                : 'Full Stack developer. Fast, scalable apps for EU clients.'}
            </p>
          </div>

          <div>
            <p
              className="font-mono mb-5"
              style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--mint)' }}
            >
              {locale === 'uk' ? 'Навігація' : 'Navigation'}
            </p>
            <ul className="flex flex-col gap-3">
              {links.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-mono transition-colors duration-200"
                    style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.35)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(242,240,235,0.35)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="font-mono mb-5"
              style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--mint)' }}
            >
              {locale === 'uk' ? 'Контакти' : 'Contact'}
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-mono transition-colors duration-200"
                  style={{ fontSize: '11px', letterSpacing: '0.08em', color: 'rgba(242,240,235,0.35)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(242,240,235,0.35)')}
                >
                  {site.email}
                </a>
              </li>
              {socials.map(s => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono transition-colors duration-200"
                    style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.35)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(242,240,235,0.35)')}
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p
            className="font-mono"
            style={{ fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.2)' }}
          >
            © {year} Vladyslav · codewell — {copy.footer.rights}
          </p>
          <p
            className="font-mono"
            style={{ fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(242,240,235,0.15)' }}
          >
            Next.js · Three.js · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
