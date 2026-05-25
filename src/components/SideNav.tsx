import { NAV_ITEMS } from '../data/content'
import { useClock } from '../hooks/useClock'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { Logo } from './Logo'

export function SideNav() {
  const clock = useClock()
  const progress = useScrollProgress()

  return (
    <aside className="sidenav">
      <div className="sidenav__top">
        <Logo variant="header" />
        <p className="brandmark__sub">TWO-PARTNER STARTUP / DEV + OPS</p>
      </div>
      <nav className="sidenav__menu">
        {NAV_ITEMS.map(([num, label, href]) => (
          <a key={num} href={href} className="sidenav__item">
            <span className="sidenav__num">{num}</span>
            <span className="sidenav__label">{label}</span>
          </a>
        ))}
      </nav>
      <div className="sidenav__foot">
        <div className="sidenav__progress" aria-hidden="true">
          <div
            className="sidenav__progressBar"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <div className="sidenav__meta">
          <span>REMOTE TEAM</span>
          <span>{clock}</span>
        </div>
        <div className="sidenav__meta">
          <span>DEV + OPS</span>
          <span>STARTUP</span>
        </div>
      </div>
    </aside>
  )
}
