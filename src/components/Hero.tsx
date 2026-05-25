import { useEffect, useState } from 'react'
import { HERO_SPECS, MARQUEE_ITEMS } from '../data/content'

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="heroB" id="top">
      <div className={`heroB__grid ${loaded ? 'is-in' : ''}`}>
        <div className="heroB__col heroB__col--head">
          <div className="heroB__tag">
            <span className="dot" />
            <span>FILE / 2026.05.01 — BRIGHTOPS DIGITAL</span>
          </div>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              letterSpacing: '0.18em',
              color: 'var(--ink-soft)',
            }}
          >
            SHEET 01 / 07
          </div>
        </div>

        <div className="heroB__col heroB__col--title">
          <h1 className="heroB__title">
            <span className="heroB__line">Smarter digital</span>
            <span className="heroB__line">systems for</span>
            <span className="heroB__line">growing</span>
            <span className="heroB__line">businesses.</span>
          </h1>
        </div>

        <div className="heroB__col heroB__col--lede">
          <p className="heroB__lede">
            BrightOps Digital builds websites, apps, automations, CRMs, funnels,
            and operations systems that help businesses save time, work better,
            and grow faster.
          </p>
          <div className="heroB__ctas">
            <a href="#contact" className="btn2 btn2--solid">
              Book a Consultation
            </a>
            <a href="#services" className="btn2 btn2--ghost">
              Explore Services
            </a>
          </div>
        </div>

        <div className="heroB__col heroB__col--media">
          <div className="heroB__frame">
            <div className="heroB__crop">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=2000&q=85"
                alt="Software development workspace with laptop and code"
              />
            </div>
            <div className="heroB__crosshair heroB__crosshair--tl" />
            <div className="heroB__crosshair heroB__crosshair--tr" />
            <div className="heroB__crosshair heroB__crosshair--bl" />
            <div className="heroB__crosshair heroB__crosshair--br" />
            <div className="heroB__caption">
              <span>FIG. 01 — DEVELOPMENT WORKSPACE</span>
              <span>SCALE 1 : 1200</span>
            </div>
          </div>
        </div>

        <div className="heroB__col heroB__col--specs">
          {HERO_SPECS.map(([k, v, n]) => (
            <div className="spec" key={k}>
              <span className="spec__k">{k}</span>
              <span className="spec__v">{v}</span>
              <span className="spec__n">{n}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="heroB__marquee" aria-hidden="true">
        <div className="heroB__marqueeTrack">
          {Array.from({ length: 2 }, (_, repeat) =>
            MARQUEE_ITEMS.map((item) => (
              <span key={`${repeat}-${item}`}>{item}</span>
            )),
          )}
        </div>
      </div>
    </section>
  )
}
