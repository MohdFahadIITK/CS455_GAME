/* eslint-disable react/prop-types */
import React from 'react';
import PlayButton from './PlayButton';
import WelcomeUser from './WelcomeUser';
import myImage from '../assets/pexels-jurie-maree-3665535-5519470.jpg';
import Rules from './Rules';
import LeaderBoardButton from './LeaderBoardButton';

export default function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${myImage})`, 
        backgroundSize: 'cover',  // Ensures the image covers the entire div
        backgroundPosition: 'center',  // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        height: '100vh',  // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <WelcomeUser />
      <div>
        <div className="flex flex-col items-center pt-4">
          <PlayButton />
        </div>
        <div className="flex flex-col items-center pt-4">
          <LeaderBoardButton/>
        </div>
      </div>
      <Rules/> 
    </div>
  );
}
