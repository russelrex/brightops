import { TECH_STACK } from '../data/content'
import { ToolIcon } from './ToolIcon'

export function TechStackSection() {
  return (
    <section className="services2 techStack" id="tech-stack">
      <div className="sectionHead">
        <div>
          <span className="kicker">§ 02 · TECH STACK</span>
          <h2 className="sectionTitle">
            Tools &amp; Technologies We <em>Use</em>
          </h2>
        </div>
        <div>
          <p className="sectionHead__note">
            Modern development tools plus the business platforms we configure for
            CRM, automation, funnels, and operations.
          </p>
        </div>
      </div>
      <div className="services2__rows">
        {TECH_STACK.map((cat) => (
          <article className="srv2 srv2--tools" key={cat.code}>
            <div>
              <span className="srv2__code">{cat.code}</span>
            </div>
            <div>
              <h3 className="srv2__title">{cat.title}</h3>
            </div>
            <div>
              <ul className="toolGrid">
                {cat.tools.map((tool) => (
                  <li key={tool}>
                    <ToolIcon name={tool} />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
