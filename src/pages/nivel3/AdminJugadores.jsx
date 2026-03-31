import { Link } from 'react-router-dom'
import AdminLayout from '../../components/AdminLayout'
import Icon from '../../components/Icon'

export default function AdminJugadores() {
  const players = [
    { name: 'Mateo Lopez', age: 22, pos: 'MC', club: 'Independiente', level: 'Elite', levelBg: 'bg-[#0A1A3A] text-white', country: 'Argentina', service: 'Plan Mercado', serviceBg: 'bg-blue-50 text-blue-700' },
    { name: 'Lucas Martinez', age: 24, pos: 'MC', club: 'Racing Club', level: 'Elite', levelBg: 'bg-[#0A1A3A] text-white', country: 'Argentina', service: 'Representacion', serviceBg: 'bg-green-50 text-green-700' },
    { name: 'Santiago Ruiz', age: 20, pos: 'DEL', club: 'Atletico Nacional', level: 'Avanzado', levelBg: 'bg-[#a7c0fd] text-[#0A1A3A]', country: 'Colombia', service: 'Informe', serviceBg: 'bg-purple-50 text-purple-700' },
    { name: 'Federico Gomez', age: 23, pos: 'DEF', club: 'Penarol', level: 'Elite', levelBg: 'bg-[#0A1A3A] text-white', country: 'Uruguay', service: 'Representacion', serviceBg: 'bg-green-50 text-green-700' },
    { name: 'Diego Fernandez', age: 21, pos: 'MD', club: 'Velez', level: 'Intermedio', levelBg: 'bg-slate-100 text-slate-600', country: 'Argentina', service: 'Informe', serviceBg: 'bg-purple-50 text-purple-700' },
    { name: 'Andres Ramirez', age: 25, pos: 'DEL', club: 'Millonarios', level: 'Avanzado', levelBg: 'bg-[#a7c0fd] text-[#0A1A3A]', country: 'Colombia', service: 'Plan Mercado', serviceBg: 'bg-blue-50 text-blue-700' },
    { name: 'Pablo Torres', age: 19, pos: 'LI', club: 'Santos Laguna', level: 'Intermedio', levelBg: 'bg-slate-100 text-slate-600', country: 'Mexico', service: 'Curso', serviceBg: 'bg-yellow-50 text-yellow-700' },
    { name: 'Gabriel Santos', age: 22, pos: 'POR', club: 'Flamengo', level: 'Avanzado', levelBg: 'bg-[#a7c0fd] text-[#0A1A3A]', country: 'Brasil', service: 'Informe', serviceBg: 'bg-purple-50 text-purple-700' },
  ]

  const headerActions = (
    <>
      <span className="text-sm font-semibold text-[#0A1A3A]">Hola, Marco</span>
      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
        <Icon name="person" className="text-slate-400" />
      </div>
    </>
  )

  return (
    <AdminLayout activeItem="jugadores" title="Jugadores" subtitle="247 jugadores registrados" level={3} headerActions={headerActions}>
      <section className="p-8">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex bg-slate-100 rounded-lg p-0.5">
              <button className="px-3 py-1.5 rounded-md text-xs text-slate-500"><Icon name="grid_view" className="text-sm" /></button>
              <button className="px-3 py-1.5 rounded-md bg-white shadow-sm text-xs text-[#0A1A3A] font-medium"><Icon name="view_list" className="text-sm" /></button>
            </div>
            <div className="relative">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
              <input type="text" placeholder="Buscar jugador..." className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-64" />
            </div>
            {['Posicion','Nivel','Nacionalidad','Estado servicio'].map(f => (
              <select key={f} className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600"><option>{f}</option></select>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">Comparar</button>
            <button className="border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">Exportar CSV</button>
            <button className="border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">Exportar Excel</button>
            <button className="bg-[#0A1A3A] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1"><Icon name="add" className="text-lg" />Agregar Jugador</button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-3 w-10"><input type="checkbox" className="rounded border-slate-300" /></th>
                {['Nombre','Edad','Posicion','Club','Nivel','Pais','Servicios','Acciones'].map(h => (
                  <th key={h} className="text-left p-3 text-xs font-semibold text-slate-500 uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {players.map((p, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="p-3"><input type="checkbox" className="rounded border-slate-300" /></td>
                  <td className="p-3">
                    <Link to="/admin/jugador-detalle" className="flex items-center gap-2 text-[#0A1A3A] font-medium hover:underline">
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center shrink-0"><Icon name="person" className="text-slate-400 text-sm" /></div>
                      {p.name}
                    </Link>
                  </td>
                  <td className="p-3 text-slate-600">{p.age}</td>
                  <td className="p-3 text-slate-600">{p.pos}</td>
                  <td className="p-3 text-slate-600">{p.club}</td>
                  <td className="p-3"><span className={`text-xs ${p.levelBg} px-2 py-0.5 rounded-full`}>{p.level}</span></td>
                  <td className="p-3 text-slate-600">{p.country}</td>
                  <td className="p-3"><span className={`text-xs ${p.serviceBg} px-2 py-0.5 rounded-full`}>{p.service}</span></td>
                  <td className="p-3">
                    <div className="flex gap-1">
                      <button className="p-1 text-slate-400 hover:text-[#0A1A3A]"><Icon name="visibility" className="text-lg" /></button>
                      <button className="p-1 text-slate-400 hover:text-[#0A1A3A]"><Icon name="edit" className="text-lg" /></button>
                      <button className="p-1 text-slate-400 hover:text-red-500"><Icon name="delete" className="text-lg" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-xs text-slate-500">Mostrando 1-8 de 247 jugadores</p>
          <div className="flex gap-1">
            <button className="w-8 h-8 bg-[#0A1A3A] text-white rounded-lg text-xs font-semibold">1</button>
            <button className="w-8 h-8 bg-white text-slate-600 rounded-lg text-xs border border-slate-200">2</button>
            <button className="w-8 h-8 bg-white text-slate-600 rounded-lg text-xs border border-slate-200">3</button>
            <span className="w-8 h-8 flex items-center justify-center text-slate-400 text-xs">...</span>
            <button className="w-8 h-8 bg-white text-slate-600 rounded-lg text-xs border border-slate-200">31</button>
          </div>
        </div>
      </section>
    </AdminLayout>
  )
}
