'use client'
import { useState } from 'react'
import { useStore } from '@nanostores/react'
import { motion, AnimatePresence } from 'framer-motion'
import { $locale } from '@/store'
import { t } from '@/lib/translations'
import { projects } from '@/lib/data'
import { useReveal } from '@/lib/useReveal'

function ProjectRow({ project, index }: { project: typeof projects[number]; index: number }) {
  const locale = useStore($locale)
  const copy   = t[locale].projects
  const [open, setOpen]   = useState(false)

  const sub  = locale === 'uk' ? project.sub_uk  : project.sub_en
  const desc = locale === 'uk' ? project.desc_uk : project.desc_en
  const tag  = locale === 'uk' ? project.tag_uk  : project.tag_en

  return (
    <div
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <button
        className="w-full text-left py-7 grid gap-4"
        style={{ gridTemplateColumns: '56px 1fr auto', alignItems: 'start' }}
        onClick={() => setOpen(v => !v)}
      >
        <span
          className="font-mono pt-1"
          style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(242,240,235,0.25)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        <div>
          <div className="flex flex-wrap items-baseline gap-3 mb-1">
            <span
              className="font-display font-black leading-none"
              style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', letterSpacing: '-0.04em', color: open ? 'var(--mint)' : 'var(--cream)', transition: 'color 0.3s' }}
            >
              {project.title}
            </span>
            <em
              className="font-display"
              style={{ fontSize: 'clamp(1rem,1.8vw,1.4rem)', fontStyle: 'italic', color: 'rgba(242,240,235,0.3)', letterSpacing: '-0.02em' }}
            >
              {sub}
            </em>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--mint)' }}>
              {project.year}
            </span>
            <span className="tech-tag">{tag}</span>
          </div>
        </div>

        <div
          className="flex items-center justify-center mt-1 transition-transform duration-300"
          style={{
            width: '28px', height: '28px',
            border: '1px solid var(--border)',
            color: 'var(--muted)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            flexShrink: 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1" strokeLinecap="square"/>
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10 pl-0 md:pl-[72px]"
            >
              <div>
                <p className="text-sm font-light leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
                  {desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-start justify-end">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '10px 20px', fontSize: '10px' }}
                >
                  {copy.live}
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                  </svg>
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '10px 20px', fontSize: '10px' }}
                >
                  {copy.source}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Projects() {
  const locale = useStore($locale)
  const copy   = t[locale].projects
  const ref    = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      ref={ref}
      id="projects"
      className="py-32 md:py-48"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <div data-reveal data-delay="0" className="mb-10">
              <span className="label-tag">{copy.label}</span>
            </div>
            <h2
              data-reveal
              data-delay="80"
              className="font-display font-black leading-[0.92]"
              style={{ fontSize: 'clamp(3rem,6vw,6rem)', letterSpacing: '-0.04em' }}
            >
              {copy.h1}
              <br />
              <span style={{ color: 'var(--mint)' }}>{copy.h2}</span>
            </h2>
          </div>
          <a
            data-reveal
            data-delay="160"
            href="https://github.com/codewell-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost self-start md:self-end"
            style={{ whiteSpace: 'nowrap' }}
          >
            {copy.more}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
            </svg>
          </a>
        </div>

        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
          <div className="hr" />
        </div>
      </div>
    </section>
  )
}
