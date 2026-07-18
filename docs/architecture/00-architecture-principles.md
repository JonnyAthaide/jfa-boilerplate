# Constituição do JFA

> Documento normativo que define as responsabilidades de cada módulo do framework.
>
> Este documento é a fonte oficial da arquitetura.
> Em caso de conflito entre documentos, prevalece esta Constituição.

---

# Artigo 1 — Responsabilidade Única

Cada diretório possui apenas uma responsabilidade.

Nenhum módulo poderá assumir responsabilidades pertencentes a outro módulo.

---

# Artigo 2 — Dependências

A arquitetura segue a seguinte hierarquia:

Foundation
↓
Design System
↓
Layout
↓
Components
↓
Features
↓
Projeto

---

# Foundation

## Responsabilidade

Infraestrutura técnica do framework.

### Pode conter

- Reset
- Helpers
- Mixins
- Functions
- Variables
- Breakpoints
- Configurações Sass
- Utilitários internos

### Nunca poderá conter

- Componentes
- Layouts
- CSS de negócio
- Estilos de páginas

---

# Design System

## Responsabilidade

Identidade visual do framework.

### Pode conter

- Colors
- Typography
- Spacing
- Radius
- Shadows
- Elevation
- Motion
- Tokens

### Nunca poderá conter

- Componentes
- Layouts
- Regras de negócio

---

# Layout

## Responsabilidade

Estruturas reutilizáveis responsáveis pela organização da interface.

### Exemplos

- Header
- Footer
- Sidebar
- Navbar
- Hero
- Main
- Section
- Grid

### Nunca poderá conter

- Regras de negócio
- Componentes específicos do projeto

---

# Components

## Responsabilidade

Componentes reutilizáveis e independentes.

### Exemplos

- Button
- Modal
- Card
- Badge
- Alert
- Breadcrumb
- Accordion
- Tabs

### Nunca poderá conter

- Regras de negócio
- Dependências do projeto

---

# Features

## Responsabilidade

Funcionalidades reutilizáveis compostas pela integração entre Components, Layouts, Scripts e Plugins.

### Exemplos

- Toast System
- Theme Switcher
- Form Validation
- Lazy Loading
- Infinite Scroll

### Nunca poderá conter

- Componentes duplicados
- Layouts duplicados
- Código específico do projeto

---

# Assets

## Responsabilidade

Arquivos estáticos compartilhados.

---

# Scripts

## Responsabilidade

Utilitários JavaScript globais.

---

# Plugins

## Responsabilidade

Integrações externas.

---

# Projeto

O projeto (Hashi Sushi) consome o framework, mas não faz parte dele.

---

# Regras de Ouro

1. Um Component nunca conhece o projeto.
2. Um Layout nunca conhece regras de negócio.
3. Uma Feature nunca duplica um Component.
4. Foundation nunca recebe código de interface.
5. Design System nunca recebe código de comportamento.
6. O projeto apenas monta as peças do framework.

---

Qualquer alteração nesta Constituição deverá ser registrada em uma ADR.