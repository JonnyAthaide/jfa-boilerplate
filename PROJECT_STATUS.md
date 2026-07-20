# PROJECT STATUS

## Release Atual

✅ v0.1.0-foundation

Status

Concluída

---

## Release Atual

✅ v0.2.0-design-system

Status

Concluída

---

## Capítulo 01 — Foundation

Status

✅ Concluído

Commits

✔ CH01-001
✔ CH01-002
✔ CH01-003
✔ CH01-004
✔ CH01-005
✔ CH01-006
✔ CH01-007
✔ CH01-008
✔ CH01-009
✔ CH01-010
✔ CH01-011
✔ CH01-012

---

## Capítulo 02 — Design System

Status

✅ Concluído

Commits

✔ CH02-001 Design Tokens
✔ CH02-002 Colors
✔ CH02-003 Typography
✔ CH02-004 Spacing
✔ CH02-005 Radius
✔ CH02-006 Shadows
✔ CH02-007 Breakpoints & Containers
✔ CH02-008 Motion
✔ CH02-009 Helpers
✔ CH02-010 Chapter Review


---

## Release Atual

✅ v0.3.0-components

Status

Concluída

---

## Capítulo 03 — Components

Status

✅ Concluído

Commits

✔ Commit 01 — Refatoração da estrutura da documentação
✔ Commit 02 — Formalização da Arquitetura
✔ Commit 03 — Auditoria da implementação (`docs/audits/history.md`)
✔ CH03-001 — Button (HTML, SCSS, JS, README)
✔ CH03-002 — Badge — variantes text-bg-* + brand/neutral
✔ CH03-003 — Card — header/body/footer + card-hover
✔ CH03-004 — Alert — dismissible + brand/neutral
✔ CH03-005 — Breadcrumb — setItems() dinâmico
✔ CH03-006 — Modal — open/close/toggle sobre bootstrap.Modal

---

## Manutenção

✅ Migração Sass Modules (@use/@forward)
Todo o Design System + `src/components` migrados de `@import` para `@use`/`@forward`; bug de customização do Bootstrap (`notes/bugs.md`) corrigido na raiz

---

## Release Atual

✅ v0.4.0-layout

Status

Concluída

---

## Capítulo 04 — Layout

Status

✅ Concluído

Commits

✔ Documentação prévia — `16-layout-specification.md` + esclarecimentos em `14-folder-structure.md`/`00-roadmap.md`
✔ CH04-001 — Header (HTML, SCSS, JS, README)
✔ CH04-002 — Footer
✔ CH04-003 — Main
✔ CH04-004 — Section
✔ CH04-005 — Hero (migra o `.hero` órfão de `design-system/pages/_home.scss`, removido)
✔ CH04-006 — Sidebar
✔ CH04-007 — Navbar — open/close/toggle sobre `bootstrap.Collapse`

---

## Release Atual

✅ v0.5.0-features

Status

Concluída

---

## Capítulo 05 — Features

Status

✅ Concluído

Commits

✔ Documentação prévia — `17-feature-specification.md`
✔ CH05-001 — Toast System (pathfinder) — `ToastSystem.show()` sobre `bootstrap.Toast`
✔ CH05-002 — Theme Switcher — light/dark via `data-bs-theme` + `Storage` do Foundation
✔ CH05-003 — Form Validation — liga validação nativa HTML5 ao feedback do Bootstrap
✔ CH05-004 — Infinite Scroll — `IntersectionObserver`, callback fornecido por quem consome
✔ CH05-005 — Lazy Loading — `IntersectionObserver`, troca `data-src` por `src`

---

## Release Atual

✅ v0.6.0-pages

Status

Concluída

---

## Capítulo 06 — Pages

Status

✅ Concluído

> Pages não fazem parte do framework — referência/demo, não o site real do Hashi Sushi (`18-page-specification.md`).

Commits

✔ Documentação prévia — `18-page-specification.md`
✔ CH06-001 — DefaultLayout (`src/layouts/DefaultLayout`) — Header + Main + Footer, sticky footer
✔ CH06-002 — Home (`src/pages/Home`) — referência: DefaultLayout + Hero + Section + Card + Button

---

## Release Atual

✅ v0.7.0-release

Status

Concluída

---

## Capítulo 07 — Release

Status

✅ Concluído

Primeiro release de verdade do projeto — todos os capítulos 00–06 concluídos. Não é v1.0 ainda (ver Pendências abaixo).

Commits

✔ CH07-001 — `package.json` → `0.7.0`; `notes/bugs.md`/`00-roadmap.md`/`CHANGELOG.md` fechados

## Pendências conhecidas para v1.0

- Acessibilidade dos Components/Layout: documentada, não validada com ferramenta/teste manual
- Tokens de dark mode: não existem — `ThemeSwitcher` alterna `data-bs-theme`, mas `brand`/`neutral` não têm contraparte escura
- Mecanismo de montagem de Page via Router: não existe
- jQuery: dependência não usada em lugar nenhum do código, segue no `package.json`