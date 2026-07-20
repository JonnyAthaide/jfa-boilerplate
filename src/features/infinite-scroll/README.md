# Infinite Scroll

## Objetivo

Feature responsável por detectar quando o usuário chega perto do fim de uma lista e disparar o carregamento de mais conteúdo.

## Estrutura

infinite-scroll/
├── infinite-scroll.js
└── README.md

## Dependências

Foundation

## API

```js
import { InfiniteScroll } from "./features";

const sentinel = document.querySelector("#lista-sentinel");

const scroll = new InfiniteScroll(sentinel, () => {
  // quem consome decide como buscar/renderizar mais itens
});

scroll.disconnect(); // para de observar
```

Usa `IntersectionObserver` no elemento `sentinel` (um elemento vazio no fim da lista) — dispensa listener de `scroll`/debounce.

## Fora do escopo

Regra de negócio

**Requisições e renderização dos novos itens** — o callback `onLoadMore` é fornecido por quem consome; esta Feature só detecta o momento, nunca busca nem injeta conteúdo sozinha

## Acessibilidade

Se o conteúdo carregado alterar o total de itens de forma relevante, quem consome deve anunciar isso (ex.: região `aria-live="polite"` em volta da lista) — fora do escopo desta Feature.
