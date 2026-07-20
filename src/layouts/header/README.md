# Header

## Objetivo

Estrutura reutilizável responsável pelo cabeçalho da aplicação: branding e navegação principal.

## Estrutura

header/
├── header.html
├── header.scss
├── header.js
└── README.md

## Dependências

Foundation

Design System

Components (via os slots de navegação/branding, quando necessário)

## Responsabilidades

Renderização

Composição (branding + navegação)

## Fora do escopo

Regra de negócio

Requisições

Lógica de roteamento (o link ativo/rota é responsabilidade de quem consome)

## Responsividade

Nesta primeira versão não há comportamento por breakpoint — `.header` usa flexbox e encolhe naturalmente. Um toggle mobile de verdade (menu hambúrguer) fica para quando o Navbar for construído como peça própria.

## Acessibilidade

Usa a landmark `<header>` nativa.

`<nav>` com `aria-label="Principal"` (necessário assim que houver mais de uma `nav` na página, ex.: breadcrumb + navegação principal).
