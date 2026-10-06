# Digital Project — Site de Arquitetos

Recriação do protótipo Figma "Website of Architects" com **React + Vite + React Router**.

**Integrantes do grupo:** _(adicione os nomes aqui)_

## Rotas
| Rota | Página |
|---|---|
| `/` | Home |
| `/galeria` | Galeria de fotos |
| `/projetos` | Lista de projetos |
| `/projetos/:id` | Detalhes do projeto (rota dinâmica com `useParams`) |
| `/sobre` | Sobre a empresa |
| `/contato` | Contato |
| `*` | Página não encontrada |

## Como rodar
```bash
npm install
npm run dev
```

## Estrutura
```
src/
├── components/   Header, Footer, Layout (com <Outlet />), Botao, Titulo, ProjetoCard, Logo
├── pages/        Home, Galeria, Projetos, ProjetoDetalhe, Sobre, Contato, NotFound
├── data/         projetos.js (dados dos projetos)
├── App.jsx       Definição das rotas
└── index.css     Estilos globais e responsividade
```

## Destaques
- Layout compartilhado via rota-pai + `<Outlet />`
- `NavLink` com destaque da página ativa
- Rota dinâmica com redirecionamento se o ID não existir e navegação anterior/próximo
- Menu responsivo (mobile) e scroll ao topo a cada troca de rota
