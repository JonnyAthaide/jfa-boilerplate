# Alert

## Objetivo

Componente reutilizável para exibir mensagens de feedback contextual ao usuário.

## Estrutura

alert/
├── alert.html
├── alert.scss
├── alert.js
└── README.md

## Dependências

Foundation

Design System

Bootstrap (JS nativo de dismiss via `data-bs-dismiss="alert"`, já disponível globalmente através do bundle importado em `main.js`)

## Responsabilidades

Renderização

Estado dismissível

## Fora do escopo

Regra de negócio

Requisições

Integração com páginas

Auto-dismiss por tempo (timers ficam a cargo de quem consumir o componente)

## Estados

Default

Dismissed (removido do DOM ao fechar, comportamento nativo do Bootstrap)

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

- brand (`alert-brand`)
- neutral (`alert-neutral`)

## Acessibilidade

Usa `role="alert"` para leitores de tela anunciarem a mensagem.

O botão de fechar usa `aria-label="Close"` (herdado do `.btn-close` do Bootstrap).
