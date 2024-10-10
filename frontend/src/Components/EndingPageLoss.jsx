/* eslint-disable react/prop-types */
import React from 'react';
import TryAgainButton from './TryAgainButton';
import EndPageContentLoss from './EndPageContentLoss';
import myImage from '../assets/pexels-jurie-maree-3665535-5519470.jpg';

export default function EndingPageLoss() {
  return (
    <div
      style={{
        backgroundImage: `url(${myImage})`, // Use `url()` to apply the image
        backgroundSize: 'cover',  // Ensures the image covers the entire div
        backgroundPosition: 'center',  // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        height: '100vh',  // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <EndPageContentLoss />
      <TryAgainButton />
    </div>
  );
}
