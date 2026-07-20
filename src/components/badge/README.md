# Badge

## Objetivo

Componente reutilizável para exibir rótulos curtos de status ou contagem.

## Estrutura

badge/
├── badge.html
├── badge.scss
├── badge.js
└── README.md

## Dependências

Foundation

Design System

## Responsabilidades

Renderização

Variantes de cor

## Fora do escopo

Regra de negócio

Requisições

Integração com páginas

Badge removível/dismissível (vira um componente próprio, tipo Tag/Chip, se for necessário)

## Estados

Default (badge não é interativo — sem hover, focus ou active)

## Variantes

Nativas do Bootstrap (via Design System)

- primary
- secondary
- success
- danger
- warning
- info
- light
- dark

Customizadas do JFA

- brand (`text-bg-brand`)
- neutral (`text-bg-neutral`)

## Acessibilidade

Elemento não interativo, sem `tabindex` nem papel de foco.

Quando usado dentro de um componente interativo (botão, link), a acessibilidade é responsabilidade do elemento pai.
