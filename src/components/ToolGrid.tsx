import { useMemo, useState } from 'react'
import { ArrowUpRight, SearchX } from 'lucide-react'
import { tools } from '../data/tools'
import type { ToolCategory } from '../types/tool'
import { ToolCard } from './ToolCard'
import { ToolSearch } from './ToolSearch'

const orderedTools = [...tools].sort((a, b) => a.priority - b.priority)
const categories = Array.from(new Set(orderedTools.map((tool) => tool.category)))

export function ToolGrid() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<ToolCategory | 'All'>('All')
  const normalizedQuery = query.trim().toLocaleLowerCase()
  const visibleTools = useMemo(() => orderedTools.filter((tool) => {
    const categoryMatches = category === 'All' || tool.category === category
    const queryMatches = !normalizedQuery || `${tool.name} ${tool.description} ${tool.category}`.toLocaleLowerCase().includes(normalizedQuery)
    return categoryMatches && queryMatches
  }), [category, normalizedQuery])
  const showFeaturedLayout = category === 'All' && !normalizedQuery

  return (
    <section className="tools-section section-shell" id="tools" aria-labelledby="tools-title">
      <div className="container">
        <div className="section-kicker"><span>01 / THE COLLECTION</span><span className="kicker-line" /></div>
        <div className="section-heading-row">
          <div><h2 id="tools-title">Explore <span>LunarPing</span></h2><p>A growing collection of focused tools. Each one does one job well.</p></div>
          <span className="section-count">{String(orderedTools.length).padStart(2, '0')} TOOLS <ArrowUpRight size={14} aria-hidden="true" /></span>
        </div>
        <ToolSearch query={query} onQueryChange={setQuery} category={category} onCategoryChange={setCategory} categories={categories} />
        <div className="result-count" role="status" aria-live="polite">SHOWING {String(visibleTools.length).padStart(2, '0')} / {String(orderedTools.length).padStart(2, '0')}</div>
        {visibleTools.length ? (
          <div className={`tool-grid ${showFeaturedLayout ? 'tool-grid-featured' : 'tool-grid-filtered'}`}>
            {visibleTools.map((tool) => <ToolCard key={tool.slug} tool={tool} number={tool.priority} total={orderedTools.length} featuredLayout={showFeaturedLayout} />)}
          </div>
        ) : (
          <div className="tool-empty"><SearchX size={28} strokeWidth={1.2} aria-hidden="true" /><h3>No tools found</h3><p>Try another search or choose a different category.</p><button type="button" onClick={() => { setQuery(''); setCategory('All') }}>Clear filters <ArrowUpRight size={15} aria-hidden="true" /></button></div>
        )}
      </div>
    </section>
  )
}
