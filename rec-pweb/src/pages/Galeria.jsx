import Titulo from '../components/Titulo.jsx'
import { galeria } from '../data/projetos.js'

export default function Galeria() {
  return (
    <section className="container secao">
      <Titulo leve="Fotos da nossa" forte="Galeria" />
      <div className="galeria">
        {galeria.map((src, i) => <img key={i} src={src} alt={`Foto ${i + 1}`} />)}
      </div>
    </section>
  )
}
