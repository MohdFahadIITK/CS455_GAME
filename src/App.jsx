import { useState } from 'react';
import { Link,Outlet } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
import EndingPageLoss from './Components/EndingPageLoss';
import EndingPageWin from './Components/EndingPageWin';

function App() {
  
  return (
    <>
      <nav>
        <Link to = "/CS455_GAME/">Landing</Link>
        <Link to = "/CS455_GAME/L">Ending</Link>
      </nav>
      <Outlet/>
    </>
  );
}

export default App;
