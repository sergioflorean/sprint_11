import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Beautifier from './Beautifier.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Beautifier />
  </StrictMode>,
)
