import { tools } from './tools'

export const site = {
  name: 'LunarPing',
  url: 'https://lunarping.com/',
  title: 'LunarPing — Developer, Productivity & Career Tools',
  description: 'Discover LunarPing’s focused web apps: an API playground, Markdown viewer, interview prep, job application tracker, Kundli tools, and more.',
  language: 'en',
  creator: { name: 'Shekhar Roy', url: 'https://shekharroy.com/' },
  image: {
    url: 'https://lunarping.com/og-image.png',
    width: 1200,
    height: 630,
    alt: 'LunarPing — One home. Many useful tools.',
  },
} as const

export function getSitemapUrls() {
  const hostname = new URL(site.url).hostname
  const toolUrls = [...tools]
    .sort((a, b) => a.priority - b.priority)
    .map((tool) => new URL(tool.url))
    .filter((url) => url.protocol === 'https:' && url.hostname.endsWith(`.${hostname}`))
    .map((url) => url.href)

  return [...new Set([site.url, ...toolUrls])]
}

export function getStructuredData() {
  const orderedTools = [...tools].sort((a, b) => a.priority - b.priority)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${site.url}#creator`,
        name: site.creator.name,
        url: site.creator.url,
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}#website`,
        name: site.name,
        url: site.url,
        description: site.description,
        inLanguage: site.language,
        publisher: { '@id': `${site.url}#creator` },
      },
      {
        '@type': 'CollectionPage',
        '@id': `${site.url}#webpage`,
        name: site.title,
        url: site.url,
        description: site.description,
        inLanguage: site.language,
        isPartOf: { '@id': `${site.url}#website` },
        author: { '@id': `${site.url}#creator` },
        mainEntity: { '@id': `${site.url}#tools` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: site.image.url,
          width: site.image.width,
          height: site.image.height,
          caption: site.image.alt,
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${site.url}#tools`,
        name: 'LunarPing tools',
        numberOfItems: orderedTools.length,
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        itemListElement: orderedTools.map((tool, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'WebApplication',
            name: tool.name,
            url: tool.url,
            description: tool.description,
            applicationCategory: tool.category,
          },
        })),
      },
    ],
  }
}
