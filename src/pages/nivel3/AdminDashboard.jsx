import AdminLayout from '../../components/AdminLayout'
import Icon from '../../components/Icon'
import { images } from '../../assets/images'

export default function AdminDashboard() {
  const metrics = [
    { label: 'Jugadores', value: '247', change: '+12%', barW: '12%', barColor: 'bg-[#a7c0fd]' },
    { label: 'Servicios', value: '18', change: '+5%', barW: '65%', barColor: 'bg-[#445d94]' },
    { label: 'Leads Curso', value: '83', change: '+22%', barW: '83%', barColor: 'bg-[#6483c6]' },
    { label: 'Ingresos', value: '\u20AC4.8k', change: '+15%', barW: '15%', barColor: 'bg-[#0A1A3A]' },
    { label: 'Conversion', value: '8.5%', change: '+1.2%', barW: '45%', barColor: 'bg-[#2b467a]' },
    { label: 'Diagnosticos', value: '156', change: '+30%', barW: '70%', barColor: 'bg-[#aec6ff]' },
  ]

  const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
  const barHeights = ['40%','45%','55%','50%','65%','75%','85%','70%','80%','90%','85%','95%']

  const recentActivity = [
    { user: 'Carlos Ruiz', action: 'Diagnostico completado', status: 'EXITO', statusBg: 'bg-green-100 text-green-700', time: 'Hoy, 14:20' },
    { user: 'Elena M.', action: 'Nuevo Lead Curso', status: 'NUEVO', statusBg: 'bg-blue-100 text-blue-700', time: 'Hoy, 13:45' },
    { user: 'Juan Torres', action: 'Suscripcion Premium', status: 'PAGO', statusBg: 'bg-purple-100 text-purple-700', time: 'Hoy, 12:10' },
    { user: 'S. Fernandez', action: 'Informe enviado', status: 'ENVIADO', statusBg: 'bg-slate-100 text-slate-600', time: 'Hoy, 11:30' },
    { user: 'Mario Gil', action: 'Ticket soporte', status: 'PENDIENTE', statusBg: 'bg-orange-100 text-orange-700', time: 'Hoy, 10:05' },
  ]

  const meetings = [
    { date: '25 Oct, 10:00', player: 'Andres M.', type: 'Diagnostico Inicial', hasLink: true },
    { date: '25 Oct, 11:30', player: 'Lucia D.', type: 'Mentoria Semanal', hasLink: true },
    { date: '26 Oct, 16:00', player: 'Beto V.', type: 'Seguimiento Plan', hasLink: false },
  ]

  return (
    <AdminLayout activeItem="dashboard" title="Dashboard" subtitle="Martes, 24 de Octubre 2026" level={3}>
      <section className="p-8 max-w-7xl mx-auto space-y-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow-[0_4px_20px_rgba(10,26,58,0.04)] hover:shadow-[0_8px_30px_rgba(10,26,58,0.08)] transition-all">
              <p className="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-1">{m.label}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-bold text-[#0A1A3A]">{m.value}</h3>
                <span className="text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Icon name="trending_up" className="text-sm" />{m.change}
                </span>
              </div>
              <div className="mt-4 h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${m.barColor}`} style={{ width: m.barW }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Revenue Chart */}
            <div className="bg-white p-6 rounded-xl shadow-[0_10px_40px_rgba(10,26,58,0.03)]">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-[#0A1A3A]" style={{ fontFamily: "'Noto Serif'" }}>Ingresos mensuales</h3>
                <select className="bg-[#f2f4f7] border-none text-xs font-bold rounded-lg px-3 py-1.5">
                  <option>Ultimos 12 meses</option>
                </select>
              </div>
              <div className="h-64 flex items-end justify-between gap-2 px-2 relative">
                <div className="absolute inset-0 flex flex-col justify-between opacity-5">
                  {[0,1,2,3].map(i => <div key={i} className="border-t border-[#0A1A3A] w-full"></div>)}
                </div>
                {barHeights.map((h, i) => (
                  <div key={i} className={`w-full rounded-t-sm transition-all hover:bg-[#0A1A3A]/30 ${i === 6 ? 'bg-[#0A1A3A]/20 border-t-2 border-[#0A1A3A]' : 'bg-[#0A1A3A]/10'}`} style={{ height: h }}></div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                {months.map(m => <span key={m}>{m}</span>)}
              </div>
            </div>

            {/* Registros vs Conversiones */}
            <div className="bg-white p-6 rounded-xl shadow-[0_10px_40px_rgba(10,26,58,0.03)]">
              <h3 className="text-xl font-bold text-[#0A1A3A] mb-6" style={{ fontFamily: "'Noto Serif'" }}>Registros vs Conversiones</h3>
              <div className="flex gap-4 items-end h-48 px-4">
                {[['70%','20%','Sem 1'],['85%','25%','Sem 2'],['60%','15%','Sem 3'],['95%','35%','Sem 4']].map(([reg,conv,label], i) => (
                  <div key={i} className="flex-1 flex flex-col gap-1 items-center">
                    <div className="w-full flex gap-1 items-end h-full">
                      <div className="flex-1 bg-[#a7c0fd] rounded-t-sm" style={{ height: reg }}></div>
                      <div className="flex-1 bg-[#0A1A3A] rounded-t-sm" style={{ height: conv }}></div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold mt-2">{label}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 mt-6 justify-center">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#a7c0fd] rounded-sm"></div><span className="text-xs font-medium text-slate-600">Registros</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#0A1A3A] rounded-sm"></div><span className="text-xs font-medium text-slate-600">Conversiones</span></div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Service Distribution */}
            <div className="bg-white p-6 rounded-xl shadow-[0_10px_40px_rgba(10,26,58,0.03)]">
              <h3 className="text-xl font-bold text-[#0A1A3A] mb-6" style={{ fontFamily: "'Noto Serif'" }}>Distribucion de servicios</h3>
              <div className="relative w-40 h-40 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" fill="none" r="16" stroke="#e0e3e6" strokeWidth="4" />
                  <circle cx="18" cy="18" fill="none" r="16" stroke="#0a1a3a" strokeDasharray="45, 100" strokeWidth="4" />
                  <circle cx="18" cy="18" fill="none" r="16" stroke="#445d94" strokeDasharray="30, 100" strokeDashoffset="-45" strokeWidth="4" />
                  <circle cx="18" cy="18" fill="none" r="16" stroke="#a7c0fd" strokeDasharray="25, 100" strokeDashoffset="-75" strokeWidth="4" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-[#0A1A3A]">18</span>
                  <span className="text-[8px] font-bold text-slate-400 uppercase">Total</span>
                </div>
              </div>
              <div className="space-y-3">
                {[['#0a1a3a','Scouting Elite','45%'],['#445d94','Analisis Video','30%'],['#a7c0fd','Mentoria','25%']].map(([color,label,pct]) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-600 flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ background: color }}></div>{label}</span>
                    <span className="text-xs font-bold text-[#0A1A3A]">{pct}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Players by Level */}
            <div className="bg-white p-6 rounded-xl shadow-[0_10px_40px_rgba(10,26,58,0.03)]">
              <h3 className="text-xl font-bold text-[#0A1A3A] mb-6" style={{ fontFamily: "'Noto Serif'" }}>Jugadores por nivel</h3>
              <div className="space-y-4">
                {[['Futbol Base',120,'48.5%','bg-[#0A1A3A]'],['Amateur / Regional',85,'34.4%','bg-[#445d94]'],['Semi-Pro',32,'13.0%','bg-[#a7c0fd]'],['Profesional',10,'4.1%','bg-[#6483c6]']].map(([label,count,w,color]) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-slate-600">{label}</span>
                      <span className="text-[#0A1A3A]">{count}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full">
                      <div className={`${color} h-full rounded-full`} style={{ width: w }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Reach */}
            <div className="bg-white p-6 rounded-xl shadow-[0_10px_40px_rgba(10,26,58,0.03)]">
              <h3 className="text-xl font-bold text-[#0A1A3A] mb-4" style={{ fontFamily: "'Noto Serif'" }}>Alcance Global</h3>
              <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden relative">
                <img className="w-full h-full object-cover" alt="Alcance global" src={images.adminWorldMap} />
                <div className="absolute top-[40%] left-[45%] w-3 h-3 bg-[#0A1A3A] rounded-full animate-pulse"></div>
                <div className="absolute top-[55%] left-[30%] w-2 h-2 bg-[#0A1A3A] rounded-full opacity-50"></div>
                <div className="absolute top-[45%] left-[75%] w-2 h-2 bg-[#0A1A3A] rounded-full opacity-50"></div>
              </div>
              <p className="text-[10px] text-slate-400 mt-4 font-bold text-center uppercase tracking-widest">Principales: Espana, Argentina, Mexico</p>
            </div>
          </div>
        </div>

        {/* Bottom Tables */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(10,26,58,0.03)] overflow-hidden">
            <div className="p-6 flex justify-between items-center border-b border-slate-50">
              <h3 className="text-xl font-bold text-[#0A1A3A]" style={{ fontFamily: "'Noto Serif'" }}>Actividad Reciente</h3>
              <button className="text-xs font-bold text-[#0A1A3A] hover:underline">Ver todo</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wider font-bold text-slate-500">
                  <tr><th className="px-6 py-4">Usuario</th><th className="px-6 py-4">Accion</th><th className="px-6 py-4">Estado</th><th className="px-6 py-4 text-right">Fecha</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-sm">
                  {recentActivity.map((a, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#0A1A3A]">{a.user}</td>
                      <td className="px-6 py-4 text-slate-600">{a.action}</td>
                      <td className="px-6 py-4"><span className={`${a.statusBg} px-2 py-0.5 rounded-full text-[10px] font-bold`}>{a.status}</span></td>
                      <td className="px-6 py-4 text-right text-slate-400 text-xs">{a.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Meetings */}
          <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(10,26,58,0.03)] overflow-hidden">
            <div className="p-6 flex justify-between items-center border-b border-slate-50">
              <h3 className="text-xl font-bold text-[#0A1A3A]" style={{ fontFamily: "'Noto Serif'" }}>Proximas Reuniones</h3>
              <button className="bg-[#0A1A3A] text-white text-[10px] uppercase font-bold px-4 py-2 rounded shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                <Icon name="add" className="text-sm" /> Agendar
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase tracking-wider font-bold text-slate-500">
                  <tr><th className="px-6 py-4">Fecha / Hora</th><th className="px-6 py-4">Jugador</th><th className="px-6 py-4">Tipo</th><th className="px-6 py-4 text-right">Accion</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-sm">
                  {meetings.map((m, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-[#0A1A3A]">{m.date}</td>
                      <td className="px-6 py-4">{m.player}</td>
                      <td className="px-6 py-4 text-slate-500">{m.type}</td>
                      <td className="px-6 py-4 text-right">
                        {m.hasLink ? <a className="text-[#2B4C8C] font-bold text-xs hover:underline" href="/servicios-para-jugadores">Enlace</a> : <span className="text-slate-300 text-xs italic">Pendiente</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  )
}
