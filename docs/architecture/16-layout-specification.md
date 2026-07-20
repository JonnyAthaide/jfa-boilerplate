# Layout Specification

> Este documento define o contrato oficial para criação de peças de Layout no JFA Framework.
>
> Todo Layout desenvolvido para o framework deverá seguir esta especificação.

---

# Objetivo

Garantir consistência, reutilização e previsibilidade na criação das estruturas de composição da interface (Header, Footer, Sidebar, Navbar, Hero, Main, Section — ver `04-layout.md`).

Layouts organizam Components; não são páginas completas. Templates de página inteira (ex.: `DefaultLayout`, `AdminLayout`) são compostos a partir destas peças, mais adiante, junto do Capítulo de Pages — não fazem parte desta especificação.

---

# Estrutura padrão

Todo Layout deverá possuir a seguinte estrutura, no mesmo formato dos Components:

```text
layout-name/

    layout-name.html
    layout-name.scss
    layout-name.js
    README.md
```

Nomenclatura em kebab-case, igual aos Components (`header/header.html`, não `Header/Header.html`) — o PascalCase de `DefaultLayout`/`AdminLayout` citado em `14-folder-structure.md` é dos templates de página futuros, não das peças granulares.

---

# Responsabilidades

## HTML

Responsável exclusivamente pela estrutura do Layout.

Deve usar a landmark HTML semântica correspondente (`<header>`, `<footer>`, `<nav>`, `<main>`, `<aside>`, `<section>`).

Pode conter Components já existentes (ex.: um Header pode conter um `Button`) — nunca cria markup de Component novo dentro do Layout.

## SCSS

Responsável exclusivamente pela apresentação visual.

Deve utilizar os tokens do Design System. Nunca hardcode quando existir um token equivalente.

## JavaScript

Responsável exclusivamente pelo comportamento do Layout, quando houver (ex.: toggle de um Navbar).

Nem todo Layout precisa de comportamento real — Footer, Main e Section, por exemplo, tendem a ficar só estruturais. Ainda assim, o arquivo `.js` existe por consistência de estrutura, mesmo que a classe fique mínima.

Não deve conter regras de negócio.

## README

Responsável por documentar o Layout. Todo Layout oficial deverá possuir documentação própria.

---

# Dependências

Um Layout pode depender de:

- Foundation
- Design System
- Components

Um Layout nunca deverá depender diretamente de:

- Features
- Pages
- Projeto consumidor

---

# Responsividade

Diferente dos Components, Layout não tem "Estados" nem "Variantes" no sentido de widget de UI. Em vez disso, todo Layout deve documentar seu comportamento por breakpoint (`$breakpoint-*` do Design System) quando a composição mudar entre tamanhos de tela (ex.: Navbar colapsado em mobile).

---

# Acessibilidade

Todo Layout deverá:

- Usar a landmark semântica correta (nunca `<div class="header">` no lugar de `<header>`).
- Ter `aria-label` sempre que houver mais de uma `<nav>` na mesma página.
- Preservar a ordem de leitura/tab lógica ao compor Components.

---

# Reutilização

Um Layout nunca deverá conhecer regras de negócio do projeto nem fazer requisições.

Toda personalização deverá ocorrer através de slots de conteúdo (o que é passado pra dentro do Layout), não de lógica condicional interna.

---

# Fluxo de criação

1. Definição da necessidade.
2. Criação da estrutura do Layout.
3. Implementação do HTML (landmark semântica + slots de Components).
4. Implementação do SCSS (tokens).
5. Implementação do JavaScript (se houver comportamento real).
6. Documentação (README).
7. Validação.
8. Commit.

---

# Anti-patterns

Evitar:

- Criar Components dentro do Layout (reaproveitar os que já existem em `src/components`).
- CSS específico de páginas.
- Regras de negócio, AJAX.
- Hardcode de tokens do Design System.
- `<div>` genérica no lugar de landmark semântica.

---

# Checklist

Antes de finalizar um Layout, verificar:

- Estrutura criada.
- HTML implementado, com landmark semântica correta.
- SCSS implementado.
- JavaScript implementado (ou justificadamente mínimo).
- README criado.
- Comportamento responsivo documentado (quando aplicável).
- Acessibilidade validada.
- Código reutilizável, sem regra de negócio.
