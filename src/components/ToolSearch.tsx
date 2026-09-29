import { Search, X } from 'lucide-react'
import type { ToolCategory } from '../types/tool'

interface ToolSearchProps {
  query: string
  onQueryChange: (query: string) => void
  category: ToolCategory | 'All'
  onCategoryChange: (category: ToolCategory | 'All') => void
  categories: ToolCategory[]
}

export function ToolSearch({ query, onQueryChange, category, onCategoryChange, categories }: ToolSearchProps) {
  return (
    <div className="tool-controls">
      <div className="search-field">
        <Search size={18} strokeWidth={1.7} aria-hidden="true" />
        <label className="sr-only" htmlFor="tool-search">Search tools by name, description, or category</label>
        <input id="tool-search" type="search" placeholder="Search tools..." autoComplete="off" value={query} onChange={(event) => onQueryChange(event.target.value)} />
        {query && <button type="button" className="search-clear" onClick={() => onQueryChange('')} aria-label="Clear search"><X size={16} /></button>}
        <span className="search-shortcut" aria-hidden="true">⌕</span>
      </div>
      <div className="category-filters" role="group" aria-label="Filter tools by category">
        {(['All', ...categories] as const).map((option) => (
          <button key={option} type="button" className={category === option ? 'filter active' : 'filter'} aria-pressed={category === option} onClick={() => onCategoryChange(option)}>{option}</button>
        ))}
      </div>
    </div>
  )
}
