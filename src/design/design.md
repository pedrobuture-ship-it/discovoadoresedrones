design.md — React Edition

Guia de design system em React + Tailwind, pronto para copiar e colar no projeto.
1. Setup
Dependências
bash

npm install lucide-react

Tailwind config (tailwind.config.js)
js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: { 950:'#0a0e14', 900:'#0d1218', 850:'#111721', 800:'#151c28' },
        line: '#1f2733',
        cyan: { 400:'#22d3ee', 300:'#67e8f9', 500:'#06b6d4' },
        blue: { 500:'#3b82f6', 600:'#2563eb' },
        wa: '#25d366',
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

Fonts (index.html)
html

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

Global CSS (src/index.css)
css

@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }

body {
  background-color: theme('colors.bg.950');
  background-image:
    linear-gradient(rgba(34,211,238,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34,211,238,0.035) 1px, transparent 1px);
  background-size: 44px 44px;
  @apply font-body text-slate-200 antialiased;
}

::selection { background: rgba(34,211,238,0.3); color: #fff; }

/* ===== Keyframes ===== */
@keyframes scan {
  0%   { transform: translateY(-100%); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 1; }
  100% { transform: translateY(2000%); opacity: 0; }
}
@keyframes pulse-dot {
  0%,100% { opacity:1; box-shadow: 0 0 0 0 rgba(34,211,238,.5); }
  50%     { opacity:.6; box-shadow: 0 0 0 6px rgba(34,211,238,0); }
}
@keyframes shimmer { to { background-position: -260% 0; } }
@keyframes particle-float {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-20px); }
}
@keyframes twinkle {
  0%,100% { opacity: .15; }
  50%     { opacity: .8; }
}
@keyframes travel {
  0%   { left: 0%; opacity: 0; }
  8%   { opacity: 1; }
  92%  { opacity: 1; }
  100% { left: 100%; opacity: 0; }
}
@keyframes cta-glow {
  0%,100% { box-shadow: 0 0 0 0 rgba(37,211,102,.55); }
  50%     { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
}

/* ===== Utilities ===== */
.glow-text { text-shadow: 0 0 24px rgba(34,211,238,.35); }
.status-dot { animation: pulse-dot 2s ease-in-out infinite; }
.cta-pulse { animation: cta-glow 2.6s ease-in-out infinite; }
.scan-line {
  position: absolute; left:0; right:0; height:2px;
  background: linear-gradient(90deg, transparent, #22d3ee, transparent);
  animation: scan 4s linear infinite;
}
.text-shimmer {
  background: linear-gradient(90deg, #22d3ee, #fff 45%, #67e8f9 55%, #22d3ee);
  background-size: 260% auto;
  -webkit-background-clip: text; background-clip: text; color: transparent;
  animation: shimmer 6s linear infinite;
}
.particle {
  position: absolute; border-radius: 9999px; background: #67e8f9;
  pointer-events: none;
  animation: particle-float 7s ease-in-out infinite,
             twinkle 3.4s ease-in-out infinite;
}
.waypoint-line {
  background: linear-gradient(90deg, transparent, #1f2733 10%, #1f2733 90%, transparent);
}
.waypoint-pulse {
  position: absolute; top: 50%; left: 0;
  width: 9px; height: 9px; margin-top: -4.5px; border-radius: 9999px;
  background: #22d3ee; box-shadow: 0 0 12px 3px rgba(34,211,238,.75);
  animation: travel 3.6s ease-in-out infinite;
}

/* ===== HUD Frame (composição de brackets) ===== */
.hud-frame { position: relative; }
.hud-frame::before,
.hud-frame::after,
.hud-frame .br-tr,
.hud-frame .br-bl {
  content: ""; position: absolute; width: 18px; height: 18px;
  border-color: #22d3ee; opacity: .55;
  transition: opacity .25s ease, width .25s ease, height .25s ease;
}
.hud-frame::before { top:-1px; left:-1px; border-top:2px solid; border-left:2px solid; }
.hud-frame::after  { bottom:-1px; right:-1px; border-bottom:2px solid; border-right:2px solid; }
.hud-frame .br-tr  { top:-1px; right:-1px; border-top:2px solid #22d3ee; border-right:2px solid #22d3ee; }
.hud-frame .br-bl  { bottom:-1px; left:-1px; border-bottom:2px solid #22d3ee; border-left:2px solid #22d3ee; }
.hud-frame:hover::before,
.hud-frame:hover::after,
.hud-frame:hover .br-tr,
.hud-frame:hover .br-bl { opacity: 1; width: 24px; height: 24px; }

/* ===== Reveal ===== */
.reveal {
  opacity: 0; transform: translateY(26px);
  transition: opacity .7s cubic-bezier(.16,.8,.24,1),
              transform .7s cubic-bezier(.16,.8,.24,1);
  will-change: opacity, transform;
}
.reveal.revealed { opacity: 1; transform: translateY(0); }
.stagger > *:nth-child(1) { transition-delay: .04s; }
.stagger > *:nth-child(2) { transition-delay: .11s; }
.stagger > *:nth-child(3) { transition-delay: .18s; }
.stagger > *:nth-child(4) { transition-delay: .25s; }
.stagger > *:nth-child(5) { transition-delay: .32s; }
.stagger > *:nth-child(6) { transition-delay: .39s; }

/* ===== Reduced motion ===== */
@media (prefers-reduced-motion: reduce) {
  .scan-line, .status-dot, .particle, .waypoint-pulse,
  .cta-pulse, .text-shimmer { animation: none !important; }
  .reveal { opacity:1 !important; transform:none !important; transition:none !important; }
}

2. Design Tokens (src/design/tokens.ts)
ts

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

export const WHATSAPP_URL =
  'https://wa.me/5542998083069?text=' +
  encodeURIComponent('Olá, Cliceu! Gostaria de fazer um orçamento para meu drone.');

export const CONTACT = {
  phone: '(42) 99808-3069',
  phoneHref: 'tel:+5542998083069',
  city: 'Ponta Grossa, PR',
} as const;

3. Hooks
useReveal — IntersectionObserver (src/hooks/useReveal.ts)
ts

import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('revealed'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

useMobileMenu (src/hooks/useMobileMenu.ts)
ts

import { useState, useCallback } from 'react';

export function useMobileMenu() {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close  = useCallback(() => setOpen(false), []);
  return { open, toggle, close };
}

4. Componentes Base
HudFrame — moldura HUD reutilizável
tsx

// src/components/HudFrame.tsx
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function HudFrame({ children, className = '', as: Tag = 'div' }: Props) {
  return (
    <Tag className={`hud-frame ${className}`}>
      <span className="br-tr" />
      <span className="br-bl" />
      {children}
    </Tag>
  );
}

Button — variantes primary / secondary / ghost
tsx

// src/components/Button.tsx
import { ReactNode, AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  icon?: ReactNode;
  pulse?: boolean;
  children: ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md ' +
  'font-display font-700 tracking-wide transition-all ' +
  'hover:-translate-y-0.5';

const variants = {
  primary:
    'bg-wa hover:bg-[#1fb958] text-white shadow-xl shadow-wa/25',
  secondary:
    'border border-line hover:border-cyan-400/50 text-slate-200 ' +
    'font-600 hover:-translate-y-0',
};

export function Button({
  variant = 'primary',
  icon,
  pulse,
  className = '',
  children,
  ...rest
}: Props) {
  return (
    <a
      className={`${base} ${variants[variant]} ${
        pulse ? 'cta-pulse' : ''
      } px-6 py-3.5 text-base ${className}`}
      {...rest}
    >
      {icon}
      {children}
    </a>
  );
}

Section — wrapper de seção
tsx

// src/components/Section.tsx
import { ReactNode } from 'react';

interface Props {
  id?: string;
  children: ReactNode;
  alt?: boolean;        // fundo bg-900/40
  className?: string;
}

export function Section({ id, children, alt, className = '' }: Props) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 border-t border-line/70 ${
        alt ? 'bg-bg-900/40' : ''
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">{children}</div>
    </section>
  );
}

SectionTitle — label + h2 + descrição
tsx

// src/components/SectionTitle.tsx
interface Props {
  label: string;
  title: string;
  description?: string;
}

export function SectionTitle({ label, title, description }: Props) {
  return (
    <div className="reveal max-w-2xl mb-14">
      <span className="font-mono text-xs tracking-widest text-cyan-400">
        {label}
      </span>
      <h2 className="font-display font-700 text-3xl sm:text-4xl text-white mt-3">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-400 leading-relaxed">{description}</p>
      )}
    </div>
  );
}

StatusDot
tsx

export const StatusDot = ({ className = '' }: { className?: string }) => (
  <span className={`inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 status-dot ${className}`} />
);

5. Componentes de Seção
Header
tsx

// src/components/Header.tsx
import { Menu, X, MessageCircle } from 'lucide-react';
import { useMobileMenu } from '../hooks/useMobileMenu';
import { WHATSAPP_URL } from '../design/tokens';
import { UfoLogo } from './UfoLogo';

const NAV = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#sobre', label: 'Especialista' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const { open, toggle, close } = useMobileMenu();

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line/80 bg-bg-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <UfoLogo size={40} />
          <span className="flex flex-col leading-none">
            <span className="font-display font-700 text-lg sm:text-xl tracking-wide text-white whitespace-nowrap">
              OFICINA
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-cyan-400/90 mt-1 whitespace-nowrap">
              DISCOS VOADORES &amp; DRONES
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-display text-[15px] font-600 tracking-wide text-slate-300">
          {NAV.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-cyan-300 transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank" rel="noopener"
          className="hidden sm:inline-flex items-center gap-2 rounded-md bg-wa hover:bg-[#1fb958] text-white font-display font-700 text-sm px-4 py-2.5 transition-colors shadow-lg shadow-wa/20"
        >
          <MessageCircle className="w-4 h-4" />
          Orçamento no WhatsApp
        </a>

        <button
          onClick={toggle}
          className="md:hidden text-slate-200"
          aria-label="Abrir menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-bg-950 px-5 py-5 flex flex-col gap-4 font-display font-600 text-base">
          {NAV.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="text-slate-200 hover:text-cyan-300"
            >
              {label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank" rel="noopener"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-wa text-white font-700 text-sm px-4 py-3"
          >
            <MessageCircle className="w-4 h-4" />
            Orçamento no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

UfoLogo — símbolo da marca
tsx

// src/components/UfoLogo.tsx
interface Props { size?: number; className?: string; }

export function UfoLogo({ size = 40, className = '' }: Props) {
  return (
    <span
      className={`relative flex items-center justify-center rounded-md border border-cyan-400/40 bg-bg-850 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 1024 1024" style={{ width: size - 4, height: size - 4 }}>
        <use href="#ufo-drone-mark" />
      </svg>
    </span>
  );
}

    Nota: cole o <symbol id="ufo-drone-mark">…</symbol> original uma única vez (ex.: em App.tsx ou index.html) para o <use> funcionar.

ServiceCard
tsx

// src/components/ServiceCard.tsx
import { LucideIcon } from 'lucide-react';
import { HudFrame } from './HudFrame';

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: Props) {
  return (
    <HudFrame className="group reveal border border-line bg-bg-900/60 rounded-lg p-6 hover:bg-bg-900 transition-colors hover:-translate-y-1">
      <div className="w-11 h-11 rounded-md bg-cyan-400/10 flex items-center justify-center mb-5 group-hover:bg-cyan-400/15 group-hover:rotate-[8deg] group-hover:scale-[1.08] transition-all">
        <Icon className="w-5 h-5 text-cyan-400" />
      </div>
      <h3 className="font-display font-700 text-lg text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{description}</p>
    </HudFrame>
  );
}

Waypoint
tsx

// src/components/Waypoint.tsx
import { LucideIcon } from 'lucide-react';

interface Props {
  index: string;      // "WP-01"
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Waypoint({ index, icon: Icon, title, description }: Props) {
  return (
    <div className="reveal relative">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative z-10 w-12 h-12 rounded-full border border-cyan-400/40 bg-bg-950 flex items-center justify-center">
          <Icon className="w-5 h-5 text-cyan-400" />
        </div>
        <span className="font-mono text-xs text-slate-500 tracking-widest">{index}</span>
      </div>
      <h3 className="font-display font-700 text-lg text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

WhatsAppFloat
tsx

// src/components/WhatsAppFloat.tsx
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../design/tokens';

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank" rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-wa hover:bg-[#1fb958] shadow-2xl shadow-black/40 transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-wa/60 animate-ping" />
      <MessageCircle className="w-6 h-6 text-white relative" />
    </a>
  );
}

HudPanel — painel de relatório técnico (hero)
tsx

// src/components/HudPanel.tsx
import { HudFrame } from './HudFrame';
import { StatusDot } from './StatusDot';

const ROWS: [string, string][] = [
  ['OBJETO VOADOR', 'IDENTIFICADO'],
  ['DRONE ABDUZIDO', 'DEVOLVIDO INTEIRO'],
  ['DRONE COM DEFEITO', 'EM REPARO'],
  ['MISSÃO', 'COLOCAR SEU DRONE DE VOLTA AO CÉU'],
];

export function HudPanel() {
  return (
    <HudFrame className="reveal border border-line/70 bg-bg-900/70 rounded-lg p-6 sm:p-8 overflow-hidden">
      <div className="scan-line" />
      <div className="flex items-center justify-between font-mono text-xs text-slate-500 mb-4 tracking-wider">
        <span>RELATÓRIO DE OCORRÊNCIA</span>
        <span className="flex items-center gap-1.5 text-cyan-300">
          <StatusDot /> ATIVO
        </span>
      </div>

      <div className="flex items-center justify-center py-2">
        <svg viewBox="0 0 1024 1024" className="w-full max-w-xs">
          <use href="#ufo-drone-mark" />
        </svg>
      </div>

      <div className="space-y-2.5 font-mono text-xs mt-2">
        {ROWS.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-line/60 pb-2 last:border-0 last:pb-0"
          >
            <span className="text-slate-500">{label}</span>
            <span className="text-cyan-300">{value}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-center text-xs text-slate-500 font-mono">
        Para deixar bem claro: abduzimos apenas os problemas.
      </p>
    </HudFrame>
  );
}

Particle — partículas ambiente
tsx

// src/components/Particle.tsx
interface Props {
  top: string; left: string;
  size?: number;
  delay?: number;
}

export function Particle({ top, left, size = 6, delay = 0 }: Props) {
  return (
    <div
      className="particle"
      style={{
        top, left,
        width: size, height: size,
        animationDelay: `${delay}s, ${delay / 2}s`,
      }}
    />
  );
}

6. Estrutura de Pastas Sugerida
text

src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Section.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── HudFrame.tsx
│   │   ├── StatusDot.tsx
│   │   └── Particle.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── brand/
│   │   ├── UfoLogo.tsx
│   │   └── UfoSymbol.tsx      // <symbol id="ufo-drone-mark">…</symbol>
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── HowItWorks.tsx
│       ├── Expert.tsx
│       ├── FinalCTA.tsx
│       └── WhatsAppFloat.tsx
├── hooks/
│   ├── useReveal.ts
│   └── useMobileMenu.ts
├── design/
│   └── tokens.ts
├── App.tsx
├── index.css
└── main.tsx

7. App.tsx de exemplo
tsx

import { useReveal } from './hooks/useReveal';
import { UfoSymbol } from './components/brand/UfoSymbol';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { HowItWorks } from './components/sections/HowItWorks';
import { Expert } from './components/sections/Expert';
import { FinalCTA } from './components/sections/FinalCTA';
import { WhatsAppFloat } from './components/sections/WhatsAppFloat';

export default function App() {
  useReveal();
  return (
    <>
      <UfoSymbol />
      <Header />
      <div id="top" />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Expert />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

8. Exemplo de seção (Services.tsx)
tsx

import { Camera, Cpu, RotateCw, Satellite, ShieldCheck, Search, ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';
import { ServiceCard } from '../ui/ServiceCard';
import { WHATSAPP_URL } from '../../design/tokens';

const SERVICES = [
  { icon: Camera,      title: 'Troca de Gimbal e Câmera',        description: 'Substituição e calibração de gimbal, lente e sensor de imagem.' },
  { icon: Cpu,         title: 'Manutenção e Reparo de Placas',   description: 'Diagnóstico de curto-circuito, solda e placa controladora.' },
  { icon: RotateCw,    title: 'Substituição de Motores e Hélices', description: 'Troca de motores e balanceamento de hélices.' },
  { icon: Satellite,   title: 'Calibração de Sensores e GPS',    description: 'Ajuste de bússola, IMU e GPS para corrigir deriva.' },
  { icon: ShieldCheck, title: 'Manutenção Preventiva e Pós-Queda', description: 'Revisão completa após impacto.' },
];

export function Services() {
  return (
    <Section id="servicos">
      <SectionTitle
        label="O QUE FAZEMOS"
        title="Reparo especializado, componente por componente"
        description="Cada serviço é feito com peças testadas e bancada própria para calibração."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
        {SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}

        {/* Card CTA */}
        <div className="reveal border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-lg p-6 flex flex-col justify-between">
          <div>
            <div className="w-11 h-11 rounded-md bg-cyan-400/15 flex items-center justify-center mb-5">
              <Search className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="font-display font-700 text-lg text-white">Não sabe qual é o problema?</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Envie fotos ou vídeos do defeito pelo WhatsApp.
            </p>
          </div>
          <a
            href={WHATSAPP_URL} target="_blank" rel="noopener"
            className="mt-5 inline-flex items-center gap-2 font-display font-700 text-sm text-cyan-300 hover:text-cyan-200"
          >
            Enviar diagnóstico <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}

9. Regras de Uso (React)

    Tokens centralizados em design/tokens.ts — nunca hardcode hex no JSX.

    Componentes de UI em components/ui/ — puros, sem lógica de domínio.

    Seções em components/sections/ — compõem UI + dados.

    HudFrame sempre que quiser moldura com brackets ciano (não reimplementar).

    Section sempre que for uma faixa vertical com borda superior; use alt para o fundo alternado.

    Ícones Lucide — sempre passar como componente tipado (LucideIcon), nunca string.

    Animações de scroll — usar .reveal no elemento raiz e .stagger no container pai.

    Acessibilidade — todo botão com só ícone precisa de aria-label.

    CTA WhatsApp — sempre via WHATSAPP_URL do token.

    Dark mode é o único modo — não adicionar variantes light:.
