# Sidebar

## Objetivo

Estrutura reutilizável responsável pela navegação secundária lateral da aplicação.

## Estrutura

sidebar/
├── sidebar.html
├── sidebar.scss
├── sidebar.js
└── README.md

## Dependências

Foundation

Design System

## Responsabilidades

Renderização

## Fora do escopo

Regra de negócio

Requisições

Comportamento de colapsar/expandir (Bootstrap não tem um componente nativo de sidebar; se isso for necessário no futuro, entra como comportamento próprio, não reaproveitando Offcanvas/Collapse às cegas)

## Responsividade

Largura fixa (`240px`, valor direto — não existe token de largura de sidebar no Design System ainda; criar um se surgir um segundo uso). Sem colapso automático em mobile nesta primeira versão.

## Acessibilidade

Usa a landmark `<aside>` nativa, com `<nav aria-label="Secundária">` dentro.
