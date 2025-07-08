import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ShortProvider } from './context/ShortContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <SearchProvider>
    <ShortProvider >
      <App />
    </ShortProvider>
  </SearchProvider>
  // </StrictMode>,
)
