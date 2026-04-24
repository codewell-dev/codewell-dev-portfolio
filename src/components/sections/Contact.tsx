'use client'
import { useState } from 'react'
import { useStore } from '@nanostores/react'
import { motion } from 'framer-motion'
import { $locale } from '@/store'
import { t } from '@/lib/translations'
import { site } from '@/lib/data'
import { useReveal } from '@/lib/useReveal'


type Status = 'idle' | 'sending' | 'done' | 'error'

export default function Contact() {
  const locale = useStore($locale)
  const copy   = t[locale].contact
  const ref    = useReveal() as React.RefObject<HTMLElement>

  const [form, setForm] = useState({ name: '', email: '', details: '', budget: '', timeline: '' })
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
  
    try {
      const res = await fetch('https://formspree.io/f/mwvabzkd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `
  ${form.details}
  Budget: ${form.budget || '-'}
  Timeline: ${form.timeline || '-'}
          `,
        }),
      });
  
      if (res.ok) {
        setStatus('done');
        setForm({ name: '', email: '', details: '', budget: '', timeline: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const inputClass = `
    w-full bg-transparent border-b font-body text-sm font-light
    outline-none py-3 transition-colors duration-200 placeholder:text-[rgba(242,240,235,0.2)]
  `

  const inputStyle = {
    borderColor: 'var(--border)',
    color: 'var(--cream)',
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="py-32 md:py-48"
      style={{ background: 'var(--base)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div data-reveal data-delay="0" className="mb-10">
          <span className="label-tag">{copy.label}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2
              data-reveal
              data-delay="80"
              className="font-display font-black leading-[0.92] mb-10"
              style={{ fontSize: 'clamp(3.5rem,8vw,8rem)', letterSpacing: '-0.05em' }}
            >
              {copy.h1}
              <br />
              <span style={{ color: 'var(--mint)' }}>{copy.h2}</span>
            </h2>

            <p data-reveal data-delay="160" className="text-sm font-light leading-relaxed mb-12" style={{ color: 'var(--muted)', maxWidth: '360px' }}>
              {copy.sub}
            </p>

            <div data-reveal data-delay="220" className="flex flex-col gap-5">
              <a
                href={`mailto:${site.email}`}
                className="font-display font-bold transition-colors duration-200"
                style={{ fontSize: 'clamp(1rem,1.6vw,1.25rem)', color: 'var(--mint)', letterSpacing: '-0.01em' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {site.email}
              </a>

              <div className="flex gap-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                {[
                  { label: 'GitHub',    href: site.github    },
                  { label: 'LinkedIn',  href: site.linkedin  },
                  { label: 'Instagram', href: site.instagram },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono transition-colors duration-200"
                    style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.3)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(242,240,235,0.3)')}
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div data-reveal data-delay="160">
            {status === 'done' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-full flex flex-col items-start justify-center gap-5 p-10"
                style={{ border: '1px solid rgba(110,231,183,0.2)', background: 'rgba(110,231,183,0.03)' }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{ width: '40px', height: '40px', border: '1px solid var(--mint)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8l4 4 8-8" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="square"/>
                  </svg>
                </div>
                <p
                  className="font-display font-black leading-tight"
                  style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', letterSpacing: '-0.03em' }}
                >
                  {copy.success}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="font-mono block mb-3" style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.3)' }}>
                      {copy.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={set('name')}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(110,231,183,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                    />
                  </div>
                  <div>
                    <label className="font-mono block mb-3" style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.3)' }}>
                      {copy.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={set('email')}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(110,231,183,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono block mb-3" style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.3)' }}>
                    {copy.details}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.details}
                    onChange={set('details')}
                    className={inputClass}
                    style={{ ...inputStyle, resize: 'none', borderBottom: '1px solid var(--border)' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(110,231,183,0.5)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="font-mono block mb-3" style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.3)' }}>
                      {copy.budget}
                    </label>
                    <input
                      type="text"
                      placeholder="€2k – 5k"
                      value={form.budget}
                      onChange={set('budget')}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(110,231,183,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                    />
                  </div>
                  <div>
                    <label className="font-mono block mb-3" style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,240,235,0.3)' }}>
                      {copy.timeline}
                    </label>
                    <input
                      type="text"
                      placeholder="2 weeks"
                      value={form.timeline}
                      onChange={set('timeline')}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(110,231,183,0.5)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 pt-4">
                  <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'rgba(242,240,235,0.2)' }}>
                    {copy.privacy}
                  </span>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary"
                    style={{ opacity: status === 'sending' ? 0.6 : 1 }}
                  >
                    {status === 'sending' ? copy.sending : copy.submit}
                    {status !== 'sending' && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
