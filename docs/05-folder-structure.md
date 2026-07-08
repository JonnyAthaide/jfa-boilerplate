## Estrutura Geral

```text
src/
│
├── assets/
├── design-system/
├── features/
├── foundation/
├── layouts/
├── pages/
└── main.js
```

---

# assets/

Arquivos estáticos da aplicação.

Exemplos:

- imagens
- vídeos
- fontes
- ícones próprios
- arquivos JSON

Não contém lógica JavaScript.

---

# design-system/

Responsável por toda a identidade visual.

Contém:

- Tokens
- Variáveis
- Bootstrap customizado
- Componentes visuais
- Utilitários Sass

Nunca contém regras de negócio.

---

# foundation/

Núcleo do framework.

Toda infraestrutura da aplicação fica aqui.

É a única camada que pode ser utilizada por qualquer Feature.

Estrutura atual:

```text
foundation/
│
├── app/
├── bootstrap/
├── config/
├── router/
├── services/

```

## app/

Classe principal da aplicação.

Responsável por iniciar toda a Foundation.

Hoje:

- instancia Router
- inicializa serviços

Futuramente:

- ciclo de vida
- carregamento das Features
- inicialização global

---

## bootstrap/

Ponto de inicialização da aplicação.

Responsável apenas por criar a App.

Nunca deve conter regra de negócio.

---

## config/

Configurações globais.

Hoje:

- constantes
- ambiente

Futuramente:

- API
- Theme
- Environment
- Storage Keys
- Feature Flags

---

## router/

Responsável pela navegação da aplicação.

Hoje:

- registro de rotas
- navegação

Futuramente:

- History API
- Hash Router
- parâmetros
- guards
- middleware
- layouts
- título da página
- breadcrumbs
- autenticação
- lazy loading
- 404

---

## services/

Serviços reutilizáveis.

Hoje:

- Logger
- Storage
- Dom

Todo serviço deve ser desacoplado das Features.

---

## helpers/

Funções utilitárias puras.

Exemplos futuros:

- debounce
- throttle
- formatadores

---

## plugins/

Integrações externas.

Exemplos:

- Swiper
- ChartJS
- TinyMCE

---

## core/

Infraestrutura compartilhada.

Reservado para futuras abstrações comuns.

---

# features/

Cada funcionalidade da aplicação.

Nenhuma Feature deve depender diretamente de outra Feature.

---

# layouts/

Layouts reutilizáveis.

Exemplos:

- DefaultLayout
- AdminLayout

---

# pages/

Entradas principais da aplicação.

Responsáveis apenas por montar Layout + Features.