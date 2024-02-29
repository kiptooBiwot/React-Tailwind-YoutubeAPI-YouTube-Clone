import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Introduce router using BrowerRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
