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

---

### CH04-002 a CH04-007

#### Added

- Footer, Main, Section, Hero, Sidebar, Navbar — as 6 peças restantes do Capítulo 04, mesmo formato do Header (HTML, SCSS, JS, README)
- Navbar: `open()`/`close()`/`toggle()` sobre `bootstrap.Collapse` (toggle mobile nativo via `data-bs-toggle="collapse"`, sem reimplementação própria)
- Tokens de layout conectados que estavam ociosos desde o CH02-004: `$container-padding` (Main), `$section-spacing` (Section), `$component-spacing` (Header — trocado de `$space-4` direto, mesmo valor, mais semântico), `$stack-spacing` (Sidebar)

#### Changed

- Hero migra o `.hero { max-width:720px; margin:auto; }` que estava órfão em `src/design-system/pages/_home.scss` — 720px vira o token `$container-md` (match exato, já existia). `pages/_home.scss` e a pasta `design-system/pages/` foram removidos por ficarem vazios; a referência em `main.scss` também saiu
- Removida uma pasta `src/design-system/bootstrap/` vazia e sem referência em lugar nenhum (achada durante o trabalho, não relacionada a nenhum código ativo)

#### Documentation

- PROJECT_STATUS atualizado

---

## Release

### v0.4.0-layout

Capítulo 04 encerrado — 7 peças de Layout (Header, Footer, Main, Section, Hero, Sidebar, Navbar), com spec própria (`16-layout-specification.md`) documentada antes da implementação.

---

# v0.5.0-features

## Capítulo 05 — Features

> Em desenvolvimento

---

### CH05-001

#### Added

- `docs/architecture/17-feature-specification.md`: contrato oficial das Features, espelhando `15-component-specification.md`/`16-layout-specification.md` — adaptado pra permitir Features sem `.html` estático (markup gerado em runtime, documentado no README)
- Toast System (pathfinder) — `ToastSystem.show(message, { variant, delay })`, reaproveita `bootstrap.Toast` e as variantes `.text-bg-*` (incluindo `brand`/`neutral`) já criadas no Badge
- `src/features/` — novo diretório, barrel `index.js`/`_index.scss` conectado em `main.js`/`main.scss` (mesmo padrão de `src/components`/`src/layouts`)

#### Documentation

- `toast.js` monta o markup via `document.createElement`/`textContent`, não `innerHTML` — mesma lição aplicada na correção do `Breadcrumb` durante a auditoria do CH03, agora também escrita como anti-pattern na spec de Features
- PROJECT_STATUS atualizado

---

### CH05-002 a CH05-005

#### Added

- Theme Switcher — `init()/toggle()/setTheme()/getTheme()`, alterna `data-bs-theme` e persiste via `Storage` do Foundation (não `localStorage` direto)
- Form Validation — liga `form.checkValidity()` nativo ao `was-validated` do Bootstrap, sem definir nenhuma regra de validação própria
- Infinite Scroll — `IntersectionObserver` num elemento sentinela, dispara um callback fornecido por quem consome (sem buscar/renderizar nada sozinha)
- Lazy Loading — `IntersectionObserver` em imagens `data-src`, troca por `src` ao entrar na viewport

Nenhuma das 4 precisou de `.scss` próprio (comportamento puro, sem CSS além do que Bootstrap/Components já cobrem) — a spec de Features já previa isso como opcional.

#### Documentation

- Theme Switcher documenta uma limitação real, não escondida: as variantes `brand`/`neutral` (Button/Badge/Alert) não têm contraparte em modo escuro ainda — só os componentes nativos do Bootstrap se adaptam
- PROJECT_STATUS atualizado

---

## Release

### v0.5.0-features

Capítulo 05 encerrado — 5 Features (Toast System, Theme Switcher, Form Validation, Infinite Scroll, Lazy Loading), com spec própria (`17-feature-specification.md`) documentada antes da implementação.

---

# v0.6.0-pages

## Capítulo 06 — Pages

> `docs/architecture/12-pages.md` e a Constituição são explícitos: Pages pertence ao projeto consumidor (Hashi Sushi), não ao framework. Este capítulo entrega só referência/demo neste repositório — não o site real.

---

### CH06-001 e CH06-002

#### Added

- `docs/architecture/18-page-specification.md`: contrato de referência para Pages e para templates de Layout completos (`DefaultLayout`/`AdminLayout`), deixando explícito que não são parte reutilizável do framework
- `DefaultLayout` (`src/layouts/DefaultLayout`) — compõe Header + Main + Footer num shell de página (sticky footer via flexbox); nomenclatura PascalCase, diferente das peças granulares (kebab-case), conforme já registrado em `14-folder-structure.md`
- `Home` (`src/pages/Home`) — página de referência: `DefaultLayout` + `Hero` + `Section` + `Card` + `Button`, nada criado especificamente para ela, só composição do que já existe

#### Documentation

- Lacuna conhecida, não escondida: não existe hoje nenhum mecanismo em `Router`/`App` (Foundation) que monte uma Page a partir de uma rota — `Home` fica como artefato de referência (HTML composto), no mesmo espírito dos `.html` de referência de Components/Layout, nenhum dos quais é injetado automaticamente em lugar nenhum hoje
- `AdminLayout` não foi construído — sem um segundo caso de uso real que o justifique ainda
- PROJECT_STATUS atualizado

---

## Release

### v0.6.0-pages

Capítulo 06 encerrado — `DefaultLayout` + `Home` de referência, com spec própria (`18-page-specification.md`) deixando claro que Pages não é parte do framework.

---

# v0.7.0-release

## Capítulo 07 — Release

Primeiro release de verdade do projeto — todos os capítulos 00 a 06 concluídos (Auditoria, Foundation, Design System, Components, Layout, Features, Pages). **Não é a v1.0** — API pública ainda não está congelada; ver pendências abaixo.

---

### CH07-001

#### Changed

- `package.json`: `0.1.0` → `0.7.0`

#### Fixed

- `notes/bugs.md`: bug de customização do Bootstrap confirmado corrigido (já estava, desde a migração `@use`/`@forward`)

#### Documentation

- `docs/roadmap/00-roadmap.md`: remove a nota solta de "v1.0: migrar pra @use/@forward" no fim do arquivo (migração já concluída no Capítulo 03/04, adiantada em relação ao plano original) e registra as pendências reais que faltam pra v1.0
- PROJECT_STATUS atualizado

#### Pendências conhecidas para v1.0 (não resolvidas nesta release)

- Acessibilidade dos Components/Layout: documentada, não validada com ferramenta/teste manual
- Tokens de dark mode: não existem — `ThemeSwitcher` alterna `data-bs-theme`, mas `brand`/`neutral` não têm contraparte escura
- Mecanismo de montagem de Page via Router: não existe
- jQuery: dependência não usada em lugar nenhum do código, segue no `package.json`

---

## Release

### v0.7.0-release

Capítulo 07 encerrado. Tag `v0.7.0` marca o primeiro release de verdade do projeto em `master`.

---

## Manutenção — Auditoria de Acessibilidade

Ataca a primeira pendência conhecida para v1.0 (ver release v0.7.0 acima).

#### Fixed

- `index.html` (sandbox): dois `<nav aria-label="Principal">` na mesma página (demo do Header sozinho + dentro da composição Home) — leitor de tela não distinguia. Segundo vira `aria-label="Principal (Home)"`
- `.gitignore`: faltava `.vite` (cache do Vite, achado como pasta não rastreada durante o trabalho)

#### Documentation

- `docs/audits/history.md`: nova seção "Acessibilidade (Capítulo 07)" — metodologia (axe-core + jsdom pra ARIA/landmarks/headings, cálculo exato de contraste WCAG pros tokens `brand`/`neutral`, revisão manual de operabilidade por teclado), achados corrigidos, e o que segue genuinely não verificado (teste real de teclado/leitor de tela precisa de navegador, indisponível neste ambiente)
- Todos os pares de cor `brand`/`neutral` (Button/Badge/Alert) confirmados dentro do WCAG AA (4.5:1) — nenhum ajuste de cor foi necessário
- `card/README.md` já orientava corretamente o nível de heading (não precisou de mudança); `modal/README.md` ganhou uma nota explicando por que `aria-hidden-focus` aparece em análise estática mas não é problema real em runtime
- Nenhuma interação de clique-só-em-`<div>` encontrada em Components/Layout/Features — operabilidade por teclado depende só de elementos nativos, sem gap
- PROJECT_STATUS/roadmap atualizados: pendência de acessibilidade sai de "não validada" para "validada por análise estática + cálculo de contraste — teste real de teclado/leitor de tela segue pendente"

---

## Manutenção — Remoção do jQuery

Segunda pendência conhecida para v1.0 atacada (ver release v0.7.0).

#### Removed

- Dependência `jquery` do `package.json` — não era usada em lugar nenhum do código (confirmado via busca antes de remover), Bootstrap 5 não depende dela
- `window.$`/`window.jQuery` (`src/foundation/index.js`) e o registro `this.plugins.register("jquery", window.jQuery)` (`src/foundation/app/App.js`)

#### Changed

- `README.md`: jQuery sai da lista de Stack

#### Fixed

- Bundle JS: **172.58 kB → 84.26 kB** (gzip 57.12 kB → 25.58 kB) — jQuery era quase metade do peso do bundle final

#### Documentation

- Achado ao investigar onde jQuery era mencionado: `README.md` da raiz está bem desatualizado (tabela de releases parada em v0.3.0, link errado pro `PROJECT_STATUS.md`, tabela de hierarquia de documentação referenciando arquivos antigos de antes da reorganização pra `docs/architecture/`, "Known Issues" ainda citando o bug do `@import` já corrigido) — fora do escopo desta mudança, fica registrado como pendência a decidir

---

## Manutenção — Tokens de Dark Mode

Quarta pendência conhecida para v1.0 (ver release v0.7.0).

#### Added

- `$color-text-dark`/`$color-text-muted-dark` (`_colors.scss`) — espelham a mesma fórmula do Bootstrap pros próprios `$body-color-dark`/`$body-secondary-color-dark`
- `[data-bs-theme="dark"]` em Header, Footer, Sidebar e Hero (`src/layouts/`) — únicos Layouts que usavam cor de texto/borda fixa (Sass, não `var(--bs-*)`), então não reagiam ao tema
- `[data-bs-theme="dark"]` em `.alert-brand`/`.alert-neutral` — troca `tint(80%)/shade(60%)` (clareado, assume fundo branco) por `shade(80%)/tint(40%)`, mesma fórmula que o Bootstrap usa pros próprios `*-bg-subtle-dark`/`*-text-emphasis-dark`

#### Changed

- `_variables.scss`: `$body-color-dark`/`$body-bg-dark`/`$border-color-dark` do Bootstrap passam a apontar pros tokens do JFA (`$color-text-dark`/`$color-surface-dark`/`$color-border-dark`) — os dois últimos já existiam desde o CH02-002 e nunca tinham sido usados
- `theme-switcher/README.md`: nota de limitação reescrita — não é mais "brand/neutral sem contraparte escura" (impreciso), detalha exatamente o que foi coberto e o que ficou de fora por decisão

#### Documentation

- **De propósito fora do escopo**: `.btn-brand`/`.btn-neutral`/`.text-bg-brand`/`.text-bg-neutral` (Button/Badge) não ganharam tratamento escuro — usam fundo sólido e opaco, contraste interno não depende do tema da página, já confirmado correto na auditoria de acessibilidade
- Contraste WCAG conferido nos novos valores de `.alert-brand`/`.alert-neutral` (dark) e no texto de Header (dark) — todos passam AA com boa margem
- PROJECT_STATUS/roadmap atualizados