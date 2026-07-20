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

---

# Capítulo 07 — Release

Objetivo

Congelar APIs públicas e preparar a versão 1.0.





v1.0

Migrar todo o framework para

@use
@forward