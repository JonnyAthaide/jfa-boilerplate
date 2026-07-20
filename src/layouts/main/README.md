# Main

## Objetivo

Estrutura reutilizável responsável por delimitar o conteúdo principal da página.

## Estrutura

main/
├── main.html
├── main.scss
├── main.js
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

Sem comportamento por breakpoint — usa `$container-padding` (token de layout) como gutter horizontal.

## Acessibilidade

Usa a landmark `<main>` nativa. Deve haver apenas um `<main>` por página.
