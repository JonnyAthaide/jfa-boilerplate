# Form Validation

## Objetivo

Feature responsável por ligar a validação nativa do HTML5 (`required`, `pattern`, `type="email"` etc.) ao feedback visual do Bootstrap, sem definir nenhuma regra de validação própria.

## Estrutura

form-validation/
├── form-validation.js
└── README.md

## Dependências

Foundation

## API

```js
import { FormValidation } from "./features";

const validation = new FormValidation(document.querySelector("form"));
```

No `submit`, chama `form.checkValidity()` (API nativa do navegador). Se inválido, bloqueia o envio e adiciona `was-validated` ao `<form>` — classe que o CSS do Bootstrap já usa pra mostrar o feedback (`.is-invalid`/`.is-valid`, `:invalid`/`:valid`).

`reset()` limpa o estado de validação e o formulário.

## Fora do escopo

**Regras de validação** (as regras em si são `required`/`pattern`/`minlength`/etc. no próprio HTML do formulário — quem define isso é o projeto consumidor, não esta Feature)

Requisições (envio do formulário continua nativo; se precisar de submit assíncrono, isso é responsabilidade de quem consome, usando o `Http` do Foundation)

Mensagens de erro customizadas (usa as mensagens nativas do navegador via `:invalid`; internacionalização/customização de texto fica pra quando surgir a necessidade real)

## Acessibilidade

Reaproveita a validação nativa do HTML5 — leitores de tela já anunciam campos inválidos via `aria-invalid` implícito do navegador. Usar `<div class="invalid-feedback">` (padrão do Bootstrap) junto de cada campo pra mensagens visíveis.
