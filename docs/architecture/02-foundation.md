# Foundation

## Objetivo

Definir a infraestrutura técnica do framework.

A Foundation fornece a base necessária para o funcionamento do JFA, sem implementar interface ou regras de negócio.

---

## Responsabilidades

- Configuração global do Sass.
- Variáveis internas.
- Mixins.
- Functions.
- Helpers.
- Breakpoints.
- Reset.
- Utilitários da arquitetura.

---

## Pode conter

- abstracts/
- base/
- helpers/
- mixins/
- functions/
- variables/

---

## Nunca deve conter

- Components
- Layouts
- Features
- CSS específico de páginas

---

## Dependências

Depende de:
- Nenhuma

Utilizado por:
- Design System
- Layout
- Components
- Features

---

## Fluxo

Foundation é carregada antes de qualquer outro módulo.

---

## Boas práticas

- Manter baixo acoplamento.
- Criar funções reutilizáveis.
- Centralizar configurações.

---

## Anti-patterns

- Criar componentes.
- Definir aparência visual.
- Criar regras de negócio.

---

## Observações

Foundation representa a camada mais baixa da arquitetura.