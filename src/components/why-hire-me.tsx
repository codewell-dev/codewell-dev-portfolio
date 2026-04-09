'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useLocale } from '@/components/locale-provider';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

const REASONS = [
  { num: '01', title: 'whyHire.r1.title', desc: 'whyHire.r1.desc' },
  { num: '02', title: 'whyHire.r2.title', desc: 'whyHire.r2.desc' },
  { num: '03', title: 'whyHire.r3.title', desc: 'whyHire.r3.desc' },
  { num: '04', title: 'whyHire.r4.title', desc: 'whyHire.r4.desc' },
] as const;

export const WhyHireMe = () => {
  const { ref } = useSectionInView('Why hire me', 0.3);
  const { t } = useLocale();

  return (
    <section ref={ref} id="why-hire-me" className="my-10 w-full scroll-mt-28 md:mb-20">
      <SectionHeading heading={t('whyHire.heading')} content={t('whyHire.subheading')} />

      {/* 4-column reason cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {REASONS.map(({ num, title, desc }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.4 }}
            viewport={{ once: true }}
            className="group rounded-lg border bg-card p-6 transition-shadow duration-300 hover:shadow-md"
          >
            
            <p className="font-heading mb-4 text-3xl font-medium italic text-muted-foreground/40 select-none">
              {num}
            </p>
            <h3 className="mb-2 text-base font-semibold leading-snug">
              {t(title)}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(desc)}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA closing block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        viewport={{ once: true }}
        className="mt-6 rounded-lg border bg-muted/30 p-8 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
          {t('whyHire.cta.label')}
        </p>
        <h3 className="font-heading mb-3 text-2xl font-semibold md:text-3xl">
          {t('whyHire.cta.heading')}
        </h3>
        <p className="text-muted-foreground mx-auto mb-5 max-w-md text-sm leading-relaxed">
          {t('whyHire.cta.desc')}
        </p>
        <Button asChild size="lg">
          <Link href="#contact">
            {t('whyHire.cta.button')}
            <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <p className="mt-4 text-xs text-muted-foreground">{t('whyHire.cta.booking')}</p>
      </motion.div>
    </section>
  );
};
