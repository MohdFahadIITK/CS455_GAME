/* eslint-disable react/prop-types */
import React from 'react';
import myGifZero from '../assets/Zero.gif';
import myGifOne from '../assets/One.gif';
import myGifTwo from '../assets/Two.gif';
import myGifThree from '../assets/Three.gif';
import myGifFour from '../assets/Four.gif';
import myGifSix from '../assets/Six.gif';
import myGifOut from '../assets/Out.gif';

export default function GifComponent({ currentScore }) {
  let gifSrc;

  // Determine the GIF source based on the score
  if (currentScore === 0) {
    gifSrc = myGifZero;
  } else if (currentScore === 1) {
    gifSrc = myGifOne;
  } else if (currentScore === 2) {
    gifSrc = myGifTwo;
  } else if (currentScore === 3) {
    gifSrc = myGifThree;
  } else if (currentScore === 4) {
    gifSrc = myGifFour;
  } else if (currentScore === 6) {
    gifSrc = myGifSix;
  } else {
    gifSrc = myGifOut; // Default GIF for other scores
  }

  return (
    <div className="p-5 h-1/2">
      <div className="flex justify-center items-center h-full w-full p-5 border-black border-2">
        {/* Render the selected GIF */}
        <img 
          src={gifSrc} 
          alt={`Gif for score ${currentScore}`} 
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}
