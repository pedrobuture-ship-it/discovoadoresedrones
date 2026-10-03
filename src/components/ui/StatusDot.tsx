import React from 'react';

export const StatusDot = ({ className = '' }: { className?: string }) => (
  <span className={`inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 status-dot ${className}`} />
);
