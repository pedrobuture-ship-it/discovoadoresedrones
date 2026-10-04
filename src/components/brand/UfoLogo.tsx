import React from 'react';

export function UfoLogo({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <span
      className={`relative flex items-center justify-center rounded-lg border border-cyan-500/50 bg-slate-900 shadow-md overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/ufo.svg`}
        alt="Disco voador — logo da oficina"
        className="w-[85%] h-[85%] object-contain drop-shadow-[0_0_6px_rgba(34,211,238,0.45)]"
        draggable={false}
      />
    </span>
  );
}
