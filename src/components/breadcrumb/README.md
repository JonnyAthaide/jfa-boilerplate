# Breadcrumb

## Objetivo

Componente reutilizável para exibir a trilha de navegação da página atual.

## Estrutura

breadcrumb/
├── breadcrumb.html
├── breadcrumb.scss
├── breadcrumb.js
└── README.md

## Dependências

Foundation

Design System

## Responsabilidades

Renderização

Montagem dinâmica dos itens (`setItems`)

## Fora do escopo

Regra de negócio

Requisições

Integração com o Router (o componente só renderiza; resolver a trilha a partir da rota é responsabilidade de quem consome)

## Estados

Default

Active (último item da trilha, não é um link)

## Variantes

Nenhuma — o Breadcrumb não tem variantes de cor no Bootstrap.

## Acessibilidade

`<nav aria-label="breadcrumb">` envolvendo a lista.

Item ativo usa `aria-current="page"`.
