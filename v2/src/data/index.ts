import {
  CalendarDays,
  Users,
  FileText,
  BellRing,
  Bot,
  Gauge,
  type LucideIcon,
} from 'lucide-react'

export const automationItems = [
  'Import PDF Sistema 1420 con preview',
  'Moduli presenze e valutazioni per corso',
  'Permessi granulari per ruolo',
  'Dashboard KPI e stato corsi live',
  'Audit log completo operazioni',
  'Calendario lezioni con docenti e tutor',
  'Gestione documenti e scadenze',
  'Anagrafiche corsisti centralizzate',
]

export const solutionItems = [
  {
    title: 'Enti finanziati (FSE/Avvisi)',
    text: 'Gestisci classi, docenti, tutor, corsisti e adempimenti con una logica unica e controllata.',
  },
  {
    title: 'Academy aziendali',
    text: 'Organizza calendario, presenze e valutazioni senza fogli sparsi o flussi manuali.',
  },
  {
    title: 'Scuole professionali multi-sede',
    text: 'Controllo per team e sedi con visibilità chiara su corsi, utenti e performance.',
  },
]

export interface FeatureItem {
  icon: LucideIcon
  title: string
  text: string
}

export const featureItems: FeatureItem[] = [
  {
    icon: CalendarDays,
    title: 'Calendario corsi e lezioni',
    text: 'Pianificazione lezioni, ore, docenti e tutor con vista operativa unificata.',
  },
  {
    icon: Users,
    title: 'RBAC e anagrafiche',
    text: 'Permessi granulari per ruolo con gestione utenti e corsisti in sicurezza.',
  },
  {
    icon: FileText,
    title: 'Documenti e conformità',
    text: 'Archivio documentale, scadenze e protocolli sempre tracciabili.',
  },
  {
    icon: BellRing,
    title: 'Alert attività critiche',
    text: 'Notifiche su scadenze, lezioni e stati da verificare.',
  },
  {
    icon: Bot,
    title: 'Import automatico Sistema 1420',
    text: 'Upload PDF, preview guidata e commit controllato con audit riga per riga.',
  },
  {
    icon: Gauge,
    title: 'Dashboard e monitoraggio',
    text: 'KPI di avanzamento corsi per decisioni rapide e fondate.',
  },
]
