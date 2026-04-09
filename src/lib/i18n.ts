export type Locale = 'en' | 'uk' | 'pl';
export const defaultLocale: Locale = 'en';

export const locales: { code: Locale; label: string; flag: string }[] = [
  { code: 'en', label: 'English',    flag: '🇬🇧' },
  { code: 'pl', label: 'Polski',     flag: '🇵🇱' },
  { code: 'uk', label: 'Українська', flag: '🇺🇦' },
];

export type TranslationKey =
  | 'nav.home' | 'nav.about' | 'nav.experience' | 'nav.projects'
  | 'nav.testimonials' | 'nav.contact' | 'nav.menu' | 'nav.navigation'
  | 'nav.whyHireMe' | 'nav.services' | 'nav.blog'
  | 'hero.available' | 'hero.workTypes' | 'hero.based'
  | 'hero.title' | 'hero.brand' | 'hero.role' | 'hero.description'
  | 'hero.cta.contact' | 'hero.cta.projects' | 'hero.cta.cv'
  | 'hero.stats.years' | 'hero.stats.reviews' | 'hero.stats.response' | 'hero.stats.visits'
  | 'about.heading' | 'about.subtitle'
  | 'about.p1' | 'about.p2' | 'about.quote' | 'about.p3'
  | 'whyHire.heading' | 'whyHire.subheading'
  | 'whyHire.r1.title' | 'whyHire.r1.desc'
  | 'whyHire.r2.title' | 'whyHire.r2.desc'
  | 'whyHire.r3.title' | 'whyHire.r3.desc'
  | 'whyHire.r4.title' | 'whyHire.r4.desc'
  | 'whyHire.cta.label' | 'whyHire.cta.heading' | 'whyHire.cta.desc' | 'whyHire.cta.button' | 'whyHire.cta.booking'
  | 'services.heading' | 'services.subheading' | 'services.intro' | 'services.popular' | 'services.discuss' | 'services.stackLabel'
  | 'services.frontend.title' | 'services.frontend.desc'
  | 'services.fullstack.title' | 'services.fullstack.desc'
  | 'services.database.title' | 'services.database.desc'
  | 'services.performance.title' | 'services.performance.desc'
  | 'services.architecture.title' | 'services.architecture.desc'
  | 'services.devops.title' | 'services.devops.desc'
  | 'experience.heading' | 'experience.subheading'
  | 'projects.heading' | 'projects.subheading' | 'projects.viewMore' | 'projects.preview' | 'projects.github'
  | 'blog.heading' | 'blog.subheading' | 'blog.cta'
  | 'testimonials.heading' | 'testimonials.subheading' | 'testimonials.prev' | 'testimonials.next'
  | 'contact.heading' | 'contact.subheading' | 'contact.note'
  | 'contact.name.label' | 'contact.name.placeholder'
  | 'contact.email.label' | 'contact.email.placeholder'
  | 'contact.details.label' | 'contact.details.placeholder'
  | 'contact.budget.label' | 'contact.timeline.label' | 'contact.timeline.placeholder'
  | 'contact.submit' | 'contact.submitting' | 'contact.success' | 'contact.error' | 'contact.privacy'
  | 'footer.rights' | 'theme.toggle';

type T = Record<TranslationKey, string>;

const en: T = {
  'nav.home': 'Home', 'nav.whyHireMe': 'Why hire me', 'nav.about': 'About',
  'nav.services': 'Services', 'nav.experience': 'Experience', 'nav.projects': 'Projects',
  'nav.blog': 'Blog', 'nav.testimonials': 'Testimonials', 'nav.contact': 'Contact',
  'nav.menu': 'Menu', 'nav.navigation': 'Navigation',

  'hero.available': 'Available for work!',
  'hero.workTypes': 'Full-time · Freelance · Contract · Remote or onsite',
  'hero.based': 'Based in Ukraine. Available for EU, PL, DE, NL projects — remote or onsite.',
  'hero.title': "Hi, I'm",
  'hero.brand': 'codewell-dev',
  'hero.role': 'Full Stack Developer',
  'hero.description': "I build fast, scalable web applications with React, Next.js, and Node.js. 3.5+ years shipping production software for startups and product teams. I focus on clean code, great UX, and end-to-end ownership — from first commit to production launch.",
  'hero.cta.contact': 'Get in touch',
  'hero.cta.projects': 'View projects',
  'hero.cta.cv': 'Download CV',
  'hero.stats.years': '3.5+ years',
  'hero.stats.reviews': '10+ five-star reviews',
  'hero.stats.response': '24–48h response',
  'hero.stats.visits': '80k+ visits',

  'about.heading': 'About Me',
  'about.subtitle': 'The developer behind codewell-dev.',
  'about.p1': "I'm a full-stack developer with a strong frontend focus. I build fast, modern, and user-friendly web applications using React.js, Next.js, TypeScript, and Tailwind CSS. I work under the codewell-dev brand — but you always work directly with me.",
  'about.p2': "I have delivered e-commerce platforms, CRM systems, company dashboards, and landing pages for clients across Europe. My work spans responsive UIs, REST APIs with Node.js, PostgreSQL, MongoDB, and containerised deployments with Docker.",
  'about.quote': '"I have built software for startups, product companies, and agencies — always focused on performance, clean architecture, and code that the next developer will actually enjoy working with."',
  'about.p3': "Outside of code I enjoy learning new technologies, contributing to open source, and playing chess. I'm always looking for projects where I can make a real impact.",

  'whyHire.heading': 'Why Hire Me',
  'whyHire.subheading': 'Work with me in 4 simple reasons.',
  'whyHire.r1.title': 'Proven experience',
  'whyHire.r1.desc': '3.5+ years shipping production UIs, REST APIs, and full-stack features for real clients.',
  'whyHire.r2.title': 'Fast response',
  'whyHire.r2.desc': '24–48 hour response time. Clear, proactive communication throughout the project.',
  'whyHire.r3.title': 'Transparent pricing',
  'whyHire.r3.desc': 'No hidden fees. Fixed-price or hourly — whatever works best for your project.',
  'whyHire.r4.title': 'End-to-end ownership',
  'whyHire.r4.desc': 'From Figma or a rough idea all the way to a deployed, production-ready application.',
  'whyHire.cta.label': 'The Closing Statement',
  'whyHire.cta.heading': 'Ready to get started?',
  'whyHire.cta.desc': "Share your project and I'll respond within 24–48 hours. No sign-up required.",
  'whyHire.cta.button': 'Contact me',
  'whyHire.cta.booking': 'Currently available · EU / Remote',

  'services.heading': 'How I Can Help',
  'services.subheading': 'Production systems I have shipped and can build for you.',
  'services.intro': 'React, Next.js, and full-stack development. Available for freelance and contract.',
  'services.popular': 'Most requested',
  'services.discuss': 'Discuss this service',
  'services.stackLabel': 'Stack & tools',
  'services.frontend.title': 'Frontend Development',
  'services.frontend.desc': 'Production UIs in React or Next.js with third-party integrations and payment gateways. Built for real traffic.',
  'services.fullstack.title': 'Full Stack Development',
  'services.fullstack.desc': 'End-to-end MERN apps with auth, role-based access, and real-time features. Scales without rewrites.',
  'services.database.title': 'Database & Backend',
  'services.database.desc': 'Schemas, queries, and integrations that hold up in production — MongoDB, PostgreSQL, Firebase, or MySQL.',
  'services.performance.title': 'Performance Optimization',
  'services.performance.desc': 'Core Web Vitals, Lighthouse audits, bundle size, and runtime — predictable load times at any scale.',
  'services.architecture.title': 'Frontend Architecture',
  'services.architecture.desc': 'Clear component boundaries, state strategy, and API contracts. New features land cleanly; refactors stay low-risk.',
  'services.devops.title': 'Deployment & DevOps',
  'services.devops.desc': 'Docker containers, CI/CD pipelines, and hosting on Vercel or Netlify. Reliable production launches.',

  'experience.heading': 'My Experience',
  'experience.subheading': 'Professional experience accumulated over several years.',

  'projects.heading': 'My Projects',
  'projects.subheading': 'Projects I worked on. Each of them built to solve a real problem.',
  'projects.viewMore': 'View more on GitHub',
  'projects.preview': 'Preview',
  'projects.github': 'GitHub',

  'blog.heading': 'Engineering Notes',
  'blog.subheading': 'Articles on React, Next.js, architecture, and shipping for the EU market.',
  'blog.cta': 'View all articles',

  'testimonials.heading': 'Testimonials',
  'testimonials.subheading': 'What clients and colleagues say about my work',
  'testimonials.prev': 'Previous',
  'testimonials.next': 'Next',

  'contact.heading': 'Get In Touch',
  'contact.subheading': 'Contact me directly at',
  'contact.note': "Open to full-time, freelance, and contract — EU, PL, UA, remote. Share your goal, timeline, and scope and I'll respond with something useful.",
  'contact.name.label': 'Your name', 'contact.name.placeholder': 'Full name',
  'contact.email.label': 'Email', 'contact.email.placeholder': 'you@company.com',
  'contact.details.label': 'Project details',
  'contact.details.placeholder': 'Goal, timeline, scope, and how you will measure success.',
  'contact.budget.label': 'Estimated budget (helps align expectations)',
  'contact.timeline.label': 'Timeline',
  'contact.timeline.placeholder': 'e.g. ASAP, 2 weeks, 1 month, flexible',
  'contact.submit': 'Send project details',
  'contact.submitting': 'Sending…',
  'contact.success': "Thank you! I'll get back to you within 24–48 hours.",
  'contact.error': 'Something went wrong. Please try again.',
  'contact.privacy': 'No spam. Your details stay private.',
  'footer.rights': 'All rights reserved.',
  'theme.toggle': 'Toggle theme',
};

const pl: T = {
  'nav.home':'Strona główna','nav.whyHireMe':'Dlaczego ja?','nav.about':'O mnie',
  'nav.services':'Usługi','nav.experience':'Doświadczenie','nav.projects':'Projekty',
  'nav.blog':'Blog','nav.testimonials':'Opinie','nav.contact':'Kontakt',
  'nav.menu':'Menu','nav.navigation':'Nawigacja',
  'hero.available':'Dostępny do pracy!',
  'hero.workTypes':'Full-time · Freelance · Kontrakt · Zdalnie lub na miejscu',
  'hero.based':'Baza na Ukrainie. Dostępny dla EU, PL, DE, NL — zdalnie lub na miejscu.',
  'hero.title':'Cześć, jestem','hero.brand':'codewell-dev','hero.role':'Full Stack Developer',
  'hero.description':'Buduję szybkie, skalowalne aplikacje webowe z React, Next.js i Node.js. 3.5+ roku dostarczania oprogramowania produkcyjnego dla startupów w Europie. Czysty kod, świetne UX i pełna odpowiedzialność za projekt.',
  'hero.cta.contact':'Skontaktuj się','hero.cta.projects':'Moje projekty','hero.cta.cv':'Pobierz CV',
  'hero.stats.years':'3.5+ lat','hero.stats.reviews':'10+ opinii 5-gwiazdkowych',
  'hero.stats.response':'Odpowiedź 24–48h','hero.stats.visits':'80k+ odwiedzin',
  'about.heading':'O mnie','about.subtitle':'Developer za codewell-dev.',
  'about.p1':"Jestem full-stack developerem z naciskiem na frontend. Buduję szybkie aplikacje webowe z React.js, Next.js, TypeScript i Tailwind CSS. Pracuję pod marką codewell-dev — ale zawsze rozmawiasz bezpośrednio ze mną.",
  'about.p2':'Zrealizowałem platformy e-commerce, systemy CRM, dashboardy i landing pages dla klientów z całej Europy. Mój stack to React, Node.js, PostgreSQL, MongoDB i Docker.',
  'about.quote':'"Budowałem oprogramowanie dla startupów, firm produktowych i agencji — zawsze skupiając się na wydajności, czystej architekturze i kodzie, z którym następny developer będzie chciał pracować."',
  'about.p3':'Poza kodem uczę się nowych technologii, kontrybujuję do open source i gram w szachy. Szukam projektów, w których mogę mieć realny wpływ.',
  'whyHire.heading':'Dlaczego ja?','whyHire.subheading':'Współpraca ze mną — 4 proste powody.',
  'whyHire.r1.title':'Sprawdzone doświadczenie','whyHire.r1.desc':'3.5+ lat produkcji — React, Node.js, MERN. Realni klienci, realne wyniki.',
  'whyHire.r2.title':'Szybka odpowiedź','whyHire.r2.desc':'Odpowiedź w 24–48h. Proaktywna komunikacja przez cały projekt.',
  'whyHire.r3.title':'Przejrzyste ceny','whyHire.r3.desc':'Zero ukrytych kosztów. Fixed-price lub stawka godzinowa.',
  'whyHire.r4.title':'Pełna odpowiedzialność','whyHire.r4.desc':'Od pomysłu lub Figmy do działającej aplikacji produkcyjnej.',
  'whyHire.cta.label':'Podsumowanie','whyHire.cta.heading':'Gotowy zacząć?',
  'whyHire.cta.desc':'Opisz swój projekt — odpiszę w ciągu 24–48 godzin. Bez rejestracji.',
  'whyHire.cta.button':'Napisz do mnie','whyHire.cta.booking':'Dostępny teraz · EU / Zdalnie',
  'services.heading':'Jak mogę pomóc','services.subheading':'Usługi, które dostarczam klientom z EU.',
  'services.intro':'React, Next.js i full-stack development. Dostępny na freelance i kontrakty.',
  'services.popular':'Najczęściej zamawiane','services.discuss':'Omów usługę','services.stackLabel':'Stack i narzędzia',
  'services.frontend.title':'Frontend Development','services.frontend.desc':'Produkcyjne UI w React lub Next.js z integracjami zewnętrznymi i bramkami płatności.',
  'services.fullstack.title':'Full Stack Development','services.fullstack.desc':'Kompletne aplikacje MERN z auth, rolami i real-time. Skalowalne bez przepisywania.',
  'services.database.title':'Baza danych i backend','services.database.desc':'Schematy, zapytania i integracje — MongoDB, PostgreSQL, Firebase lub MySQL.',
  'services.performance.title':'Optymalizacja wydajności','services.performance.desc':'Core Web Vitals, Lighthouse, rozmiar bundle — przewidywalne czasy ładowania.',
  'services.architecture.title':'Architektura frontendu','services.architecture.desc':'Czytelne granice komponentów i API-kontrakty. Nowe funkcje bez bałaganu.',
  'services.devops.title':'Wdrożenie i DevOps','services.devops.desc':'Docker, CI/CD, Vercel i Netlify. Niezawodny launch produkcyjny.',
  'experience.heading':'Moje doświadczenie','experience.subheading':'Doświadczenie zawodowe zdobyte przez kilka lat.',
  'projects.heading':'Moje projekty','projects.subheading':'Projekty, które zbudowałem — każdy rozwiązuje realny problem.',
  'projects.viewMore':'Więcej na GitHub','projects.preview':'Podgląd','projects.github':'GitHub',
  'blog.heading':'Notatki inżynierskie','blog.subheading':'Artykuły o React, Next.js i wdrożeniach na rynek EU.',
  'blog.cta':'Wszystkie artykuły',
  'testimonials.heading':'Opinie','testimonials.subheading':'Co mówią klienci o mojej pracy',
  'testimonials.prev':'Poprzednia','testimonials.next':'Następna',
  'contact.heading':'Napisz do mnie','contact.subheading':'Napisz bezpośrednio na',
  'contact.note':'Dostępny na full-time, freelance i kontrakty — EU, PL, UA, zdalnie.',
  'contact.name.label':"Twoje imię",'contact.name.placeholder':'Imię i nazwisko',
  'contact.email.label':'Email','contact.email.placeholder':'ty@firma.pl',
  'contact.details.label':'Opis projektu','contact.details.placeholder':'Cel, timeline, zakres i jak zmierzysz sukces.',
  'contact.budget.label':'Szacowany budżet','contact.timeline.label':'Timeline',
  'contact.timeline.placeholder':'np. ASAP, 2 tygodnie, 1 miesiąc',
  'contact.submit':'Wyślij szczegóły projektu','contact.submitting':'Wysyłanie…',
  'contact.success':'Dziękuję! Odezwę się w ciągu 24–48 godzin.',
  'contact.error':'Coś poszło nie tak. Spróbuj ponownie.','contact.privacy':'Zero spamu. Twoje dane są prywatne.',
  'footer.rights':'Wszelkie prawa zastrzeżone.','theme.toggle':'Zmień motyw',
};

const uk: T = {
  'nav.home':'Головна','nav.whyHireMe':'Чому я?','nav.about':'Про мене',
  'nav.services':'Послуги','nav.experience':'Досвід','nav.projects':'Проєкти',
  'nav.blog':'Блог','nav.testimonials':'Відгуки','nav.contact':'Контакт',
  'nav.menu':'Меню','nav.navigation':'Навігація',
  'hero.available':'Доступний для роботи!',
  'hero.workTypes':'Full-time · Фріланс · Контракт · Дистанційно або на місці',
  'hero.based':'Живу в Україні. Доступний для EU, PL, DE, NL проєктів — дистанційно.',
  'hero.title':'Привіт, я —','hero.brand':'codewell-dev','hero.role':'Full Stack розробник',
  'hero.description':'Будую швидкі, масштабовані веб-застосунки на React, Next.js і Node.js. 3.5+ роки продакшн-розробки для стартапів і продуктових команд. Чистий код, крутий UX, end-to-end відповідальність.',
  'hero.cta.contact':"Зв'язатися",'hero.cta.projects':'Мої проєкти','hero.cta.cv':'Завантажити CV',
  'hero.stats.years':'3.5+ роки','hero.stats.reviews':'10+ відгуків на 5 зірок',
  'hero.stats.response':'Відповідь 24–48г','hero.stats.visits':'80k+ відвідувань',
  'about.heading':'Про мене','about.subtitle':'Розробник за codewell-dev.',
  'about.p1':"Я full-stack розробник з акцентом на фронтенд. Будую швидкі веб-застосунки на React.js, Next.js, TypeScript і Tailwind CSS. Працюю під брендом codewell-dev — але ти завжди спілкуєшся зі мною особисто.",
  'about.p2':"Реалізував e-commerce платформи, CRM-системи, дашборди і лендінги для клієнтів по всій Європі. Мій стек: React, Node.js, PostgreSQL, MongoDB і Docker.",
  'about.quote':'"Я будував програмне забезпечення для стартапів, продуктових компаній і агенцій — завжди з фокусом на продуктивності, чистій архітектурі і коді, з яким приємно працювати."',
  'about.p3':"Поза роботою вивчаю нові технології, контриб'ючу в open source і граю в шахи. Шукаю проєкти, де можу зробити реальний вплив.",
  'whyHire.heading':'Чому я?','whyHire.subheading':'Робота зі мною — 4 прості причини.',
  'whyHire.r1.title':'Перевірений досвід','whyHire.r1.desc':'3.5+ роки продакшну — React, Node.js, MERN. Реальні клієнти, реальні результати.',
  'whyHire.r2.title':'Швидка відповідь','whyHire.r2.desc':'Відповідь за 24–48г. Проактивна комунікація протягом усього проєкту.',
  'whyHire.r3.title':'Прозорі ціни','whyHire.r3.desc':'Жодних прихованих витрат. Фіксована ціна або погодинна оплата.',
  'whyHire.r4.title':'End-to-end відповідальність','whyHire.r4.desc':'Від ідеї або Figma до задеплоєного продакшн-застосунку.',
  'whyHire.cta.label':'Підсумок','whyHire.cta.heading':'Готовий почати?',
  'whyHire.cta.desc':"Розкажи про свій проєкт — відповім протягом 24–48 годин.",
  'whyHire.cta.button':'Написати мені','whyHire.cta.booking':'Доступний зараз · EU / Дистанційно',
  'services.heading':'Чим можу допомогти','services.subheading':'Продакшн-послуги для EU клієнтів.',
  'services.intro':'React, Next.js і full-stack розробка. Доступний для фрілансу і контрактів.',
  'services.popular':'Найбільш запитуваний','services.discuss':'Обговорити послугу','services.stackLabel':'Стек і інструменти',
  'services.frontend.title':'Frontend розробка','services.frontend.desc':'Продакшн UI на React або Next.js зі сторонніми інтеграціями та платіжними шлюзами.',
  'services.fullstack.title':'Full Stack розробка','services.fullstack.desc':'End-to-end MERN застосунки з авторизацією, ролями та реалтаймом.',
  'services.database.title':'База даних і бекенд','services.database.desc':'Схеми, запити та інтеграції — MongoDB, PostgreSQL, Firebase або MySQL.',
  'services.performance.title':'Оптимізація продуктивності','services.performance.desc':'Core Web Vitals, Lighthouse, бандл — передбачувані часи завантаження.',
  'services.architecture.title':'Фронтенд архітектура','services.architecture.desc':'Чіткі межі компонентів і API-контракти. Нові фічі без хаосу.',
  'services.devops.title':'Деплой і DevOps','services.devops.desc':'Docker, CI/CD, Vercel і Netlify. Надійний продакшн-запуск.',
  'experience.heading':'Мій досвід','experience.subheading':'Професійний досвід, накопичений протягом кількох років.',
  'projects.heading':'Мої проєкти','projects.subheading':'Проєкти, які я побудував — кожен вирішує реальну задачу.',
  'projects.viewMore':'Більше на GitHub','projects.preview':'Переглянути','projects.github':'GitHub',
  'blog.heading':'Нотатки розробника','blog.subheading':'Статті про React, Next.js і запуск на EU ринок.',
  'blog.cta':'Всі статті',
  'testimonials.heading':'Відгуки','testimonials.subheading':'Що кажуть клієнти про мою роботу',
  'testimonials.prev':'Попередній','testimonials.next':'Наступний',
  'contact.heading':'Зв\'язатися','contact.subheading':'Напиши мені безпосередньо на',
  'contact.note':"Доступний для full-time, фрілансу і контрактів — EU, PL, UA, дистанційно.",
  'contact.name.label':"Твоє ім'я",'contact.name.placeholder':"Повне ім'я",
  'contact.email.label':'Email','contact.email.placeholder':'ти@компанія.com',
  'contact.details.label':'Опис проєкту','contact.details.placeholder':'Мета, таймлайн, скоуп і як виміряєш успіх.',
  'contact.budget.label':'Орієнтовний бюджет','contact.timeline.label':'Таймлайн',
  'contact.timeline.placeholder':'наприклад ASAP, 2 тижні, 1 місяць',
  'contact.submit':'Надіслати деталі проєкту','contact.submitting':'Надсилаємо…',
  'contact.success':"Дякую! Відповім протягом 24–48 годин.",
  'contact.error':'Щось пішло не так. Спробуй ще раз.','contact.privacy':'Жодного спаму. Твої дані приватні.',
  'footer.rights':'Всі права захищені.','theme.toggle':'Змінити тему',
};

export const translations: Record<Locale, T> = { en, pl, uk };
export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale]?.[key] ?? translations['en'][key] ?? key;
}
