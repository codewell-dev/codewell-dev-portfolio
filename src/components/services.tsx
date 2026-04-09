'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { useLocale } from '@/components/locale-provider';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

type Service = {
  id: string;
  popular?: boolean;
  titleKey: string;
  descKey: string;
  stack: string[];
  Icon: React.FC<{ className?: string }>;
};

const IconCode = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconLayers = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);
const IconDB = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
  </svg>
);
const IconGauge = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 6v6l4 2" />
  </svg>
);
const IconGrid = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
  </svg>
);
const IconBox = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);

const SERVICES: Service[] = [
  { id: 'frontend',     popular: true,  Icon: IconCode,   titleKey: 'services.frontend.title',     descKey: 'services.frontend.desc',     stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs'] },
  { id: 'fullstack',    popular: true,  Icon: IconLayers, titleKey: 'services.fullstack.title',    descKey: 'services.fullstack.desc',    stack: ['MERN Stack', 'Node.js', 'Express', 'JWT', 'OAuth', 'Socket.io'] },
  { id: 'database',                     Icon: IconDB,     titleKey: 'services.database.title',     descKey: 'services.database.desc',     stack: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Prisma', 'Redis'] },
  { id: 'performance',  popular: true,  Icon: IconGauge,  titleKey: 'services.performance.title',  descKey: 'services.performance.desc',  stack: ['Core Web Vitals', 'Lighthouse', 'Code Splitting', 'Lazy Loading', 'Caching'] },
  { id: 'architecture', popular: true,  Icon: IconGrid,   titleKey: 'services.architecture.title', descKey: 'services.architecture.desc', stack: ['TypeScript', 'Zustand', 'State Management', 'API Design', 'Monorepo'] },
  { id: 'devops',                       Icon: IconBox,    titleKey: 'services.devops.title',       descKey: 'services.devops.desc',       stack: ['Docker', 'CI/CD', 'GitHub Actions', 'Vercel', 'Netlify', 'Linux'] },
];

export const Services = () => {
  const { ref } = useSectionInView('Services', 0.2);
  const { t } = useLocale();

  return (
    <section ref={ref} id="services" className="my-10 w-full scroll-mt-28 md:mb-20">
      <SectionHeading heading={t('services.heading')} content={t('services.subheading')} />

      
      <p className="text-muted-foreground mb-8 text-center text-sm">{t('services.intro')}</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ id, popular, Icon, titleKey, descKey, stack }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i, duration: 0.4 }}
            viewport={{ once: true }}
            className="group relative flex flex-col rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20"
          >
            {/* Most requested badge */}
            {popular && (
              <span className="absolute right-4 top-4 rounded-full border bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                {t('services.popular')}
              </span>
            )}

            {/* Icon */}
            <Icon className="mb-4 size-6 text-foreground/70" />

            {/* Title */}
            <h3 className="mb-2 pr-24 text-base font-semibold leading-snug">
              {t(titleKey as any)}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
              {t(descKey as any)}
            </p>

            {/* Stack & tools label */}
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {t('services.stackLabel')}
            </p>

            {/* Stack tags */}
            <ul className="mb-5 flex flex-wrap gap-1.5">
              {stack.map((tech) => (
                <li key={tech} className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">
                  {tech}
                </li>
              ))}
            </ul>

            {/* CTA link */}
            <Link
              href={`#contact?service=${id}`}
              className="mt-auto inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t('services.discuss')}
              <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
