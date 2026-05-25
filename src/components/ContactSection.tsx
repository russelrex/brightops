import { useState, type ChangeEvent } from 'react'
import { CONTACT_INTERESTS } from '../data/content'

interface ContactForm {
  name: string
  email: string
  interest: string
  note: string
}

export function ContactSection() {
  const [field, setField] = useState<ContactForm>({
    name: '',
    email: '',
    interest: CONTACT_INTERESTS[0],
    note: '',
  })

  const set =
    (key: keyof ContactForm) =>
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setField((prev) => ({ ...prev, [key]: e.target.value }))
    }

  return (
    <section className="contact2" id="contact">
      <div className="contact2__inner">
        <div>
          <span className="kicker kicker--light">§ 07 · CONTACT</span>
          <h2 className="contact2__title">
            Need a smarter system for your <em>business</em>?
          </h2>
          <p className="contact2__lede">
            Whether you need a website, CRM, automation, funnel, app, or full
            digital operations setup, BrightOps Digital can help you build it from
            idea to launch.
          </p>
          <div className="contact2__lines">
            <div className="contact2__line">
              <span>EMAIL</span>
              <span>
                <a href="mailto:hello@brightopsdigital.com">
                  hello@brightopsdigital.com
                </a>
              </span>
            </div>
            <div className="contact2__line">
              <span>TEAM</span>
              <span>Two-partner startup · Dev + Ops</span>
            </div>
            <div className="contact2__line">
              <span>RESPONSE</span>
              <span>Within 1 business day</span>
            </div>
          </div>
          <div className="contact2__actions">
            <a href="#contact" className="btn2 btn2--solid contact2__btn">
              Book a Consultation →
            </a>
            <a href="#contact" className="btn2 btn2--ghost contact2__btn contact2__btn--light">
              Start a Project
            </a>
          </div>
        </div>
        <form
          className="contact2__form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form__field">
            <label htmlFor="contact-name">FULL NAME</label>
            <input
              id="contact-name"
              value={field.name}
              onChange={set('name')}
              placeholder="Alex Morgan"
            />
          </div>
          <div className="form__field">
            <label htmlFor="contact-email">EMAIL</label>
            <input
              id="contact-email"
              value={field.email}
              onChange={set('email')}
              placeholder="alex@company.com"
            />
          </div>
          <div className="form__field">
            <label htmlFor="contact-interest">PROJECT TYPE</label>
            <select
              id="contact-interest"
              value={field.interest}
              onChange={set('interest')}
            >
              {CONTACT_INTERESTS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="form__field form__field--full">
            <label htmlFor="contact-note">PROJECT DETAILS</label>
            <textarea
              id="contact-note"
              rows={4}
              value={field.note}
              onChange={set('note')}
              placeholder="Tell us what you need — website, CRM, automation, app, or full setup."
            />
          </div>
          <button type="submit" className="form__submit">
            Submit inquiry →
          </button>
        </form>
      </div>
    </section>
  )
}
