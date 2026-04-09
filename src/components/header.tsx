'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { useActiveSection } from '@/components/active-section-provider';
import { Button } from '@/components/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { Icons } from '@/components/icons';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useLocale } from '@/components/locale-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import { links } from '@/lib/data';
import type { TranslationKey } from '@/lib/i18n';

const NAV_KEY_MAP: Record<string, TranslationKey> = {
  'Home':         'nav.home',
  'Why hire me':  'nav.whyHireMe',
  'About':        'nav.about',
  'Services':     'nav.services',
  'Experience':   'nav.experience',
  'Projects':     'nav.projects',
  'Blog':         'nav.blog',
  'Testimonials': 'nav.testimonials',
  'Contact':      'nav.contact',
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection();
  const { t } = useLocale();

  const handleNavClick = (name: string) => {
    setActiveSection(name as any);
    setTimeOfLastClick(Date.now());
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sm:bg-background/80 sticky top-5 z-20 my-5 flex w-full items-center gap-2 sm:top-10 sm:my-10 sm:rounded-full sm:border sm:px-2 sm:py-3 sm:backdrop-blur-sm"
    >
      {/* Mobile: hamburger + theme + language */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="bg-background/80 backdrop-blur-sm sm:hidden"
          >
            {t('nav.menu')} <Icons.chevronDown className="ml-2 size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="text-muted-foreground max-h-screen w-[90%] rounded">
          <DialogHeader>
            <DialogTitle className="text-md self-start font-medium">
              {t('nav.navigation')}
            </DialogTitle>
          </DialogHeader>
          <nav>
            <ul>
              {links.map(({ name, hash }) => (
                <li
                  key={name}
                  onClick={() => setIsOpen(false)}
                  className="border-muted-foreground/10 py-3 text-sm [&:not(:last-child)]:border-b"
                >
                  <Link className="block" href={hash}>
                    {t(NAV_KEY_MAP[name] ?? 'nav.home')}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </DialogContent>
      </Dialog>

      <ThemeToggle className="bg-background/80 backdrop-blur-sm sm:hidden" />

      {/* Desktop nav — scrollable on smaller desktops */}
      <nav className="text-muted-foreground hidden overflow-x-auto text-sm sm:block">
        <ul className="flex gap-1">
          {links.map(({ name, hash }) => (
            <li key={name}>
              <Link
                href={hash}
                className="hover:text-foreground relative whitespace-nowrap px-3 py-2 transition-colors"
                onClick={() => handleNavClick(name)}
              >
                {t(NAV_KEY_MAP[name] ?? 'nav.home')}
                {name === activeSection && (
                  <motion.span
                    className="bg-muted absolute inset-0 -z-10 rounded-full"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle className="hidden sm:flex" />
        <LanguageSwitcher />
      </div>
    </motion.header>
  );
};
