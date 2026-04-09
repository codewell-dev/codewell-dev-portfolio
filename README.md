# codewell-dev — Personal Portfolio

> Personal portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Multilingual (EN / PL / UK), SEO-first, and designed to attract EU clients.

**Live:** [codewell-dev.com](https://codewell-dev-portfolio.vercel.app)

---

## Stack

| Layer      | Technology                                         |
| ---------- | -------------------------------------------------- |
| Framework  | Next.js 16 (static export)                         |
| Language   | TypeScript 5                                       |
| Styling    | Tailwind CSS 3 + custom CSS vars                   |
| Animations | Framer Motion 12                                   |
| Fonts      | Playfair Display (serif headings) + DM Sans (body) |
| i18n       | Custom context — EN / PL / UK                      |
| Forms      | Formspree                                          |
| Deployment | Netlify / Vercel                                   |

---

## Features

- **Multilingual** — EN, PL, UK with browser auto-detection and localStorage persistence
- **SEO-first** — Organization + WebSite + BreadcrumbList JSON-LD, Open Graph, Twitter Card, hreflang with `x-default`
- **AI discoverability** — `llms.txt` for GPTBot, Claude-Web, PerplexityBot
- **Dark / light mode** — `next-themes`, system preference respected
- **Sections** — Hero, Why Hire Me, About, Services (6 cards), Experience, Projects, Blog, Testimonials, Contact
- **Performance** — static export, unoptimized images disabled only in export mode, `preconnect` for Google Fonts
- **Accessible** — semantic HTML (`<main>`, `<article>`, `<blockquote>`, `<cite>`, `<time>`), ARIA labels, keyboard navigation

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — SEO metadata, JSON-LD schemas
│   └── page.tsx            # Home page — section composition
├── components/
│   ├── intro.tsx           # Hero section with stagger animation
│   ├── why-hire-me.tsx     # 4-reason cards + CTA block
│   ├── about.tsx           # About with serif subtitle + blockquote
│   ├── services.tsx        # 6 service cards with SVG icons + stack tags
│   ├── experience.tsx      # Timeline with serif role titles
│   ├── projects.tsx        # Project cards with hover scale
│   ├── blog.tsx            # Engineering notes with arrow animation
│   ├── testimonials.tsx    # Animated carousel (AnimatePresence)
│   ├── contact.tsx         # Extended form (budget + timeline)
│   ├── header.tsx          # Sticky nav with language switcher
│   ├── footer.tsx          # Footer with links
│   ├── language-switcher.tsx  # EN / PL / UK dropdown
│   ├── locale-provider.tsx    # i18n React context
│   └── ...
├── lib/
│   ├── data.tsx            # All content — projects, experience, testimonials, blog
│   ├── i18n.ts             # All translations (EN / PL / UK)
│   ├── site-config.ts      # Brand, SEO, URLs, contact info
│   └── fonts.ts            # DM Sans + JetBrains Mono font config
├── styles/
│   └── globals.css         # Tailwind base + Playfair Display import + CSS vars
public/
├── images/
│   ├── logo.png            # Your logo — replace this
│   ├── profile.jfif        # Fallback profile photo
│   ├── pizzahouse.png      # Project screenshot
│   └── portfolio.png       # Project screenshot
├── cv/
│   └── CV.pdf              # Your CV — replace this
├── favicon/                # Favicon files
└── llms.txt                # AI crawler metadata
```

---

## Getting Started

### Prerequisites

- Node.js >= 18.18.0
- npm >= 8.0.0

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

Outputs static files to `/out` — ready for Netlify or any static host.

### Preview production build

```bash
npm run preview
```

---

## Customization

### 1. Personal info

Edit `src/lib/site-config.ts`:

```ts
export const siteConfig = {
  brand: 'codewell-dev', // Your brand name
  url: 'https://codewell-dev-portfolio.vercel.app', // Your domain
  email: 'codewelldev@proton.me', // Contact email
  github: 'https://github.com/codewell-dev',
  linkedin: 'https://linkedin.com/codewell-dev',
  // ...
};
```

### 2. Content — projects, experience, blog

Edit `src/lib/data.tsx` — all content is in one place.

### 3. Translations

Edit `src/lib/i18n.ts` — every string in EN / PL / UK is defined here.

### 4. Logo

Replace `public/images/logo.png` with your logo (recommended: 96×96px PNG, transparent background). The `<img>` has a fallback to `profile.jfif` if the logo is not found.

### 5. CV

Replace `public/cv/CV.pdf` with your updated CV.

### 6. Google Analytics

Add your Measurement ID to `src/lib/site-config.ts`:

```ts
googleAnalyticsId: 'G-XXXXXXXXXX',
```

Then uncomment the analytics script in `src/app/layout.tsx`.

### 7. Contact form

The form uses [Formspree](https://formspree.io). Replace the form ID in `src/components/contact.tsx`:

```tsx
const [state, handleSubmit] = useForm('YOUR_FORM_ID');
```

### 8. Google Search Console

Add your verification ID to `src/lib/site-config.ts`:

```ts
googleSiteVerificationId: 'your-token-here',
```

---

## SEO Checklist

After deploying:

- [ ] Submit sitemap at `https://your-domain.com/sitemap.xml` to Google Search Console
- [ ] Verify domain ownership (add `googleSiteVerificationId` to `site-config.ts`)
- [ ] Add Open Graph image at `public/og-image.png` (1200×630px)
- [ ] Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test multilingual with [hreflang Tags Testing Tool](https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/)
- [ ] Check `llms.txt` is accessible at `https://your-domain.com/llms.txt`

---

## Deployment

### Netlify (recommended)

1. Push to GitHub
2. Connect repo in Netlify
3. Build command: `npm run build`
4. Publish directory: `out`
5. Add environment variables (see below)

### Environment Variables

```env
SITE_URL=https://codewell-dev-portfolio.vercel.app
GOOGLE_SITE_VERIFICATION_ID=your-token
```

---

## Scripts

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build + sitemap generation
npm run start        # Start production server
npm run lint         # ESLint
npm run lint:fix     # ESLint with auto-fix
npm run format:check # Prettier check
npm run format:write # Prettier auto-format
npm run typecheck    # TypeScript type check
```

---

## License

© 2025 codewell-dev. All rights reserved.
