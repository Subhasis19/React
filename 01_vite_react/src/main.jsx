import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hello from './demo.jsx'

createRoot(document.getElementById('root')).render(
  <>    
  <Hello/>
  <App/>
  </>
)
