import { useState } from 'react'
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
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 bg-ink">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <NavLink
          to="/"
          className="font-display text-xl font-black tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          Importados<span className="text-carmine">.</span>
        </NavLink>

        <button
          type="button"
          className="rounded p-2 text-white md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((value) => !value)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <ul
          id="menu-principal"
          className={[
            'absolute left-0 right-0 top-16 flex-col gap-4 bg-ink px-5 pb-5',
            'md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0',
            open ? 'flex' : 'hidden',
          ].join(' ')}
        >
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
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
