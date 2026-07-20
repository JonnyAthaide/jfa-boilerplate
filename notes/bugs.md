# Bugs

## Customização do Bootstrap não é aplicada

Em `src/design-system/main.scss`, `@import "bootstrap/scss/bootstrap"` vem antes de `@import "abstracts"`.

O Sass resolve as variáveis `!default` do Bootstrap na ordem de import, então o Bootstrap já compila com seus próprios defaults antes de `_variables.scss` (`$primary`, `$border-radius`, `$font-family-sans-serif`, `$spacer`, etc.) existir. Resultado: as customizações de cor primária, fonte, radius, spacing etc. em `_variables.scss` são ignoradas silenciosamente.

Correção aplicada: o projeto migrou de `@import` para `@use`/`@forward` (Sass modules). `src/design-system/abstracts/_variables.scss` agora carrega o Bootstrap via `@forward "bootstrap/scss/bootstrap" with (...)`, configurando os `!default` do Bootstrap de forma explícita e obrigatória — não depende mais de ordem textual de import, e falha a compilação (em vez de ignorar em silêncio) se uma variável de configuração não existir no Bootstrap.

Status: corrigido.
