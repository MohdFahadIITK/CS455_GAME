import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/CS455_GAME/' element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
