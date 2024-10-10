/* eslint-disable react/prop-types */
import React from 'react';
import myImage from '../assets/pexels-jurie-maree-3665535-5519470.jpg';
import Rules from './Rules';
import SignInSignUp from './SignInSignUp';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-100" style={{
        backgroundImage: `url(${myImage})`, 
        backgroundSize: 'cover',  // Ensures the image covers the entire div
        backgroundPosition: 'center',  // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        height: '100vh',  // Full viewport height
        display: 'flex',
      }}>
        <div className="flex w-full h-2/3 ">
          <div className='flex w-1/2'>

          </div>
          <div className='flex w-1/2'>
            <SignInSignUp/>
          </div>
        </div>
        <div className="flex w-full h-1/3">
            <Rules/>
        </div>
    </div>
  );
}
