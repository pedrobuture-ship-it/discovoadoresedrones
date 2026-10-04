import React from 'react';
import { Crown, Wrench, Check } from 'lucide-react';

interface Props {
  title: string;
  price: string;
  isPremium?: boolean;
  desc1: string;
  desc2: string;
  highlightDesc?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}

export function PricingTier({ title, price, isPremium, desc1, desc2, highlightDesc, selected = false, onSelect }: Props) {
  const base = isPremium
    ? 'border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-transparent hover:border-blue-500/60'
    : 'border-line/60 bg-bg-900/40 hover:border-cyan-400/40';

  const active = isPremium
    ? 'border-blue-400 bg-gradient-to-r from-blue-500/20 to-blue-500/5 shadow-[0_0_18px_rgba(59,130,246,0.25)]'
    : 'border-cyan-400 bg-cyan-400/[0.07] shadow-[0_0_18px_rgba(34,211,238,0.18)]';

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group relative w-full text-left p-4 rounded-md border transition-all duration-200 cursor-pointer
        focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60
        ${selected ? `${active} -translate-y-0.5` : `${base} hover:-translate-y-0.5`}`}
    >
      <span
        className={`inline-flex items-center gap-1 mb-2 px-2 py-0.5 rounded-full border font-mono text-[9px] tracking-widest uppercase
          ${isPremium
            ? 'border-blue-400/30 bg-blue-500/10 text-blue-300'
            : 'border-cyan-400/25 bg-cyan-400/[0.08] text-cyan-300'}`}
      >
        <span className={`w-1 h-1 rounded-full ${isPremium ? 'bg-blue-300' : 'bg-cyan-300'}`} />
        Serviço de Analógico
      </span>
      <div className="flex items-center justify-between mb-2 gap-3">
        <div className={`flex items-center gap-2 font-display font-700 text-sm ${isPremium ? 'text-yellow-400' : 'text-slate-200'}`}>
          {/* Indicador de seleção */}
          <span
            className={`flex items-center justify-center w-4 h-4 rounded-full border transition-all duration-200 shrink-0
              ${selected
                ? (isPremium ? 'bg-blue-400 border-blue-400' : 'bg-cyan-400 border-cyan-400')
                : 'border-slate-600 group-hover:border-cyan-400/60'}`}
          >
            <Check className={`w-3 h-3 text-bg-950 transition-transform duration-200 ${selected ? 'scale-100' : 'scale-0'}`} strokeWidth={3} />
          </span>
          {isPremium && <Crown className="w-4 h-4 text-yellow-400" />}
          {title}
        </div>
        <span className={`font-mono text-xs tracking-wider ${isPremium ? 'text-blue-400' : 'text-cyan-400'}`}>
          {price}
        </span>
      </div>
      <p className={`text-[11px] font-mono tracking-tight mb-1.5 ${highlightDesc ? 'text-cyan-400' : 'text-slate-400'}`}>
        {desc1}
      </p>
      <div className="flex items-start gap-1.5 text-xs text-slate-500">
        <Wrench className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-600" />
        <span className="leading-tight">{desc2}</span>
      </div>
    </button>
  );
}
