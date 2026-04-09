'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from './button';
import { Icons } from './icons';
import { useLocale } from '@/components/locale-provider';
import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];
type TProps = { project: TProject; index: number };

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { t } = useLocale();
  const { image, title, description, technologies, links } = project;

  return (
    <motion.article
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="flex flex-col rounded border p-5 md:w-1/2"
    >
      {image.startsWith('http') ? (
        <img
          src={image}
          alt={title}
          className="max-h-[300px] w-full rounded object-contain transition-transform hover:scale-105"
        />
      ) : (
        <Image
          src={image}
          alt={title}
          height={390}
          width={600}
          className="max-h-[300px] rounded object-contain transition-transform hover:scale-105"
        />
      )}

      <h3 className="mt-3 text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground mb-2 mt-1">{description}</p>

      <ul className="flex flex-wrap gap-2" aria-label="Technologies">
        {technologies.map((tech) => (
          <li className="rounded-full border px-3 py-1 text-sm" key={tech}>
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-2">
        <Link href={links.preview} aria-label={`${title} live preview`} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Icons.preview className="size-4" />
            {t('projects.preview')}
          </Button>
        </Link>
        <Link href={links.github} aria-label={`${title} GitHub`} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Icons.github className="size-4" />
            GitHub
          </Button>
        </Link>
      </div>
    </motion.article>
  );
};
