export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand-lockup">
      <img className="brand-mark" src="/app/icon-64.png" width="40" height="40" alt="" />
      {!compact && <span className="brand-name">LunarPing<span className="brand-period">.</span></span>}
    </span>
  )
}
