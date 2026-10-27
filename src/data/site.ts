import { tools } from './tools'
import { app } from './app'

export const site = {
  name: 'LunarPing',
  url: 'https://lunarping.com/',
  title: 'LunarPing — Made for the Curious',
  description: 'Explore LunarPing: Sky Map & Alarms, Kitna Lagega for construction estimates, and independent developer and productivity tools by Shekhar Roy.',
  language: 'en',
  creator: { name: 'Shekhar Roy', url: 'https://shekharroy.com/' },
  image: { url: 'https://lunarping.com/og-image.png', width: 1200, height: 630, alt: 'LunarPing — Sky Map & Alarms and independent tools. Made for the curious.' },
} as const

export const routes = ['/', '/app', '/app/privacy'] as const
export type SiteRoute = typeof routes[number]

export function getPageMetadata(path: string) {
  const route = path.split('?')[0].replace(/\/+$/, '').replace(/\/index\.html$/, '') || '/'
  if (route === '/app') return { title: app.name + ' — Explore Your Sky', description: app.tagline + ' Discover the Android app’s sky map, live camera finder, celestial alarms, and offline exploration.', url: site.url + 'app', index: true }
  if (route === '/app/privacy') return { title: 'LunarPing App Privacy Policy — Shekhar Roy', description: 'How LunarPing: Sky Map & Alarms handles location, camera access, local data, optional online services, and privacy choices. Updated 27 October 2026.', url: site.url + 'app/privacy', index: true }
  if (route === '/') return { title: site.title, description: site.description, url: site.url, index: true }
  return { title: 'Page not found — LunarPing', description: 'Explore the LunarPing app and independent tool collection.', url: new URL(route, site.url).href, index: false }
}

export function getSitemapUrls() {
  const hostname = new URL(site.url).hostname
  const toolUrls = [...tools].sort((a, b) => a.priority - b.priority).map(tool => new URL(tool.url)).filter(url => url.protocol === 'https:' && url.hostname.endsWith(`.${hostname}`)).map(url => url.href)
  return [...new Set([...routes.map(path => new URL(path, site.url).href), ...toolUrls])]
}

export function getStructuredData(path = '/') {
  const page = getPageMetadata(path)
  const orderedTools = [...tools].sort((a, b) => a.priority - b.priority)
  const graph: object[] = [
    { '@type': 'Person', '@id': `${site.url}#creator`, name: site.creator.name, url: site.creator.url },
    { '@type': 'WebSite', '@id': `${site.url}#website`, name: site.name, url: site.url, description: site.description, inLanguage: site.language, publisher: { '@id': `${site.url}#creator` } },
    { '@type': path === '/' ? 'CollectionPage' : 'WebPage', '@id': `${page.url}#webpage`, name: page.title, url: page.url, description: page.description, inLanguage: site.language, isPartOf: { '@id': `${site.url}#website` }, author: { '@id': `${site.url}#creator` }, ...(path === '/' ? { mainEntity: { '@id': `${site.url}#tools` } } : path === '/app' ? { mainEntity: { '@id': `${site.url}app#application` } } : {}) },
  ]
  if (path === '/') graph.push({ '@type': 'ItemList', '@id': `${site.url}#tools`, name: 'LunarPing tools', numberOfItems: orderedTools.length, itemListOrder: 'https://schema.org/ItemListOrderAscending', itemListElement: orderedTools.map((tool, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'WebApplication', name: tool.name, url: tool.url, description: tool.description, applicationCategory: tool.category } })) })
  if (path === '/app') graph.push({ '@type': 'MobileApplication', '@id': `${site.url}app#application`, name: app.name, description: app.tagline, url: `${site.url}app`, operatingSystem: 'Android', applicationCategory: 'EducationalApplication', image: `${site.url}app/icon.webp`, author: { '@id': `${site.url}#creator` }, ...(app.downloadUrl ? { downloadUrl: app.downloadUrl } : {}) })
  return { '@context': 'https://schema.org', '@graph': graph }
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!)
}

export function getSeoMarkup(path: string) {
  const page = getPageMetadata(path)
  const meta = (key: string, value: string, property = false) => `<meta ${property ? 'property' : 'name'}="${key}" content="${escapeHtml(value)}" />`
  return [
    `<title>${escapeHtml(page.title)}</title>`,
    `<link rel="canonical" href="${escapeHtml(page.url)}" />`,
    meta('description', page.description), meta('author', site.creator.name), meta('robots', page.index ? 'index, follow, max-image-preview:large' : 'noindex, follow'),
    ...Object.entries({ type: 'website', site_name: site.name, title: page.title, description: page.description, url: page.url, image: site.image.url, 'image:type': 'image/png', 'image:width': String(site.image.width), 'image:height': String(site.image.height), 'image:alt': site.image.alt }).map(([key,value]) => meta(`og:${key}`, value, true)),
    ...Object.entries({ card: 'summary_large_image', title: page.title, description: page.description, image: site.image.url, 'image:alt': site.image.alt }).map(([key,value]) => meta(`twitter:${key}`, value)),
    `<script type="application/ld+json">${JSON.stringify(getStructuredData(path)).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')
}
