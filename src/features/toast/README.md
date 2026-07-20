# Toast System

## Objetivo

Feature responsável por exibir notificações temporárias e não bloqueantes ("toasts").

## Estrutura

toast/
├── toast.js
├── toast.scss
└── README.md

## Dependências

Foundation

Design System

Components (reaproveita `.text-bg-*`, incluindo `brand`/`neutral`, já definidos em `src/components/badge/badge.scss`)

Bootstrap (JS nativo `bootstrap.Toast` — animação de entrada/saída e auto-dismiss já vêm prontos, nenhuma reimplementação própria)

## API

```js
import { ToastSystem } from "./features";

const container = document.querySelector(".toast-container");
const toasts = new ToastSystem(container);

toasts.show("Salvo com sucesso!", { variant: "success", delay: 4000 });
```

`show(message, { variant, delay })` — `variant` é qualquer variante de `.text-bg-*` disponível (nativas do Bootstrap ou `brand`/`neutral`); `delay` em milissegundos (padrão 5000).

## Markup gerado

Não existe `.html` estático — o toast é criado em runtime, montado via `document.createElement`/`textContent` (nunca `innerHTML` com string interpolada, para não repetir o problema de XSS corrigido no `Breadcrumb` durante a auditoria do Capítulo 03):

```html
<div class="toast align-items-center text-bg-{variant} border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">{message}</div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
```

O container (`.toast-container`) é responsabilidade de quem consome a Feature — normalmente um elemento fixo na página (ex.: `position-fixed bottom-0 end-0 p-3`), fora do escopo desta Feature.

## Fora do escopo

Regra de negócio

Requisições

Posicionamento do container na página

## Acessibilidade

`role="alert"`, `aria-live="assertive"` e `aria-atomic="true"` no toast — leitores de tela anunciam a mensagem assim que ela aparece.
