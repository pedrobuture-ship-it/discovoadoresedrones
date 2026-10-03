import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useMode } from '../../context/ModeContext';
import { WHATSAPP_URL } from '../../design/tokens';

export function WhatsAppFloat() {
  const { mode } = useMode();
  return (
    <a
      href={WHATSAPP_URL[mode]}
      target="_blank" rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-wa hover:bg-[#1fb958] shadow-2xl shadow-black/40 transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-wa/60 animate-ping" />
      <MessageCircle className="w-6 h-6 text-white relative" />
    </a>
  );
}
