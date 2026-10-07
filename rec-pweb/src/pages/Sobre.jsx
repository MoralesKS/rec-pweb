import Titulo from '../components/Titulo.jsx'
import { imgSobre } from '../data/projetos.js'

export default function Sobre() {
  return (
    <section className="container secao">
      <Titulo leve="Sobre a" forte="Empresa" />
      <div className="sobre-pagina">
        <div className="sobre-imgs">
          <img src={imgSobre[0]} alt="" /><img src={imgSobre[1]} alt="" />
        </div>
        <div>
          <p>Somos um escritório de arquitetura que transforma ideias em projetos construíveis. Combinamos desenho autoral, modelagem 3D e tecnologia BIM para entregar projetos precisos, no prazo e dentro do orçamento. </p>
          <p>Cada obra começa ouvindo o cliente e termina com um espaço pensado para durar.</p>

          <h2 className="h2-leve">Certificações</h2>
          <ul style={{marginLeft: 16}}>
            <li>Registro do escritório no conselho profissional (CAU/CREA)</li>
            <li>Certificação em BIM</li>
            <li>ISO 9001, gestão da qualidade</li>
            <li>Certificação de construção sustentável (LEED ou AQUA)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
