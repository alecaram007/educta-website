import { motion } from 'framer-motion'
import { featureItems } from '../../data'

export function Features() {
  return (
    <section id="funzioni" className="section full">
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        Funzioni operative costruite sul lavoro reale
      </motion.h2>
      <div className="features-grid">
        {featureItems.map(({ icon: Icon, title, text }, idx) => (
          <motion.article
            key={title}
            className="feature"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -8 }}
          >
            <Icon size={18} />
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
