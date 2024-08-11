import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
import EndingPage_Loss from './Components/EndingPage_Loss';
import EndingPage_Win from './Components/EndingPage_Win';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/CS455_GAME/' element={<LandingPage />} />
        <Route path='/CS455_GAME/L/' element={<EndingPage_Loss/>}/>
        <Route path='/CS455_GAME/W/' element={<EndingPage_Win/>}/>
      </Routes>
    </Router>
  );
}

export default App;
