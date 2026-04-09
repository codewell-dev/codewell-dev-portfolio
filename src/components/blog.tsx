'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useLocale } from '@/components/locale-provider';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { blogPostsData } from '@/lib/data';

export const Blog = () => {
  const { ref } = useSectionInView('Blog', 0.2);
  const { t } = useLocale();

  return (
    <section ref={ref} id="blog" className="my-10 w-full scroll-mt-28 md:mb-20">
      <SectionHeading heading={t('blog.heading')} content={t('blog.subheading')} />

      <div className="flex flex-col gap-4">
        {blogPostsData.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.4 }}
            viewport={{ once: true }}
            className="group flex flex-col gap-4 rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20 sm:flex-row sm:items-start"
          >
            {/* Left meta column */}
            <div className="flex shrink-0 flex-row items-center gap-2 sm:w-32 sm:flex-col sm:items-start sm:gap-1.5">
              <span className="rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
              {post.badge && (
                <span className="hidden text-xs text-muted-foreground sm:block">{post.badge}</span>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-heading mb-2 text-lg font-medium leading-snug transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.takeaways}</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden shrink-0 self-center sm:flex">
              <Icons.arrowRight className="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground" />
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        viewport={{ once: true }}
        className="mt-8 flex justify-center"
      >
        <Button variant="outline" asChild>
          <Link href="#contact">
            {t('blog.cta')}
            <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};
