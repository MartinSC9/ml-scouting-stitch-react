import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import PlanMercadoBanner from '../../components/PlanMercadoBanner'

const services = [
  {
    icon: 'person_search',
    title: 'Diagnostico con Scout Profesional 1 a 1',
    price: '\u20AC100',
    features: [
      'Sesion 1 a 1 con scout profesional',
      'Analisis de tu situacion actual de juego',
      'Orientacion sobre que mejorar y donde estas parado',
      'Opinion profesional sobre tu perfil como jugador',
    ],
    desc: 'Disenado para entender tu situacion actual de juego, que cuestiones mejorar y donde estas parado hoy futbolisticamente y que te falta para un proximo paso.',
    link: 'https://mlscouting.gumroad.com/l/diagosticodeperfilconscoutprofesional',
  },
  {
    icon: 'travel_explore',
    title: 'Plan de Mercado Personalizado',
    price: '\u20AC200',
    popular: true,
    features: [
      'Analisis personalizado del material del futbolista',
      'Informe profesional de scouting',
      'Video de analisis tecnico del jugador',
      'Guia de ligas y equipos donde tu perfil encaja',
      'Contactos de clubes o estructuras donde presentar tu perfil',
      'Sesion 1 a 1 con devolucion tecnica',
      'Optimizacion del perfil del jugador',
      'Asesoria administrativa',
    ],
    desc: 'Analizamos tu perfil y tu material, definimos a que ligas o equipos puedes apuntar, te entregamos informe, video, estrategia y contactos.',
    link: 'https://mlscouting.gumroad.com/l/plandemercadopersonalizado',
  },
  {
    icon: 'rocket_launch',
    title: 'Evaluacion Individual Orientada al Salto de Nivel',
    price: '\u20AC600',
    features: [
      'Todo lo del Plan de Mercado',
      'Analisis con partidos completos',
      'Posicionamiento en el mercado hasta septiembre',
      'Ofrecimiento de tu informe y material a clubes',
    ],
    desc: 'La opcion mas completa. Se trabaja con partidos completos, analisis profesional y se te posiciona en el mercado realizando nosotros la oferta a los clubes.',
    link: 'https://calendly.com/lujanmarco15/30min',
  },
  {
    icon: 'videocam',
    title: 'Asesoria para Perfil y Video',
    price: '\u20AC35',
    features: [
      'Como armar tu video de highlights',
      'Como presentar tu perfil a clubes',
      'Guia para enviar material correctamente',
    ],
    desc: 'Si todavia no tienes bien estructurado tu perfil o tu material, este servicio te ayuda.',
    link: 'https://mlscouting.gumroad.com/l/mcgcsu',
    small: true,
  },
]

const comparison = [
  ['Sesion 1 a 1 con scout profesional', true, true, true, false],
  ['Analisis de situacion actual de juego', true, true, true, false],
  ['Informe profesional de scouting', false, true, true, false],
  ['Video de analisis tecnico', false, true, true, false],
  ['Guia de ligas y equipos', false, true, true, false],
  ['Contactos de clubes', false, true, true, false],
  ['Optimizacion del perfil del jugador', false, true, true, false],
  ['Asesoria administrativa', false, true, true, false],
  ['Analisis con partidos completos', false, false, true, false],
  ['Posicionamiento en el mercado', false, false, true, false],
  ['Ofrecimiento de material a clubes', false, false, true, false],
  ['Guia para armar video de highlights', false, false, false, true],
  ['Guia para presentar perfil a clubes', false, false, false, true],
]

export default function Servicios() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="servicios" transparent />
      <main>
        {/* Hero */}
        <section className="bg-[#0A1A3A] py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4" style={{fontFamily:"'Noto Serif'"}}>Nuestros Servicios</h1>
            <p className="text-slate-300 text-lg">Soluciones profesionales para cada etapa de tu carrera futbolistica.</p>
          </div>
        </section>

        {/* Cards */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            {/* Main 3 cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {services.filter(s => !s.small).map((s, i) => (
                <div key={i} className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all relative flex flex-col ${s.popular ? 'border-2 border-[#0A1A3A]' : 'border border-slate-100'}`}>
                  {s.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0A1A3A] text-white text-xs px-4 py-1 rounded-full font-semibold">Mas popular</span>}
                  <div className="w-14 h-14 bg-[#0A1A3A] rounded-lg flex items-center justify-center mb-6"><Icon name={s.icon} className="text-white text-2xl" /></div>
                  <h3 className="text-xl font-bold text-[#0A1A3A] mb-2" style={{fontFamily:"'Noto Serif'"}}>{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {s.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm text-slate-600"><Icon name="check_circle" className="text-green-500 text-lg flex-shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <div className="flex items-end justify-between mt-auto">
                    <p className="text-2xl font-bold text-[#0A1A3A]">{s.price}</p>
                    <a href={s.link} target="_blank" rel="noopener noreferrer" className="bg-[#0A1A3A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0A1A3A]/90 transition">
                      {s.link.includes('calendly') ? 'Agendar Reunion' : 'Contratar'}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Smaller 4th card */}
            {services.filter(s => s.small).map((s, i) => (
              <div key={i} className="max-w-md mx-auto bg-white rounded-xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0A1A3A] rounded-lg flex items-center justify-center"><Icon name={s.icon} className="text-white text-xl" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0A1A3A]" style={{fontFamily:"'Noto Serif'"}}>{s.title}</h3>
                    <p className="text-xl font-bold text-[#0A1A3A]">{s.price}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-slate-600"><Icon name="check_circle" className="text-green-500 text-lg flex-shrink-0" />{f}</li>
                  ))}
                </ul>
                <a href={s.link} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-[#0A1A3A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#0A1A3A]/90 transition">Contratar</a>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Plan de Mercado Banner */}
        <section className="py-20 px-8" style={{background: '#0A1A3A'}}>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: description + features + buy button */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-[#2cb1bc] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Recomendado</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{fontFamily:"'Noto Serif'"}}>Plan de Mercado Personalizado</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Analizamos tu perfil y tu material, definimos a que ligas o equipos puedes apuntar, te entregamos informe, video, estrategia y contactos.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {[
                    'Analisis personalizado del material del futbolista',
                    'Informe profesional de scouting',
                    'Video de analisis tecnico del jugador',
                    'Guia de ligas y equipos donde tu perfil encaja',
                    'Contactos de clubes o estructuras donde presentar tu perfil',
                    'Sesion 1 a 1 con devolucion tecnica',
                    'Optimizacion del perfil del jugador',
                    'Asesoria administrativa',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Icon name="check_circle" className="text-[#2cb1bc] text-lg flex-shrink-0" />
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://mlscouting.gumroad.com/l/plandemercadopersonalizado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto text-center bg-[#2cb1bc] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#25a0aa] transition-colors shadow-lg"
                >
                  Comprar Plan de Mercado - &euro;200
                </a>
                <div className="flex items-center gap-2 text-white/50 text-xs mt-4">
                  <Icon name="lock" className="text-sm" />
                  <span>Pago seguro procesado por Gumroad.</span>
                </div>
              </div>

              {/* Right: PlanMercadoBanner */}
              <div>
                <PlanMercadoBanner variant="blue" />
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Como Funciona</h2>
            <p className="text-slate-500">Un proceso simple y profesional en 4 pasos.</p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200"></div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                {icon:'quiz',title:'1. Diagnostico',desc:'Completa el diagnostico gratuito para que conozcamos tu perfil.'},
                {icon:'handshake',title:'2. Reunion',desc:'Agendamos una llamada para definir el servicio ideal.'},
                {icon:'analytics',title:'3. Analisis',desc:'Trabajamos en tu informe, plan de mercado o evaluacion.'},
                {icon:'rocket_launch',title:'4. Accion',desc:'Ejecutamos el plan y te conectamos con oportunidades reales.'},
              ].map((s,i)=>(
                <div key={i} className="text-center">
                  <div className="w-24 h-24 bg-[#0A1A3A] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"><Icon name={s.icon} className="text-white" style={{fontSize:'32px'}} /></div>
                  <h3 className="font-bold text-[#0A1A3A] mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0A1A3A] text-center mb-12" style={{fontFamily:"'Noto Serif'"}}>Compara los Servicios</h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A1A3A] text-white">
                    <th className="text-left p-4 font-semibold">Caracteristica</th>
                    <th className="p-4 font-semibold text-center whitespace-nowrap">Diagnostico<br/><span className="font-normal text-slate-300">{'\u20AC'}100</span></th>
                    <th className="p-4 font-semibold text-center whitespace-nowrap">Plan de Mercado<br/><span className="font-normal text-slate-300">{'\u20AC'}200</span></th>
                    <th className="p-4 font-semibold text-center whitespace-nowrap">Evaluacion<br/><span className="font-normal text-slate-300">{'\u20AC'}600</span></th>
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
        <section className="py-16 px-8 bg-[#0A1A3A]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4" style={{fontFamily:"'Noto Serif'"}}>No sabes cual elegir?</h2>
            <p className="text-slate-300 mb-8">Hace el diagnostico gratuito y te recomendamos el servicio ideal para tu perfil.</p>
            <Link to="/nivel-3/diagnostico" className="inline-block bg-white text-[#0A1A3A] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Comenzar Diagnostico</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
