import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/carros', label: 'Carros' },
]

const linkClass = ({ isActive }) =>
  [
    'border-b-2 py-1 text-sm font-medium transition-colors',
    isActive
      ? 'border-carmine text-white'
      : 'border-transparent text-white/70 hover:text-white',
  ].join(' ')

function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-ink">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <NavLink
          to="/"
          className="font-display text-xl font-black tracking-tight text-white"
        >
          Importados<span className="text-carmine">.</span>
        </NavLink>

        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
