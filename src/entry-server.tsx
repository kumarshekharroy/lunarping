import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

export function render() {
  const copyrightYear = new Date().getFullYear()
  const html = renderToString(<StrictMode><App copyrightYear={copyrightYear} /></StrictMode>)
  return { html, copyrightYear }
}
