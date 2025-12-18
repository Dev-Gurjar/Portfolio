
import '../tailwind.css'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WipOverlay from "./components/WipOverlay";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <WipOverlay ms={2500} /> {/* show for 2.5s */}
  </StrictMode>,
)
