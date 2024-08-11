import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
import EndingPageLoss from './Components/EndingPageLoss';
import EndingPageWin from './Components/EndingPageWin';

function App() {
  
  return (
    <BrowserRouter basename="/CS455_GAME">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/L' element={<EndingPageLoss/>}/>
        <Route path='/W' element={<EndingPageWin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
