import { useId, useState } from 'react'

type CelestialBody = 'Moon' | 'Sun' | 'Saturn'
const descriptions: Record<CelestialBody, string> = { Moon: 'Our nearest celestial companion', Sun: 'The star at the center of our days', Saturn: 'A world beyond our own' }
const craters = [[181,153,21],[240,123,12],[296,164,27],[148,231,14],[222,220,34],[288,263,17],[198,296,24],[262,322,13],[324,222,10],[150,287,8],[263,179,9],[214,163,6],[321,299,15],[173,197,7],[231,269,10]]

export function CelestialScene({ compact = false, interactive = false }: { compact?: boolean; interactive?: boolean }) {
  const [body, setBody] = useState<CelestialBody>('Moon')
  const id = useId().replace(/:/g, '')
  return (
    <div className={`celestial-scene ${compact ? 'celestial-scene-compact' : ''}`}>
      <svg className={`celestial-art celestial-art-${body.toLowerCase()}`} viewBox="0 0 480 480" fill="none" role="img" aria-label={`Decorative illustration of the ${body}`}>
        <defs>
          <radialGradient id={`${id}-moon`} cx=".3" cy=".25" r=".8"><stop stopColor="#e1e4df" /><stop offset=".48" stopColor="#8d9ca7" /><stop offset=".8" stopColor="#405566" /><stop offset="1" stopColor="#162735" /></radialGradient>
          <radialGradient id={`${id}-sun`} cx=".35" cy=".3"><stop stopColor="#fff0c5" /><stop offset=".55" stopColor="#eac17d" /><stop offset="1" stopColor="#ad632c" /></radialGradient>
          <linearGradient id={`${id}-saturn`} x1="100" y1="100" x2="320" y2="340" gradientUnits="userSpaceOnUse"><stop stopColor="#f1dfb5" /><stop offset=".5" stopColor="#c1a382" /><stop offset="1" stopColor="#625948" /></linearGradient>
          <clipPath id={`${id}-disc`}><circle cx="240" cy="240" r="113" /></clipPath>
        </defs>
        <g className="celestial-orbits" stroke="#8ca9c0">
          <circle cx="240" cy="240" r="189" opacity=".16" /><circle cx="240" cy="240" r="158" opacity=".08" />
          <ellipse cx="240" cy="240" rx="226" ry="94" transform="rotate(-32 240 240)" opacity=".3" />
          <path d="M240 35V57M240 423v22M35 240h22M423 240h22" opacity=".5" />
          <path d="M105 105l7 7M368 368l7 7M105 375l7-7M368 112l7-7" opacity=".3" />
        </g>
        {body === 'Moon' && <g><circle cx="240" cy="240" r="113" fill={`url(#${id}-moon)`} /><g clipPath={`url(#${id}-disc)`}>{craters.map(([cx,cy,r],i) => <g key={i}><circle cx={cx} cy={cy} r={r} fill="#293f51" opacity={.12 + (i % 3) * .05} /><path d={`M${cx-r*.8} ${cy+r*.3}a${r} ${r} 0 0 1 ${r*1.5} ${-r}`} stroke="#e2ecec" opacity=".16" strokeWidth="2" /></g>)}<ellipse cx="292" cy="252" rx="43" ry="118" fill="#071724" opacity=".1" /></g><circle cx="240" cy="240" r="113" stroke="#c8dae5" strokeOpacity=".2" /></g>}
        {body === 'Sun' && <g><circle cx="240" cy="240" r="130" stroke="#e6ba7c" strokeOpacity=".12" /><circle cx="240" cy="240" r="113" fill={`url(#${id}-sun)`} /><path d="M164 200c35-30 114-30 153 0M151 243c50-18 132-18 178 0M170 286c38-7 87-7 136 0" stroke="#fff0c5" opacity=".14" strokeWidth="3" /></g>}
        {body === 'Saturn' && <g><ellipse cx="240" cy="240" rx="173" ry="52" transform="rotate(-25 240 240)" stroke="#bda984" strokeWidth="13" opacity=".25" /><circle cx="240" cy="240" r="94" fill={`url(#${id}-saturn)`} /><path d="M156 210c50 21 108 25 170 9M149 244c65 26 125 23 179 6M163 279c45 18 96 20 148 5" stroke="#7d725e" strokeWidth="11" opacity=".25" /><path d="M83 308c-22-40 28-67 63-83M329 188c48-7 77-3 68 14-18 35-113 80-213 105-54 13-91 14-101 1" stroke="#d2bea0" strokeWidth="11" opacity=".8" /></g>}
        <g fill="#c7dcdf"><circle cx="116" cy="95" r="2.5" /><circle cx="399" cy="159" r="2" /><circle cx="86" cy="332" r="3" /><circle cx="333" cy="391" r="2" /><path d="M371 71v14M364 78h14" stroke="#e6ba7c" strokeWidth="1.3" /></g>
        <circle cx="402" cy="338" r="5" fill="#e6ba7c" /><circle cx="402" cy="338" r="10" stroke="#e6ba7c" strokeOpacity=".2" />
      </svg>
      {!compact && <div className="celestial-caption"><span>{body.toUpperCase()} / {descriptions[body]}</span><small>Celestial illustration · not a live sky map</small></div>}
      {interactive && <div className="celestial-selector" role="group" aria-label="Choose a celestial illustration">{(['Moon','Sun','Saturn'] as const).map(name => <button key={name} type="button" aria-pressed={body === name} onClick={() => setBody(name)}>{name}</button>)}</div>}
    </div>
  )
}
