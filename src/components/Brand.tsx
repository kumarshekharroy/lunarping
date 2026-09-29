export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-lockup">
      <svg className="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="19.5" cy="20" r="14.5" stroke="currentColor" strokeWidth="1.3" opacity=".48" />
        <path d="M20 6.5A13.5 13.5 0 1 0 32.8 25a15 15 0 1 1-12.8-18.5Z" fill="currentColor" />
        <circle cx="34" cy="8" r="3" fill="#81DFE6" />
      </svg>
      {!compact && <span className="brand-name">LunarPing<span className="brand-period">.</span></span>}
    </span>
  )
}
