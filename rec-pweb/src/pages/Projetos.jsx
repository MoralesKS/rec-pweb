import Titulo from '../components/Titulo.jsx'
import ProjetoCard from '../components/ProjetoCard.jsx'
import { projetos } from '../data/projetos.js'

export default function Projetos() {
  return (
    <section className="container secao">
      <Titulo leve="Nossos" forte="Projetos" />
      <div className="lista-projetos">
        {projetos.map(p => <ProjetoCard key={p.id} projeto={p} />)}
      </div>
    </section>
  )
}
