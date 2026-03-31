import logoImg from '../assets/logo.png'

export default function Logo({ size = 40, className = '' }) {
  return (
    <img src={logoImg} alt="ML Scouting Academy" width={size} height={size} className={className} style={{ objectFit: 'contain' }} />
  )
}
