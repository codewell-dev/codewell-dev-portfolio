'use client'
import { useState } from 'react'
import { useStore } from '@nanostores/react'
import { motion, AnimatePresence } from 'framer-motion'
import { $locale } from '@/store'
import { t } from '@/lib/translations'
import { testimonials } from '@/lib/data'
import { useReveal } from '@/lib/useReveal'

export function Testimonials() {
  const locale = useStore($locale)
  const copy   = t[locale].testimonials
  const [active, setActive] = useState(0)
  const ref = useReveal() as React.RefObject<HTMLElement>
  const current = testimonials[active]

  return (
    <section
      ref={ref}
      id="testimonials"
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

        <div data-reveal data-delay="160" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  className="font-display italic leading-relaxed mb-10"
                  style={{ fontSize: 'clamp(1.3rem,2.5vw,2rem)', color: 'rgba(242,240,235,0.7)', letterSpacing: '-0.01em' }}
                >
                  <span style={{ color: 'var(--mint)', fontSize: '3.5rem', lineHeight: 0, verticalAlign: '-0.8rem', marginRight: '4px', fontStyle: 'normal' }}>"</span>
                  {locale === 'uk' ? current.text_uk : current.text_en}
                </p>

                <div className="flex items-center gap-5">
                  <div
                    className="flex items-center justify-center font-display font-black text-lg"
                    style={{ width: '44px', height: '44px', background: 'var(--lift)', border: '1px solid var(--border)', color: 'var(--mint)', letterSpacing: '-0.02em' }}
                  >
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-base leading-tight" style={{ letterSpacing: '-0.02em' }}>
                      {current.name}
                    </p>
                    <p className="font-mono mt-0.5" style={{ fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.3)' }}>
                      {locale === 'uk' ? current.pos_uk : current.pos_en}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <span key={i} style={{ color: 'var(--mint)', fontSize: '12px' }}>★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-2">
            {testimonials.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="text-left p-5 transition-all duration-300"
                style={{
                  border: '1px solid',
                  borderColor: i === active ? 'rgba(110,231,183,0.3)' : 'var(--border)',
                  background:  i === active ? 'rgba(110,231,183,0.04)' : 'transparent',
                }}
              >
                <p
                  className="font-display font-bold text-sm leading-tight mb-1"
                  style={{ letterSpacing: '-0.02em', color: i === active ? 'var(--cream)' : 'rgba(242,240,235,0.4)' }}
                >
                  {item.name}
                </p>
                <p
                  className="font-mono"
                  style={{ fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: i === active ? 'var(--mint)' : 'rgba(242,240,235,0.2)' }}
                >
                  {locale === 'uk' ? item.pos_uk : item.pos_en}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhyMe() {
  const locale = useStore($locale)
  const copy   = t[locale].why
  const ref    = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      ref={ref}
      className="py-32 md:py-48"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div data-reveal data-delay="0" className="mb-10">
          <span className="label-tag">{copy.label}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <h2
              data-reveal
              data-delay="80"
              className="font-display font-black leading-[0.92]"
              style={{ fontSize: 'clamp(3rem,6vw,6rem)', letterSpacing: '-0.04em', position: 'sticky', top: '6rem' }}
            >
              {copy.h1}
              <br />
              <span style={{ color: 'var(--mint)' }}>{copy.h2}</span>
            </h2>
          </div>

          <div>
            {copy.items.map((item, i) => (
              <div
                key={i}
                data-reveal
                data-delay={i * 80}
                className="grid py-8"
                style={{
                  gridTemplateColumns: '40px 1fr',
                  gap: '20px',
                  borderTop: '1px solid var(--border)',
                }}
              >
                <span
                  className="font-mono pt-0.5"
                  style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--orange)' }}
                >
                  {item.n}
                </span>
                <div>
                  <h3
                    className="font-display font-black leading-none mb-3"
                    style={{ fontSize: 'clamp(1.2rem,2vw,1.6rem)', letterSpacing: '-0.03em' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="hr" />
          </div>
        </div>
      </div>
    </section>
  )
}
