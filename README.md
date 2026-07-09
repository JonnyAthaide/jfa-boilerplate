# JFA

JSA Frontend Architecture

---

## Objetivo

Boilerplate Front-End escalável para projetos institucionais,
portais e aplicações administrativas.

---

## Stack

- Vite
- Bootstrap
- Sass
- jQuery
- PostCSS
- Bootstrap Icons

---

## Instalação

```bash
npm install
npm run dev
```

---

## Documentação

/docs

---

## Status

Veja:

docs/PROJECT_STATUS.md

---

## Roadmap

Sprint 01

Sprint 02

---

## Releases

| Release | Status |
|----------|--------|
| v0.1.0 Foundation | ✅ |
| v0.2.0 Design System | ✅ |
| v0.3.0 Components | 🚧 |

---


## Hierarquia da documentação

| Documento              | Responsabilidade        | Frequência                             |
| ---------------------- | ----------------------- | -------------------------------------- |
| README.md              | Apresentação do projeto | Raramente                              |
| CHANGELOG.md           | Histórico cronológico   | Todo commit                            |
| PROJECT_STATUS.md      | Estado atual            | Todo commit                            |
| 00-roadmap.md          | Visão do projeto        | Apenas quando houver mudança de escopo |
| 01-auditoria.md        | Auditorias técnicas     | Quando necessário                      |
| 02-jfa-manifesto.md    | Filosofia               | Quase nunca                            |
| 03-architecture.md     | Arquitetura             | Muito raramente                        |
| 04-coding-standards.md | Convenções              | Conforme evolução                      |
| 05-folder-structure.md | Organização             | Apenas quando mudar                    |
| 06-backlog.md          | Backlog                 | Sempre que necessário                  |
| decisions/             | Decisões permanentes    | Apenas novas decisões                  |


## Known Issues

Atualmente o Bootstrap 5 utiliza a sintaxe Sass @import, que foi descontinuada pelo Dart Sass.

Esses warnings são esperados e serão eliminados quando o framework migrar para Bootstrap 6 ou quando o Bootstrap oficial remover o uso de @import.