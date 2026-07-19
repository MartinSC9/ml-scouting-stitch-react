# ML Scouting - Análisis y Propuesta

## Cliente
**Joaquín Urtasun** - Representa a ML Scouting Academy (Marco Lujan, Football Scout)
- Web actual: https://ml-scouting.com/
- Gumroad: https://mlscouting.gumroad.com/
- Test diagnóstico en Tally: https://tally.so/r/q4Bprd

---

## Qué tiene hoy (Estado actual)

### Landing page (ml-scouting.com)
- Página estática con info de servicios
- Secciones: Inicio, Servicios, Contacto, Curso Scouting, Análisis de rendimiento
- Formulario de contacto básico
- FAQ del curso
- Sin integración de pagos
- Sin sistema de leads automatizado

### Herramientas dispersas en 3 plataformas distintas
1. **Gumroad** - Venta de servicios (ej: Plan de Mercado Personalizado €200)
2. **Tally** - Test diagnóstico para futbolistas (determina qué servicio necesitan)
3. **Google Forms** - Lista de espera para el curso de septiembre (captura leads)

### Servicios actuales para jugadores (en Gumroad, NO integrados a la landing)
1. **Plan de Mercado Personalizado (€200)** - Incluye:
   - Análisis personalizado del material del futbolista
   - Informe profesional de scouting
   - Video de análisis técnico
   - Guía de ligas/equipos donde encaja
   - Contactos de clubes
   - Sesión 1 a 1
   - Optimización del perfil
   - Asesoría administrativa (pasaporte, visados)
2. **Análisis de Rendimiento Detallado** - Informe post-partido con estadísticas, videos y recomendaciones
3. **Asesoría para Clubes** - Identificación y recomendación de jugadores

### Curso de Scouting
- Próxima edición: **septiembre 2026**
- Lista de espera abierta (Google Forms → doc de leads)

---

## Qué quiere el cliente

### Pedido directo de Joaquín:
1. **Unificar todo en la landing** - Que los 3 servicios de Gumroad estén integrados, no separados
2. **Estructura clara** - Fácil de encontrar cada servicio, fácil de contactar y pagar
3. **Test diagnóstico integrado** - Que el test de Tally esté dentro de la web
4. **Lista de espera del curso** - Integrada en la web (no un Google Forms externo)
5. **Quiere ver propuestas con precios** para presentar en reunión

### Pedido ampliado (ideas de M~):
1. **Ahorrarle tiempo** - Unificar las 3 herramientas (Gumroad + Tally + Forms) en una sola plataforma
2. **Panel administrador** con:
   - Dashboard con métricas (jugadores registrados, por categoría, etc.)
   - Base de datos de jugadores (agregar manual + auto-registro)
   - Fichas tipo FIFA con estadísticas por jugador
   - Filtros y búsqueda de jugadores
   - 3 categorías de jugadores
3. **Vista cliente/jugador** - Portal donde el jugador ve su perfil y servicios
4. **Venta de cursos** integrada

---

## Qué le podemos ofrecer (Propuesta por niveles)

### Nivel 1 - Rediseño Landing + Integraciones (básico)
**Alcance:**
- Rediseño completo de la landing (mejor estructura, UX moderna)
- Integración del test diagnóstico (reemplaza Tally)
- Formulario de lista de espera del curso integrado (reemplaza Google Forms)
- Integración de pagos (Stripe/MercadoPago) para los 3 servicios (reemplaza Gumroad)
- SEO básico
- Responsive mobile-first
- Panel admin simple para ver leads y ventas

**Stack sugerido:** React + Vite (front) + Express/Fastify (back) + PostgreSQL
**Precio estimado:** USD 800 - 1.200

---

### Nivel 2 - Plataforma Web completa (recomendado)
**Todo lo del Nivel 1, más:**
- **Panel Admin completo:**
  - Dashboard con métricas (jugadores registrados, ventas, leads del curso)
  - CRUD de jugadores con ficha detallada (estilo FIFA: stats, posición, edad, nivel, etc.)
  - Filtros avanzados (posición, edad, nivel, liga, nacionalidad)
  - Gestión de servicios contratados por jugador
  - Exportar datos (CSV/PDF)
  - Gestión de lista de espera del curso
- **Portal Jugador:**
  - Registro y login
  - Perfil con datos deportivos
  - Test diagnóstico integrado (resultado guardado)
  - Ver servicios disponibles y contratar
  - Ver informes/análisis recibidos
  - Historial de pagos
- **Sistema de pagos integrado** (Stripe)
- **Emails automáticos** (confirmación de compra, bienvenida, recordatorios)

**Stack sugerido:** React + Vite (front) + Fastify (back) + PostgreSQL + Stripe + Resend (emails)
**Precio estimado:** USD 2.000 - 3.500

---

### Nivel 3 - Plataforma completa + Cursos Online (premium)
**Todo lo del Nivel 2, más:**
- **Plataforma de cursos:**
  - Módulos con contenido (video, texto, recursos)
  - Progreso del alumno
  - Certificados automáticos
  - Foro/comunidad entre alumnos
  - Clases en vivo (integración con Zoom/Meet)
- **CRM básico:**
  - Pipeline de leads (desde test diagnóstico → contacto → venta)
  - Notas por jugador/lead
  - Seguimiento de comunicaciones
- **Analytics avanzados:**
  - Funnel de conversión
  - Métricas de engagement
  - Reportes automáticos
- **App móvil** (React Native/Expo) para jugadores

**Precio estimado:** USD 5.000 - 8.000

---

## Ideas extras para agregar valor

1. **Comparador de jugadores** - Comparar stats de 2+ jugadores lado a lado (como en FIFA)
2. **Generación automática de informes PDF** - Plantilla profesional con logo ML Scouting
3. **Video highlights integrados** - Que el jugador suba clips y se arme un reel automático
4. **Widget de testimonios** - Carrusel dinámico gestionable desde el admin
5. **Blog/Noticias** - Contenido SEO sobre scouting, mercado de pases, etc.
6. **Notificaciones push** - Avisar al jugador cuando tiene un nuevo informe
7. **Multi-idioma** (ES/EN/PT) - Para expandir a Brasil y mercado anglosajón
8. **Landing pages por servicio** - URLs individuales para campañas de marketing
9. **Integración WhatsApp Business** - Botón directo + mensajes automáticos post-compra
10. **Programa de referidos** - Jugadores recomiendan a otros jugadores con descuento

---

## Resumen para la reunión

| Nivel | Qué incluye | Precio estimado |
|-------|-------------|-----------------|
| 1 - Landing | Rediseño + pagos + forms integrados | USD 800 - 1.200 |
| 2 - Plataforma | + Panel admin + Portal jugador + DB | USD 2.000 - 3.500 |
| 3 - Premium | + Cursos online + CRM + Analytics | USD 5.000 - 8.000 |

**Recomendación:** Arrancar con Nivel 2, que resuelve todo lo que pide el cliente y deja base para escalar. El Nivel 3 se puede agregar en una segunda fase.

**Tiempo estimado Nivel 2:** 4-6 semanas
