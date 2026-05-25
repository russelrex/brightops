import { TEAM } from '../data/content'

export function TeamSection() {
  return (
    <section className="team2" id="team">
      <div className="sectionHead">
        <div>
          <span className="kicker">§ 06 · MEET THE TEAM</span>
          <h2 className="sectionTitle">
            Two partners.
            <br />
            <em>One mission.</em>
          </h2>
        </div>
        <div>
          <p className="sectionHead__note">
            BrightOps Digital is a focused two-partner studio. No outsourcing, no
            account managers — you work directly with the people who build and run
            your systems.
          </p>
        </div>
      </div>

      <div className="services2__rows team2__rows">
        {TEAM.map((member) => (
          <article className="srv2 srv2--team" key={member.code}>
            <div className="srv2__codeCol">
              <span className="srv2__code">{member.code}</span>
              <span className="srv2__partnerLabel">{member.label}</span>
            </div>
            <div className="srv2__contentCol">
              <h3 className="srv2__name">{member.name}</h3>
              <p className="srv2__role">{member.role}</p>
              <p className="srv2__body">{member.bio}</p>
              <ul className="srv2__respList">
                {member.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="srv2__photo">
              <div className="srv2__photoFrame">
                <img src={member.image} alt={member.name} loading="lazy" />
                <div className="heroB__crosshair heroB__crosshair--tl" />
                <div className="heroB__crosshair heroB__crosshair--tr" />
                <div className="heroB__crosshair heroB__crosshair--bl" />
                <div className="heroB__crosshair heroB__crosshair--br" />
                <div className="srv2__caption">
                  <span>{member.figureLabel}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="teamBand">
        <span className="teamBand__text">
          A two-partner team — zero bloat, all output.
        </span>
        <a href="#contact" className="btn2 btn2--solid">
          Work With Us →
        </a>
      </div>
    </section>
  )
}
