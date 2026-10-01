import { ArrowUpRight } from 'lucide-react'
import { Brand } from './Brand'

export function Footer({ copyrightYear }: { copyrightYear: number }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main"><div><a href="#top" className="brand-link" aria-label="LunarPing, back to top"><Brand /></a><p>Independent web tools by Shekhar Roy.</p></div><nav aria-label="Footer navigation"><a href="#tools">Tools</a><a href="#about">About</a><a href="#creator">Creator <ArrowUpRight size={13} aria-hidden="true" /></a></nav></div>
        <div className="footer-bottom"><span>© {copyrightYear} LunarPing</span><span>ONE HOME. MANY USEFUL TOOLS.</span><a href="#top">BACK TO TOP ↑</a></div>
      </div>
    </footer>
  )
}
