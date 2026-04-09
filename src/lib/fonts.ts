import { JetBrains_Mono, DM_Sans } from 'next/font/google';

const fontSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500'],
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

// Playfair Display loaded via @import in globals.css for full weight support
export const fonts = [fontSans.variable, fontMono.variable].join(' ');
