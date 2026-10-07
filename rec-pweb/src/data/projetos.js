const img = (seed, w = 800, h = 500) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const projetos = [
  { id: 1, nome: 'Complexo Horizonte', local: 'Embu das Artes', ano: 2023,
    descricao: 'Centro empresarial com áreas verdes e circulação integrada. A volumetria escalonada cria terraços e reduz o consumo de energia.',
    imagem: img('arq1') },
  { id: 2, nome: 'Escritório Atlas', local: 'Taboão da Serra', ano: 2022,
    descricao: 'Sede corporativa em planta aberta, com salas de reunião de vidro e mobiliário sob medida para trabalho colaborativo.',
    imagem: img('arq2') },
  { id: 3, nome: 'Edifício Terraço', local: 'São Paulo', ano: 2021,
    descricao: 'Prédio de uso misto com varandas contínuas e fachada ventilada que protege do calor.',
    imagem: img('arq3') },
  { id: 4, nome: 'Centro Cultural Aurora', local: 'São Paulo', ano: 2020,
    descricao: 'Equipamento cultural com cúpula de vidro, auditório e praça coberta. A estrutura leve deixa a luz natural entrar e abriga exposições e eventos ao longo do dia.',
    imagem: img('arq4') },
  { id: 5, nome: 'Residencial Vila Serena', local: 'Vila Serena', ano: 2019,
    descricao: 'Conjunto residencial de baixa altura com pátio central, telhado verde e circulação a pé entre os blocos. O projeto prioriza ventilação cruzada e áreas de convivência.',
    imagem: img('arq5') }
]

export const galeria = Array.from({ length: 10 }, (_, i) => img(`gal${i + 1}`, 400, 400))
export const imgHero = img('hero', 700, 800)
export const imgSobre = [img('sobre1', 400, 500), img('sobre2', 400, 500), img('sobre3', 300, 300)]
export const imgContato = img('contato', 600, 500)
