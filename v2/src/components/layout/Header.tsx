import { type MouseEvent } from 'react'
import { motion } from 'framer-motion'

export function Header() {
  const scrollToSection = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="nav">
      <div className="nav-shimmer" />
      <motion.div 
        className="brand" 
        initial={{ opacity: 0, y: -16 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="logo-wrap" 
          animate={{ rotate: [0, 3, -3, 0] }} 
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <img className="logo-img" src="/logo.svg" alt="Educta Solutions logo" />
        </motion.div>
        <strong>Educta Solutions</strong>
      </motion.div>
      <nav className="nav-links">
        <a className="nav-link" href="#chi-siamo" onClick={scrollToSection('#chi-siamo')}>Chi siamo</a>
        <a className="nav-link" href="#soluzioni" onClick={scrollToSection('#soluzioni')}>Soluzioni</a>
        <a className="nav-link" href="#funzioni" onClick={scrollToSection('#funzioni')}>Funzioni</a>
        <a className="nav-link" href="#faq" onClick={scrollToSection('#faq')}>FAQ</a>
        <a className="nav-link" href="#contatti" onClick={scrollToSection('#contatti')}>Contatti</a>
        <a className="cta-mini" href="https://gestionale.eductasolutions.com">Accedi al gestionale</a>
      </nav>
    </header>
  )
}
