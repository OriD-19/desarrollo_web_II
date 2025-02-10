import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SimpleFormWithCustomHook from './useEffect/SimpleFormWithCustomHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleFormWithCustomHook />
  </StrictMode>,
)
