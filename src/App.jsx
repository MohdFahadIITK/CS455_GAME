import { useState } from 'react';
import { Link,Outlet } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
import EndingPageLoss from './Components/EndingPageLoss';
import EndingPageWin from './Components/EndingPageWin';

function App() {
  
  return (
    <>
      <Outlet/>
    </>
  );
}

export default App;
