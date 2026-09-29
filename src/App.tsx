import { About } from './components/About'
import { BeyondLunarPing } from './components/BeyondLunarPing'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ToolGrid } from './components/ToolGrid'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <ToolGrid />
        <About />
        <BeyondLunarPing />
      </main>
      <Footer />
    </>
  )
}

export default App
