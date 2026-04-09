'use client';

import { motion } from 'framer-motion';

import { skillsData } from '@/lib/data';

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export const Skills = () => {
  return (
    <ul
      aria-label="Technical skills"
      className="mt-10 flex w-full flex-wrap justify-between gap-10 px-5 sm:justify-center sm:px-0 md:mt-14 lg:justify-between"
    >
      {skillsData.map(({ icon, label }, index) => (
        <motion.li
          key={label}
          title={label}
          aria-label={label}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
          className="transition-transform hover:scale-110"
        >
          {icon}
        </motion.li>
      ))}
    </ul>
  );
};
