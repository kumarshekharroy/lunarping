import { tools } from '../data/tools'

const placements = ['endpoint', 'markdown', 'fullstack-prep', 'jobdesk', 'kundli']

export function OrbitVisual() {
  const orbitTools = [...tools].sort((a, b) => a.priority - b.priority).slice(0, placements.length)

  return (
    <div className="orbit-visual" role="group" aria-label="Explore LunarPing tools">
      <div className="orbit-frame">
        <svg className="orbit-lines" viewBox="0 0 600 600" fill="none" aria-hidden="true">
          <circle cx="300" cy="300" r="236" stroke="currentColor" strokeWidth="1" opacity=".18" />
          <circle cx="300" cy="300" r="176" stroke="currentColor" strokeWidth="1" opacity=".12" />
          <ellipse cx="300" cy="300" rx="260" ry="117" transform="rotate(-29 300 300)" stroke="currentColor" strokeWidth="1.2" opacity=".38" />
          <ellipse cx="300" cy="300" rx="258" ry="119" transform="rotate(48 300 300)" stroke="currentColor" strokeWidth="1" opacity=".23" />
          <path d="M300 36V564M36 300H564" stroke="currentColor" strokeWidth="1" opacity=".08" />
          <path d="M290 64h20M290 536h20M64 290v20M536 290v20" stroke="currentColor" strokeWidth="1" opacity=".4" />
          <circle cx="300" cy="300" r="116" stroke="#81DFE6" strokeWidth="1" strokeDasharray="2 9" opacity=".22" />
        </svg>
        <span className="orbit-coordinate orbit-coordinate-top" aria-hidden="true">51° 30′ N</span>
        <span className="orbit-coordinate orbit-coordinate-bottom" aria-hidden="true">SIGNAL / FOUND</span>
        <span className="orbit-spark orbit-spark-one" aria-hidden="true" /><span className="orbit-spark orbit-spark-two" aria-hidden="true" /><span className="orbit-spark orbit-spark-three" aria-hidden="true" />
        <a className="orbit-core" href="#tools" aria-label="Explore LunarPing tools">
          <div className="orbit-core-ring" />
          <div className="orbit-core-inner">
            <span className="orbit-core-icon">◕</span>
            <span className="orbit-core-name">LUNAR<br />PING</span>
            <span className="orbit-core-sub">HOME / 00</span>
          </div>
        </a>
        {orbitTools.map((tool, index) => (
          <a className={`orbit-node orbit-node-${placements[index]}`} href={tool.url} aria-label={`Open ${tool.name}`} key={tool.slug}>
            <span className="orbit-node-dot"><span /></span>
            <span className="orbit-node-name">{tool.name}</span>
          </a>
        ))}
        <span className="orbit-pulse orbit-pulse-one" aria-hidden="true" /><span className="orbit-pulse orbit-pulse-two" aria-hidden="true" />
      </div>
    </div>
  )
}
