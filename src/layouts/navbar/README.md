# Navbar

## Objetivo

Estrutura reutilizável responsável pela navegação principal responsiva da aplicação.

## Estrutura

navbar/
├── navbar.html
├── navbar.scss
├── navbar.js
└── README.md

## Dependências

Foundation

Design System

Bootstrap (JS nativo `bootstrap.Collapse` — o toggle mobile via `data-bs-toggle="collapse"` já funciona nativamente, sem JS próprio; a classe `Navbar` só expõe `open()/close()/toggle()` programáticos)

## Responsabilidades

Renderização

Abertura/fechamento do menu mobile (`open()`, `close()`, `toggle()`)

## Fora do escopo

Regra de negócio

Requisições

Item ativo por rota (quem consome decide qual `.nav-link` recebe `active`)

## Responsividade

Usa `navbar-expand-lg`: a partir do breakpoint `lg` (`$breakpoint-lg`) os itens ficam sempre visíveis; abaixo disso, colapsam atrás do botão hambúrguer (`navbar-toggler`).

## Acessibilidade

`navbar-toggler` com `aria-controls`, `aria-expanded` (atualizado automaticamente pelo `bootstrap.Collapse`) e `aria-label`.

Item ativo usa `aria-current="page"`.
