import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/carros', label: 'Carros' },
]

function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to="/">Importados</NavLink>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
