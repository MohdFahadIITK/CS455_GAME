/* eslint-disable react/prop-types */
import React from 'react';
import TryAgainButton from './TryAgainButton';
import EndPageContent from './EndPageContent';
import myImage from '../assets/pexels-jurie-maree-3665535-5519470.jpg';
import LeaderBoardButton from './LeaderBoardButton';
import EndingPageScoreDisplay from './EndingPageScoreDisplay';

export default function EndingPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${myImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >

      <EndPageContent />
      <div className="flex flex-col items-center pt-4 mb-20 mt-40">
        <EndingPageScoreDisplay />
      </div>
      <div className="flex flex-col items-center pt-4 mb-20">
        <TryAgainButton />
      </div>
      <div className="flex flex-col items-center pt-4">
        <LeaderBoardButton/>
      </div>
    </div>
  );
}
