import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Page } from './stories/Page'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Page />
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://ali.js.org/">Ali Bouhrouche</a>.
    </div>
  </React.StrictMode>
)
