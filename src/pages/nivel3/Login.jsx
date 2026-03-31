import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../../core/contexts/AuthContext'
import Logo from '../../components/Logo'
import Icon from '../../components/Icon'

export default function Login() {
  const { isAuthenticated, user, checkEmail, login } = useAuth()
  const [step, setStep] = useState('email') // 'email' | 'password'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Redirect if already logged in
  if (isAuthenticated && user) {
    return <Navigate to={user.role === 'admin' ? '/admin/dashboard' : '/jugador-dashboard'} replace />
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!email.trim()) return setError('Ingresa tu email')
    setLoading(true)
    setTimeout(() => {
      if (checkEmail(email)) {
        setStep('password')
      } else {
        setError('No encontramos una cuenta con ese email')
      }
      setLoading(false)
    }, 400)
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!password) return setError('Ingresa tu contraseña')
    setLoading(true)
    setTimeout(() => {
      const result = login(email, password)
      if (result.error) {
        setError(result.error)
        setLoading(false)
      }
      // If success, the Navigate redirect above handles it on re-render
    }, 500)
  }

  const demoAccounts = [
    { label: 'Admin (Marcos)', email: 'marcos@mlscouting.com', password: 'admin123' },
    { label: 'Jugador (Santiago)', email: 'santiago.rivera@gmail.com', password: 'jugador123' },
  ]

  return (
    <div className="min-h-screen flex">
      {/* Left panel - info */}
      <div className="hidden lg:flex lg:w-[45%] bg-[#0A1A3A] text-white flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)`
        }} />
        {/* Gradient accents */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#006970]/[0.08] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#445d94]/[0.06] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-md">
          <Link to="/" className="inline-block mb-10">
            <Logo size={140} />
          </Link>
          <h1 className="text-4xl font-bold leading-tight mb-4" style={{ fontFamily: "'Noto Serif'" }}>
            Tu carrera futbolistica,<br />
            <span className="text-[#7bf1fc]">en tus manos.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            Accede a tu perfil, servicios de scouting y seguimiento de rendimiento en un solo lugar.
          </p>

          <div className="space-y-4 text-left">
            {[
              { icon: 'analytics', title: 'Diagnostico Deportivo', desc: 'Evalua tu rendimiento con metricas profesionales' },
              { icon: 'description', title: 'Informes Personalizados', desc: 'Recibe analisis detallados de tu perfil' },
              { icon: 'school', title: 'Cursos de Scouting', desc: 'Aprende como posicionarte en el mercado' },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[#006970]/30 flex items-center justify-center flex-shrink-0">
                  <Icon name={f.icon} className="text-[#7bf1fc] text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{f.title}</h3>
                  <p className="text-slate-400 text-xs mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="absolute bottom-6 text-slate-600 text-xs">&copy; {new Date().getFullYear()} ML Scouting. Todos los derechos reservados.</p>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[#f7f9fc]">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <Link to="/"><Logo size={70} /></Link>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h2 className="text-2xl font-bold text-[#0A1A3A] mb-1" style={{ fontFamily: "'Noto Serif'" }}>
              {step === 'email' ? 'Ingresar' : 'Bienvenido'}
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              {step === 'email'
                ? 'Ingresa tu email para continuar'
                : <span className="flex items-center gap-2">{email} <button onClick={() => { setStep('email'); setPassword(''); setError('') }} className="text-[#006970] hover:underline text-xs font-medium">Cambiar</button></span>
              }
            </p>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-100 text-red-700 text-sm flex items-center gap-2">
                <Icon name="error" className="text-red-500 text-lg" />
                {error}
              </div>
            )}

            {step === 'email' ? (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Email</label>
                  <div className="relative">
                    <Icon name="mail" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 bg-[#f7f9fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#006970]/30 focus:border-[#006970] transition-all"
                      autoFocus
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-[#0A1A3A] text-white font-semibold text-sm hover:bg-[#0f2a43] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Continuar <Icon name="arrow_forward" className="text-lg" /></>}
                </button>
              </form>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Contraseña</label>
                  <div className="relative">
                    <Icon name="lock" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Tu contraseña"
                      className="w-full pl-10 pr-12 py-3 rounded-lg border border-slate-200 bg-[#f7f9fc] text-sm focus:outline-none focus:ring-2 focus:ring-[#006970]/30 focus:border-[#006970] transition-all"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <Icon name={showPassword ? 'visibility_off' : 'visibility'} className="text-lg" />
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-[#0A1A3A] text-white font-semibold text-sm hover:bg-[#0f2a43] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Ingresar'}
                </button>
              </form>
            )}

            <div className="mt-6 pt-5 border-t border-slate-100">
              <p className="text-xs text-slate-400 text-center mb-3">Cuentas demo</p>
              <div className="grid grid-cols-2 gap-2">
                {demoAccounts.map((acc) => (
                  <button
                    key={acc.email}
                    onClick={() => { setEmail(acc.email); setPassword(acc.password); setStep('password'); setError('') }}
                    className="p-2.5 rounded-lg border border-slate-200 hover:border-[#006970]/40 hover:bg-[#006970]/5 transition-all text-left"
                  >
                    <p className="text-xs font-semibold text-[#0A1A3A]">{acc.label}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 truncate">{acc.email}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-6">
            ¿No tenes cuenta? <Link to="/registro" className="text-[#006970] font-semibold hover:underline">Registrate</Link>
          </p>
          <div className="flex justify-center gap-3 mt-3 text-[10px] text-slate-400">
            <Link to="/legal?tab=privacidad" className="hover:text-slate-600 transition">Politica de Privacidad</Link>
            <span>·</span>
            <Link to="/legal?tab=terminos" className="hover:text-slate-600 transition">Terminos de Uso</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
