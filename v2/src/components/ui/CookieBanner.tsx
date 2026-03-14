import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie } from 'lucide-react'

type CookieConsentChoice = 'accept_all' | 'reject_optional'

const readStoredConsent = (): CookieConsentChoice | null => {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem('educta_cookie_consent')
  if (stored === 'accept_all' || stored === 'reject_optional') return stored
  return null
}

export function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsentChoice | null>(readStoredConsent)
  const [isVisible, setIsVisible] = useState<boolean>(() => readStoredConsent() === null)

  const saveChoice = (choice: CookieConsentChoice) => {
    localStorage.setItem('educta_cookie_consent', choice)
    localStorage.setItem('educta_cookie_consent_at', new Date().toISOString())
    setConsent(choice)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="cookie-banner"
          role="dialog"
          aria-label="Preferenze cookie"
        >
          <div className="cookie-left">
            <Cookie size={18} />
            <div>
              <strong>Cookie & Privacy</strong>
              <p>
                Usiamo cookie tecnici per far funzionare il sito. I cookie analytics sono opzionali e servono solo a migliorare l’esperienza.
                {consent && <span className="cookie-status"> Preferenza attuale: {consent === 'accept_all' ? 'tutti accettati' : 'solo tecnici'}.</span>}
              </p>
            </div>
          </div>
          <div className="cookie-actions">
            <button type="button" className={`btn ghost ${consent === 'reject_optional' ? 'cookie-active' : ''}`} onClick={() => saveChoice('reject_optional')}>Rifiuta opzionali</button>
            <button type="button" className={`btn primary ${consent === 'accept_all' ? 'cookie-active' : ''}`} onClick={() => saveChoice('accept_all')}>Accetta tutti</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
