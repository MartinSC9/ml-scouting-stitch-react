# Arquitectura del Sitio - ML Scouting Academy

## Mapa del Sitio

```
ML Scouting Academy
│
├── / Home
│   ├── Hero (video + CTA por perfil: Jugador / Club / Scout)
│   ├── Sobre el Fundador (Marco Lujan)
│   ├── Servicios (resumen de las 3 areas)
│   ├── Diagnostico Gratuito (CTA)
│   ├── Testimonios reales
│   ├── Curso de Scouting (preview + lista de espera)
│   ├── Blog (ultimos articulos)
│   └── Footer
│
├── /servicios
│   ├── Hero
│   ├── 4 Cards de servicios con precios
│   │   ├── Diagnostico con Scout 1a1 — €100
│   │   ├── Plan de Mercado Personalizado — €200 (destacado)
│   │   ├── Evaluacion Individual — €600
│   │   └── Asesoria para Perfil y Video — €35
│   ├── Seccion destacada: Plan de Mercado
│   ├── Como Funciona (4 pasos)
│   ├── Tabla comparativa de servicios
│   └── CTA → Diagnostico
│
├── /diagnostico
│   ├── Formulario interactivo (6 preguntas)
│   │   1. Edad
│   │   2. Posicion
│   │   3. Video highlights (tiene / no tiene / no sabe)
│   │   4. Nivel competitivo
│   │   5. Partidos completos grabados
│   │   6. Principal desafio en su carrera
│   ├── Resultado con servicio recomendado
│   └── CTA → Contratar servicio recomendado
│
├── /curso
│   ├── Info del curso de Scouting
│   ├── Fase 1 (€690) y Fase 2 (€500)
│   ├── Contenido / Modulos
│   ├── Testimonios del curso
│   ├── Formulario de lista de espera (Sept 2026)
│   └── FAQ
│
├── /blog
│   ├── Lista de articulos
│   └── /blog/:slug (articulo individual)
│
└── /contacto
    ├── Formulario de contacto
    ├── Info de contacto
    └── Redes sociales
```

---

## Navegacion Principal

```
[Logo ML Scouting]   Inicio | Servicios (dropdown) | Blog | Contacto   [IG] [WA]
                                |
                                ├── Informe Tecnico
                                ├── Diagnostico Gratuito
                                └── Curso Scouting
```

---

## Integraciones Externas (actuales)

| Funcionalidad | Integracion | Notas |
|---|---|---|
| Pago de servicios | Gumroad (links externos) | Futuro: pasarela propia |
| Agendar reunion | Calendly (link externo) | Para Evaluacion Individual |
| Resenas del curso | TiendUp (link externo) | marcolujan.tiendup.com/opiniones |
| Redes sociales | Instagram, WhatsApp, YouTube, LinkedIn | Links en navbar y footer |

---

## Stack Tecnico

| Tecnologia | Uso |
|---|---|
| React 18 | Framework frontend |
| Vite | Build tool |
| Tailwind CSS | Estilos |
| React Router | Navegacion SPA |
| GitHub Pages | Hosting actual (prototipo) |

---

## Responsive Design

- **Desktop:** Layout completo con grid de servicios, navbar expandida
- **Tablet:** Grid adaptado a 2 columnas, menu hamburguesa
- **Mobile:** Stack vertical, menu hamburguesa, CTAs full-width
