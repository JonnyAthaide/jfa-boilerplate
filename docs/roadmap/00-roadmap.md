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

Status

✅ Concluído

## Histórico da release

**v0.7.0** — primeiro release de verdade do projeto (todos os capítulos 00–06 concluídos), com 4 pendências conhecidas registradas.

**v1.0.0** — as 4 pendências da v0.7.0 resolvidas (ver abaixo); fechada como a primeira versão pronta pra iniciar um projeto real (Hashi Sushi) em cima do framework.

- Migração `@import` → `@use`/`@forward`: ✅ concluída (Capítulo 03/04), adiantada em relação ao plano original
- Acessibilidade dos Components/Layout: 🟢 validada por análise estática (axe-core/jsdom) + cálculo exato de contraste WCAG — ver `docs/audits/history.md`
- Tokens de dark mode: ✅ Header/Footer/Sidebar/Hero + Alert brand/neutral cobertos; Button/Badge de propósito fora (ver `theme-switcher/README.md`)
- Mecanismo de montagem de Page via Router: ✅ `main.js` monta `Home.html` em `#page-outlet` via `Router.register()`/`Dom.html()`, verificado com execução real via `jsdom`
- jQuery: ✅ removido (bundle JS caiu de 172.58 kB pra 84.26 kB)
- `README.md` desatualizado (achado à parte durante a remoção do jQuery): ✅ corrigido

## O que "API pública congelada" significa aqui

Este projeto é um boilerplate privado (`"private": true`, não publicado no npm) — "congelar API" não é uma promessa semver de pacote publicado. Significa: os barrels (`src/components`, `src/layouts`, `src/features`, `src/foundation`) e os contratos documentados em `docs/architecture/15` a `18-*-specification.md` são a superfície estável a partir da qual o Hashi Sushi (ou qualquer outro projeto consumidor) deve ser construído.

## Pendência genuína, não escondida

**Teste real de teclado/leitor de tela**: precisa de navegador de verdade (Playwright ou similar), indisponível neste ambiente de trabalho. A validação estática (axe-core via `jsdom` + cálculo exato de contraste WCAG) cobre ARIA/landmarks/headings/contraste, mas não substitui ouvir um leitor de tela de verdade. Decisão registrada (2026-07-20): fechar v1.0.0 com a validação estática atual, documentando isso como próximo passo — não como bloqueador. Pra fazer esse teste no futuro: `npm install -D playwright && npx playwright install chromium`, depois rodar `axe-core` contra a página renderizada de verdade (resolve a limitação de contraste do `jsdom`) e testar navegação por Tab manualmente.