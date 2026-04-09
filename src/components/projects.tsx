'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useLocale } from '@/components/locale-provider';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const { ref } = useSectionInView('Projects');
  const { t } = useLocale();

  return (
    <section ref={ref} id="projects" className="my-10 w-full scroll-mt-28 md:mb-20">
      <SectionHeading heading={t('projects.heading')} content={t('projects.subheading')} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            viewport={{ once: true }}
            className="group flex flex-col rounded-lg border bg-card p-5 transition-all duration-300 hover:shadow-md hover:border-primary/20"
          >
            {/* Project image */}
            <div className="mb-4 overflow-hidden rounded-md border bg-muted">
              {project.image.startsWith('http') ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={208}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              )}
            </div>

            {/* Title — serif */}
            <h3 className="font-heading mb-2 text-xl font-medium">{project.title}</h3>

            {/* Description */}
            <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech tags */}
            <ul className="mb-4 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <li key={tech} className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">
                  {tech}
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.links.preview} target="_blank" rel="noopener noreferrer">
                  <Icons.preview className="mr-1.5 size-3.5" />
                  {t('projects.preview')}
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Icons.github className="mr-1.5 size-3.5" />
                  {t('projects.github')}
                </Link>
              </Button>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 flex justify-center"
      >
        <Button variant="outline" asChild>
          <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            {t('projects.viewMore')}
            <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

import { siteConfig } from '@/lib/site-config';
