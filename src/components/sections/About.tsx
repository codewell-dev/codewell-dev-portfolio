'use client'
import { useStore } from '@nanostores/react'
import { $locale } from '@/store'
import { t } from '@/lib/translations'
import { useReveal } from '@/lib/useReveal'

export default function About() {
  const locale = useStore($locale)
  const copy   = t[locale].about
  const ref    = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      ref={ref}
      id="about"
      className="py-32 md:py-48"
      style={{ background: 'var(--base)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div data-reveal data-delay="0" className="mb-16">
          <span className="label-tag">{copy.label}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2
              data-reveal
              data-delay="80"
              className="font-display font-black leading-[0.92] mb-10"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', letterSpacing: '-0.04em' }}
            >
              {copy.h1}
              <br />
              <span style={{ color: 'var(--mint)' }}>{copy.h2}</span>
            </h2>

            <p
              data-reveal
              data-delay="160"
              className="font-display italic leading-snug"
              style={{ fontSize: 'clamp(1.1rem,1.8vw,1.4rem)', color: 'rgba(242,240,235,0.5)', marginBottom: '2rem' }}
            >
              {copy.sub}
            </p>

            <div data-reveal data-delay="220" className="hr mb-8" />

            <p data-reveal data-delay="260" className="text-sm font-light leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
              {copy.p1}
            </p>
            <p data-reveal data-delay="300" className="text-sm font-light leading-relaxed" style={{ color: 'var(--muted)' }}>
              {copy.p2}
            </p>
          </div>

          <div className="flex flex-col justify-between gap-10">
            <blockquote
              data-reveal
              data-delay="160"
              className="relative pl-6"
              style={{ borderLeft: '2px solid var(--mint)' }}
            >
              <p
                className="font-display italic leading-relaxed"
                style={{ fontSize: 'clamp(1rem,1.5vw,1.2rem)', color: 'rgba(242,240,235,0.55)' }}
              >
                {copy.quote}
              </p>
            </blockquote>

            <p data-reveal data-delay="240" className="text-sm font-light leading-relaxed" style={{ color: 'rgba(242,240,235,0.3)' }}>
              {copy.p3}
            </p>

            <div data-reveal data-delay="320" className="grid grid-cols-2 gap-px" style={{ border: '1px solid var(--border)' }}>
              {[
                { val: '3.5+',  label: locale === 'uk' ? 'Роки досвіду'  : 'Years exp'    },
                { val: '10+',   label: locale === 'uk' ? 'Відгуки 5★'    : '5★ reviews'   },
                { val: '80k+',  label: locale === 'uk' ? 'Відвідувань'   : 'Site visits'  },
                { val: 'EU',    label: locale === 'uk' ? 'Дистанційно'   : 'Remote'       },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between p-6"
                  style={{ background: 'var(--surface)', borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}
                >
                  <span
                    className="font-display font-black"
                    style={{ fontSize: '2.2rem', letterSpacing: '-0.04em', color: 'var(--mint)', lineHeight: 1 }}
                  >
                    {s.val}
                  </span>
                  <span
                    className="font-mono mt-2 block"
                    style={{ fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.3)' }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
