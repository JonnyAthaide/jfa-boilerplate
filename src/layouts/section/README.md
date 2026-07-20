# Section

## Objetivo

Estrutura reutilizável responsável pelo espaçamento vertical entre blocos de conteúdo da página.

## Estrutura

section/
├── section.html
├── section.scss
├── section.js
└── README.md

## Dependências

Foundation

Design System

## Responsabilidades

Renderização

## Fora do escopo

Regra de negócio

Requisições

## Responsividade

Sem comportamento por breakpoint — usa `$section-spacing` (token de layout) como ritmo vertical.

## Acessibilidade

Usa a landmark `<section>` nativa. Deve ter um heading (`h2`–`h6`) ou `aria-label` quando o conteúdo justificar ser anunciado como região própria.
