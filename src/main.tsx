import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/manrope'
import './index.css'
import App from './App'

const root = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <App copyrightYear={Number(root.dataset.copyrightYear) || undefined} />
  </React.StrictMode>
)

if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app)
} else {
  ReactDOM.createRoot(root).render(app)
}
