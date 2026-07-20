# Card

## Objetivo

Componente reutilizável para agrupar conteúdo relacionado (título, texto, ações) em um container visual.

## Estrutura

card/
├── card.html
├── card.scss
├── card.js
└── README.md

## Dependências

Foundation

Design System

## Responsabilidades

Renderização

Composição de conteúdo (header, body, footer)

## Fora do escopo

Regra de negócio

Requisições

Integração com páginas

## Estados

Default

Hover (opcional, via `card-hover`)

## Variantes

Nativas do Bootstrap (via Design System)

- card-header
- card-body
- card-footer
- card-title
- card-text
- card-img-top

Customizadas do JFA

- card-hover (eleva a sombra na interação, usando o token `$shadow-lg`/`$transition-card`)

## Acessibilidade

Usar heading semântico correto em `card-title` (h2–h6, conforme a hierarquia da página).

Imagens em `card-img-top` devem sempre ter `alt` descritivo.
