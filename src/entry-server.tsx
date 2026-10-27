import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
export { getSeoMarkup, routes } from './data/site'

export function render(path = '/') {
  const copyrightYear = new Date().getFullYear()
  const html = renderToString(<StrictMode><App path={path} copyrightYear={copyrightYear} /></StrictMode>)
  return { html, copyrightYear }
}
