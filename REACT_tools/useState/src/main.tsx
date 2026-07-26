import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Switch from './Switch.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Switch title="Happy" color="blue" />
  </StrictMode>,
)
