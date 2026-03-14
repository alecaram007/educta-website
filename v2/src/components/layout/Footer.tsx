import { type MouseEvent } from 'react'

interface FooterProps {
  onOpenLegal: (title: string, url: string) => void
}

export function Footer({ onOpenLegal }: FooterProps) {
  const handleLegalClick = (title: string, url: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onOpenLegal(title, url)
  }

  return (
    <footer>
      <p>© {new Date().getFullYear()} Educta Solutions — All rights reserved.</p>
      <p className="legal-links">
        <a href="/privacy.html" onClick={handleLegalClick('Privacy Policy', '/privacy.html')}>Privacy Policy</a> · 
        <a href="/cookie-policy.html" onClick={handleLegalClick('Cookie Policy', '/cookie-policy.html')}>Cookie Policy</a> · 
        <a href="/terms.html" onClick={handleLegalClick('Termini di utilizzo', '/terms.html')}>Termini di utilizzo</a>
      </p>
    </footer>
  )
}
