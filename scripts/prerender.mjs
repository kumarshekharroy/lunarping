import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const root = fileURLToPath(new URL('../', import.meta.url))
const server = await createServer({ root, configFile: false, appType: 'custom', server: { middlewareMode: true, hmr: false, ws: false, watch: null }, optimizeDeps: { noDiscovery: true, include: [] }, esbuild: { jsx: 'automatic' } })
try {
  const { render, getSeoMarkup, routes } = await server.ssrLoadModule('/src/entry-server.tsx')
  const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
  const placeholder = '<div id="root"></div>'
  if (!template.includes(placeholder) || !template.includes('<!-- seo:start -->')) throw new Error('Prerender failed: HTML placeholders are missing.')
  for (const path of [...routes, '/404']) {
    const { html, copyrightYear } = render(path)
    const page = template.replace(placeholder, () => `<div id="root" data-copyright-year="${copyrightYear}" data-path="${path}">${html}</div>`).replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, () => `<!-- seo:start -->\n${getSeoMarkup(path)}\n<!-- seo:end -->`)
    const output = path === '/404' ? new URL('../dist/404.html', import.meta.url) : new URL(`../dist${path === '/' ? '' : path}/index.html`, import.meta.url)
    await mkdir(new URL('.', output), { recursive: true })
    await writeFile(output, page)
    console.log(`Prerendered ${path} with page metadata and content.`)
  }
} finally { await server.close() }
