import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { automationItems } from '../../data'

export function Marquee() {
  return (
    <section className="marquee-wrap" aria-label="Funzionalità automatiche">
      <motion.div
        className="marquee-track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {[...automationItems, ...automationItems].map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item"><CheckCircle2 size={14} /> {item}</span>
        ))}
      </motion.div>
    </section>
  )
}
