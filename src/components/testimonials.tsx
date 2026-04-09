'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Icons } from '@/components/icons';
import { useLocale } from '@/components/locale-provider';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { testimonialsData } from '@/lib/data';
import { siteConfig } from '@/lib/site-config';

export const Testimonials = () => {
  const { ref } = useSectionInView('Testimonials');
  const { t } = useLocale();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonialsData.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonialsData.length) % testimonialsData.length);

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.brand,
    url: siteConfig.url,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: testimonialsData.length,
      bestRating: '5',
    },
    review: testimonialsData.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewBody: r.content,
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    })),
  };

  const testimonial = testimonialsData[current];

  return (
    <section ref={ref} id="testimonials" className="my-10 w-full scroll-mt-28 md:mb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <SectionHeading heading={t('testimonials.heading')} content={t('testimonials.subheading')} />

      <div className="relative mx-auto max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="rounded-lg border bg-card p-8 text-center shadow-sm md:p-10"
          >
            {/* Stars */}
            <div className="mb-6 flex justify-center gap-1" aria-label={`${testimonial.rating} stars`}>
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Icons.star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote — serif italic */}
            <blockquote className="font-heading mb-8 text-lg font-medium italic leading-relaxed text-foreground md:text-xl">
              &ldquo;{testimonial.content}&rdquo;
            </blockquote>

            {/* Author */}
            <footer className="flex flex-col items-center gap-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                width={56}
                height={56}
                className="size-14 rounded-full border-2 border-border object-cover"
              />
              <div>
                <cite className="block text-base font-semibold not-italic">{testimonial.name}</cite>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                <p className="text-xs text-muted-foreground">{testimonial.company}</p>
              </div>
            </footer>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          aria-label={t('testimonials.prev')}
          className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full border bg-background p-2 shadow-sm transition-shadow hover:shadow-md"
        >
          <Icons.arrowRight className="size-4 rotate-180" />
        </button>
        <button
          onClick={next}
          aria-label={t('testimonials.next')}
          className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full border bg-background p-2 shadow-sm transition-shadow hover:shadow-md"
        >
          <Icons.arrowRight className="size-4" />
        </button>

        {/* Dot navigation */}
        <div className="mt-6 flex justify-center gap-2" role="tablist">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              onClick={() => setCurrent(i)}
              className={`size-2 rounded-full transition-all duration-200 ${
                i === current ? 'bg-foreground w-4' : 'bg-border hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
