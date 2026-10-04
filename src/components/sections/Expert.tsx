import React from 'react';
import { BadgeCheck, Eye, Wrench, ShieldCheck, Gamepad2, Cpu } from 'lucide-react';
import { Section } from '../ui/Section';
import { HudFrame } from '../ui/HudFrame';
import { useMode } from '../../context/ModeContext';

export function Expert() {
  const { mode } = useMode();
  
  const isDrones = mode === 'drones';
  const TestIcon = isDrones ? ShieldCheck : Gamepad2;
  const testLabel = isDrones ? 'Teste Real de Voo' : 'Teste em Console';

  return (
    <Section id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger">
        
        {/* Card Cliceu */}
        <HudFrame className="reveal flex flex-col sm:flex-row gap-8 border border-slate-200 dark:border-line bg-white dark:bg-bg-900/40 rounded-lg p-8 items-center sm:items-start hover:border-cyan-600 dark:border-cyan-500 dark:border-cyan-400/20 transition-colors">
          {/* Coluna Esquerda: Avatar e Titulo */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:w-1/3 shrink-0">
            <div className="w-32 h-32 rounded-full border-2 border-cyan-600 dark:border-cyan-500 dark:border-cyan-400/40 bg-slate-200 dark:bg-bg-800 mb-6 overflow-hidden flex items-center justify-center p-1">
               <div className="w-full h-full rounded-full bg-slate-50 dark:bg-bg-950 flex items-center justify-center">
                  <span className="font-display font-700 text-3xl text-cyan-600 dark:text-cyan-400">CB</span>
               </div>
            </div>
            
            <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-mono text-[10px] sm:text-xs tracking-widest mb-3 uppercase text-left sm:text-left">
              <BadgeCheck className="w-4 h-4 shrink-0" /> ESPECIALISTA EM ELETRÔNICA E TELECOM
            </div>
            <h2 className="font-display font-700 text-3xl text-slate-900 dark:text-white mb-4">Cliceu Buture de Oliveira</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Tecnólogo em Eletrônica pela UTFPR com mais de 20 anos de experiência em manutenção de sistemas críticos e automação. Especialista em diagnóstico de precisão e reparos de alta complexidade.
            </p>
          </div>

          {/* Coluna Direita: Pilares e CTA */}
          <div className="flex-1 w-full flex flex-col gap-6 sm:pt-4">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-cyan-500/10 dark:bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-display font-700 text-slate-900 dark:text-white text-lg">Diagnóstico Avançado</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Experiência sênior em eletrônica industrial e de precisão.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-cyan-500/10 dark:bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <Wrench className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-display font-700 text-slate-900 dark:text-white text-lg">Sistemas de RF e Telecom</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Conhecimento profundo em frequências, útil para antenas e drones.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-cyan-500/10 dark:bg-cyan-400/10 flex items-center justify-center shrink-0 transition-all duration-300">
                  <TestIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-display font-700 text-slate-900 dark:text-white text-lg">Experiência em Sistemas Críticos</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Mais de 20 anos em manutenção de redes de energia e telecomunicações.</p>
                </div>
              </div>
            </div>
          </div>
        </HudFrame>

        {/* Card Pedro */}
        <HudFrame className="reveal flex flex-col sm:flex-row gap-8 border border-slate-200 dark:border-line bg-white dark:bg-bg-900/40 rounded-lg p-8 items-center sm:items-start hover:border-cyan-600 dark:border-cyan-500 dark:border-cyan-400/20 transition-colors">
          {/* Coluna Esquerda: Avatar e Titulo */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:w-1/3 shrink-0">
            <div className="w-32 h-32 rounded-full border-2 border-cyan-600 dark:border-cyan-500 dark:border-cyan-400/40 bg-slate-200 dark:bg-bg-800 mb-6 overflow-hidden flex items-center justify-center p-1">
               <div className="w-full h-full rounded-full bg-slate-50 dark:bg-bg-950 flex items-center justify-center">
                  <span className="font-display font-700 text-3xl text-cyan-600 dark:text-cyan-400">PO</span>
               </div>
            </div>
            
            <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-mono text-[10px] sm:text-xs tracking-widest mb-3 uppercase text-left sm:text-left">
              <BadgeCheck className="w-4 h-4 shrink-0" /> ENGENHEIRO DE COMPUTAÇÃO
            </div>
            <h2 className="font-display font-700 text-3xl text-slate-900 dark:text-white mb-4">Pedro Buture de Oliveira</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Especialista em hardware e micro-solda, focado em diagnósticos complexos e reparos de alta precisão.
            </p>
          </div>

          {/* Coluna Direita: Pilares e CTA */}
          <div className="flex-1 w-full flex flex-col gap-6 sm:pt-4">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-cyan-500/10 dark:bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-display font-700 text-slate-900 dark:text-white text-lg">Diagnóstico Avançado</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Análise detalhada de circuitos complexos.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-cyan-500/10 dark:bg-cyan-400/10 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-display font-700 text-slate-900 dark:text-white text-lg">Micro-solda</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Reparos de precisão em placas e componentes.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-cyan-500/10 dark:bg-cyan-400/10 flex items-center justify-center shrink-0 transition-all duration-300">
                  <TestIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-display font-700 text-slate-900 dark:text-white text-lg">{testLabel}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Garantia que sai funcionando perfeitamente em mãos.</p>
                </div>
              </div>
            </div>
          </div>
        </HudFrame>

      </div>
    </Section>
  );
}
