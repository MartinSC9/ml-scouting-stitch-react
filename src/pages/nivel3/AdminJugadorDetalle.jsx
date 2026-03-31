import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/AdminLayout'
import Icon from '../../components/Icon'
import { images } from '../../assets/images'

export default function AdminJugadorDetalle() {
  const [activeTab, setActiveTab] = useState('servicios')

  const tabs = ['Servicios','Informes','Notas','Pagos','Comunicaciones','Progreso']

  const headerActions = (
    <div className="flex items-center gap-3">
      <button className="border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1"><Icon name="edit" className="text-lg" />Editar</button>
      <button className="border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1"><Icon name="upload" className="text-lg" />Subir Informe</button>
      <button className="bg-[#0A1A3A] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1"><Icon name="picture_as_pdf" className="text-lg" />Generar Informe PDF</button>
      <button className="border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1"><Icon name="notifications" className="text-lg" />Enviar Notificacion</button>
    </div>
  )

  const headerTitle = (
    <div className="flex items-center gap-3">
      <Link to="/admin/jugadores" className="text-slate-400 hover:text-[#0A1A3A]"><Icon name="arrow_back" /></Link>
      <h2 className="text-[#0A1A3A] text-lg font-bold">Mateo Lopez</h2>
    </div>
  )

  return (
    <AdminLayout activeItem="jugadores" title="" level={3} headerActions={
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <Link to="/admin/jugadores" className="text-slate-400 hover:text-[#0A1A3A]"><Icon name="arrow_back" /></Link>
          <h2 className="text-[#0A1A3A] text-lg font-bold" style={{ fontFamily: "'Noto Serif'" }}>Mateo Lopez</h2>
        </div>
        {headerActions}
      </div>
    }>
      <section className="p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Player Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img className="w-full h-full object-cover" alt="Mateo Lopez" src={images.playerPhoto} />
              </div>
              <h3 className="font-bold text-[#0A1A3A] text-lg" style={{ fontFamily: "'Noto Serif'" }}>Mateo Lopez</h3>
              <p className="text-sm text-slate-500">Mediocampista Central · 22 anos</p>
              <span className="inline-block mt-2 text-xs bg-[#0A1A3A] text-white px-3 py-1 rounded-full">Elite</span>
            </div>

            {/* Mini FIFA Card */}
            <div className="bg-gradient-to-br from-[#0A1A3A] to-[#1a3a6a] rounded-xl p-6 text-white text-center">
              <p className="text-4xl font-bold mb-1">78</p>
              <p className="text-[10px] uppercase tracking-wider text-slate-300 mb-3">Overall Rating</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[['82','PAC'],['75','SHO'],['80','PAS'],['77','DRI'],['65','DEF'],['70','PHY']].map(([val,label]) => (
                  <div key={label}><span className="font-bold">{val}</span><br/><span className="text-slate-400">{label}</span></div>
                ))}
              </div>
            </div>

            {/* Personal Data */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h4 className="font-semibold text-[#0A1A3A] text-sm mb-4">Datos Personales</h4>
              <dl className="space-y-3 text-sm">
                {[['Email','mateo.lopez@email.com'],['Telefono','+54 11 2345-6789'],['Pais','Argentina'],['Club','Independiente'],['Altura','1.78m'],['Peso','72kg'],['Pie','Diestro'],['Registro','10 Jun 2026']].map(([k,v]) => (
                  <div key={k} className="flex justify-between"><dt className="text-slate-500">{k}</dt><dd className="text-slate-700">{v}</dd></div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right: Tabs */}
          <div className="lg:col-span-2">
            <div className="flex gap-1 mb-6 flex-wrap">
              {tabs.map(tab => {
                const key = tab.toLowerCase()
                return (
                  <button key={key} onClick={() => setActiveTab(key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border ${activeTab === key ? 'bg-[#0A1A3A] text-white border-[#0A1A3A]' : 'text-slate-600 border-slate-200'}`}>
                    {tab}
                  </button>
                )
              })}
            </div>

            {/* Tab: Servicios */}
            {activeTab === 'servicios' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#f7f9fc] rounded-lg">
                  <div className="flex items-center gap-3"><Icon name="assessment" className="text-[#445d94]" /><div><p className="text-sm font-medium text-[#0A1A3A]">Informe Tecnico</p><p className="text-xs text-slate-500">Contratado: 15 Jul 2026 · Completado: 25 Jul 2026</p></div></div>
                  <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full">Completado</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#f7f9fc] rounded-lg">
                  <div className="flex items-center gap-3"><Icon name="travel_explore" className="text-[#445d94]" /><div><p className="text-sm font-medium text-[#0A1A3A]">Plan de Mercado</p><p className="text-xs text-slate-500">Contratado: 20 Ago 2026 · En progreso</p></div></div>
                  <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">En progreso</span>
                </div>
              </div>
            )}

            {/* Tab: Informes */}
            {activeTab === 'informes' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 space-y-4">
                {[['Informe Tecnico Completo','28 pags · 25 Jul 2026'],['Analisis de Mercados Objetivo','15 pags · 5 Sep 2026']].map(([title,desc]) => (
                  <div key={title} className="flex items-center justify-between p-4 bg-[#f7f9fc] rounded-lg">
                    <div className="flex items-center gap-3"><Icon name="picture_as_pdf" className="text-red-400" /><div><p className="text-sm font-medium text-[#0A1A3A]">{title}</p><p className="text-xs text-slate-500">{desc}</p></div></div>
                    <button className="text-sm text-[#0A1A3A] font-medium flex items-center gap-1"><Icon name="download" className="text-lg" />Descargar</button>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Notas */}
            {activeTab === 'notas' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-[#f7f9fc] rounded-lg"><p className="text-xs text-slate-400 mb-1">Marco Lujan · 20 Ago 2026</p><p className="text-sm text-slate-600">Jugador con excelente vision de juego. Necesita mejorar resistencia fisica para adaptarse al futbol europeo. Mercados recomendados: Portugal, Belgica.</p></div>
                  <div className="p-4 bg-[#f7f9fc] rounded-lg"><p className="text-xs text-slate-400 mb-1">Marco Lujan · 15 Jul 2026</p><p className="text-sm text-slate-600">Primera reunion. Muy motivado y con buena actitud. Tiene videos de calidad. Perfil interesante para ligas intermedias de Europa.</p></div>
                </div>
                <textarea rows="3" placeholder="Agregar nota..." className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm mb-2"></textarea>
                <button className="bg-[#0A1A3A] text-white px-4 py-2 rounded-lg text-sm font-semibold">Guardar nota</button>
              </div>
            )}

            {/* Tab: Pagos */}
            {activeTab === 'pagos' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-slate-100">
                    {['Fecha','Servicio','Monto','Estado'].map(h => <th key={h} className="text-left p-3 text-xs font-semibold text-slate-500 uppercase">{h}</th>)}
                  </tr></thead>
                  <tbody className="divide-y divide-slate-50">
                    {[['15 Jul 2026','Informe Tecnico','\u20AC150'],['20 Ago 2026','Plan de Mercado','\u20AC250']].map(([f,s,m], i) => (
                      <tr key={i}><td className="p-3 text-slate-600">{f}</td><td className="p-3">{s}</td><td className="p-3 font-medium">{m}</td><td className="p-3"><span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">Pagado</span></td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Tab: Comunicaciones */}
            {activeTab === 'comunicaciones' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 space-y-4">
                <div className="p-4 bg-[#f7f9fc] rounded-lg"><div className="flex items-center gap-2 mb-2"><Icon name="email" className="text-lg text-[#445d94]" /><p className="text-xs text-slate-400">Email · 20 Ago 2026</p></div><p className="text-sm font-medium text-[#0A1A3A]">Confirmacion de contratacion - Plan de Mercado</p><p className="text-xs text-slate-500">Enviado automaticamente</p></div>
                <div className="p-4 bg-[#f7f9fc] rounded-lg"><div className="flex items-center gap-2 mb-2"><Icon name="email" className="text-lg text-[#445d94]" /><p className="text-xs text-slate-400">Email · 25 Jul 2026</p></div><p className="text-sm font-medium text-[#0A1A3A]">Tu Informe Tecnico esta listo</p><p className="text-xs text-slate-500">Enviado manualmente por Marco</p></div>
                <div className="p-4 bg-[#f7f9fc] rounded-lg"><div className="flex items-center gap-2 mb-2"><Icon name="chat" className="text-lg text-green-500" /><p className="text-xs text-slate-400">WhatsApp · 10 Jul 2026</p></div><p className="text-sm font-medium text-[#0A1A3A]">Primera consulta sobre servicios</p><p className="text-xs text-slate-500">Conversacion inicial</p></div>
              </div>
            )}

            {/* Tab: Progreso */}
            {activeTab === 'progreso' && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h4 className="font-semibold text-[#0A1A3A] mb-4">Evolucion del Rating</h4>
                <div className="h-48 bg-[#f7f9fc] rounded-lg flex items-end justify-around px-4 pb-4 gap-2">
                  {[['60%','Jun'],['65%','Jul'],['70%','Ago'],['78%','Sep'],['20%','Oct']].map(([h,m], i) => (
                    <div key={m} className="flex flex-col items-center gap-1">
                      <div className={`w-8 rounded-t ${i === 3 ? 'bg-[#0A1A3A]' : i === 4 ? 'bg-slate-200' : 'bg-[#a7c0fd]'}`} style={{ height: h }}></div>
                      <span className="text-[10px] text-slate-400">{m}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-4">Rating actual: 78 (+8 desde ingreso)</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </AdminLayout>
  )
}
