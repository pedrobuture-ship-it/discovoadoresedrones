import React, { useEffect, useState } from 'react';
import { useMode } from '../context/ModeContext';
import { StatusDot } from './ui/StatusDot';

export function ModeTransition() {
  const { mode } = useMode();
  const [active, setActive] = useState(false);
  const [displayMode, setDisplayMode] = useState(mode);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const prevModeRef = React.useRef(mode);

  useEffect(() => {
    if (mode !== prevModeRef.current) {
      prevModeRef.current = mode;
      setActive(true);
      setIsFadingOut(false);
      setDisplayMode(mode);
      document.body.style.overflow = 'hidden';

      const t1 = setTimeout(() => {
        setIsFadingOut(true);
        
        setTimeout(() => {
          setActive(false);
          document.body.style.overflow = '';
        }, 250);
        
      }, 600);

      return () => {
        clearTimeout(t1);
        document.body.style.overflow = '';
      };
    }
  }, [mode]);

  if (!active) return null;

  return (
    <div 
      className={`fixed inset-0 z-[60] bg-slate-50 dark:bg-bg-950/90 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity ease-in-out ${
        isFadingOut ? 'opacity-0 duration-[250ms]' : 'opacity-100 duration-150'
      }`}
    >
      <div 
        className="scan-line motion-reduce:hidden w-full" 
        style={{ 
          animation: 'scan 600ms linear forwards',
          height: '4px',
          boxShadow: '0 0 20px rgba(34,211,238,0.5)'
        }} 
      />

      <div className="flex items-center gap-3 font-mono text-cyan-600 dark:text-cyan-400 text-lg sm:text-xl tracking-widest uppercase">
        <StatusDot /> CARREGANDO MODO {displayMode}...
      </div>
    </div>
  );
}
