import { useState, useEffect } from 'react'
import Icon from './Icon'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 w-12 h-12 bg-[#0A1A3A] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0A1A3A]/80 transition-all z-50 cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Volver arriba"
    >
      <Icon name="keyboard_arrow_up" style={{ fontSize: '28px' }} />
    </button>
  )
}
