import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './components/GlobalStyles'
import { AppRouter } from './AppRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <AppRouter />
  </StrictMode>,
)
