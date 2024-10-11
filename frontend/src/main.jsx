import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './Components/LandingPage.jsx'
import EndingPage from './Components/EndingPage.jsx'
import Play from './Components/Play.jsx'
import LeaderBoard from './Components/LeaderBoard.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'

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
        path : "/CS455_GAME/GameOver",
        element : <EndingPage/>
      },
      {
        path : "/CS455_GAME/play",
        element : <Play/>
      },
      {
        path : "/CS455_GAME/LeaderBoard",
        element : <LeaderBoard/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
