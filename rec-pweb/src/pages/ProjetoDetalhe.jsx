import { useParams, Link, Navigate } from 'react-router-dom'
import Titulo from '../components/Titulo.jsx'
import Botao from '../components/Botao.jsx'
import { projetos } from '../data/projetos.js'

export default function ProjetoDetalhe() {
  const { id } = useParams()
  const projeto = projetos.find(p => p.id === Number(id))

  if (!projeto) return <Navigate to="/projetos" replace />

  const indice = projetos.indexOf(projeto)
  const anterior = projetos[indice - 1]
  const proximo = projetos[indice + 1]

  return (
    <section className="container secao">
      <Titulo leve="Projeto" forte={projeto.nome} />
      <img className="detalhe-capa" src={projeto.imagem} alt={projeto.nome} />
      <div className="detalhe-info">
        <img src={`https://picsum.photos/seed/det${projeto.id}/600/450`} alt="" />
        <div>
          <p><strong>Local:</strong> {projeto.local}</p>
          <p><strong>Ano:</strong> {projeto.ano}</p>
          <p>{projeto.descricao}</p>
        </div>
      </div>
      <div className="detalhe-nav">
        {anterior ? <Link to={`/projetos/${anterior.id}`}>← {anterior.nome}</Link> : <span />}
        <Botao to="/projetos">Voltar</Botao>
        {proximo ? <Link to={`/projetos/${proximo.id}`}>{proximo.nome} →</Link> : <span />}
      </div>
    </section>
  )
}
