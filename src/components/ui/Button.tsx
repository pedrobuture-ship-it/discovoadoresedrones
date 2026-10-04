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
    'bg-wa hover:bg-[#1fb958] text-slate-900 dark:text-white shadow-xl shadow-wa/25',
  secondary:
    'border border-slate-200 dark:border-line hover:border-cyan-600 dark:border-cyan-500 dark:border-cyan-400/50 text-slate-800 dark:text-slate-200 ' +
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
