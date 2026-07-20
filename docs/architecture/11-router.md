# Router

## Objetivo

Gerenciar a navegação da aplicação.

## Responsabilidades

- Rotas
- Navegação
- Estados de navegação

## Nunca deve conter

Interface.

Componentes.

Regras de negócio.

## Observações

`register(path, handler)` substitui o handler se o `path` já estiver registrado (não empilha duplicata) — permite que o ponto de composição do projeto (`src/main.js`) sobrescreva uma rota já registrada, por exemplo pra ligar uma Page de verdade a uma rota que o `App` só tinha registrado como placeholder.