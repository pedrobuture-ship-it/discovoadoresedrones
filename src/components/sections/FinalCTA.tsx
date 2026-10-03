import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { useMode } from '../../context/ModeContext';
import { WHATSAPP_URL } from '../../design/tokens';

export function FinalCTA() {
  const { mode } = useMode();

  const title = mode === 'drones'
    ? 'Pronto para colocar seu drone de volta no ar?'
    : 'Pronto para voltar a jogar sem frustração?';

  return (
    <Section id="cta" className="text-center pb-28 md:pb-40 border-b-0">
      <div className="reveal max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="font-display font-700 text-3xl sm:text-5xl text-white mb-10 leading-tight">
          {title}
        </h2>
        <Button 
          href={WHATSAPP_URL[mode]} 
          target="_blank" 
          rel="noopener noreferrer"
          icon={<MessageCircle className="w-5 h-5" />}
          pulse
          className="w-full sm:w-auto"
        >
          Fazer Orçamento pelo WhatsApp
        </Button>
      </div>
    </Section>
  );
}
