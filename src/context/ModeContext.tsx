import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Mode = 'drones' | 'controles';

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>(() => {
    const saved = localStorage.getItem('app-mode');
    return (saved === 'drones' || saved === 'controles') ? saved : 'drones';
  });

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    localStorage.setItem('app-mode', newMode);
  };

  const toggleMode = () => {
    setMode((prev) => (prev === 'drones' ? 'controles' : 'drones'));
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) throw new Error('useMode must be used within a ModeProvider');
  return context;
}
