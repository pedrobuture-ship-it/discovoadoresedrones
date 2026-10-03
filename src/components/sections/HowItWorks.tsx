import React, { useState, useEffect } from 'react';
import { Package, Search, ClipboardCheck, Rocket, Gamepad2 } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { Waypoint } from '../ui/Waypoint';
import { useMode } from '../../context/ModeContext';

const DRONES_WP = [
  { icon: Package, title: 'Envio ou Entrega do Drone', description: 'Traga o equipamento pessoalmente ou combine o envio direto com Cliceu.' },
  { icon: Search, title: 'Diagnóstico Técnico', description: 'Inspeção completa de motores, placa, sensores e estrutura para achar a causa real da falha.' },
  { icon: ClipboardCheck, title: 'Orçamento Sem Compromisso', description: 'Você recebe o valor e o prazo antes de aprovar qualquer reparo.' },
  { icon: Rocket, title: 'Conserto e Teste de Voo', description: 'Reparo executado e testado em voo real antes da devolução do equipamento.' },
];

const CONTROLES_WP = [
  { icon: Package, title: 'Envio ou Entrega', description: 'Traga o controle pessoalmente ou envie via transportadora/Correios.' },
  { icon: Search, title: 'Diagnóstico Técnico', description: 'Análise de drift, botões falhando, problemas de bateria e placa.' },
  { icon: ClipboardCheck, title: 'Orçamento', description: 'Você recebe o valor e o prazo antes de aprovar qualquer reparo.' },
  { icon: Gamepad2, title: 'Conserto e Teste', description: 'Reparo executado e testado no gamepad tester com garantia de 100% de precisão.' },
];

export function HowItWorks() {
  const { mode } = useMode();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayMode, setDisplayMode] = useState(mode);

  useEffect(() => {
    if (mode !== displayMode) {
      setIsTransitioning(true);
      const t = setTimeout(() => {
        setDisplayMode(mode);
        setIsTransitioning(false);
        // Retrigger reveal on new elements to make sure they appear instantly without waiting for scroll
        setTimeout(() => {
          document.querySelectorAll('#como-funciona .reveal:not(.revealed)').forEach(el => el.classList.add('revealed'));
        }, 50);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [mode, displayMode]);

  const steps = displayMode === 'drones' ? DRONES_WP : CONTROLES_WP;

  return (
    <Section id="como-funciona" alt>
      <SectionTitle
        label="ROTA DE REPARO"
        title="Como funciona nosso processo"
      />
      
      <div className={`relative mt-16 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {/* Linha e pulso (visíveis apenas em telas sm+) */}
        <div className="hidden sm:block absolute top-6 left-6 right-6 h-[2px] waypoint-line -z-10">
          <div className="waypoint-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap-6 stagger">
          {steps.map((step, index) => (
            <Waypoint 
              key={`${displayMode}-${index}`}
              index={`WP-0${index + 1}`}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
