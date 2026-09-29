import { ArrowUpRight } from 'lucide-react'
import { Brand } from './Brand'

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="Main navigation">
        <a className="brand-link" href="#top" aria-label="LunarPing, back to top"><Brand /></a>
        <div className="nav-links">
          <a href="#tools">Tools</a>
          <a href="#about">About</a>
          <a href="#creator">Creator</a>
        </div>
        <a className="nav-cta" href="#tools">Explore tools <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" /></a>
      </nav>
    </header>
  )
}
