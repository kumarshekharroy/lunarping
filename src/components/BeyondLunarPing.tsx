import { ArrowUpRight, Hammer } from 'lucide-react'

export function BeyondLunarPing() {
  return (
    <section className="beyond-section section-shell" aria-labelledby="beyond-title">
      <div className="container">
        <div className="section-kicker"><span>03 / ELSEWHERE</span><span className="kicker-line" /></div>
        <div className="section-heading-row beyond-heading"><div><h2 id="beyond-title">Beyond <span>LunarPing</span></h2><p>A separate product from the same maker.</p></div></div>
        <a className="beyond-feature" href="https://kitnalagega.com" aria-label="Visit Kitna Lagega, a standalone construction and renovation cost estimator">
          <span className="beyond-feature-icon"><Hammer size={24} strokeWidth={1.5} aria-hidden="true" /></span>
          <div className="beyond-feature-copy">
            <span className="beyond-feature-type">INDEPENDENT PRODUCT</span>
            <h3 className="beyond-feature-title">Kitna Lagega</h3>
            <span className="beyond-feature-description">A standalone construction and renovation cost estimator.</span>
          </div>
          <span className="beyond-feature-cta">Visit Kitna Lagega <ArrowUpRight size={18} aria-hidden="true" /></span>
        </a>
      </div>
    </section>
  )
}
