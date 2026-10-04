import React from 'react';
import { Section } from '../ui/Section';
import { useMode } from '../../context/ModeContext';

export function FinalCTA() {
  const { mode } = useMode();

  const title = mode === 'drones'
    ? 'Pronto para colocar seu drone de volta no ar?'
    : 'Pronto para voltar a jogar sem frustração?';

  return (
    <Section id="cta" className="text-center pb-28 md:pb-40 border-b-0">
      <div className="reveal max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="font-display font-700 text-3xl sm:text-5xl text-slate-900 dark:text-white mb-10 leading-tight">
          {title}
        </h2>
      </div>
    </Section>
  );
}
