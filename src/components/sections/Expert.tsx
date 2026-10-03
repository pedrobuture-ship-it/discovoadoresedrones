import React from 'react';
import { BadgeCheck, Eye, Wrench, ShieldCheck, Gamepad2, MessageCircle } from 'lucide-react';
import { Section } from '../ui/Section';
import { HudFrame } from '../ui/HudFrame';
import { Button } from '../ui/Button';
import { useMode } from '../../context/ModeContext';
import { WHATSAPP_URL } from '../../design/tokens';

export function Expert() {
  const { mode } = useMode();
  
  const isDrones = mode === 'drones';
  const TestIcon = isDrones ? ShieldCheck : Gamepad2;
  const testLabel = isDrones ? 'Teste Real de Voo' : 'Teste em Console';

  return (
    <Section id="sobre">
      <HudFrame className="reveal flex flex-col md:flex-row gap-10 md:gap-16 border border-line bg-bg-900/40 rounded-lg p-8 md:p-12 items-center md:items-start hover:border-cyan-400/20 transition-colors">
        
        {/* Coluna Esquerda: Avatar e Titulo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3 shrink-0">
          <div className="w-32 h-32 rounded-full border-2 border-cyan-400/40 bg-bg-800 mb-6 overflow-hidden flex items-center justify-center p-1">
             <div className="w-full h-full rounded-full bg-bg-950 flex items-center justify-center">
                <span className="font-display font-700 text-3xl text-cyan-400">CB</span>
             </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-xs tracking-widest mb-3 uppercase">
            <BadgeCheck className="w-4 h-4" /> TÉCNICO RESPONSÁVEL
          </div>
          <h2 className="font-display font-700 text-3xl text-white mb-4">Cliceu Buture de Oliveira</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Responsável direto por cada diagnóstico e reparo — seja drone ou controle.
          </p>
        </div>

        {/* Coluna Direita: Pilares e CTA */}
        <div className="flex-1 w-full flex flex-col gap-8 md:pt-4">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-cyan-400/10 flex items-center justify-center shrink-0">
                <Eye className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-display font-700 text-white text-lg">Transparência</h4>
                <p className="text-sm text-slate-400 mt-1">Orçamento claro, sem taxas surpresas.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-cyan-400/10 flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-display font-700 text-white text-lg">Bancada Própria</h4>
                <p className="text-sm text-slate-400 mt-1">Ferramental completo para micro-solda.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 sm:col-span-2">
              <div className="w-10 h-10 rounded-md bg-cyan-400/10 flex items-center justify-center shrink-0 transition-all duration-300">
                <TestIcon className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-display font-700 text-white text-lg">{testLabel}</h4>
                <p className="text-sm text-slate-400 mt-1">Garantia que sai funcionando perfeitamente em mãos.</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-line/60">
            <Button 
              href={WHATSAPP_URL[mode]} 
              target="_blank" 
              rel="noopener noreferrer"
              icon={<MessageCircle className="w-5 h-5" />}
              pulse
            >
              Falar direto com o técnico
            </Button>
          </div>
        </div>

      </HudFrame>
    </Section>
  );
}
