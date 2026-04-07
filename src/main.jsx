import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from  './conponent/Navbar'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <div>
        <Navbar />
        </div>
    </StrictMode>
    
)
