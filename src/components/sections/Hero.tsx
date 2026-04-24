'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useStore } from '@nanostores/react'
import { $locale } from '@/store'
import { t } from '@/lib/translations'

const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), { ssr: false })

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 32 },
  animate:   { opacity: 1, y: 0  },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
})

export default function Hero() {
  const locale = useStore($locale)
  const copy   = t[locale].hero

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: 'var(--base)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 70% 50%, rgba(110,231,183,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="absolute inset-0">
        <HeroScene />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(12,13,15,0.92) 35%, rgba(12,13,15,0.1) 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--base), transparent)' }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto w-full px-6 md:px-10 pb-16 pt-28">
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <span
            className="inline-flex items-center gap-2.5"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--mint)' }}
          >
            <span className="relative flex size-2">
              <span
                className="absolute size-full rounded-full opacity-75"
                style={{ background: '#4ade80', animation: 'ping 2s cubic-bezier(0,0,0.2,1) infinite' }}
              />
              <span className="relative size-2 rounded-full" style={{ background: '#4ade80' }} />
            </span>
            {copy.badge}
          </span>
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-display font-black leading-[0.88]"
            style={{ fontSize: 'clamp(5.5rem,16vw,16rem)', letterSpacing: '-0.05em', color: 'var(--cream)' }}
          >
            {copy.line1}
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
            className="font-display font-black leading-[0.88]"
            style={{
              fontSize: 'clamp(5.5rem,16vw,16rem)',
              letterSpacing: '-0.05em',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(242,240,235,0.18)',
            }}
          >
            {copy.line2}
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.29 }}
            className="font-display font-black leading-[0.88]"
            style={{ fontSize: 'clamp(5.5rem,16vw,16rem)', letterSpacing: '-0.05em', color: 'var(--mint)' }}
          >
            {copy.line3}
          </motion.h1>
        </div>

        <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
          <div className="max-w-xs">
            <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
              {copy.sub}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">{copy.cta1}</a>
              <a href="#projects" className="btn-ghost">{copy.cta2}</a>
            </div>
          </div>

          <div className="flex gap-8 sm:gap-12 sm:ml-auto">
            {copy.stats.map((s, i) => (
              <div key={i}>
                <div
                  className="font-display font-black leading-none"
                  style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: 'var(--mint)', letterSpacing: '-0.04em' }}
                >
                  {s.val}
                </div>
                <div
                  className="font-mono mt-1"
                  style={{ fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.3)' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2"
      >
        <span
          className="font-mono"
          style={{ fontSize: '8px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.2)', writingMode: 'vertical-rl' }}
        >
          scroll
        </span>
        <div
          className="w-px"
          style={{ height: '48px', background: 'linear-gradient(to bottom, rgba(110,231,183,0.5), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
