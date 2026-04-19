import { Icons } from '@/components/icons';

export const links = [
  { name: 'Home', hash: '#home' },
  { name: 'Why hire me', hash: '#why-hire-me' },
  { name: 'About', hash: '#about' },
  { name: 'Services', hash: '#services' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Blog', hash: '#blog' },
  { name: 'Testimonials', hash: '#testimonials' },
  { name: 'Contact', hash: '#contact' },
] as const;

export type NavLink = (typeof links)[number];

export const projectsData = [
  {
    image: '/images/pizzahouse.png',
    title: 'Pizza House — Food Ordering Platform',
    description:
      'Full-featured food ordering platform built with Next.js and NestJS. Real-time order management, product catalog, and cart system backed by MongoDB.',
    technologies: ['React', 'MaterialUI', 'NestJS', 'MongoDB'],
    links: {
      preview: 'https://pizza-house-client-ochre.vercel.app/',
      github: 'https://github.com/codewell-dev/pizza-house-client',
    },
  },
  {
    image: '/images/portfolio.png',
    title: 'codewell-dev Portfolio',
    description:
      'This portfolio site. Built with Next.js, multilingual (EN/PL/UK), full SEO — JSON-LD, hreflang, Open Graph.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    links: {
      preview: 'https://codewell-dev-portfolio.vercel.app',
      github: 'https://github.com/codewell-dev/codewell-dev-portfolio',
    },
  },
  {
    image: '/images/forma.png',
    title: 'FORMA — Premium E-commerce Experience',
    description:
      'Production-grade e-commerce storefront built with Next.js 14 and Redux Toolkit. Designed as a dark luxury brand with a custom design system, immersive UI, and real-world architecture including product catalog, cart state persistence, and dynamic data fetching via RTK Query.',
    technologies: [
      'Next.js 14',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'RTK Query',
    ],
    links: {
      preview: 'https://next-shop-ih5f.vercel.app/',
      github: 'https://github.com/codewell-dev/next-shop',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Full Stack Developer',
    company: 'Freelance',
    description:
      'Running my own freelance practice under the codewell-dev brand. I deliver responsive web applications, e-commerce platforms, and custom SaaS solutions for clients across Europe — end-to-end, from architecture to deployment.',
    period: '2023 – Present',
    technologies: [
      'React.js',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Express',
      'TypeScript',
      'Tailwind CSS',
      'Docker',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Norrspark, Poland (Remote)',
    description:
      'Built dashboards and internal tools using the MERN stack for a Polish tech company. Focused on responsive design, smooth user interfaces, and seamless API integrations with React.js and Next.js.',
    period: '2021 – 2023',
    technologies: [
      'Next.js',
      'React.js',
      'Material-UI',
      'Node.js',
      'MongoDB',
      'Express',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
      'RESTful API',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" />, label: 'HTML5' },
  { icon: <Icons.css className="size-12" />, label: 'CSS3' },
  { icon: <Icons.sass className="size-12" />, label: 'Sass' },
  { icon: <Icons.tailwind className="size-12" />, label: 'Tailwind CSS' },
  { icon: <Icons.javascript className="size-12" />, label: 'JavaScript' },
  { icon: <Icons.typescript className="size-12" />, label: 'TypeScript' },
  { icon: <Icons.react className="size-12" />, label: 'React' },
  { icon: <Icons.nextjs className="size-12" />, label: 'Next.js' },
  { icon: <Icons.nestjs className="size-12" />, label: 'NestJS' },
  { icon: <Icons.docker className="size-12" />, label: 'Docker' },
] as const;

export const testimonialsData = [
  {
    name: 'Oleksandr Petrenko',
    position: 'CTO at SoftVision Labs',
    company: 'Kyiv, Ukraine',
    content:
      'I had the pleasure of working with codewell-dev on several full-stack projects. Strong MERN knowledge and real attention to detail — consistently delivered clean, scalable code and handled every challenge professionally. Highly recommended.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Iryna Kovalenko',
    position: 'Project Manager at TechNova',
    company: 'Lviv, Ukraine',
    content:
      'codewell-dev built our internal dashboard from scratch. Complex requirements were understood quickly and translated into a UI that was fast, responsive, and visually on-brand. Delivery was on time and communication was excellent throughout.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Andrii Shevchenko',
    position: 'Head of IT at GreenCloud Solutions',
    company: 'Odesa, Ukraine',
    content:
      'Great work modernizing our legacy app using React and Node.js. Performance and maintainability improved significantly. Proactive, communicative, and always pushing for the best possible result.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
] as const;

export const blogPostsData = [
  {
    slug: 'react-performance-production',
    category: 'Performance',
    readTime: '8 min read',
    badge: '90–100 Lighthouse target',
    title: 'React Performance Patterns I Actually Use in Production',
    excerpt:
      'Memoization, code-splitting, and lazy loading applied correctly — how I consistently hit 90+ Lighthouse scores without sacrificing developer experience.',
    date: 'Mar 2025',
    takeaways: '4 takeaways',
  },
  {
    slug: 'mern-architecture-scale',
    category: 'Architecture',
    readTime: '10 min read',
    badge: 'Clear system design',
    title: "How I Structure MERN Stack Apps That Don't Fall Apart at Scale",
    excerpt:
      'Folder conventions, API contracts, and state boundaries that let me add new features fast without touching half the codebase.',
    date: 'Feb 2025',
    takeaways: '3 takeaways',
  },
  {
    slug: 'nextjs-seo-eu-market',
    category: 'SEO',
    readTime: '7 min read',
    badge: 'EU market visibility',
    title: 'Next.js SEO for the EU Market — hreflang, JSON-LD, and llms.txt',
    excerpt:
      'How I make client sites rank on Google.pl and Google.de — plus the AI-crawler layer that puts you in ChatGPT and Perplexity answers.',
    date: 'Jan 2025',
    takeaways: '3 takeaways',
  },
] as const;
