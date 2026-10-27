import { ArrowUpRight } from 'lucide-react'
import { Brand } from './Brand'

export function Navbar({ path }: { path: string }) {
  const isHome = path === '/'
  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="Main navigation">
        <a className="brand-link" href="/" aria-label="LunarPing home"><Brand /></a>
        <div className="nav-links">
          <a href="/app" aria-current={path === '/app' ? 'page' : undefined}>The app</a>
          <a href={isHome ? '#tools' : '/#tools'}>Tools</a>
          <a href={isHome ? '#about' : '/#about'}>About</a>
        </div>
        <a className="nav-cta" href={path === '/app' ? '#download' : '/app'}>{path === '/app' ? 'Android availability' : 'Explore the app'} <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" /></a>
      </nav>
    </header>
  )
}
