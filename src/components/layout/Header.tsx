import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import { UfoLogo } from '../brand/UfoLogo';
import { ModeToggle } from '../ModeToggle';
import { useMode } from '../../context/ModeContext';
import { ThemeToggle } from '../ThemeToggle';

const NAV = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#sobre', label: 'Especialista' },
];

export function Header() {
  const { open, toggle, close } = useMobileMenu();
  const { mode } = useMode();
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    setIsScanning(true);
    const t = setTimeout(() => setIsScanning(false), 300);
    return () => clearTimeout(t);
  }, [mode]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200 dark:border-line/80 bg-slate-50 dark:bg-bg-950/85 backdrop-blur-md overflow-hidden">
      {isScanning && <div className="scan-line top-0 bottom-0 h-full w-full opacity-30 pointer-events-none" />}
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between relative z-10">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <UfoLogo size={40} />
          <span className="hidden min-[420px]:flex md:flex flex-col leading-none">
            <span className="font-display font-700 text-lg sm:text-xl tracking-wide text-slate-900 dark:text-white whitespace-nowrap">
              OFICINA
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-cyan-600 dark:text-cyan-400/90 mt-1 whitespace-nowrap">
              MODO: {mode.toUpperCase()}
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 font-display text-[15px] font-600 tracking-wide text-slate-700 dark:text-slate-300">
          {NAV.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-cyan-600 dark:text-cyan-300 transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <ModeToggle />
        </div>

        {/* Mobile: seletor de modo sempre visível + hambúrguer */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <ModeToggle compact />
          <button
            onClick={toggle}
            className="text-slate-800 dark:text-slate-200"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-line bg-slate-50 dark:bg-bg-950 px-5 py-5 flex flex-col gap-4 font-display font-600 text-base relative z-10">
          {NAV.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:text-cyan-300"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
