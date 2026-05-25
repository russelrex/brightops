import { WHY_POINTS } from '../data/content'

export function WhySection() {
  return (
    <section className="why2" id="why">
      <div className="sectionHead">
        <div>
          <span className="kicker">§ 05 · WHY US</span>
          <h2 className="sectionTitle">Why BrightOps Digital</h2>
        </div>
        <div>
          <p className="sectionHead__note">
            A startup team built for businesses that need real systems — not just
            pretty pages.
          </p>
        </div>
      </div>
      <ul className="why2__list">
        {WHY_POINTS.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  )
}
