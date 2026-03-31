import { useEffect, useState, useCallback, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import { images } from '../../assets/images'

const steps = [
  {
    title: 'Que edad tienes actualmente?',
    type: 'options',
    options: [
      { icon: 'child_care', label: 'Menos de 18' },
      { icon: 'person', label: '18 - 21' },
      { icon: 'sports_soccer', label: '22 - 25' },
      { icon: 'elderly', label: 'Mas de 25' },
    ],
  },
  {
    title: 'Cual es tu posicion en el campo?',
    type: 'select',
    options: [
      { label: 'Portero' },
      { label: 'Defensor central' },
      { label: 'Lateral' },
      { label: 'Mediocampista' },
      { label: 'Extremo' },
      { label: 'Delantero' },
    ],
  },
  {
    title: 'Tienes video de highlights?',
    type: 'options',
    options: [
      { icon: 'videocam', label: 'Si, tengo highlights' },
      { icon: 'help_outline', label: 'Si, pero no estoy seguro de que esten bien estructurados' },
      { icon: 'videocam_off', label: 'No tengo video de highlights' },
    ],
  },
  {
    title: 'En que nivel juegas actualmente?',
    type: 'options',
    options: [
      { icon: 'emoji_events', label: 'Profesional' },
      { icon: 'military_tech', label: 'Semi profesional' },
      { icon: 'sports', label: 'Semi amateur' },
      { icon: 'fitness_center', label: 'Amateur' },
    ],
  },
  {
    title: 'Tienes partidos completos grabados?',
    type: 'options',
    options: [
      { icon: 'video_library', label: 'Si, tengo partidos completos' },
      { icon: 'videocam_off', label: 'No' },
    ],
  },
  {
    title: 'Cual es tu mayor dificultad actualmente como futbolista?',
    type: 'options',
    options: [
      { icon: 'description', label: 'No se como presentar mi perfil a clubes' },
      { icon: 'help_outline', label: 'No tengo claro para que ligas o nivel tengo nivel' },
      { icon: 'mail', label: 'Ya he enviado mi material pero no recibo respuestas' },
      { icon: 'contacts', label: 'No tengo contactos ni se a donde enviar mi perfil' },
    ],
  },
]

const resultCards = [
  {
    recommended: true,
    title: 'EVALUACION INDIVIDUAL ORIENTADA AL SALTO DE NIVEL (€600)',
    description: 'Es la opcion mas completa para tu caso si realmente quieres dar un salto de nivel.\n\nSe trabaja con partidos completos tuyos, analisis profesional con ejemplos de video en reunion 1a1 con nuestro equipo y un informe similar al que reciben los analistas de clubes de jugadores que observan.\n\nAdemas, se define una estrategia clara, entendiendo en que ligas encajas y se te posiciona en el mercado desde ahora hasta septiembre, realizando nosotros la oferta de tu informe y material a los clubes.',
    links: [
      { label: 'Mira el documento completo', url: 'https://drive.google.com/file/d/1atM_Ja-DDgvLJwDjymI8LrGMOHNtzeeX/view?usp=sharing' },
      { label: 'Agendar reunion para informacion', url: 'https://calendly.com/lujanmarco15/30min' },
    ],
  },
  {
    recommended: false,
    title: 'PLAN DE MERCADO PERSONALIZADO (€200)',
    description: 'Aqui analizamos tu perfil y tu material, y definimos a que ligas o equipos puedes apuntar y como es tu nivel actual, con devolucion y analisis en reunion 1 a 1 tambien.\n\nTe entregamos tu informe, video, la estrategia y los contactos, pero el envio y movimiento en el mercado lo haces tu. En este servicio no incluimos tu ofrecimiento en nuestra red.',
    links: [
      { label: 'Detalle del servicio / Adquirir', url: 'https://mlscouting.gumroad.com/l/plandemercadopersonalizado' },
    ],
  },
  {
    recommended: false,
    title: 'DIAGNOSTICO con Scout Profesional 1 A 1 (€100)',
    description: 'Disenado para entender tu situacion actual de juego, que cuestiones mejorar y donde estas parado hoy futbolisticamente y que te falta para un proximo paso. Sin informe ni ofrecimiento, este servicio esta pensado para los jugadores que quieren una opinion profesional de ellos como jugador y entender como los ven dts, analistas, etc.',
    links: [
      { label: 'Detalle del servicio / Adquirir', url: 'https://mlscouting.gumroad.com/l/diagosticodeperfilconscoutprofesional' },
    ],
  },
  {
    recommended: false,
    title: 'ASESORIA PARA PERFIL Y VIDEO (€35)',
    description: 'Si todavia no tienes bien estructurado tu perfil o tu material, este servicio te ayuda a entender como armar tu video, presentarte y enviar tu perfil correctamente a clubes.',
    links: [
      { label: 'Detalle del servicio / Adquirir', url: 'https://mlscouting.gumroad.com/l/mcgcsu' },
    ],
  },
]

export default function Diagnostico() {
  const [started, setStarted] = useState(false)
  const quizRef = useRef(null)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [mounted, setMounted] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [textInput, setTextInput] = useState('')
  const totalSteps = steps.length

  useEffect(() => { setMounted(true) }, [])

  const progress = showResult ? 100 : ((step + 1) / totalSteps) * 100

  const currentStep = steps[step]
  const isTextStep = currentStep?.type === 'text'
  const isSelectStep = currentStep?.type === 'select'

  const hasAnswer = isTextStep ? textInput.trim() !== '' : answers[step] != null

  const goNext = useCallback(() => {
    if (isTextStep) {
      if (textInput.trim() === '') return
      setAnswers(prev => ({ ...prev, [step]: textInput.trim() }))
    } else {
      if (answers[step] == null) return
    }
    setAnimating(true)
    setTimeout(() => {
      if (step < totalSteps - 1) {
        setStep(s => s + 1)
      } else {
        setShowResult(true)
      }
      setAnimating(false)
    }, 300)
  }, [step, answers, totalSteps, isTextStep, textInput])

  const goBack = useCallback(() => {
    if (showResult) {
      setShowResult(false)
      setAnimating(false)
      return
    }
    if (step === 0) return
    setAnimating(true)
    setTimeout(() => {
      setStep(s => s - 1)
      setAnimating(false)
    }, 300)
  }, [step, showResult])

  // Auto-advance after option selection
  const handleSelect = useCallback((optIndex) => {
    setAnswers(prev => ({ ...prev, [step]: optIndex }))
    setTimeout(() => {
      setAnimating(true)
      setTimeout(() => {
        if (step < totalSteps - 1) {
          setStep(s => s + 1)
        } else {
          setShowResult(true)
        }
        setAnimating(false)
      }, 300)
    }, 400)
  }, [step, totalSteps])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      // Don't capture Backspace when typing in text input
      if (isTextStep && e.target.tagName === 'INPUT') {
        if (e.key === 'Enter') goNext()
        return
      }
      if (e.key === 'Enter') goNext()
      if (e.key === 'Backspace' || e.key === 'Escape') goBack()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goBack, isTextStep])

  // Restore text input when navigating back to step 1
  useEffect(() => {
    if (isTextStep && typeof answers[step] === 'string') {
      setTextInput(answers[step])
    } else if (isTextStep) {
      setTextInput('')
    }
  }, [step, isTextStep, answers])

  return (
    <div className="bg-[#f7f9fc] text-[#191c1e]">
      <style>{`
        .dx3-step-enter {
          opacity: 0;
          transform: translateY(20px);
          animation: dx3-slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes dx3-slideUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .dx3-progress-track {
          position: relative;
          overflow: hidden;
        }
        .dx3-progress-bar {
          background: linear-gradient(90deg, #445d94, #a7c0fd, #445d94);
          background-size: 200% 100%;
          animation: dx3-progressShine 3s ease-in-out infinite;
          box-shadow: 0 0 12px rgba(68, 93, 148, 0.4), 0 0 4px rgba(167, 192, 253, 0.3);
          border-radius: 0 4px 4px 0;
        }
        @keyframes dx3-progressShine {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .dx3-progress-dot {
          position: absolute;
          right: -4px;
          top: 50%;
          transform: translateY(-50%);
          width: 10px;
          height: 10px;
          background: #a7c0fd;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(167, 192, 253, 0.6);
          animation: dx3-pulse 2s ease-in-out infinite;
        }
        @keyframes dx3-pulse {
          0%, 100% { transform: translateY(-50%) scale(1); opacity: 1; }
          50% { transform: translateY(-50%) scale(1.5); opacity: 0.6; }
        }

        .dx3-option {
          position: relative;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          border: 2px solid #d1d5db;
          overflow: hidden;
          cursor: pointer;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .dx3-option::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(68, 93, 148, 0.05), transparent);
          opacity: 0;
          transition: opacity 0.35s;
        }
        .dx3-option:hover {
          transform: translateY(-3px) scale(1.01);
          border-color: #445d94;
          box-shadow: 0 12px 24px -6px rgba(68, 93, 148, 0.15);
          background-color: #f8fafb !important;
        }
        .dx3-option:hover::before { opacity: 1; }
        .dx3-option:active { transform: scale(0.98); }

        .dx3-option-selected {
          background-color: #0A1A3A !important;
          color: white !important;
          border-color: #445d94 !important;
          transform: translateY(-3px) scale(1.01);
          box-shadow: 0 12px 32px -6px rgba(10, 26, 58, 0.35);
        }
        .dx3-option-selected .dx3-option-icon { color: #a7c0fd !important; }
        .dx3-option-selected .dx3-option-arrow { opacity: 1 !important; }

        .dx3-stagger > * {
          opacity: 0;
          transform: translateY(16px);
          animation: dx3-slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .dx3-stagger > *:nth-child(1) { animation-delay: 0.05s; }
        .dx3-stagger > *:nth-child(2) { animation-delay: 0.12s; }
        .dx3-stagger > *:nth-child(3) { animation-delay: 0.19s; }
        .dx3-stagger > *:nth-child(4) { animation-delay: 0.26s; }

        .dx3-fade-out {
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.25s, transform 0.25s;
        }
        .dx3-fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .dx3-info-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .dx3-info-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #445d94, #a7c0fd);
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: left;
        }
        .dx3-info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px -8px rgba(10, 26, 58, 0.12);
          background-color: white;
        }
        .dx3-info-card:hover::after { transform: scaleX(1); }

        .dx3-back:hover { transform: translateX(-4px); }
        .dx3-back { transition: all 0.3s ease; }

        .dx3-step-badge {
          animation: dx3-fadeIn 0.4s ease forwards;
        }
        @keyframes dx3-fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .dx3-kbd { transition: all 0.2s; }
        .dx3-kbd:hover {
          background-color: rgba(68, 93, 148, 0.15);
          border-color: #445d94;
        }

        .dx3-quiz-card {
          box-shadow: 0 32px 64px -15px rgba(25, 28, 30, 0.06), 0 0 0 1px rgba(68, 93, 148, 0.04);
          transition: box-shadow 0.4s ease;
        }

        .dx3-result-enter {
          opacity: 0;
          transform: scale(0.95) translateY(20px);
          animation: dx3-resultIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes dx3-resultIn {
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .dx3-result-card {
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dx3-result-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px -8px rgba(10, 26, 58, 0.15);
        }

        .dx3-check-anim {
          animation: dx3-checkPop 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes dx3-checkPop {
          from { opacity: 0; transform: scale(0); }
          50% { transform: scale(1.2); }
          to { opacity: 1; transform: scale(1); }
        }

        .dx3-cta-pulse {
          animation: dx3-ctaPulse 2.5s ease-in-out infinite;
        }
        @keyframes dx3-ctaPulse {
          0%, 100% { box-shadow: 0 4px 16px rgba(68, 93, 148, 0.3); }
          50% { box-shadow: 0 8px 32px rgba(68, 93, 148, 0.5); }
        }

        .dx3-text-input {
          transition: all 0.3s ease;
          border: 2px solid #eceef1;
        }
        .dx3-text-input:focus {
          border-color: #445d94;
          box-shadow: 0 0 0 4px rgba(68, 93, 148, 0.1);
          outline: none;
        }
      `}</style>

      <Navbar activeItem="diagnostico" transparent />

      {/* Hero con imagen de fondo */}
      <section className="relative pt-40 pb-16 px-4 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Football" src={images.aerialPitch} />
          <div className="absolute inset-0 bg-[#0A1A3A]/80"></div>
        </div>
        <div className={`relative z-10 text-center max-w-3xl mx-auto ${mounted ? 'dx3-step-enter' : ''}`}>
          <span className="text-[#a7c0fd] font-bold tracking-widest text-xs uppercase mb-3 block">Diagnostico Futbolistas</span>
          <h1 className="text-3xl md:text-4xl text-white font-bold italic leading-tight mb-4" style={{fontFamily:"'Noto Serif'"}}>Quieres jugar futbol profesional o subir de nivel?</h1>
          <p className="text-slate-300 text-base font-light max-w-2xl mx-auto mb-8">Detecta que te esta limitando y descubri el servicio que mejor encaja con tu situacion actual.</p>
          {!started && (
            <>
              <button
                onClick={() => { setStarted(true); setTimeout(() => window.scrollTo({ top: quizRef.current.offsetTop - 100, behavior: 'smooth' }), 100) }}
                className="inline-block bg-white text-[#0A1A3A] px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all hover:scale-[1.03] active:scale-95 shadow-lg mb-16"
              >
                Comencemos
              </button>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  { icon: 'insights', title: 'Analisis de Mercado', desc: 'Cruzamos tus datos con requerimientos actuales de ligas profesionales.' },
                  { icon: 'verified_user', title: 'Privacidad Total', desc: 'Tus datos son analizados exclusivamente por nuestro equipo de scouting.' },
                  { icon: 'timer', title: 'Resultado Inmediato', desc: 'Recibe una hoja de ruta preliminar al finalizar el formulario.' },
                ].map((c, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center">
                    <Icon name={c.icon} className="text-[#a7c0fd] text-3xl mb-3" />
                    <h4 className="text-white font-bold text-sm mb-1">{c.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {started && <main ref={quizRef} className="pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto -mt-8 relative z-10">

        {/* Quiz Container */}
        <div className={`bg-white rounded-xl dx3-quiz-card overflow-hidden ${mounted ? 'dx3-step-enter' : ''}`} style={{ animationDelay: '0.15s' }}>
          {/* Progress Bar */}
          <div className="h-2 w-full bg-[#eceef1] dx3-progress-track">
            <div className="h-full dx3-progress-bar relative" style={{ width: `${progress}%`, transition: 'width 0.7s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <span className="dx3-progress-dot"></span>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16">
            {!showResult ? (
              <div key={step} className={animating ? 'dx3-fade-out' : ''}>
                {/* Step Counter */}
                <div className="flex items-center gap-2 mb-10">
                  <span className="dx3-step-badge bg-[#445d94]/10 text-[#445d94] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-tighter">
                    Paso {String(step + 1).padStart(2, '0')} de {String(totalSteps).padStart(2, '0')}
                  </span>
                </div>

                {/* Step Title */}
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl text-[#0A1A3A] font-bold mb-4 italic" style={{fontFamily:"'Noto Serif'"}}>{currentStep.title}</h2>
                </div>

                {/* Options, Select, or Text Input */}
                {isSelectStep ? (
                  <div className="dx3-stagger">
                    <div>
                      <select
                        value={answers[step] ?? ''}
                        onChange={(e) => {
                          const val = e.target.value
                          setAnswers(prev => ({ ...prev, [step]: val }))
                          setTimeout(() => {
                            setAnimating(true)
                            setTimeout(() => {
                              if (step < totalSteps - 1) setStep(s => s + 1)
                              else setShowResult(true)
                              setAnimating(false)
                            }, 300)
                          }, 400)
                        }}
                        className="dx3-text-input w-full p-5 rounded-xl bg-[#f2f4f7] text-[#0A1A3A] text-lg font-medium appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Selecciona tu posicion</option>
                        {currentStep.options.map((opt, i) => (
                          <option key={i} value={opt.label}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ) : isTextStep ? (
                  <div className="dx3-stagger">
                    <div>
                      <input
                        type="text"
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        placeholder={currentStep.placeholder}
                        className="dx3-text-input w-full p-5 rounded-xl bg-[#f2f4f7] text-[#0A1A3A] text-lg font-medium placeholder:text-[#45464e]/50"
                        autoFocus
                      />
                      {textInput.trim() !== '' && (
                        <button
                          onClick={goNext}
                          className="mt-6 bg-[#445d94] text-white px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#445d94]/25 hover:scale-[1.03] active:scale-95"
                        >
                          Continuar
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className={`grid grid-cols-1 ${currentStep.options.length <= 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2'} gap-4 dx3-stagger`}>
                    {currentStep.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelect(i)}
                        className={`dx3-option group flex items-center justify-between p-6 rounded-xl text-left ${
                          answers[step] === i ? 'dx3-option-selected' : 'bg-[#f2f4f7]'
                        }`}
                      >
                        <div className="flex items-center gap-4 relative z-10">
                          <Icon name={opt.icon} className={`dx3-option-icon ${answers[step] === i ? 'text-[#a7c0fd]' : 'text-[#445d94]'}`} />
                          <span className="font-semibold tracking-tight">{opt.label}</span>
                        </div>
                        <Icon name="arrow_forward" className={`dx3-option-arrow relative z-10 transition-all duration-300 ${answers[step] === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                      </button>
                    ))}
                  </div>
                )}

                {/* Navigation */}
                <div className="mt-16 flex items-center justify-between">
                  <button
                    onClick={goBack}
                    disabled={step === 0}
                    className={`dx3-back flex items-center gap-2 font-medium text-sm ${step === 0 ? 'text-[#c3c6ce] cursor-not-allowed' : 'text-[#45464e] hover:text-[#0A1A3A]'}`}
                  >
                    <Icon name="arrow_back" className="text-sm" /> Volver
                  </button>
                  <div className="flex items-center gap-4">
                    <div className="text-xs text-[#45464e]/60 font-medium hidden sm:block">
                      Presiona <span className="dx3-kbd bg-[#eceef1] px-1.5 py-0.5 rounded border border-[#c3c6ce] inline-block">Enter</span> para continuar
                    </div>
                    {!isTextStep && answers[step] != null && (
                      <button
                        onClick={goNext}
                        className="bg-[#0A1A3A] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0A1A3A]/25 hover:scale-[1.03] active:scale-95"
                      >
                        {step === totalSteps - 1 ? 'Ver Resultado' : 'Continuar'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Result Screen */
              <div className="dx3-result-enter">
                <div className="text-center mb-10">
                  <div className="dx3-check-anim inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#445d94]/10 mb-6">
                    <Icon name="check_circle" filled className="text-[#445d94] text-5xl" />
                  </div>
                  <h2 className="text-2xl md:text-3xl text-[#0A1A3A] font-bold italic mb-4" style={{fontFamily:"'Noto Serif'"}}>RESULTADO: ESTAS SON LAS OPCIONES QUE ENCAJAN CONTIGO</h2>
                  <p className="text-[#45464e] text-lg max-w-xl mx-auto">Segun lo que respondiste, estas son las opciones que mejor encajan con tu situacion actual.</p>
                </div>

                {/* Service Recommendation Cards */}
                <div className="space-y-6 mb-10">
                  {resultCards.map((card, i) => (
                    <div
                      key={i}
                      className={`dx3-result-card rounded-xl p-8 ${
                        card.recommended
                          ? 'bg-white border-2 border-[#445d94] relative'
                          : 'bg-[#f2f4f7]'
                      }`}
                      style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                    >
                      {card.recommended && (
                        <span className="absolute -top-3 left-6 bg-[#445d94] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                          OPCION RECOMENDADA
                        </span>
                      )}
                      <h3 className="text-lg md:text-xl font-bold text-[#0A1A3A] mb-4 mt-1" style={{fontFamily:"'Noto Serif'", fontStyle: 'italic'}}>
                        {card.title}
                      </h3>
                      <div className="text-[#45464e] leading-relaxed mb-6 whitespace-pre-line text-sm md:text-base">
                        {card.description}
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {card.links.map((link, j) => (
                          <a
                            key={j}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-95 ${
                              card.recommended && j === 0
                                ? 'bg-[#445d94] text-white hover:shadow-lg hover:shadow-[#445d94]/25 dx3-cta-pulse'
                                : 'bg-[#0A1A3A] text-white hover:shadow-lg hover:shadow-[#0A1A3A]/25'
                            }`}
                          >
                            <Icon name="open_in_new" className="text-sm" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Instagram CTA */}
                <div className="bg-[#0A1A3A] text-white rounded-xl p-8 mb-8">
                  <div className="flex items-start gap-4">
                    <Icon name="send" className="text-[#a7c0fd] text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-3">Ahora haz esto:</h3>
                      <p className="text-[#a7c0fd]/80 leading-relaxed mb-4">
                        Enviame por Instagram (<strong className="text-white">@marcolujan7</strong>): la opcion que te salio (o la que mas te interesa) y tu material (video / highlights / partidos, historial de equipos) y vemos tu caso.
                      </p>
                      <a
                        href="https://www.instagram.com/marcolujan7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dx3-cta-pulse inline-flex items-center gap-2 bg-[#445d94] text-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-[1.03] active:scale-95"
                      >
                        <Icon name="open_in_new" className="text-sm" />
                        Ir a Instagram @marcolujan7
                      </a>
                    </div>
                  </div>
                </div>

                {/* Back to start */}
                <div className="mt-8 text-center">
                  <button
                    onClick={() => { setStep(0); setAnswers({}); setShowResult(false); setTextInput('') }}
                    className="text-sm text-[#45464e] hover:text-[#0A1A3A] transition-colors"
                  >
                    Volver a realizar el diagnostico
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </main>}

      <Footer />
    </div>
  )
}
