import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="text-white pt-16 pb-8 px-8" style={{ backgroundColor: '#0A1A3A' }}>
      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Nosotros */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "'Noto Serif'" }}>Nosotros</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              En ML Scouting, ayudamos a clubes, jugadores y profesionales del futbol a alcanzar su maximo potencial. Ofrecemos asesorias especializadas para equipos, servicios personalizados para jugadores y cursos de formacion en scouting, todo con un enfoque estrategico y personalizado que nos diferencia. Simplifica tus decisiones, maximiza resultados y lleva tu metodologia de trabajo al siguiente nivel con nuestro expertise y dedicacion.
            </p>
          </div>

          {/* Donde encontrarnos */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "'Noto Serif'" }}>Donde encontrarnos</h3>
            <div className="flex flex-wrap gap-3">
              <a href="http://youtube.com/@MLScouting1" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-slate-300 hover:bg-white/20 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 28 28"><path d="M11.109 17.625l7.562-3.906-7.562-3.953v7.859zM14 4.156c5.891 0 9.797 0.281 9.797 0.281 0.547 0.063 1.75 0.063 2.812 1.188 0 0 0.859 0.844 1.109 2.781 0.297 2.266 0.281 4.531 0.281 4.531v2.125s0.016 2.266-0.281 4.531c-0.25 1.922-1.109 2.781-1.109 2.781-1.062 1.109-2.266 1.109-2.812 1.172 0 0-3.906 0.297-9.797 0.297v0c-7.281-0.063-9.516-0.281-9.516-0.281-0.625-0.109-2.031-0.078-3.094-1.188 0 0-0.859-0.859-1.109-2.781-0.297-2.266-0.281-4.531-0.281-4.531v-2.125s-0.016-2.266 0.281-4.531c0.25-1.937 1.109-2.781 1.109-2.781 1.062-1.125 2.266-1.125 2.812-1.188 0 0 3.906-0.281 9.797-0.281v0z" /></svg>
              </a>
              <a href="http://instagram.com/marcolujan7" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-slate-300 hover:bg-white/20 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="http://threads.net/@marcolujan7" aria-label="Threads" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-slate-300 hover:bg-white/20 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M331.5 235.7c2.2.9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3.5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6.4 99.9 39.5 103.7 107.7l-.2.2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6.1-14.4.4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1.1z" /></svg>
              </a>
              <a href="https://wa.me/34673195438" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-slate-300 hover:bg-white/20 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 28"><path d="M15.391 15.219c0.266 0 2.812 1.328 2.922 1.516 0.031 0.078 0.031 0.172 0.031 0.234 0 0.391-0.125 0.828-0.266 1.188-0.359 0.875-1.813 1.437-2.703 1.437-0.75 0-2.297-0.656-2.969-0.969-2.234-1.016-3.625-2.75-4.969-4.734-0.594-0.875-1.125-1.953-1.109-3.031v-0.125c0.031-1.031 0.406-1.766 1.156-2.469 0.234-0.219 0.484-0.344 0.812-0.344 0.187 0 0.375 0.047 0.578 0.047 0.422 0 0.5 0.125 0.656 0.531 0.109 0.266 0.906 2.391 0.906 2.547 0 0.594-1.078 1.266-1.078 1.625 0 0.078 0.031 0.156 0.078 0.234 0.344 0.734 1 1.578 1.594 2.141 0.719 0.688 1.484 1.141 2.359 1.578 0.109 0.063 0.219 0.109 0.344 0.109 0.469 0 1.25-1.516 1.656-1.516zM12.219 23.5c5.406 0 9.812-4.406 9.812-9.812s-4.406-9.812-9.812-9.812-9.812 4.406-9.812 9.812c0 2.063 0.656 4.078 1.875 5.75l-1.234 3.641 3.781-1.203c1.594 1.047 3.484 1.625 5.391 1.625zM12.219 1.906c6.5 0 11.781 5.281 11.781 11.781s-5.281 11.781-11.781 11.781c-1.984 0-3.953-0.5-5.703-1.469l-6.516 2.094 2.125-6.328c-1.109-1.828-1.687-3.938-1.687-6.078 0-6.5 5.281-11.781 11.781-11.781z" /></svg>
              </a>
              <a href="mailto:info@ml-scouting.com" aria-label="Correo electronico" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-slate-300 hover:bg-white/20 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M15 2h-14c-0.55 0-1 0.45-1 1v10c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-10c0-0.55-0.45-1-1-1zM5.831 9.773l-3 2.182c-0.1 0.073-0.216 0.108-0.33 0.108-0.174 0-0.345-0.080-0.455-0.232-0.183-0.251-0.127-0.603 0.124-0.786l3-2.182c0.251-0.183 0.603-0.127 0.786 0.124s0.127 0.603-0.124 0.786zM13.955 11.831c-0.11 0.151-0.282 0.232-0.455 0.232-0.115 0-0.23-0.035-0.33-0.108l-3-2.182c-0.251-0.183-0.307-0.534-0.124-0.786s0.535-0.307 0.786-0.124l3 2.182c0.251 0.183 0.307 0.535 0.124 0.786zM13.831 4.955l-5.5 4c-0.099 0.072-0.215 0.108-0.331 0.108s-0.232-0.036-0.331-0.108l-5.5-4c-0.251-0.183-0.307-0.534-0.124-0.786s0.535-0.307 0.786-0.124l5.169 3.759 5.169-3.759c0.251-0.183 0.603-0.127 0.786 0.124s0.127 0.603-0.124 0.786z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/ml-scouting/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-slate-300 hover:bg-white/20 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 28"><path d="M3.703 22.094h3.609v-10.844h-3.609v10.844zM7.547 7.906c-0.016-1.062-0.781-1.875-2.016-1.875s-2.047 0.812-2.047 1.875c0 1.031 0.781 1.875 2 1.875h0.016c1.266 0 2.047-0.844 2.047-1.875zM16.688 22.094h3.609v-6.219c0-3.328-1.781-4.875-4.156-4.875-1.937 0-2.797 1.078-3.266 1.828h0.031v-1.578h-3.609s0.047 1.016 0 10.844v0h3.609v-6.062c0-0.313 0.016-0.641 0.109-0.875 0.266-0.641 0.859-1.313 1.859-1.313 1.297 0 1.813 0.984 1.813 2.453v5.797zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; 2025 ML Scouting Academy · Desarrollado por <a href="https://cu-digital-nu.vercel.app/projects" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">CU Digital</a></p>
          <div className="flex gap-4">
            <button onClick={() => { navigate('/legal?tab=privacidad'); window.scrollTo(0, 0) }} className="hover:text-white">Politica de Privacidad</button>
            <button onClick={() => { navigate('/legal?tab=terminos'); window.scrollTo(0, 0) }} className="hover:text-white">Terminos de Uso</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
