import React from 'react';
import { Plane, Camera, Cpu, RotateCw, Satellite, ShieldCheck, Search, ArrowRight } from 'lucide-react';
import { ModelViewer } from '../../three/ModelViewer';
import { ServiceCard } from '../../ui/ServiceCard';
import { HudFrame } from '../../ui/HudFrame';
import { WHATSAPP_URL } from '../../../design/tokens';

const DRONE_SERVICES = [
  { icon: Camera,      title: 'Troca de Gimbal e Câmera',        description: 'Substituição e calibração de gimbal, lente e sensor de imagem para imagem estável e nítida novamente.' },
  { icon: Cpu,         title: 'Manutenção e Reparo de Placas',   description: 'Diagnóstico de curto-circuito, solda de componentes e reparo da placa controladora de voo.' },
  { icon: RotateCw,    title: 'Substituição de Motores e Hélices', description: 'Troca de motores desgastados ou queimados e balanceamento de hélices para um voo estável.' },
  { icon: Satellite,   title: 'Calibração de Sensores e GPS',    description: 'Ajuste de bússola, IMU e sinal de GPS para corrigir deriva, oscilação e perda de posicionamento.' },
  { icon: ShieldCheck, title: 'Manutenção Preventiva e Pós-Queda', description: 'Revisão completa da estrutura após impacto e manutenção periódica para evitar falhas em voo.' },
];

export function DroneServicesLayout() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full">
      {/* Esquerda: 3D HUD (Fica no topo no Mobile) */}
      <div className="w-full lg:w-5/12 reveal h-[350px] lg:h-auto order-1">
        <HudFrame className="border border-slate-200 dark:border-none bg-slate-50 dark:bg-bg-900/20 rounded-lg p-6 overflow-hidden h-full flex flex-col relative">
          <div className="flex-1 relative w-full h-full pointer-events-none -mt-8">
            <ModelViewer modelPath="/models/drone2.glb" scale={1.8} autoRotate />
          </div>
          
          {/* Tag inferior */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/80 dark:bg-bg-950/80 backdrop-blur-md border border-cyan-600 dark:border-cyan-500 dark:border-cyan-400/20 px-4 py-2 rounded-lg z-10">
            <div className="w-8 h-8 rounded bg-cyan-500/10 dark:bg-cyan-400/10 flex items-center justify-center">
              <Plane className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            </div>
            <span className="font-display font-700 text-lg text-slate-900 dark:text-white whitespace-nowrap">DJI Drone</span>
          </div>
        </HudFrame>
      </div>

      {/* Direita: Grid de Serviços (Fica abaixo no Mobile) */}
      <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-5 stagger order-2">
        {DRONE_SERVICES.map(s => <ServiceCard key={s.title} {...s} />)}
        
        {/* CTA Card no grid */}
        <div className="reveal hud-frame h-full bg-white dark:bg-bg-900/40 border border-slate-200 dark:border-transparent p-6 flex flex-col justify-between items-start text-left hover:bg-slate-50 dark:hover:bg-bg-900/60 transition-colors">
          <div className="w-full">
            <div className="w-11 h-11 rounded-md bg-cyan-500/15 dark:bg-cyan-400/15 flex items-center justify-center mb-5">
              <Search className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="font-display font-700 text-lg text-slate-900 dark:text-white">Não sabe qual é o problema?</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Envie fotos ou vídeos do defeito pelo WhatsApp e receba um diagnóstico inicial sem compromisso.
            </p>
          </div>
          <a
            href={WHATSAPP_URL['drones']} target="_blank" rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 font-display font-700 text-sm text-cyan-600 dark:text-cyan-300 hover:text-cyan-200 transition-colors group"
          >
            Enviar diagnóstico <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
