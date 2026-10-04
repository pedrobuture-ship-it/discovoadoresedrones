import React from 'react';

interface Props {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionTitle({ label, title, description, centered = false }: Props) {
  return (
    <div className={`reveal max-w-2xl mb-14 ${centered ? 'mx-auto text-center' : ''}`}>
      <span className="font-mono text-xs tracking-widest text-cyan-600 dark:text-cyan-400">
        {label}
      </span>
      <h2 className="font-display font-700 text-3xl sm:text-4xl text-slate-900 dark:text-white mt-3">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
