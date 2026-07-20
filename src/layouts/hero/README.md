# Hero

## Objetivo

Estrutura reutilizável responsável pelo bloco de destaque no topo de uma página (título + texto de apoio).

## Estrutura

hero/
├── hero.html
├── hero.scss
├── hero.js
└── README.md

## Dependências

Foundation

Design System

Components (pode conter um `Button` de call-to-action, quando necessário)

## Responsabilidades

Renderização

## Fora do escopo

Regra de negócio

Requisições

## Responsividade

Sem comportamento por breakpoint — `max-width: $container-md` (720px) mantém a leitura confortável em qualquer largura de tela.

## Acessibilidade

`hero__title` deve ser o único `<h1>` da página, ou um heading de nível apropriado se a página já tiver um `<h1>` próprio.
