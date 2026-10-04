import React, { useRef, KeyboardEvent } from 'react';
import { Rocket, Gamepad2, LucideIcon } from 'lucide-react';
import { useMode, Mode } from '../context/ModeContext';

export function ModeToggle({ compact = false }: { compact?: boolean }) {
  const { mode, setMode } = useMode();
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight') nextIndex = (index + 1) % 2;
    if (e.key === 'ArrowLeft') nextIndex = (index - 1 + 2) % 2;
    if (nextIndex !== index) {
      tabsRef.current[nextIndex]?.focus();
      setMode(nextIndex === 0 ? 'drones' : 'controles');
    }
  };

  const modes: { id: Mode; label: string; icon: LucideIcon }[] = [
    { id: 'drones', label: 'DRONES', icon: Rocket },
    { id: 'controles', label: 'CONTROLES', icon: Gamepad2 }
  ];

  return (
    <div className="hud-frame relative inline-flex items-center p-1 border border-cyan-600 dark:border-cyan-500 dark:border-cyan-400/40 bg-white dark:bg-bg-900 rounded-md">
      {/* Active Indicator Background */}
      <div 
        className="absolute top-1 bottom-1 bg-cyan-400 rounded transition-transform duration-300 ease-out"
        style={{ width: 'calc(50% - 4px)', transform: `translateX(${mode === 'drones' ? '0%' : '100%'})` }}
      />

      <div role="tablist" className="relative flex w-full z-20">
        {modes.map((m, idx) => {
          const Icon = m.icon;
          const isActive = mode === m.id;
          return (
            <button
              key={m.id}
              ref={(el) => (tabsRef.current[idx] = el)}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setMode(m.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`
                relative flex items-center justify-center font-display font-700 transition-colors w-1/2
                ${compact ? 'gap-1.5 px-2.5 py-1.5 text-[11px] tracking-wide' : 'gap-2 px-6 py-2.5 text-sm'}
                ${isActive ? 'text-bg-950 glow-text' : 'text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:text-cyan-300'}
              `}
            >
              <Icon className={compact ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
              {m.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
