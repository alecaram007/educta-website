import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contatti" className="section full">
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        Prenota una demo operativa
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        Ti mostriamo il flusso reale sul tuo caso: corsi, ruoli, presenze, valutazioni, documenti e import.
      </motion.p>
      <motion.div className="contact-row" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <a className="btn ghost" href="mailto:info@eductasolutions.com"><Mail size={16} /> info@eductasolutions.com</a>
      </motion.div>
      <motion.form
        className="lead-form"
        action="https://formsubmit.co/info@eductasolutions.com"
        method="POST"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <input type="hidden" name="_subject" value="Nuovo lead dal sito Educta Solutions" />
        <input type="hidden" name="_captcha" value="true" />
        <input className="hp-field" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input name="nome" placeholder="Nome e cognome" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="ente" placeholder="Nome ente di formazione" />
        <textarea name="messaggio" placeholder="Raccontaci i tuoi processi (corsi, utenti, presenze, report...)" rows={4} required />
        <button className="btn primary" type="submit">Richiedi demo</button>
      </motion.form>
    </section>
  )
}
