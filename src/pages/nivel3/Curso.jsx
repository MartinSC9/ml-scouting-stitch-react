import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import { images } from '../../assets/images'

const modules = [
  {n:'01',title:'Fundamentos del Scouting',desc:'Historia del scouting, el rol del scout moderno en la industria del futbol, y las bases metodologicas para evaluar jugadores profesionalmente.',icon:'menu_book'},
  {n:'02',title:'Observacion y Analisis',desc:'Tecnicas de observacion en vivo y diferida. Como evaluar jugadores en contexto de juego, identificar fortalezas y areas de mejora.',icon:'visibility'},
  {n:'03',title:'Herramientas Digitales',desc:'Plataformas de datos (Wyscout, InStat), software de video analisis y herramientas profesionales que usan los scouts de elite.',icon:'devices'},
  {n:'04',title:'Creacion de Informes',desc:'Redaccion de informes profesionales de scouting. Estructura, lenguaje tecnico y como presentar tu trabajo a clubes y agencias.',icon:'description'},
  {n:'05',title:'Analisis Tactico',desc:'Evaluacion de jugadores en diferentes sistemas tacticos. Analisis de roles, posicionamiento y rendimiento en situaciones reales de juego.',icon:'analytics'},
  {n:'06',title:'Red y Mercado',desc:'Networking en la industria, mercado de fichajes, como acceder a oportunidades laborales y practicas reales con clubes.',icon:'handshake'},
]

export default function Curso() {
  const formRef = useRef(null)
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })

  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="curso" transparent />
      <main>
        {/* Hero */}
        <section className="bg-[#0A1A3A] py-20 px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4 font-medium">Proxima edicion: Septiembre 2026</span>
              <h1 className="text-4xl font-bold text-white mb-4" style={{fontFamily:"'Noto Serif'"}}>Curso de Scouting Profesional</h1>
              <p className="text-slate-300 mb-6">Aprende a detectar talento como un verdadero profesional. Formacion con herramientas de analisis modernas, tecnicas de observacion y mentorias con especialistas del futbol internacional.</p>
              <div className="flex gap-6 mb-8">
                {[{v:'6',l:'Modulos',icon:'school'},{v:'24',l:'Clases',icon:'play_circle'},{v:'3',l:'Meses',icon:'calendar_month'},{v:'83',l:'En espera',icon:'groups'}].map((s,i)=>(
                  <div key={i} className="text-center">
                    <Icon name={s.icon} className="text-[#a7c0fd] text-lg mb-1" />
                    <p className="text-white font-bold text-2xl">{s.v}</p>
                    <p className="text-slate-400 text-xs">{s.l}</p>
                  </div>
                ))}
              </div>
              <button onClick={scrollToForm} className="cursor-pointer bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200">Unirme a la lista de espera</button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <video
                className="w-full aspect-video object-cover bg-black"
                autoPlay muted loop controls playsInline
                poster="https://ml-scouting.com/wp-content/uploads/2025/02/curso_scouting.png"
              >
                <source src="https://ml-scouting.com/wp-content/uploads/2025/05/Intro-FAQS.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Para quién es */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#0A1A3A] mb-2" style={{fontFamily:"'Noto Serif'"}}>Para quien es este curso?</h2>
              <p className="text-slate-500 text-sm">Ideal para diferentes perfiles dentro del mundo del futbol.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-5">
              {[
                {icon:'search',title:'Aspirantes a Scout',desc:'Quienes quieren iniciar carrera en el scouting profesional.'},
                {icon:'sports',title:'Entrenadores',desc:'DTs que quieren sumar herramientas de analisis a su perfil.'},
                {icon:'sports_soccer',title:'Jugadores',desc:'Futbolistas que quieren entender como los evaluan los scouts.'},
                {icon:'trending_up',title:'Analistas',desc:'Profesionales que buscan especializarse en deteccion de talento.'},
              ].map((p,i)=>(
                <div key={i} className="text-center p-6 rounded-xl border border-slate-100 bg-[#f7f9fc]">
                  <div className="w-12 h-12 bg-[#0A1A3A] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={p.icon} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[#0A1A3A] text-sm mb-1">{p.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Syllabus */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#445d94] font-bold tracking-widest text-xs uppercase mb-3 block">Programa</span>
              <h2 className="text-3xl font-bold text-[#0A1A3A] mb-2" style={{fontFamily:"'Noto Serif'"}}>6 modulos, 3 meses</h2>
              <p className="text-slate-500 text-sm">Clases en vivo + grabaciones + practicas reales con clubes.</p>
            </div>
            <div className="space-y-3">
              {modules.map((m,i)=>(
                <details key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden group">
                  <summary className="flex items-center gap-4 p-5 cursor-pointer">
                    <span className="w-10 h-10 bg-[#0A1A3A] text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">{m.n}</span>
                    <Icon name={m.icon} className="text-[#445d94]" />
                    <span className="font-bold text-[#0A1A3A] flex-1 text-sm">{m.title}</span>
                    <Icon name="expand_more" className="text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 pl-20 text-slate-500 text-sm">{m.desc}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="bg-[#0A1A3A] py-12 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3" style={{fontFamily:"'Noto Serif'"}}>Cupos limitados para la proxima edicion</h2>
            <p className="text-slate-300 text-sm mb-6">Ya hay 83 personas en lista de espera. Asegura tu lugar.</p>
            <button onClick={scrollToForm} className="cursor-pointer bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200">Reservar mi lugar</button>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#0A1A3A] mb-2" style={{fontFamily:"'Noto Serif'"}}>Lo que dicen nuestros alumnos</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {q:'ML Scouting es un curso que se destaca por ofrecer sesiones en vivo y evaluacion de jugadores en situaciones reales. Una experiencia unica.',n:'Alumno del Curso',r:'Scout en formacion',img:images.testimonial1},
                {q:'Este es un gran paso para tu formacion y carrera, ensenandote a crear informes profesionales con practicas en vivo y mentorias con gente del maximo nivel.',n:'Alumno del Curso',r:'Scout en formacion',img:images.testimonial2},
              ].map((t,i)=>(
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-100">
                  <div className="flex gap-1 mb-3 text-yellow-400">{[1,2,3,4,5].map(s=><Icon key={s} name="star" filled className="text-sm" />)}</div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">"{t.q}"</p>
                  <div className="flex items-center gap-3">
                    <img className="w-9 h-9 rounded-full object-cover" alt={t.n} src={t.img} />
                    <div><p className="font-semibold text-[#0A1A3A] text-sm">{t.n}</p><p className="text-xs text-slate-500">{t.r}</p></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <a href="https://marcolujan.tiendup.com/curso/curso-de-scouting-de-futbol/opiniones" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#445d94] font-semibold text-sm hover:text-[#0A1A3A] transition">
                Ver todas las resenas <Icon name="arrow_forward" className="text-sm" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ with Videos */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#445d94] font-bold tracking-widest text-xs uppercase mb-3 block">Resolvemos tus dudas</span>
              <h2 className="text-3xl font-bold text-[#0A1A3A] mb-2" style={{fontFamily:"'Noto Serif'"}}>Preguntas Frecuentes</h2>
              <p className="text-slate-500 text-sm">Marco responde las dudas mas comunes sobre el curso.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {title:'Preguntas frecuentes',video:'https://ml-scouting.com/wp-content/uploads/2025/05/Intro-FAQS.mp4'},
                {title:'Necesito estudios previos?',video:'https://ml-scouting.com/wp-content/uploads/2025/05/Necesito-tener-algun-estudio-previo-para-realizar-el-curso.mp4'},
              ].map((v,i)=>(
                <div key={i} className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                  <video className="w-full aspect-video object-cover bg-black" controls playsInline preload="metadata" poster="https://ml-scouting.com/wp-content/uploads/2025/02/curso_scouting.png">
                    <source src={v.video} type="video/mp4" />
                  </video>
                  <div className="p-4">
                    <p className="font-bold text-[#0A1A3A] text-sm">{v.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {[
                {q:'Puedo hacerlo desde cualquier parte del mundo?',a:'Si, las clases son online en vivo con acceso a grabaciones. Podes participar desde cualquier pais.'},
                {q:'Otorgan certificacion?',a:'Si, certificacion oficial de ML Scouting al completar el curso y las practicas.'},
                {q:'Hay posibilidades reales de trabajo?',a:'Si, nuestros egresados trabajan en clubes de diferentes ligas. Te conectamos con oportunidades reales.'},
                {q:'Cual es el precio?',a:'El precio se anunciara cuando abramos inscripciones. Unite a la lista de espera para ser el primero en enterarte.'},
              ].map((f,i)=>(
                <details key={i} className="bg-[#f7f9fc] rounded-xl border border-slate-100 overflow-hidden group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[#0A1A3A] text-sm">
                    {f.q}
                    <Icon name="expand_more" className="text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 text-slate-500 text-sm">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section ref={formRef} className="py-16 px-8 bg-[#0A1A3A]">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-3" style={{fontFamily:"'Noto Serif'"}}>Unite a la lista de espera</h2>
            <p className="text-slate-300 text-sm mb-8">Se el primero en enterarte cuando se abran las inscripciones.</p>
            <form className="bg-white rounded-2xl p-8 shadow-xl space-y-5 text-left">
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Nombre completo</label>
                <input type="text" className="w-full border border-[#c5c6cf] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#445d94] focus:border-[#445d94]" placeholder="Tu nombre"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Email</label>
                <input type="email" className="w-full border border-[#c5c6cf] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#445d94] focus:border-[#445d94]" placeholder="tu@email.com"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">Pais</label>
                <select className="w-full border border-[#c5c6cf] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#445d94] focus:border-[#445d94]">
                  <option value="">Selecciona tu pais</option><option>Argentina</option><option>Espana</option><option>Mexico</option><option>Colombia</option><option>Chile</option><option>Otro</option>
                </select>
              </div>
              <button type="submit" className="cursor-pointer w-full bg-[#0A1A3A] text-white py-3.5 rounded-lg font-semibold text-sm hover:bg-[#0A1A3A]/90 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200">Unirme a la Lista de Espera</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
