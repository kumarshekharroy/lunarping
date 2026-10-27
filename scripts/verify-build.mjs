import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const root = new URL('../', import.meta.url)
const read = path => readFile(new URL(path, root), 'utf8')
const pages = [
  ['/', 'dist/index.html', 'https://lunarping.com/', 'Made for the'],
  ['/app', 'dist/app/index.html', 'https://lunarping.com/app', 'The sky is closer'],
  ['/app/privacy', 'dist/app/privacy/index.html', 'https://lunarping.com/app/privacy', 'Privacy policy'],
]
const htmlPages = new Map()
for (const [path, file, canonical, heading] of pages) {
  const html = await read(file)
  htmlPages.set(path, html)
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${path}: one main heading`)
  assert.ok(html.includes(heading), `${path}: prerendered content`)
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`), `${path}: canonical`)
  assert.ok(html.includes(`property="og:url" content="${canonical}"`), `${path}: sharing URL`)
  assert.ok(html.includes('name="description"'), `${path}: description`)
  assert.ok(html.includes('href="/app/privacy"'), `${path}: privacy navigation`)
  const schema = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
  assert.ok(schema, `${path}: structured data`)
  assert.ok(JSON.parse(schema[1])['@graph'].some(item => item.url === canonical), `${path}: structured page URL`)
}
const home = htmlPages.get('/')
for (const url of ['https://endpoint.lunarping.com', 'https://md.lunarping.com', 'https://fullstack-prep.lunarping.com', 'https://jobdesk.lunarping.com', 'https://kundli.lunarping.com']) assert.ok(home.includes(`href="${url}"`), `Preserved tool link: ${url}`)
assert.ok(home.includes('id="tool-search"'), 'Search is rendered')
assert.ok(home.includes('Filter tools by category'), 'Filters are rendered')
assert.ok(home.includes('href="https://kitnalagega.com"'), 'Kitna Lagega links to its own website')
assert.ok(home.indexOf('id="hero-title"') < home.indexOf('id="kitna-title"') && home.indexOf('id="kitna-title"') < home.indexOf('id="tools"'), 'Kitna Lagega is the second highlight, before the tool hub')

const decode = html => html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ')
const policy = await read('src/data/app-privacy.txt')
const policyHtml = decode(htmlPages.get('/app/privacy'))
for (const paragraph of policy.trim().split(/\n\s*\n/).slice(1)) {
  // Heading and following paragraph share a source block. Check each line so
  // inserted section numbers and accessible links don't affect text integrity.
  for (const line of paragraph.split('\n')) assert.ok(policyHtml.includes(line.replace(/\s+/g,' ')), `Policy text preserved: ${line.slice(0,70)}`)
}
const sitemap = await read('dist/sitemap.xml')
for (const [, , canonical] of pages) assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), `Sitemap contains ${canonical}`)
const notFound = await read('dist/404.html')
assert.ok(notFound.includes('noindex, follow') && notFound.includes('This page is out of orbit.'), 'Branded, non-indexed 404')
for (const [path, html] of htmlPages) {
  for (const [, href] of html.matchAll(/href="(\/[^"#]*|#[^"]+)"/g)) {
    const [destination, fragment] = href.split('#')
    if (destination && !htmlPages.has(destination)) continue
    if (!fragment) continue
    assert.ok((htmlPages.get(destination || path)).includes(`id="${fragment}"`), `Valid internal fragment ${path}: ${href}`)
  }
}
console.log('Verified static routes, page SEO, structured data, tool links, policy integrity, sitemap, fragments, and 404.')

if (process.argv[2]) {
  const base = new URL(process.argv[2])
  for (const [path, , canonical, heading] of pages) {
    for (const suffix of path === '/' ? [''] : ['', '/', '?route-check=1']) {
      const response = await fetch(new URL(path + suffix, base))
      const html = await response.text()
      assert.equal(response.status, 200, `HTTP 200: ${path + suffix}`)
      assert.ok(html.includes(heading) && html.includes(`href="${canonical}"`), `Correct page at ${path + suffix}`)
    }
  }
  const response = await fetch(new URL('/missing-page', base))
  assert.equal(response.status, 404, 'Unknown route returns HTTP 404')
  assert.ok((await response.text()).includes('This page is out of orbit.'), 'Unknown route uses the branded 404')
  console.log('Verified HTTP responses for clean URLs, slash variants, query strings, and unknown routes.')
}
