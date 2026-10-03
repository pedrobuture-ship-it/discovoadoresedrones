# Regras do projeto
- Design system obrigatório: ler @design/design.md antes de qualquer alteração
- Tokens centralizados em design/tokens.ts — nunca hardcode cores/fontes/URLs
- Dark mode apenas. Nunca use fundo claro.
- Ícones: lucide-react, tipados como LucideIcon
- Animações: .reveal (scroll), .stagger (filhos), .hud-frame (brackets), .scan-line, .cta-pulse
- Modelos 3D em public/models/: drone2.glb, p5controller.glb, ps4controller.glb, xbox360controller.glb, xbox_one_seriescontroller.glb
- Componentes UI existentes em components/ui/: Section, SectionTitle, HudFrame, Button, StatusDot
- Antes de codar: confirme quais regras do design.md está aplicando
- Responda com código, sem explicações longas. Não mostre arquivos inteiros quando puder mostrar diff.
