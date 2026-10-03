export const colors = {
  bg:    { 950:'#0a0e14', 900:'#0d1218', 850:'#111721', 800:'#151c28' },
  line:  '#1f2733',
  cyan:  { 400:'#22d3ee', 300:'#67e8f9', 500:'#06b6d4' },
  blue:  { 500:'#3b82f6', 600:'#2563eb' },
  wa:    '#25d366',
} as const;

export const font = {
  display: 'Rajdhani, sans-serif',
  body:    'Inter, sans-serif',
  mono:    'JetBrains Mono, monospace',
} as const;

export const WHATSAPP_NUMBER = '5542998083069';

export const buildWhatsAppUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const WHATSAPP_URL = {
  drones: buildWhatsAppUrl('Olá, gostaria de fazer um orçamento para meu drone.'),
  controles: buildWhatsAppUrl('Olá, gostaria de fazer um orçamento para meu controle.')
} as const;

export const CONTACT = {
  phone: '(42) 99808-3069',
  phoneHref: 'tel:+5542998083069',
  city: 'Ponta Grossa, PR',
} as const;
