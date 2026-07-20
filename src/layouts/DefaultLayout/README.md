# DefaultLayout

## Objetivo

Template de página completo, compondo `Header` + `Main` + `Footer` (peças granulares já existentes) num shell padrão de aplicação.

## Estrutura

DefaultLayout/
├── DefaultLayout.html
├── DefaultLayout.scss
├── DefaultLayout.js
└── README.md

Nomenclatura em PascalCase — diferente das peças granulares (kebab-case), conforme `18-page-specification.md`.

## Dependências

Foundation

Design System

Layout (`Header`, `Main`, `Footer`)

## Composição

`.default-layout` só adiciona o shell (`min-height: 100vh`, `flex-direction: column`, `.main` cresce pra empurrar o footer pro fim — sticky footer). Todo o resto do visual vem das próprias peças.

## Fora do escopo

Regra de negócio

Requisições

Conteúdo da página (entra dentro do `<main>`, via composição de quem consome)

## Acessibilidade

Herdada das peças (`Header`, `Main`, `Footer`) — nenhuma landmark nova introduzida aqui.
