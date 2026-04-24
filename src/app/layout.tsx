import type { Metadata } from 'next'
import '@/styles/globals.css'
import dynamic from 'next/dynamic'

const Cursor = dynamic(() => import('@/components/ui/Cursor'), { ssr: false })

export const metadata: Metadata = {
  title:       'codewell.dev — Full Stack Developer',
  description: 'Full Stack developer — React, Next.js, Node.js. Fast, scalable web applications for EU clients. Available for freelance.',
  openGraph: {
    title:       'codewell.dev — Full Stack Developer',
    description: 'Full Stack developer — React, Next.js, Node.js. Fast, scalable apps.',
    type:        'website',
    locale:      'en_US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  )
}
