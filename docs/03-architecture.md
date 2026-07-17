# Architecture

## Fluxo da aplicação

main.js

↓

bootstrap()

↓

App

↓

Foundation

↓

Router

↓

Pages

↓

Layouts

↓

Features

↓

Design System

---

## Responsabilidades

### main.js

Ponto de entrada.

Nunca contém regra de negócio.

---

### Foundation

Infraestrutura da aplicação.

---

### Pages

Orquestram Features.

---

### Layouts

Organizam páginas.

---

### Features

Implementam funcionalidades.

---

### Design System

Responsável pela identidade visual.

---

## Regras

- Foundation nunca importa Features.
- Pages nunca possuem regra de negócio.
- Layouts nunca implementam lógica.
- Features não dependem diretamente de outras Features.