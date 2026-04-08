import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProviderContext from './components/Authentication/ProviderContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <ProviderContext>
      <App/>
    </ProviderContext>
   </BrowserRouter>
  </StrictMode>,
)
