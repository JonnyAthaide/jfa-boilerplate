# Page Specification

> Este documento define o contrato de referência para Pages e para os templates de Layout completos (`DefaultLayout`, `AdminLayout`) no JFA Framework.

---

# Objetivo

Diferente de Components, Layout e Features — que são partes reutilizáveis do framework — Pages **não fazem parte do framework** (ver `12-pages.md` e a Constituição, `00-architecture-principles.md`: "O projeto consome o framework, mas não faz parte dele").

O que existe em `src/pages/` neste repositório é **referência/demonstração**: mostra como um projeto consumidor compõe Layouts + Components + Features numa página real. Não é o site de produção de nenhum projeto.

---

# Templates de Layout (`DefaultLayout`, `AdminLayout`)

Diferente das peças granulares de Layout (Header, Footer, Navbar...), um template compõe várias peças num shell de página completo.

```text
src/layouts/TemplateName/

    TemplateName.html
    TemplateName.scss
    TemplateName.js
    README.md
```

Nomenclatura em **PascalCase** (diferente do kebab-case das peças granulares — já registrado em `14-folder-structure.md`).

Segue as mesmas regras de `16-layout-specification.md` (dependências, responsividade, acessibilidade) — a única diferença é que o HTML compõe Components/Layouts existentes em vez de ser uma peça nova.

---

# Pages

```text
src/pages/PageName/

    PageName.html
    README.md
```

Sem `.scss`/`.js` obrigatório — uma Page não introduz comportamento ou estilo novo, só compõe o que já existe (um Template de Layout + Components + Features).

## Nunca deve conter

- Components reutilizáveis (usa os que já existem em `src/components`).
- Tokens do Design System (usa os que já existem).
- Helpers.
- Regra de negócio real do projeto consumidor.

## Observações

Cada `README.md` de Page deve deixar explícito que é referência/demo, não uma página de produção.

---

# Lacuna conhecida, não escondida

Não existe hoje nenhum mecanismo no `Router`/`App` (`src/foundation`) que monte uma Page no DOM a partir de uma rota — o `Router.navigate()` atual só executa uma função qualquer. Ligar uma Page de verdade a uma rota é trabalho de Foundation (um mecanismo de renderização), não desta especificação. As Pages aqui são artefatos de referência (HTML composto), no mesmo espírito dos `.html` de referência que Components e Layout já têm — nenhum dos dois é injetado automaticamente em lugar nenhum hoje.
