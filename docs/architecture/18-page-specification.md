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

# Montagem via Router

`Router.register(path, handler)` (Foundation) já aceita um handler arbitrário, e `Dom.html(element, html)` (Foundation) já injeta HTML num elemento — o mecanismo de montagem não precisou de nada novo no Foundation, só ligar as duas peças no lugar certo.

**Essa ligação não vive dentro do Foundation** (`src/foundation/app/App.js`) — importar uma Page específica ali violaria a própria regra do Foundation ("nunca deve conter... CSS específico de páginas", `02-foundation.md`). Ela vive em `src/main.js`, que já é, na prática, a raiz de composição do projeto (onde Components/Layouts/Features/Foundation se juntam):

```js
import { bootstrap, Dom } from "./foundation";
import homeHtml from "./pages/Home/Home.html?raw";

const app = bootstrap();
const outlet = Dom.query("#page-outlet");

if (outlet) {
    app.router.register("/", () => Dom.html(outlet, homeHtml));
}
```

Um projeto consumidor real registraria suas próprias rotas do mesmo jeito, a partir do próprio ponto de entrada — nunca de dentro do Foundation.

Verificado com execução real (não só leitura de código): rodar o bundle compilado via `jsdom` confirma que `#page-outlet` recebe o HTML da Home em runtime.
