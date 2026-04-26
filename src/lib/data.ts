export const site = {
  email:     'codewelldev@proton.me',
  github:    'https://github.com/codewell-dev',
  linkedin:  'https://linkedin.com/',
  instagram: 'https://www.instagram.com/codewelldev',
}

export const projects = [
  {
    id:      'forma',
    title:   'FORMA',
    sub_en:  'Premium E-commerce',
    sub_uk:  'Преміум E-commerce',
    tag_en:  'Full Stack',
    tag_uk:  'Full Stack',
    year:    '2024',
    desc_en: 'Production-grade dark luxury storefront — Next.js 14, Redux Toolkit, RTK Query. Custom design system, immersive UI, and scalable architecture.',
    desc_uk: 'Продакшн-рівний темний магазин — Next.js 14, Redux Toolkit, RTK Query. Власна дизайн-система, іммерсивний UI і масштабована архітектура.',
    tech:    ['Next.js 14', 'Redux Toolkit', 'TypeScript', 'Tailwind', 'RTK Query'],
    accent:  '#6EE7B7',
    live:    'https://next-shop-ih5f.vercel.app/',
    repo:    'https://github.com/codewell-dev/next-shop',
  },
  {
    id:      'pizza',
    title:   'Pizza House',
    sub_en:  'Food Ordering Platform',
    sub_uk:  'Платформа замовлень їжі',
    tag_en:  'Full Stack',
    tag_uk:  'Full Stack',
    year:    '2024',
    desc_en: 'Real-time food ordering with NestJS backend and MongoDB. Cart system, product catalog, live order management.',
    desc_uk: 'Замовлення їжі в реальному часі на NestJS і MongoDB. Кошик, каталог, керування замовленнями.',
    tech:    ['React', 'NestJS', 'MongoDB', 'Material UI'],
    accent:  '#FB923C',
    live:    'https://pizza-house-client-ochre.vercel.app/',
    repo:    'https://github.com/codewell-dev/pizza-house-client',
  },
  {
    id:      'portfolio',
    title:   'Vladyslav codewell',
    sub_en:  'Portfolio Site',
    sub_uk:  'Портфоліо',
    tag_en:  'Frontend',
    tag_uk:  'Frontend',
    year:    '2025',
    desc_en: 'This site. Next.js + Three.js + Framer Motion. Bilingual EN/UK. Full SEO — JSON-LD, Open Graph, hreflang.',
    desc_uk: 'Цей сайт. Next.js + Three.js + Framer Motion. Двомовний EN/UK. Повне SEO — JSON-LD, Open Graph, hreflang.',
    tech:    ['Next.js', 'Three.js', 'Framer Motion', 'TypeScript'],
    accent:  '#818CF8',
    live:    'https://codewell-dev-portfolio.vercel.app',
    repo:    'https://github.com/codewell-dev/codewell-dev-portfolio',
  },
]

export const experiences = [
  {
    period_en: '2023 – Present',
    period_uk: '2023 – Зараз',
    title:     'Full Stack Developer',
    company:   'Freelance · Vladyslav codewell',
    current:   true,
    desc_en:   'Running my own freelance practice. E-commerce platforms, SaaS solutions, and web apps for clients across Europe — end-to-end, from architecture to deployment.',
    desc_uk:   'Власна фрілансерська практика. E-commerce платформи, SaaS та веб-застосунки для EU клієнтів — від архітектури до деплою.',
    tech:      ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'Tailwind'],
  },
  {
    period_en: '2021 – 2023',
    period_uk: '2021 – 2023',
    title:     'Full Stack Developer',
    company:   'Norrspark · Poland (Remote)',
    current:   false,
    desc_en:   'Built dashboards and internal tools on the MERN stack for a Polish tech company. Focused on responsive design and seamless API integrations.',
    desc_uk:   'Дашборди та внутрішні інструменти на MERN стеку для польської tech компанії. Responsive дизайн і API інтеграції.',
    tech:      ['Next.js', 'React', 'Material-UI', 'Node.js', 'MongoDB', 'Firebase'],
  },
]

export const skills = [
  'HTML5', 'CSS3', 'Sass', 'Tailwind CSS',
  'JavaScript', 'TypeScript', 'React', 'Next.js',
  'NestJS', 'Node.js', 'MongoDB', 'PostgreSQL',
  'Docker', 'Git', 'REST API', 'Figma',
  'Three.js', 'Framer Motion', 'Redux', 'GraphQL',
]

export const testimonials = [
  {
    name:    'Oleksandr Petrenko',
    pos_en:  'CTO · SoftVision Labs, Kyiv',
    pos_uk:  'CTO · SoftVision Labs, Київ',
    text_en: 'Strong MERN knowledge and real attention to detail — consistently delivered clean, scalable code. Handled every challenge professionally. Highly recommended.',
    text_uk: 'Глибокі знання MERN і справжня увага до деталей — стабільно чистий, масштабований код. Вирішував кожну задачу професійно. Рекомендую.',
    rating:  5,
  },
  {
    name:    'Iryna Kovalenko',
    pos_en:  'Project Manager · TechNova, Lviv',
    pos_uk:  'Project Manager · TechNova, Львів',
    text_en: 'Complex requirements quickly understood and turned into fast, responsive, on-brand UI. Delivery was on time and communication was excellent throughout.',
    text_uk: 'Складні вимоги швидко зрозумілі та перетворені на швидкий, responsive UI. Здача вчасно, комунікація відмінна протягом усього проєкту.',
    rating:  5,
  },
  {
    name:    'Andrii Shevchenko',
    pos_en:  'Head of IT · GreenCloud, Odesa',
    pos_uk:  'Head of IT · GreenCloud, Одеса',
    text_en: 'Great work modernizing our legacy app. Performance and maintainability improved significantly. Proactive and always pushing for the best result.',
    text_uk: 'Чудова робота по модернізації legacy застосунку. Продуктивність і підтримуваність значно покращились. Проактивний і завжди прагне кращого.',
    rating:  5,
  },
]
