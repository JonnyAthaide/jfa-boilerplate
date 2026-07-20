# Changelog

---

# v0.1.0-foundation

## Capítulo 01 — Foundation

### CH01-001

#### Added

- Estrutura inicial
- Arquitetura

---

### CH01-002

#### Added

- Bootstrap
- Bootstrap Icons
- Sass
- jQuery

#### Changed

- Estrutura da Foundation

#### Fixed

- Bootstrap Icons no Vite

#### Documentation

- PROJECT_STATUS atualizado

---

### CH01-003

#### Added

- Classe App
- Bootstrap da aplicação
- Configuração central
- Constantes globais

#### Changed

- Foundation passa a possuir Core próprio
- main.js tornou-se apenas ponto de entrada

#### Documentation

- PROJECT_STATUS atualizado

---

### CH01-004

#### Added

- Logger Service
- Storage Service
- DOM Service

#### Changed

- App utiliza Logger para mensagens internas

#### Documentation

- PROJECT_STATUS atualizado

---

### CH01-005

#### Added

- Router Service
- Registro de rotas
- Navegação programática

#### Changed

- App inicializa o Router

#### Documentation

- PROJECT_STATUS atualizado

---

### CH01-006

#### Added

- EventBus
- Sistema de eventos interno

#### Changed

- App inicializa EventBus

#### Documentation

- PROJECT_STATUS atualizado

---

### CH01-007

#### Added

- HTTP Client

- Métodos GET
- POST
- PUT
- DELETE

#### Documentation

- PROJECT_STATUS atualizado

---

### CH01-008

#### Added

- Plugin Manager
- Registro de plugins

#### Changed

- App inicializa o Plugin Manager

#### Documentation

- PROJECT_STATUS atualizado

---

### CH01-009

#### Added

- Error Handler
- Execução protegida por try/catch

#### Changed

- Foundation passa a centralizar tratamento de erros

#### Documentation

- PROJECT_STATUS atualizado

---

### CH01-010

#### Added

- Lifecycle
- beforeStart()
- afterStart()

#### Changed

- App passa a utilizar o Lifecycle durante a inicialização

#### Documentation

- PROJECT_STATUS atualizado

---

### CH01-011

#### Changed

- Integração entre todos os módulos da Foundation

#### Documentation

- PROJECT_STATUS atualizado

---

### CH01-012

#### Release

- Foundation concluída
- Arquitetura consolidada
- Base preparada para o Design System

---

# v0.2.0-design-system

## Capítulo 02 — Design System

> Em desenvolvimento

---

### CH02-002

#### Added

- Primitive Color Tokens
- Semantic Color Tokens
- Brand Color Palette

#### Documentation

- PROJECT_STATUS atualizado

---

### CH02-003

#### Added

- Typography Tokens
- Font Scale
- Font Weights
- Line Heights
- Bootstrap Typography Wrapper

#### Documentation

- PROJECT_STATUS atualizado

---

### CH02-004

#### Added

- Spacing Tokens
- Layout Spacing Tokens
- Bootstrap Spacing Wrapper

#### Documentation

- PROJECT_STATUS atualizado

---

### CH02-005

#### Added

- Border Radius Tokens
- Semantic Radius Tokens
- Bootstrap Radius Wrapper

#### Documentation

- PROJECT_STATUS atualizado

---

### CH02-006

#### Added

- Shadow Tokens
- Semantic Shadow Tokens
- Bootstrap Shadow Wrapper

#### Documentation

- PROJECT_STATUS atualizado

---

### CH02-007

#### Added

- Breakpoint Tokens
- Container Width Tokens
- Bootstrap Breakpoint Wrapper

#### Documentation

- PROJECT_STATUS atualizado

---

### CH02-008

#### Added

- Motion Tokens
- Transition Tokens
- Bootstrap Motion Wrapper

#### Documentation

- PROJECT_STATUS atualizado

---

### CH02-009

#### Added

- Global Helper Classes
- Accessibility Helpers
- Interaction Helpers

#### Documentation

- PROJECT_STATUS atualizado

---

### CH02-010

#### Review

- Revisão final do Design System.
- Validação da arquitetura.
- Preparação da Release v0.2.0-design-system.

---

## Release

### v0.2.0-design-system

#### Added

- Design Tokens
- Bootstrap Wrapper
- Typography
- Spacing
- Radius
- Shadows
- Motion
- Breakpoints
- Helpers

#### Changed

- Estrutura do Design System consolidada.

#### Documentation

- PROJECT_STATUS atualizado.
- Encerramento do Capítulo 02.

---

# v0.3.0-components

## Capítulo 03 — Components

> Em desenvolvimento

---

### CH03-001

#### Added

- Button component (HTML, SCSS, JS, README)
- Tokens `$color-brand` e `$color-neutral`

#### Changed

- Barrel exports de `components` e `components/button` passam a exportar a classe `Button`
- `src/components/_index.scss` passa a usar `@import`, consistente com o restante do projeto (migração para `@use`/`@forward` fica para a v1.0, conforme roadmap)

#### Documentation

- PROJECT_STATUS atualizado
- Bug de ordem de import do Bootstrap (customização de cor/fonte não aplicada) registrado em `notes/bugs.md`, pendente para o fim do capítulo

---

### CH03-002

#### Added

- Badge component (HTML, SCSS, JS, README)
- `.text-bg-brand` / `.text-bg-neutral`, reaproveitando os tokens `$color-brand`/`$color-neutral` do Button

#### Changed

- `$badge-border-radius` conectado ao token `$radius-badge` (existia desde o CH02-005 e nunca tinha sido usado)
- Barrel exports de `components` e `components/badge` passam a exportar a classe `Badge`

#### Documentation

- PROJECT_STATUS atualizado

---

### CH03-003

#### Added

- Card component (HTML, SCSS, JS, README)
- Modificador `.card-hover`, conectando o token `$transition-card` (existia desde o CH02-008 e nunca tinha sido usado)

#### Changed

- `$card-border-radius`/`$card-box-shadow` conectados aos tokens `$radius-card`/`$shadow-card`
- Barrel exports de `components` e `components/card` passam a exportar a classe `Card`

#### Documentation

- PROJECT_STATUS atualizado

---

### CH03-004

#### Added

- Alert component (HTML, SCSS, JS, README)
- `.alert-brand` / `.alert-neutral`, calculados com `tint-color()`/`shade-color()` do Bootstrap (mesma fórmula usada internamente para gerar `alert-{color}-bg-subtle`/`border-subtle`/`text-emphasis`)

#### Changed

- Barrel exports de `components` e `components/alert` passam a exportar a classe `Alert`, que envolve a instância nativa `bootstrap.Alert` (dismiss via `data-bs-dismiss="alert"` já funciona nativamente, sem JS próprio)

#### Documentation

- PROJECT_STATUS atualizado

---

### CH03-005

#### Added

- Breadcrumb component (HTML, SCSS, JS, README)
- `Breadcrumb.setItems()` para montagem dinâmica da trilha de navegação

#### Changed

- Barrel exports de `components` e `components/breadcrumb` passam a exportar a classe `Breadcrumb`

#### Documentation

- PROJECT_STATUS atualizado
- Sem customização de cor: Breadcrumb não tem variantes no Bootstrap, `breadcrumb.scss` documenta isso em vez de inventar uma

---

### CH03-006

#### Added

- Modal component (HTML, SCSS, JS, README)

#### Changed

- `$modal-content-border-radius`/`$modal-content-box-shadow-sm-up`/`$modal-transition` conectados aos tokens `$radius-modal`/`$shadow-modal`/`$transition-modal` (existiam desde o Capítulo 02 e nunca tinham sido usados)
- Barrel exports de `components` e `components/modal` passam a exportar a classe `Modal`, que envolve a instância nativa `bootstrap.Modal` (foco, backdrop, ESC e scroll lock nativos — nenhuma reimplementação própria)

#### Documentation

- PROJECT_STATUS atualizado

---

## Release

### v0.3.0-components

#### Added

- 6 componentes: Button, Badge, Card, Alert, Breadcrumb, Modal (HTML, SCSS, JS, README cada)
- Tokens conectados que estavam ociosos desde o Capítulo 02: `$radius-badge`, `$shadow-card`/`$transition-card`, `$radius-modal`/`$shadow-modal`/`$transition-modal`
- Tokens novos: `$color-brand`, `$color-neutral`

#### Changed

- Barrel exports (`components/index.js` e de cada componente) passam a exportar as classes de verdade, em vez de imports de efeito colateral
- `src/components/_index.scss` padronizado em `@import`, consistente com o resto do projeto

#### Documentation

- PROJECT_STATUS atualizado
- Bug de ordem de import do Bootstrap (customização de cor/fonte não aplicada) registrado em `notes/bugs.md`, segue pendente — ainda não corrigido

---

## Manutenção — Migração Sass Modules (@use/@forward)

#### Changed

- Todo o Design System e `src/components/_index.scss` migrados de `@import` (legado) para `@use`/`@forward` (Sass modules), conforme já previsto para v1.0 no roadmap — adiantado por resolver, na raiz, o bug de customização do Bootstrap
- `src/design-system/abstracts/_variables.scss` reescrito: em vez de reatribuir nomes de variável do Bootstrap (dependia de ordem textual de import), passa a usar `@forward "bootstrap/scss/bootstrap" show button-variant, color-contrast, tint-color, shade-color, $prefix with (...)` — configuração explícita, que falha a build em vez de ignorar em silêncio se uma variável não existir no Bootstrap
- Correção incidental: `_variables.scss` antigo tinha uma segunda declaração de `$font-family-base: system-ui, sans-serif` sobrepondo o token de `_typography.scss` (`"Inter", sans-serif`); removida — a fonte do Design System passa a ser aplicada corretamente

#### Fixed

- Bug de ordem de import do Bootstrap (`notes/bugs.md`) — corrigido
- Warnings de deprecation do Dart Sass para `@import` no código do próprio projeto — eliminados (os avisos `[import]` que restam no build vêm de dentro de `node_modules/bootstrap`, cujo código-fonte ainda não migrou para `@use`/`@forward`; fora do nosso controle)

#### Documentation

- `notes/bugs.md` atualizado — bug marcado como corrigido
- PROJECT_STATUS atualizado

---

### Commit 03 — Auditoria da implementação

#### Fixed

- `Breadcrumb.setItems()` montava HTML via interpolação de string direto em `innerHTML`, sem escapar `item.label`/`item.href` — vetor de XSS se a trilha vier de dado não confiável (rota/query string). Passou a montar os nós via `document.createElement`/`textContent`.

#### Documentation

- `docs/audits/history.md`: nova seção "Components" com o checklist do `15-component-specification.md` aplicado aos 6 componentes; seção "Foundation" corrigida (EventBus/Http estavam marcados como pendentes desde CH01, embora entregues em CH01-006/007 — documento nunca tinha sido revisado desde então)
- `docs/roadmap/00-roadmap.md`: Capítulo 03 marcado como Concluído
- `PROJECT_STATUS.md`: v0.3.0-components move de "Próxima Release" para "Release Atual — Concluída"; Capítulo 03 ganha seção própria (mesmo padrão dos Capítulos 01/02)
- Pendência conhecida, não fabricada como resolvida: acessibilidade dos 6 componentes está documentada, mas não validada com ferramenta/teste manual (teclado, contraste, leitor de tela)

---

## Release

### v0.3.0-components

Capítulo 03 encerrado — 6 componentes (Button, Badge, Card, Alert, Breadcrumb, Modal) + auditoria da implementação concluída.

---

# v0.4.0-layout

## Capítulo 04 — Layout

> Em desenvolvimento

---

### Documentação prévia

#### Added

- `docs/architecture/16-layout-specification.md`: contrato oficial das peças de Layout, espelhando `15-component-specification.md` (estrutura `layout-name/.html/.scss/.js/README.md`, dependências, responsividade em vez de estados/variantes, acessibilidade)

#### Changed

- `docs/architecture/14-folder-structure.md`: nota esclarecendo que `layouts/` contém as peças granulares (Header, Footer, Navbar, etc.) e que `DefaultLayout`/`AdminLayout` (templates completos) chegam só com o Capítulo de Pages
- `docs/roadmap/00-roadmap.md`: Layout inserido como Capítulo 04, antes de Features — a Constituição já definia essa ordem (`Foundation → Design System → Layout → Components → Features`) e `06-features.md` lista Layout como dependência de Features; o roadmap colocava os dois na ordem errada

---

### CH04-001

#### Added

- Header — primeira peça de Layout (HTML, SCSS, JS, README), branding + navegação principal
- `src/layouts/` — novo diretório, com barrel `index.js`/`_index.scss` conectado em `main.js`/`main.scss` (mesmo padrão de `src/components`)

#### Documentation

- PROJECT_STATUS atualizado