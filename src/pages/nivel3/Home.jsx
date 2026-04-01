import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import { images } from '../../assets/images'

const heroVideos = [
  `${import.meta.env.BASE_URL}hero-video-2.mp4`,
  `${import.meta.env.BASE_URL}hero-video.mp4`,
]

export default function Home() {
  const [videoIndex, setVideoIndex] = useState(0)
  const videoRef = useRef(null)
  const [navTransparent, setNavTransparent] = useState(true)

  useEffect(() => {
    const onScroll = () => setNavTransparent(window.scrollY < 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="inicio" transparent={navTransparent} hero />

      {/* Hero */}
      <section className="relative pt-52 pb-28 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay muted playsInline
            poster={images.heroStadium}
            key={videoIndex}
            onEnded={() => setVideoIndex((i) => (i + 1) % heroVideos.length)}
          >
            <source src={heroVideos[videoIndex]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0A1A3A]/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{fontFamily:"'Noto Serif'"}}>Impulsamos el fútbol con scouting profesional, estrategia y experiencia</h1>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Ayudamos a clubes, jugadores y profesionales del fútbol a alcanzar su máximo potencial con asesorías especializadas, servicios personalizados y formación en scouting.</p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 w-full max-w-md sm:max-w-none mx-auto">
            <Link to="/servicios-para-jugadores" className="flex items-center justify-center gap-2 bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold text-sm hover:bg-slate-100 transition"><Icon name="sports_soccer" className="text-lg" />Soy Jugador</Link>
            <a href="#contacto" onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition cursor-pointer"><Icon name="stadium" className="text-lg" />Soy Club</a>
            <Link to="/curso" className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition"><Icon name="search" className="text-lg" />Quiero ser Scout</Link>
          </div>
        </div>
      </section>

      {/* About Marco */}
      <section className="py-20 px-8 relative overflow-hidden">
        {/* Field lines texture (same as Contacto) */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="fieldLines" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <line x1="60" y1="0" x2="60" y2="120" stroke="#0A1A3A" strokeWidth="1" />
                <line x1="0" y1="60" x2="120" y2="60" stroke="#0A1A3A" strokeWidth="1" />
                <circle cx="60" cy="60" r="30" fill="none" stroke="#0A1A3A" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fieldLines)" />
          </svg>
        </div>
        {/* Gradient accents */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#445d94]/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#a7c0fd]/[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="relative max-w-sm mx-auto">
            {/* Decorative accent behind photo */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#0A1A3A] to-[#445d94] rotate-3" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img className="w-full aspect-[3/4] object-cover object-top" alt="Marco Lujan" src={images.marcoLujan} />
              <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[#0A1A3A]/60 to-transparent" />
            </div>
          </div>
          <div>
            <p className="text-[#445d94] text-sm font-semibold uppercase tracking-wider mb-2">Sobre el Fundador</p>
            <h2 className="text-3xl font-bold text-[#0A1A3A] mb-1" style={{fontFamily:"'Noto Serif'"}}>Marco Lujan</h2>
            <p className="text-slate-500 font-medium mb-4">Football Scout Internacional</p>
            <p className="text-slate-600 leading-relaxed mb-8">Con más de una década de experiencia en el scouting profesional, Marco ha trabajado con clubes de primera división en Europa y Sudamérica. Su metodología combina el análisis de datos con la observación tradicional para identificar talento con proyección internacional.</p>
            <div className="grid grid-cols-2 gap-4">
              {[{v:'+50',l:'Clubes Asesorados'},{v:'+200',l:'Jugadores Analizados'},{v:'+100',l:'Scouts Formados'},{v:'+15',l:'Países'}].map((s,i)=>(
                <div key={i} className="bg-[#0A1A3A] text-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">{s.v}</p><p className="text-xs text-slate-300">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-16 px-8 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#445d94] font-bold tracking-widest text-xs uppercase mb-3 block">Qué ofrecemos</span>
            <h2 className="text-3xl font-bold text-[#0A1A3A] mb-2" style={{fontFamily:"'Noto Serif'"}}>Nuestros Servicios</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">Soluciones profesionales para clubes, jugadores y futuros scouts.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {icon:'sports_soccer',title:'Servicios para Jugadores',desc:'Diagnóstico, Plan de Mercado, Evaluación profesional y asesoría para perfil y video. Desde €35.',link:'/servicios-para-jugadores',cta:'Ver servicios'},
              {icon:'groups',title:'Asesoría para Clubes',desc:'Trabajamos con clubes para identificar y recomendar jugadores que se adapten a sus necesidades tácticas.',link:'#contacto',cta:'Contactar',isSection:true},
              {icon:'school',title:'Curso de Scouting',desc:'Aprende las metodologías y herramientas del scouting profesional. Próxima edición disponible.',link:'/curso',cta:'Ver curso'},
            ].map((s,i)=>(
              <div key={i} className="rounded-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 bg-white border border-slate-200 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#0A1A3A]/5">
                    <Icon name={s.icon} className="text-[#0A1A3A]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1A3A]">{s.title}</h3>
                </div>
                <p className="text-sm leading-relaxed mb-6 flex-1 text-slate-500">{s.desc}</p>
                <div className="flex flex-col gap-2">
                  {s.isSection ? (
                    <a href={s.link} onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} className="block text-center py-2.5 rounded-lg font-semibold text-sm transition-all flex-1 bg-[#0A1A3A] text-white hover:bg-[#0A1A3A]/90 cursor-pointer">
                      {s.cta}
                    </a>
                  ) : (
                    <Link to={s.link} className="block text-center py-2.5 rounded-lg font-semibold text-sm transition-all flex-1 bg-[#0A1A3A] text-white hover:bg-[#0A1A3A]/90">
                      {s.cta}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic CTA */}
      <section className="bg-[#0A1A3A] py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:"'Noto Serif'"}}>Diagnóstico Gratuito</h2>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">Responde unas preguntas y recibe una evaluación inicial sobre tu perfil y las oportunidades disponibles para ti.</p>
          <Link to="/diagnostico" className="inline-block bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Comenzar Diagnóstico</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <span className="text-[#445d94] font-bold tracking-widest text-xs uppercase mb-3 block">Testimonios</span>
          <h2 className="text-3xl font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Qué dicen quienes confían en nosotros</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Esto opinan de nuestro servicio jugadores que potenciaron su carrera y scouts que se formaron con nuestra agencia.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {q:'ML Scouting es un curso que se destaca por ofrecer sesiones en vivo y evaluación de jugadores en situaciones reales.',n:'Alumno del Curso',r:'Scout en formación',img:images.testimonial1},
            {q:'Este es un gran paso para tu formación y carrera, enseñándote a crear informes profesionales con prácticas en vivo y mentorías con gente que ya está introducida en el máximo nivel.',n:'Alumno del Curso',r:'Scout en formación',img:images.testimonial2},
          ].map((t,i)=>(
            <div key={i} className="bg-[#f7f9fc] p-8 rounded-xl">
              <div className="flex gap-1 mb-4 text-yellow-400">{[1,2,3,4,5].map(s=><Icon key={s} name="star" filled className="text-sm" />)}</div>
              <p className="text-slate-600 leading-relaxed mb-6 italic">"{t.q}"</p>
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full object-cover" alt={t.n} src={t.img} />
                <div><p className="font-semibold text-[#0A1A3A] text-sm">{t.n}</p><p className="text-xs text-slate-500">{t.r}</p></div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto text-center mt-8">
          <Link to="/opiniones" className="inline-flex items-center gap-2 text-[#445d94] font-semibold text-sm hover:text-[#0A1A3A] transition">
            Ver todas nuestras reseñas
            <Icon name="arrow_forward" className="text-sm" />
          </Link>
        </div>
      </section>

      {/* Course Banner */}
      <section className="py-16 px-8 bg-[#0A1A3A]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4 font-medium">Próxima edición</span>
            <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:"'Noto Serif'"}}>Curso de Scouting Profesional</h2>
            <p className="text-slate-300 mb-6">Aprende a identificar, analizar y reportar talento futbolístico con metodología profesional.</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 px-4 py-2 rounded-lg text-center"><p className="text-white font-bold text-lg">SEP</p><p className="text-slate-300 text-xs">2026</p></div>
              <div className="text-white"><p className="font-semibold">83 personas en lista de espera</p><p className="text-sm text-slate-300">Cupos limitados</p></div>
            </div>
            <Link to="/curso" className="inline-block bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Ver más información</Link>
          </div>
          <div className="w-64 h-48 rounded-xl overflow-hidden"><img className="w-full h-full object-cover" alt="Curso Scouting" src={images.aerialPitch} /></div>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" className="py-20 px-8 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div><h2 className="text-3xl font-bold text-[#0A1A3A]" style={{fontFamily:"'Noto Serif'"}}>Blog</h2><p className="text-slate-500 mt-1">Artículos sobre scouting, mercado y desarrollo profesional.</p></div>
            <Link to="/blog" className="text-sm font-semibold text-[#0A1A3A] hover:underline">Ver todos &rarr;</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {cat:'Scouting',title:'Cómo preparar tu video highlight para scouts',desc:'Consejos clave para que tu video destaque entre cientos de jugadores.',date:'15 Oct 2026 · 5 min lectura',img:'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop'},
              {cat:'Mercado',title:'Las ligas europeas que más buscan talento sudamericano',desc:'Un análisis de las oportunidades en Portugal, Italia y Bélgica.',date:'10 Oct 2026 · 8 min lectura',img:'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop'},
              {cat:'Para Jugadores',title:'5 errores que cometen los jugadores al buscar club',desc:'Evita estos errores comunes que pueden arruinar tu oportunidad.',date:'5 Oct 2026 · 6 min lectura',img:'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop'},
            ].map((a,i)=>(
              <Link key={i} to="/blog-articulo" className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition group">
                <div className="h-40 overflow-hidden"><img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                <div className="p-5">
                  <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">{a.cat}</span>
                  <h3 className="font-bold text-[#0A1A3A] mt-2 group-hover:underline">{a.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{a.desc}</p>
                  <p className="text-xs text-slate-400 mt-3">{a.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Referral */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="share" className="text-[#0A1A3A] mb-4" style={{fontSize:'48px'}} />
          <h2 className="text-3xl font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Invita a un compañero y gana beneficios</h2>
          <p className="text-slate-500 mb-6 max-w-lg mx-auto">Comparte tu código de referido con otros jugadores. Por cada persona que contrate un servicio, ambos reciben un <strong className="text-[#0A1A3A]">10% de descuento</strong> en su próximo servicio.</p>
          <a href="#contacto" onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} className="inline-block bg-[#0A1A3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0A1A3A]/90 transition cursor-pointer">Conocer más</a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-14 px-8 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="fieldLinesContact" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <line x1="60" y1="0" x2="60" y2="120" stroke="#0A1A3A" strokeWidth="1" />
                <line x1="0" y1="60" x2="120" y2="60" stroke="#0A1A3A" strokeWidth="1" />
                <circle cx="60" cy="60" r="30" fill="none" stroke="#0A1A3A" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fieldLinesContact)" />
          </svg>
        </div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#445d94]/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#a7c0fd]/[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0A1A3A] mb-6" style={{fontFamily:"'Noto Serif'"}}>Contáctanos</h2>
          <form className="space-y-3 text-left">
            <div className="grid grid-cols-2 gap-3">
              <input type="text" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#445d94] focus:border-transparent" placeholder="Nombre"/>
              <input type="text" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#445d94] focus:border-transparent" placeholder="Apellido"/>
            </div>
            <input type="email" className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#445d94] focus:border-transparent" placeholder="Email"/>
            <select className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#445d94] focus:border-transparent">
              <option value="">Asunto</option><option>Consulta sobre servicios</option><option>Consulta sobre el curso</option><option>Otro</option>
            </select>
            <textarea rows={3} className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#445d94] focus:border-transparent resize-none" placeholder="Tu mensaje..." defaultValue="Hola, me gustaría recibir más información sobre sus servicios."></textarea>
            <button type="submit" className="w-full bg-[#0A1A3A] text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-[#0A1A3A]/90 transition">Enviar</button>
          </form>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><Icon name="mail" className="text-[#445d94] text-base" />contacto@ml-scouting.com</span>
            <a href="https://www.instagram.com/mlscoutingacademy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#0A1A3A] transition"><svg className="w-4 h-4 text-[#445d94]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.45.45.77.89.957 1.47.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.163-.46-.35-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.088 4.088 0 01.957-1.47A4.088 4.088 0 015.063 2.293c.46-.163 1.26-.35 2.43-.403C8.759 1.832 9.139 1.82 12 1.82zM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.905.333 4.14.63a5.876 5.876 0 00-2.126 1.384A5.876 5.876 0 00.63 4.14C.333 4.905.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.261 2.148.558 2.913a5.876 5.876 0 001.384 2.126A5.876 5.876 0 004.14 23.37c.765.297 1.635.5 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.148-.261 2.913-.558a5.876 5.876 0 002.126-1.384 5.876 5.876 0 001.384-2.126c.297-.765.5-1.635.558-2.913C23.986 15.667 24 15.259 24 12s-.014-3.667-.072-4.947c-.058-1.278-.261-2.148-.558-2.913a5.876 5.876 0 00-1.384-2.126A5.876 5.876 0 0019.86.63C19.095.333 18.225.13 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>@mlscoutingacademy</a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#0A1A3A] transition"><Icon name="chat" className="text-[#445d94] text-base" />WhatsApp</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
