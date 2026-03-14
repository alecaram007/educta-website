import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LegalModalProps {
  isOpen: boolean
  title: string
  url: string
  onClose: () => void
}

export function LegalModal({ isOpen, title, url, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="legal-modal-overlay" onClick={onClose}>
          <motion.div
            className="legal-modal"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <div className="legal-modal-header">
              <strong>{title}</strong>
              <button type="button" className="legal-close" onClick={onClose}>Chiudi</button>
            </div>
            <iframe
              src={url}
              title={title}
              className="legal-iframe"
              loading="lazy"
              referrerPolicy="no-referrer"
              sandbox="allow-same-origin allow-top-navigation-by-user-activation"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
