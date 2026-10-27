import { ArrowUpRight, Mail, Send } from 'lucide-react'
import { app } from '../data/app'

const subjects = [
  'Feedback & suggestions',
  'Bug report',
  'Help & support',
  'Privacy & data request',
  'Collaboration & enquiries',
  'Something else',
]

export function Contact() {
  return (
    <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-kicker"><span>05 / GET IN TOUCH</span><span className="kicker-line" /></div>
        <div className="contact-grid">
          <div className="contact-copy">
            <h2 id="contact-title">Say hello.<br /><em>Share a thought.</em></h2>
            <p>Found a rough edge, have an idea, or want to work together? Send a note to the person behind the apps and tools.</p>
            <a className="contact-email" href={`mailto:${app.contact}`}><Mail size={17} aria-hidden="true" /> {app.contact} <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <form className="contact-form" action={`https://formsubmit.co/${app.contact}`} method="POST" aria-label="Website contact and feedback" aria-describedby="contact-disclosure">
            <input type="hidden" name="_template" value="table" />
            <input className="contact-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="contact-field-row">
              <div className="contact-field"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="What should I call you?" required maxLength={100} /></div>
              <div className="contact-field"><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></div>
            </div>
            <div className="contact-field"><label htmlFor="contact-subject">Subject</label><select id="contact-subject" name="_subject" required defaultValue=""><option value="" disabled>What’s on your mind?</option>{subjects.map(subject => <option key={subject} value={`[LunarPing website] ${subject}`}>{subject}</option>)}</select></div>
            <div className="contact-field"><label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" rows={5} placeholder="Tell me a little more…" required minLength={10} maxLength={5000} aria-describedby="contact-message-hint" /><span id="contact-message-hint" className="contact-hint">For an issue, include the app or tool name and what happened.</span></div>
            <p id="contact-disclosure" className="contact-disclosure">Your details and message are sent via <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">FormSubmit</a> to Shekhar Roy so I can respond.</p>
            <button className="button button-primary contact-submit" type="submit">Send message <Send size={16} aria-hidden="true" /></button>
          </form>
        </div>
      </div>
    </section>
  )
}
