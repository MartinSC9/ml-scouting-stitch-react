const base = import.meta.env.BASE_URL

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f9fc] text-[#0a1a3a] px-4" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <div className="max-w-[400px] w-full py-12 text-center">
        <h1 className="text-[2rem] mb-2 italic" style={{ fontFamily: 'Georgia, serif' }}>ML Scouting</h1>
        <p className="text-[#666] mb-10">Prototipos de interfaz para la propuesta de desarrollo</p>

        <div className="flex flex-col gap-4">
          <a href={`${base}`} target="_blank" rel="noopener noreferrer" className="block bg-[#0a1a3a] text-white px-8 py-5 rounded-xl font-semibold text-lg no-underline hover:bg-[#0a1a3a]/90 transition-colors shadow-lg">
            Nivel 3 — Premium
          </a>
        </div>
      </div>
    </div>
  )
}
