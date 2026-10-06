import { Link } from 'react-router-dom'
import Botao from '../components/Botao.jsx'
import { projetos, imgHero, imgSobre } from '../data/projetos.js'

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-texto">
          <h1><span>PROJETO</span><br /><strong>Lorum</strong></h1>
          <Botao to="/projetos">Ver projetos</Botao>
        </div>
        <img src={imgHero} alt="Edifício moderno" />
      </section>

      <section className="sobre-faixa">
        <div className="container sobre-grid">
          <div className="sobre-imgs">
            <img src={imgSobre[0]} alt="" /><img src={imgSobre[1]} alt="" />
          </div>
          <div>
            <h2>Sobre</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <Botao to="/sobre">Saiba mais</Botao>
          </div>
        </div>
      </section>

      <section className="container secao">
        <h2 className="h2-leve">Foco principal / Missão</h2>
        <div className="missao">
          <div><span className="numero">1</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
          <div><span className="numero">2</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
        </div>
      </section>

      <section className="container secao">
        <h2 className="h2-leve">Nossos projetos</h2>
        <div className="mosaico">
          {projetos.map((p, i) => (
            <Link key={p.id} to={`/projetos/${p.id}`} className={`mosaico-item item-${i}`}>
              <img src={p.imagem} alt={p.nome} />
              {i === 0 && <span className="mosaico-legenda">{p.nome}</span>}
            </Link>
          ))}
        </div>
        <div className="alinha-direita"><Botao to="/projetos">Ver todos</Botao></div>
      </section>

      <section className="container secao contato-home">
        <div>
          <h2 className="h2-leve">Fale conosco</h2>
          <form className="form" onSubmit={e => { e.preventDefault(); alert('Mensagem enviada!'); e.target.reset() }}>
            <input placeholder="Nome" required />
            <input type="email" placeholder="E-mail" required />
            <input placeholder="Telefone" />
            <textarea placeholder="Mensagem" rows="4" required />
            <Botao type="submit">Enviar</Botao>
          </form>
        </div>
        <img src="https://picsum.photos/seed/contatohome/600/500" alt="Arquiteto ao telefone" />
      </section>
    </>
  )
}
