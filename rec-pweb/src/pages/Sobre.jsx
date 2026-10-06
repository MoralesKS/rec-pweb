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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <h2 className="h2-leve">Certificações</h2>
          <p>Em breve.</p>
        </div>
      </div>
    </section>
  )
}
