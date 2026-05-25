import { PROCESS_STEPS } from '../data/content'

export function ProcessSection() {
  return (
    <section className="services2 process2" id="process">
      <div className="sectionHead">
        <div>
          <span className="kicker">§ 03 · PROCESS</span>
          <h2 className="sectionTitle">How We Work</h2>
        </div>
        <div>
          <p className="sectionHead__note">
            From discovery to optimization — a clear path from idea to a system
            your team can actually use.
          </p>
        </div>
      </div>
      <div className="services2__rows">
        {PROCESS_STEPS.map((step) => (
          <article className="srv2" key={step.num}>
            <div>
              <span className="srv2__code">{step.num}</span>
            </div>
            <div>
              <h3 className="srv2__title">{step.title}</h3>
              <p className="srv2__body">{step.body}</p>
            </div>
            <div aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  )
}
