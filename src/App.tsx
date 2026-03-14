import { useEffect, useState, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  Gauge,
  Sparkles,
  Mail,
  Building2,
  Play,
  Star,
  CalendarDays,
  Users,
  FileText,
  BellRing,
  Bot,
  CheckCircle2,
  Cookie,
  CircleHelp,
  PhoneCall,
  MessageCircle,
} from 'lucide-react'
import './App.css'

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const automationItems = [
  'Import PDF Sistema 1420 con preview',
  'Moduli presenze e valutazioni per corso',
  'Permessi granulari per ruolo',
  'Dashboard KPI e stato corsi live',
  'Audit log completo operazioni',
  'Calendario lezioni con docenti e tutor',
  'Gestione documenti e scadenze',
  'Anagrafiche corsisti centralizzate',
]

const SUPPORT_EMAIL = 'info@eductasolutions.com'
const SUPPORT_PHONE = (import.meta.env.VITE_SUPPORT_PHONE ?? '').trim()
const SUPPORT_WHATSAPP = (import.meta.env.VITE_SUPPORT_WHATSAPP ?? '').trim()

const normalizeDigits = (value: string) => value.replace(/[^\d+]/g, '')

type CookieConsentChoice = 'accept_all' | 'reject_optional'

const readStoredConsent = (): CookieConsentChoice | null => {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem('educta_cookie_consent')
  if (stored === 'accept_all' || stored === 'reject_optional') return stored
  return null
}

function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsentChoice | null>(readStoredConsent)
  const [isVisible, setIsVisible] = useState<boolean>(() => readStoredConsent() === null)

  const saveChoice = (choice: CookieConsentChoice) => {
    localStorage.setItem('educta_cookie_consent', choice)
    localStorage.setItem('educta_cookie_consent_at', new Date().toISOString())
    setConsent(choice)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
  )
}

function App() {
  const [legalModal, setLegalModal] = useState<{ title: string; url: string } | null>(null)
  const [helpOpen, setHelpOpen] = useState(false)
  const [futureInputs, setFutureInputs] = useState({
    staff: 8,
    courses: 16,
    documents: 180,
  })

  const estimatedHoursSaved = Math.round(
    futureInputs.staff * futureInputs.courses * 0.58 + futureInputs.documents * 0.16
  )
  const estimatedRecoveryValue = estimatedHoursSaved * 24
  const automationScore = Math.min(
    100,
    Math.round(futureInputs.courses * 2 + futureInputs.documents / 6 + futureInputs.staff * 3)
  )

  useEffect(() => {
    if (!legalModal) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLegalModal(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [legalModal])

  const openLegalModal = (title: string, url: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setLegalModal({ title, url })
  }

  const scrollToSection = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="site">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />
      <div className="grid-glow" />

      <header className="nav">
        <div className="nav-shimmer" />
        <motion.div className="brand" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <motion.div className="logo-wrap" animate={{ rotate: [0, 3, -3, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}>
            <img className="logo-img" src="/logo.svg" alt="Educta Solutions logo" />
          </motion.div>
          <strong>Educta Solutions</strong>
        </motion.div>
        <nav className="nav-links">
          <a className="nav-link" href="#chi-siamo" onClick={scrollToSection('#chi-siamo')}>Chi siamo</a>
          <a className="nav-link" href="#soluzioni" onClick={scrollToSection('#soluzioni')}>Soluzioni</a>
          <a className="nav-link" href="#funzioni" onClick={scrollToSection('#funzioni')}>Funzioni</a>
          <a className="nav-link" href="#future-lab" onClick={scrollToSection('#future-lab')}>Future Lab</a>
          <a className="nav-link" href="#faq" onClick={scrollToSection('#faq')}>FAQ</a>
          <a className="nav-link" href="#contatti" onClick={scrollToSection('#contatti')}>Contatti</a>
          <a className="cta-mini" href="https://gestionale.eductasolutions.com">Accedi al gestionale</a>
        </nav>
      </header>

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

      <section id="soluzioni" className="section full">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Soluzioni pensate per la realtà operativa degli enti
        </motion.h2>
        <motion.div className="grid3 cinematic-cards" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {[
            ['Enti finanziati (FSE/Avvisi)', 'Gestisci classi, docenti, tutor, corsisti e adempimenti con una logica unica e controllata.'],
            ['Academy aziendali', 'Organizza calendario, presenze e valutazioni senza fogli sparsi o flussi manuali.'],
            ['Scuole professionali multi-sede', 'Controllo per team e sedi con visibilità chiara su corsi, utenti e performance.'],
          ].map(([title, text]) => (
            <motion.article key={title} variants={fadeUp} whileHover={{ y: -10, scale: 1.02 }}>
              <Building2 size={18} />
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="funzioni" className="section full">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Funzioni operative costruite sul lavoro reale
        </motion.h2>
        <div className="features-grid">
          {[
            [CalendarDays, 'Calendario corsi e lezioni', 'Pianificazione lezioni, ore, docenti e tutor con vista operativa unificata.'],
            [Users, 'RBAC e anagrafiche', 'Permessi granulari per ruolo con gestione utenti e corsisti in sicurezza.'],
            [FileText, 'Documenti e conformità', 'Archivio documentale, scadenze e protocolli sempre tracciabili.'],
            [BellRing, 'Alert attività critiche', 'Notifiche su scadenze, lezioni e stati da verificare.'],
            [Bot, 'Import automatico Sistema 1420', 'Upload PDF, preview guidata e commit controllato con audit riga per riga.'],
            [Gauge, 'Dashboard e monitoraggio', 'KPI di avanzamento corsi per decisioni rapide e fondate.'],
          ].map(([Icon, title, text], idx) => (
            <motion.article
              key={title as string}
              className="feature"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -8 }}
            >
              <Icon size={18} />
              <h3>{title as string}</h3>
              <p>{text as string}</p>
            </motion.article>
          ))}
        </div>
      </section>

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

      <section id="future-lab" className="section full">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Future Lab: strumenti predittivi e controllo in tempo reale
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Una demo concreta di come il tuo ente può passare da gestione reattiva a orchestrazione intelligente.
        </motion.p>
        <div className="future-grid">
          <motion.article
            className="future-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3>ROI Simulator Live</h3>
            <p>Regola i volumi operativi e visualizza subito l’impatto stimato.</p>

            <label className="range-row">
              <span>Staff amministrativo: <strong>{futureInputs.staff}</strong></span>
              <input
                type="range"
                min={2}
                max={30}
                value={futureInputs.staff}
                onChange={(e) => setFutureInputs((prev) => ({ ...prev, staff: Number(e.target.value) }))}
              />
            </label>

            <label className="range-row">
              <span>Corsi attivi/mese: <strong>{futureInputs.courses}</strong></span>
              <input
                type="range"
                min={4}
                max={80}
                value={futureInputs.courses}
                onChange={(e) => setFutureInputs((prev) => ({ ...prev, courses: Number(e.target.value) }))}
              />
            </label>

            <label className="range-row">
              <span>Documenti gestiti/mese: <strong>{futureInputs.documents}</strong></span>
              <input
                type="range"
                min={20}
                max={500}
                value={futureInputs.documents}
                onChange={(e) => setFutureInputs((prev) => ({ ...prev, documents: Number(e.target.value) }))}
              />
            </label>

            <div className="future-metrics">
              <div>
                <strong>{estimatedHoursSaved}h</strong>
                <span>tempo recuperato/mese</span>
              </div>
              <div>
                <strong>€ {estimatedRecoveryValue.toLocaleString('it-IT')}</strong>
                <span>valore operativo stimato</span>
              </div>
              <div>
                <strong>{automationScore}%</strong>
                <span>automation readiness</span>
              </div>
            </div>
          </motion.article>

          <motion.article
            className="future-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.08 }}
          >
            <h3>Autopilot Operativo</h3>
            <p>Workflow intelligente che riduce errori manuali e aumenta velocità di risposta.</p>
            <ul className="future-timeline">
              <li>
                <span className="future-dot" />
                <div>
                  <strong>Input evento</strong>
                  <p>Nuovo corso o variazione calendario rilevata in tempo reale.</p>
                </div>
              </li>
              <li>
                <span className="future-dot" />
                <div>
                  <strong>Routing automatico</strong>
                  <p>Assegna attività a tutor/docenti, aggiorna agenda e prepara scadenze.</p>
                </div>
              </li>
              <li>
                <span className="future-dot" />
                <div>
                  <strong>Controllo qualità</strong>
                  <p>Verifica dati mancanti, ruoli e consistenza prima della pubblicazione.</p>
                </div>
              </li>
              <li>
                <span className="future-dot" />
                <div>
                  <strong>Audit + insight</strong>
                  <p>Storico decisioni, alert predittivi e KPI immediatamente consultabili.</p>
                </div>
              </li>
            </ul>
          </motion.article>
        </div>
      </section>

      <section id="faq" className="section full faq-section">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          FAQ per enti di formazione
        </motion.h2>
        <div className="faq-grid">
          {[
            ['Possiamo attivare presenze e valutazioni solo su alcuni corsi?', 'Sì. Le sezioni sono modulari e possono essere abilitate in base al corso, così mantieni un flusso pulito dove non servono.'],
            ['Come gestiamo i permessi tra proprietà, tutor, docenti e corsisti?', 'Il gestionale usa permessi granulari per ruolo: ogni utente vede e modifica solo ciò che è coerente con il suo profilo operativo.'],
            ['Possiamo importare dati dai PDF Sistema 1420?', 'Sì. Il flusso di import prevede upload, anteprima validata e commit finale, con audit dettagliato per singola riga.'],
            ['Quanto tempo serve per partire?', 'In demo configuriamo insieme il flusso base del tuo ente e definiamo setup, ruoli e procedure per avvio operativo rapido.'],
          ].map(([question, answer], idx) => (
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

      

      <footer>
        <p>© {new Date().getFullYear()} Educta Solutions — All rights reserved.</p>
        <p className="legal-links">
          <a href="/privacy.html" onClick={openLegalModal('Privacy Policy', '/privacy.html')}>Privacy Policy</a> · <a href="/cookie-policy.html" onClick={openLegalModal('Cookie Policy', '/cookie-policy.html')}>Cookie Policy</a> · <a href="/terms.html" onClick={openLegalModal('Termini di utilizzo', '/terms.html')}>Termini di utilizzo</a>
        </p>
      </footer>



      {legalModal && (
        <div className="legal-modal-overlay" onClick={() => setLegalModal(null)}>
          <motion.div
            className="legal-modal"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={legalModal.title}
          >
            <div className="legal-modal-header">
              <strong>{legalModal.title}</strong>
              <button type="button" className="legal-close" onClick={() => setLegalModal(null)}>Chiudi</button>
            </div>
            <iframe
              src={legalModal.url}
              title={legalModal.title}
              className="legal-iframe"
              loading="lazy"
              referrerPolicy="no-referrer"
              sandbox="allow-same-origin allow-top-navigation-by-user-activation"
            />
          </motion.div>
        </div>
      )}

      <div className="support-widget">
        {helpOpen && (
          <motion.div
            className="support-panel"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
          >
            <strong>Assistenza clienti</strong>
            <p>Scegli il canale più rapido per contattarci.</p>
            <div className="support-actions">
              <a className="support-link" href={SUPPORT_PHONE ? `tel:${normalizeDigits(SUPPORT_PHONE)}` : '#contatti'} onClick={SUPPORT_PHONE ? undefined : scrollToSection('#contatti')}>
                <PhoneCall size={15} />
                <span>Chiamata</span>
              </a>
              <a
                className="support-link"
                href={
                  SUPPORT_WHATSAPP
                    ? `https://wa.me/${normalizeDigits(SUPPORT_WHATSAPP).replace('+', '')}?text=${encodeURIComponent('Ciao, vorrei maggiori informazioni su Educta Solutions.')}`
                    : SUPPORT_PHONE
                      ? `https://wa.me/${normalizeDigits(SUPPORT_PHONE).replace('+', '')}?text=${encodeURIComponent('Ciao, vorrei maggiori informazioni su Educta Solutions.')}`
                      : '#contatti'
                }
                target={SUPPORT_WHATSAPP || SUPPORT_PHONE ? '_blank' : undefined}
                rel={SUPPORT_WHATSAPP || SUPPORT_PHONE ? 'noreferrer' : undefined}
                onClick={SUPPORT_WHATSAPP || SUPPORT_PHONE ? undefined : scrollToSection('#contatti')}
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
              <a className="support-link" href="#contatti" onClick={scrollToSection('#contatti')}>
                <ArrowRight size={15} />
                <span>Form contatti</span>
              </a>
              <a className="support-link" href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Richiesta informazioni Educta Solutions')}`}>
                <Mail size={15} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        )}
        <button type="button" className="support-fab" onClick={() => setHelpOpen((prev) => !prev)}>
          <CircleHelp size={18} />
          <span>Aiuto</span>
        </button>
      </div>

      <a className="floating-demo" href="#contatti">⚡ Prenota Demo</a>
      <CookieBanner />
    </div>
  )
}

export default App
