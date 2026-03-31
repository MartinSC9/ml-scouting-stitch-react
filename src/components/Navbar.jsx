import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'

export default function Navbar({ activeItem, transparent = false, hero = false }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const linkClass = (isActive) =>
    isActive
      ? `font-semibold text-sm ${transparent && !scrolled ? 'text-white' : 'text-[#0A1A3A]'}`
      : `text-sm font-medium transition-all ${transparent && !scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-[#0A1A3A]'}`

  const mobileLinkClass = (isActive) =>
    `block py-3 px-4 rounded-lg text-base font-medium transition-all ${isActive ? 'bg-[#0A1A3A] text-white' : 'text-[#0A1A3A] hover:bg-slate-100'}`

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return true }
    return false
  }

  const handleSectionClick = (id) => {
    setMenuOpen(false)
    if (location.pathname === '/') { scrollToSection(id) } else { navigate(`/#${id}`) }
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || menuOpen ? 'bg-white shadow-sm' : transparent ? 'bg-transparent' : 'bg-white shadow-sm'}`}>
        <div className={`flex justify-between items-center px-6 md:px-8 max-w-7xl mx-auto transition-all duration-300 ${!hero || scrolled ? 'py-1' : 'py-3'}`}>
          <Link to="/" onClick={(e) => { if (location.pathname === '/') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }; setMenuOpen(false) }} className="flex items-center gap-3">
            <Logo size={scrolled ? 50 : (hero ? 110 : 60)} className="transition-all duration-300 max-md:!w-[50px] max-md:!h-[50px]" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" onClick={(e) => { if (location.pathname === '/') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) } }} className={({ isActive }) => linkClass(isActive || activeItem === 'inicio')}>Inicio</NavLink>

            <button onClick={() => handleSectionClick('servicios')} className={linkClass(['servicios','curso','diagnostico'].includes(activeItem)) + ' cursor-pointer'}>Servicios</button>

            <button onClick={() => handleSectionClick('blog')} className={linkClass(activeItem === 'blog') + ' cursor-pointer'}>Blog</button>

            <NavLink to="/contacto" className={({ isActive }) => linkClass(isActive || activeItem === 'contacto')}>Contacto</NavLink>

            <a
              href="/login"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 px-5 py-2 rounded-lg font-semibold text-sm transition-all ${
                transparent && !scrolled
                  ? 'bg-white text-[#0A1A3A] hover:bg-slate-100'
                  : 'bg-[#0A1A3A] text-white hover:bg-[#0f2a43]'
              }`}
            >
              Ingresar
            </a>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
              transparent && !scrolled && !menuOpen ? 'text-white' : 'text-[#0A1A3A]'
            }`}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="text-2xl" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/20" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-[58px] left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-4 space-y-1" style={{ animation: 'slideDown 0.25s ease-out' }}>
            <style>{`@keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }`}</style>

            <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => mobileLinkClass(isActive || activeItem === 'inicio')}>
              <span className="flex items-center gap-3"><Icon name="home" className="text-lg" /> Inicio</span>
            </NavLink>

            <button onClick={() => handleSectionClick('servicios')} className={mobileLinkClass(['servicios','curso','diagnostico'].includes(activeItem)) + ' w-full text-left'}>
              <span className="flex items-center gap-3"><Icon name="sports_soccer" className="text-lg" /> Servicios</span>
            </button>

            <button onClick={() => handleSectionClick('blog')} className={mobileLinkClass(activeItem === 'blog') + ' w-full text-left'}>
              <span className="flex items-center gap-3"><Icon name="article" className="text-lg" /> Blog</span>
            </button>

            <NavLink to="/contacto" onClick={() => setMenuOpen(false)} className={({ isActive }) => mobileLinkClass(isActive || activeItem === 'contacto')}>
              <span className="flex items-center gap-3"><Icon name="mail" className="text-lg" /> Contacto</span>
            </NavLink>

            <div className="pt-3 mt-2 border-t border-slate-100">
              <a
                href="/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block text-center py-3 rounded-lg bg-[#0A1A3A] text-white font-semibold text-sm"
              >
                Ingresar
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
