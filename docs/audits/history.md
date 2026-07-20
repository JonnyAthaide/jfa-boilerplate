# Auditoria

Este documento registra o estado técnico da arquitetura.

Ao final de cada sprint deve ser revisado.

## Foundation

| Item | Status |
|------|--------|
| App | ✅ |
| Bootstrap | ✅ |
| Config | ✅ |
| Router | ✅ |
| Logger | ✅ |
| Storage | ✅ |
| Dom | ✅ |
| EventBus | ✅ |
| Http | ✅ |

> Tabela estava desatualizada: EventBus e Http Client foram entregues em CH01-006/CH01-007, mas este documento nunca tinha sido revisado desde então. Corrigido nesta auditoria (2026-07-20).

## Components (Capítulo 03)

Checklist do `docs/architecture/15-component-specification.md` aplicado aos 6 componentes.

| Componente | Estrutura | HTML | SCSS | JS | README | Estados | Variantes | Acessibilidade | Reutilizável |
|---|---|---|---|---|---|---|---|---|---|
| Button | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🟢 | ✅ |
| Badge | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🟢 | ✅ |
| Card | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🟢 | ✅ |
| Alert | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🟢 | ✅ |
| Breadcrumb | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🟢 | ✅ |
| Modal | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🟢 | ✅ |

🟢 Acessibilidade: validada por análise estática (axe-core) + cálculo exato de contraste WCAG — ver seção "Acessibilidade (Capítulo 07)" abaixo para o que isso cobre e o que ainda não está verificado (teste real de teclado/leitor de tela, que precisa de navegador — indisponível neste ambiente).

### Achados

- **Corrigido nesta auditoria:** `Breadcrumb.setItems()` montava HTML via interpolação de string direto em `innerHTML`, sem escapar `item.label`/`item.href` — vetor de XSS se a trilha for populada com dado não confiável (ex: vindo de rota/query string). Passou a usar `document.createElement`/`textContent`, que escapam automaticamente.
- **Não é falha:** `Card.setContent(html)` também usa `innerHTML`, mas é uma API explicitamente nomeada pra receber HTML — mesmo contrato de `Dom.html()` em `foundation/services/Dom`. Quem chama é responsável por sanitizar se o dado não for confiável.
- Barrels (`components/index.js`, `components/_index.scss`) exportam/forwardam os 6 componentes corretamente; nenhum arquivo órfão ou faltando.

### Pendências

- ~~Validação de acessibilidade real~~ — parcialmente resolvido, ver "Acessibilidade (Capítulo 07)" abaixo.

---

## Acessibilidade (Capítulo 07)

Auditoria de acessibilidade dos Components/Layout, item pendente registrado em `CHANGELOG.md`/`PROJECT_STATUS.md` desde o fechamento do Capítulo 07. Sem navegador disponível neste ambiente (sem Playwright/Puppeteer), então a validação combina duas técnicas que **não dependem de navegador real**:

### 1. Análise estática de DOM/ARIA (`axe-core` + `jsdom`)

Rodado contra o `index.html` (sandbox) compilado, com o CSS gerado inline (evita problema de carregamento de `<link>` externo no `jsdom`). Cobre: papéis/landmarks ARIA, hierarquia de headings, labels de formulário, unicidade de landmarks, atributos ARIA válidos.

**Achados corrigidos:**

- `landmark-unique`: o sandbox tinha dois `<nav aria-label="Principal">` (demo do Header sozinho + demo do Header dentro da composição Home) — leitor de tela não conseguia distinguir os dois. Corrigido: o segundo virou `aria-label="Principal (Home)"`. É um problema específico do sandbox mostrar o mesmo componente duas vezes na mesma página — `header.html`/`Home.html` (os arquivos de referência) continuam corretos como estão, cada um sozinho não tem esse problema.

**Achado não corrigido (não é defeito):**

- `heading-order`: `card-title` usa `<h5>` (convenção do próprio Bootstrap), e o sandbox salta de `<h2>` (título de cada seção de demo) direto pra `<h5>`. `card/README.md` já documentava a orientação certa ("h2–h6, conforme a hierarquia da página") antes desta auditoria — o "erro" é só o sandbox ser uma galeria de componentes, não uma página real com hierarquia própria. Não mexi na estrutura do sandbox pra não fingir uma hierarquia que não existe ali.

**Não verificável pelo `jsdom` (limitação da ferramenta, não do projeto):** `color-contrast`, `landmark-one-main` e `page-has-heading-one` ficaram como "incomplete" — o `jsdom` não resolve CSS custom properties (`var(--bs-*)`) nem faz layout/visibilidade de verdade, então o `axe` não consegue decidir com confiança. Confirmado manualmente que `index.html` tem `<h1>` e `<main>` corretos — os dois "incomplete" ali são falso-alarme da ferramenta.

### 2. Contraste de cor (cálculo exato WCAG 2, sem depender de navegador)

Como o `jsdom` não resolve contraste, calculei a fórmula de contraste do WCAG 2 diretamente a partir dos valores hex/rgb conhecidos dos tokens, para os pares que o próprio JFA define (`brand`/`neutral` em Button/Badge/Alert — as variantes nativas do Bootstrap não foram re-verificadas, são responsabilidade upstream):

| Par | Ratio | Mínimo AA | Resultado |
|---|---|---|---|
| `.btn-brand`/`.btn-neutral` (texto `#000` escolhido por `button-variant()`) sobre `$color-brand`/`$color-neutral` | 7.37 / 17.71 | 4.5 | ✅ |
| `.text-bg-brand`/`.text-bg-neutral` (texto `#000` escolhido por `color-contrast()`) sobre `$color-brand`/`$color-neutral` | 7.37 / 17.71 | 4.5 | ✅ |
| `.alert-brand` (`shade-color` 60% sobre `tint-color` 80%) | 9.05 | 4.5 | ✅ |
| `.alert-neutral` (idem) | 6.25 | 4.5 | ✅ |
| `$color-text`/`$color-text-muted` sobre `$color-background` | 15.43 / 4.69 | 4.5 | ✅ |

Todos os pares que o JFA controla passam WCAG AA. O `color-contrast()`/`button-variant()` do próprio Bootstrap escolheram a cor de texto certa automaticamente (preto, não branco) para o azul claro do `$color-brand` — conferido no CSS gerado, não assumido.

### 3. Operabilidade por teclado (revisão manual de código)

Nenhuma interação por clique em elemento não-focável (`<div>`/`<span>` com handler de clique) encontrada em `src/components`, `src/layouts` ou `src/features` — todo `data-bs-toggle`/`data-bs-dismiss`/`addEventListener("click", ...)` está em `<button>` nativo. Teclado (Tab/Enter/Espaço) funciona nativamente sem JS próprio em todos os casos.

### Pendências que continuam reais, não escondidas

- **Teste real de teclado/foco visível/leitor de tela**: precisa de navegador (Playwright/similar) ou dispositivo com leitor de tela — indisponível neste ambiente. A revisão de código (item 3 acima) reduz o risco, mas não substitui o teste real.
- **Contraste das variantes nativas do Bootstrap** (não-brand/neutral): não re-verificado — confiança na própria manutenção do Bootstrap.
- **Dark mode**: segue sem tokens próprios (pendência já registrada desde o Capítulo 05/07).