import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { EstiloGlobal } from './Tema/EstiloGlobal.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EstiloGlobal/>
    <App />
  </React.StrictMode>,
)
