import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import { escapeHtml, getSeoMarkup, getSitemapUrls, site } from './src/data/site'

function seo(): Plugin {
  const sitemapEntries = getSitemapUrls().map(url => `  <url>\n    <loc>${escapeHtml(url)}</loc>\n  </url>`).join('\n')
  const crawlFiles = {
    'robots.txt': { type: 'text/plain; charset=utf-8', content: `User-agent: *\nAllow: /\n\nSitemap: ${site.url}sitemap.xml\n` },
    'sitemap.xml': { type: 'application/xml; charset=utf-8', content: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n` },
  }
  return {
    name: 'lunarping-seo',
    transformIndexHtml(html, context) {
      const path = context.originalUrl?.split('?')[0] ?? '/'
      return html.replace('<!-- seo -->', `<!-- seo:start -->\n    ${getSeoMarkup(path)}\n    <!-- seo:end -->`)
    },
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const path = request.url?.split('?')[0] ?? '/'
        const file = Object.hasOwn(crawlFiles, path.slice(1)) ? crawlFiles[path.slice(1) as keyof typeof crawlFiles] : undefined
        if (file) { response.setHeader('Content-Type', file.type); response.end(file.content); return }
        if (/^\/app(?:\/privacy)?\/?$/.test(path)) request.url = '/index.html'
        next()
      })
    },
    configurePreviewServer(server) {
      // Preview doesn't interpret a static host's _redirects file.
      const output = resolve(server.config.root, server.config.build.outDir)
      const pageFiles: Record<string, string> = {
        '/': 'index.html', '/index.html': 'index.html',
        '/app': 'app/index.html', '/app/index.html': 'app/index.html',
        '/app/privacy': 'app/privacy/index.html', '/app/privacy/index.html': 'app/privacy/index.html',
        '/404.html': '404.html',
      }
      server.middlewares.use((request, response, next) => {
        const path = (request.url ?? '/').split('?')[0].replace(/\/+$/, '') || '/'
        const file = Object.hasOwn(pageFiles, path) ? pageFiles[path] : undefined
        if (!file) return next()
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.end(readFileSync(resolve(output, file), 'utf8'))
      })
      const notFoundHtml = readFileSync(resolve(output, '404.html'), 'utf8')
      return () => server.middlewares.use((_request, response) => {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.end(notFoundHtml)
      })
    },
    generateBundle() {
      for (const [fileName, file] of Object.entries(crawlFiles)) this.emitFile({ type: 'asset', fileName, source: file.content })
    },
  }
}

export default defineConfig({ appType: 'mpa', plugins: [tailwindcss(), seo()] })
