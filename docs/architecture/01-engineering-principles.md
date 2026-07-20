# JFA Principles

> Documento normativo da arquitetura do JFA Framework.
>
> Este documento define os princípios fundamentais da arquitetura.
> Em caso de conflito entre documentos, este documento prevalece.
>
> Alterações arquiteturais devem ser registradas através de uma ADR (Architecture Decision Record).

---

# Objetivo

Definir as responsabilidades dos módulos que compõem o JFA Framework, estabelecendo limites claros entre cada camada da arquitetura.

O objetivo é garantir previsibilidade, reutilização, escalabilidade e facilidade de manutenção.

---

# Princípios

## 1. Responsabilidade Única

Cada diretório possui apenas uma responsabilidade.

Nenhum módulo poderá assumir responsabilidades pertencentes a outro módulo.

---

## 2. Separação de Camadas

Cada camada possui uma responsabilidade específica e deve conhecer apenas aquilo que lhe compete.

```
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
```

---

## 3. Reutilização

Tudo que puder ser reutilizado deve fazer parte do Framework.

Tudo que pertencer exclusivamente ao projeto deve permanecer fora do Framework.

---

## 4. Independência

Os módulos devem ser desacoplados.

Um Component nunca deve depender diretamente de outro Component específico, salvo quando explicitamente documentado.

---

## 5. Padronização

Toda nova funcionalidade deverá seguir os padrões estabelecidos pelo Framework.

Novas estruturas somente poderão ser criadas após definição arquitetural.

---

## 6. Evolução Controlada

Mudanças estruturais deverão ocorrer por meio de ADRs, preservando o histórico das decisões arquiteturais.

---

# Regras Gerais

- Foundation nunca contém interface.
- Design System nunca contém comportamento.
- Layout organiza Components.
- Components implementam interface reutilizável.
- Features implementam funcionalidades reutilizáveis.
- O Projeto apenas consome o Framework.

---

# Fluxo de Desenvolvimento

Toda evolução do Framework deverá seguir a sequência:

```
Discussão
    ↓
Documentação
    ↓
Implementação
    ↓
Validação
    ↓
Commit
```

---

# Regras de Ouro

1. Nunca duplicar responsabilidades.
2. Nunca duplicar componentes.
3. Nunca implementar antes de documentar.
4. Todo módulo deve possuir uma responsabilidade clara.
5. Todo novo diretório deve possuir documentação arquitetural.
6. O Framework não conhece regras de negócio do projeto.

---

# Escopo

Este documento não descreve implementação.

Cada módulo possui seu próprio documento contendo suas responsabilidades específicas.