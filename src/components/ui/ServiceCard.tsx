import React from 'react';
import { LucideIcon } from 'lucide-react';
import { HudFrame } from './HudFrame';

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: Props) {
  return (
    <HudFrame className="group reveal border border-line bg-bg-900/60 rounded-lg p-6 hover:bg-bg-900 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50">
      <div className="w-11 h-11 rounded-md bg-cyan-400/10 flex items-center justify-center mb-5 group-hover:bg-cyan-400/15 group-hover:rotate-[8deg] group-hover:scale-[1.08] transition-all duration-300">
        <Icon className="w-5 h-5 text-cyan-400" />
      </div>
      <h3 className="font-display font-700 text-lg text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{description}</p>
    </HudFrame>
  );
}
