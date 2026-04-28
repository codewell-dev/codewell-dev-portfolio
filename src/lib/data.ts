export const site = {
  email: 'codewelldev@proton.me',
  github: 'https://github.com/codewell-dev',
  linkedin: 'https://www.linkedin.com/in/vladyslav-codewell-795b1038b/',
  instagram: 'https://www.instagram.com/codewelldev',
};

export const projects = [
  {
    id: 'forma',
    title: 'FORMA',
    sub_en: 'Luxury E-commerce Platform',
    sub_uk: 'Люкс E-commerce платформа',
    tag_en: 'Full Stack',
    tag_uk: 'Full Stack',
    year: '2024',
    desc_en:
      'High-end storefront built for scale — custom design system, global state via Redux Toolkit + RTK Query, and a UI that feels premium at every interaction.',
    desc_uk:
      'Люкс-магазин збудований для масштабу — власна дизайн-система, глобальний стан через Redux Toolkit + RTK Query, UI що відчувається преміально на кожній взаємодії.',
    tech: [
      'Next.js 14',
      'Redux Toolkit',
      'TypeScript',
      'Tailwind',
      'RTK Query',
    ],
    accent: '#6EE7B7',
    live: 'https://next-shop-ih5f.vercel.app/',
    repo: 'https://github.com/codewell-dev/next-shop',
  },
  {
    id: 'pizza',
    title: 'Pizza House',
    sub_en: 'Food Ordering Platform',
    sub_uk: 'Платформа замовлень їжі',
    tag_en: 'Full Stack',
    tag_uk: 'Full Stack',
    year: '2024',
    desc_en:
      'Full-stack food ordering platform with a NestJS backend and MongoDB.  Role-based auth — separate admin dashboard for menu and order management. Cart system, product catalog, mobile-first UI.',
    desc_uk:
      'Full-stack платформа замовлення їжі на NestJS і MongoDB. Рольова авторизація — окрема адмін-панель для управління меню і замовленнями. Кошик, каталог, mobile-first UI.',
    tech: ['React', 'NestJS', 'MongoDB', 'Material UI'],
    accent: '#FB923C',
    live: 'https://pizza-app-client-chi.vercel.app',
    repo: 'https://github.com/codewell-dev/pizza-app',
  },
  {
    id: 'portfolio',
    title: 'Vladyslav · codewell',
    sub_en: 'Portfolio Site',
    sub_uk: 'Портфоліо',
    tag_en: 'Frontend',
    tag_uk: 'Frontend',
    year: '2025',
    desc_en:
      'This site — built to stand out. Three.js 3D, Framer Motion animations, bilingual EN/UK, and a full SEO stack: JSON-LD, Open Graph, hreflang. 95+ Lighthouse.',
    desc_uk:
      'Цей сайт — зроблений щоб виділятись. Three.js 3D, Framer Motion анімації, двомовний EN/UK і повне SEO: JSON-LD, Open Graph, hreflang. 95+ Lighthouse.',
    tech: ['Next.js', 'Three.js', 'Framer Motion', 'TypeScript'],
    accent: '#818CF8',
    live: 'https://codewell-dev.vercel.app',
    repo: 'https://github.com/codewell-dev/codewell-dev-portfolio',
  },
];

export const experiences = [
  {
    period_en: '2023 – Present',
    period_uk: '2023 – Зараз',
    title: 'Full Stack Developer',
    company: 'Freelance · codewell-dev',
    current: true,
    desc_en:
      'Built 5+ production web apps for EU clients — e-commerce stores, SaaS tools, and business dashboards. End-to-end ownership: architecture, API design, UI, deployment, and support.',
    desc_uk:
      'Побудував 5+ продакшн веб-застосунків для EU клієнтів — e-commerce, SaaS та бізнес-дашборди. Повна відповідальність: архітектура, API, UI, деплой і підтримка.',
    tech: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'MongoDB',
      'Docker',
      'Tailwind',
    ],
  },
  {
    period_en: '2021 – 2023',
    period_uk: '2021 – 2023',
    title: 'Full Stack Developer',
    company: 'Norrspark · Poland (Remote)',
    current: false,
    desc_en:
      'Full-stack developer at a Polish remote-first tech company. Owned internal dashboards and business tools on the MERN stack — from Figma designs to live production.',
    desc_uk:
      'Full-stack розробник у польській remote-first tech компанії. Відповідав за внутрішні дашборди та інструменти на MERN стеку — від Figma до продакшну.',
    tech: ['Next.js', 'React', 'Material-UI', 'Node.js', 'MongoDB', 'Firebase'],
  },
];

export const skills = [
  'HTML5',
  'CSS3',
  'Sass',
  'Tailwind CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'NestJS',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'Docker',
  'Git',
  'REST API',
  'Figma',
  'Three.js',
  'Framer Motion',
  'Redux',
  'GraphQL',
];

export const testimonials = [
  {
    name: 'Oleksandr Petrenko',
    pos_en: 'CTO · SoftVision Labs, Kyiv',
    pos_uk: 'CTO · SoftVision Labs, Київ',
    text_en:
      'Deep MERN expertise and a genuine eye for detail — clean, scalable code delivered every time. Every challenge handled without drama. Highly recommended.',
    text_uk:
      'Глибока MERN експертиза і справжній погляд на деталі — чистий, масштабований код щоразу. Кожна задача вирішена без зайвого шуму. Рекомендую.',
    rating: 5,
  },
  {
    name: 'Iryna Kovalenko',
    pos_en: 'Project Manager · TechNova, Lviv',
    pos_uk: 'Project Manager · TechNova, Львів',
    text_en:
      'Took complex requirements and shipped a fast, on-brand UI ahead of schedule. Communication was clear and proactive the entire way through.',
    text_uk:
      'Взяв складні вимоги і здав швидкий, on-brand UI раніше дедлайну. Комунікація чітка і проактивна протягом усього проєкту.',
    rating: 5,
  },
  {
    name: 'Andrii Shevchenko',
    pos_en: 'Head of IT · GreenCloud, Odesa',
    pos_uk: 'Head of IT · GreenCloud, Одеса',
    text_en:
      'Modernized our legacy app — performance and maintainability improved dramatically. Proactive, sharp, and always pushing for the best outcome.',
    text_uk:
      'Модернізував наш legacy застосунок — продуктивність і підтримуваність різко зросли. Проактивний, гострий і завжди прагне найкращого результату.',
    rating: 5,
  },
];
