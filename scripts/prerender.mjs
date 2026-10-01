import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const root = fileURLToPath(new URL('../', import.meta.url))
const output = new URL('../dist/index.html', import.meta.url)
const server = await createServer({
  root,
  configFile: false,
  appType: 'custom',
  server: { middlewareMode: true, hmr: false, ws: false, watch: null },
  optimizeDeps: { noDiscovery: true, include: [] },
  esbuild: { jsx: 'automatic' },
})

try {
  const { render } = await server.ssrLoadModule('/src/entry-server.tsx')
  const { html, copyrightYear } = render()
  const template = await readFile(output, 'utf8')
  const placeholder = '<div id="root"></div>'

  if (!template.includes(placeholder)) {
    throw new Error('Prerender failed: the HTML root placeholder is missing.')
  }

  // Use a callback so dollar signs in page content stay literal.
  await writeFile(output, template.replace(placeholder, () =>
    `<div id="root" data-copyright-year="${copyrightYear}">${html}</div>`,
  ))
  console.log('Prerendered homepage with all tool links in the initial HTML.')
} finally {
  await server.close()
}
