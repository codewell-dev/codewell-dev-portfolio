import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { LocaleProvider } from '@/components/locale-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { fonts } from '@/lib/fonts';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

// ── JSON-LD: Organization schema (studio positioning) ────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.brand,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  description: siteConfig.description,
  email: siteConfig.email,
  sameAs: [siteConfig.github, siteConfig.linkedin],
  areaServed: ['PL', 'DE', 'NL', 'EU', 'UA', 'Remote'],
  knowsAbout: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'Full Stack Development'],
  offers: {
    '@type': 'Offer',
    description: 'Full Stack Web Development — freelance and contract',
    areaServed: 'Europe',
  },
};

// ── JSON-LD: WebSite schema (enables Sitelinks Search Box) ───────────────────
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.brand,
  description: siteConfig.description,
  publisher: { '@id': `${siteConfig.url}/#organization` },
  inLanguage: ['en', 'pl', 'uk'],
};

// ── JSON-LD: BreadcrumbList for homepage ─────────────────────────────────────
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Contact', item: `${siteConfig.url}/#contact` },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },

  // ── Open Graph (WhatsApp, LinkedIn, Facebook previews) ───────────────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['pl_PL', 'uk_UA'],
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.brand,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.brand} — Full Stack Development Studio`,
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
  },

  // ── Authorship ────────────────────────────────────────────────────────────
  authors: [{ name: siteConfig.brand, url: siteConfig.url }],
  creator: siteConfig.brand,
  publisher: siteConfig.brand,

  // ── Canonical + hreflang (important for EU multilingual SEO) ─────────────
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en':    `${siteConfig.url}/en`,
      'pl':    `${siteConfig.url}/pl`,
      'uk':    `${siteConfig.url}/uk`,
      'x-default': siteConfig.url,
    },
  },

  // ── Google verification ───────────────────────────────────────────────────
  verification: {
    google: siteConfig.googleSiteVerificationId || undefined,
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Organization + WebSite + Breadcrumb structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema, breadcrumbSchema]),
          }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Geo meta for local EU SEO */}
        <meta name="geo.region" content="EU" />
        <meta name="geo.placename" content="Europe" />
      </head>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <ThemeProvider attribute="class">
          <LocaleProvider>
            <ActiveSectionProvider>
              {children}
              <Toaster position="bottom-left" />
            </ActiveSectionProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
