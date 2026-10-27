import { useEffect } from 'react'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ToolGrid } from './components/ToolGrid'
import { ProductHighlight } from './components/ProductHighlight'
import { AppPage } from './pages/AppPage'
import { PrivacyPage } from './pages/PrivacyPage'

export function normalizePath(path: string) {
  return path.split('?')[0].replace(/\/+$/, '').replace(/\/index\.html$/, '') || '/'
}

function App({ path = '/', copyrightYear = new Date().getFullYear() }: { path?: string; copyrightYear?: number }) {
  const route = normalizePath(path)
  useEffect(() => {
    // In development, React mounts after the browser's initial fragment lookup.
    // Also honor cross-page links such as /#tools once their content exists.
    if (!window.location.hash) return
    let target = window.location.hash.slice(1)
    try { target = decodeURIComponent(target) } catch { /* Keep a literal malformed fragment. */ }
    document.getElementById(target)?.scrollIntoView()
  }, [])
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar path={route} />
    <main id="main">
      {route === '/' ? <><Hero /><ProductHighlight /><ToolGrid /><About /></> : route === '/app' ? <AppPage /> : route === '/app/privacy' ? <PrivacyPage /> : <section id="top" className="not-found container"><span className="section-kicker">LUNARPING / 404</span><h1>This page is out of orbit.</h1><p>Head home to explore the app and tool collection.</p><a className="button button-primary" href="/">Back to LunarPing →</a></section>}
    </main>
    <Footer copyrightYear={copyrightYear} />
  </>
}
export default App
