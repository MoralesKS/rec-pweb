import Titulo from '../components/Titulo.jsx'
import Botao from '../components/Botao.jsx'

export default function Contato() {
  return (
    <section className="container secao contato-pagina">
      <div>
        <Titulo leve="Informações de" forte="Contato" />
        <p><strong>Nome da Empresa</strong><br />1234 Sample Street Austin Texas 78681</p>
        <p><strong>512.333.2222</strong></p>
        <p>sampleemail@gmail.com</p>
        <Botao to="mailto:sampleemail@gmail.com">Fale conosco</Botao>
      </div>
      <iframe
        title="Mapa"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-97.78%2C30.24%2C-97.70%2C30.30&layer=mapnik"
        loading="lazy"
      />
    </section>
  )
}
