'use client';

import { motion } from 'framer-motion';

import { useLocale } from '@/components/locale-provider';
import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');
  const { t } = useLocale();

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading={t('about.heading')} />
      <div className="-mt-5 max-w-3xl text-center leading-7">
        
        <p className="font-heading mb-6 text-xl font-medium italic text-muted-foreground">
          {t('about.subtitle')}
        </p>
        <p className="mb-4">{t('about.p1')}</p>
        <p className="mb-4">{t('about.p2')}</p>
        {/* Pull quote */}
        <blockquote className="my-6 border-l-2 border-primary pl-4 text-left font-heading italic text-muted-foreground">
          {t('about.quote')}
        </blockquote>
        <p>{t('about.p3')}</p>
      </div>
      <Skills />
    </motion.section>
  );
};
