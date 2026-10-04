import React, { useState } from 'react';
import { ControllerCard } from '../../ui/ControllerCard';

const CONTROLLERS = [
  {
    platform: 'PlayStation 5',
    modelPath: '/models/p5controller.glb',
    scale: 1,
    tiers: [
      { title: 'Reparo Padrão', price: 'R$ 80', desc1: 'Sem garantia', desc2: 'Peça: Joystick Alps Original (sujeito a drift futuro).' },
      { title: 'Reparo Avançado', price: 'R$ 110', desc1: '1 Ano de Garantia contra drift', desc2: 'Peça: Joystick TMR Ginfull R313.', highlightDesc: true },
      { title: 'Reparo Premium', price: 'R$ 150', desc1: '1 Ano de Garantia + Máxima Precisão', desc2: 'Peça: Joystick TMR K-Silver JS13 Pro+.', highlightDesc: true, isPremium: true }
    ]
  },
  {
    platform: 'PlayStation 4',
    modelPath: '/models/ps4controller.glb',
    scale: 1,
    tiers: [
      { title: 'Reparo Padrão', price: 'R$ 80', desc1: 'Sem garantia', desc2: 'Peça: Joystick Alps Original.' },
      { title: 'Reparo Avançado', price: 'R$ 110', desc1: '1 Ano de Garantia contra drift', desc2: 'Peça: Joystick TMR K-Silver JS13 Pro+.', highlightDesc: true }
    ]
  },
  {
    platform: 'Xbox Series S/X e One',
    modelPath: '/models/xbox_one_seriescontroller.glb',
    scale: 1,
    tiers: [
      { title: 'Reparo Padrão', price: 'R$ 80', desc1: 'Sem garantia', desc2: 'Peça: Joystick Alps Original.' },
      { title: 'Reparo Avançado', price: 'R$ 110', desc1: '1 Ano de Garantia contra drift', desc2: 'Peça: Joystick TMR Ginfull R313.', highlightDesc: true },
      { title: 'Reparo Premium', price: 'R$ 150', desc1: '1 Ano de Garantia - Alta Precisão', desc2: 'Peça: Joystick TMR K-Silver JS13 Pro+ (Padrão Elite).', highlightDesc: true, isPremium: true }
    ]
  },
  {
    platform: 'Xbox 360',
    modelPath: '/models/xbox360controller.glb',
    scale: 1,
    tiers: [
      { title: 'Reparo Padrão', price: 'R$ 80', desc1: 'Sem garantia', desc2: 'Peça: Joystick Alps Original.' },
      { title: 'Reparo Avançado', price: 'R$ 110', desc1: '1 Ano de Garantia contra drift', desc2: 'Peça: Joystick TMR.', highlightDesc: true }
    ]
  }
];

export function ControleServicesLayout() {
  const [activePlatform, setActivePlatform] = useState<string | null>(null);

  return (
    <div className="grid lg:grid-cols-2 items-start gap-6 stagger">
      {CONTROLLERS.map((ctrl) => (
        <ControllerCard 
          key={ctrl.platform} 
          {...ctrl} 
          isActive={activePlatform === ctrl.platform}
          onBecomeActive={() => setActivePlatform(ctrl.platform)}
        />
      ))}
    </div>
  );
}
