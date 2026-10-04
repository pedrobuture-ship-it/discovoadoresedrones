import React from 'react';
import { UfoLogo } from '../brand/UfoLogo';
import { StatusDot } from '../ui/StatusDot';
import { useMode } from '../../context/ModeContext';
import { CONTACT } from '../../design/tokens';

const NAV = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#sobre', label: 'Especialistas' },
];

export function Footer() {
  const { mode } = useMode();

  const desc = mode === 'drones'
    ? 'Especialistas em manutenção e calibração avançada de drones. Diagnosticamos e reparamos o seu equipamento com precisão cirúrgica.'
    : 'Oficina especializada no reparo de controles de todas as gerações. Solução definitiva para drift e falhas nos botões.';

  const services = mode === 'drones'
    ? ['Troca de Gimbal/Câmera', 'Reparo de Placa', 'Motores e Hélices', 'Calibração de Sensores']
    : ['Troca de Analógicos', 'Reparo de Botões', 'Solda e Placa Interna', 'Bateria e Wireless'];

  return (
    <footer className="border-t border-slate-200 dark:border-line bg-slate-50 dark:bg-bg-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 reveal">
          
          {/* Col 1: Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5 mb-5 inline-flex">
              <UfoLogo size={36} />
              <span className="flex flex-col leading-none">
                <span className="font-display font-700 text-lg tracking-wide text-slate-900 dark:text-white">OFICINA</span>
                <span className="font-mono text-[9px] tracking-[0.15em] text-cyan-600 dark:text-cyan-400/90 mt-1">DISCOS VOADORES &amp; DRONES</span>
              </span>
            </a>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pr-4">
              {desc}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-display font-700 text-slate-900 dark:text-white tracking-widest mb-5 uppercase text-sm">Navegação</h4>
            <ul className="space-y-3 font-display font-600 text-sm text-slate-600 dark:text-slate-400">
              {NAV.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-cyan-600 dark:text-cyan-300 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (Dynamic) */}
          <div>
            <h4 className="font-display font-700 text-slate-900 dark:text-white tracking-widest mb-5 uppercase text-sm">Serviços</h4>
            <ul className="space-y-3 font-display font-600 text-sm text-slate-600 dark:text-slate-400">
              {services.map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-display font-700 text-slate-900 dark:text-white tracking-widest mb-5 uppercase text-sm">Contato &amp; Horário</h4>
            <ul className="space-y-3 font-display font-600 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-cyan-600 dark:text-cyan-300 transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li>{CONTACT.city}</li>
              <li className="pt-2 text-slate-500 font-mono text-xs tracking-wide">SEG - SEX: 09h às 18h</li>
              <li className="text-slate-500 font-mono text-xs tracking-wide">SÁB: 09h às 12h</li>
            </ul>
          </div>

        </div>

        {/* Barra Final */}
        <div className="pt-8 border-t border-slate-200 dark:border-line/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-slate-500 tracking-wider">
            &copy; {new Date().getFullYear()} OFICINA DISCOS VOADORES. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 tracking-widest">
            <StatusDot /> STATUS: ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
}
