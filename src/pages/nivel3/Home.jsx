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
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6" style={{fontFamily:"'Noto Serif'"}}>Impulsamos el futbol con scouting profesional, estrategia y experiencia</h1>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Ayudamos a clubes, jugadores y profesionales del futbol a alcanzar su maximo potencial con asesorias especializadas, servicios personalizados y formacion en scouting.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/nivel-3/servicios" className="flex items-center gap-2 bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold text-sm hover:bg-slate-100 transition"><Icon name="sports_soccer" className="text-lg" />Soy Jugador</Link>
            <Link to="/nivel-3/contacto" className="flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition"><Icon name="stadium" className="text-lg" />Soy Club</Link>
            <Link to="/nivel-3/curso" className="flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition"><Icon name="search" className="text-lg" />Quiero ser Scout</Link>
          </div>
        </div>
      </section>

      {/* About Marco */}
      <section className="py-20 px-8 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0A1A3A 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-10 -right-20 w-80 h-80 rounded-full border border-[#0A1A3A]/[0.06]" />
        <div className="absolute bottom-10 -left-20 w-60 h-60 rounded-full border border-[#445d94]/[0.06]" />
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
            <p className="text-slate-600 leading-relaxed mb-8">Con mas de una decada de experiencia en el scouting profesional, Marco ha trabajado con clubes de primera division en Europa y Sudamerica. Su metodologia combina el analisis de datos con la observacion tradicional para identificar talento con proyeccion internacional.</p>
            <div className="grid grid-cols-2 gap-4">
              {[{v:'+50',l:'Clubes Asesorados'},{v:'+200',l:'Jugadores Analizados'},{v:'+100',l:'Scouts Formados'},{v:'+15',l:'Paises'}].map((s,i)=>(
                <div key={i} className="bg-[#0A1A3A] text-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">{s.v}</p><p className="text-xs text-slate-300">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#445d94] font-bold tracking-widest text-xs uppercase mb-3 block">Que ofrecemos</span>
            <h2 className="text-3xl font-bold text-[#0A1A3A] mb-2" style={{fontFamily:"'Noto Serif'"}}>Nuestros Servicios</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">Soluciones profesionales para clubes, jugadores y futuros scouts.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {icon:'sports_soccer',title:'Servicios para Jugadores',desc:'Diagnostico, Plan de Mercado, Evaluacion profesional y asesoria para perfil y video. Desde €35.',link:'/nivel-3/servicios',cta:'Ver servicios',popular:true},
              {icon:'groups',title:'Asesoria para Clubes',desc:'Trabajamos con clubes para identificar y recomendar jugadores que se adapten a sus necesidades tacticas.',link:'/nivel-3/contacto',cta:'Contactar'},
              {icon:'school',title:'Curso de Scouting',desc:'Aprende las metodologias y herramientas del scouting profesional. Proxima edicion disponible.',link:'/nivel-3/curso',cta:'Ver curso'},
            ].map((s,i)=>(
              <div key={i} className={`relative rounded-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${s.popular ? 'bg-[#0A1A3A] text-white shadow-xl' : 'bg-white border border-slate-200 hover:shadow-lg'}`}>
                {s.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#445d94] text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">Para jugadores</span>}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.popular ? 'bg-white/10' : 'bg-[#0A1A3A]/5'}`}>
                    <Icon name={s.icon} className={s.popular ? 'text-[#a7c0fd]' : 'text-[#0A1A3A]'} />
                  </div>
                  <h3 className={`text-lg font-bold ${s.popular ? 'text-white' : 'text-[#0A1A3A]'}`}>{s.title}</h3>
                </div>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${s.popular ? 'text-slate-300' : 'text-slate-500'}`}>{s.desc}</p>
                <Link to={s.link} className={`block text-center py-2.5 rounded-lg font-semibold text-sm transition-all ${s.popular ? 'bg-white text-[#0A1A3A] hover:bg-slate-100' : 'bg-[#0A1A3A] text-white hover:bg-[#0A1A3A]/90'}`}>
                  {s.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic CTA */}
      <section className="bg-[#0A1A3A] py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:"'Noto Serif'"}}>Diagnostico Gratuito</h2>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">Responde unas preguntas y recibe una evaluacion inicial sobre tu perfil y las oportunidades disponibles para vos.</p>
          <Link to="/nivel-3/diagnostico" className="inline-block bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Comenzar Diagnostico</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <span className="text-[#445d94] font-bold tracking-widest text-xs uppercase mb-3 block">Testimonios</span>
          <h2 className="text-3xl font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Que dicen quienes confian en nosotros</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Esto opinan de nuestro servicio jugadores que potenciaron su carrera y scouts que se formaron con nuestra agencia.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {q:'ML Scouting es un curso que se destaca por ofrecer sesiones en vivo y evaluacion de jugadores en situaciones reales.',n:'Alumno del Curso',r:'Scout en formacion',img:images.testimonial1},
            {q:'Este es un gran paso para tu formacion y carrera, ensenandote a crear informes profesionales con practicas en vivo y mentorias con gente que ya esta introducida en el maximo nivel.',n:'Alumno del Curso',r:'Scout en formacion',img:images.testimonial2},
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
          <a href="https://marcolujan.tiendup.com/curso/curso-de-scouting-de-futbol/opiniones" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#445d94] font-semibold text-sm hover:text-[#0A1A3A] transition">
            Ver todas nuestras resenas
            <Icon name="arrow_forward" className="text-sm" />
          </a>
        </div>
      </section>

      {/* Course Banner */}
      <section className="py-16 px-8 bg-[#0A1A3A]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-4 font-medium">Proxima edicion</span>
            <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:"'Noto Serif'"}}>Curso de Scouting Profesional</h2>
            <p className="text-slate-300 mb-6">Aprende a identificar, analizar y reportar talento futbolistico con metodologia profesional.</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 px-4 py-2 rounded-lg text-center"><p className="text-white font-bold text-lg">SEP</p><p className="text-slate-300 text-xs">2026</p></div>
              <div className="text-white"><p className="font-semibold">83 personas en lista de espera</p><p className="text-sm text-slate-300">Cupos limitados</p></div>
            </div>
            <Link to="/nivel-3/curso" className="inline-block bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Ver mas informacion</Link>
          </div>
          <div className="w-64 h-48 rounded-xl overflow-hidden"><img className="w-full h-full object-cover" alt="Curso Scouting" src={images.aerialPitch} /></div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div><h2 className="text-3xl font-bold text-[#0A1A3A]" style={{fontFamily:"'Noto Serif'"}}>Blog</h2><p className="text-slate-500 mt-1">Articulos sobre scouting, mercado y desarrollo profesional.</p></div>
            <Link to="/nivel-3/blog" className="text-sm font-semibold text-[#0A1A3A] hover:underline">Ver todos &rarr;</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {cat:'Scouting',title:'Como preparar tu video highlight para scouts',desc:'Consejos clave para que tu video destaque entre cientos de jugadores.',date:'15 Oct 2026 · 5 min lectura',bg:'bg-[#a7c0fd]/30'},
              {cat:'Mercado',title:'Las ligas europeas que mas buscan talento sudamericano',desc:'Un analisis de las oportunidades en Portugal, Italia y Belgica.',date:'10 Oct 2026 · 8 min lectura',bg:'bg-[#d9e2ff]/30'},
              {cat:'Para Jugadores',title:'5 errores que cometen los jugadores al buscar club',desc:'Evita estos errores comunes que pueden arruinar tu oportunidad.',date:'5 Oct 2026 · 6 min lectura',bg:'bg-[#d9e2ff]/30'},
            ].map((a,i)=>(
              <Link key={i} to="/nivel-3/blog-articulo" className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition group">
                <div className={`h-40 ${a.bg} flex items-center justify-center`}><Icon name="article" className="text-[#445d94]/40" style={{fontSize:'40px'}} /></div>
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
          <h2 className="text-3xl font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Invita a un companero y gana beneficios</h2>
          <p className="text-slate-500 mb-6 max-w-lg mx-auto">Comparte tu codigo de referido con otros jugadores. Por cada persona que contrate un servicio, ambos reciben un <strong className="text-[#0A1A3A]">10% de descuento</strong> en su proximo servicio.</p>
          <Link to="/nivel-3/contacto" className="inline-block bg-[#0A1A3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0A1A3A]/90 transition">Conocer mas</Link>
        </div>
      </section>

      {/* WhatsApp Float */}
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition z-50">
        <Icon name="chat" className="text-white" style={{fontSize:'28px'}} />
      </a>

      <Footer />
    </div>
  )
}
