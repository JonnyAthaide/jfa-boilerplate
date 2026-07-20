# Component Specification

> Este documento define o contrato oficial para criação de componentes no JFA Framework.
>
> Todo componente desenvolvido para o framework deverá seguir esta especificação.

---

# Objetivo

Garantir consistência, reutilização e previsibilidade na criação de componentes do JFA.

Todos os componentes devem possuir a mesma organização estrutural, facilitando manutenção, documentação e evolução do framework.

---

# Estrutura padrão

Todo componente deverá possuir a seguinte estrutura:

```text
component-name/

    component-name.html
    component-name.scss
    component-name.js
    README.md
```

Cada arquivo possui uma responsabilidade específica.

---

# Responsabilidades

## HTML

Responsável exclusivamente pela estrutura do componente.

Não deve conter lógica.

---

## SCSS

Responsável exclusivamente pela apresentação visual.

Deve utilizar os tokens do Design System.

Nunca utilizar valores hardcoded quando existir um token equivalente.

---

## JavaScript

Responsável exclusivamente pelo comportamento do componente.

Não deve conter regras de negócio da aplicação.

Deve ser reutilizável.

---

## README

Responsável por documentar o componente.

Todo componente oficial deverá possuir documentação própria.

---

# Convenção de nomenclatura

Os nomes dos arquivos devem utilizar exatamente o nome do componente.

Exemplo:

```text
button/

    button.html
    button.scss
    button.js
```

```text
modal/

    modal.html
    modal.scss
    modal.js
```

---

# Dependências

Um Component pode depender de:

- Foundation
- Design System

Um Component nunca deverá depender diretamente de:

- Features
- Pages
- Projeto consumidor

---

# Estados

Sempre que possível, componentes devem prever estados de utilização.

Exemplos:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading

---

# Variantes

Quando fizer sentido, componentes devem oferecer variantes reutilizáveis.

Exemplo:

- Primary
- Secondary
- Outline
- Ghost

A criação de variantes deve evitar duplicação de código.

---

# Acessibilidade

Todo componente deverá considerar boas práticas de acessibilidade.

Sempre que aplicável:

- HTML semântico
- Navegação por teclado
- Estados de foco
- Atributos ARIA
- Contraste adequado

---

# Reutilização

Um componente nunca deverá conhecer regras de negócio do projeto.

Toda personalização deverá ocorrer através de parâmetros, modificadores ou classes.

---

# Fluxo de criação

Todo novo componente deverá seguir o seguinte processo:

1. Definição da necessidade.
2. Criação da estrutura do componente.
3. Implementação do HTML.
4. Implementação do SCSS.
5. Implementação do JavaScript.
6. Documentação (README).
7. Validação.
8. Commit.

---

# Anti-patterns

Evitar:

- CSS específico de páginas.
- Dependências do projeto.
- Regras de negócio.
- Duplicação de componentes.
- Hardcode de tokens do Design System.
- Acoplamento entre componentes.

---

# Checklist

Antes de finalizar um componente, verificar:

- Estrutura criada.
- HTML implementado.
- SCSS implementado.
- JavaScript implementado.
- README criado.
- Estados documentados.
- Variantes documentadas.
- Acessibilidade validada.
- Código reutilizável.