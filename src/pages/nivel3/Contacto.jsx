import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'

export default function Contacto() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="contacto" />
      <section className="relative pt-24 pb-10 px-6 overflow-hidden">
        {/* Subtle field lines texture */}
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

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A1A3A] mb-2" style={{fontFamily:"'Noto Serif'"}}>Contactanos</h1>
            <p className="text-slate-500">Estamos aca para ayudarte</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <form className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-sm font-medium mb-1">Nombre</label><input type="text" className="w-full border border-[#c5c6cf] rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#445d94]" placeholder="Tu nombre"/></div>
                <div><label className="block text-sm font-medium mb-1">Apellido</label><input type="text" className="w-full border border-[#c5c6cf] rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#445d94]" placeholder="Tu apellido"/></div>
              </div>
              <div><label className="block text-sm font-medium mb-1">Email</label><input type="email" className="w-full border border-[#c5c6cf] rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#445d94]" placeholder="tu@email.com"/></div>
              <div><label className="block text-sm font-medium mb-1">Asunto</label>
                <select className="w-full border border-[#c5c6cf] rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#445d94]">
                  <option value="">Selecciona un asunto</option><option>Consulta sobre servicios</option><option>Consulta sobre el curso</option><option>Otro</option>
                </select>
              </div>
              <div><label className="block text-sm font-medium mb-1">Mensaje</label><textarea rows={3} className="w-full border border-[#c5c6cf] rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-[#445d94] resize-none" placeholder="Escribi tu mensaje..."></textarea></div>
              <button type="submit" className="w-full bg-[#0A1A3A] text-white py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition">Enviar Consulta</button>
            </form>
            <div className="space-y-3">
              {[
                {icon:'mail',title:'Email',desc:'contacto@ml-scouting.com'},
                {icon:'photo_camera',title:'Instagram',desc:'@mlscoutingacademy'},
                {icon:'chat',title:'WhatsApp',desc:'Escribinos por WhatsApp',isBtn:true},
                {icon:'location_on',title:'Ubicacion',desc:'Argentina'},
              ].map((c,i)=>(
                <div key={i} className="bg-white rounded-xl p-4 border border-slate-100 flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#d9e2ff] rounded-lg flex items-center justify-center flex-shrink-0"><Icon name={c.icon} className="text-[#0A1A3A] text-xl" /></div>
                  <div>
                    <h3 className="font-semibold text-sm mb-0.5">{c.title}</h3>
                    {c.isBtn?<button className="text-[#445d94] text-sm font-medium hover:underline">{c.desc}</button>:<p className="text-slate-500 text-sm">{c.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
