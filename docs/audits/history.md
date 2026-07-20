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
| Button | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🟡 | ✅ |
| Badge | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🟡 | ✅ |
| Card | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🟡 | ✅ |
| Alert | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🟡 | ✅ |
| Breadcrumb | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🟡 | ✅ |
| Modal | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🟡 | ✅ |

🟡 Acessibilidade: documentada em cada README (semântica nativa, `aria-*`, foco), mas **não validada** com ferramenta ou teste manual (teclado, contraste, leitor de tela) — ver Pendências.

### Achados

- **Corrigido nesta auditoria:** `Breadcrumb.setItems()` montava HTML via interpolação de string direto em `innerHTML`, sem escapar `item.label`/`item.href` — vetor de XSS se a trilha for populada com dado não confiável (ex: vindo de rota/query string). Passou a usar `document.createElement`/`textContent`, que escapam automaticamente.
- **Não é falha:** `Card.setContent(html)` também usa `innerHTML`, mas é uma API explicitamente nomeada pra receber HTML — mesmo contrato de `Dom.html()` em `foundation/services/Dom`. Quem chama é responsável por sanitizar se o dado não for confiável.
- Barrels (`components/index.js`, `components/_index.scss`) exportam/forwardam os 6 componentes corretamente; nenhum arquivo órfão ou faltando.

### Pendências

- Validação de acessibilidade real (teclado, contraste, leitor de tela) — nenhum componente foi testado além da documentação.