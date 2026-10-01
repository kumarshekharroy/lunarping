import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type HtmlTagDescriptor, type Plugin } from 'vite'
import { getSitemapUrls, getStructuredData, site } from './src/data/site'

function escapeXml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  })[character]!)
}

function seo(): Plugin {
  const sitemapEntries = getSitemapUrls()
    .map((url) => `  <url>\n    <loc>${escapeXml(url)}</loc>\n  </url>`)
    .join('\n')
  const crawlFiles = {
    'robots.txt': {
      type: 'text/plain; charset=utf-8',
      content: `User-agent: *\nAllow: /\n\nSitemap: ${site.url}sitemap.xml\n`,
    },
    'sitemap.xml': {
      type: 'application/xml; charset=utf-8',
      content: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`,
    },
  }

  return {
    name: 'lunarping-seo',
    transformIndexHtml() {
      const tags: HtmlTagDescriptor[] = [
        { tag: 'title', children: site.title },
        { tag: 'link', attrs: { rel: 'canonical', href: site.url } },
        { tag: 'meta', attrs: { name: 'description', content: site.description } },
        { tag: 'meta', attrs: { name: 'author', content: site.creator.name } },
        { tag: 'meta', attrs: { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' } },
      ]
      const openGraph = {
        type: 'website',
        site_name: site.name,
        title: site.title,
        description: site.description,
        url: site.url,
        image: site.image.url,
        'image:type': 'image/png',
        'image:width': String(site.image.width),
        'image:height': String(site.image.height),
        'image:alt': site.image.alt,
      }
      const twitter = {
        card: 'summary_large_image',
        title: site.title,
        description: site.description,
        image: site.image.url,
        'image:alt': site.image.alt,
      }

      for (const [key, content] of Object.entries(openGraph)) {
        tags.push({ tag: 'meta', attrs: { property: `og:${key}`, content } })
      }
      for (const [key, content] of Object.entries(twitter)) {
        tags.push({ tag: 'meta', attrs: { name: `twitter:${key}`, content } })
      }
      tags.push({
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        // Keep catalogue text from terminating the script element.
        children: JSON.stringify(getStructuredData()).replace(/</g, '\\u003c'),
      })

      return tags.map((tag) => ({ ...tag, injectTo: 'head' }))
    },
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const path = request.url?.split('?')[0].slice(1)
        if (!path || !Object.hasOwn(crawlFiles, path)) return next()
        const file = crawlFiles[path as keyof typeof crawlFiles]
        response.setHeader('Content-Type', file.type)
        response.end(file.content)
      })
    },
    generateBundle() {
      for (const [fileName, file] of Object.entries(crawlFiles)) {
        this.emitFile({ type: 'asset', fileName, source: file.content })
      }
    },
  }
}

export default defineConfig({
  // This is a single static page; missing paths must not fall back to its HTML.
  appType: 'mpa',
  plugins: [tailwindcss(), seo()],
})
