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

- `docs/architecture/` — Constituição, princípios e especificações (Components, Layout, Features, Pages)
- `docs/roadmap/00-roadmap.md` — visão e status de cada capítulo
- `docs/audits/history.md` — auditorias técnicas (Foundation, Components, Acessibilidade)
- `docs/manifesto/jfa-manifesto.md` — filosofia do projeto

---

## Status

Veja `PROJECT_STATUS.md` (raiz do repositório).

---

## Roadmap

Veja `docs/roadmap/00-roadmap.md`. Resumo dos capítulos:

00. Auditoria
01. Foundation
02. Design System
03. Components
04. Layout
05. Features
06. Pages
07. Release

---

## Releases

| Release | Status |
|----------|--------|
| v0.1.0 Foundation | ✅ |
| v0.2.0 Design System | ✅ |
| v0.3.0 Components | ✅ |
| v0.4.0 Layout | ✅ |
| v0.5.0 Features | ✅ |
| v0.6.0 Pages | ✅ |
| v0.7.0 Release | ✅ ([tag](https://github.com/JonnyAthaide/jfa-boilerplate/releases/tag/v0.7.0)) |
| v1.0.0 | 🚧 — API pública ainda não congelada; pendências em `PROJECT_STATUS.md` |

---

## Hierarquia da documentação

| Documento | Responsabilidade | Frequência |
| --- | --- | --- |
| README.md | Apresentação do projeto | Raramente |
| CHANGELOG.md | Histórico cronológico | Todo commit |
| PROJECT_STATUS.md | Estado atual | Todo commit |
| docs/roadmap/00-roadmap.md | Visão do projeto | Apenas quando houver mudança de escopo |
| docs/roadmap/01-backlog.md | Backlog | Sempre que necessário |
| docs/audits/history.md | Auditorias técnicas | Quando necessário |
| docs/manifesto/jfa-manifesto.md | Filosofia | Quase nunca |
| docs/architecture/00-architecture-principles.md | Constituição (arquitetura) | Muito raramente |
| docs/architecture/13-coding-standards.md | Convenções | Conforme evolução |
| docs/architecture/14-folder-structure.md | Organização | Apenas quando mudar |
| docs/architecture/15 a 18 (`*-specification.md`) | Contratos de Components/Layout/Features/Pages | Apenas novas decisões |

---

## Known Issues

Nenhum conhecido no momento. Histórico de bugs (incluindo os já corrigidos) em `notes/bugs.md`.
