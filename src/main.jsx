import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ShortProvider } from './context/ShortContext.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <ShortProvider >
    <App />
  </ShortProvider>
  // </StrictMode>,
)
