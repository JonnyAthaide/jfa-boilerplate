# Theme Switcher

## Objetivo

Feature responsável por alternar entre os temas claro/escuro nativos do Bootstrap e persistir a escolha.

## Estrutura

theme-switcher/
├── theme-switcher.js
└── README.md

## Dependências

Foundation (reaproveita `Storage` para persistência, em vez de chamar `localStorage` direto)

## API

```js
import { ThemeSwitcher } from "./features";

const theme = new ThemeSwitcher();

theme.init(); // aplica o tema salvo, ou o preferido pelo sistema (prefers-color-scheme)

theme.toggle();       // alterna claro/escuro
theme.setTheme("dark");
theme.getTheme();     // "light" | "dark"
```

Funciona setando `data-bs-theme` no elemento raiz (`<html>` por padrão, ou outro elemento passado no construtor) — o próprio Bootstrap já reagirte a esse atributo nos componentes nativos.

## Fora do escopo

Regra de negócio

Requisições

## Cobertura de dark mode

- **Nativo do Bootstrap** (`.btn-primary`, `.alert-success`, `.card`, `.modal`, `.navbar` etc.): se adapta sozinho — `$primary`/`$secondary`/etc. já apontam pros tokens do JFA, e o Bootstrap deriva as variantes escuras automaticamente.
- **`.alert-brand`/`.alert-neutral`**: têm bloco `[data-bs-theme="dark"]` próprio (`src/components/alert/alert.scss`), com a mesma fórmula que o Bootstrap usa pros `-bg-subtle-dark` nativos.
- **Header/Footer/Sidebar/Hero** (`src/layouts/`): têm bloco `[data-bs-theme="dark"]` próprio, usando os tokens `$color-text-dark`/`$color-text-muted-dark`/`$color-border-dark`.
- **`.btn-brand`/`.btn-neutral`/`.text-bg-brand`/`.text-bg-neutral`** (Button/Badge): **de propósito sem tratamento escuro** — usam fundo sólido e opaco, então o contraste interno (texto vs. fundo do próprio botão/badge) não depende do tema da página. Funcionam iguais em claro e escuro.

## Acessibilidade

Nenhum comportamento de foco/anúncio próprio — a troca de tema é puramente visual. Contraste em modo escuro verificado (cálculo WCAG) pros tokens que o JFA controla — ver `docs/audits/history.md`.
