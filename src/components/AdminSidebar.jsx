import { Link } from 'react-router-dom'
import Icon from './Icon'
import Logo from './Logo'

const n3Items = [
  { key: 'dashboard', icon: 'dashboard', label: 'Dashboard', href: '/admin/dashboard' },
  { key: 'jugadores', icon: 'groups', label: 'Jugadores', href: '/admin/jugadores' },
  { key: 'servicios', icon: 'handshake', label: 'Servicios', href: '/admin/cursos' },
  { key: 'curso', icon: 'school', label: 'Curso Scouting', href: '/admin/cursos' },
  { key: 'blog', icon: 'article', label: 'Blog', href: '/admin/blog' },
  { key: 'crm', icon: 'hub', label: 'Leads / CRM', href: '/admin/crm' },
  { key: 'finanzas', icon: 'payments', label: 'Pagos / Finanzas', href: '/admin/finanzas' },
  { key: 'referidos', icon: 'share', label: 'Referidos', href: '/admin/referidos' },
  { key: 'analytics', icon: 'analytics', label: 'Analytics', href: '/admin/analytics' },
  { key: 'configuracion', icon: 'settings', label: 'Configuracion', href: '/admin/configuracion' },
]

export default function AdminSidebar({ activeItem }) {
  const items = n3Items
  const accentColor = '#006970'

  return (
    <aside className="h-screen w-64 bg-white flex flex-col py-4 shrink-0 z-50 shadow-[2px_0_12px_rgba(0,0,0,0.06)]">
      <div className="px-6 mb-8 flex items-center gap-3">
        <Logo size={32} />
        <div>
          <h1 className="font-bold text-[#0A1A3A] text-lg tracking-tight leading-tight">ML Scouting</h1>
          <p className="text-[10px] text-slate-500 font-medium">Panel de Administracion</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
        {items.map((item) => {
          const isActive = activeItem === item.key
          return (
            <Link
              key={item.key}
              to={item.href}
              className={`mx-2 my-0.5 rounded-lg flex items-center px-4 py-3 gap-3 transition-all duration-200 ease-out group relative ${
                isActive
                  ? 'bg-[#0A1A3A] text-white shadow-md shadow-[#0A1A3A]/20'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-[#0A1A3A] hover:translate-x-0.5'
              }`}
            >
              {isActive && (
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-[${accentColor}] rounded-r-full`} />
              )}
              <Icon name={item.icon} filled={isActive} className={`transition-transform duration-200 ${!isActive ? 'group-hover:scale-110' : ''}`} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
