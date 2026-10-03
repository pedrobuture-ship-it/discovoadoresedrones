import React from 'react';

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
