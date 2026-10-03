import React from 'react';

interface Props {
  label: string;
  title: string;
  description?: string;
}

export function SectionTitle({ label, title, description }: Props) {
  return (
    <div className="reveal max-w-2xl mb-14">
      <span className="font-mono text-xs tracking-widest text-cyan-400">
        {label}
      </span>
      <h2 className="font-display font-700 text-3xl sm:text-4xl text-white mt-3">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-400 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
