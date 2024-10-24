import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
let vr = 'hi'
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App />
    <h1> Todo APP</h1>
    <p> Chatro League has  banned today {new Date().getFullYear()} </p>
  </StrictMode>,
)
