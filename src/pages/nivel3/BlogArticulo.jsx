import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'

export default function BlogArticulo() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="blog" />
      <main className="pt-28 pb-16 px-8">
        <article className="max-w-3xl mx-auto">
          <Link to="/nivel-3/blog" className="text-sm text-[#445d94] hover:underline mb-6 inline-flex items-center gap-1"><Icon name="arrow_back" className="text-sm" /> Volver al Blog</Link>
          <span className="block text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full w-fit mb-4">Scouting</span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Como preparar tu video highlight para scouts</h1>
          <div className="flex items-center gap-4 mb-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center"><Icon name="person" className="text-slate-400 text-sm" /></div>
              <span className="font-medium text-[#0A1A3A]">Marco Lujan</span>
            </div>
            <span>15 Oct 2026</span><span>5 min lectura</span>
          </div>
          <div className="h-64 bg-[#a7c0fd]/30 rounded-xl flex items-center justify-center mb-8"><Icon name="play_circle" className="text-[#445d94]/40" style={{fontSize:'64px'}} /></div>
          <div className="prose max-w-none text-slate-600 leading-relaxed space-y-6">
            <p>El video highlight es tu carta de presentacion ante scouts y clubes. En un mercado cada vez mas competitivo, tener un video bien editado puede marcar la diferencia entre ser visto o ser ignorado.</p>
            <h2 className="text-xl font-bold text-[#0A1A3A]" style={{fontFamily:"'Noto Serif'"}}>1. Duracion ideal</h2>
            <p>Un highlight no deberia superar los 3-5 minutos. Los scouts reciben decenas de videos por semana, asi que es fundamental ir al grano y mostrar lo mejor de tu repertorio.</p>
            <h2 className="text-xl font-bold text-[#0A1A3A]" style={{fontFamily:"'Noto Serif'"}}>2. Que incluir</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acciones completas (no solo goles)</li>
              <li>Jugadas que muestren tu perfil tactico</li>
              <li>Momentos de liderazgo y comunicacion</li>
              <li>Datos del partido (liga, rival, fecha)</li>
            </ul>
            <h2 className="text-xl font-bold text-[#0A1A3A]" style={{fontFamily:"'Noto Serif'"}}>3. Errores comunes</h2>
            <p>Evita musica de fondo excesiva, efectos visuales innecesarios y clips de entrenamientos. Los scouts quieren ver partidos reales, no producciones cinematograficas.</p>
            <h2 className="text-xl font-bold text-[#0A1A3A]" style={{fontFamily:"'Noto Serif'"}}>4. Formato y distribucion</h2>
            <p>Subi tu video a YouTube como no listado y comparti el link. Asegurate de incluir tu nombre, posicion, edad y datos de contacto en la descripcion.</p>
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-4">
            <span className="text-sm font-medium text-slate-500">Compartir:</span>
            {['share','link','mail'].map(ic=>(
              <button key={ic} className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition"><Icon name={ic} className="text-slate-500 text-sm" /></button>
            ))}
          </div>

          {/* Related */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#0A1A3A] mb-6" style={{fontFamily:"'Noto Serif'"}}>Articulos relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[{title:'Las ligas europeas que mas buscan talento sudamericano',cat:'Mercado',date:'10 Oct 2026'},{title:'5 errores que cometen los jugadores al buscar club',cat:'Para Jugadores',date:'5 Oct 2026'}].map((a,i)=>(
                <Link key={i} to="/nivel-3/blog-articulo" className="bg-white rounded-xl p-5 border border-slate-100 hover:shadow-md transition group">
                  <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-600">{a.cat}</span>
                  <h4 className="font-bold text-[#0A1A3A] mt-2 group-hover:underline">{a.title}</h4>
                  <p className="text-xs text-slate-400 mt-2">{a.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
