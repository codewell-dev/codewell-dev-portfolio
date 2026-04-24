'use client'
import { useStore } from '@nanostores/react'
import { $locale } from '@/store'
import { t } from '@/lib/translations'
import { experiences, skills } from '@/lib/data'
import { useReveal } from '@/lib/useReveal'

export function Experience() {
  const locale = useStore($locale)
  const copy   = t[locale].exp
  const ref    = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      ref={ref}
      id="exp"
      className="py-32 md:py-48"
      style={{ background: 'var(--base)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div data-reveal data-delay="0" className="mb-10">
          <span className="label-tag">{copy.label}</span>
        </div>
        <h2
          data-reveal
          data-delay="80"
          className="font-display font-black leading-[0.92] mb-20"
          style={{ fontSize: 'clamp(3rem,6vw,6rem)', letterSpacing: '-0.04em' }}
        >
          {copy.h1}
          <br />
          <span style={{ color: 'var(--mint)' }}>{copy.h2}</span>
        </h2>

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 hidden md:block"
            style={{ left: '148px', width: '1px', background: 'var(--border)' }}
          />

          {experiences.map((exp, i) => {
            const period = locale === 'uk' ? exp.period_uk : exp.period_en
            const desc   = locale === 'uk' ? exp.desc_uk   : exp.desc_en

            return (
              <div
                key={i}
                data-reveal
                data-delay={i * 100}
                className="grid grid-cols-1 md:grid-cols-[148px_1px_1fr] gap-0 pb-14"
              >
                <div className="hidden md:flex flex-col items-end pr-10 pt-1 gap-2">
                  <span
                    className="font-mono text-right"
                    style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: exp.current ? 'var(--mint)' : 'rgba(242,240,235,0.25)' }}
                  >
                    {period}
                  </span>
                  {exp.current && (
                    <span
                      className="font-mono"
                      style={{ fontSize: '8px', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '2px 7px', border: '1px solid rgba(110,231,183,0.3)', color: 'var(--mint)', background: 'rgba(110,231,183,0.06)' }}
                    >
                      {copy.current}
                    </span>
                  )}
                </div>

                <div className="hidden md:flex justify-center pt-2 relative">
                  <div
                    style={{
                      width: '7px', height: '7px', borderRadius: '50%', flexShrink: 0, zIndex: 1,
                      background: exp.current ? 'var(--mint)' : 'var(--lift)',
                      border: `1px solid ${exp.current ? 'var(--mint)' : 'rgba(255,255,255,0.15)'}`,
                      boxShadow: exp.current ? '0 0 12px rgba(110,231,183,0.5)' : 'none',
                      marginLeft: '-3px',
                    }}
                  />
                </div>

                <div className="md:pl-10 border-b" style={{ borderColor: 'var(--border)', paddingBottom: '3rem' }}>
                  <div className="md:hidden mb-3">
                    <span className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: exp.current ? 'var(--mint)' : 'rgba(242,240,235,0.25)' }}>
                      {period}
                    </span>
                  </div>
                  <h3
                    className="font-display font-black leading-none mb-1"
                    style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.03em' }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="font-mono mb-5"
                    style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--orange)' }}
                  >
                    {exp.company}
                  </p>
                  <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'var(--muted)', maxWidth: '560px' }}>
                    {desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const locale = useStore($locale)
  const copy   = t[locale].skills
  const doubled = [...skills, ...skills]

  return (
    <section
      id="skills"
      className="py-24"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', overflow: 'hidden' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 mb-14">
        <span className="label-tag">{copy.label}</span>
        <h2
          className="font-display font-black leading-[0.92] mt-6"
          style={{ fontSize: 'clamp(3rem,6vw,6rem)', letterSpacing: '-0.04em' }}
        >
          {copy.h1}
          <br />
          <span style={{ color: 'var(--mint)' }}>{copy.h2}</span>
        </h2>
      </div>

      <div className="space-y-3">
        {[
          { items: doubled, dir: 'normal',  dur: '30s' },
          { items: [...doubled].reverse(), dir: 'reverse', dur: '40s' },
        ].map((row, ri) => (
          <div
            key={ri}
            style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            <div
              className="flex gap-3 w-max"
              style={{ animation: `${ri === 0 ? 'marquee' : 'marqueeR'} ${row.dur} linear infinite` }}
            >
              {row.items.map((skill, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 font-mono px-5 py-3 transition-all duration-200"
                  style={{
                    fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
                    border: '1px solid var(--border)',
                    color: 'var(--muted)',
                    background: 'var(--lift)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(110,231,183,0.4)'
                    el.style.color = 'var(--mint)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--border)'
                    el.style.color = 'var(--muted)'
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
