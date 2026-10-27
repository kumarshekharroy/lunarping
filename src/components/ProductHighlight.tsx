import { ArrowUpRight, Globe2, Smartphone } from 'lucide-react'
import { kitna } from '../data/kitna'

export function ProductHighlight() {
  return <section className="secondary-product" aria-labelledby="kitna-title"><div className="container">
    <div className="secondary-product-card">
      <div className="secondary-product-copy"><div className="secondary-product-label"><span>02 / ANOTHER APP FROM THE MAKER</span><span className="product-platforms"><Globe2 size={12} aria-hidden="true" /> WEB <span aria-hidden="true">·</span> <Smartphone size={12} aria-hidden="true" /> ANDROID</span></div>
        <div className="secondary-product-brand"><img src="/products/kitna-lagega.svg" width="56" height="56" alt="" loading="lazy" /><div><h2 id="kitna-title">{kitna.name}</h2><p>{kitna.tagline}</p></div></div>
        <p className="secondary-product-description">{kitna.description}</p>
        <ul className="secondary-product-features" aria-label="Kitna Lagega features"><li>Saved measurements</li><li>Reusable layouts</li><li>Clear cost breakdowns</li></ul>
        <div className="secondary-product-actions">
          <a className="secondary-product-download" href={kitna.downloadUrl} aria-label="Get Kitna Lagega on Google Play"><Smartphone size={16} aria-hidden="true" /> Get it on Google Play <ArrowUpRight size={15} aria-hidden="true" /></a>
          <a className="secondary-product-cta" href={kitna.url}>Explore the website <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="layout-art" aria-hidden="true"><svg viewBox="0 0 300 220" fill="none"><defs><pattern id="layout-grid" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M18 0H0V18" stroke="#8fbba1" strokeOpacity=".08" /></pattern></defs><rect width="300" height="220" fill="url(#layout-grid)" /><g stroke="#9cb5a9" strokeWidth="2"><path d="M60 35h177v151H60V35ZM60 117h177M153 35v82M179 117v69" /><path d="M95 117h31M196 117h25M153 68v30" stroke="#152a26" strokeWidth="5" /></g><g stroke="#d0b57f" strokeOpacity=".7"><path d="M95 117V89a28 28 0 0 1 28 28M196 117v26a25 25 0 0 0 25-26" /><path d="M60 17h177M60 12v10M237 12v10M256 35v151M251 35h10M251 186h10" strokeWidth=".7" /></g><g fill="#92aa9f" fontFamily="monospace" fontSize="8"><text x="91" y="79">MEASURE</text><text x="177" y="79">REUSE</text><text x="92" y="159">ESTIMATE</text></g></svg></div>
    </div>
  </div></section>
}
