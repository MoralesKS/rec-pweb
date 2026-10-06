import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { links } from './links.js'

export default function Header() {
  const [aberto, setAberto] = useState(false)
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" onClick={() => setAberto(false)}><Logo /></Link>
        <button className="menu-btn" onClick={() => setAberto(!aberto)} aria-label="Abrir menu">
          {aberto ? '✕' : '☰'}
        </button>
        <nav className={`nav ${aberto ? 'aberto' : ''}`}>
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setAberto(false)}>
              {l.texto}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
