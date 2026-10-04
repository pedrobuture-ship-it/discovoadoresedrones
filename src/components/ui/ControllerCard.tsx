import React, { useRef, useState, useEffect } from 'react';
import { Gamepad, MessageCircle, X, ShieldCheck } from 'lucide-react';
import { ModelViewer } from '../three/ModelViewer';
import { PricingTier } from './PricingTier';
import { ExtraRepairsBox } from './ExtraRepairsBox';
import { buildWhatsAppUrl } from '../../design/tokens';

interface Tier {
  title: string;
  price: string;
  desc1: string;
  desc2: string;
  highlightDesc?: boolean;
  isPremium?: boolean;
}

interface Props {
  platform: string;
  modelPath: string;
  scale?: number;
  tiers: Tier[];
  isActive?: boolean;
  onBecomeActive?: () => void;
}

function buildMessage(platform: string, tier: Tier) {
  return [
    'Olá! Vim pelo site e quero fazer este reparo:',
    '',
    `🎮 Controle: ${platform}`,
    `🔧 Serviço: ${tier.title} — ${tier.price}`,
    `🛡️ ${tier.desc1}`,
    `⚙️ ${tier.desc2}`,
    '',
    'Pode me passar o prazo e como enviar o controle?',
  ].join('\n');
}

export function ControllerCard({ platform, modelPath, scale = 1, tiers, isActive = true, onBecomeActive }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [extraRepairs, setExtraRepairs] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!isActive) {
      setSelected(null);
      setExtraRepairs(new Set());
    }
  }, [isActive]);

  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selected !== null && panelRef.current) {
      const t = setTimeout(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        panelRef.current?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' });
      }, 150);
      return () => clearTimeout(t);
    }
  }, [selected]);
  const isOpen = selected !== null;

  return (
    <div className="reveal flex flex-col border border-cyan-600 dark:border-cyan-500/30 bg-slate-900/50 rounded-2xl p-4 sm:p-6 hover:border-cyan-600 dark:border-cyan-500 dark:border-cyan-400 transition-colors duration-300">
      {/* 3D Area — modelo auto-enquadrado (centralizado + tamanho normalizado) */}
      <div className="h-48 sm:h-56 relative overflow-hidden bg-gradient-to-b from-bg-900 to-transparent pointer-events-none rounded-xl mb-2 sm:mb-4">
        <ModelViewer modelPath={modelPath} fitSize={2.2} scale={scale} autoRotate={true} />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col border-t border-slate-200 dark:border-line/50 pt-5">
        <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-200 dark:border-line/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-cyan-500/10 dark:bg-cyan-400/10 flex items-center justify-center">
              <Gamepad className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="font-display font-700 text-lg text-slate-900 dark:text-white">{platform}</h3>
          </div>
          <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">
            {isOpen ? 'Selecionado' : 'Escolha um reparo'}
          </span>
        </div>

        <div className="flex flex-col gap-3" role="group" aria-label={`Opções de reparo — ${platform}`}>
          {tiers.map((t, idx) => {
            const isThisSelected = selected === idx;
            return (
              <React.Fragment key={idx}>
                <PricingTier
                  {...t}
                  selected={isThisSelected}
                  onSelect={() => {
                    onBecomeActive?.();
                    setSelected(prev => {
                      if (prev !== idx) setExtraRepairs(new Set());
                      return prev === idx ? null : idx;
                    });
                  }}
                />
        <div
                  ref={isThisSelected ? panelRef : undefined}
                  className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
                    isThisSelected ? 'grid-rows-[1fr] opacity-100 mt-1 mb-1' : 'grid-rows-[0fr] opacity-0 mt-0 mb-0'
                  }`}
                  aria-hidden={!isThisSelected}
                >
                  <div className="overflow-hidden">
                    <div className="relative rounded-md border border-wa/40 bg-gradient-to-br from-wa/[0.12] via-slate-100 dark:via-bg-900/80 to-slate-100 dark:to-bg-900/80 p-4 overflow-hidden">
                      {/* scan sutil */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-wa/70 to-transparent" />

                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <p className="font-mono text-[10px] tracking-widest text-wa uppercase flex items-center gap-1.5">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-wa animate-pulse" />
                            Seleção pronta
                          </p>
                          <p className="mt-1.5 font-display font-700 text-slate-900 dark:text-white text-base leading-tight">
                            {platform} · {t.title}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setSelected(null)}
                          tabIndex={isThisSelected ? 0 : -1}
                          className="shrink-0 w-7 h-7 rounded flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                          aria-label="Limpar seleção"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between font-mono text-xs border-t border-slate-200 dark:border-line/40 pt-3 mb-4">
                        <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                          <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                          {t.desc1}
                        </span>
                        <span className="text-slate-900 dark:text-white font-600 text-sm">{t.price}</span>
                      </div>

                      <a
                        href={buildWhatsAppUrl(buildMessage(platform, t))}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={isThisSelected ? 0 : -1}
                        className="cta-pulse group flex w-full items-center justify-center gap-2 rounded-md bg-wa hover:bg-[#1fb958] text-white font-display font-700 text-sm px-4 py-4 transition-colors shadow-lg shadow-wa/25"
                      >
                        <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                        Enviar essa seleção pelo WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <ExtraRepairsBox 
          platform={platform} 
          checked={extraRepairs}
          onToggle={(id) => {
            onBecomeActive?.();
            setExtraRepairs(prev => {
              const next = new Set(prev);
              if (next.has(id)) next.delete(id);
              else next.add(id);
              return next;
            });
            setSelected(null);
          }}
        />
      </div>
    </div>
  );
}
