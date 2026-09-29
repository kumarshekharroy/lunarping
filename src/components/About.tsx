import { ArrowUpRight, Crosshair, MoveUpRight, Radio } from 'lucide-react'

const principles = [
  { number: '01', title: 'Focused', description: 'One problem at a time, with the unnecessary bits left out.', icon: Crosshair },
  { number: '02', title: 'Fast', description: 'Easy to open, easy to understand, and quick to get useful work done.', icon: MoveUpRight },
  { number: '03', title: 'Evolving', description: 'An open-ended home where new ideas can take shape over time.', icon: Radio },
]

export function About() {
  return (
    <section className="about-section section-shell" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-kicker"><span>02 / THE THINKING</span><span className="kicker-line" /></div>
        <div className="about-main">
          <div className="about-title-block">
            <span className="about-signal" aria-hidden="true"><span /><span /><span /></span>
            <h2 id="about-title">Built because sometimes a <em>small tool</em> is enough<span>.</span></h2>
          </div>
          <div className="about-copy"><p>Not every idea needs to become a startup. LunarPing is a home for focused software — developer utilities, career apps, productivity tools, and the occasional experiment worth putting on the internet.</p><p>Some projects stay small. Some grow. They all begin with something useful.</p><a href="#tools">Find your next tool <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </div>
        <div className="principles">
          {principles.map(({ number, title, description, icon: Icon }) => (
            <div className="principle" key={title}><div className="principle-head"><span>{number} / 03</span><Icon size={21} strokeWidth={1.35} aria-hidden="true" /></div><h3>{title}</h3><p>{description}</p></div>
          ))}
        </div>
        <aside className="creator-note" id="creator" aria-labelledby="creator-title">
          <span className="creator-monogram" aria-hidden="true">SR</span>
          <div className="creator-note-copy">
            <span className="creator-note-label">THE PERSON BEHIND LUNARPING</span>
            <h3 id="creator-title">Shekhar Roy</h3>
            <p>Independent developer building the tools in this collection.</p>
          </div>
          <a href="https://shekharroy.com">View portfolio <ArrowUpRight size={16} aria-hidden="true" /></a>
        </aside>
      </div>
    </section>
  )
}
