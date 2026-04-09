'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useLocale } from '@/components/locale-provider';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { siteConfig } from '@/lib/site-config';

const STATS = [
  'hero.stats.years',
  'hero.stats.reviews',
  'hero.stats.response',
  'hero.stats.visits',
] as const;

// Stagger animation for the whole hero
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const Intro = () => {
  const { ref } = useSectionInView('Home');
  const { t } = useLocale();

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-4 text-center sm:mt-10"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-4"
      >
        {/* Logo with grayscale hover → colour */}
        <motion.div variants={item}>
          <img
            src="/images/profile.png"
            alt={`${siteConfig.brand} logo`}
            width={96}
            height={96}
            className="mb-2 h-24 w-24 rounded-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/profile.png';
            }}
          />
        </motion.div>

        {/* Available badge */}
        <motion.div variants={item}>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-sm transition-colors hover:bg-muted"
          >
            <span className="relative flex size-2">
              <span className="absolute size-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative size-2 rounded-full bg-green-400" />
            </span>
            <span className="font-mono text-sm">{t('hero.available')}</span>
          </Link>
        </motion.div>

        {/* Work types */}
        <motion.p
          variants={item}
          className="text-muted-foreground text-xs tracking-wide"
        >
          {t('hero.workTypes')}
        </motion.p>

        {/* Based in */}
        <motion.p variants={item} className="text-muted-foreground text-sm">
          {t('hero.based')}
        </motion.p>

        {/* Main heading — serif, large */}
        <motion.h1
          variants={item}
          className="font-heading max-w-3xl text-4xl font-medium leading-tight tracking-tight md:text-5xl lg:text-6xl"
        >
          {t('hero.title')}{' '}
          <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
            {t('hero.brand')}
          </span>{' '}
          · <span className="italic">{t('hero.role')}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-muted-foreground max-w-xl text-base leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>

        {/* Stats row */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-x-6 gap-y-1"
        >
          {STATS.map((key) => (
            <span key={key} className="text-muted-foreground text-sm">
              {t(key)}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="flex flex-row flex-wrap justify-center gap-2"
        >
          <Button asChild size="lg">
            <Link href="#contact">
              {t('hero.cta.contact')}{' '}
              <Icons.arrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#projects">
              {t('hero.cta.projects')}{' '}
              <Icons.arrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hidden sm:flex"
            asChild
          >
            <a href="./cv/CV.pdf" target="_blank" rel="noopener noreferrer">
              {t('hero.cta.cv')} <Icons.download className="ml-2 size-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href={siteConfig.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.linkedin className="size-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href={siteConfig.github}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.github className="size-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href={siteConfig.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.instagram className="size-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
