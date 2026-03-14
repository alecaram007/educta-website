import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function About() {
  return (
    <section id="chi-siamo" className="section dark full">
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        Chi siamo
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        Siamo Educta Solutions: sviluppiamo software verticale per enti di formazione partendo da problemi operativi concreti.
        Il risultato è un gestionale rapido da adottare, solido lato permessi e utile dal primo giorno.
      </motion.p>
      <motion.div className="stars" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        {[...Array(5)].map((_, i) => (
          <motion.div key={i} animate={{ y: [0, -6, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.12 }}>
            <Star size={18} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
