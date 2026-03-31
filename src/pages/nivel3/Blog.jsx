import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'

const articles = [
  {cat:'Scouting',catBg:'bg-blue-50 text-blue-700',title:'Como preparar tu video highlight para scouts',desc:'Consejos clave para que tu video destaque entre cientos de jugadores y llame la atencion de scouts profesionales.',date:'15 Oct 2026 · 5 min',img:'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop'},
  {cat:'Mercado',catBg:'bg-green-50 text-green-700',title:'Las ligas europeas que mas buscan talento sudamericano',desc:'Un analisis detallado de las oportunidades reales en Portugal, Italia, Belgica y otros mercados clave.',date:'10 Oct 2026 · 8 min',img:'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=400&fit=crop'},
  {cat:'Para Jugadores',catBg:'bg-purple-50 text-purple-700',title:'5 errores que cometen los jugadores al buscar club',desc:'Evita estos errores comunes que pueden arruinar tu oportunidad de firmar con un club.',date:'5 Oct 2026 · 6 min',img:'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop'},
  {cat:'Analisis Tactico',catBg:'bg-orange-50 text-orange-700',title:'Que buscan los scouts en un mediocampista moderno',desc:'Las metricas y cualidades que definen al mediocampista que todos los clubes quieren fichar.',date:'1 Oct 2026 · 7 min',img:'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=400&fit=crop'},
  {cat:'Curso',catBg:'bg-cyan-50 text-cyan-700',title:'Por que formarte en scouting es una oportunidad unica',desc:'El mercado del scouting crece y la demanda de profesionales formados supera la oferta.',date:'25 Sep 2026 · 4 min',img:'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&h=400&fit=crop'},
  {cat:'Para Jugadores',catBg:'bg-purple-50 text-purple-700',title:'La importancia de los datos en el futbol moderno',desc:'Como los datos estan cambiando la forma en que los clubes evaluan y fichan jugadores.',date:'20 Sep 2026 · 6 min',img:'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&h=400&fit=crop'},
]

export default function Blog() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="blog" />
      <main className="pt-28 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[#0A1A3A] mb-2" style={{fontFamily:"'Noto Serif'"}}>Blog ML Scouting</h1>
          <p className="text-slate-500 mb-8">Articulos sobre scouting, mercado, analisis tactico y desarrollo profesional.</p>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {['Todos','Para Jugadores','Scouting','Mercado','Analisis Tactico','Curso'].map((c,i)=>(
              <button key={c} className={`px-4 py-2 rounded-full text-sm font-medium ${i===0?'bg-[#0A1A3A] text-white':'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>{c}</button>
            ))}
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {articles.map((a,i)=>(
                <Link key={i} to="/blog-articulo" className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition group">
                  <div className="h-40 overflow-hidden"><img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                  <div className="p-5">
                    <span className={`text-xs ${a.catBg} px-2 py-1 rounded-full`}>{a.cat}</span>
                    <h3 className="font-bold text-[#0A1A3A] mt-2 mb-1 group-hover:underline">{a.title}</h3>
                    <p className="text-sm text-slate-500 line-clamp-2">{a.desc}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center"><Icon name="person" className="text-slate-400 text-xs" /></div>
                      <span className="text-xs text-slate-500">Marco Lujan</span><span className="text-xs text-slate-400">· {a.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] mb-4">Newsletter</h3>
                <p className="text-sm text-slate-500 mb-4">Recibe los mejores articulos sobre scouting en tu email.</p>
                <input type="email" className="w-full border border-[#c5c6cf] rounded-lg px-4 py-2.5 text-sm mb-3" placeholder="Tu email"/>
                <button className="w-full bg-[#0A1A3A] text-white py-2.5 rounded-lg text-sm font-semibold">Suscribirme</button>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-100">
                <h3 className="font-bold text-[#0A1A3A] mb-4">Categorias</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {['Scouting (8)','Para Jugadores (12)','Mercado (6)','Analisis Tactico (5)','Curso (3)'].map(c=>(
                    <li key={c}><button className="hover:text-[#0A1A3A] transition">{c}</button></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
