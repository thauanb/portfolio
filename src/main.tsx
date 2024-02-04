import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBarx from './Header.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBarx/>
    <App />
  </React.StrictMode>,
)
