import React, { ReactNode } from 'react';

interface Props {
  id?: string;
  children: ReactNode;
  alt?: boolean;
  className?: string;
}

export function Section({ id, children, alt, className = '' }: Props) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 border-t border-slate-200 dark:border-line/70 ${
        alt ? 'bg-white dark:bg-bg-900/40' : ''
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">{children}</div>
    </section>
  );
}
