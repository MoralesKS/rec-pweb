import { Link } from 'react-router-dom'
import Botao from './Botao.jsx'

export default function ProjetoCard({ projeto }) {
  return (
    <article className="projeto-card">
      <Link to={`/projetos/${projeto.id}`}>
        <img src={projeto.imagem} alt={projeto.nome} />
      </Link>
      <div>
        <h3>{projeto.nome}</h3>
        <p>{projeto.descricao}</p>
        <Botao to={`/projetos/${projeto.id}`}>Ver mais</Botao>
      </div>
    </article>
  )
}
