import React from 'react';
import myGifZero from '../assets/Zero.gif';
import myGifOne from '../assets/One.gif';
import myGifTwo from '../assets/Two.gif';
import myGifThree from '../assets/Three.gif';
import myGifFour from '../assets/Four.gif';
import myGifSix from '../assets/Six.gif';
import myGifOut from '../assets/Out.gif';

export default function GifComponent({ score }) {
  let gifSrc;

  // Determine the GIF source based on the score
  if (score === 0) {
    gifSrc = myGifZero;
  } else if (score === 1) {
    gifSrc = myGifOne;
  } else if (score === 2) {
    gifSrc = myGifTwo;
  } else if (score === 3) {
    gifSrc = myGifThree;
  } else if (score === 4) {
    gifSrc = myGifFour;
  } else if (score === 6) {
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
          alt={`Gif for score ${score}`} 
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}
