@@ -0,0 +1,13 @@
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HelmetProvider } from 'react-helmet-async'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HelmetProvider>
          <App />
      </HelmetProvider>
  </StrictMode>,
)
