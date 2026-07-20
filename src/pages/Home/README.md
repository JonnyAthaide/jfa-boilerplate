# Home

> **Referência/demo — não é uma página de produção.** Mostra como um projeto consumidor do JFA compõe um `DefaultLayout` com Components/Features já existentes. O site real do Hashi Sushi não vive neste repositório (ver `18-page-specification.md`).

## Objetivo

Demonstrar a composição de um Template de Layout (`DefaultLayout`) com Components (`Hero`, `Section`, `Card`, `Button`) numa página completa.

## Composição

- `DefaultLayout` (`src/layouts/DefaultLayout`) — shell da página (Header + Main + Footer)
- `Hero` (`src/layouts/hero`) — bloco de destaque
- `Section` + `Card` (`src/layouts/section`, `src/components/card`) — bloco de conteúdo
- `Button` (`src/components/button`) — call-to-action

Nada foi criado especificamente para esta página — só composição do que já existe.

## Fora do escopo

Regra de negócio real

Requisições

Roteamento (não há mecanismo de montagem de página via Router ainda — ver `18-page-specification.md`)
