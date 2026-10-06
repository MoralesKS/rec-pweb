import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { links } from './links.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <Logo claro />
        <div>
          <h4>Informações</h4>
          {links.map(l => <Link key={l.to} to={l.to}>{l.texto}</Link>)}
        </div>
        <div>
          <h4>Contato</h4>
          <p>1234 Sample Street<br />Austin, TX 78681</p>
          <p>512.333.2222</p>
          <p>sampleemail@gmail.com</p>
        </div>
        <div>
          <h4>Redes sociais</h4>
          <div className="redes"><span>f</span><span>t</span><span>in</span><span>p</span></div>
        </div>
      </div>
      <p className="copy">© 2021 Todos os direitos reservados.</p>
    </footer>
  )
}
