const img = (seed, w = 800, h = 500) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const projetos = [
  { id: 1, nome: 'Projeto Exemplo 1', local: 'Austin, TX', ano: 2023,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imagem: img('arq1') },
  { id: 2, nome: 'Projeto Exemplo 2', local: 'Dallas, TX', ano: 2022,
    descricao: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imagem: img('arq2') },
  { id: 3, nome: 'Projeto Exemplo 3', local: 'Houston, TX', ano: 2021,
    descricao: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imagem: img('arq3') },
  { id: 4, nome: 'Projeto Exemplo 4', local: 'San Antonio, TX', ano: 2020,
    descricao: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imagem: img('arq4') },
  { id: 5, nome: 'Projeto Exemplo 5', local: 'El Paso, TX', ano: 2019,
    descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    imagem: img('arq5') }
]

export const galeria = Array.from({ length: 10 }, (_, i) => img(`gal${i + 1}`, 400, 400))
export const imgHero = img('hero', 700, 800)
export const imgSobre = [img('sobre1', 400, 500), img('sobre2', 400, 500), img('sobre3', 300, 300)]
export const imgContato = img('contato', 600, 500)
