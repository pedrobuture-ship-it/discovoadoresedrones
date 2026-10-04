import React, { useState, useEffect, MouseEvent } from 'react';
import { ArrowDown } from 'lucide-react';
import { useMode } from '../../context/ModeContext';
import { StatusDot } from '../ui/StatusDot';
import { HudFrame } from '../ui/HudFrame';
import { Particle } from '../ui/Particle';

function scrollToServices(e: MouseEvent<HTMLAnchorElement>) {
  const target = document.getElementById('servicos');
  if (!target) return;
  e.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
}

export function Hero() {
  const { mode } = useMode();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayMode, setDisplayMode] = useState(mode);

  useEffect(() => {
    if (mode !== displayMode) {
      setIsTransitioning(true);
      const t = setTimeout(() => {
        setDisplayMode(mode);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [mode, displayMode]);

  const isDrones = displayMode === 'drones';

  const tagText = isDrones ? "TECNOLOGIA DE OUTRO MUNDO • PONTA GROSSA, PR" : "CONSOLES E CONTROLES • REPARO ESPECIALIZADO";
  const h1Text = isDrones ? "Seu drone caiu ou parou de voar? Ele volta ao ar com segurança." : "Controle com drift, botão travado ou sem resposta? Volta a funcionar como novo.";
  const subText = isDrones ? "motores, placas, câmeras, gimbal, sensores" : "analógicos, gatilhos, botões, placa, conexão sem fio";
  const badges = isDrones ? ["Diagnóstico Rápido", "Peças de Qualidade", "Teste Real de Voo"] : ["Analógicos Novos", "Peças Originais", "Teste em Console Real"];
  
  const reportRows = isDrones ? [
    ['OBJETO VOADOR', 'IDENTIFICADO'],
    ['DRONE ABDUZIDO', 'DEVOLVIDO INTEIRO'],
    ['DRONE COM DEFEITO', 'EM REPARO'],
    ['MISSÃO', 'COLOCAR SEU DRONE DE VOLTA AO CÉU']
  ] : [
    ['CONTROLADOR', 'IDENTIFICADO'],
    ['ANALÓGICOS', 'CALIBRADOS'],
    ['PLACA', 'REVISADA'],
    ['MISSÃO', 'DEVOLVER SUA PRECISÃO']
  ];

  return (
    <section className="relative pt-28 pb-28 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex items-center">
      <Particle top="20%" left="15%" size={8} delay={0} />
      <Particle top="60%" left="5%" size={4} delay={2} />
      <Particle top="30%" left="80%" size={6} delay={1} />
      <Particle top="70%" left="85%" size={10} delay={3} />

      <div 
        className={`w-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row gap-10 lg:gap-12 items-center relative z-10 transition-all duration-300 transform
          ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
        `}
      >
        <div className="reveal stagger w-full lg:w-1/2 min-w-0">
          <div className="flex items-center gap-2 mb-6">
            <span className="shrink-0 flex"><StatusDot /></span>
            <span className="font-mono text-[11px] sm:text-xs tracking-wider sm:tracking-widest text-cyan-600 dark:text-cyan-400 uppercase break-words">
              {tagText}
            </span>
          </div>

          <h1 className="font-display font-700 text-[2rem] sm:text-5xl md:text-6xl text-slate-900 dark:text-white leading-[1.1] mb-6 break-words">
            <span className="text-shimmer">{h1Text}</span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
            {subText}
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-8">
            <a
              id="hero-ver-servicos"
              href="#servicos"
              onClick={scrollToServices}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-400 dark:hover:bg-cyan-300 text-slate-900 dark:text-white dark:text-bg-950 font-display font-700 text-lg px-8 py-4 transition-all shadow-lg shadow-cyan-500/20 dark:shadow-cyan-400/20 w-full sm:w-auto"
            >
              Ver serviços
              <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-4">
            {badges.map(badge => (
              <span key={badge} className="px-3 py-1.5 rounded-full border border-cyan-600/20 dark:border-cyan-400/20 bg-white/50 dark:bg-bg-900/50 text-xs font-mono text-cyan-600 dark:text-cyan-300 backdrop-blur-sm">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal relative w-full lg:w-1/2 min-w-0 mb-8 lg:mb-0">
          <HudFrame className="border border-slate-200 dark:border-line/70 bg-white/70 dark:bg-bg-900/70 rounded-lg p-5 sm:p-8 overflow-hidden relative shadow-xl shadow-slate-200/50 dark:shadow-none">
            <div className="scan-line" />
            
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] sm:text-xs text-slate-500 mb-4 tracking-wider">
              <span>RELATÓRIO DE OCORRÊNCIA</span>
              <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-300">
                <StatusDot /> ATIVO
              </span>
            </div>

            <div className="h-[180px] sm:h-[300px] lg:h-[350px] flex items-center justify-center my-4 relative pointer-events-none">
               <img src="/ufo.svg" alt="UFO" className="w-full max-w-[200px] sm:max-w-[280px] lg:max-w-none lg:w-[70%] h-auto max-h-full mx-auto object-contain filter drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] dark:drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-transform duration-700 hover:scale-105" />
            </div>

            <div className="space-y-2.5 font-mono text-[11px] sm:text-xs mt-6">
              {reportRows.map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 border-b border-slate-200 dark:border-line/60 pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-slate-500 shrink-0">{label}</span>
                  <span className="text-cyan-600 dark:text-cyan-300 text-right break-words min-w-0 ml-auto">{value}</span>
                </div>
              ))}
            </div>

            <p className="mt-5 text-center text-xs text-slate-500 font-mono opacity-80">
              Para deixar bem claro: abduzimos apenas os problemas.
            </p>
          </HudFrame>
        </div>
      </div>
    </section>
  );
}
