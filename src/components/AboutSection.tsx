import { PARTNER_ROLES } from '../data/content'

export function AboutSection() {
  return (
    <section className="about2" id="about">
      <div className="sectionHead">
        <div>
          <span className="kicker">§ 04 · ABOUT</span>
          <h2 className="sectionTitle">
            Built by operators and <em>developers</em>.
          </h2>
        </div>
        <div>
          <p className="sectionHead__note about2__intro">
            BrightOps Digital combines technical development with real business
            operations. One side of the team focuses on planning, client
            communication, DevOps, appointment setting, advertising, and workflow
            strategy. The other side focuses on full stack development, websites,
            apps, databases, and system implementation. Together, we build
            digital systems that are practical, scalable, and easy for businesses
            to use.
          </p>
        </div>
      </div>
      <div className="about2__grid">
        {PARTNER_ROLES.map((p) => (
          <article className="about2__card" key={p.label}>
            <span className="about2__label">{p.label}</span>
            <p className="about2__focus">{p.focus}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
