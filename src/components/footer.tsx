'use client';

import Link from 'next/link';

import { useLocale } from '@/components/locale-provider';
import { siteConfig } from '@/lib/site-config';

export const Footer = () => {
  const { t } = useLocale();

  return (
    <footer className="text-muted-foreground my-4 flex flex-col items-center gap-2 text-xs sm:flex-row sm:justify-between sm:gap-4 w-full max-w-screen-md border-t pt-6">
      <span>© {new Date().getFullYear()} {siteConfig.brand}. {t('footer.rights')}</span>
      <div className="flex gap-4">
        <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</Link>
        <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</Link>
        <Link href={`mailto:${siteConfig.email}`} className="hover:text-foreground transition-colors">{siteConfig.email}</Link>
      </div>
    </footer>
  );
};
