import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //StrictMode funziona solo nello sviliuppo e ci dà più indicazioni(errori, ecc...)
  <StrictMode>
    {/* App è il componente principale */}
    <App />
  </StrictMode>,
)
