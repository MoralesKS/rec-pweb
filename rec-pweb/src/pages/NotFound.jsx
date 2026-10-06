import Titulo from '../components/Titulo.jsx'
import Botao from '../components/Botao.jsx'

export default function NotFound() {
  return (
    <section className="container secao">
      <Titulo leve="Página não" forte="encontrada" />
      <Botao to="/">Voltar ao início</Botao>
    </section>
  )
}
