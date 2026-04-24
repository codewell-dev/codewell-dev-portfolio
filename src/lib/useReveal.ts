'use client'
import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return
          e.target
            .querySelectorAll<HTMLElement>('[data-reveal]')
            .forEach((el, i) => {
              const delay = Number(el.dataset.delay ?? i * 80)
              setTimeout(() => el.classList.add('in'), delay)
            })
          if ((e.target as HTMLElement).dataset.reveal !== undefined) {
            e.target.classList.add('in')
          }
          obs.unobserve(e.target)
        })
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return ref
}
