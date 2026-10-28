# Locação de Carros Importados

Sistema web de locação de carros importados feito com React, Vite e Tailwind CSS.
Projeto do Checkpoint de Web Development (FIAP, 1ESPI).

## Tecnologias

- React
- Vite
- Tailwind CSS
- react-router-dom

## Como rodar

```bash
npm install
npm run dev
```

Para gerar a versão de produção: `npm run build`.

## Páginas

- `/`: Home, com destaques e como funciona.
- `/carros`: lista de carros com filtro por categoria e busca.

## Estrutura de pastas

```text
src/
  components/   Navbar, Footer e Card
  pages/        Home e Carros
  data/         lista de carros
  App.jsx       rotas
```

## Fluxo de Git

- Branches principais: `main` e `dev`.
- Cada tarefa em uma branch própria, com no mínimo 3 commits semânticos.
- Pull Request para `dev` ao concluir cada tarefa; `dev` vai para `main` na entrega.
