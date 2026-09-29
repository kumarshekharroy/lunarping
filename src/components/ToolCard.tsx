import { ArrowUpRight, Braces, BriefcaseBusiness, FileText, GraduationCap, MoonStar, Shapes } from 'lucide-react'
import type { LunarTool } from '../types/tool'

const icons = {
  endpoint: Braces,
  markdown: FileText,
  'fullstack-prep': GraduationCap,
  jobdesk: BriefcaseBusiness,
  kundli: MoonStar,
}

function CardArtwork({ slug }: { slug: string }) {
  switch (slug) {
    case 'endpoint':
      return <div className="card-art card-art-endpoint" aria-hidden="true"><span className="endpoint-method">GET</span><span className="endpoint-route">/v1/hello-world</span><span className="endpoint-status">200 OK</span><i /><i /><i /></div>
    case 'markdown':
      return <div className="card-art card-art-markdown" aria-hidden="true"><span># Make something<br /><b>useful_</b></span><i /><i /><i /></div>
    case 'fullstack-prep':
      return <div className="card-art card-art-prep" aria-hidden="true"><span>01</span><i /><i /><i /><span>02</span></div>
    case 'jobdesk':
      return <div className="card-art card-art-jobdesk" aria-hidden="true"><i /><i /><i /><span>●</span></div>
    case 'kundli':
      return <div className="card-art card-art-kundli" aria-hidden="true"><i /><i /><i /><span>✧</span></div>
    default:
      return <div className="card-art card-art-default" aria-hidden="true"><Shapes size={72} strokeWidth={.8} /></div>
  }
}

export function ToolCard({ tool, number, total, featuredLayout }: { tool: LunarTool; number: number; total: number; featuredLayout: boolean }) {
  const Icon = icons[tool.slug as keyof typeof icons] ?? Shapes

  return (
    <a className={`tool-card tool-card-${tool.slug} ${featuredLayout && tool.featured ? 'tool-card-featured' : ''}`} href={tool.url} aria-label={`Open ${tool.name}, ${tool.description}`}>
      <CardArtwork slug={tool.slug} />
      <div className="tool-card-head">
        <span className="tool-icon"><Icon size={22} strokeWidth={1.65} aria-hidden="true" /></span>
        <span className="tool-number">{String(number).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      </div>
      <div className="tool-card-content">
        <span className="tool-category"><span className="category-dot" />{tool.category} <span className="category-separator">/</span> {tool.status === 'beta' ? 'Beta' : 'Live'}</span>
        <h3>{tool.name}</h3>
        <p>{tool.description}</p>
        <span className="tool-open">Open tool <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" /></span>
      </div>
      <span className="tool-card-corner"><ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" /></span>
    </a>
  )
}
