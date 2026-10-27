import { ArrowUpRight } from 'lucide-react'
import { Brand } from './Brand'

export function Footer({ copyrightYear }: { copyrightYear: number }) {
  return <footer className="site-footer"><div className="container">
    <div className="footer-main"><div><a href="/" className="brand-link" aria-label="LunarPing home"><Brand /></a><p>Curious by nature. Independent by choice.</p></div><nav aria-label="Footer navigation"><a href="/">Home</a><a href="/app">The app</a><a href="/#tools">Tools</a><a href="/#contact">Contact</a><a href="/app/privacy">App privacy</a><a href="https://shekharroy.com">The maker <ArrowUpRight size={13} aria-hidden="true" /></a></nav></div>
    <div className="footer-bottom"><span>© {copyrightYear} LunarPing · Shekhar Roy</span><span>MADE FOR THE CURIOUS.</span><a href="#top">BACK TO TOP ↑</a></div>
  </div></footer>
}
