import React, { ReactNode } from 'react';

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
