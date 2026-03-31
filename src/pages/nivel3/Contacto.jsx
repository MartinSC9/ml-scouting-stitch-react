import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'

export default function Contacto() {
  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <Navbar activeItem="contacto" />
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A1A3A] mb-4" style={{fontFamily:"'Noto Serif'"}}>Contactanos</h1>
            <p className="text-slate-500 text-lg">Estamos aca para ayudarte</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <form className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1.5">Nombre</label><input type="text" className="w-full border border-[#c5c6cf] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#445d94]" placeholder="Tu nombre"/></div>
                <div><label className="block text-sm font-medium mb-1.5">Apellido</label><input type="text" className="w-full border border-[#c5c6cf] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#445d94]" placeholder="Tu apellido"/></div>
              </div>
              <div><label className="block text-sm font-medium mb-1.5">Email</label><input type="email" className="w-full border border-[#c5c6cf] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#445d94]" placeholder="tu@email.com"/></div>
              <div><label className="block text-sm font-medium mb-1.5">Asunto</label>
                <select className="w-full border border-[#c5c6cf] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#445d94]">
                  <option value="">Selecciona un asunto</option><option>Consulta sobre servicios</option><option>Consulta sobre el curso</option><option>Otro</option>
                </select>
              </div>
              <div><label className="block text-sm font-medium mb-1.5">Mensaje</label><textarea rows={5} className="w-full border border-[#c5c6cf] rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#445d94] resize-none" placeholder="Escribi tu mensaje..."></textarea></div>
              <button type="submit" className="w-full bg-[#0A1A3A] text-white py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition">Enviar Consulta</button>
            </form>
            <div className="space-y-6">
              {[
                {icon:'mail',title:'Email',desc:'contacto@ml-scouting.com'},
                {icon:'photo_camera',title:'Instagram',desc:'@mlscoutingacademy'},
                {icon:'chat',title:'WhatsApp',desc:'Escribinos por WhatsApp',isBtn:true},
                {icon:'location_on',title:'Ubicacion',desc:'Argentina'},
              ].map((c,i)=>(
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-100 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d9e2ff] rounded-lg flex items-center justify-center flex-shrink-0"><Icon name={c.icon} className="text-[#0A1A3A]" /></div>
                  <div>
                    <h3 className="font-semibold mb-1">{c.title}</h3>
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
