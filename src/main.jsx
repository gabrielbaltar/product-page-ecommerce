import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/productPages/Home.jsx'
import Header from './components/Header/Header.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>,
)
