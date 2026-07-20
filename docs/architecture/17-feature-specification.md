# Feature Specification

> Este documento define o contrato oficial para criação de Features no JFA Framework.
>
> Toda Feature desenvolvida para o framework deverá seguir esta especificação.

---

# Objetivo

Garantir consistência, reutilização e previsibilidade na criação de funcionalidades reutilizáveis (ver `06-features.md`: Toast System, Theme Switcher, Form Validation, Infinite Scroll, Lazy Loading).

Uma Feature orquestra Components (e, quando existirem, Scripts e Plugins) para entregar um comportamento — nunca recria um Component que já existe.

---

# Estrutura padrão

```text
feature-name/

    feature-name.js
    feature-name.scss   (opcional)
    README.md
```

Diferente de Components e Layout, **não há `.html` obrigatório**. Muitas Features (ex.: Toast System) não têm markup estático — o markup é gerado em runtime, conforme a funcionalidade acontece. Quando isso for o caso, a forma do markup gerado deve ser documentada no README, não num arquivo `.html` solto.

`feature-name.scss` só existe quando a Feature precisa de CSS que os Components/Bootstrap já usados não cobrem. Se não precisar, o arquivo nem é criado (diferente de Components/Layout, que sempre têm os 4 arquivos).

---

# Responsabilidades

## JavaScript

Responsável pela lógica da Feature: orquestrar Components, reagir a eventos, gerenciar o ciclo de vida do que for criado dinamicamente.

Nunca deve conter regras de negócio do projeto nem fazer requisições diretamente — isso é responsabilidade de Services/Http, que a Feature pode consumir, não implementar.

Ao gerar markup dinamicamente, usar `document.createElement`/`textContent` (nunca `innerHTML` com string interpolada sem escapar — ver Anti-patterns).

## SCSS (quando existir)

Responsável exclusivamente pela apresentação visual que os Components existentes não cobrem. Deve utilizar os tokens do Design System.

## README

Documenta a Feature: objetivo, dependências, API pública, forma do markup gerado (quando não houver `.html`), acessibilidade.

---

# Dependências

Uma Feature pode depender de:

- Foundation
- Design System
- Layout
- Components
- Scripts
- Plugins

Uma Feature nunca deverá depender diretamente de:

- Pages
- Projeto consumidor

Scripts e Plugins nascem sob demanda, quando uma Feature de fato precisar de um helper ou de uma integração externa — não existem como pastas vazias criadas de antemão.

---

# Fluxo

Features utilizam Components para entregar funcionalidades. Nenhuma Feature deve depender diretamente de outra Feature.

---

# Acessibilidade

Toda Feature que gera conteúdo dinâmico deve considerar:

- Regiões live (`aria-live`, `role="alert"`/`role="status"`) quando o conteúdo for anunciado sem interação do usuário.
- Foco: se a Feature abre algo interativo, gerenciar foco de forma previsível (idealmente reaproveitando o comportamento nativo de um Component/Bootstrap já existente, como já fazem Modal/Alert).

---

# Reutilização

Uma Feature nunca deverá conhecer regras de negócio do projeto.

Toda personalização deverá ocorrer através de parâmetros passados na chamada (ex.: `show(message, options)`), não de lógica condicional interna amarrada ao projeto.

---

# Fluxo de criação

1. Definição da necessidade.
2. Criação da estrutura da Feature.
3. Implementação do JavaScript (orquestrando Components existentes).
4. Implementação do SCSS, se necessário.
5. Documentação (README, incluindo a forma do markup gerado quando não houver `.html`).
6. Validação.
7. Commit.

---

# Anti-patterns

Evitar:

- Recriar um Component que já existe em `src/components`.
- `innerHTML` com string interpolada sem escapar (vetor de XSS — achado e corrigido no Breadcrumb durante a auditoria do Capítulo 03; usar `document.createElement`/`textContent`).
- Regra de negócio, requisições diretas.
- Depender de outra Feature diretamente.
- Criar `src/scripts/`/`src/plugins/` especulativamente, sem uma necessidade real de uma Feature específica.

---

# Checklist

Antes de finalizar uma Feature, verificar:

- Estrutura criada.
- JavaScript implementado, sem regra de negócio.
- SCSS implementado (se necessário).
- README criado, com a forma do markup gerado documentada quando não houver `.html`.
- Geração de markup segura (sem `innerHTML` não escapado).
- Acessibilidade considerada (regiões live, foco).
- Código reutilizável.
