# Foundation

A Foundation é o núcleo do JFA.

Ela contém toda a infraestrutura compartilhada.

Nenhuma regra de negócio deve existir aqui.

---

## Estrutura

App

Bootstrap

Config

Router

Services

---

## Fluxo

main.js

↓

bootstrap()

↓

App

↓

Router

↓

Pages

---

## Services

Logger

Responsável pelos logs da aplicação.

Storage

Wrapper do LocalStorage.

Dom

Abstrações para manipulação do DOM.

---

## Roadmap

EventBus

Http

Plugins

Helpers

Theme

Cache