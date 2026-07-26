import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GoodDeeds from './GoodDeeds.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoodDeeds />
  </StrictMode>,
)
