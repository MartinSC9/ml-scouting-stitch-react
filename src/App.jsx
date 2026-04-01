import { Routes, Route, Navigate, useLocation, useNavigationType } from 'react-router-dom'
import { useEffect } from 'react'
import ScrollToTopButton from './components/ScrollToTopButton'
import { AuthProvider } from './core/contexts/AuthContext'

// Nivel 3 pages
import N3Home from './pages/nivel3/Home'
import N3Login from './pages/nivel3/Login'
import N3Servicios from './pages/nivel3/Servicios'
import N3Diagnostico from './pages/nivel3/Diagnostico'
import N3Curso from './pages/nivel3/Curso'
import N3Blog from './pages/nivel3/Blog'
import N3BlogArticulo from './pages/nivel3/BlogArticulo'
import N3Legal from './pages/nivel3/Legal'
import N3Opiniones from './pages/nivel3/Opiniones'
import N3JugadorDashboard from './pages/nivel3/JugadorDashboard'
import N3JugadorPerfil from './pages/nivel3/JugadorPerfil'
import N3JugadorCursos from './pages/nivel3/JugadorCursos'
import N3JugadorClase from './pages/nivel3/JugadorClase'
import N3JugadorReferidos from './pages/nivel3/JugadorReferidos'
import N3AdminDashboard from './pages/nivel3/AdminDashboard'
import N3AdminJugadores from './pages/nivel3/AdminJugadores'
import N3AdminJugadorDetalle from './pages/nivel3/AdminJugadorDetalle'
import N3AdminCrm from './pages/nivel3/AdminCrm'
import N3AdminCursos from './pages/nivel3/AdminCursos'
import N3AdminBlog from './pages/nivel3/AdminBlog'
import N3AdminFinanzas from './pages/nivel3/AdminFinanzas'
import N3AdminReferidos from './pages/nivel3/AdminReferidos'
import N3AdminAnalytics from './pages/nivel3/AdminAnalytics'
import N3AdminConfiguracion from './pages/nivel3/AdminConfiguracion'
import N3AdminServicios from './pages/nivel3/AdminServicios'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const navType = useNavigationType()
  useEffect(() => {
    if (navType === 'POP') return // back/forward: let browser restore scroll
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''))
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash, navType])
  return null
}

export default function App() {
  return (
    <AuthProvider>
    <ScrollToTop />
    <ScrollToTopButton />
    <Routes>
      <Route path="/" element={<N3Home />} />
      <Route path="/login" element={<N3Login />} />
      <Route path="/servicios-para-jugadores" element={<N3Servicios />} />
      <Route path="/diagnostico" element={<N3Diagnostico />} />
      <Route path="/curso" element={<N3Curso />} />
      <Route path="/blog" element={<N3Blog />} />
      <Route path="/blog-articulo" element={<N3BlogArticulo />} />
      <Route path="/contacto" element={<Navigate to="/#contacto" replace />} />
      <Route path="/legal" element={<N3Legal />} />
      <Route path="/opiniones" element={<N3Opiniones />} />
      <Route path="/jugador-dashboard" element={<N3JugadorDashboard />} />
      <Route path="/jugador-perfil" element={<N3JugadorPerfil />} />
      <Route path="/jugador-cursos" element={<N3JugadorCursos />} />
      <Route path="/jugador-clase" element={<N3JugadorClase />} />
      <Route path="/jugador-referidos" element={<N3JugadorReferidos />} />
      <Route path="/admin/dashboard" element={<N3AdminDashboard />} />
      <Route path="/admin/jugadores" element={<N3AdminJugadores />} />
      <Route path="/admin/jugador-detalle" element={<N3AdminJugadorDetalle />} />
      <Route path="/admin/crm" element={<N3AdminCrm />} />
      <Route path="/admin/servicios" element={<N3AdminServicios />} />
      <Route path="/admin/cursos" element={<N3AdminCursos />} />
      <Route path="/admin/blog" element={<N3AdminBlog />} />
      <Route path="/admin/finanzas" element={<N3AdminFinanzas />} />
      <Route path="/admin/referidos" element={<N3AdminReferidos />} />
      <Route path="/admin/analytics" element={<N3AdminAnalytics />} />
      <Route path="/admin/configuracion" element={<N3AdminConfiguracion />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </AuthProvider>
  )
}
