// index.js or main entry file
import React from 'react'
import ReactDOM from 'react-dom/client' // For React 18+
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
