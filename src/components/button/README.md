# Button

## Objetivo

Componente reutilizável responsável pela interação primária do usuário.

## Estrutura

button/
├── button.html
├── button.scss
├── button.js
└── README.md

## Dependências

Foundation

Design System

## Responsabilidades

Renderização

Estados

Eventos

## Fora do escopo

Regra de negócio

Requisições

Integração com páginas

## Estados

Default

Hover

Focus

Active

Disabled

Loading (classe `is-loading`, controlada via `setLoading()`)

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
- link
- outline-*

Customizadas do JFA

- brand (`btn-brand`)
- neutral (`btn-neutral`)

## Acessibilidade

Utiliza `<button>` nativo (semântica e navegação por teclado herdadas do HTML).

Foco visível herdado do Bootstrap (`:focus-visible`).

Estado de loading expõe `aria-busy="true"` e desabilita o botão via atributo `disabled`.