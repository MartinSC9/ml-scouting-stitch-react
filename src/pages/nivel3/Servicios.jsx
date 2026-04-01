import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'

export const services = [
  {
    id: 'diagnostico',
    icon: 'person_search',
    title: 'Diagnóstico con Scout Profesional 1 a 1',
    price: '\u20AC100',
    features: [
      'Sesión 1 a 1 con scout profesional',
      'Análisis de tu situación actual de juego',
      'Orientación sobre qué mejorar y dónde estás parado',
      'Opinión profesional sobre tu perfil como jugador',
    ],
    desc: 'Diseñado para entender tu situación actual de juego, qué cuestiones mejorar y dónde estás parado hoy futbolísticamente y qué te falta para un próximo paso.',
    detail: 'Un scout profesional analiza tu perfil en una sesión individual. Evaluamos tu posición, tu nivel competitivo, tus fortalezas y las áreas donde necesitas mejorar. Al finalizar, recibes una devolución honesta y orientación clara sobre tus próximos pasos.',
    link: 'https://mlscouting.gumroad.com/l/diagosticodeperfilconscoutprofesional',
    idealFor: 'Jugadores que quieren una opinión profesional antes de invertir en un plan más completo.',
    duration: 'Sesión de 45-60 minutos',
  },
  {
    id: 'plan-de-mercado',
    icon: 'travel_explore',
    title: 'Plan de Mercado Personalizado',
    price: '\u20AC200',
    popular: true,
    features: [
      'Análisis personalizado del material del futbolista',
      'Informe profesional de scouting',
      'Video de análisis técnico del jugador',
      'Guía de ligas y equipos donde tu perfil encaja',
      'Contactos de clubes o estructuras donde presentar tu perfil',
      'Sesión 1 a 1 con devolución técnica',
      'Optimización del perfil del jugador',
      'Asesoría administrativa',
    ],
    desc: 'Analizamos tu perfil y tu material, definimos a qué ligas o equipos puedes apuntar, te entregamos informe, video, estrategia y contactos.',
    detail: 'Nuestro servicio más popular. Analizamos tu material audiovisual, creamos un informe profesional de scouting, un video de análisis técnico, y definimos una estrategia con ligas y clubes donde tu perfil encaja. Además te entregamos contactos reales y te asesoramos en lo administrativo.',
    link: 'https://mlscouting.gumroad.com/l/plandemercadopersonalizado',
    idealFor: 'Jugadores que ya tienen material y quieren una estrategia clara para posicionarse en el mercado.',
    duration: 'Entrega en 7-10 días hábiles',
  },
  {
    id: 'evaluacion',
    icon: 'rocket_launch',
    title: 'Evaluación Individual Orientada al Salto de Nivel',
    price: '\u20AC600',
    features: [
      'Todo lo del Plan de Mercado',
      'Análisis con partidos completos',
      'Posicionamiento en el mercado hasta septiembre',
      'Ofrecimiento de tu informe y material a clubes',
    ],
    desc: 'La opción más completa. Se trabaja con partidos completos, análisis profesional y se te posiciona en el mercado realizando nosotros la oferta a los clubes.',
    detail: 'Incluye todo lo del Plan de Mercado pero con un nivel de profundidad superior. Trabajamos con partidos completos (no solo highlights), te posicionamos activamente en el mercado y somos nosotros quienes ofrecen tu perfil directamente a los clubes. Acompañamiento continuo hasta septiembre.',
    link: 'https://calendly.com/lujanmarco15/30min',
    idealFor: 'Jugadores con nivel competitivo que buscan dar el salto a una liga superior.',
    duration: 'Acompañamiento continuo por temporada',
  },
  {
    id: 'perfil-video',
    icon: 'videocam',
    title: 'Asesoría para Perfil y Video',
    price: '\u20AC35',
    features: [
      'Cómo armar tu video de highlights',
      'Cómo presentar tu perfil a clubes',
      'Guía para enviar material correctamente',
    ],
    desc: 'Si todavía no tienes bien estructurado tu perfil o tu material, este servicio te ayuda.',
    detail: 'Te enseñamos paso a paso cómo armar un video de highlights profesional, cómo estructurar tu perfil para presentarlo a clubes y agencias, y cómo enviar tu material de forma correcta para que no termine ignorado.',
    link: 'https://mlscouting.gumroad.com/l/mcgcsu',
    idealFor: 'Jugadores que aún no tienen su material listo o no saben cómo presentarse.',
    duration: 'Guía + sesión de consulta',
    small: true,
  },
]

const comparison = [
  ['Sesión 1 a 1 con scout profesional', true, true, true, false],
  ['Análisis de situación actual de juego', true, true, true, false],
  ['Informe profesional de scouting', false, true, true, false],
  ['Video de análisis técnico', false, true, true, false],
  ['Guía de ligas y equipos', false, true, true, false],
  ['Contactos de clubes', false, true, true, false],
  ['Optimización del perfil del jugador', false, true, true, false],
  ['Asesoría administrativa', false, true, true, false],
  ['Análisis con partidos completos', false, false, true, false],
  ['Posicionamiento en el mercado', false, false, true, false],
  ['Ofrecimiento de material a clubes', false, false, true, false],
  ['Guía para armar video de highlights', false, false, false, true],
  ['Guía para presentar perfil a clubes', false, false, false, true],
]

export default function Servicios() {
  const { hash } = useLocation()
  const [open, setOpen] = useState(null)
  const detailRef = useRef(null)

  const toggle = useCallback((id) => {
    setOpen(prev => prev === id ? null : id)
  }, [])

  // Scroll to detail when it opens
  useEffect(() => {
    if (open && detailRef.current) {
      setTimeout(() => {
        const y = detailRef.current.getBoundingClientRect().top + window.scrollY - 100
        window.scrollTo({ top: y, behavior: 'smooth' })
      }, 50)
    }
  }, [open])

  // Open from hash (e.g. linked from Home)
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const match = services.find(s => s.id === id)
      if (match) setOpen(id)
    }
  }, [hash])

  const openService = open ? services.find(s => s.id === open) : null

  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="servicios" transparent />
      <main>
        {/* Hero */}
        <section className="bg-[#0A1A3A] py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4" style={{fontFamily:"'Noto Serif'"}}>Servicios para Jugadores</h1>
            <p className="text-slate-300 text-lg">Soluciones profesionales para cada etapa de tu carrera futbolística.</p>
          </div>
        </section>

        {/* Diagnostic banner */}
        <section className="px-8 -mb-8 relative z-10">
          <div className="max-w-5xl mx-auto -mt-6">
            <Link to="/diagnostico" className="block bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-all group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#445d94]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="quiz" className="text-[#445d94]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A1A3A] text-sm">¿No sabes cuál necesitas?</p>
                    <p className="text-slate-500 text-xs">Haz el diagnóstico gratuito y te recomendamos el servicio ideal para tu caso.</p>
                  </div>
                </div>
                <span className="hidden sm:flex items-center gap-1 text-[#445d94] font-semibold text-sm whitespace-nowrap group-hover:gap-2 transition-all">
                  Hacer diagnóstico <Icon name="arrow_forward" className="text-sm" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Cards */}
        <section className="py-16 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              {services.map((s) => (
                <button key={s.id} onClick={() => toggle(s.id)} className={`text-left bg-white rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all relative flex flex-col cursor-pointer ${open === s.id ? 'ring-2 ring-[#445d94] border-transparent' : s.popular ? 'border-2 border-[#0A1A3A]' : 'border border-slate-100'}`}>
                  {s.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A1A3A] text-white text-[10px] px-3 py-0.5 rounded-full font-semibold">Más popular</span>}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#0A1A3A] rounded-lg flex items-center justify-center flex-shrink-0"><Icon name={s.icon} className="text-white" /></div>
                    <p className="text-xl font-bold text-[#0A1A3A]">{s.price}</p>
                  </div>
                  <h3 className="text-sm font-bold text-[#0A1A3A] mb-2 leading-snug">{s.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">{s.desc}</p>
                  <span className={`block text-center py-2 rounded-lg text-xs font-semibold transition-colors ${open === s.id ? 'bg-[#445d94] text-white' : 'bg-[#0A1A3A] text-white'}`}>{open === s.id ? 'Ocultar' : 'Ver detalle'}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Expandable detail */}
        {openService && (
          <section ref={detailRef} className="px-8 pb-16 -mt-8">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden" style={{animation: 'fadeSlideDown 0.3s ease-out'}}>
              <style>{`@keyframes fadeSlideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#0A1A3A] rounded-lg flex items-center justify-center"><Icon name={openService.icon} className="text-white text-xl" /></div>
                    <span className="text-2xl font-bold text-[#0A1A3A]">{openService.price}</span>
                    {openService.popular && <span className="bg-[#445d94] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Más popular</span>}
                  </div>
                  <h2 className="text-2xl font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>{openService.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{openService.detail}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-5">
                    <Icon name="schedule" className="text-[#445d94]" />
                    <span>{openService.duration}</span>
                  </div>
                  <div className="bg-[#f0f4ff] rounded-lg p-4 mb-6">
                    <p className="text-sm"><span className="font-semibold text-[#0A1A3A]">Ideal para: </span><span className="text-slate-600">{openService.idealFor}</span></p>
                  </div>
                  <a href={openService.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0A1A3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0A1A3A]/90 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer">
                    {openService.link.includes('calendly') ? 'Agendar Reunión' : 'Contratar Servicio'}
                  </a>
                </div>
                <div className="bg-[#0A1A3A] p-8 md:p-10 flex flex-col justify-center">
                  <h4 className="text-white font-bold mb-5">Qué incluye:</h4>
                  <ul className="space-y-3">
                    {openService.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm text-slate-200">
                        <Icon name="check_circle" className="text-green-400 text-lg flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Comparison */}
        <section className="py-12 px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0A1A3A] text-center mb-8" style={{fontFamily:"'Noto Serif'"}}>Compara los Servicios</h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A1A3A] text-white">
                    <th className="text-left p-4 font-semibold">Característica</th>
                    <th className="p-4 font-semibold text-center whitespace-nowrap">Diagnóstico<br/><span className="font-normal text-slate-300">{'\u20AC'}100</span></th>
                    <th className="p-4 font-semibold text-center whitespace-nowrap">Plan de Mercado<br/><span className="font-normal text-slate-300">{'\u20AC'}200</span></th>
                    <th className="p-4 font-semibold text-center whitespace-nowrap">Evaluación<br/><span className="font-normal text-slate-300">{'\u20AC'}600</span></th>
                    <th className="p-4 font-semibold text-center whitespace-nowrap">Perfil y Video<br/><span className="font-normal text-slate-300">{'\u20AC'}35</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparison.map(([feat,a,b,c,d],i)=>(
                    <tr key={i} className={i%2?'bg-slate-50':''}>
                      <td className="p-4 text-slate-600">{feat}</td>
                      {[a,b,c,d].map((v,vi)=>(
                        <td key={vi} className="p-4 text-center">
                          {v===true?<Icon name="check" className="text-green-500" />:v===false?<Icon name="close" className="text-slate-300" />:<span className="text-slate-600">{v}</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-8 bg-[#0A1A3A]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3" style={{fontFamily:"'Noto Serif'"}}>¿No sabes cuál elegir?</h2>
            <p className="text-slate-300 text-sm mb-6">Haz el diagnóstico gratuito y te recomendamos el servicio ideal.</p>
            <Link to="/diagnostico" className="inline-block bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Comenzar Diagnóstico</Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
