import { motion } from 'framer-motion'
import { ArrowRight, Play, Gauge, ShieldCheck, Sparkles } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/animations'

export function Hero() {
  return (
    <section className="hero cinematic">
      <div className="hero-beams" />
      <motion.div initial="hidden" animate="visible" variants={stagger}>
        <motion.p variants={fadeUp} className="kicker">SOFTWARE GESTIONALE PER ENTI DI FORMAZIONE</motion.p>
        <motion.h1 variants={fadeUp}>
          Il gestionale operativo<br />
          <span>per la formazione finanziata e privata.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="sub">
          Educta Solutions nasce da processi reali: iscrizioni, calendari, lezioni, presenze, valutazioni, documenti e ruoli.
          Tutto in un unico flusso tracciato, pensato per segreteria, coordinamento e direzione.
        </motion.p>
        <motion.div variants={fadeUp} className="hero-actions">
          <a className="btn primary" href="#contatti">Prenota demo <ArrowRight size={16} /></a>
          <a className="btn ghost" href="https://gestionale.eductasolutions.com"><Play size={16} /> Apri il gestionale</a>
        </motion.div>

        <motion.div variants={fadeUp} className="impact-row">
          <div><strong>Ruoli sicuri</strong><span>permessi granulari per team</span></div>
          <div><strong>Workflow completi</strong><span>dalla creazione corso alle lezioni</span></div>
          <div><strong>Audit pronto</strong><span>storico operativo sempre verificabile</span></div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-card glass"
        initial={{ opacity: 0, scale: 0.9, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
      >
        <div className="stat"><Gauge size={16} /> KPI e dashboard in tempo reale</div>
        <div className="stat"><ShieldCheck size={16} /> RBAC avanzato multi-ruolo</div>
        <div className="stat"><Sparkles size={16} /> Import PDF Sistema 1420 con audit</div>
        <div className="chip-row">
          <motion.span className="chip" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2.2 }}>Multi-ruolo</motion.span>
          <motion.span className="chip" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2.2, delay: .2 }}>Presenze</motion.span>
          <motion.span className="chip" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2.2, delay: .4 }}>Valutazioni</motion.span>
        </div>
      </motion.div>
    </section>
  )
}
