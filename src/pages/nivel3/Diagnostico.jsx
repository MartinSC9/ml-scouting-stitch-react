import { useEffect, useState, useCallback, useRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Icon from '../../components/Icon'
import { Link } from 'react-router-dom'
import { images } from '../../assets/images'
import { services } from './Servicios'

const steps = [
  {
    title: '¿Qué edad tienes actualmente?',
    type: 'options',
    options: [
      { icon: 'child_care', label: 'Menos de 18' },
      { icon: 'person', label: '18 - 21' },
      { icon: 'sports_soccer', label: '22 - 25' },
      { icon: 'elderly', label: 'Más de 25' },
    ],
  },
  {
    title: '¿Cuál es tu posición en el campo?',
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
    title: '¿Tienes video de highlights?',
    type: 'options',
    options: [
      { icon: 'videocam', label: 'Sí, tengo highlights' },
      { icon: 'help_outline', label: 'Sí, pero no estoy seguro de que estén bien estructurados' },
      { icon: 'videocam_off', label: 'No tengo video de highlights' },
    ],
  },
  {
    title: '¿En qué nivel juegas actualmente?',
    type: 'options',
    options: [
      { icon: 'emoji_events', label: 'Profesional' },
      { icon: 'military_tech', label: 'Semi profesional' },
      { icon: 'sports', label: 'Semi amateur' },
      { icon: 'fitness_center', label: 'Amateur' },
    ],
  },
  {
    title: '¿Tienes partidos completos grabados?',
    type: 'options',
    options: [
      { icon: 'video_library', label: 'Sí, tengo partidos completos' },
      { icon: 'videocam_off', label: 'No' },
    ],
  },
  {
    title: '¿Cuál es tu mayor dificultad actualmente como futbolista?',
    type: 'options',
    options: [
      { icon: 'description', label: 'No sé cómo presentar mi perfil a clubes' },
      { icon: 'help_outline', label: 'No tengo claro para qué ligas o nivel tengo nivel' },
      { icon: 'mail', label: 'Ya he enviado mi material pero no recibo respuestas' },
      { icon: 'contacts', label: 'No tengo contactos ni sé a dónde enviar mi perfil' },
    ],
  },
]

// Determine recommended service based on quiz answers
const getRecommendedServiceId = (answers) => {
  const hasHighlights = answers[2] === 0
  const unsureHighlights = answers[2] === 1
  const noHighlights = answers[2] === 2
  const hasFullGames = answers[4] === 0

  if (noHighlights && !hasFullGames) return 'perfil-video'
  if (unsureHighlights) return 'diagnostico'
  if (hasHighlights && hasFullGames) return 'evaluacion'
  return 'plan-de-mercado'
}

// Restore saved quiz state from sessionStorage
const getSavedQuiz = () => {
  try {
    const raw = sessionStorage.getItem('dx3-quiz')
    if (!raw) return null
    return JSON.parse(raw)
  } catch { return null }
}

export default function Diagnostico() {
  const saved = useRef(getSavedQuiz())
  const hasSavedResult = saved.current?.showResult === true

  const [started, setStarted] = useState(hasSavedResult)
  const quizRef = useRef(null)
  const [step, setStep] = useState(hasSavedResult ? steps.length - 1 : 0)
  const [answers, setAnswers] = useState(hasSavedResult ? saved.current.answers : {})
  const [mounted, setMounted] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [showResult, setShowResult] = useState(hasSavedResult)
  const [analyzing, setAnalyzing] = useState(false)
  const [showCards, setShowCards] = useState(hasSavedResult)
  const [textInput, setTextInput] = useState('')
  const totalSteps = steps.length

  useEffect(() => { setMounted(true) }, [])

  // Persist quiz state to sessionStorage
  useEffect(() => {
    if (showResult) {
      sessionStorage.setItem('dx3-quiz', JSON.stringify({ answers, showResult: true }))
    }
  }, [showResult, answers])

  // When result shows, trigger analyzing animation then reveal cards (skip if restored from session)
  useEffect(() => {
    if (showResult) {
      if (hasSavedResult) {
        setAnalyzing(false)
        setShowCards(true)
      } else {
        setAnalyzing(true)
        setShowCards(false)
        const t = setTimeout(() => {
          setAnalyzing(false)
          setShowCards(true)
        }, 2800)
        return () => clearTimeout(t)
      }
    } else {
      setAnalyzing(false)
      setShowCards(false)
    }
  }, [showResult])

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

  // Derive profile insights from answers
  const getProfileInsights = () => {
    const age = steps[0].options[answers[0]]?.label || ''
    const position = answers[1] || ''
    const hasHighlights = answers[2] === 0
    const unsureHighlights = answers[2] === 1
    const level = steps[3].options[answers[3]]?.label || ''
    const hasFullGames = answers[4] === 0
    const difficulty = steps[5].options[answers[5]]?.label || ''

    // Readiness score based on answers
    let readiness = 30
    if (answers[0] === 1 || answers[0] === 2) readiness += 15 // ideal age
    if (hasHighlights) readiness += 20
    if (unsureHighlights) readiness += 10
    if (answers[3] === 0 || answers[3] === 1) readiness += 20 // pro or semi-pro
    if (answers[3] === 2) readiness += 10
    if (hasFullGames) readiness += 15
    readiness = Math.min(readiness, 95)

    // Material score
    let material = 20
    if (hasHighlights) material += 40
    if (unsureHighlights) material += 20
    if (hasFullGames) material += 40
    material = Math.min(material, 100)

    // Visibility score (low = needs more help)
    let visibility = 15
    if (answers[5] === 2) visibility += 20 // already sending but no response
    if (answers[5] === 3) visibility = 10 // no contacts at all
    visibility = Math.min(visibility, 100)

    return {
      age, position, level, difficulty,
      hasHighlights, hasFullGames, unsureHighlights,
      readiness, material, visibility,
      insights: [
        { icon: 'person', label: 'Edad', value: age },
        { icon: 'sports_soccer', label: 'Posición', value: position },
        { icon: 'military_tech', label: 'Nivel actual', value: level },
      ],
      scores: [
        { label: 'Preparación del perfil', value: readiness, color: readiness >= 60 ? '#22c55e' : readiness >= 40 ? '#eab308' : '#ef4444' },
        { label: 'Material audiovisual', value: material, color: material >= 60 ? '#22c55e' : material >= 40 ? '#eab308' : '#ef4444' },
        { label: 'Visibilidad en el mercado', value: visibility, color: visibility >= 40 ? '#22c55e' : visibility >= 25 ? '#eab308' : '#ef4444' },
      ],
      summary: !hasHighlights && !hasFullGames
        ? 'Tu material audiovisual es tu punto más débil. Sin video, los clubes no pueden evaluarte. Es clave resolver esto primero.'
        : visibility <= 20
        ? 'Tienes buen material pero muy poca visibilidad. Necesitas una estrategia de posicionamiento para llegar a los clubes correctos.'
        : unsureHighlights
        ? 'Tienes material pero puede no estar bien estructurado. Un perfil mal presentado puede cerrarte puertas aunque tengas nivel.'
        : 'Tienes una base sólida. El siguiente paso es maximizar tu exposición y posicionarte en las ligas adecuadas para tu perfil.',
    }
  }

  const profile = showResult ? getProfileInsights() : null
  const recommendedId = showResult ? getRecommendedServiceId(answers) : null

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

        .dx3-analyzing-dots span {
          animation: dx3-dot 1.4s infinite;
          opacity: 0;
        }
        .dx3-analyzing-dots span:nth-child(2) { animation-delay: 0.2s; }
        .dx3-analyzing-dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes dx3-dot {
          0%, 80%, 100% { opacity: 0; }
          40% { opacity: 1; }
        }

        .dx3-bar-fill {
          animation: dx3-barGrow 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: left;
        }
        @keyframes dx3-barGrow {
          from { width: 0%; }
        }

        .dx3-profile-fade > * {
          opacity: 0;
          transform: translateY(12px);
          animation: dx3-slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .dx3-profile-fade > *:nth-child(1) { animation-delay: 0.1s; }
        .dx3-profile-fade > *:nth-child(2) { animation-delay: 0.25s; }
        .dx3-profile-fade > *:nth-child(3) { animation-delay: 0.4s; }
        .dx3-profile-fade > *:nth-child(4) { animation-delay: 0.55s; }
        .dx3-profile-fade > *:nth-child(5) { animation-delay: 0.7s; }
      `}</style>

      <Navbar activeItem="diagnostico" transparent />

      {/* Hero con imagen de fondo */}
      <section className="relative pt-40 pb-16 px-4 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" alt="Football" src={images.aerialPitch} />
          <div className="absolute inset-0 bg-[#0A1A3A]/80"></div>
        </div>
        <div className={`relative z-10 text-center max-w-3xl mx-auto ${mounted ? 'dx3-step-enter' : ''}`}>
          <span className="text-[#a7c0fd] font-bold tracking-widest text-xs uppercase mb-3 block">Diagnóstico Futbolistas</span>
          <h1 className="text-3xl md:text-4xl text-white font-bold italic leading-tight mb-4" style={{fontFamily:"'Noto Serif'"}}>¿Quieres jugar fútbol profesional o subir de nivel?</h1>
          <p className="text-slate-300 text-base font-light max-w-2xl mx-auto mb-8">Detecta qué te está limitando y descubre el servicio que mejor encaja con tu situación actual.</p>
          {!started && (
            <>
              <button
                onClick={() => { setStarted(true); setTimeout(() => window.scrollTo({ top: quizRef.current.offsetTop - 100, behavior: 'smooth' }), 100) }}
                className="inline-block bg-white text-[#0A1A3A] px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all hover:scale-[1.03] active:scale-95 shadow-lg mb-16 cursor-pointer"
              >
                Comencemos
              </button>
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
                    <div className="relative">
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
                        className="dx3-text-input w-full p-5 pr-12 rounded-xl bg-[#f2f4f7] text-[#0A1A3A] text-lg font-medium appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Selecciona tu posición</option>
                        {currentStep.options.map((opt, i) => (
                          <option key={i} value={opt.label}>{opt.label}</option>
                        ))}
                      </select>
                      <Icon name="expand_more" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#45464e] text-2xl pointer-events-none" />
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
                    <button
                      onClick={goNext}
                      disabled={!hasAnswer}
                      className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
                        hasAnswer
                          ? 'bg-[#0A1A3A] text-white hover:shadow-lg hover:shadow-[#0A1A3A]/25 hover:scale-[1.03] active:scale-95'
                          : 'bg-[#0A1A3A]/30 text-white/50 cursor-not-allowed'
                      }`}
                    >
                      {step === totalSteps - 1 ? 'Ver Resultado' : 'Continuar'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Result Screen */
              <div className="dx3-result-enter">
                {analyzing ? (
                  /* Analyzing Phase */
                  <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#445d94]/10 mb-6">
                      <Icon name="analytics" className="text-[#445d94] text-4xl dx3-analyzing-spin" style={{ animation: 'spin 2s linear infinite' }} />
                    </div>
                    <h2 className="text-2xl md:text-3xl text-[#0A1A3A] font-bold italic mb-3" style={{fontFamily:"'Noto Serif'"}}>Analizando tu perfil<span className="dx3-analyzing-dots"><span>.</span><span>.</span><span>.</span></span></h2>
                    <p className="text-[#45464e] max-w-md mx-auto">Evaluando tus respuestas para darte una recomendación personalizada</p>
                    <div className="mt-8 max-w-xs mx-auto">
                      <div className="h-1.5 bg-[#eceef1] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#445d94] to-[#a7c0fd] rounded-full" style={{ animation: 'dx3-analyzeBar 2.5s ease-in-out forwards' }} />
                      </div>
                    </div>
                    <style>{`
                      @keyframes spin { to { transform: rotate(360deg); } }
                      @keyframes dx3-analyzeBar { from { width: 0%; } to { width: 100%; } }
                    `}</style>
                  </div>
                ) : (
                  /* Results Phase */
                  <>
                {/* Profile Analysis */}
                <div className="dx3-profile-fade mb-10 max-w-2xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="dx3-check-anim inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#445d94]/10 mb-4">
                      <Icon name="check_circle" filled className="text-[#445d94] text-4xl" />
                    </div>
                    <h2 className="text-2xl md:text-3xl text-[#0A1A3A] font-bold italic mb-2" style={{fontFamily:"'Noto Serif'"}}>Tu Análisis de Perfil</h2>
                    <p className="text-[#45464e] text-sm max-w-lg mx-auto">Basado en tus respuestas, este es el panorama de tu situación actual</p>
                  </div>

                  {/* Profile summary chips */}
                  <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {profile?.insights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm">
                        <Icon name={item.icon} className="text-[#445d94] text-base" />
                        <span className="text-[#45464e]">{item.label}:</span>
                        <span className="font-semibold text-[#0A1A3A]">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Score bars */}
                  <div className="bg-white rounded-xl border border-slate-100 p-6 mb-6">
                    <div className="space-y-4">
                      {profile?.scores.map((score, i) => (
                        <div key={i}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm font-medium text-[#0A1A3A]">{score.label}</span>
                            <span className="text-sm font-bold" style={{ color: score.color }}>{score.value}%</span>
                          </div>
                          <div className="h-2.5 bg-[#eceef1] rounded-full overflow-hidden">
                            <div className="h-full rounded-full dx3-bar-fill" style={{ width: `${score.value}%`, backgroundColor: score.color, animationDelay: `${i * 0.2}s` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key insight */}
                  <div className="bg-[#0A1A3A] rounded-xl p-5 flex items-start gap-3">
                    <Icon name="lightbulb" className="text-[#a7c0fd] text-xl flex-shrink-0 mt-0.5" />
                    <p className="text-white/90 text-sm leading-relaxed">{profile?.summary}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl text-[#0A1A3A] font-bold italic" style={{fontFamily:"'Noto Serif'"}}>Servicios recomendados para tu caso</h3>
                  <p className="text-[#45464e] text-sm mt-1">Estas son las opciones que mejor encajan con tu situación</p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {services.map((s) => {
                    const isRecommended = s.id === recommendedId
                    return (
                      <Link
                        key={s.id}
                        to={`/servicios-para-jugadores#${s.id}`}
                        className={`dx3-result-card text-left bg-white rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all relative flex flex-col cursor-pointer ${
                          isRecommended
                            ? 'ring-2 ring-[#445d94] border-transparent'
                            : 'border border-slate-100'
                        }`}
                      >
                        {isRecommended && (
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#445d94] text-white text-[10px] px-3 py-0.5 rounded-full font-semibold whitespace-nowrap">
                            Recomendado para ti
                          </span>
                        )}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#0A1A3A] rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon name={s.icon} className="text-white" />
                          </div>
                          <p className="text-xl font-bold text-[#0A1A3A]">{s.price}</p>
                        </div>
                        <h4 className="text-sm font-bold text-[#0A1A3A] mb-2 leading-snug">{s.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">{s.desc}</p>
                        <span className={`block text-center py-2 rounded-lg text-xs font-semibold transition-colors ${
                          isRecommended ? 'bg-[#445d94] text-white' : 'bg-[#0A1A3A] text-white'
                        }`}>
                          Ver detalle
                        </span>
                      </Link>
                    )
                  })}
                </div>

                {/* Instagram CTA */}
                <div className="bg-[#0A1A3A] text-white rounded-xl p-8 mb-8">
                  <div className="flex items-start gap-4">
                    <Icon name="send" className="text-[#a7c0fd] text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-3">Ahora haz esto:</h3>
                      <p className="text-[#a7c0fd]/80 leading-relaxed mb-4">
                        Envíame por Instagram (<strong className="text-white">@marcolujan7</strong>): la opción que te salió (o la que más te interesa) y tu material (video / highlights / partidos, historial de equipos) y vemos tu caso.
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
                    onClick={() => { sessionStorage.removeItem('dx3-quiz'); setStep(0); setAnswers({}); setShowResult(false); setTextInput('') }}
                    className="text-sm text-[#45464e] hover:text-[#0A1A3A] transition-colors"
                  >
                    Volver a realizar el diagnóstico
                  </button>
                </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

      </main>}

      <Footer />
    </div>
  )
}
