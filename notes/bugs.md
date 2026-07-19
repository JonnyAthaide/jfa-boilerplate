# Bugs

## Customização do Bootstrap não é aplicada

Em `src/design-system/main.scss`, `@import "bootstrap/scss/bootstrap"` vem antes de `@import "abstracts"`.

O Sass resolve as variáveis `!default` do Bootstrap na ordem de import, então o Bootstrap já compila com seus próprios defaults antes de `_variables.scss` (`$primary`, `$border-radius`, `$font-family-sans-serif`, `$spacer`, etc.) existir. Resultado: as customizações de cor primária, fonte, radius, spacing etc. em `_variables.scss` são ignoradas silenciosamente.

Correção: inverter a ordem em `main.scss`, importando `abstracts` (que por sua vez importa `variables`) antes de `bootstrap/scss/bootstrap`.

Status: pendente — combinado ajustar ao final do Capítulo 03 (Components).
