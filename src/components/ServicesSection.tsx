import { SERVICE_CARDS } from '../data/content'

export function ServicesSection() {
  return (
    <section className="services2" id="services">
      <div className="sectionHead">
        <div>
          <span className="kicker">§ 01 · SERVICES</span>
          <h2 className="sectionTitle">What We Build</h2>
        </div>
        <div>
          <p className="sectionHead__note">
            Websites, apps, automations, CRMs, funnels, and operations tools —
            built by a two-partner team that understands both development and
            day-to-day business execution.
          </p>
        </div>
      </div>
      <div className="services2__rows">
        {SERVICE_CARDS.map((s) => (
          <article className="srv2 srv2--service" key={s.code}>
            <div>
              <span className="srv2__code">{s.code}</span>
            </div>
            <div>
              <h3 className="srv2__title">{s.title}</h3>
              <p className="srv2__body">{s.body}</p>
            </div>
            <div className="srv2__media">
              <img src={s.image} alt="" loading="lazy" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
