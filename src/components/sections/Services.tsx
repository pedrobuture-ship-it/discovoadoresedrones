import React, { useState, useEffect } from 'react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { useMode } from '../../context/ModeContext';
import { ControleServicesLayout } from './services/ControleServicesLayout';
import { DroneServicesLayout } from './services/DroneServicesLayout';

export function Services() {
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
          document.querySelectorAll('#servicos .reveal:not(.revealed)').forEach(el => el.classList.add('revealed'));
        }, 50);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [mode, displayMode]);

  return (
    <Section id="servicos">
      <SectionTitle
        label="ESPECIALIDADE"
        title="Serviços de Reparo"
        description="Selecione a categoria do seu equipamento para ver as opções de reparo disponíveis."
        centered={true}
      />
      <div 
        className={`mt-10 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        {displayMode === 'drones' ? <DroneServicesLayout /> : <ControleServicesLayout />}
      </div>
    </Section>
  );
}
