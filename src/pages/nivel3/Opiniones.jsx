import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import { images } from '../../assets/images'

const opiniones = [
  { q: 'ML Scouting es un curso que se destaca por ofrecer sesiones en vivo y evaluación de jugadores en situaciones reales.', n: 'Alumno del Curso', r: 'Scout en formación', img: images.testimonial1, tag: 'Curso' },
  { q: 'Este es un gran paso para tu formación y carrera, enseñándote a crear informes profesionales con prácticas en vivo y mentorías con gente que ya está introducida en el máximo nivel.', n: 'Alumno del Curso', r: 'Scout en formación', img: images.testimonial2, tag: 'Curso' },
  { q: 'Gracias al Plan de Mercado pude entender dónde enfocar mi carrera y recibir contactos reales de clubes en Europa.', n: 'Jugador', r: 'Delantero - Argentina', img: images.testimonial3, tag: 'Plan de Mercado' },
  { q: 'La devolución fue súper honesta y profesional. Me ayudó a ver cosas de mi juego que no tenía claras.', n: 'Jugador', r: 'Mediocampista - Uruguay', img: images.playerAvatar, tag: 'Evaluación' },
  { q: 'El curso me dio herramientas concretas para analizar jugadores. Muy recomendable para cualquiera que quiera dedicarse al scouting.', n: 'Alumno del Curso', r: 'Scout en formación', img: images.scoutAvatar, tag: 'Curso' },
  { q: 'Excelente atención y seguimiento. Se nota que conocen el mercado y saben cómo posicionar a un jugador.', n: 'Jugador', r: 'Lateral - Colombia', img: images.crmLeadAvatar, tag: 'Asesoría' },
]

export default function Opiniones() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar transparent />
      <main>
        {/* Hero */}
        <section className="relative bg-[#0A1A3A] pt-32 pb-16 px-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.05 }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="fieldLinesOp" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <line x1="60" y1="0" x2="60" y2="120" stroke="#fff" strokeWidth="1" />
                  <line x1="0" y1="60" x2="120" y2="60" stroke="#fff" strokeWidth="1" />
                  <circle cx="60" cy="60" r="30" fill="none" stroke="#fff" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#fieldLinesOp)" />
            </svg>
          </div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#445d94]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-4xl mx-auto text-center">
            <Icon name="format_quote" className="text-[#445d94] mb-4" style={{ fontSize: '48px' }} />
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif'" }}>Lo que dicen de nosotros</h1>
            <p className="text-slate-400 max-w-lg mx-auto">Opiniones reales de jugadores y alumnos que confiaron en ML Scouting para impulsar su carrera.</p>
            <div className="flex justify-center gap-6 mt-8">
              {[
                { v: '4.9', l: 'Valoración' },
                { v: '+100', l: 'Reseñas' },
                { v: '98%', l: 'Recomiendan' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold text-white">{s.v}</p>
                  <p className="text-xs text-slate-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Opiniones grid */}
        <section className="py-14 px-8">
          <div className="max-w-5xl mx-auto columns-1 md:columns-2 gap-6 space-y-6">
            {opiniones.map((t, i) => (
              <div key={i} className="break-inside-avoid bg-white p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5 text-yellow-400">
                    {[1, 2, 3, 4, 5].map(s => <Icon key={s} name="star" filled className="text-sm" />)}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#445d94] bg-[#445d94]/10 px-2 py-0.5 rounded-full">{t.tag}</span>
                </div>
                <Icon name="format_quote" className="text-slate-200 mb-1" style={{ fontSize: '28px' }} />
                <p className="text-slate-600 leading-relaxed mb-5 text-sm">{t.q}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img className="w-9 h-9 rounded-full object-cover" alt={t.n} src={t.img} />
                  <div>
                    <p className="font-semibold text-[#0A1A3A] text-sm">{t.n}</p>
                    <p className="text-xs text-slate-400">{t.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16 px-8">
          <div className="max-w-2xl mx-auto bg-[#0A1A3A] rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Noto Serif'" }}>Tu historia puede ser la siguiente</h2>
            <p className="text-slate-400 text-sm mb-6">Conoce nuestros servicios y da el primer paso.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/servicios-para-jugadores" className="bg-white text-[#0A1A3A] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-100 transition">Ver servicios</Link>
              <Link to="/curso" className="border border-white/30 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition">Ver curso</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
