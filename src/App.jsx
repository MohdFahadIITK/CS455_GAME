import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
import EndingPageLoss from './Components/EndingPageLoss';
import EndingPageWin from './Components/EndingPageWin';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/CS455_GAME/' element={<LandingPage />} />
        <Route path='/CS455_GAME/L/' element={<EndingPageLoss/>}/>
        <Route path='/CS455_GAME/W/' element={<EndingPageWin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
