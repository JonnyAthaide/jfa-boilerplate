# Modal

## Objetivo

Componente reutilizável para exibir conteúdo sobreposto à página, bloqueando a interação com o restante da tela.

## Estrutura

modal/
├── modal.html
├── modal.scss
├── modal.js
└── README.md

## Dependências

Foundation

Design System

Bootstrap (JS nativo `bootstrap.Modal` — foco, backdrop, tecla ESC e scroll lock já vêm prontos do bundle importado em `main.js`; não reimplementamos nada disso)

## Responsabilidades

Renderização

Abertura / fechamento (`open()`, `close()`, `toggle()`)

## Fora do escopo

Regra de negócio

Requisições

Foco customizado, backdrop customizado, gerenciamento de teclado — tudo isso é do `bootstrap.Modal`

## Estados

Default (fechado)

Open

## Variantes

Tamanhos nativos do Bootstrap: `modal-sm`, `modal-lg`, `modal-xl`, `modal-fullscreen`

Sem variantes de cor — modal não tem tema por contexto no Bootstrap.

## Acessibilidade

`aria-labelledby` no `.modal` apontando para o `id` do `.modal-title`.

Foco preso dentro do modal e devolvido ao elemento que abriu, fechamento via ESC e clique no backdrop — comportamento nativo do `bootstrap.Modal`.
