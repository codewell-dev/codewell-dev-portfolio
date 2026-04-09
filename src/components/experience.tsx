'use client';

import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { useLocale } from '@/components/locale-provider';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';

export const Experience = () => {
  const { ref } = useSectionInView('Experience', 0.3);
  const { t } = useLocale();

  return (
    <section ref={ref} id="experience" className="my-10 w-full scroll-mt-28 md:mb-20">
      <SectionHeading heading={t('experience.heading')} content={t('experience.subheading')} />

      <div className="relative mx-auto max-w-screen-md">
        {experiencesData.map(({ title, description, company, period, technologies }, index) => (
          <div key={index} className="relative pl-10 [&:not(:last-child)]:pb-10">
            {/* Vertical timeline line */}
            <div className="absolute left-[11px] top-[28px] h-[calc(100%-10px)] w-px bg-border [&:last-child]:hidden" />

            {/* Timeline dot with building icon */}
            <div className="absolute left-0 top-1 flex size-6 items-center justify-center rounded-full border bg-background shadow-sm">
              <Icons.building className="size-3 text-muted-foreground" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {/* Company */}
              <div className="flex items-center gap-2">
                <span className="font-medium">{company}</span>
              </div>

              {/* Role — serif */}
              <h3 className="font-heading text-xl font-medium">{title}</h3>

              {/* Period */}
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Icons.calendar className="size-3.5" />
                <time>{period}</time>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>

              {/* Tech tags */}
              <ul className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <li key={`${tech}-${i}`} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
