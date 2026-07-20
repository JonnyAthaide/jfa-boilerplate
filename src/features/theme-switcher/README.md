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

**Tokens de cor escuros do Design System**: os tokens em `_colors.scss` (e as variantes `brand`/`neutral` dos Components) ainda são só modo claro — o Bootstrap nativo adapta seus próprios componentes ao escurecer `data-bs-theme`, mas `.text-bg-brand`/`.btn-brand`/`.alert-brand`/etc. não têm contraparte escura ainda. Ficaria pra quando o Design System definir tokens dark.

## Acessibilidade

Nenhum comportamento de foco/anúncio próprio — a troca de tema é puramente visual. Contraste em modo escuro depende do Bootstrap nativo (ver limitação acima para as variantes customizadas).
