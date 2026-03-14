import { useState } from 'react'
import './App.css'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Marquee } from './components/sections/Marquee'
import { Solutions } from './components/sections/Solutions'
import { Features } from './components/sections/Features'
import { About } from './components/sections/About'
import { Faq } from './components/sections/Faq'
import { Contact } from './components/sections/Contact'
import { CookieBanner } from './components/ui/CookieBanner'
import { LegalModal } from './components/ui/LegalModal'

function App() {
  const [legalModal, setLegalModal] = useState<{ title: string; url: string } | null>(null)

  const openLegalModal = (title: string, url: string) => {
    setLegalModal({ title, url })
  }

  const closeLegalModal = () => {
    setLegalModal(null)
  }

  return (
    <div className="site">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />
      <div className="grid-glow" />

      <Header />

      <Hero />
      <Marquee />
      <Solutions />
      <Features />
      <About />
      <Faq />
      <Contact />

      <Footer onOpenLegal={openLegalModal} />

      <LegalModal
        isOpen={!!legalModal}
        title={legalModal?.title || ''}
        url={legalModal?.url || ''}
        onClose={closeLegalModal}
      />

      <a className="floating-demo" href="#contatti">⚡ Prenota Demo</a>
      <CookieBanner />
    </div>
  )
}

export default App
