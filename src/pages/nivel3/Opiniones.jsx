import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import { images } from '../../assets/images'

const opiniones = [
  { q: 'ML Scouting es un curso que se destaca por ofrecer sesiones en vivo y evaluacion de jugadores en situaciones reales.', n: 'Alumno del Curso', r: 'Scout en formacion', img: images.testimonial1 },
  { q: 'Este es un gran paso para tu formacion y carrera, ensenandote a crear informes profesionales con practicas en vivo y mentorias con gente que ya esta introducida en el maximo nivel.', n: 'Alumno del Curso', r: 'Scout en formacion', img: images.testimonial2 },
  { q: 'Gracias al Plan de Mercado pude entender donde enfocar mi carrera y recibir contactos reales de clubes en Europa.', n: 'Jugador', r: 'Delantero - Argentina', img: images.testimonial3 },
  { q: 'La devolucion fue super honesta y profesional. Me ayudo a ver cosas de mi juego que no tenia claras.', n: 'Jugador', r: 'Mediocampista - Uruguay', img: images.playerAvatar },
  { q: 'El curso me dio herramientas concretas para analizar jugadores. Muy recomendable para cualquiera que quiera dedicarse al scouting.', n: 'Alumno del Curso', r: 'Scout en formacion', img: images.scoutAvatar },
  { q: 'Excelente atencion y seguimiento. Se nota que conocen el mercado y saben como posicionar a un jugador.', n: 'Jugador', r: 'Lateral - Colombia', img: images.crmLeadAvatar },
]

export default function Opiniones() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar transparent />
      <main>
        <section className="bg-[#0A1A3A] py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif'" }}>Opiniones</h1>
            <p className="text-slate-300 text-lg">Lo que dicen quienes confiaron en ML Scouting.</p>
          </div>
        </section>

        <section className="py-16 px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {opiniones.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[1, 2, 3, 4, 5].map(s => <Icon key={s} name="star" filled className="text-sm" />)}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">"{t.q}"</p>
                <div className="flex items-center gap-3">
                  <img className="w-10 h-10 rounded-full object-cover" alt={t.n} src={t.img} />
                  <div>
                    <p className="font-semibold text-[#0A1A3A] text-sm">{t.n}</p>
                    <p className="text-xs text-slate-500">{t.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
