import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { CelestialScene } from './CelestialScene'

export function Hero() {
  return (
    <section className="home-hero" id="top" aria-labelledby="hero-title">
      <div className="home-hero-grid container">
        <div className="home-hero-copy">
          <span className="eyebrow"><span className="tiny-orbit" aria-hidden="true" /> INDEPENDENT SOFTWARE. SHARED CURIOSITY.</span>
          <h1 id="hero-title">Made for the<br /><em>curious.</em></h1>
          <p className="home-intro">From the sky above you to the ideas in front of you. A home for thoughtful apps and useful little tools, by Shekhar Roy.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/app">Meet the LunarPing app <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className="text-link" href="#tools">Explore the tools <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <a href="/app" className="flagship-preview" aria-label="Explore LunarPing: Sky Map & Alarms">
          <div className="flagship-label"><span className="status-dot" /> 01 / THE FLAGSHIP APP <ArrowUpRight size={17} aria-hidden="true" /></div>
          <CelestialScene compact />
          <div className="flagship-product"><img src="/app/icon.webp" width="56" height="56" alt="" /><div><span>LunarPing</span><h2>Sky Map &amp; Alarms</h2></div><ArrowUpRight size={23} aria-hidden="true" /></div>
          <p className="flagship-tagline">Explore the 360° sky, find celestial objects with your camera &amp; set sky alarms.</p>
        </a>
      </div>
      <div className="home-hero-bottom container"><span>ONE HOME. A WORLD TO EXPLORE.</span><a href="#tools">THE TOOL COLLECTION <ArrowDown size={14} aria-hidden="true" /></a></div>
    </section>
  )
}
