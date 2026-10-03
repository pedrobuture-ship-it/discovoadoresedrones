import { LucideIcon } from 'lucide-react';

interface Props {
  index: string;      // "WP-01"
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Waypoint({ index, icon: Icon, title, description }: Props) {
  return (
    <div className="reveal relative">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative z-10 w-12 h-12 rounded-full border border-cyan-400/40 bg-bg-950 flex items-center justify-center">
          <Icon className="w-5 h-5 text-cyan-400" />
        </div>
        <span className="font-mono text-xs text-slate-500 tracking-widest">{index}</span>
      </div>
      <h3 className="font-display font-700 text-lg text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
