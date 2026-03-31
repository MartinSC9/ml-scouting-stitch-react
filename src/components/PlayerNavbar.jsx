import { NavLink, Link } from 'react-router-dom'

export default function PlayerNavbar({ activeItem }) {
  const links = [
    { to: '/jugador-dashboard', label: 'Dashboard', key: 'dashboard' },
    { to: '/jugador-perfil', label: 'Mi Perfil', key: 'perfil' },
    { to: '/jugador-cursos', label: 'Mis Cursos', key: 'cursos' },
    { to: '/jugador-referidos', label: 'Referidos', key: 'referidos' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center h-16 px-8 max-w-7xl mx-auto">
        <Link to="/" className="text-lg font-bold text-[#0A1A3A]" style={{ fontFamily: "'Noto Serif'", fontStyle: 'italic' }}>
          ML Scouting
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.key}
              to={link.to}
              className={({ isActive }) =>
                isActive || activeItem === link.key
                  ? 'text-[#0A1A3A] font-semibold text-sm'
                  : 'text-slate-500 hover:text-[#0A1A3A] text-sm font-medium transition-all'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-slate-400">notifications</span>
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-400 text-sm">person</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
