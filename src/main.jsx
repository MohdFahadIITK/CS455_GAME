import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './Components/LandingPage.jsx'
import EndingPageLoss from './Components/EndingPageLoss.jsx'

const router = createBrowserRouter([
  {
    path : "/CS455_GAME/",
    element : <App/>,
    children : [
      {
        path : "/CS455_GAME/",
        element : <LandingPage/>
      },
      {
        path : "/CS455_GAME/L",
        element : <EndingPageLoss/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
