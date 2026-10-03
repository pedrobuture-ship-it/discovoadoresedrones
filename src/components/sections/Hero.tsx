import React, { useState, useEffect, MouseEvent } from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { useMode } from '../../context/ModeContext';
import { StatusDot } from '../ui/StatusDot';
import { HudFrame } from '../ui/HudFrame';
import { Particle } from '../ui/Particle';
import { WHATSAPP_URL } from '../../design/tokens';

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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex items-center">
      <Particle top="20%" left="15%" size={8} delay={0} />
      <Particle top="60%" left="5%" size={4} delay={2} />
      <Particle top="30%" left="80%" size={6} delay={1} />
      <Particle top="70%" left="85%" size={10} delay={3} />

      <div 
        className={`max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10 transition-all duration-300 transform
          ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
        `}
      >
        <div className="reveal stagger">
          <div className="flex items-center gap-2 mb-6">
            <StatusDot />
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
              {tagText}
            </span>
          </div>

          <h1 className="font-display font-700 text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            <span className="text-shimmer">{h1Text}</span>
          </h1>

          <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
            {subText}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              id="hero-whatsapp"
              href={WHATSAPP_URL[displayMode]}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-wa hover:bg-[#1fb958] text-white font-display font-700 text-base px-6 py-3.5 transition-colors shadow-lg shadow-wa/20"
            >
              <MessageCircle className="w-5 h-5" />
              {isDrones ? 'Orçamento Drone' : 'Orçamento Controle'}
            </a>
            <a
              id="hero-ver-servicos"
              href="#servicos"
              onClick={scrollToServices}
              className="group inline-flex items-center gap-2 rounded-md border border-line bg-bg-900/50 hover:border-cyan-400/50 hover:text-cyan-300 text-slate-200 font-display font-600 text-base px-6 py-3.5 transition-colors backdrop-blur-sm"
            >
              Ver serviços
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            {badges.map(badge => (
              <span key={badge} className="px-3 py-1.5 rounded-full border border-cyan-400/20 bg-bg-900/50 text-xs font-mono text-cyan-300 backdrop-blur-sm">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal relative">
          <HudFrame className="border border-line/70 bg-bg-900/70 rounded-lg p-6 sm:p-8 overflow-hidden relative">
            <div className="scan-line" />
            
            <div className="flex items-center justify-between font-mono text-xs text-slate-500 mb-4 tracking-wider">
              <span>RELATÓRIO DE OCORRÊNCIA</span>
              <span className="flex items-center gap-1.5 text-cyan-300">
                <StatusDot /> ATIVO
              </span>
            </div>

            <div className="h-[250px] sm:h-[350px] flex items-center justify-center my-4 relative pointer-events-none">
               <img src="/ufo.svg" alt="UFO" className="w-[70%] h-[70%] object-contain filter drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-transform duration-700 hover:scale-105" />
            </div>

            <div className="space-y-2.5 font-mono text-xs mt-6">
              {reportRows.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-line/60 pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-slate-500">{label}</span>
                  <span className="text-cyan-300">{value}</span>
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
