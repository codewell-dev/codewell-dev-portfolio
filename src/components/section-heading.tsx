import { type ReactNode } from 'react';

type Props = {
  heading: string;
  content?: ReactNode;
};

export const SectionHeading = ({ heading, content }: Props) => {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      
      <h2 className="font-heading text-4xl font-medium tracking-tight md:text-5xl">
        {heading}
      </h2>
      {content && (
        <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed">
          {content}
        </p>
      )}
    </div>
  );
};
