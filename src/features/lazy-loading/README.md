# Lazy Loading

## Objetivo

Feature responsável por carregar imagens (ou outros elementos com `src`) somente quando entram na viewport.

## Estrutura

lazy-loading/
├── lazy-loading.js
└── README.md

## API

```js
import { LazyLoading } from "./features";

const images = document.querySelectorAll("img[data-src]");

new LazyLoading(images);
```

Markup esperado:

```html
<img data-src="/caminho/real.jpg" alt="Descrição">
```

Ao entrar na viewport, copia `data-src` pra `src` e remove o atributo `data-src`. Usa `IntersectionObserver`, sem listener de `scroll`.

## Dependências

Foundation

## Fora do escopo

Regra de negócio

Requisições (o carregamento em si é o navegador buscando a imagem pela troca de `src` — não é uma requisição feita por código nosso)

Placeholder/blur-up (fica a cargo de quem consome, via CSS)

## Acessibilidade

O `alt` da imagem deve estar no markup desde o início (não depende do carregamento) — leitores de tela não devem ficar sem descrição enquanto a imagem não carrega.
