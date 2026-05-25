import { BrandMark } from './BrandMark'

export function Footer() {
  return (
    <footer className="foot2">
      <div className="foot2__top">
        <div className="foot2__brand">
          <BrandMark size={44} />
          <div>
            <div className="foot2__name">BrightOps Digital</div>
            <div className="foot2__tag">
              Smarter systems. Stronger businesses.
            </div>
          </div>
        </div>
        <div className="foot2__cols">
          <div>
            <span className="foot2__h">Services</span>
            <a href="#services">Full Stack Development</a>
            <a href="#services">Mobile Development</a>
            <a href="#services">Automation</a>
            <a href="#services">CRM Setup</a>
            <a href="#services">Funnels</a>
            <a href="#services">Operations Systems</a>
          </div>
          <div>
            <span className="foot2__h">Tools</span>
            <a href="#tech-stack">React</a>
            <a href="#tech-stack">Next.js</a>
            <a href="#tech-stack">Node.js</a>
            <a href="#tech-stack">GoHighLevel</a>
            <a href="#tech-stack">Zapier</a>
            <a href="#tech-stack">Shopify</a>
            <a href="#tech-stack">WordPress</a>
          </div>
          <div>
            <span className="foot2__h">Company</span>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
            <a href="#contact">Book a Consultation</a>
          </div>
        </div>
      </div>
      <div className="foot2__base">
        <span>© 2026 BrightOps Digital.</span>
        <span>hello@brightopsdigital.com</span>
        <span>STARTUP.HOMEPAGE.V2 — 2026</span>
      </div>
    </footer>
  )
}
