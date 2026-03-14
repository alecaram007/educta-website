import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import { solutionItems } from '../../data'
import { stagger, fadeUp } from '../../lib/animations'

export function Solutions() {
  return (
    <section id="soluzioni" className="section full">
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        Soluzioni pensate per la realtà operativa degli enti
      </motion.h2>
      <motion.div className="grid3 cinematic-cards" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        {solutionItems.map(({ title, text }) => (
          <motion.article key={title} variants={fadeUp} whileHover={{ y: -10, scale: 1.02 }}>
            <Building2 size={18} />
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
