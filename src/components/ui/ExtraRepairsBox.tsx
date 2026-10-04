import React, { useMemo } from 'react';
import { Check, MessageCircle, PlusCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../../design/tokens';

interface Props {
  platform: string;
  checked: Set<string>;
  onToggle: (id: string) => void;
}

interface Option {
  id: string;
  label: string;
  hint: string;
  onlyFor?: string;
}

const OPTIONS: Option[] = [
  { id: 'botoes', label: 'Troca de Botões', hint: 'R1, R2, L1, L2, D-Pad' },
  { id: 'usbc', label: 'Reparo na Porta USB-C', hint: 'Não carrega ou está solta' },
  { id: 'placa', label: 'Reparo de Placa Mãe', hint: 'Não liga / Desconecta' },
  { id: 'carcaca', label: 'Troca de Carcaça', hint: 'Carcaça quebrada ou personalizada' },
  { id: 'bateria', label: 'Troca de Bateria', hint: 'Não segura carga', onlyFor: 'PlayStation 5' },
];

export function ExtraRepairsBox({ platform, checked, onToggle }: Props) {
  const options = useMemo(
    () => OPTIONS.filter(o => !o.onlyFor || o.onlyFor === platform),
    [platform],
  );

  const selected = options.filter(o => checked.has(o.id));
  const hasSelection = selected.length > 0;

  const message = hasSelection
    ? `Olá! Tenho um controle de ${platform} e preciso de um orçamento para os seguintes defeitos:\n\n${selected
        .map(o => `• ${o.label} (${o.hint})`)
        .join('\n')}`
    : `Olá! Tenho um controle de ${platform} e preciso de um orçamento para outros defeitos.`;

  return (
    <div className="mt-3 rounded-md border border-dashed border-line/70 bg-bg-900/40 p-4 transition-colors hover:border-cyan-400/30">
      <div className="flex items-start justify-between gap-3 mb-1.5">
        <div className="flex items-center gap-2 font-display font-bold text-sm text-slate-200">
          <PlusCircle className="w-4 h-4 text-cyan-400 shrink-0" />
          Outros Defeitos / Reparos Adicionais
        </div>
        <span className="shrink-0 font-mono text-[10px] tracking-wider text-cyan-400 uppercase pt-0.5">
          Sob Consulta
        </span>
      </div>
      <p className="text-[11px] font-mono tracking-tight text-slate-400 mb-3">
        Selecione os problemas adicionais que seu controle apresenta:
      </p>

      <div className="flex flex-col gap-1" role="group" aria-label={`Defeitos adicionais — ${platform}`}>
        {options.map(o => {
          const isOn = checked.has(o.id);
          const inputId = `extra-${platform.replace(/\W+/g, '-')}-${o.id}`;
          return (
            <label
              key={o.id}
              htmlFor={inputId}
              className={`group flex items-start gap-3 w-full rounded px-2 py-2 cursor-pointer transition-colors
                ${isOn ? 'bg-cyan-400/[0.06]' : 'hover:bg-white/[0.03]'}`}
            >
              <input
                id={inputId}
                type="checkbox"
                className="sr-only peer"
                checked={isOn}
                onChange={() => onToggle(o.id)}
              />
              <span
                className={`mt-0.5 flex items-center justify-center w-4 h-4 rounded-[3px] border shrink-0 transition-all duration-200
                  peer-focus-visible:ring-2 peer-focus-visible:ring-cyan-400/60
                  ${isOn ? 'bg-cyan-400 border-cyan-400' : 'border-slate-600 group-hover:border-cyan-400/60'}`}
              >
                <Check
                  className={`w-3 h-3 text-bg-950 transition-transform duration-200 ${isOn ? 'scale-100' : 'scale-0'}`}
                  strokeWidth={3}
                />
              </span>
              <span className="leading-tight flex-1 text-left">
                <span className={`block text-xs ${isOn ? 'text-white' : 'text-slate-300'}`}>{o.label}</span>
                <span className="block text-[11px] text-slate-500 mt-0.5">{o.hint}</span>
              </span>
            </label>
          );
        })}
      </div>

      {selected.length > 0 && (
        <a
          href={buildWhatsAppUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-pulse group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-wa hover:bg-[#1fb958] text-white font-display font-700 text-sm px-4 py-3 transition-all shadow-lg shadow-wa/20"
        >
          <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
          Solicitar Orçamento no WhatsApp
          <span className="ml-1 rounded-full bg-white/20 px-1.5 text-[10px] font-mono">{selected.length}</span>
        </a>
      )}
    </div>
  );
}
