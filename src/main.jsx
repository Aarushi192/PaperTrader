import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Load order matters here, same as the <link> order in the old market.html:
// tokens first (defines the variables), then base (reset), then components.
import './styles/tokens.css'
import './styles/base.css'
import './styles/stock-card.css'
import './styles/market.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
