'use client';

import { useEffect } from 'react';
import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { toast } from 'sonner';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useLocale } from '@/components/locale-provider';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { siteConfig } from '@/lib/site-config';

const BUDGET_OPTIONS_EN = [
  'Amount (optional)',
  'Under €500',
  '€500 – €2,000',
  '€2,000 – €5,000',
  '€5,000 – €15,000',
  '€15,000+',
];
const BUDGET_OPTIONS_PL = [
  'Kwota (opcjonalnie)',
  'Do €500',
  '€500 – €2 000',
  '€2 000 – €5 000',
  '€5 000 – €15 000',
  '€15 000+',
];
const BUDGET_OPTIONS_UK = [
  "Сума (необов'язково)",
  'До €500',
  '€500 – €2 000',
  '€2 000 – €5 000',
  '€5 000 – €15 000',
  '€15 000+',
];

export const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const { t, locale } = useLocale();
  const [state, handleSubmit] = useForm('xeorbazz');
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    const budget = formData.get('budget')?.toString() || '';
    const timeline = formData.get('timeline')?.toString() || '';

    const enrichedMessage = [
      message,
      budget && `Budget: ${budget}`,
      timeline && `Timeline: ${timeline}`,
    ]
      .filter(Boolean)
      .join(', ');

    const payload = {
      name,
      email,
      message: enrichedMessage,
    };

    try {
      await handleSubmit(payload);
    } catch (err) {
      console.error(err);
    }
  };

  const budgetOptions =
    locale === 'pl'
      ? BUDGET_OPTIONS_PL
      : locale === 'uk'
        ? BUDGET_OPTIONS_UK
        : BUDGET_OPTIONS_EN;

  useEffect(() => {
    if (state.succeeded) {
      toast.success(t('contact.success'));
      document.querySelector<HTMLFormElement>('form[data-contact]')?.reset();
    }
    if (state.errors && Object.keys(state.errors).length > 0) {
      toast.error(t('contact.error'));
    }
  }, [state.succeeded, state.errors, t]);

  const inputClass =
    'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10 w-full scroll-mt-28 md:mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading
        heading={t('contact.heading')}
        content={
          <>
            {t('contact.subheading')}{' '}
            <Button
              variant="link"
              className="text-muted-foreground hover:text-foreground h-fit p-0 font-medium underline transition-colors"
              asChild
            >
              <Link href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </Link>
            </Button>{' '}
            or through this form.
          </>
        }
      />

      <p className="text-muted-foreground mb-8 text-center text-sm max-w-lg mx-auto">
        {t('contact.note')}
      </p>

      <form
        data-contact
        onSubmit={onSubmit}
        className="flex flex-col items-center gap-4"
        noValidate
      >
        {/* Name */}
        <div className="w-full max-w-xl">
          <label htmlFor="name" className="text-sm font-medium leading-none">
            {t('contact.name.label')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t('contact.name.placeholder')}
            required
            autoComplete="name"
            className={`${inputClass} h-10`}
          />
        </div>

        {/* Email */}
        <div className="w-full max-w-xl">
          <label htmlFor="email" className="text-sm font-medium leading-none">
            {t('contact.email.label')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t('contact.email.placeholder')}
            required
            autoComplete="email"
            className={`${inputClass} h-10`}
          />
        </div>

        {/* Project details */}
        <div className="w-full max-w-xl">
          <label htmlFor="message" className="text-sm font-medium leading-none">
            {t('contact.details.label')} *
          </label>
          <textarea
            id="details"
            name="message"
            placeholder={t('contact.details.placeholder')}
            required
            rows={5}
            className={`${inputClass} h-40 resize-none`}
          />
        </div>

        {/* Budget */}
        <div className="w-full max-w-xl">
          <label htmlFor="budget" className="text-sm font-medium leading-none">
            {t('contact.budget.label')}
          </label>
          <select id="budget" name="budget" className={`${inputClass} h-10`}>
            {budgetOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div className="w-full max-w-xl">
          <label
            htmlFor="timeline"
            className="text-sm font-medium leading-none"
          >
            {t('contact.timeline.label')}
          </label>
          <input
            type="text"
            id="timeline"
            name="timeline"
            placeholder={t('contact.timeline.placeholder')}
            className={`${inputClass} h-10`}
          />
        </div>

        <Button type="submit" size="lg" disabled={state.submitting}>
          {state.submitting ? t('contact.submitting') : t('contact.submit')}{' '}
          <Icons.arrowRight className="ml-2 size-4" />
        </Button>

        <p className="text-muted-foreground text-xs">{t('contact.privacy')}</p>
      </form>
    </motion.section>
  );
};
