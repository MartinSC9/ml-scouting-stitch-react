import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import { images } from '../../assets/images'

const modules = [
  {n:'01',title:'Fundamentos del Scouting',desc:'Historia del scouting, el rol del scout moderno en la industria del fútbol, y las bases metodológicas para evaluar jugadores profesionalmente.',icon:'menu_book'},
  {n:'02',title:'Observación y Análisis',desc:'Técnicas de observación en vivo y diferida. Cómo evaluar jugadores en contexto de juego, identificar fortalezas y áreas de mejora.',icon:'visibility'},
  {n:'03',title:'Herramientas Digitales',desc:'Plataformas de datos (Wyscout, InStat), software de video análisis y herramientas profesionales que usan los scouts de élite.',icon:'devices'},
  {n:'04',title:'Creación de Informes',desc:'Redacción de informes profesionales de scouting. Estructura, lenguaje técnico y cómo presentar tu trabajo a clubes y agencias.',icon:'description'},
  {n:'05',title:'Análisis Táctico',desc:'Evaluación de jugadores en diferentes sistemas tácticos. Análisis de roles, posicionamiento y rendimiento en situaciones reales de juego.',icon:'analytics'},
  {n:'06',title:'Red y Mercado',desc:'Networking en la industria, mercado de fichajes, cómo acceder a oportunidades laborales y prácticas reales con clubes.',icon:'handshake'},
]

export default function Curso() {
  const formRef = useRef(null)
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })

  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="curso" transparent />
      <main>
        {/* Hero */}
        <section className="bg-[#0A1A3A] pt-24 pb-20 px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4 font-medium">Próxima edición: Septiembre 2026</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight" style={{fontFamily:"'Noto Serif'"}}>Curso de Scouting Profesional</h1>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">Aprende a detectar talento como un verdadero profesional. Formación con herramientas de análisis modernas, técnicas de observación y mentorías con especialistas del fútbol internacional.</p>
              <div className="flex gap-6 mb-10">
                {[{v:'6',l:'Módulos',icon:'school'},{v:'24',l:'Clases',icon:'play_circle'},{v:'3',l:'Meses',icon:'calendar_month'},{v:'83',l:'En espera',icon:'groups'}].map((s,i)=>(
                  <div key={i} className="text-center">
                    <Icon name={s.icon} className="text-[#a7c0fd] text-lg mb-1" />
                    <p className="text-white font-bold text-2xl">{s.v}</p>
                    <p className="text-slate-400 text-xs">{s.l}</p>
                  </div>
                ))}
              </div>
              <button onClick={scrollToForm} className="cursor-pointer bg-white text-[#0A1A3A] px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-slate-100 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200">Unirme a la lista de espera</button>
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
              <h2 className="text-3xl font-bold text-[#0A1A3A] mb-2" style={{fontFamily:"'Noto Serif'"}}>¿Para quién es este curso?</h2>
              <p className="text-slate-500 text-sm">Ideal para diferentes perfiles dentro del mundo del fútbol.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-5">
              {[
                {icon:'search',title:'Aspirantes a Scout',desc:'Quienes quieren iniciar carrera en el scouting profesional.'},
                {icon:'sports',title:'Entrenadores',desc:'DTs que quieren sumar herramientas de análisis a su perfil.'},
                {icon:'sports_soccer',title:'Jugadores',desc:'Futbolistas que quieren entender cómo los evalúan los scouts.'},
                {icon:'trending_up',title:'Analistas',desc:'Profesionales que buscan especializarse en detección de talento.'},
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
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[#445d94] font-bold tracking-widest text-xs uppercase mb-3 block">Programa</span>
              <h2 className="text-3xl font-bold text-[#0A1A3A] mb-3" style={{fontFamily:"'Noto Serif'"}}>Tu hoja de ruta en 3 meses</h2>
              <p className="text-slate-500 text-sm max-w-lg mx-auto">6 módulos progresivos con clases en vivo, grabaciones y prácticas reales con clubes profesionales.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {month:1, label:'Bases', mods:[modules[0], modules[1]], color:'from-[#0A1A3A] to-[#1a2f5a]'},
                {month:2, label:'Herramientas', mods:[modules[2], modules[3]], color:'from-[#1a2f5a] to-[#2a4070]'},
                {month:3, label:'Profesionalización', mods:[modules[4], modules[5]], color:'from-[#2a4070] to-[#445d94]'},
              ].map((m,i)=>(
                <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <div className={`bg-gradient-to-br ${m.color} px-6 py-5 flex items-center justify-between`}>
                    <span className="text-white font-bold text-sm">Mes {m.month}</span>
                    <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full">{m.label}</span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col gap-3">
                    {m.mods.map((mod,j)=>(
                      <div key={j} className="flex items-center gap-3 p-3 rounded-xl bg-[#f7f9fc]">
                        <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Icon name={mod.icon} className="text-[#445d94] text-lg" />
                        </div>
                        <div>
                          <span className="text-[#445d94] text-[10px] font-bold">MÓDULO {mod.n}</span>
                          <h4 className="font-semibold text-[#0A1A3A] text-sm leading-tight">{mod.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA intermedio */}
        <section className="bg-[#0A1A3A] py-12 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3" style={{fontFamily:"'Noto Serif'"}}>Cupos limitados para la próxima edición</h2>
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
                {q:'ML Scouting es un curso que se destaca por ofrecer sesiones en vivo y evaluación de jugadores en situaciones reales. Una experiencia única.',n:'Alumno del Curso',r:'Scout en formación',img:images.testimonial1},
                {q:'Este es un gran paso para tu formación y carrera, enseñándote a crear informes profesionales con prácticas en vivo y mentorías con gente del máximo nivel.',n:'Alumno del Curso',r:'Scout en formación',img:images.testimonial2},
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
              <Link to="/opiniones" className="inline-flex items-center gap-1 text-[#445d94] font-semibold text-sm hover:text-[#0A1A3A] transition">
                Ver todas las reseñas <Icon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ with Videos */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#445d94] font-bold tracking-widest text-xs uppercase mb-3 block">Resolvemos tus dudas</span>
              <h2 className="text-3xl font-bold text-[#0A1A3A] mb-2" style={{fontFamily:"'Noto Serif'"}}>Preguntas Frecuentes</h2>
              <p className="text-slate-500 text-sm">Marco responde cada pregunta en video.</p>
            </div>

            <div className="space-y-3">
              {[
                {q:'¿Necesito tener algún estudio previo para realizar el curso?',video:'https://ml-scouting.com/wp-content/uploads/2025/05/Necesito-tener-algun-estudio-previo-para-realizar-el-curso.mp4'},
                {q:'¿Puedo realizar el curso desde cualquier parte del mundo?',video:'https://ml-scouting.com/wp-content/uploads/2025/05/Puedo-realizar-el-curso-desde-cualquier-parte-del-mundo.mp4'},
                {q:'¿Por qué plataformas se da el curso?',video:'https://ml-scouting.com/wp-content/uploads/2025/05/Por-que-plataformas-se-da-el-curso.mp4'},
                {q:'¿Cómo es la metodología de las clases del curso?',video:'https://ml-scouting.com/wp-content/uploads/2025/05/Como-es-la-metodologia-de-las-clases-del-curso.mp4'},
                {q:'¿Otorgan alguna certificación oficial al finalizar el curso?',video:'https://ml-scouting.com/wp-content/uploads/2025/05/Otorgan-alguna-certificacion-oficial-al-finalizar-el-curso.mp4'},
                {q:'¿Cuáles son las plataformas que nos enseñan a utilizar en el curso?',video:'https://ml-scouting.com/wp-content/uploads/2025/05/Cuales-son-las-plataformas-que-nos-ensenan-a-utilizar-en-el-curso.mp4'},
                {q:'¿Quiénes son los invitados de las clases? ¿Los alumnos pueden interactuar con ellos?',video:'https://ml-scouting.com/wp-content/uploads/2025/05/Quienes-son-los-invitados-de-las-clases-Los-alumnos-pueden-interactuar-con-ellos.mp4'},
                {q:'¿Cómo funciona la red de contactos que ofrecemos?',video:'https://ml-scouting.com/wp-content/uploads/2025/05/Como-funciona-la-red-de-contactos-que-ofrecemos.mp4'},
                {q:'¿En qué estadios se realizan las prácticas y en qué consisten?',video:'https://ml-scouting.com/wp-content/uploads/2025/05/En-que-estadios-se-realizan-las-practicas-y-en-que-consisten.mp4'},
                {q:'¿En las prácticas los alumnos tienen contacto con el club donde la realizan?',video:'https://ml-scouting.com/wp-content/uploads/2025/05/En-las-practicas-los-alumnos-tienen-contacto-con-el-club-donde-la-realizan.mp4'},
                {q:'¿Cuáles son las posibilidades reales de conseguir trabajo una vez finalizado el curso?',video:'https://ml-scouting.com/wp-content/uploads/2025/05/Cuales-son-las-posibilidades-reales-de-conseguir-trabajo-una-vez-finalizado-el-curso.mp4'},
              ].map((f,i)=>(
                <details key={i} className="bg-[#f7f9fc] rounded-xl border border-slate-100 overflow-hidden group">
                  <summary className="flex items-center gap-3 p-5 cursor-pointer font-semibold text-[#0A1A3A] text-sm">
                    <Icon name="play_circle" filled className="text-[#445d94] text-xl flex-shrink-0" />
                    <span className="flex-1">{f.q}</span>
                    <Icon name="expand_more" className="text-slate-400 transition-transform group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <div className="px-5 pb-5">
                    <video className="w-full rounded-lg aspect-video object-cover bg-black" controls playsInline preload="metadata" poster="https://ml-scouting.com/wp-content/uploads/2025/02/curso_scouting.png">
                      <source src={f.video} type="video/mp4" />
                    </video>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section ref={formRef} className="py-16 px-8 bg-[#0A1A3A]">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-3" style={{fontFamily:"'Noto Serif'"}}>Únete a la lista de espera</h2>
            <p className="text-slate-300 text-sm mb-8">Sé el primero en enterarte cuando se abran las inscripciones.</p>
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
                <label className="block text-sm font-medium text-[#191c1e] mb-1.5">País</label>
                <select className="w-full border border-[#c5c6cf] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#445d94] focus:border-[#445d94]">
                  <option value="">Selecciona tu país</option><option>Argentina</option><option>España</option><option>México</option><option>Colombia</option><option>Chile</option><option>Otro</option>
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
