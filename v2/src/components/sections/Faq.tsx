import { motion } from 'framer-motion'

const faqItems = [
  {
    question: 'Possiamo attivare presenze e valutazioni solo su alcuni corsi?',
    answer:
      'Sì. Le sezioni sono modulari e possono essere abilitate in base al corso, così mantieni un flusso pulito dove non servono.',
  },
  {
    question: 'Come gestiamo i permessi tra proprietà, tutor, docenti e corsisti?',
    answer:
      'Il gestionale usa permessi granulari per ruolo: ogni utente vede e modifica solo ciò che è coerente con il suo profilo operativo.',
  },
  {
    question: 'Possiamo importare dati dai PDF Sistema 1420?',
    answer:
      'Sì. Il flusso di import prevede upload, anteprima validata e commit finale, con audit dettagliato per singola riga.',
  },
  {
    question: 'Quanto tempo serve per partire?',
    answer:
      'In demo configuriamo insieme il flusso base del tuo ente e definiamo setup, ruoli e procedure per avvio operativo rapido.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="section full faq-section">
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        FAQ per enti di formazione
      </motion.h2>
      <div className="faq-grid">
        {faqItems.map(({ question, answer }, idx) => (
          <motion.article
            key={question}
            className="faq-item"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3>{question}</h3>
            <p>{answer}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
