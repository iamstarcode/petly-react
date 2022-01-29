import '@/styles/globals.css'

import App from '@/app'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

const ROOT = document.getElementById('__app') as HTMLElement

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  ROOT
)
