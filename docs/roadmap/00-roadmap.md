# Roadmap

## Objetivo

O JFA Boilerplate é um microframework Front-End voltado para aplicações modulares, com foco em organização, desacoplamento, escalabilidade e manutenção.

Este roadmap representa a evolução planejada do projeto. Cada capítulo é dividido em sprints e commits incrementais.

---

# Capítulo 00 — Auditoria

Objetivo

- Definir arquitetura
- Definir padrões
- Planejar roadmap
- Criar documentação inicial

Status

✅ Concluído

---

# Capítulo 01 — Foundation

Objetivo

Construir toda a infraestrutura da aplicação.

Entregas

- Bootstrap
- App
- Config
- Services
- Router
- Eventos
- HTTP
- Plugins

Status

✅ Concluído

---

# Capítulo 02 — Design System

Objetivo

Construir toda a camada visual reutilizável.

Entregas

- Tokens
- Cores
- Tipografia
- Espaçamentos

Status

✅ Concluído

> "Componentes" saiu das entregas deste capítulo: o estilo/comportamento de cada componente passou a viver dentro do próprio componente (`src/components/<nome>/`), não centralizado no Design System. Ver Capítulo 03.

---

# Capítulo 03 — Components

Objetivo

Construir os componentes reutilizáveis de interface (HTML, SCSS, JS e README próprios cada um), consumindo os tokens do Design System.

Status

✅ Concluído

---

# Capítulo 04 — Layout

Objetivo

Construir as estruturas reutilizáveis de composição da interface (Header, Footer, Sidebar, Navbar, Hero, Main, Section), organizando os Components sem conter regra de negócio.

> Inserido antes de Features (2026-07-20): a Constituição (`00-architecture-principles.md`, Artigo 2) define a hierarquia `Foundation → Design System → Layout → Components → Features`, e `06-features.md` lista Layout como dependência de Features. O roadmap original colocava Layout depois de Features (junto de Pages) — corrigido para não violar a própria hierarquia declarada.

Status

✅ Concluído

---

# Capítulo 05 — Features

Objetivo

Definir como funcionalidades serão organizadas, orquestrando Components e Layouts.

Status

✅ Concluído

---

# Capítulo 06 — Pages

Objetivo

Compor Layouts, Components e Features em páginas completas do projeto consumidor.

> Pages não fazem parte do framework (`12-pages.md`) — o que existe em `src/pages/` neste repositório é referência/demo, não o site real do projeto consumidor (Hashi Sushi). Ver `18-page-specification.md`.

Status

✅ Concluído

---

# Capítulo 07 — Release

Objetivo

Congelar APIs públicas e preparar a próxima grande versão do framework.

Escopo desta rodada: bump de versão (`package.json` → `0.7.0`) e tag `v0.7.0` em `master`, marcando o primeiro release de verdade do projeto (todos os capítulos 00–06 concluídos). Não é a versão 1.0 ainda — essa segue em aberto pra quando o framework estiver pronto pra congelar API de verdade (ver pendências abaixo).

Status

✅ Concluído

## Pendências conhecidas para v1.0 (não resolvidas nesta release)

- Migração `@import` → `@use`/`@forward`: ✅ já concluída (Capítulo 03/04), adiantada em relação ao plano original
- ~~Acessibilidade dos Components/Layout: documentada, não validada~~ — 🟢 validada por análise estática (axe-core/jsdom) + cálculo exato de contraste WCAG; falta só teste real de teclado/leitor de tela com navegador (ver `docs/audits/history.md`)
- ~~Tokens de dark mode: não existem~~ — ✅ Header/Footer/Sidebar/Hero + Alert brand/neutral cobertos; Button/Badge de propósito fora (ver `theme-switcher/README.md`)
- ~~Mecanismo de montagem de Page via Router: não existe~~ — ✅ `main.js` monta `Home.html` em `#page-outlet` via `Router.register()`/`Dom.html()`; corrigido bug real em `Router.register()` (verificado com execução real via `jsdom`)
- ~~jQuery: dependência não usada em lugar nenhum do código~~ — ✅ removida (bundle JS caiu de 172.58 kB pra 84.26 kB)

**Todas as 4 pendências originais da release v0.7.0 estão resolvidas** (`README.md` desatualizado, achado à parte durante a remoção do jQuery, também já foi corrigido). O que falta pra v1.0 de verdade: teste real de teclado/leitor de tela com navegador (indisponível neste ambiente) e formalizar o congelamento de API pública.