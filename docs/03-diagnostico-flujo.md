# Diagnostico Interactivo - Flujo y Logica

## Objetivo
Reemplazar el formulario de Tally (https://tally.so/r/q4Bprd) con un diagnostico interactivo integrado en la landing, que recomiende el servicio ideal segun el perfil del jugador.

---

## Preguntas (basadas en el Tally actual)

### Pregunta 1: Edad
- Menos de 18 anos
- 18 a 21 anos
- 22 a 25 anos
- Mas de 25 anos

### Pregunta 2: Posicion
- Arquero
- Defensor
- Lateral
- Mediocampista
- Extremo
- Delantero

### Pregunta 3: Video highlights
- Si, tengo un video de highlights armado
- Tengo material pero no se si esta bien
- No tengo video de highlights

### Pregunta 4: Nivel competitivo actual
- Profesional
- Semi-profesional
- Semi-amateur
- Amateur

### Pregunta 5: Partidos completos grabados
- Si, tengo partidos completos grabados
- No tengo partidos completos

### Pregunta 6: Principal desafio
- No se como presentar mi perfil a los clubes
- No se a que nivel de liga puedo apuntar
- Envio mi perfil pero no recibo respuestas
- No tengo contactos ni se a donde enviar mi material

---

## Logica de Recomendacion

| Perfil | Servicio recomendado | Precio |
|---|---|---|
| No tiene video / no sabe si esta bien | Asesoria para Perfil y Video | €35 |
| Tiene video, nivel amateur/semi-amateur, quiere orientacion | Diagnostico con Scout 1a1 | €100 |
| Tiene video, busca posicionarse en ligas, quiere estrategia | Plan de Mercado Personalizado | €200 |
| Tiene todo, nivel alto, quiere ofrecimiento activo a clubes | Evaluacion Individual | €600 |

### Reglas simplificadas:
1. Si **no tiene video** → Asesoria para Perfil y Video (€35)
2. Si **tiene video** pero **no sabe a que nivel apuntar** → Diagnostico 1a1 (€100)
3. Si **tiene video** y **busca posicionarse/no recibe respuestas** → Plan de Mercado (€200)
4. Si **tiene video + partidos completos** y **nivel semi-pro/pro** → Evaluacion Individual (€600)

---

## Pantalla de Resultado

Despues de responder las 6 preguntas, se muestra:

```
Basado en tu perfil, te recomendamos:

[SERVICIO RECOMENDADO]
€ precio

[Descripcion del servicio]
[Lista de que incluye]

[CTA: Contratar este servicio]  →  link a Gumroad
[CTA secundario: Quiero hablar con un scout]  →  link a Calendly/WhatsApp
```

---

## Ventajas vs. Tally actual
- **UX integrada:** el usuario no sale de la web
- **Marca:** diseño consistente con el resto del sitio
- **Captura de leads:** se pueden guardar las respuestas para seguimiento
- **CTA directo:** el resultado lleva directamente al pago, no a Instagram
