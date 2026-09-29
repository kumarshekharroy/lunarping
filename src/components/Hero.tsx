import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { OrbitVisual } from './OrbitVisual'
import { tools } from '../data/tools'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-star" aria-hidden="true">✳</span> INDEPENDENT TOOLS · USEFUL IDEAS</div>
          <h1 id="hero-title">Useful tools for the <em>corners</em> of the internet<span className="hero-stop">.</span></h1>
          <p className="hero-description">LunarPing is a growing collection of focused web apps — from developer utilities and interview prep to productivity tools and experiments.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#tools">Explore tools <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className="button button-secondary" href="#about">About LunarPing <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          <div className="hero-note"><span className="hero-note-rule" /> ONE HOME. MANY USEFUL TOOLS.</div>
        </div>
        <OrbitVisual />
      </div>
      <div className="hero-bottom container" aria-hidden="true"><span>THE COLLECTION / 001—{String(tools.length).padStart(3, '0')}</span><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span></div>
    </section>
  )
}
