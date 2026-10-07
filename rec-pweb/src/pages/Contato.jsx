import Titulo from '../components/Titulo.jsx'
import Botao from '../components/Botao.jsx'

export default function Contato() {
  return (
    <section className="container secao contato-pagina">
      <div>
        <Titulo leve="Informações de" forte="Contato" />
        <p><strong>Digital Project Arquitetura</strong><br />1234 São Paulo - SP</p>
        <p><strong>512.333.2222</strong></p>
        <p>sampleemail@gmail.com</p>
        <Botao>Fale conosco</Botao>
      </div>
      <iframe
        title="Mapa"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-46.68%2C-23.58%2C-46.59%2C-23.52&layer=mapnik&marker=-23.5505%2C-46.6333"
        loading="lazy"
      />
    </section>
  )
}
