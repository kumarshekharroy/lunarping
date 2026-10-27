import { AlarmClock, ArrowDown, ArrowRight, ArrowUpRight, Camera, Check, Compass, Globe2, MapPin, Moon, Orbit, ShieldCheck, Sunrise, WifiOff } from 'lucide-react'
import { CelestialScene } from '../components/CelestialScene'
import { app } from '../data/app'

function SkyDiagram() {
  return <figure className="sky-diagram"><svg viewBox="0 0 620 430" fill="none" role="img" aria-label="Illustrated celestial navigation chart with a selected target">
    <defs><radialGradient id="chart-atmosphere"><stop stopColor="#293e4d" stopOpacity=".6" /><stop offset="1" stopColor="#101a22" stopOpacity="0" /></radialGradient></defs>
    <ellipse cx="310" cy="220" rx="290" ry="200" fill="url(#chart-atmosphere)" />
    <g stroke="#7290a4" strokeOpacity=".13"><ellipse cx="310" cy="500" rx="300" ry="340" /><ellipse cx="310" cy="500" rx="180" ry="340" /><path d="M0 301q310-150 620 0M0 380q310-100 620 0M310 60v360" /></g>
    <g stroke="#9cb9c6" strokeOpacity=".45"><path d="m81 144 83-40 69 70-34 76 107 47 91-65 103 39M233 174l80-68 75 20 49-63M397 232l-9-106" /></g>
    <g fill="#b6ccd5">{[[81,144],[164,104],[233,174],[199,250],[306,297],[397,232],[500,271],[313,106],[388,126],[437,63]].map(([cx,cy],i) => <circle key={i} cx={cx} cy={cy} r={i%3 === 0 ? 3.5 : 2} />)}</g>
    <g stroke="#e6ba7c"><circle cx="397" cy="232" r="23" strokeOpacity=".5" /><path d="M397 198v12M397 254v12M363 232h12M419 232h12" /><path d="m420 247 37 23h69" strokeOpacity=".6" /></g>
    <text x="467" y="259" fill="#e6ba7c" fontSize="12" fontFamily="monospace">FIND YOUR TARGET</text>
    <path d="M25 367q285-25 570 0" stroke="#748a98" strokeOpacity=".4" />
    <text x="26" y="394" fill="#8c9da8" fontSize="11" fontFamily="monospace">E</text><text x="580" y="394" fill="#8c9da8" fontSize="11" fontFamily="monospace">S</text>
  </svg><figcaption>Celestial navigation illustration</figcaption></figure>
}

export function AppPage() {
  return <>
    <section className="app-hero" id="top" aria-labelledby="app-title">
      <div className="container app-hero-grid">
        <div className="app-hero-copy">
          <div className="app-identity"><img src="/app/icon.webp" width="52" height="52" alt="LunarPing app icon" /><span>LUNARPING<br /><strong>SKY MAP &amp; ALARMS</strong></span></div>
          <h1 id="app-title">The sky is closer<br />than you <em>think.</em></h1>
          <p className="app-official-tagline">{app.tagline}</p>
          <p className="app-hero-description">A sky explorer, celestial finder, and astronomical alarm clock. All in your pocket.</p>
          <div className="hero-actions"><a className="button button-primary" href={app.downloadUrl ?? '#download'}>{app.downloadUrl ? 'Download for Android' : 'Android availability'} <ArrowUpRight size={18} aria-hidden="true" /></a><a className="text-link" href="#experience">Discover the app <ArrowDown size={16} aria-hidden="true" /></a></div>
          <p className="app-release-note">{app.downloadUrl ? 'Made for Android.' : 'Public download link coming soon.'} Built by Shekhar Roy.</p>
        </div>
        <CelestialScene interactive />
      </div>
      <div className="app-chapter-nav container"><a href="#sky-map"><Orbit size={18} aria-hidden="true" /><span>01 / EXPLORE THE SKY</span><ArrowDown size={14} aria-hidden="true" /></a><a href="#camera"><Compass size={18} aria-hidden="true" /><span>02 / FIND YOUR WAY</span><ArrowDown size={14} aria-hidden="true" /></a><a href="#alarms"><AlarmClock size={18} aria-hidden="true" /><span>03 / MAKE TIME FOR IT</span><ArrowDown size={14} aria-hidden="true" /></a></div>
    </section>

    <section className="experience-intro container" id="experience" aria-labelledby="experience-title"><span className="section-kicker">YOUR POCKET OBSERVATORY</span><h2 id="experience-title">Look up.<br /><span>There’s a lot to discover.</span></h2><p>Follow a familiar Moon. Find a planet you’ve never noticed. Be there before the Sun rises. LunarPing connects a little everyday curiosity to the sky around you.</p></section>

    <section className="app-feature-section" id="sky-map" aria-labelledby="map-title"><div className="container feature-split">
      <div className="feature-copy"><span className="feature-number">01 / INTERACTIVE 360° SKY MAP</span><h2 id="map-title">A whole sky.<br /><em>Your point of view.</em></h2><p>Pan, rotate, and zoom through the sky, or let the map follow your phone’s orientation. Select an object to learn more, locate it, and keep multiple targets in view.</p><p>Change the date and observing location to explore a different sky.</p><ul className="feature-tags"><li>Planets</li><li>Stars</li><li>Constellations</li><li>Deep-sky objects</li></ul></div>
      <SkyDiagram />
    </div></section>

    <section className="app-feature-section camera-section" id="camera" aria-labelledby="camera-title"><div className="container feature-split feature-split-reverse">
      <div className="finder-illustration" role="img" aria-label="Illustration of directional guidance toward a celestial target"><span className="finder-corner corner-tl" /><span className="finder-corner corner-tr" /><span className="finder-corner corner-bl" /><span className="finder-corner corner-br" /><div className="finder-target"><span /><i /><Moon size={32} strokeWidth={1} aria-hidden="true" /></div><span className="finder-arrow"><ArrowRight size={30} strokeWidth={1} aria-hidden="true" /></span><div className="finder-caption"><Camera size={17} aria-hidden="true" /> DIRECTION. ALTITUDE. ALIGNMENT.</div><small>Directional guidance illustration</small></div>
      <div className="feature-copy"><span className="feature-number">02 / LIVE CAMERA FINDER</span><h2 id="camera-title">From “where is it?”<br /><em>to “there it is.”</em></h2><p>Use your phone’s camera to find a celestial object. Follow directional arrows and alignment guidance as you turn and tilt toward your target.</p><p>Move between the sky map and camera finder, with compass and motion sensors helping you orient yourself.</p><p className="feature-footnote">Guidance depends on your device’s sensors and calibration. Never look directly at the Sun.</p></div>
    </div></section>

    <section className="alarm-story" id="alarms" aria-labelledby="alarm-title"><div className="container alarm-story-grid">
      <div className="feature-copy"><span className="feature-number">03 / ASTRONOMICAL ALARMS</span><h2 id="alarm-title">The sky has a rhythm.<br /><em>Wake up to it.</em></h2><p>Set an alarm for sunrise, sunset, moonrise, or moonset. Choose an advance reminder, or let a recurring alarm follow the changing time of the event.</p><p>Make it yours with sounds, vibration, and snooze settings.</p><span className="alarm-note"><AlarmClock size={17} aria-hidden="true" /> A time that follows the sky.</span></div>
      <figure className="sunrise-illustration"><svg viewBox="0 0 560 310" fill="none" role="img" aria-label="Illustrated sunrise arc with a reminder before the horizon crossing"><defs><linearGradient id="dawn-fill" x1="280" y1="90" x2="280" y2="275" gradientUnits="userSpaceOnUse"><stop stopColor="#d9aa68" stopOpacity=".22" /><stop offset="1" stopColor="#d9aa68" stopOpacity="0" /></linearGradient></defs><path d="M70 258q210-335 420 0Z" fill="url(#dawn-fill)" /><path d="M25 258H535" stroke="#d7cebd" /><path d="M70 258q210-335 420 0" stroke="#a66b32" strokeWidth="2" /><path d="M20 292 70 258M490 258l50 34" stroke="#b9ae9e" strokeDasharray="4 6" /><circle cx="163" cy="142" r="23" fill="#f3e2c6" /><circle cx="163" cy="142" r="12" fill="#b87d3a" /><path d="M163 110v-9M163 174v9M131 142h-9M195 142h9M140 119l-7-7M186 165l7 7M140 165l-7 7M186 119l7-7M163 183v75" stroke="#b87d3a" strokeOpacity=".5" /><circle cx="70" cy="258" r="5" fill="#a66b32" /></svg><figcaption><span><Sunrise size={18} aria-hidden="true" /> BEFORE THE MOMENT</span><span>AT THE EVENT <ArrowRight size={16} aria-hidden="true" /></span></figcaption><small>Illustrative event arc · no live timings</small></figure>
    </div><p className="container alarm-platform-note">Alarm delivery depends on Android permissions, battery settings, and device conditions.</p></section>

    <section className="more-features container" aria-label="Events and offline exploration">
      <article className="more-feature"><span className="feature-number">04 / CELESTIAL EVENTS</span><Orbit className="feature-large-icon" size={42} strokeWidth={1} aria-hidden="true" /><h2>A little wonder.<br />On the horizon.</h2><p>Discover eclipses, planetary conjunctions, solstices, equinoxes, and meteor showers. Explore event details and local timings, then set an alarm for the moment.</p><p className="feature-footnote">Meteor-shower forecasts currently cover 2026. Local visibility and conditions vary.</p><div className="event-types"><span>Eclipses</span><span>Planetary conjunctions</span><span>Meteor showers</span></div></article>
      <article className="more-feature"><span className="feature-number">05 / LOCATION &amp; OFFLINE EXPLORATION</span><Globe2 className="feature-large-icon" size={42} strokeWidth={1} aria-hidden="true" /><h2>Go a little further.<br />Even offline.</h2><p>Use your current location or enter coordinates yourself. Explore the sky from another place, with astronomical times in the relevant local time zone.</p><ul className="offline-list"><li><WifiOff size={17} aria-hidden="true" /> Core sky calculations work offline</li><li><MapPin size={17} aria-hidden="true" /> Manual coordinates or device location</li><li><ShieldCheck size={17} aria-hidden="true" /> Optional online services stay optional</li></ul></article>
    </section>

    <section className="app-questions container" aria-labelledby="questions-title"><div><span className="section-kicker">A FEW THINGS TO KNOW</span><h2 id="questions-title">Before you look up.</h2></div><div className="faq-list">
      <details><summary>Does LunarPing work without internet?</summary><p>The core sky map, astronomical calculations, saved places, and alarms work offline. Optional place-name lookup and online services need a connection.</p></details>
      <details><summary>Do I need to give location or camera access?</summary><p>You can enter coordinates manually without location permission. Camera access is needed for the live Camera Finder. The sky map remains available without a camera preview.</p></details>
      <details><summary>What happens to my camera images?</summary><p>Camera Finder uses a live preview. The app does not record, save, or upload camera images. Read the <a href="/app/privacy">full privacy policy</a> for details about location, optional services, and your choices.</p></details>
      <details><summary>Where can I download the app?</summary><p>{app.downloadUrl ? <a href={app.downloadUrl}>Download LunarPing for Android.</a> : 'A verified public download link is not available here yet. It will appear in the Android release section when the listing is ready.'}</p></details>
    </div></section>

    <section className="app-download" id="download" aria-labelledby="download-title"><div className="container"><img src="/app/icon.webp" width="72" height="72" alt="" loading="lazy" /><span className="section-kicker">LUNARPING: SKY MAP &amp; ALARMS</span><h2 id="download-title">Your next reason<br /><em>to look up.</em></h2><p>{app.downloadUrl ? 'Take your curiosity outside. Explore the sky with LunarPing for Android.' : 'Made for Android. A public download link will be added here when the store listing is available.'}</p>{app.downloadUrl ? <a className="button button-primary" href={app.downloadUrl}>Download for Android <ArrowUpRight size={18} aria-hidden="true" /></a> : <span className="release-status"><span className="status-dot" /> DOWNLOAD LINK COMING SOON</span>}<div className="download-links"><a href={`mailto:${app.contact}`}>Contact the developer <ArrowUpRight size={14} aria-hidden="true" /></a><a href="/app/privacy">App privacy <Check size={14} aria-hidden="true" /></a></div></div></section>
    <aside className="ecosystem-link container"><span>More from the same curious corner of the internet.</span><a className="text-link" href="/#tools">Explore the LunarPing tools <ArrowUpRight size={16} aria-hidden="true" /></a></aside>
  </>
}
